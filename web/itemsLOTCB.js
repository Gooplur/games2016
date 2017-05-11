/**
 * Created by skyeguy on 1/21/17.
 */
//ALL ITEMS FOR LOTCB GAME

function Item(type, x, y)
{
    this.type = type;
    this.X = x;
    this.Y = y;
    this.equipped = false; //this is for the inventory and equipping to the player.
    this.zIndex = 1;
    this.biproducts = []; //these are the accompanying items that come along with the main item being crafted.
    this.alcohol = 0;
    this.wake = 0;
    this.store = []; //these are the items you gain from opening a package utility item.

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

    this.setItemID = function()
    {
        //defaults
        this.subUtility = "none";

        // because I don't want damage to be decreased from the starting amount by the multiplyer this makes sure that it is evened out at one before taking level into consideration.
        if (player.getStrength() >= 25)
        {
            this.leveledDamageMultiple = player.getStrength();
        }
        else
        {
            this.leveledDamageMultiple = 25;
        }
        //if strength is less than 4 all weapons are 1 damage weaker unless they only do 1 damage.
        if (player.getStrength() >= 4)
        {
            this.damageHandicap = 0;
        }
        else
        {
            this.damageHandicap = 1;
        }
        //For some weapons if the player's strength is less than 25 they will get a deduction
        if (player.getStrength() >= 25)
        {
            this.damageHandicapII = 0;
        }
        else if (player.getStrength() >= 20)
        {
            this.damageHandicapII = 1;
        }
        else if (player.getStrength() >= 15)
        {
            this.damageHandicapII = 3;
        }
        else if (player.getStrength() >= 10)
        {
            this.damageHandicapII = 4;
        }
        else
        {
            this.damageHandicapII = 5;
        }

        this.superStealthNum = function(multiplyerOrAddend)
        {
            if (player.superStealth)
            {
                return multiplyerOrAddend;
            }
            else
            {
                return 0;
            }
        }

        //INDIVIDUAL ITEM DETAILS


        //FISTS (not a real item)
        if (this.type == "none")
        {
            //For All Items
            this.identity = "Fists";
            this.weight = 0;
            this.size = 10;
            this.description = "Your Fists.";
            this.intForDes = 4;
            this.intDescription = "Face Punch!";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 0;
            this.range = 1;
            this.rate = 25;
            this.damage = player.fistDamage;
            this.magicalDamage = player.getMagicHands("damage");
            this.negateArmour = 0;

            //ability
            this.ability = player.getMagicHands();
        }
        else if (this.type == "nude")
        {
            //For All Items
            this.identity = "Nakedness";
            this.weight = 0;
            this.size = 0;
            this.description = "your player's body... IN THE NUDE!!!";
            this.intForDes = 0;
            this.intDescription = "You are sooo naked right now!";

            //Define Utility
            this.utility = "worn";
            //the this.type of armour/clothing it is...
            this.subUtility = "none";
            //Utility Focused
            //protections
            this.protection = 0;
            this.toughnessRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 0;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 0;
            this.sellValue = 0;
        }

        //ACTUAL ITEMS
        else if (this.type == "coins")
        {
            //For All Items
            this.identity = "Coins";
            this.weight = 0.005;
            this.size = 6;
            this.description = "A currency that is widely accepted among the several kingdoms in the land.";
            this.intForDes = 0;
            this.intDescription = "Although they may appear to be made of solid gold, it is only actually their outermost layer that is made of gold.";

            //Define Utility
            this.utility = "currency";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1;
            this.sellValue = 1;
        }
        else if (this.type == "iceClaymore")
        {
            //For All Items
            if (player.getKnowledge() >= 6)
            {
                this.identity = "Tablet of Ice Blade";
                this.description = "Studying this magically engraved stone tablet will teach you how to summon a claymore formed of magical ice.";
                this.intForDes = 0;
                this.intDescription = "The summoned blade melts away the moment you let go of it.";
                this.buyValue = 900 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 700.
                this.sellValue = 486 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 686.
            }
            else
            {
                this.identity = "Engraved Stone Tablet";
                this.description = "There are strange symbols engraved in the stone.";
                this.intForDes = 6;
                this.intDescription = "Perhaps this stone is an artifact from an ancient culture.";
                this.buyValue = 900 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 700.
                this.sellValue = 65 + Math.floor(player.getCharisma() / 2);; // at max, sell for 90.
            }
            this.weight = 2.5;
            this.size = 13;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = Math.max(1, 4 + (1 / 12.5) * player.getConcentration() - (1 / 7) * player.getEminence());
            this.spellGroup = "Incantation";
            this.spellGenre = "Ice";
            this.spellName = "Ice Blade";
            this.spellID = "iceClaymore";
            this.spellEXP = 14 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(1, 3 + (3/50) * player.getConcentration() - (5/50) * player.getEminence());
            this.spellDescription = "Forms a magical claymore out of ice; it gains strength from your magic and it can freeze its targets. " + "  Damage: " + Math.floor(allWeapons[29].damage + allWeapons[29].magicalDamage) + "   Rate: " + Math.floor(allWeapons[29].rate) + "   Reach: " + Math.floor(allWeapons[29].range) + "   Range: " + allWeapons[29].distance + "   Energy Cost: " + Math.ceil(allWeapons[29].energyCost);
            this.spellKnowledgeRequirement = 6;
            this.spellRange = "Near";
        }
        else if (this.type == "flyingColours")
        {
            //For All Items
            if (player.getKnowledge() >= 2)
            {
                this.identity = "Scroll of Flying Colours";
                this.description = "Studying this scroll will teach you how to blast colorful lights from your palms.";
                this.intForDes = 0;
                this.intDescription = "This spell can be used to blind the target momentarily.";
                this.buyValue = 190 - Math.floor(player.getCharisma() / 1); // at max, buy for 145.
                this.sellValue = 95 + Math.floor(player.getCharisma() / 1); // at max, sell for 145.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 190 - Math.floor(player.getCharisma() / 1); // at max, buy for 145.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            if (player.getConcentration() >= 50)
            {
                this.spellCost = Math.max(1, 3 + 14 / 50 * player.getConcentration() - (1 / 6) * player.getEminence());
            }
            else
            {
                this.spellCost = Math.max(1, 1 + (1 / 15) * player.getConcentration() - (1 / 15) * player.getEminence());
            }
            this.spellGroup = "Form";
            this.spellGenre = "Illusion";
            this.spellName = "Flying Colours";
            this.spellID = "flyingColours";
            this.spellEXP = 6 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(0.1, 3 + (3/50) * player.getConcentration() - (6/50) * player.getEminence());
            this.spellDescription = "A beautiful flurry of flying orbs of colourful light bright enough to blind that which gets too close.";
            this.spellKnowledgeRequirement = 2;
            this.spellRange = "Medium";
        }
        else if (this.type == "summonFrich")
        {
            //For All Items
            if (player.getKnowledge() >= 2)
            {
                this.identity = "Scroll of Frich Summoning";
                this.description = "Studying this scroll will teach you how to magically synthesize a frich to fight for you.";
                this.intForDes = 0;
                this.intDescription = "The more concentration the caster has, the more friches can be summoned.";
                this.buyValue = 230 - Math.floor(player.getCharisma() / 1); // at max, buy for 180.
                this.sellValue = 130 + Math.floor(player.getCharisma() / 1); // at max, sell for 180.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 230 - Math.floor(player.getCharisma() / 1); // at max, buy for 180.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;

            this.spellCost = Math.max(1, 2 + 11 / 50 * player.getConcentration() - (9 / 50) * player.getEminence());

            this.spellGroup = "Form";
            this.spellGenre = "Conjuration";
            this.spellName = "Frich Summoning";
            this.spellID = "summonFrich";
            this.spellEXP = 5 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(3, 8 + (6/50) * player.getConcentration() - (11/50) * player.getEminence());
            this.spellDescription = "A blast of magical synthesis energy that forms an allied frich.";
            this.spellKnowledgeRequirement = 2;
            this.spellRange = "Near-Medium";
        }
        else if (this.type == "summonWolf")
        {
            //For All Items
            if (player.getKnowledge() >= 4)
            {
                this.identity = "Scroll of Wolf Summoning";
                this.description = "Studying this scroll will teach you how to magically synthesize a wolf to fight for you.";
                this.intForDes = 0;
                this.intDescription = "The more concentration the caster has, the more wolves can be summoned.";
                this.buyValue = 250 - Math.floor(player.getCharisma() / 1); // at max, buy for 200.
                this.sellValue = 150 + Math.floor(player.getCharisma() / 1); // at max, sell for 200.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 250 - Math.floor(player.getCharisma() / 1); // at max, buy for 180.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;

            this.spellCost = Math.max(2, 2 + 12 / 50 * player.getConcentration() - (9 / 50) * player.getEminence());

            this.spellGroup = "Form";
            this.spellGenre = "Conjuration";
            this.spellName = "Wolf Summoning";
            this.spellID = "summonWolf";
            this.spellEXP = 7 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(4, 9 + (6/50) * player.getConcentration() - (11/50) * player.getEminence());
            this.spellDescription = "A blast of magical synthesis energy that forms an allied wolf.";
            this.spellKnowledgeRequirement = 4;
            this.spellRange = "Near-Medium";
        }
        else if (this.type == "charm")
        {
            //For All Items
            if (player.getKnowledge() >= 10)
            {
                this.identity = "Scroll of Charming";
                this.description = "Studying this scroll will allow you to temporarily manipulate the will of a being.";
                this.intForDes = 0;
                this.intDescription = "The more concentration the caster has the stronger the beings the spell will be effective on.";
                this.buyValue = 790 - Math.floor(player.getCharisma() / 1); // at max, buy for 740.
                this.sellValue = 690 + Math.floor(player.getCharisma() / 1); // at max, sell for 740.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 790 - Math.floor(player.getCharisma() / 1); // at max, buy for 740.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;

            this.spellCost = Math.max(1, 2 + 6 / 50 * player.getConcentration() - (7 / 50) * player.getEminence());

            this.spellGroup = "Form";
            this.spellGenre = "Transmutation";
            this.spellName = "Charm";
            this.spellID = "charm";
            this.spellEXP = 10 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(2, 14 + (16/50) * player.getConcentration() - (26/50) * player.getEminence());
            this.spellDescription = "A charm that manipulates the target being's mind to the casters will.";
            this.spellKnowledgeRequirement = 10;
            this.spellRange = "Medium";
        }
        else if (this.type == "chasingLights")
        {
            //For All Items
            if (player.getKnowledge() >= 8)
            {
                this.identity = "Scroll of Chasing Lights";
                this.description = "Studying this scroll will teach you how to conjure spheres of light that race to the nearest beings around aside from the caster.";
                this.intForDes = 0;
                this.intDescription = "This spell is best used to find enemies during the night.";
                this.buyValue = 340 - Math.floor(player.getCharisma() / 1); // at max, buy for 290.
                this.sellValue = 190 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 290.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 340 - Math.floor(player.getCharisma() / 1); // at max, buy for 290.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = Math.max(1, 3 + 7 / 50 * player.getConcentration() - (1 / 7) * player.getEminence());
            this.spellGroup = "Incantation";
            this.spellGenre = "Illusion";
            this.spellName = "Chasing Lights";
            this.spellID = "chasingLights";
            this.spellEXP = 4 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(0.1, 3 + (6/50) * player.getConcentration() - (7/50) * player.getEminence());
            this.spellDescription = "Spheres of light that are attracted to any beings nearby.";
            this.spellKnowledgeRequirement = 8;
            this.spellRange = "Medium-Long";
        }
        else if (this.type == "repel")
        {
            //For All Items
            if (player.getKnowledge() >= 4)
            {
                this.identity = "Scroll of the Repelling Word";
                this.description = "Studying this scroll will teach you how to blast a wave of magical force that repels all within a close proximity of you.";
                this.intForDes = 0;
                this.intDescription = "This spell can be used in combination with forms or melee styles.";
                this.buyValue = 1277 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 1077.
                this.sellValue = 762 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 962.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 4;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 1277 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 1077.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = true;
            this.spellDamage = 0.5 + 0.02 * player.getConcentration();
            this.spellCost = Math.max(1, 1 + (2/50) * player.getConcentration() - (2/50) * player.getEminence());
            this.spellGroup = "Incantation";
            this.spellGenre = "Cosmic";
            this.spellName = "Repel";
            this.spellID = "repel";
            this.spellEXP = 4 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(0.65, 1 + (2/50) * player.getConcentration() - (2/50) * player.getEminence());
            this.spellDescription = "A blast of cosmic force that repels all beings within range.";
            this.spellKnowledgeRequirement = 4;
            this.spellRange = "Short";
        }
        else if (this.type == "sanctuary")
        {
            //For All Items
            if (player.getKnowledge() >= 15)
            {
                this.identity = "Scroll of Sanctuary";
                this.description = "Studying this scroll will teach you how to form a magical sanctuary circle that will restore you and your allies health and energy, as well as disintegrate all incoming non-magical projectiles.";
                this.intForDes = 0;
                this.intDescription = "";
                this.buyValue = 3200 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 3000.
                this.sellValue = 2800 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 3000.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 4;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 3200 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 3000.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellDamage = 0;
            this.spellCost = Math.max(3, 9 + (11/50) * player.getConcentration() - (17/50) * player.getEminence());
            this.spellGroup = "Incantation";
            this.spellGenre = "Cosmic";
            this.spellName = "Sanctuary";
            this.spellID = "sanctuary";
            this.spellEXP = 12 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(6, 60 + (180/50) * player.getConcentration() - (234/50) * player.getEminence());
            this.spellDescription = "A circle of magical sigils that restore ally health and energy, and disentigrate non-magical projectiles.";
            this.spellKnowledgeRequirement = 15;
            this.spellRange = "Short";
        }
        else if (this.type == "repellingWard")
        {
            //For All Items
            if (player.getKnowledge() >= 18)
            {
                this.identity = "Scroll of Repelling Ward";
                this.description = "Studying this scroll will teach you how to form a magical warding circle that will force all who are not you or your allies out of that area.";
                this.intForDes = 0;
                this.intDescription = "";
                this.buyValue = 3900 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 3800.
                this.sellValue = 3600 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 3800.
            }
            else
            {
                this.identity = "Demonic Scrawlings";
                this.description = "The markings on this scroll are clearly the work of the devil, or some powerful demonic like creature similar to him!";
                this.intForDes = 1;
                this.intDescription = "Evidence: Do you need any?";
                this.buyValue = 3900 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 3800.
                this.sellValue = 5; // at max, sell for 5.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellDamage = 0;
            this.spellCost = Math.max(1, 3 + (3/50) * player.getConcentration() - (5/50) * player.getEminence());
            this.spellGroup = "Incantation";
            this.spellGenre = "Cosmic";
            this.spellName = "Ward of Repelling";
            this.spellID = "repellingWard";
            this.spellEXP = 5 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(60, 60 + (180/50) * player.getConcentration() - (60/50) * player.getEminence());
            this.spellDescription = "A circle of magical sigils that repel all but the caster and their minions from being in the encompassed area.";
            this.spellKnowledgeRequirement = 18;
            this.spellRange = "Short";
        }
        else if (this.type == "frostWind")
        {
            //For All Items
            if (player.getKnowledge() >= 3)
            {
                this.identity = "Scroll of Frost Wind";
                this.description = "Studying this scroll will teach you how to send forth a chilling gust that freezes nearly all thing it contacts.";
                this.intForDes = 0;
                this.intDescription = "This is a staple spell for the ice discipline of magic.";
                this.buyValue = 1120 - Math.floor(player.getCharisma() / 0.414); // at max, buy for 1000.
                this.sellValue = 540 + Math.floor(player.getCharisma() / 0.125); // at max, sell for 940.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 1120 - Math.floor(player.getCharisma() / 0.414); // at max, buy for 1000.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = true;
            this.spellDamage = 0.5 + (4.5/50 * player.getConcentration());
            this.spellCost = Math.max(1, 3 + 12 / 50 * player.getConcentration() - (9 / 50) * player.getEminence());
            this.spellGroup = "Form";
            this.spellGenre = "Ice";
            this.spellName = "Frost Wind";
            this.spellID = "frostWind";
            this.spellEXP = 14 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(0.1, 8 + (10/50) * player.getConcentration() - (12/50) * player.getEminence());
            this.spellDescription = "A chilling blast of icy wind that can freeze flesh in an instant. ";
            this.spellKnowledgeRequirement = 3;
            this.spellRange = "Short-Medium";
        }
        else if (this.type == "iceSpikes")
        {
            //For All Items
            if (player.getKnowledge() >= 1)
            {
                this.identity = "Scroll of Ice Spikes";
                this.description = "Studying this scroll will teach you how to shoot spikes of ice from your hands.";
                this.intForDes = 0;
                this.intDescription = "The more powerful the caster is the more numerous and sharp the spikes will be.";
                this.buyValue = 500 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 400.
                this.sellValue = 300 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 400.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 500 - Math.floor(player.getCharisma() / 1); // at max, buy for 145.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = Math.max(1, 1 + 16 / 50 * player.getConcentration() - (13 / 50) * player.getEminence());
            this.spellGroup = "Form";
            this.spellGenre = "Ice";
            if (player.concentration >= 10)
            {
                this.spellName = "Ice Spikes";
                this.spellDescription = "Deadly spikes of magical ice sharper than any blade.";
            }
            else
            {
                this.spellName = "Ice Spike";
                this.spellDescription = "A deadly spike of magical ice sharper than any blade.";
            }
            this.spellID = "iceSpikes";
            this.spellEXP = 8 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(1, 2 + (4/50) * player.getConcentration() - (1/10) * player.getEminence());
            this.spellKnowledgeRequirement = 1;
            this.spellRange = "Medium-Long";
        }
        else if (this.type == "lifeTap")
        {
            //For All Items
            if (player.getKnowledge() >= 1)
            {
                this.identity = "Scroll of Life-Tap";
                this.description = "Studying this scroll will teach you how to transform your own lifeforce into magical energy.";
                this.intForDes = 0;
                this.intDescription = "If one is not careful with this spell they will surely die.";
                this.buyValue = 880 - Math.floor(player.getCharisma() / 1); // at max, buy for 830.
                this.sellValue = 730 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 830.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 880 - Math.floor(player.getCharisma() / 1); // at max, buy for 830.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = 0;
            this.spellGroup = "Incantation";
            this.spellGenre = "Necromancy";
            this.spellName = "Life-Tap";
            this.spellID = "lifeTap";
            this.spellDamage = 0;
            this.spellEXP = 2 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(3, 6 + (5/50) * player.getConcentration() - (8/50) * player.getEminence());
            this.spellDescription = "Drain your own lifeforce and convert it into magical energy.";
            this.spellKnowledgeRequirement = 6;
            this.spellRange = "Self";
        }
        else if (this.type == "drainingI")
        {
            //For All Items
            if (player.getKnowledge() >= 1)
            {
                this.identity = "Scroll of Draining I";
                this.description = "Studying this scroll will teach you how to cast a shadowy blast that will steel the life force of its target and give it to the caster.";
                this.intForDes = 0;
                this.intDescription = "Reading the ancient markings sends an anxious chill through your bones.";
                this.buyValue = 450 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 350.
                this.sellValue = 250 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 350.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 450 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 350.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = true;
            this.spellCost = Math.max(1, 1 + (14 / 50) * player.getConcentration() - (12 / 50) * player.getEminence());
            this.spellGroup = "Form";
            this.spellGenre = "Necromancy";
            this.spellName = "Draining I";
            this.spellID = "drainingI";
            this.spellDamage = 1 + (Math.floor(4/50 * player.getConcentration()));
            this.spellEXP = 5 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(1, 8 + (7/50) * player.getConcentration() - (12/50) * player.getEminence());
            this.spellDescription = "A shadowy blast that steels the lifeforce of its target and gives it to the caster.";
            this.spellKnowledgeRequirement = 1;
            this.spellRange = "Medium-Long";
        }
        else if (this.type == "vivification")
        {
            //For All Items
            if (player.getKnowledge() >= 20)
            {
                this.identity = "Scroll of Vivification";
                this.description = "Studying this scroll will teach you how to give life to the recently diseased.";
                this.intForDes = 4;
                this.intDescription = "If the target of this spell has been dead too long it is impossible to revive them for their soul will have already departed.";
                this.buyValue = 1239 - Math.floor(player.getCharisma() / 1.27); // at max, buy for 1200.
                this.sellValue = 1000 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 1200.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 1239 - Math.floor(player.getCharisma() / 1.27); // at max, buy for 1200.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            if (player.getConcentration() >= 50)
            {
                this.spellCost = Math.max(1, 15 + 5 / 50 * player.getConcentration() - (1 / 10) * player.getEminence());
            }
            else
            {
                this.spellCost = Math.max(1, 20 + 10 / 50 * player.getConcentration() - (1 / 10) * player.getEminence());
            }
            this.spellGroup = "Form";
            this.spellGenre = "Necromancy";
            this.spellName = "Vivification";
            this.spellID = "vivification";
            this.spellEXP = 10 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(2, 60 + (35/50) * player.getConcentration() - (65/50) * player.getEminence());
            this.spellDescription = "A manipulation of the very fabric of life and death, forcing the dead target's soul back into its body.";
            this.spellKnowledgeRequirement = 20;
            this.spellRange = "Near";
        }
        else if (this.type == "leechingTouch")
        {
            //For All Items
            if (player.getKnowledge() >= 19)
            {
                this.identity = "Tablet of Leeching Touch";
                this.description = "Studying this magically engraved stone tablet will teach you how absorb the lifeforce from your targets through your fingertips.";
                this.intForDes = 0;
                this.intDescription = "This spell does not combo with other on-touch spells.";
                this.buyValue = 1388 - Math.floor(player.getCharisma() / 1); // at max, buy for 1338.
                this.sellValue = 1288 + Math.floor(player.getCharisma() / 1); // at max, sell for 1338.
            }
            else
            {
                this.identity = "Engraved Stone Tablet";
                this.description = "There are strange symbols engraved in the stone.";
                this.intForDes = 22;
                this.intDescription = "This stone tablet seems to be some sort of deathly relic.";
                this.buyValue = 1388 - Math.floor(player.getCharisma() / 1); // at max, buy for 1328.
                this.sellValue = 466 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 666.
            }

            this.weight = 2.5;
            this.size = 13;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = true;
            this.spellCost = 13;
            this.spellGroup = "Bind";
            this.spellGenre = "Necromancy";
            this.spellName = "Leeching Touch";
            this.spellID = "leechingTouch";
            this.spellDamage = 6;
            this.spellEXP = 0;
            this.spellCooldown = 0;
            this.spellDescription = "Life force is rapidly absorbed from the victim into the caster with a single touch.";
            this.spellKnowledgeRequirement = 19;
            this.spellRange = "Near";
        }
        else if (this.type == "fireHands")
        {
            //For All Items
            if (player.getKnowledge() >= 2)
            {
                this.identity = "Scroll of Fire Hands";
                this.description = "Studying this scroll will teach you how to catch anyone that you touch aflame.";
                this.intForDes = 0;
                this.intDescription = "This spell does not combo with other on-touch spells.";
                this.buyValue = 648 - Math.floor(player.getCharisma() / 1); // at max, buy for 598.
                this.sellValue = 548 + Math.floor(player.getCharisma() / 1); // at max, sell for 598.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 648 - Math.floor(player.getCharisma() / 1); // at max, buy for 598.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = 2;
            this.spellGroup = "Bind";
            this.spellGenre = "Fire";
            this.spellName = "Fire Hands";
            this.spellID = "fireHands";
            this.spellEXP = 0;
            this.spellCooldown = 0;
            this.spellDescription = "That which is touched is set aflame.";
            this.spellKnowledgeRequirement = 2;
            this.spellRange = "Near";
        }
        else if (this.type == "chargedTouch")
        {
            //For All Items
            if (player.getKnowledge() >= 11)
            {
                this.identity = "Scroll of Charged Touch";
                this.description = "Studying this scroll will teach you how to hold a powerful electric charge in your hands.";
                this.intForDes = 0;
                this.intDescription = "This spell does not combo with other on-touch spells.";
                this.buyValue = 1246 - Math.floor(player.getCharisma() / 1); // at max, buy for 1198.
                this.sellValue = 1146 + Math.floor(player.getCharisma() / 1); // at max, sell for 1198.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 1246 - Math.floor(player.getCharisma() / 1); // at max, buy for 1198.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = true;
            this.spellCost = 5;
            this.spellGroup = "Bind";
            this.spellGenre = "Electricity";
            this.spellName = "Charged Touch";
            this.spellID = "chargedTouch";
            this.spellDamage = 1;
            this.spellEXP = 0;
            this.spellCooldown = 0;
            this.spellDescription = "That which is touched is electrocuted.";
            this.spellKnowledgeRequirement = 11;
            this.spellRange = "Near";
        }
        else if (this.type == "freezingGrasp")
        {
            //For All Items
            if (player.getKnowledge() >= 3)
            {
                this.identity = "Scroll of Freezing Grasp";
                this.description = "Studying this scroll will teach you how to make your hands exude the pure essence of coldness.";
                this.intForDes = 0;
                this.intDescription = "This spell does not combo with other on-touch spells.";
                this.buyValue = 930 - Math.floor(player.getCharisma() / 1); // at max, buy for 880.
                this.sellValue = 830 + Math.floor(player.getCharisma() / 1); // at max, sell for 880.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 930 - Math.floor(player.getCharisma() / 1); // at max, buy for 880.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = 3;
            this.spellGroup = "Bind";
            this.spellGenre = "Ice";
            this.spellName = "Freezing Grasp";
            this.spellID = "freezingGrasp";
            this.spellEXP = 0;
            this.spellCooldown = 0;
            this.spellDescription = "That which is touched is frozen.";
            this.spellKnowledgeRequirement = 3;
            this.spellRange = "Near";
        }
        else if (this.type == "sorcerer'sRaincoat")
        {
            //For All Items
            if (player.getKnowledge() >= 1)
            {
                this.identity = "Scroll of The Sorcerer's Raincoat";
                this.description = "Studying this scroll will teach you how to summon a magical energy shield around yourself.";
                this.intForDes = 19;
                this.intDescription = "The scroll has some very interesting and peculiar wording as if the mage who wrote this spell made it as a joke.";
                this.buyValue = 300 - Math.floor(player.getCharisma() / 1); // at max, buy for 250.
                this.sellValue = 200 + Math.floor(player.getCharisma() / 1); // at max, sell for 250.
            }
            else
            {
                this.identity = "Otherworldy Grocery List";
                this.description = "The markings on this scroll are incomprehensible; except for one which looks like a coat.";
                this.intForDes = 0;
                this.intDescription = "This is clearly the grocery list of an otherworldly being... Don't question it, it just is.";
                this.buyValue = 300 - Math.floor(player.getCharisma() / 1); // at max, buy for 250.
                this.sellValue = 10 + Math.floor(player.getCharisma() / 1); // at max, sell for 60.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = 1;
            this.spellGroup = "Bind";
            this.spellGenre = "Cosmic";
            this.spellID = "sorcerer'sRaincoat";
            this.spellEXP = 0;
            this.spellCooldown = 0;
            if (player.gender == "Male")
            {
                this.spellName = "The Sorcerer's Raincoat";
                this.spellDescription = "Forms a film of magical energy around the caster so that he can stay dry in the rain.";
            }
            else if (player.gender == "Female")
            {
                this.spellName = "The Sorceress's Raincoat";
                this.spellDescription = "Forms a film of magical energy around the caster so that she can stay dry in the rain.";
            }
            else if (player.gender == "Goop")
            {
                this.spellName = "The Goop's Raincoat";
                this.spellDescription = "Forms a film of magical energy around the goop so that it can stay dry in the rain.";
            }
            else
            {
                this.spellName = "The Sorcereress's Raincoat";
                this.spellDescription = "Forms a film of magical energy around the caster so that they can stay dry in the rain.";
            }
            this.spellKnowledgeRequirement = 1;
            this.spellRange = "Self";
        }
        else if (this.type == "shieldingI")
        {
            //For All Items
            if (player.getKnowledge() >= 4)
            {
                this.identity = "Scroll of Shielding I";
                this.description = "Studying this scroll will teach you how to summon a shield of magical energy around yourself.";
                this.intForDes = 0;
                this.intDescription = "You can not have multiple all-purpose shield spells active at once.";
                this.buyValue = 1300 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 1100.
                this.sellValue = 900 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 1100.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 1300 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 1100.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = 2;
            this.spellGroup = "Bind";
            this.spellGenre = "Cosmic";
            this.spellName = "Shielding I";
            this.spellID = "shieldingI";
            this.spellEXP = 0;
            this.spellCooldown = 0;
            this.spellDescription = "A basic strength magical energy shield that envelopes the caster and acts as a layer of protection.";
            this.spellKnowledgeRequirement = 4;
            this.spellRange = "Self";
        }
        else if (this.type == "shieldingII")
        {
            //For All Items
            if (player.getKnowledge() >= 6)
            {
                this.identity = "Scroll of Shielding II";
                this.description = "Studying this scroll will teach you how to summon a shield of magical energy around yourself.";
                this.intForDes = 0;
                this.intDescription = "You can not have multiple all-purpose shield spells active at once.";
                this.buyValue = 1600 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 1400.
                this.sellValue = 1200 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 1400.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 1600 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 1400.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = 5;
            this.spellGroup = "Bind";
            this.spellGenre = "Cosmic";
            this.spellName = "Shielding II";
            this.spellID = "shieldingII";
            this.spellEXP = 0;
            this.spellCooldown = 0;
            this.spellDescription = "A magical energy shield that envelopes the caster and acts as a layer of protection.";
            this.spellKnowledgeRequirement = 6;
            this.spellRange = "Self";
        }
        else if (this.type == "shieldingIII")
        {
            //For All Items
            if (player.getKnowledge() >= 15)
            {
                this.identity = "Scroll of Shielding III";
                this.description = "Studying this scroll will teach you how to summon a shield of magical energy around yourself.";
                this.intForDes = 0;
                this.intDescription = "You can not have multiple all-purpose shield spells active at once.";
                this.buyValue = 1900 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 1700.
                this.sellValue = 1500 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 1700.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 1900 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 1700.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = 9;
            this.spellGroup = "Bind";
            this.spellGenre = "Cosmic";
            this.spellName = "Shielding III";
            this.spellID = "shieldingIII";
            this.spellEXP = 0;
            this.spellCooldown = 0;
            this.spellDescription = "A reliable magical energy shield that envelopes the caster and acts as a layer of protection.";
            this.spellKnowledgeRequirement = 15;
            this.spellRange = "Self";
        }
        else if (this.type == "shieldingIV")
        {
            //For All Items
            if (player.getKnowledge() >= 21)
            {
                this.identity = "Scroll of Shielding IV";
                this.description = "Studying this scroll will teach you how to summon a shield of magical energy around yourself.";
                this.intForDes = 0;
                this.intDescription = "You can not have multiple all-purpose shield spells active at once.";
                this.buyValue = 2400 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 2200.
                this.sellValue = 2000 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 2200.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 2400 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 2200.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = 14;
            this.spellGroup = "Bind";
            this.spellGenre = "Cosmic";
            this.spellName = "Shielding IV";
            this.spellID = "shieldingIV";
            this.spellEXP = 0;
            this.spellCooldown = 0;
            this.spellDescription = "A strong magical energy shield that envelopes the caster and acts as a layer of protection.";
            this.spellKnowledgeRequirement = 21;
            this.spellRange = "Self";
        }
        else if (this.type == "shieldingV")
        {
            //For All Items
            if (player.getKnowledge() >= 32)
            {
                this.identity = "Scroll of Shielding V";
                this.description = "Studying this scroll will teach you how to summon a shield of magical energy around yourself.";
                this.intForDes = 0;
                this.intDescription = "You can not have multiple all-purpose shield spells active at once.";
                this.buyValue = 3700 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 3500.
                this.sellValue = 3300 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 3500.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 3700 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 3500.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = false;
            this.spellCost = 23;
            this.spellGroup = "Bind";
            this.spellGenre = "Cosmic";
            this.spellName = "Shielding V";
            this.spellID = "shieldingV";
            this.spellEXP = 0;
            this.spellCooldown = 0;
            this.spellDescription = "A powerful magical energy shield that envelopes the caster and acts as a layer of protection.";
            this.spellKnowledgeRequirement = 32;
            this.spellRange = "Self";
        }
        else if (this.type == "embers")
        {
            //For All Items
            if (player.getKnowledge() >= 1)
            {
                this.identity = "Scroll of Embers";
                this.description = "Studying this scroll will teach you how to cast a spiraling dance of fire.";
                this.intForDes = 0;
                this.intDescription = "Although this is a novice spell it is actually quite effective when used by skilled magi.";
                this.buyValue = 450 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 350.
                this.sellValue = 250 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 350.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 450 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 350.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 12;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = true;
            this.spellCost = Math.max(1, 1 + (1 / 12.5) * player.getConcentration() - (1 / 12.5) * player.getEminence());
            this.spellGroup = "Form";
            this.spellGenre = "Fire";
            this.spellName = "Embers";
            this.spellID = "embers";
            this.spellDamage = 3 + (0.2 * player.getConcentration());
            this.spellEXP = 9 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(0.5, 4 + (3.5/50) * player.getConcentration() - (7/50) * player.getEminence());
            this.spellDescription = "A fiery burst that forms several swirling masses of flame.";
            this.spellKnowledgeRequirement = 1;
            this.spellRange = "Near";
        }
        else if (this.type == "fireballI")
        {
            //For All Items
            if (player.getKnowledge() >= 2)
            {
                this.identity = "Scroll of Fireball I";
                this.description = "Studying this scroll will teach you how to cast a flaming hot ball of fire.";
                this.intForDes = 0;
                this.intDescription = "This scroll looks old and withered, but the magical writing is still clear enough to read.";
                this.buyValue = 750 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 650.
                this.sellValue = 550 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 650.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 750 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 350.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 14;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = true;
            this.spellCost = Math.max(2, 2 + (1 / 10) * player.getConcentration() - (1 / 10) * player.getEminence());
            this.spellGroup = "Form";
            this.spellGenre = "Fire";
            this.spellName = "Fireball I";
            this.spellID = "fireballI";
            this.spellDamage = 7.5 + 0.3 * player.getConcentration()
            this.spellEXP = 12 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(1, 5 + (3/50) * player.getConcentration() - (7/50) * player.getEminence());
            this.spellDescription = "A burning hot ball of flames projected from the caster's hands.";
            this.spellKnowledgeRequirement = 2;
            this.spellRange = "Medium-Long";
        }
        else if (this.type == "electricBolt")
        {
            //For All Items
            if (player.getKnowledge() >= 12)
            {
                this.identity = "Scroll of Electric Bolt";
                this.description = "Studying this scroll will teach you how to cast and throw a powerful bolt of electricity from your hands.";
                this.intForDes = 0;
                this.intDescription = "The inked sybols on this scroll stand out from the paper as if they were reaching out to you.";
                this.buyValue = 1200 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 1100.
                this.sellValue = 1050 + Math.floor(player.getCharisma() / 1); // at max, sell for 1100.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 1200 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 1100.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 14;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = true;
            this.spellCost = Math.max(1, 6 + (7 / 50) * player.getConcentration() - (8 / 50) * player.getEminence());
            this.spellGroup = "Form";
            this.spellGenre = "Electricity";
            this.spellName = "Electric Bolt";
            this.spellID = "electricBolt";
            this.spellDamage = 11 + 0.4 * player.getConcentration();
            this.spellEXP = 15 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(1, 8 + (6/50) * player.getConcentration() - (12/50) * player.getEminence());
            this.spellDescription = "A powerful and contained bolt of magical electricity thrown forth from the caster's hand.";
            this.spellKnowledgeRequirement = 12;
            this.spellRange = "Medium-Long";
        }
        else if (this.type == "surge")
        {
            //For All Items
            if (player.getKnowledge() >= 13)
            {
                this.identity = "Scroll of Surge";
                this.description = "Studying this scroll will teach you how to create an explosion of magical eletricity around you.";
                this.intForDes = 0;
                this.intDescription = "This is an area of effect spell that electrocutes all within a short distance from the caster.";
                this.buyValue = 1085 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 985.
                this.sellValue = 900 + Math.floor(player.getCharisma() / 1); // at max, sell for 950.
            }
            else
            {
                this.identity = "Scroll";
                this.description = "The markings on this scroll are incomprehensible; what a waste of paper!";
                this.intForDes = 2;
                this.intDescription = "Scrolls are supposed to be used for storing knowledge or sending messages, it looks like this one wasn't used for either.";
                this.buyValue = 1085 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 985.
                this.sellValue = 1; // at max, sell for 1.
            }
            this.weight = 0.02;
            this.size = 14;

            //Define Utility
            this.utility = "spell";

            //ability
            this.ability = "none";

            //Utility Focused
            this.damages = true;
            this.spellCost = Math.max(1, 4 + (4 / 50) * player.getConcentration() - (6 / 50) * player.getEminence());
            this.spellGroup = "Incantation";
            this.spellGenre = "Electricity";
            this.spellName = "Surge";
            this.spellID = "surge";
            this.spellDamage = 3 + 0.15 * player.getConcentration();
            this.spellEXP = 7 * ((50 + player.getMemory()) / 50);
            this.spellCooldown = Math.max(1, 10 + (5/50) * player.getConcentration() - (13/50) * player.getEminence());
            this.spellDescription = "An electrical explosion that surrounds the caster shocking all that are around.";
            this.spellKnowledgeRequirement = 13;
            this.spellRange = "Short";
        }
        else if (this.type == "etyrMeat")
        {
            //For All Items
            this.identity = "Etyr Meat";
            this.weight = 1;
            this.size = 6;
            this.description = "The cooked meat of an Etyr.";
            this.intForDes = 1;
            this.intDescription = "Stringy, chewy, and tough... but it's edible.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 6; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.


            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 2;
            this.ingredients = [["Raw Etyr Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3 - Math.floor(player.getCharisma() / 25); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "ardilMeat")
        {
            //For All Items
            this.identity = "Ardil Meat";
            this.weight = 0.3;
            this.size = 4;
            this.description = "The cooked meat of an Ardil.";
            this.intForDes = 1;
            this.intDescription = "Chewy, and a bit gamey... but it's alright.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.


            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Raw Ardil Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2 - Math.floor(player.getCharisma() / 25); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "hugeBogTrollSkull")
        {
            //For All Items
            this.identity = "Huge Bog Troll Skull";
            this.weight = 50;
            this.size = 30;
            this.description = "The skull of a humongous bog troll.";
            this.intForDes = 1;
            this.intDescription = "A testament to the valor and might of the one that has slain such a monstrous beast!";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3000 - Math.floor(player.getCharisma() / 0.05125); // at max, buy for 2025.
            this.sellValue = 1445 + Math.floor(player.getCharisma() / 0.125); // at max, sell for 1845.
        }
        else if (this.type == "bogTrollSkull")
        {
            //For All Items
            this.identity = "Bog Troll Skull";
            this.weight = 35;
            this.size = 24;
            this.description = "The skull of a bog troll.";
            this.intForDes = 1;
            this.intDescription = "A testament to the valor and might of the one that has slain such a beast!";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1900 - Math.floor(player.getCharisma() / 0.125); // at max, buy for 1500.
            this.sellValue = 1060 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 1260.
        }
        else if (this.type == "babyBogTrollSkull")
        {
            //For All Items
            this.identity = "Baby Bog Troll Skull";
            this.weight = 8;
            this.size = 15;
            this.description = "The skull of a baby bog troll.";
            this.intForDes = 1;
            this.intDescription = "A trophy of a sort, for a troll is a troll, even a baby is dangerous...";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 70 - Math.floor(player.getCharisma() / 2); // at max, buy for 45.
            this.sellValue = 30 + Math.floor(player.getCharisma() / 3); // at max, sell for 45.
        }
        else if (this.type == "trollFlesh")
        {
            //For All Items
            this.identity = "Troll Flesh";
            this.weight = 4;
            this.size = 11;
            this.description = "The raw flesh of a Troll.";
            this.intForDes = 40;
            this.intDescription = "This meat can be strained for the troll's blood which has regenerative properties.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            if (player.getIntelligence >= 25)
            {
                this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            }
            else
            {
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            }
            this.hunger = 1; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -6; //recoops lost energy.
            this.replenish = -6; //restores will.

            //ability
            this.ability = "poisonI";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 135 - Math.floor(player.getCharisma() / 2); // at max, buy for 110.
            this.sellValue = 80 + Math.floor(player.getCharisma() / 2); // at max, sell for 105.
        }
        else if (this.type == "trollMeat")
        {
            //For All Items
            this.identity = "Troll Meat";
            this.weight = 3;
            this.size = 11;
            this.description = "The cooked meat of a troll.";
            this.intForDes = 5;
            this.intDescription = "It is tough to chew, and quite frankly it tastes disgusting...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 4; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -2; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Troll Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 15 - Math.floor(player.getCharisma() / 25); // at max, buy for 13.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 25); // at max, sell for 10.
        }
        else if (this.type == "rawOlkrinFlesh")
        {
            //For All Items
            this.identity = "Raw Olkrin Flesh";
            this.weight = 35;
            this.size = 20;
            this.description = "The raw flesh of an Olkrin: it smells sour and stale, and with purple threads of tough fibers running though it it looks absolutely indigestible.";
            this.intForDes = 14;
            this.intDescription = "Olkrin flesh is toxic.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            if (player.getIntelligence() >= 14)
            {
                this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            }
            else
            {
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            }
            this.hunger = 6; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = -6; //heals health.
            this.generation = -6; //recoops lost energy.
            this.replenish = 0; //restores will.


            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 197 - Math.floor(player.getCharisma() / 1); // at max, buy for 147.
            this.sellValue = 93 + Math.floor(player.getCharisma() / 1.5); // at max, sell for 123.
        }
        else if (this.type == "olkrinMeat")
        {
            //For All Items
            this.identity = "Olkrin Meat";
            this.weight = 33;
            this.size = 20;
            this.description = "The cooked meat of an Olkrin has a strange almost plastic-like smell and it has a meaty yet grossly bitter taste.";
            this.intForDes = 1;
            this.intDescription = "It's safe to eat, but just because you can doesn't mean that you should...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            if (player.getIntelligence() >= 14)
            {
                this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            }
            else
            {
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            }
            this.hunger = 33; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -4; //recoops lost energy.
            this.replenish = 0; //restores will.


            //ability
            this.ability = "potentialFoodPoisoning";

            //Crafting
            this.yield = 1;
            this.intForCraft = 19;
            this.ingredients = [["Raw Olkrin Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 39 - Math.floor(player.getCharisma() / 3); // at max, buy for 24.
            this.sellValue = 7 + Math.floor(player.getCharisma() / 3); // at max, sell for 22.
        }
        else if (this.type == "nechromanticDust")
        {
            //For All Items
            this.identity = "Nechromantic Dust";
            this.weight = 0.5;
            this.size = 10;
            this.description = "A shadowy dust finer than silt, smooth like silk to the touch, that exudes the very essence of both life and death.";
            this.intForDes = 37;
            this.intDescription = "Nechromantic dust is a rare alchemy ingredient.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1;
            this.sellValue = 1;
        }
        else if (this.type == "tilkTentacle")
        {
            //For All Items
            this.identity = "Tilk Tentacle";
            this.weight = 1.7;
            this.size = 10;
            this.description = "A toothed black tentacle from a tilk.";
            this.intForDes = 29;
            this.intDescription = "The tentacles of a tilk contain a strange fatty substance that can be used in advanced achemic recipes.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6 - Math.floor(player.getCharisma() / 12); // at max, buy for 2.
            this.sellValue = 2; // at max, sell for 2.
        }
        else if (this.type == "lrgTilkTentacle")
        {
            //For All Items
            this.identity = "Large Tilk Tentacle";
            this.weight = 2.2;
            this.size = 14;
            this.description = "A large toothed black tentacle from a tilk.";
            this.intForDes = 29;
            this.intDescription = "The tentacles of a tilk contain a strange fatty substance that can be used in advanced achemic recipes.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 10 - Math.floor(player.getCharisma() / 8); // at max, buy for 4.
            this.sellValue = 4; // at max, sell for 4.
        }
        else if (this.type == "giantTilkTentacle")
        {
            //For All Items
            this.identity = "Giant Tilk Tentacle";
            this.weight = 3.7;
            this.size = 14;
            this.description = "A massive toothed black tentacle from a tilk.";
            this.intForDes = 29;
            this.intDescription = "The tentacles of a tilk contain a strange fatty substance that can be used in advanced achemic recipes.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 37 - Math.floor(player.getCharisma() / 5); // at max, buy for 27.
            this.sellValue = 21 + Math.floor(player.getCharisma() / 8); // at max, sell for 27.
        }
        else if (this.type == "narthwarpMouth")
        {
            //For All Items
            this.identity = "Narthwarp Mouth";
            this.weight = 3;
            this.size = 9;
            this.description = "The razor-toothed external eating appendage of a narthwarp.";
            this.intForDes = 23;
            this.intDescription = "Narthwarps release a dangerous toxin through this appendage that is known to cause extreme weakness and fatigue.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 37 - Math.floor(player.getCharisma() / 3); // at max, buy for 22.
            this.sellValue = 12 + Math.floor(player.getCharisma() / 5); // at max, sell for 22.
        }
        else if (this.type == "lrgNarthwarpMouth")
        {
            //For All Items
            this.identity = "Narthwarp Mouth";
            this.weight = 6;
            this.size = 16;
            this.description = "The razor-toothed external eating appendage of a large narthwarp.";
            this.intForDes = 23;
            this.intDescription = "Narthwarps release a dangerous toxin through this appendage that is known to cause extreme weakness and fatigue.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 42 - Math.floor(player.getCharisma() / 3); // at max, buy for 27.
            this.sellValue = 14 + Math.floor(player.getCharisma() / 5); // at max, sell for 24.
        }
        else if (this.type == "fermentedNarthwarpMouth")
        {
            //For All Items
            this.identity = "Fermented Narthwarp Mouth";
            this.weight = 19;
            this.size = 19;
            this.description = "What was once the mouth of a narthwarp is now a swollen oozing mess.";
            this.intForDes = 23;
            this.intDescription = "Fermenting the toxins in narthwarp venom creates a new substance that can be used in some alchemy recipes.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 23;
            this.ingredients = [["Narthwarp Mouth", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 46 - Math.floor(player.getCharisma() / 3); // at max, buy for 31.
            this.sellValue = 19 + Math.floor(player.getCharisma() / 5); // at max, sell for 29.
        }
        else if (this.type == "olkrinHorn")
        {
            //For All Items
            this.identity = "Olkrin Horn";
            this.weight = 19;
            this.size = 19;
            this.description = "The horn of an Olkrin.";
            this.intForDes = 38;
            this.intDescription = "When in its powdered form it can be used in alchemy to produce or enhance certain effects in potions.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 480 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 380.
            this.sellValue = 250 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 350.
        }
        else if (this.type == "olkrinArm")
        {
            //For All Items
            this.identity = "Olkrin Arm";
            this.weight = 160;
            this.size = 40;
            this.description = "The Arm of an Olkrin.";
            this.intForDes = 1;
            this.intDescription = "This is a trophy that represents the spectacular achievement of having slain an Olkrin.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1360 - Math.floor(player.getCharisma() / 0.125); // at max, buy for 960.
            this.sellValue = 550 + Math.floor(player.getCharisma() / 0.125); // at max, sell for 950.
        }
        else if (this.type == "olkrinSkull")
        {
            //For All Items
            this.identity = "Olkrin Skull";
            this.weight = 100;
            this.size = 24;
            this.description = "The skull of an Olkrin.";
            this.intForDes = 1;
            this.intDescription = "This is a trophy that represents the spectacular achievement of having slain an Olkrin.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1860 - Math.floor(player.getCharisma() / 0.125); // at max, buy for 1460.
            this.sellValue = 900 + Math.floor(player.getCharisma() / 0.125); // at max, sell for 1300.
        }
        else if (this.type == "goliathOlkrinSkull")
        {
            //For All Items
            this.identity = "Goliath Olkrin Skull";
            this.weight = 140;
            this.size = 35;
            this.description = "The skull of a goliath sized Olkrin.";
            this.intForDes = 1;
            this.intDescription = "This was once part of an unimaginably powerful creature, and now it is yours!";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 9200 - Math.floor(player.getCharisma() / 0.125); // at max, buy for 8800.
            this.sellValue = 6592 + Math.floor(player.getCharisma() / 0.025); // at max, sell for 8592.
        }
        else if (this.type == "rawGribFlesh")
        {
            //For All Items
            this.identity = "Raw Grib Flesh";
            this.weight = 1;
            this.size = 10;
            this.description = "The raw flesh of a grib.";
            this.intForDes = 1;
            this.intDescription = "Raw grib meat is often infested with flesh mites.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = -1; //restores will.


            //ability
            this.ability = "fleshMites";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 7 - Math.floor(player.getCharisma() / 15); // at max, buy for 4.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 15); // at max, sell for 4.
        }
        else if (this.type == "gribMeat")
        {
            //For All Items
            this.identity = "Grib Meat";
            this.weight = 1;
            this.size = 10;
            this.description = "The cooked meat of a grib.";
            this.intForDes = 2;
            this.intDescription = "Gribs are foul creatures and their meat is not much better.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 8; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = -1; //restores will.


            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 6;
            this.ingredients = [["Raw Grib Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 15 - Math.floor(player.getCharisma() / 8); // at max, buy for 9.
            this.sellValue = 4 + Math.floor(player.getCharisma() / 10); // at max, sell for 9.
        }
        else if (this.type == "gribPelt")
        {
            //For All Items
            this.identity = "Grib Pelt";
            this.weight = 2;
            this.size = 18;
            this.description = "The prickly brown fur of a grib.";
            this.intForDes = 6;
            this.intDescription = "Due to the strong odor that gribs release to mark their territory grib pelts are not commonly sought after.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2 - Math.floor(player.getCharisma() / 50); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "rawTilkFlesh")
        {
            //For All Items
            this.identity = "Raw Tilk Flesh";
            this.weight = 6;
            this.size = 13;
            this.description = "The raw flesh of a tilk.";
            this.intForDes = 16;
            this.intDescription = "This meat while raw, though it smells and tastes foul, has both an energizing and warming property.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 3; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.45; //recoops lost energy.
            this.replenish = -1; //restores will.


            //ability
            this.ability = "foodPoisoning";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3 - Math.floor(player.getCharisma() / 50); // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "tilkMeat")
        {
            //For All Items
            this.identity = "Tilk Meat";
            this.weight = 5;
            this.size = 13;
            this.description = "The cooked meat of a tilk.";
            this.intForDes = 0;
            this.intDescription = "This is absolutely disgusting, perhaps not even the bravest knight would try this rank meat.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 4; //satisfies hunger.
            this.thirst = -0.5; //quenches thirst.
            this.warmth = 2; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = -2; //restores will.

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Raw Tilk Meat", 1]];

            //ability
            this.ability = "foodPoisoning";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "rawWalrusFlesh")
        {
            //For All Items
            this.identity = "Raw Walrus Flesh";
            this.weight = 2;
            this.size = 11;
            this.description = "The raw flesh of a land walrus.";
            this.intForDes = 1;
            this.intDescription = "Eating this raw would be tough...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = 0; //restores will.


            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 9 - Math.floor(player.getCharisma() / 15); // at max, buy for 6.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 15); // at max, sell for 6.
        }
        else if (this.type == "walrusMeat")
        {
            //For All Items
            this.identity = "Walrus Meat";
            this.weight = 2;
            this.size = 11;
            this.description = "The cooked meat of a land walrus.";
            this.intForDes = 3;
            this.intDescription = "Land walrus meat is filling and hearty, and even more it can provide you with the energy you need to endure in cold climates.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 19; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 4; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.


            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 9;
            this.ingredients = [["Raw Walrus Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 18 - Math.floor(player.getCharisma() / 6.25); // at max, buy for 10.
            this.sellValue = 6 + Math.floor(player.getCharisma() / 12.5); // at max, sell for 10.
        }
        else if (this.type == "ogoFruit")
        {
            //For All Items
            this.identity = "Ogo";
            this.weight = 1;
            this.size = 7;
            this.description = "The ogo fruit is sweet, tender, and smooth.";
            this.intForDes = 19;
            this.intDescription = "Ogo has been known to make people get a bit hyper!";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 3; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 1.5; //recoops lost energy.
            this.replenish = 0; //restores will.


            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 37 - Math.floor(player.getCharisma() / 2); // at max, buy for 12.
            this.sellValue = 7 + Math.floor(player.getCharisma() / 10); // at max, sell for 12.
        }
        else if (this.type == "rawEtyrFlesh")
        {
            //For All Items
            this.identity = "Raw Etyr Flesh";
            this.weight = 1;
            this.size = 6;
            this.description = "The raw flesh from an Etyr.";
            this.intForDes = 3;
            this.intDescription = "Rare, with extra gut worms!";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "gutWorms";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "rawArdilFlesh")
        {
            //For All Items
            this.identity = "Raw Ardil Flesh";
            this.weight = 0.35;
            this.size = 4;
            this.description = "The raw flesh from an Ardil.";
            this.intForDes = 4;
            this.intDescription = "Just a little bit infested with gut worms...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -0.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "gutWorms";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "neevFlesh")
        {
            //For All Items
            this.identity = "Neev Flesh";
            this.weight = 1;
            this.size = 6;
            this.description = "A pure black flesh gooey with sticky tar-like black blood.";
            this.intForDes = 0;

            if (player.getIntelligence() < 20)
            {
                this.intDescription = "This does not look like something anyone would want to ingest.";
            }
            else
            {
                this.intDescription = "This can be drained for the blood which can be used as a base for some powerful alchemy recipes.";
            }

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = -10; //satisfies hunger.
            this.thirst = -10; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = -5; //heals health.
            this.generation = -5; //recoops lost energy.
            this.replenish = -25; //restores will.

            //ability
            this.ability = "foodPoisoning";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 105 - Math.floor(player.getCharisma() / 1.5); // at max, buy for 72.
            this.sellValue = 42 + Math.floor(player.getCharisma() / 2); // at max, sell for 67.
        }
        else if (this.type == "anterInnards")
        {
            //For All Items
            this.identity = "Anter Innards";
            this.weight = 3;
            this.size = 9;
            this.description = "The gooey innards of an anter.";
            this.intForDes = 0;
            this.intDescription = "Anter innards smell like someone was split open and left to rot for days...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.5; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = -0.5; //heals health.
            this.generation = -3; //recoops lost energy.
            this.replenish = -5; //restores will.

            //ability
            this.ability = "foodPoisoning";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "anterAcid")
        {
            //For All Items
            this.identity = "Anter Acid";
            this.weight = 2.5;
            this.size = 9;
            this.description = "Toxic residue found inside anters.";
            this.intForDes = 7;
            this.intDescription = "Anter acid is used by anters to mark new terrotory because it has a powerful acidic odor.";
            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 12 - Math.floor(player.getCharisma() / 15); // at max, buy for 9.
            this.sellValue = 7 + Math.floor(player.getCharisma() / 50); // at max, sell for 9.
        }
        else if (this.type == "anterShell")
        {
            //For All Items
            this.identity = "Anter Shell";
            this.weight = 6;
            this.size = 15;
            this.description = "The hard, shiny, black shell of an anter.";
            this.intForDes = 10;
            this.intDescription = "Can be crafted into armour.";
            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 12 - Math.floor(player.getCharisma() / 12); // at max, buy for 8.
            this.sellValue = 6 + Math.floor(player.getCharisma() / 25); // at max, sell for 8.
        }
        else if (this.type == "anterMandibles")
        {
            //For All Items
            this.identity = "Anter Mandibles";
            this.weight = 2;
            this.size = 12;
            this.description = "The mandibles of an anter.";
            this.intForDes = 2;
            this.intDescription = "Anters use their mandibles to devour their prey and also to carry food back to their hive.";
            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5; // at max, buy for 10.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 15); // at max, sell for 5.
        }
        else if (this.type == "utMeat")
        {
            //For All Items
            this.identity = "Ut Meat";
            this.weight = 3;
            this.size = 12;
            this.description = "The cooked flesh of an ut.";
            this.intForDes = 0;
            this.intDescription = "This meat is super flimsy, slimy, and slippery. Only those with a hardy gut can keep this food down.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 6; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = -2; //recoops lost energy.
            this.replenish = -2; //restores will.

            //ability
            if (player.getToughness() < 10)
            {
                this.ability = "potentialFoodPoisoning";
            }
            else
            {
                this.ability = "none";
            }

            //Crafting
            this.yield = 1;
            this.intForCraft = 2;
            this.ingredients = [["Raw Ut Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "frichMeat")
        {
            //For All Items
            this.identity = "Frich Meat";
            this.weight = 1;
            this.size = 12;
            this.description = "The cooked flesh of a Frich.";
            this.intForDes = 2;
            this.intDescription = "Cooking it didn't do much to soften it up, but at least it is safe to eat...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 2;
            this.ingredients = [["Raw Frich Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4 - Math.floor(player.getCharisma() / 50); // at max, buy for 3.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 50); // at max, sell for 3.
        }
        else if (this.type == "utTentacle")
        {
            //For All Items
            this.identity = "Ut Tentacle";
            this.weight = 5;
            this.size = 18;
            this.description = "A slick and slimy tentacle from an ut.";
            this.intForDes = 30;
            this.intDescription = "Such tentacles are used in anti-magic elixers due to the strong magic resistance in the blood. This can also be fermented for other uses.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3; // at max, buy for 3.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 50); // at max, sell for 3.
        }
        else if (this.type == "fermentedUtTentacle")
        {
            //For All Items
            this.identity = "Fermented Ut Tentacle";
            this.weight = 6;
            this.size = 18;
            this.description = "A rank smelling slimy fermented tentacle originally from an ut.";
            this.intForDes = 20;
            this.intDescription = "The ut's blood chemically alters and becomes brownish when fermented. This substance can be extracted.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 11;
            this.ingredients = [["Ut Tentacle", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5; // at max, buy for 5.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 25); // at max, sell for 5.
        }
        else if (this.type == "rawUtFlesh")
        {
            //For All Items
            this.identity = "Raw Ut Flesh";
            this.weight = 4;
            this.size = 12;
            this.description = "The raw flesh from an ut. It is gooey, slimy, limp, and coated in slick transparent slimyness.";
            this.intForDes = 1;
            this.intDescription = "Eating this is sure to make you lose the contents of your stomach... but why would you do something so gross?";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2; //satisfies hunger.
            this.thirst = 3; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -3; //recoops lost energy.
            this.replenish = -5; //restores will.

            //ability
            this.ability = "foodPoisoning";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "rawFrichFlesh")
        {
            //For All Items
            this.identity = "Raw Frich Flesh";
            this.weight = 1;
            this.size = 12;
            this.description = "The raw flesh from a Frich.";
            this.intForDes = 4;
            this.intDescription = "It is tough, slimy with curdling blood, and finished with an occasional gut worm here or there.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "gutWorms";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "mountainFrichMeat")
        {
            //For All Items
            this.identity = "Mountain-Frich Meat";
            this.weight = 2.5;
            this.size = 18;
            this.description = "The cooked flesh of a mountain-frich.";
            this.intForDes = 2;
            this.intDescription = "Cooking it didn't do much to soften it up, but at least it is safe to eat...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 11; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -2.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 3;
            this.ingredients = [["Raw Mountain-Frich Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 7 - Math.floor(player.getCharisma() / 25); // at max, buy for 5.
            this.sellValue = 4 + Math.floor(player.getCharisma() / 50); // at max, sell for 5.
        }
        else if (this.type == "rawMountainFrichFlesh")
        {
            //For All Items
            this.identity = "Raw Mountain-Frich Flesh";
            this.weight = 3;
            this.size = 18;
            this.description = "The raw flesh from a mountain-frich.";
            this.intForDes = 4;
            this.intDescription = "It is tough, slimy with curdling blood, and finished with an occasional gut worm here or there.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -2.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "gutWorms";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3; // at max, buy for 3.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 50); // at max, sell for 3.
        }
        else if (this.type == "rawYoungNaapridFlesh")
        {
            //For All Items
            this.identity = "Raw Young-Naaprid Flesh";
            this.weight = 1;
            this.size = 9;
            this.description = "The raw flesh of a sweet and innocent baby naaprid.";
            this.intForDes = 1;
            this.intDescription = "The flesh of a young-naaprid is more tender and supple than that of an adult of the species.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 24 - Math.floor(player.getCharisma() / 10); // at max, buy for 19.
            this.sellValue = 14 + Math.floor(player.getCharisma() / 10); // at max sell for 19.
        }
        else if (this.type == "youngNaapridMeat")
        {
            //For All Items
            this.identity = "Young-Naaprid Meat";
            this.weight = 1;
            this.size = 9;
            this.description = "The tender and succulent meat of a sweet and innocent baby naaprid.";
            this.intForDes = 1;
            this.intDescription = "Naaprid Meat is eaten as a luxury meal by some nobility.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 15; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 2; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 16;
            this.ingredients = [["Raw Young-Naaprid Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 29 - Math.floor(player.getCharisma() / 10); // at max, buy for 24.
            this.sellValue = 14 + Math.floor(player.getCharisma() / 8); // at max sell for 20.
        }
        else if (this.type == "rawNaapridFlesh")
        {
            //For All Items
            this.identity = "Raw Naaprid Flesh";
            this.weight = 8;
            this.size = 22;
            this.description = "A large hunk of flesh from a naaprid.";
            this.intForDes = 4;
            this.intDescription = "It would be rather difficult to eat this raw, plus it would be sort of, well, raw...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 4; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -4; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 12 - Math.floor(player.getCharisma() / 12.5); // at max, buy for 8.
            this.sellValue = 4 + Math.floor(player.getCharisma() / 15); // at max sell for 7.
        }
        else if (this.type == "naapridMeat")
        {
            //For All Items
            this.identity = "Naaprid Meat";
            this.weight = 8;
            this.size = 22;
            this.description = "A sizable cut of meat from a naaprid: the cooked meat has strong gamey flavour and a distinct savory taste.";
            this.intForDes = 4;
            this.intDescription = "This amount of food could tide someone over for a while!";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 30; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 4; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 14;
            this.ingredients = [["Raw Naaprid Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 34 - Math.floor(player.getCharisma() / 8); // at max, buy for 28.
            this.sellValue = 16 + Math.floor(player.getCharisma() / 5); // at max sell for 26.
        }
        else if (this.type == "naapridPelt")
        {
            //For All Items
            this.identity = "Naaprid Pelt";
            this.weight = 3;
            this.size = 22;
            this.description = "The thick matted fur pelt of a naaprid.";
            this.intForDes = 5;
            this.intDescription = "This is a good material to form leather out of.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 21 - Math.floor(player.getCharisma() / 8); // at max, buy for 15.
            this.sellValue = 7 + Math.floor(player.getCharisma() / 8); // at max, sell for 13.
        }
        else if (this.type == "naapridHorn")
        {
            //For All Items
            this.identity = "Naaprid Horn";
            this.weight = 1;
            this.size = 14;
            this.description = "A curved horn from a naaprid.";
            this.intForDes = 7;
            this.intDescription = "In a powdered form this can be used to thicken certain mixtures.";
            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 10 - Math.floor(player.getCharisma() / 15); // at max, buy for 7.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 15); // at max, sell for 6.
        }
        else if (this.type == "smlBlackBearPelt")
        {
            //For All Items
            this.identity = "Black Bear Pelt";
            this.weight = 2;
            this.size = 20;
            this.description = "The pelt of a black bear.";
            this.intForDes = 3;
            this.intDescription = "This can be used to make bear fur apparel.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 25 - Math.floor(player.getCharisma() / 8); // at max, buy for 19.
            this.sellValue = 11 + Math.floor(player.getCharisma() / 6); // at max, sell for 19.
        }
        else if (this.type == "medBlackBearPelt")
        {
            //For All Items
            this.identity = "Black Bear Pelt";
            this.weight = 2;
            this.size = 33;
            this.description = "The pelt of a large black bear.";
            this.intForDes = 3;
            this.intDescription = "This can be used to make bear fur apparel.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 34 - Math.floor(player.getCharisma() / 5); // at max, buy for 24.
            this.sellValue = 14 + Math.floor(player.getCharisma() / 5); // at max, sell for 24.
        }
        else if (this.type == "lrgBlackBearPelt")
        {
            //For All Items
            this.identity = "Elder Black Bear Pelt";
            this.weight = 2;
            this.size = 65;
            this.description = "The pelt of an elder black bear.";
            this.intForDes = 3;
            this.intDescription = "This can be used to make the finest bear fur apparel.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 214 - Math.floor(player.getCharisma() / 1); // at max, buy for 164.
            this.sellValue = 113 + Math.floor(player.getCharisma() / 1); // at max, sell for 163.
        }
        else if (this.type == "rawBearFlesh")
        {
            //For All Items
            this.identity = "Raw Bear Flesh";
            this.weight = 3.5;
            this.size = 15;
            this.description = "A hunk of meat from a bear.";
            this.intForDes = 2;
            this.intDescription = "A bear's flesh is often unsafe to eat raw due to the parasites that are common in some of the creatures that they eat.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -0.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "fleshMites";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 15); // at max, buy for 5.
            this.sellValue = 4 + Math.floor(player.getCharisma() / 50); // at max, sell for 5.
        }
        else if (this.type == "bearMeat")
        {
            //For All Items
            this.identity = "Bear Meat";
            this.weight = 3.5;
            this.size = 17;
            this.description = "Cooked meat from a bear.";
            this.intForDes = 1;
            this.intDescription = "The meat is rather tough, but its strong meaty flavour makes up for it.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 21; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 3; //warms player.
            this.heal = 0; //heals health.
            this.generation = -0.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 17;
            this.ingredients = [["Raw Bear Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 24 - Math.floor(player.getCharisma() / 12); // at max, buy for 20.
            this.sellValue = 12 + Math.floor(player.getCharisma() / 6); // at max, sell for 20.
        }
        else if (this.type == "rawBearTongue")
        {
            //For All Items
            this.identity = "Raw Bear Tongue";
            this.weight = 2;
            this.size = 15;
            this.description = "A bear's tongue; it is thick, fleshy and covered with sticky moist partially dried saliva.";
            this.intForDes = 5;
            this.intDescription = "Bear tongue is an important ingredient in some alchemy recipes.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            if (player.getIntelligence() >= 20)
            {
                this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            }
            else
            {
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            }
            this.hunger = 1; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -3; //recoops lost energy.
            this.replenish = 1; //restores will.

            //ability
            this.ability = "potentialFoodPoisoning";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 19 - Math.floor(player.getCharisma() / 12); // at max, buy for 15.
            this.sellValue = 10 + Math.floor(player.getCharisma() / 10); // at max, sell for 15.
        }
        else if (this.type == "bearTongue")
        {
            //For All Items
            this.identity = "Bear Tongue";
            this.weight = 2;
            this.size = 17;
            this.description = "Cooked bear tongue.";
            this.intForDes = 1;
            this.intDescription = "Bear tongue is an important part of a healthy diet, its very nutritious!";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 9; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 2; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 12;
            this.ingredients = [["Raw Bear Tongue", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 15 - Math.floor(player.getCharisma() / 25); // at max, buy for 13.
            this.sellValue = 9 + Math.floor(player.getCharisma() / 12.5); // at max, sell for 13.
        }
        else if (this.type == "rawBerulnFlesh")
        {
            //For All Items
            this.identity = "Raw Beruln Flesh";
            this.weight = 2;
            this.size = 17;
            this.description = "A chunk of rib flesh from a beruln.";
            this.intForDes = 2;
            this.intDescription = "The meat is tough and sticky with blood. It is going to be a challenge to eat it in this state...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "fleshMites";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3 - Math.floor(player.getCharisma() / 50); // at max, buy for 2.
            this.sellValue = 2; // at max, sell for 2.
        }
        else if (this.type == "berulnMeat")
        {
            //For All Items
            this.identity = "Beruln Meat";
            this.weight = 2;
            this.size = 17;
            this.description = "Cooked rib meat from a beruln.";
            this.intForDes = 1;
            this.intDescription = "The meat is too tough to chew comfortably...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 7; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 3;
            this.ingredients = [["Raw Beruln Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4 - Math.floor(player.getCharisma() / 50); // at max, buy for 3.
            this.sellValue = 3; // at max, sell for 3.
        }
        else if (this.type == "yaihefBerries")
        {
            //For All Items
            this.identity = "Yaihef Berries";
            this.weight = 0.5;
            this.size = 7;
            this.description = "Juicy light blue berries with a plumlike texture.";
            this.intForDes = 2;
            this.intDescription = "They're the quenchiest!";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 3; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4 - Math.floor(player.getCharisma() / 25); // at max, buy for 2.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "akerBerries")
        {
            //For All Items
            this.identity = "Aker Berries";
            this.weight = 0.5;
            this.size = 7;
            this.description = "Scrumptious red berrys with a sweet and tangy flavour!";
            this.intForDes = 6;
            this.intDescription = "These berries have no interesting effects.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2 - Math.floor(player.getCharisma() / 50); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "bequonFruit")
        {
            //For All Items
            this.identity = "Bequon";
            this.weight = 2.25;
            this.size = 14;
            this.description = "A bumpy purple fruit that is sweet, tender and extremely juicy!";
            this.intForDes = 1;
            this.intDescription = "Bequon can be juiced and drunk as a beverage, or simply eated whole as a whole fruit.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 3.5; //satisfies hunger.
            this.thirst = 3; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.2; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 10; // at max, buy for 10.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 10); // at max, sell for 10.
        }
        else if (this.type == "wegRoot")
        {
            //For All Items
            this.identity = "Weg Root";
            this.weight = 11;
            this.size = 14;
            this.description = "A hard dark root with little wirey root hairs.";
            this.intForDes = 4;
            this.intDescription = "Weg root is extremely bitter and fibrous raw, it is mostly used for curing certain sicknesses. It is also eaten as a food item by some kellish tribes.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 3; //satisfies hunger.
            this.thirst = 0.25; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -10; //recoops lost energy.
            this.replenish = 0.25; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 13 - Math.floor(player.getCharisma() / 15); // at max, buy for 10.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 10); // at max, sell for 10.
        }
        else if (this.type == "roastedWegRoot")
        {
            //For All Items
            this.identity = "Roasted Weg Root";
            this.weight = 10;
            this.size = 14;
            this.description = "A stringy grainy roasted root that has a strong bitter flavor.";
            this.intForDes = 1;
            this.intDescription = "This can be broken down into more appropriately sized pieces.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 15; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -6; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 8;
            this.ingredients = [["Weg Root", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6 - Math.floor(player.getCharisma() / 25); // at max, buy for 4.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "roastedWegRootChunks")
        {
            //For All Items
            this.identity = "Roasted Weg Root Chunks";
            this.weight = 1.65;
            this.size = 9;
            this.description = "Reasonably sized hunks of stringy bitter root.";
            this.intForDes = 4;
            this.intDescription = "Nobody likes the taste, if someone says they do they are probably lying.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 3.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -2; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 6;
            this.intForCraft = 5;
            this.ingredients = [["Roasted Weg Root", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 0 + Math.floor(player.getCharisma() / 50); // at max, sell for 1.
        }
        else if (this.type == "palntFlower")
        {
            //For All Items
            this.identity = "Palnt Flower";
            this.weight = 0.001;
            this.size = 6;
            this.description = "One flower comprised of many small white flowers.";
            this.intForDes = 20;
            this.intDescription = "Although this is poisoness to eat, its poison can be neutralized when mixed with other certain alchemic ingredients. It serves as an amplifier.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "poisonII";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "palntRoot")
        {
            //For All Items
            this.identity = "Palnt Root";
            this.weight = 0.6;
            this.size = 7;
            this.description = "A light tannish coloured root that is crunchy and relatively bland.";
            this.intForDes = 2;
            this.intDescription = "When cooked palnt root is chalky, flavorless and starchy.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.45; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "boiledPalntRoot")
        {
            //For All Items
            this.identity = "Boiled Palnt Root";
            this.weight = 0.8;
            this.size = 7;
            this.description = "A light tannish coloured root that is crunchy and relatively bland.";
            this.intForDes = 2;
            this.intDescription = "When cooked palnt root is chalky, flavorless and starchy.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2.5; //satisfies hunger.
            this.thirst = 0.25; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 9;
            this.intForCraft = 3;
            this.ingredients = [["Palnt Root", 9], ["Bucket of Water", 1]];
            this.biproducts = [[new Item("bucket", false), 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "wightbloomBerries")
        {
            //For All Items
            this.identity = "Wightbloom Berries";
            this.weight = 0.62;
            this.size = 9;
            this.description = "Elongated, grey, ovalular berries that are wrinkled along their length.";
            this.intForDes = 38;
            this.intDescription = "These berries contain an enzyme that temporarily stops your body from producing natural heat.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            if (player.getIntelligence() >= 38)
            {
                this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            }
            else
            {
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            }
            this.hunger = 1.2; //satisfies hunger.
            this.thirst = 0.1; //quenches thirst.
            this.warmth = -26; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 9 - Math.floor(player.getCharisma() / 25); // at max, buy for 7.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 10); // at max, sell for 7.
        }
        else if (this.type == "luufBerries")
        {
            //For All Items
            this.identity = "Luuf Berries";
            this.weight = 0.24;
            this.size = 5;
            this.description = "Little green berries that grow in the northern plains; they have a strongly plant-like bitter taste.";
            this.intForDes = 10;
            this.intDescription = "These berries are poisoness and should not be eaten.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.2; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "poisonI";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "bushkaBerries")
        {
            //For All Items
            this.identity = "Bushka Berries";
            this.weight = 0.1;
            this.size = 6;
            this.description = "Little white berries that are mildly sweet and have a weirdly exotic aftertaste.";
            this.intForDes = 10;
            this.intDescription = "Bushka plants only live in cold and snowy climates, they also appear in warmer climates during the winter.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.6; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.05; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3 - Math.floor(player.getCharisma() / 25); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "driedPluttBerries")
        {
            //For All Items
            this.identity = "Dried Plutt Berries";
            this.weight = 0.7;
            this.size = 7;
            this.description = "Sweet chewy and flavorful dried berries.";
            this.intForDes = 6;
            this.intDescription = "These make an excellent dessert when served with honey.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 2;
            this.ingredients = [["Plutt Berries", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 9 - Math.floor(player.getCharisma() / 12); // at max, buy for 5.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 25); // at max, sell for 5.
        }
        else if (this.type == "pluttBerries")
        {
            //For All Items
            this.identity = "Plutt Berries";
            this.weight = 1;
            this.size = 7;
            this.description = "Juicy, plump, and sweet berries about the size of a small child's fist.";
            this.intForDes = 6;
            this.intDescription = "These make an excellent dessert when dried and served with honey.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2; //satisfies hunger.
            this.thirst = 0.25; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.25; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 25); // at max, buy for 3.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 50); // at max, sell for 3.
        }
        else if (this.type == "neprilneBerries")
        {
            //For All Items
            this.identity = "Neprilne Berries";
            this.weight = 0.1;
            this.size = 7;
            this.description = "Tiny blue coloured berries picked from a neprilne plant.";
            this.intForDes = 10;
            this.intDescription = "These are mildly poisonous and the body will often react to them by expelling the contents of one's stomach.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "foodPoisoning";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 7 - Math.floor(player.getCharisma() / 50);; // at max, buy for 6.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 15); // at max, sell for 6.
        }
        else if (this.type == "culprisLeaf")
        {
            //For All Items
            this.identity = "Culpris Leaf";
            this.weight = 0.1;
            this.size = 7;
            this.description = "A soft green leaf from a culpris plant.";
            this.intForDes = 8;
            this.intDescription = "Culpris Leaves are known to have restorative properties.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0.25; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.25; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 12 - Math.floor(player.getCharisma() / 10); // at max, buy for 7.
            this.sellValue = 4 + Math.floor(player.getCharisma() / 15); // at max, sell for 7.
        }
        else if (this.type == "bushkaLeaves")
        {
            //For All Items
            this.identity = "Bushka Leaves";
            this.weight = 0.1;
            this.size = 7;
            this.description = "Small waxy hard turquoise colored leaves from a bushka plant.";
            this.intForDes = 3;
            this.intDescription = "These can be used in several alchemy recipes.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4 - Math.floor(player.getCharisma() / 25); // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "wyrLeaf")
        {
            //For All Items
            this.identity = "Wyr Leaf";
            this.weight = 0.05;
            this.size = 4;
            this.description = "The large, soft, light, dark green leaf of a wyr plant.";
            this.intForDes = 14;
            this.intDescription = "In a strong enough concentration the extract from a wyr leaf can counter the effects of some basic poisons.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4 - Math.floor(player.getCharisma() / 25); // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "bee")
        {
            //For All Items
            this.identity = "Dead Bee";
            this.weight = 0.001;
            this.size = 2;
            this.description = "A dead honey bee.";
            this.intForDes = 8;
            this.intDescription = "Bees can be used as an alchemy ingredient.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "swollenI";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "harstGrain")
        {
            //For All Items
            this.identity = "Harst Grain";
            this.weight = 0.1;
            this.size = 7;
            this.description = "A rough and hard shelled dark grain.";
            this.intForDes = 8;
            this.intDescription = "Raw, harst grain is crunchy and unappetizing; it must be boiled for over an hour to reach a more edible state.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2 - Math.floor(player.getCharisma() / 50); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "santhGrain")
        {
            //For All Items
            this.identity = "Santh Grain";
            this.weight = 0.1;
            this.size = 7;
            this.description = "The lightest and finest grain anyone would ever find, santh is used to craft the most artisan of confections.";
            this.intForDes = 1;
            this.intDescription = "Santh is revered by all those who have tried the baked goods made from it.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 12 - Math.floor(player.getCharisma() / 10); // at max, buy for 7.
            this.sellValue = 7; // at max, sell for 7.
        }
        else if (this.type == "santhFlour")
        {
            //For All Items
            this.identity = "Santh Flour";
            this.weight = 0.1;
            this.size = 7;
            this.description = "The lightest and finest grain anyone would ever find, santh is used to craft the most artisan of confections.";
            this.intForDes = 1;
            this.intDescription = "Santh is revered by all those who have tried the baked goods made from it.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 9;
            this.ingredients = [["Santh Grain", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 18 - Math.floor(player.getCharisma() / 6); // at max, buy for 10.
            this.sellValue = 10; // at max, sell for 10.
        }
        else if (this.type == "bagOfSanthFlour")
        {
            //For All Items
            this.identity = "Bag of Santh Flour";
            this.weight = 8;
            this.size = 12;
            this.description = "A bag full of santh flour.";
            this.intForDes = 1;
            this.intDescription = "The bag holds fifty loads of flour.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Santh Flour", 50], ["Empty Bag", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 900 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 800.
            this.sellValue = 700 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 800.
        }
        else if (this.type == "emptyBagSanth")
        {
            //For All Items
            this.identity = "Empty Bag";
            this.weight = 1;
            this.size = 12;
            this.description = "A bag with nothing in it.";
            this.intForDes = 0;
            this.intDescription = "If there is nothing in the bag, isn't there something in it?";

            //Define Utility
            this.utility = "material";
            this.subUtility = "reusable";
            this.refund = [["santhFlour", 50]];

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Bag of Santh Flour", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 50); // at max, buy for 4.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "harstFlour")
        {
            //For All Items
            this.identity = "Harst Flour";
            this.weight = 0.1;
            this.size = 7;
            this.description = "Even as a flour harst still seems to be course and gritty.";
            this.intForDes = 1;
            this.intDescription = "Harst is commonly eaten by those who can not afford a more pleasant means of survival.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.2; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -0.25; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 4;
            this.ingredients = [["Harst Grain", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50);; // at max, sell for 2.
        }
        else if (this.type == "bagOfHarstFlour")
        {
            //For All Items
            this.identity = "Bag of Harst Flour";
            this.weight = 8;
            this.size = 12;
            this.description = "A bag full of Harst flour.";
            this.intForDes = 1;
            this.intDescription = "The bag holds fifty loads of flour.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Harst Flour", 50], ["Empty Bag", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 100; // at max, buy for 800.
            this.sellValue = 100; // at max, sell for 800.
        }
        else if (this.type == "emptyBagHarst")
        {
            //For All Items
            this.identity = "Empty Bag";
            this.weight = 1;
            this.size = 12;
            this.description = "A bag with nothing in it.";
            this.intForDes = 0;
            this.intDescription = "If there is nothing in the bag, isn't there something in it?";

            //Define Utility
            this.utility = "material";
            this.subUtility = "reusable";
            this.refund = [["harstFlour", 50]];

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Bag of Harst Flour", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 50); // at max, buy for 4.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "harstDough")
        {
            //For All Items
            this.identity = "Harst Dough";
            this.weight = 0.4;
            this.size = 7;
            this.description = "A dough for harst bread made from flour, water and yeast from the air.";
            this.intForDes = 3;
            this.intDescription = "Harst products are cheap and nutritious, but also very coarse.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 4; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 2;
            this.intForCraft = 4;
            this.ingredients = [["Harst Flour", 6], ["Bucket of Water", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 25); // at max, buy for 3.
            this.sellValue = 3; // at max, sell for 3.
        }
        else if (this.type == "pumpkinDough")
        {
            //For All Items
            this.identity = "Pumpkin Dough";
            this.weight = 0.7;
            this.size = 7;
            this.description = "A dough for pumpkin harst bread made from flour, water, butter, yeast from the air, and pumpkin.";
            this.intForDes = 1;
            this.intDescription = "Pumpkin dough is a harst based bread dough.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 3;
            this.intForCraft = 6;
            this.ingredients = [["Harst Flour", 6], ["Naaprid Butter", 1], ["Pumpkin", 1], ["Bucket of Water", 1], ["Ground Ogard", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 25); // at max, buy for 6.
            this.sellValue = 6; // at max, sell for 3.
        }
        else if (this.type == "pumpkinBread")
        {
            //For All Items
            this.identity = "Pumpkin Bread";
            this.weight = 0.7;
            this.size = 7;
            this.description = "Dark spiced pumpkin bread made from harst grain.";
            this.intForDes = 5;
            this.intDescription = "Pumpkin Bread is a traditional Kellish recipe.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 17; //satisfies hunger.
            this.thirst = 0.5; //quenches thirst.
            this.warmth = 2; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 11;
            this.ingredients = [["Pumpkin Dough", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 16; // at max, buy for 16.
            this.sellValue = 12 + Math.floor(player.getCharisma() / 12); // at max, sell for 16.
        }
        else if (this.type == "butteredPumpkinBread")
        {
            //For All Items
            this.identity = "Buttered Pumpkin Bread";
            this.weight = 0.7;
            this.size = 7;
            this.description = "Dark spiced pumpkin bread made from harst grain.";
            this.intForDes = 5;
            this.intDescription = "Pumpkin Bread is a traditional Kellish recipe.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 21; //satisfies hunger.
            this.thirst = 0.5; //quenches thirst.
            this.warmth = 2; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1.75; //recoops lost energy.
            this.replenish = 0.1; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Pumpkin Bread", 1], ["Naaprid Butter", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 16; // at max, buy for 16.
            this.sellValue = 12 + Math.floor(player.getCharisma() / 12); // at max, sell for 16.
        }
        else if (this.type == "harstBread")
        {
            //For All Items
            this.identity = "Harst Bread";
            this.weight = 0.4;
            this.size = 7;
            this.description = "Grainy, coarse, dark bread made from harst grain.";
            this.intForDes = 1;
            this.intDescription = "Harst bread is a common food of the peasant class.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 15; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 2; //warms player.
            this.heal = 0; //heals health.
            this.generation = -2; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 10;
            this.ingredients = [["Harst Dough", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 11; // at max, buy for 11.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 15); // at max, sell for 11.
        }
        else if (this.type == "butteredHarstBread")
        {
            //For All Items
            this.identity = "Buttered Harst Bread";
            this.weight = 0.4;
            this.size = 7;
            this.description = "Grainy, coarse, dark bread made from harst grain... with butter!!!";
            this.intForDes = 1;
            this.intDescription = "Harst bread is a common food of the peasant class.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 19; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 2; //warms player.
            this.heal = 0; //heals health.
            this.generation = -2; //recoops lost energy.
            this.replenish = 0.1; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Harst Bread", 1], ["Naaprid Butter", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 11; // at max, buy for 11.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 15); // at max, sell for 11.
        }
        else if (this.type == "kellishSanthDough")
        {
            //For All Items
            this.identity = "Santh Dough";
            this.weight = 0.3;
            this.size = 7;
            this.description = "A dough for santh bread made from traditional Kellish products.";
            this.intForDes = 2;
            this.intDescription = "Santh like in many other cultures is highly valued by the Kellish.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 6; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -4; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 2;
            this.intForCraft = 20;
            this.ingredients = [["Santh Flour", 4], ["Naaprid Butter", 2], ["Kellish Clay Pot of Naaprid Milk", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 40 - Math.floor(player.getCharisma() / 3); // at max, buy for 25.
            this.sellValue = 25; // at max, sell for 25.
        }
        else if (this.type == "santhBread")
        {
            //For All Items
            this.identity = "Santh Bread";
            this.weight = 0.3;
            this.size = 7;
            this.description = "The smoothest, lightest, whitest, and most delicate bread one could ever eat.";
            this.intForDes = 1;
            this.intDescription = "Properly made santh bread is of a quality suitable for kings and queens.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 22; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 3; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.25; //recoops lost energy.
            this.replenish = 0.25; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 20;
            this.ingredients = [["Santh Dough", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 50 - Math.floor(player.getCharisma() / 3); // at max, buy for 35.
            this.sellValue = 35; // at max, sell for 35.
        }
        else if (this.type == "butteredSanthBread")
        {
            //For All Items
            this.identity = "Buttered Santh Bread";
            this.weight = 0.3;
            this.size = 7;
            this.description = "The smoothest, lightest, whitest, and most delicate bread one could ever eat... With Butter!";
            this.intForDes = 1;
            this.intDescription = "Properly made santh bread is of a quality suitable for kings and queens.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 26; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 3; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.4; //recoops lost energy.
            this.replenish = 0.35; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Santh Bread", 1], ["Naaprid Butter", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 61 - Math.floor(player.getCharisma() / 3); // at max, buy for 46.
            this.sellValue = 46; // at max, sell for 46.
        }
        else if (this.type == "naapridButter")
        {
            //For All Items
            this.identity = "Naaprid Butter";
            this.weight = 0.1;
            this.size = 5;
            this.description = "Creamy fatty butter from a naaprid.";
            this.intForDes = 1;
            this.intDescription = "Naaprid butter is used in many kellish and southern freydic recipes.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 10;
            this.intForCraft = 20;
            this.ingredients = [["Kellish Clay Pot of Naaprid Milk", 1]];
            this.biproducts = [[new Item("kellishClayPot", false), 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 11 - Math.floor(player.getCharisma() / 25); // at max, buy for 9.
            this.sellValue = 7 + Math.floor(player.getCharisma() / 25); // at max, sell for 9.
        }
        else if (this.type == "honey")
        {
            //For All Items
            this.identity = "Honey";
            this.weight = 0.6;
            this.size = 6;
            this.description = "Sticky sweet thick golden fluid.";
            this.intForDes = 3;
            this.intDescription = "Bees collect nectar from plants and make it into honey to feed their young.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 6; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.2; //recoops lost energy.
            this.replenish = 0.2; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 26 - Math.floor(player.getCharisma() / 8); // at max, buy for 20.
            this.sellValue = 15 + Math.floor(player.getCharisma() / 10); // at max, sell for 20.
        }
        else if (this.type == "ogard")
        {
            //For All Items
            this.identity = "Ogard";
            this.weight = 0.9;
            this.size = 8;
            this.description = "Ogard is a large ovular hard seed produced by the ogard plant.";
            if (player.raceName == "Freynor")
            {
                this.intForDes = 0;
            }
            else
            {
                this.intForDes = 4;
            }
            this.intDescription = "It is popularly used ground as a spice to flavour certain foods and drinks.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 46 - Math.floor(player.getCharisma() / 5); // at max, buy for 36.
            this.sellValue = 18 + Math.floor(player.getCharisma() / 3); // at max, sell for 33.
        }
        else if (this.type == "groundOgard")
        {
            //For All Items
            this.identity = "Ground Ogard";
            this.weight = 0.9;
            this.size = 8;
            this.description = "Ground ogard has a strong, hot, nutty, wood aromatic.";
            if (player.raceName == "Freynor")
            {
                this.intForDes = 0;
            }
            else
            {
                this.intForDes = 4;
            }

            this.intDescription = "This spice originates from the north where it is commonly used in hot drinks, baked goods, and desserts.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 9;
            this.intForCraft = 2;
            this.ingredients = [["Ogard", 1]];
            this.biproducts = [[new Item("ogardPollen", false), 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 7 - Math.floor(player.getCharisma() / 15); // at max, buy for 4.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "ogardPollen")
        {
            //For All Items
            this.identity = "Ogard Pollen";
            this.weight = 0.02;
            this.size = 8;
            this.description = "Ogard Pollen is a light yellow fluffy airy substance that smells imensely sweet, hot, and nutty.";
            if (player.raceName == "Freynor")
            {
                this.intForDes = 2;
            }
            else
            {
                this.intForDes = 7;
            }
            this.intDescription = "Ogard pollen is used in alchemy and to make fine perfume.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 19 - Math.floor(player.getCharisma() / 10); // at max, buy for 14.
            this.sellValue = 10 + Math.floor(player.getCharisma() / 12); // at max, sell for 14.
        }
        else if (this.type == "driedTechiLeaf")
        {
            //For All Items
            this.identity = "Dried Techi Leaf";
            this.weight = 0.1;
            this.size = 7;
            this.description = "The dried leaf of a techi weed.";
            this.intForDes = 5;
            this.intDescription = "This dried herb makes up the body of much of the tea drunk throughout the lands.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 2;
            this.ingredients = [["Techi Leaf", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3 - Math.floor(player.getCharisma() / 25); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "techiLeaf")
        {
            //For All Items
            this.identity = "Techi Leaf";
            this.weight = 0.1;
            this.size = 7;
            this.description = "Techi weeds grow scattered among the northern plains.";
            this.intForDes = 5;
            this.intDescription = "Techi leaf can be used in alchemy or it can be dried and made into a bitter tea.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "stomwikLeaf")
        {
            //For All Items
            this.identity = "Stomwik Leaf";
            this.weight = 0.1;
            this.size = 7;
            this.description = "The stomwik plant has an unforgetably foul odor, imagine wet sweaty socks that have begun to mold mixed with a hint of wrotten egg then sprinkled with a just a dab of cat urine.";
            this.intForDes = 0;
            this.intDescription = "";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 15 - Math.floor(player.getCharisma() / 10); // at max, buy for 10.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 10); // at max, sell for 8.
        }
        else if (this.type == "ishBranch")
        {
            //For All Items
            this.identity = "Ish Branch";
            this.weight = 0.4;
            this.size = 7;
            this.description = "One branch of an ish bush.";
            this.intForDes = 0;
            this.intDescription = "A plain, completely ordinary branch covered in bushy leaves.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 0; // at max, sell for 0.
        }
        else if (this.type == "butterMellowFlower")
        {
            //For All Items
            this.identity = "Butter-Mellow Flower";
            this.weight = 0.14;
            this.size = 8;
            this.description = "A thick stemmed flower with large yellow petals.";
            this.intForDes = 27;
            this.intDescription = "A light yellow oil that clings to the smooth petals makes this flower popular for use in alchemy.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3; // at max, buy for 3.
            this.sellValue = 1 + Math.floor((20 + player.getCharisma()) / 25); // at max, sell for 3.
        }
        else if (this.type == "mufBall")
        {
            //For All Items
            this.identity = "Muf";
            this.weight = 0.025;
            this.size = 4;
            this.description = "A ball of muf picked from the plant; muf is soft, fluffy, and fibrous.";
            this.intForDes = 11;
            this.intDescription = "Muf is used to make cheap cloth for manufacture into clothing and other goods.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "mufFiber")
        {
            //For All Items
            this.identity = "Muf Fiber";
            this.weight = 0.1;
            this.size = 8;
            this.description = "Muf that has been woven into strands for production into cloth.";
            this.intForDes = 11;
            this.intDescription = "Muf fiber is used to make cheap cloth for manufacture into clothing and other goods.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 11;
            this.ingredients = [["Muf", 4]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4; // at max, buy for 1.
            this.sellValue = 4; // at max, sell for 1.
        }
        else if (this.type == "mufCloth")
        {
            //For All Items
            this.identity = "Muf Cloth";
            this.weight = 0.2;
            this.size = 10;
            this.description = "Cloth made from a soft and fluffy plant material known as muf.";
            this.intForDes = 3;
            this.intDescription = "Muf cloth must be dyed white before it can be made into standard cloth products.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 14;
            this.ingredients = [["Muf Fiber", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 9; // at max, buy for 9.
            this.sellValue = 9; // at max, sell for 9.
        }
        else if (this.type == "tenicLeaf")
        {
            //For All Items
            this.identity = "Tenic Leaf";
            this.weight = 0.55;
            this.size = 8;
            this.description = "A long fuzzy pointed green leaf from a tenic plant.";
            this.intForDes = 5;
            this.intDescription = "Tenic Leaves have curing properties as well as other diverse alchemic effects.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "tenicFlower")
        {
            //For All Items
            this.identity = "Tenic Flower";
            this.weight = 0.25;
            this.size = 6;
            this.description = "A flower made up of a number of small white bubble-like enclosures.";
            this.intForDes = 5;
            this.intDescription = "Tenic flowers have some alchemic properties but are mostly used to make dye.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "tenicPaste")
        {
            //For All Items
            this.identity = "Tenic Paste";
            this.weight = 0.5;
            this.size = 7;
            this.description = "A white paste made from mashed tenic flower and a hint of water.";
            this.intForDes = 2;
            this.intDescription = "Used as a dye.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 4;
            this.ingredients = [["Tenic Flower", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 2; // at max, sell for 2.
        }
        else if (this.type == "itlinBranch")
        {
            //For All Items
            this.identity = "Itlin Branch";
            this.weight = 0.4;
            this.size = 7;
            this.description = "One branch of an itlin bush.";
            if (player.raceName == "Kel")
            {
                this.intForDes = 0;
            }
            else
            {
                this.intForDes = 6;
            }
            this.intDescription = "Many Kellish tribes believe that itlin branches ward off bad spirits.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 0; // at max, sell for 0.
        }
        else if (this.type == "ulgoyLeaf")
        {
            //For All Items
            this.identity = "Ulgoy Leaf";
            this.weight = 2.6;
            this.size = 12;
            this.description = "A leaf from a carnivorous ulgoy plant.";
            this.intForDes = 7;
            this.intDescription = "This can be used in rare alchemy recipes.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 22 - Math.floor(player.getCharisma() / 8); // at max, buy for 16.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 6); // at max, sell for 16.
        }
        else if (this.type == "tylunFlower") //this is an enhancer making the effects more significant
        {
            //For All Items
            this.identity = "Tylun Flower";
            this.weight = 0.1;
            this.size = 7;
            this.description = "A gorgeous pink flower with pointed petals and a velvety soft stem.";
            this.intForDes = 5;
            this.intDescription = "This rare flower can be used in many alchemy recipes. It serves as both an amplifier and a former.";

            //Define Utility
            this.utility = "material";

            //Utility Focused

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 22 - Math.floor(player.getCharisma() / 10); // at max, buy for 17.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 6); // at max, sell for 16.
        }
        else if (this.type == "gojiiBerries")
        {
            //For All Items
            this.identity = "Gojii Berries";
            this.weight = 0.5;
            this.size = 7;
            this.description = "Sweet smelling light green berries dotted with three red spots.";
            this.intForDes = 44;
            this.intDescription = "The Gojii berry contains one of the most poisonous compounds in the world...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "gojii";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 45 - Math.floor(player.getCharisma() / 2.5); // at max, buy for 25.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 5); // at max, sell for 15.
        }
        else if (this.type == "healingSalve")
        {
            //For All Items
            this.identity = "Jar of Healing Salve";
            this.weight = 3;
            this.size = 6;
            this.description = "An expertly devised alchemic mixture that can be used to heal minor wounds.";
            this.intForDes = 6;
            this.intDescription = "Healing salve is the most commonly used medacine in the lands.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["glassJar", 1]];

            //Utility Focused
            this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 2; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "healthI";

            //Crafting
            this.yield = 1;
            this.intForCraft = 10;
            this.ingredients = [["Glass Jar", 1], ["Naaprid Butter", 1], ["Culpris Leaf", 8], ["Lizard Tail", 1], ["Blubber", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 70 - Math.floor(player.getCharisma() / 2); // at max, buy for 45.
            this.sellValue = 30 + Math.floor(player.getCharisma() / 3); // at max, sell for 45.
        }
        else if (this.type == "trollsBlood")
        {
            //For All Items
            this.identity = "Jar of Tempered Troll's Blood";
            this.weight = 3;
            this.size = 6;
            this.description = "Troll's blood that has been tempered at a perfect temperature over the course of several days.";
            this.intForDes = 24;
            this.intDescription = "Trolls' blood is responsible for their uncanny ability to regenerate from injuries.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["glassJar", 1]];

            //Utility Focused
            this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 3; //quenches thirst.
            this.warmth = 3; //warms player.
            this.heal = 15; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "healthVI";

            //Crafting
            this.yield = 1;
            this.intForCraft = 49;
            this.ingredients = [["Jar of Troll's Blood", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1000 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 800.
            this.sellValue = 300 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 500.
        }
        else if (this.type == "rawTrollsBlood")
        {
            //For All Items
            this.identity = "Jar of Troll's Blood";
            this.weight = 4;
            this.size = 6;
            this.description = "The blood of a troll stored in a jar.";
            this.intForDes = 20;
            this.intDescription = "Troll's have a slight natural magic resistance; their raw blood exhibits this feature!";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["glassJar", 1]];

            //Utility Focused
            this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 3; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = -4; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = -20; //restores will.

            //ability
            this.ability = "trollPoison";

            //Crafting
            this.yield = 1;
            this.intForCraft = 27;
            this.ingredients = [["Glass Jar", 1], ["Troll Flesh", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 690 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 590.
            this.sellValue = 185 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 285.
        }
        else if (this.type == "jarOfUlgoyNectar")
        {
            //For All Items
            this.identity = "Jar of Ulgoy Nectar";
            this.weight = 3.5;
            this.size = 6;
            this.description = "The sweet yet sharply sour nectar of the ulgoy plant.";
            this.intForDes = 9;
            this.intDescription = "This nectar also acts as the Ulgoy plant's stomach acid so it is best not to eat it.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["glassJar", 1]];

            //Utility Focused
            this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 5; //satisfies hunger.
            this.thirst = 4; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = -12; //heals health.
            this.generation = -5; //recoops lost energy.
            this.replenish = -5; //restores will.

            //ability
            this.ability = "foodpoisoning";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 45 - Math.floor(player.getCharisma() / 3); // at max, buy for 30.
            this.sellValue = 15 + Math.floor(player.getCharisma() / 3); // at max, sell for 30.
        }
        else if (this.type == "bucketOfNaapridMilk")
        {
            //For All Items
            this.identity = "Bucket of Naaprid Milk";
            this.weight = 6;
            this.size = 12;
            this.description = "An iron bucket filled with the thick creamy milk of a naaprid.";
            this.intForDes = 3;
            this.intDescription = "The Kellish were the first people to tame and farm naaprids for milk and meat.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["bucket", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 10; //satisfies hunger.
            this.thirst = 35; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 2; //recoops lost energy.
            this.replenish = 1; //restores will.

            //ability
            this.ability = "quench";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 38 - Math.floor(player.getCharisma() / 4); // at max, buy for 26.
            this.sellValue = 18 + Math.floor(player.getCharisma() / 6); // at max, sell for 26.
        }
        else if (this.type == "bucketOfWaantiMilk")
        {
            //For All Items
            this.identity = "Bucket of Waanti Milk";
            this.weight = 6;
            this.size = 12;
            this.description = "An iron bucket filled with the sour, gamey milk of a waanti.";
            this.intForDes = 3;
            this.intDescription = "Waanti are generally herded by the Freydic, and used for both milk and meat.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["bucket", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 6; //satisfies hunger.
            this.thirst = 28; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "quench";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 29 - Math.floor(player.getCharisma() / 10); // at max, buy for 24.
            this.sellValue = 13 + Math.floor(player.getCharisma() / 5); // at max, sell for 23.
        }
        else if (this.type == "bucketOfWater")
        {
            //For All Items
            this.identity = "Bucket of Water";
            this.weight = 6;
            this.size = 12;
            this.description = "An iron bucket filled to the brim with water.";
            this.intForDes = 1;
            this.intDescription = "Buckets of water are only used in recipes that require a lot of water.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["bucket", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 35; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 1; //recoops lost energy.
            this.replenish = 1; //restores will.

            //ability
            this.ability = "quench";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 10 - Math.floor(player.getCharisma() / 10); // at max, buy for 5.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 25); // at max, sell for 3.
        }
        else if (this.type == "bucketOfTechiTea")
        {
            //For All Items
            this.identity = "Bucket of Techi Tea";
            this.weight = 6;
            this.size = 12;
            this.description = "An iron bucket filled to the brim with hot leave juice.";
            this.intForDes = 1;
            this.intDescription = "Techi weed is the standard base for almost all tea in the lands.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["bucket", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 35; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 2.5; //recoops lost energy.
            this.replenish = 4; //restores will.
            this.wake = 5; //awakens player.

            //ability
            this.ability = "quench";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Bucket of Water", 1], ["Dried Techi Leaf", 9]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue =  45 - Math.floor(player.getCharisma() / 2); // at max, buy for 20.
            this.sellValue = 12 + Math.floor(player.getCharisma() / 6); // at max, sell for 20.
        }
        else if (this.type == "techiTea")
        {
            //For All Items
            this.identity = "Techi Tea";
            this.weight = 1;
            this.size = 6;
            this.description = "A pint glass filled with plain unflavoured techi tea.";
            this.intForDes = 2;
            this.intDescription = "It is a hot drink that is both energizing and calming.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["pintGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 4; //quenches thirst.
            this.warmth = 5; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.25; //recoops lost energy.
            this.replenish = 0.5; //restores will.
            this.wake = 0.5; //awakens player.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 10;
            this.intForCraft = 0;
            this.ingredients = [["Pint Glass", 10], ["Bucket of Techi Tea", 1]];
            this.biproducts = [[new Item("bucket", false), 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 25); // at max, buy for 3.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 50); // at max, sell for 3.
        }
        else if (this.type == "bucketOfPluttJuice")
        {
            //For All Items
            this.identity = "Bucket of Plutt Juice";
            this.weight = 7;
            this.size = 12;
            this.description = "An iron bucket filled to the brim with fresh squeezed plutt berry juice.";
            if (player.raceName == "Freynor")
            {
                this.intForDes = 1;
            }
            else
            {
                this.intForDes = 11;
            }
            this.intDescription = "Hot plutt berry cider, a freydic specialty, can be made by heating plutt berry juice with some ground ogard.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["bucket", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 14; //satisfies hunger.
            this.thirst = 40; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 1; //recoops lost energy.
            this.replenish = 2; //restores will.

            //ability
            this.ability = "quench";

            //Crafting
            this.yield = 1;
            if (player.raceName == "Freynor")
            {
                this.intForCraft = 0;
            }
            else
            {
                this.intForCraft = 4;
            }
            this.ingredients = [["Bucket", 1], ["Plutt Berries", 14]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 75 - Math.floor(player.getCharisma() / 5); // at max, buy for 65.
            this.sellValue = 35 + Math.floor(player.getCharisma() / 3); // at max, sell for 50.
        }
        else if (this.type == "pluttJuicePintGlass")
        {
            //For All Items
            this.identity = "Pint Glass of Plutt Juice";
            this.weight = 1;
            this.size = 6;
            this.description = "A pint glass filled with fresh squeezed plutt berry juice.";
            this.intForDes = 0;
            this.intDescription = "It has a pulpy somewhat viscous texture and a strong natural sweetness.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["pintGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1.4; //satisfies hunger.
            this.thirst = 5; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.1; //recoops lost energy.
            this.replenish = 0.2; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 10;
            this.intForCraft = 0;
            this.ingredients = [["Pint Glass", 10], ["Bucket of Plutt Juice", 1]];
            this.biproducts = [[[new Item("bucket", false), 1]]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 9 - Math.floor(player.getCharisma() / 50); // at max, buy for 8.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 25); // at max, sell for 5.
        }
        else if (this.type == "bucketOfHotPluttBerryCider")
        {
            //For All Items
            this.identity = "Bucket of Hot Plutt Berry Cider";
            this.weight = 7;
            this.size = 12;
            this.description = "An iron bucket filled to the brim with sweet spiced plutt berry cider.";
            this.intForDes = 0;
            this.intDescription = "The cider fills the air around it with a hot, nutty and sweet berry scent.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["bucket", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 15; //satisfies hunger.
            this.thirst = 40; //quenches thirst.
            this.warmth = 40; //warms player.
            this.heal = 0; //heals health.
            this.generation = 1; //recoops lost energy.
            this.replenish = 2; //restores will.

            //ability
            this.ability = "quench";

            //Crafting
            this.yield = 1;
            if (player.raceName == "Freynor")
            {
                this.intForDes = 1;
            }
            else
            {
                this.intForDes = 11;
            }
            this.ingredients = [["Bucket of Plutt Juice", 1], ["Ground Ogard", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 100 - Math.floor(player.getCharisma() / 5); // at max, buy for 90.
            this.sellValue = 55 + Math.floor(player.getCharisma() / 3); // at max, sell for 70.
        }
        else if (this.type == "pluttCiderPintGlass")
        {
            //For All Items
            this.identity = "Pint Glass of Hot Plutt Berry Cider";
            this.weight = 1;
            this.size = 6;
            this.description = "A pint glass filled with spiced plutt berry cider.";
            this.intForDes = 0;
            this.intDescription = "Plutt berry cider has a strong spicy and nutty aroma that accompanies that of the plutt berries.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["pintGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1.5; //satisfies hunger.
            this.thirst = 5; //quenches thirst.
            this.warmth = 5; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.1; //recoops lost energy.
            this.replenish = 0.2; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 10;
            this.intForCraft = 0;
            this.ingredients = [["Pint Glass", 10], ["Bucket of Hot Plutt Berry Cider", 1]];
            this.biproducts = [[[new Item("bucket", false), 1]]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 14 - Math.floor(player.getCharisma() / 15); // at max, buy for 11.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 12); // at max, sell for 9.
        }
        else if (this.type == "walrusLeatherWaterskinFull")
        {
            //For All Items
            this.identity = "Walrus Leather Waterskin (full)";
            this.weight = 3;
            this.size = 8;
            this.description = "A water skin made from walrus hide.";
            this.intForDes = 0;
            this.intDescription = "The walrus skin holds the water well.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["walrusLeatherWaterskinTwo", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 4; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6 - Math.floor(player.getCharisma() / 15); // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 25); // at max, sell for 3.
        }
        else if (this.type == "walrusLeatherWaterskinTwo")
        {
            //For All Items
            this.identity = "Walrus Leather Waterskin (2)";
            this.weight = 2;
            this.size = 8;
            this.description = "A water skin made from walrus hide.";
            this.intForDes = 0;
            this.intDescription = "The walrus skin holds the water well.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["walrusLeatherWaterskinOne", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 4; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4 - Math.floor(player.getCharisma() / 50); // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 25); // at max, sell for 3.
        }
        else if (this.type == "walrusLeatherWaterskinOne")
        {
            //For All Items
            this.identity = "Walrus Leather Waterskin (1)";
            this.weight = 1;
            this.size = 8;
            this.description = "A water skin made from walrus hide.";
            this.intForDes = 0;
            this.intDescription = "There's about one good drink left in it.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["walrusLeatherWaterskin", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 4; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3; // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 25); // at max, sell for 3.
        }
        else if (this.type == "harstAle")
        {
            //For All Items
            this.identity = "Harst Ale";
            this.weight = 1;
            this.size = 6;
            this.description = "A glass pint of harst ale.";
            this.intForDes = 1;
            this.intDescription = "This ale is made from harst grain.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["pintGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.5; //satisfies hunger.
            this.thirst = 4; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.5; //recoops lost energy.
            this.replenish = -2; //restores will.
            this.alcohol = 35; //intoxicates the mind.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 200;
            this.intForCraft = 0;
            this.ingredients = [["Pint Glass", 200], ["Barrel of Harst Ale", 1]];
            this.biproducts = [[[new Item("barrel", false), 1]]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3 - Math.floor(player.getCharisma() / 50); // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "pluttWine")
        {
            //For All Items
            this.identity = "Pint of Plutt Wine";
            this.weight = 1;
            this.size = 6;
            this.description = "A glass pint of plutt wine.";
            this.intForDes = 1;
            this.intDescription = "This wine is made from plutt berries.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["pintGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.5; //satisfies hunger.
            this.thirst = 4; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.5; //recoops lost energy.
            this.replenish = -3; //restores will.
            this.alcohol = 50; //intoxicates the mind.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 200;
            this.intForCraft = 0;
            this.ingredients = [["Bottle of Plutt Wine", 1], ["Pint Glass", 4]];
            this.biproducts = [[[new Item("glassBottle", false), 1]]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 22 - Math.floor(player.getCharisma() / 15); // at max, buy for 19.
            this.sellValue = 17 + Math.floor(player.getCharisma() / 25); // at max, sell for 19.
        }
        else if (this.type == "glassBottleOfPluttWine")
        {
            //For All Items
            this.identity = "Bottle of Plutt Wine";
            this.weight = 4;
            this.size = 6;
            this.description = "A bottle of plutt berry wine.";
            this.intForDes = 0;
            this.intDescription = "It is a fairly sweet wine with notes of honey, spice and a butteryness attained by aging in wood.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["glassBottle", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2; //satisfies hunger.
            this.thirst = 16; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 2; //recoops lost energy.
            this.replenish = -12; //restores will.
            this.alcohol = 200; //intoxicates the mind.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 40;
            this.intForCraft = 0;
            this.ingredients = [["Glass Bottle", 50], ["Cask of Plutt Wine", 1]];
            this.biproducts = [[[new Item("barrel", false), 1]]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 82 - Math.floor(player.getCharisma() / 5); // at max, buy for 72.
            this.sellValue = 66 + Math.floor(player.getCharisma() / 8); // at max, sell for 72.
        }
        else if (this.type == "glassBottleOfWater")
        {
            //For All Items
            this.identity = "Bottle of Water";
            this.weight = 4;
            this.size = 6;
            this.description = "A bottle of water.";
            this.intForDes = 0;
            this.intDescription = "The water inside the bottle is wet... be careful.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["glassBottle", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 16; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.4; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 10 - Math.floor(player.getCharisma() / 15); // at max, buy for 7.
            this.sellValue = 2; // at max, sell for 72.
        }
        else if (this.type == "glassBottle")
        {
            //For All Items
            this.identity = "Glass Bottle";
            this.weight = 0.5;
            this.size = 6;
            this.description = "An empty bottle made of glass.";
            this.intForDes = 0;
            this.intDescription = "Usually this type of container is used to hold wine or other fancy alcoholic drinks.";

            //Define Utility
            this.utility = "Material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 13;
            this.ingredients = [["Glass", 1]];


            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 2; // at max, sell for 2.
        }
        else if (this.type == "waterPintGlass")
        {
            //For All Items
            this.identity = "Pint Glass of Water";
            this.weight = 1;
            this.size = 6;
            this.description = "A pint glass filled with water.";
            this.intForDes = 0;
            this.intDescription = "A less intoxicating alternative to alcohol!";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["pintGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 4; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.1; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 10;
            this.intForCraft = 0;
            this.ingredients = [["Pint Glass", 10], ["Bucket of Water", 1]];
            this.biproducts = [[[new Item("bucket", false), 1]]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "kellishClayPotOfNaapridMilk")
        {
            //For All Items
            this.identity = "Kellish Clay Pot of Naaprid Milk";
            this.weight = 40;
            this.size = 12;
            this.description = "A kellish style of pot filled with the milk of a naaprid.";
            this.intForDes = 8;
            if (player.raceName == "Kel")
            {
                this.intForDes = 0;
            }
            this.intDescription = "This type of pot is traditionally used by the kellish to collect milk from the local naaprids.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["kellishClayPot", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 18; //satisfies hunger.
            this.thirst = 60; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 3; //recoops lost energy.
            this.replenish = 2; //restores will.

            //ability
            this.ability = "quench";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 85 - Math.floor(player.getCharisma() / 5); // at max, buy for 75.
            this.sellValue = 48 + Math.floor(player.getCharisma() / 2); // at max, sell for 73.
        }
        else if (this.type == "kellishClayPotOfWaantiMilk")
        {
            //For All Items
            this.identity = "Kellish Clay Pot of Waanti Milk";
            this.weight = 40;
            this.size = 12;
            this.description = "A kellish style of pot filled with the sour, gamey milk of a waanti.";
            this.intForDes = 8;
            if (player.raceName == "Kel")
            {
                this.intForDes = 0;
            }
            this.intDescription = "This type of pot is not traditionally used to hold such a milk.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["kellishClayPot", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 12; //satisfies hunger.
            this.thirst = 45; //quenches thirst.
            this.warmth = 1.7; //warms player.
            this.heal = 0; //heals health.
            this.generation = 1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "quench";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 54 - Math.floor(player.getCharisma() / 5); // at max, buy for 44.
            this.sellValue = 28 + Math.floor(player.getCharisma() / 3); // at max, sell for 43.
        }
        else if (this.type == "kellishClayPotOfMushroomStew")
        {
            //For All Items
            this.identity = "Kellish Clay Pot of Mushroom Stew";
            this.weight = 45;
            this.size = 12;
            this.description = "A kellish style of pot filled with a brothy stew of mushrooms, potatoes, and harst grain.";
            this.intForDes = 3;
            if (player.raceName == "Kel")
            {
                this.intForDes = 1;
            }
            this.intDescription = "This stew can be portioned into smaller servings if you have clay bowls at hand.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["kellishClayPot", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 60; //satisfies hunger.
            this.thirst = 60; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 2; //restores will.

            //ability
            this.ability = "sensational";

            //Crafting
            this.yield = 2;
            this.intForCraft = 23;
            if (player.raceName == "Kel")
            {
                this.intForCraft = 9;
            }
            this.ingredients = [["Kellish Clay Pot of Water", 1], ["Boiled Glin Mushrooms", 8], ["Potato", 12], ["Harst Grain", 9]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 154 - Math.floor(player.getCharisma() / 2); // at max, buy for 129.
            this.sellValue = 87 + Math.floor(player.getCharisma() / 2); // at max, sell for 112.
        }
        else if (this.type == "kellishClayPotOfWater")
        {
            //For All Items
            this.identity = "Kellish Clay Pot of Water";
            this.weight = 40;
            this.size = 12;
            this.description = "A kellish style of pot filled with water.";
            this.intForDes = 2;
            this.intDescription = "This style of pot holds a lot of water.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["kellishClayPot", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 60; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 2; //restores will.

            //ability
            this.ability = "quench";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 17 - Math.floor(player.getCharisma() / 25); // at max, buy for 12.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 15); // at max, sell for 11.
        }
        else if (this.type == "pintGlass")
        {
            //For All Items
            this.identity = "Pint Glass";
            this.weight = 0.1;
            this.size = 6;
            this.description = "A glass that can hold up to a pint of liquid.";
            this.intForDes = 0;
            this.intDescription = "This type of container is most oftenly used for alcohol such as beer.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 2;
            this.intForCraft = 5;
            this.ingredients = [["Glass", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "walrusLeatherWaterskin")
        {
            //For All Items
            this.identity = "Walrus Leather Waterskin (empty)";
            this.weight = 0.1;
            this.size = 8;
            this.description = "A water skin made from walrus hide.";
            this.intForDes = 0;
            this.intDescription = "It seems to be empty right now.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 8;
            this.intForCraft = 15;
            this.ingredients = [["Walrus Hide", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3; // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 25); // at max, sell for 3.
        }
        else if (this.type == "kellishClayPot")
        {
            //For All Items
            this.identity = "Kellish Clay Pot";
            this.weight = 15;
            this.size = 15;
            this.description = "A kellish style of pot made from from clay.";
            this.intForDes = 7;
            if (player.raceName == "Kel")
            {
                this.intForDes = 0;
            }
            this.intDescription = "This is used for holding huge amounts of liquids, as well as for cooking soups and stews in.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 14;
            if (player.raceName == "Kel")
            {
                this.intForCraft = 5;
            }
            this.ingredients = [["Clay", 5]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 14 - Math.floor(player.getCharisma() / 25); // at max, buy for 12.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 15); // at max, sell for 11.
        }
        else if (this.type == "bucket")
        {
            //For All Items
            this.identity = "Bucket";
            this.weight = 2;
            this.size = 12;
            this.description = "An iron bucket.";
            this.intForDes = 4;
            this.intDescription = "This is used for holding large amounts of liquids.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 8;
            this.ingredients = [["Iron", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 10); // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 25); // at max, sell for 3.
        }
        else if (this.type == "glassJar")
        {
            //For All Items
            this.identity = "Glass Jar";
            this.weight = 1;
            this.size = 6;
            this.description = "A jar made of glass sealed tighly with a metal lid.";
            this.intForDes = 4;
            this.intDescription = "This can be used to contain magical substances and other such commodities that should be stored in a vaccum sealed container.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 4;
            this.ingredients = [["Glass", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4 - Math.floor(player.getCharisma() / 25); // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "jarOfOil")
        {
            //For All Items
            this.identity = "Jar of Oil";
            this.weight = 2;
            this.size = 6;
            this.description = "A glass jar full to the brim with flammable oil.";
            this.intForDes = 9;
            this.intDescription = "This can be used to fuel torches and lamps as well as to set flammable traps or craft flammable arrows.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 9;
            this.ingredients = [["Blubber", 1], ["Glass Jar", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 24 - Math.floor(player.getCharisma() / 12); // at max, buy for 20.
            this.sellValue = 9 + Math.floor(player.getCharisma() / 5); // at max, sell for 19.
        }
        else if (this.type == "potionGlass")
        {
            //For All Items
            this.identity = "Potion Glass";
            this.weight = 0.2;
            this.size = 6;
            this.description = "A glass container specifically designed for holding liquid alchemic mixtures.";
            this.intForDes = 1;
            this.intDescription = "This type of container is necessary in order to make most potions.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 2;
            this.intForCraft = 6;
            this.ingredients = [["Glass", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2 - Math.floor(player.getCharisma() / 50); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "vialOfWater")
        {
            //For All Items
            this.identity = "Vial of Water";
            this.weight = 0.5;
            this.size = 5;
            this.description = "A potion glass full of water.";
            this.intForDes = 4;
            this.intDescription = "Most potions require water as their base.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["potionGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2 - Math.floor(player.getCharisma() / 50); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "wyrExtract")
        {
            //For All Items
            this.identity = "Wyr Leaf Extract";
            this.weight = 0.6;
            this.size = 5;
            this.description = "An intensely bitter dark Green Liquid extracted from wyr Leaves.";
            this.intForDes = 14;
            this.intDescription = "Wyr leaf extract is an antidote for basic poisons; the immune system reacts negatively to wyr extract.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["potionGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = -5; //satisfies hunger.
            this.thirst = 2; //quenches thirst.
            this.warmth = -1; //warms player.
            this.heal = 0; //heals health.
            this.generation = -2; //recoops lost energy.
            this.replenish = -3; //restores will.

            //ability
            this.ability = "rawwyr";

            //Crafting
            this.yield = 1;
            this.intForCraft = 14;
            this.ingredients = [["Potion Glass", 1], ["Wyr Leaf", 33]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 73 - Math.floor(player.getCharisma() / 50); // at max, buy for 72.
            this.sellValue = 67 + Math.floor(player.getCharisma() / 10); // at max, sell for 72.
        }
        else if (this.type == "ogardPerfume")
        {
            //For All Items
            this.identity = "Ogard Perfume";
            this.weight = 0.5;
            this.size = 5;
            this.description = "A liquid perfume with the scent of ogard spice.";
            this.intForDes = 0;
            this.intDescription = "It smells sweet and wild, with a hot, nutty aroma.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["potionGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "ogardPerfume";

            //Crafting
            this.yield = 1;
            this.intForCraft = 14;
            this.ingredients = [["Vial of Water", 1], ["Ogard Pollen", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 34 - Math.floor(player.getCharisma() / 6); // at max, buy for 26.
            this.sellValue = 20 + Math.floor(player.getCharisma() / 8); // at max, sell for 26.
        }
        else if (this.type == "cleansingPotion")
        {
            //For All Items
            this.identity = "Potion of Cleansing";
            this.weight = 0.5;
            this.size = 5;
            this.description = "A light coloured liquid that is both tasteless and odorless.";
            this.intForDes = 41;
            this.intDescription = "This potion causes the player to become sick with a magical illness that cures poisons and other biological afflictions.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["potionGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = -2; //satisfies hunger.
            this.thirst = -10; //quenches thirst.
            this.warmth = -10; //warms player.
            this.heal = 0; //heals health.
            this.generation = -2; //recoops lost energy.
            this.replenish = 1; //restores will.

            //ability
            this.ability = "cleansing";

            //Crafting
            this.yield = 1;
            this.intForCraft = 35;
            this.ingredients = [["Wyr Leaf Extract", 1], ["Neprilne Berries", 2], ["Bear Tongue", 1], ["Neev Flesh", 1], ["Palnt Flower", 8], ["Fermented Viper Venom Gland", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 925 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 725.
            this.sellValue = 495 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 695.
        }
        else if (this.type == "energyPotionI")
        {
            //For All Items
            this.identity = "Potion of Energizing";
            this.weight = 0.5;
            this.size = 5;
            this.description = "The smooth syrup thick yellow liquid ripples quickly; you can feel the vibrations it makes through its glass container.";
            this.intForDes = 41;
            this.intDescription = "This potion restores your energy slowly over time.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["potionGlass", 1]];

            //Utility Focused
            this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "energyI";

            //Crafting
            this.yield = 1;
            this.intForCraft = 32;
            this.ingredients = [["Vial of Water", 1], ["Raw Wolf Liver", 1], ["Palnt Flower", 1], ["Honey", 1], ["Fermented Narthwarp Mouth", 1], ["Lizard Tail", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 140 - Math.floor(player.getCharisma() / 1); // at max, buy for 90.
            this.sellValue = 65 + Math.floor(player.getCharisma() / 2); // at max, sell for 90.
        }
        else if (this.type == "energilPotionI")
        {
            //For All Items
            this.identity = "Syrum of Tirelessness";
            this.weight = 0.5;
            this.size = 5;
            this.description = "A thick and glistening pink liquid with a slight opaqueness to it.";
            this.intForDes = 35;
            this.intDescription = "This potion reduces the cost of all actions that would normally consume energy.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["potionGlass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "energilI";

            //Crafting
            this.yield = 1;
            this.intForCraft = 30;
            this.ingredients = [["Potion Glass", 1], ["Ulgoy Leaf", 2], ["Lizard Tail", 1], ["Honey", 1], ["Palnt Flower", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 208 - Math.floor(player.getCharisma() / 1); // at max, buy for 158.
            this.sellValue = 96 + Math.floor(player.getCharisma() / 2); // at max, sell for 121.
        }
        else if (this.type == "energilPotionII")
        {
            //For All Items
            this.identity = "Syrum of Tirelessness II";
            this.weight = 0.5;
            this.size = 5;
            this.description = "A thick and glistening pink liquid with a slight opaqueness to it.";
            this.intForDes = 35;
            this.intDescription = "This potion reduces the cost of all actions that would normally consume energy.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["Potion Glass", 1]];

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "energilII";

            //Crafting
            this.yield = 1;
            this.intForCraft = 36;
            this.ingredients = [["Potion Glass", 1], ["Ulgoy Leaf", 2], ["Mofu Foot", 1], ["Lizard Tail", 1], ["Honey", 1], ["Palnt Flower", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 349 - Math.floor(player.getCharisma() / 1); // at max, buy for 299.
            this.sellValue = 199 + Math.floor(player.getCharisma() / 1); // at max, sell for 249.
        }
        else if (this.type == "speedPotionI")
        {
            //For All Items
            this.identity = "Elixer of Dexterity";
            this.weight = 0.5;
            this.size = 5;
            this.description = "A glimmering yellow liquid swirls around rapidly in the glass as if it itself is restless.";
            this.intForDes = 0;
            this.intDescription = "This potion magically enhances your dexterity.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["potionGlass", 1]];

            //Utility Focused
            this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "speedI";

            //Crafting
            this.yield = 1;
            this.intForCraft = 33;
            this.ingredients = [["Vial of Water", 1], ["Raw Wolf Liver", 1], ["Tylun Flower", 1], ["Viper Snake Skin", 1], ["Honey", 1], ["Fermented Narthwarp Mouth", 1], ["Lizard Tail", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 225 - Math.floor(player.getCharisma() / 1); // at max, buy for 175.
            this.sellValue = 95 + Math.floor(player.getCharisma() / 2); // at max, sell for 120.
        }
        else if (this.type == "mindPotionI")
        {
            //For All Items
            this.identity = "Mind Elixer";
            this.weight = 0.5;
            this.size = 5;
            this.description = "The liquid seems almost to float within the glass, softly bubbling.";
            this.intForDes = 0;
            this.intDescription = "This potion magically enhances your intelligence as well as your willpower and memory.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["potionGlass", 1]];

            //Utility Focused
            this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 6; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 6; //restores will.

            //ability
            this.ability = "mindI";

            //Crafting
            this.yield = 1;
            this.intForCraft = 40;
            this.ingredients = [["Ut Extract", 1], ["Tylun Flower", 1], ["Honey", 1], ["Lizard Tail", 1], ["Sesre Stamen", 1], ["Palnt Flower", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1000 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 900.
            this.sellValue = 700 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 900.
        }
        else if (this.type == "utExtract")
        {
            //For All Items
            this.identity = "Ut Extract";
            this.weight = 0.5;
            this.size = 5;
            this.description = "A yellowish brown viscous liquid that smells absolutely horrendous.";
            this.intForDes = 20;
            this.intDescription = "This extract serves as a base for some of the more peculiar and powerful potions.";

            //Define Utility
            this.utility = "food";
            this.subUtility = "reusable";
            this.refund = [["potionGlass", 1]];

            //Utility Focused
            this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = -49; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = -1/2 * player.healthMAX; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 12; //restores will.

            //ability
            this.ability = "foodPoisoning";

            //Crafting
            this.yield = 1;
            this.intForCraft = 20;
            this.ingredients = [["Fermented Ut Tentacle", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 30 - Math.floor(player.getCharisma() / 12); // at max, buy for 26.
            this.sellValue = 14 + Math.floor(player.getCharisma() / 4); // at max, sell for 26.
        }
        else if (this.type == "etyrHide")
        {
            //For All Items
            this.identity = "Etyr Hide";
            this.weight = 1;
            this.size = 11;
            this.description = "Scaley hide from an Etyr.";
            this.intForDes = 6;
            this.intDescription = "This looks like it could sell for about 2 coins, but if I haggle I might be able to raise that to 5.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 9 - Math.floor(player.getCharisma() / 15); // at max, buy for 6.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 15); // at max, sell for 5.
        }
        else if (this.type == "ardilPelt")
        {
            //For All Items
            this.identity = "Ardil Pelt";
            this.weight = 0.4;
            this.size = 6;
            this.description = "The redish brown furred, three tailed pelt of an ardil.";
            this.intForDes = 2;
            this.intDescription = "Ardil pelts are a cheap commodity used to make basic fur clothing.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3 - Math.floor(player.getCharisma() / 50); // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "lizardTail")
        {
            //For All Items
            this.identity = "Lizard Tail";
            this.weight = 0.15;
            this.size = 5;
            this.description = "The green scaled tail of a lizard.";
            this.intForDes = 5;
            this.intDescription = "Lizard tails can be used to make alchemic potions. They serve as minor amplifiers and also as formers.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 0 + Math.floor(player.getCharisma() / 50); // at max, sell for 1.
        }
        else if (this.type == "neevFur")
        {
            //For All Items
            this.identity = "Neev Fur";
            this.weight = 0.5;
            this.size = 15;
            this.description = "The soft matted greyish brown fur of a neev.";
            this.intForDes = 9;
            this.intDescription = "The fur is incredibly soft, durable, and it has high elasticity.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 268 - Math.floor(player.getCharisma() / 0.35); // at max, buy for 126.
            this.sellValue = 75 + Math.floor(player.getCharisma() / 1); // at max, sell for 125.
        }
        else if (this.type == "grewbleGuts")
        {
            //For All Items
            this.identity = "Grewble Guts";
            this.weight = 3;
            this.size = 10;
            this.description = "The putrid and gooey innards of a grewble.";
            this.intForDes = 5;
            this.intDescription = "It is possible to use this in alchemy, though it is hard to imagine ingesting anything that smells this awful. It serves as a former.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "sesreStamen")
        {
            //For All Items
            this.identity = "Sesre Stamen";
            this.weight = 2.5;
            this.size = 11;
            this.description = "The stamen of this type of plant glows during the night.";
            this.intForDes = 13;
            this.intDescription = "Small insects are attracted to the glow and get stuck in the plant's sticky pollen, they are then slowly dissolved into the plant.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 19 - Math.floor(player.getCharisma() / 10); // at max, buy for 14.
            this.sellValue = 9 + Math.floor(player.getCharisma() / 10); // at max, sell for 14.
        }
        else if (this.type == "sesreLeaf")
        {
            //For All Items
            this.identity = "Sesre Leaf";
            this.weight = 1.5;
            this.size = 10;
            this.description = "The leaves are not hard nor soft, they feel smooth but also lumpy, and when squeezed their is a hint of elasticity.";
            this.intForDes = 13;
            this.intDescription = "The plant covers its self with its leaves during the day so it can save energy and digest.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4 - Math.floor(player.getCharisma() / 50); // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 25); // at max, sell for 3.
        }
        else if (this.type == "lorkWeed")
        {
            //For All Items
            this.identity = "Lork Weed";
            this.weight = 1;
            this.size = 10;
            this.description = "A prickly bush with numerous little leaves.";
            this.intForDes = 18;
            this.intDescription = "It is commonly found in bog-like environments, usually right beside a source of stagnant water.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 0 + Math.floor(player.getCharisma() / 50); // at max, sell for 1.
        }
        else if (this.type == "frichPelt")
        {
            //For All Items
            this.identity = "Frich Pelt";
            this.weight = 1;
            this.size = 12;
            this.description = "The foul smelling, mangy, grey pelt of a Frich.";
            this.intForDes = 4;
            this.intDescription = "This can be made into inexpensive clothing.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 15); // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "mountainFrichPelt")
        {
            //For All Items
            this.identity = "Mountain Frich Pelt";
            this.weight = 2.35;
            this.size = 12;
            this.description = "The foul smelling, mangy, black pelt of a mountain-frich.";
            this.intForDes = 4;
            this.intDescription = "This can be made into inexpensive clothing.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 9 - Math.floor(player.getCharisma() / 25); // at max, buy for 7.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 25); // at max, sell for 7.
        }
        else if (this.type == "waantiPelt")
        {
            //For All Items
            this.identity = "Waanti Pelt";
            this.weight = 1.25;
            this.size = 14;
            this.description = "The soft long brown furred pelt of a waanti.";
            this.intForDes = 5;
            this.intDescription = "Waanti fur is a staple product when it comes to Freydic outfitting.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 13 - Math.floor(player.getCharisma() / 12); // at max, buy for 9.
            this.sellValue = 4 + Math.floor(player.getCharisma() / 10); // at max, sell for 9.
        }
        else if (this.type == "rawWaantiFlesh")
        {
            //For All Items
            this.identity = "Raw Waanti Flesh";
            this.weight = 1.4;
            this.size = 9;
            this.description = "The raw flesh of a waanti.";
            this.intForDes = 1;
            this.intDescription = "Waanti meat is particularly gamey and often favored in the north for its fat marbled flesh, making it one of the few tender meats available. ";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.


            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 7 - Math.floor(player.getCharisma() / 25); // at max, buy for 5.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 15); // at max, sell for 5.
        }
        else if (this.type == "waantiMeat")
        {
            //For All Items
            this.identity = "Waanti Meat";
            this.weight = 1.35;
            this.size = 9;
            this.description = "The tender, and strongly gamey tasting cooked meat of a waanti.";
            this.intForDes = 2;
            this.intDescription = "Waanti meat is one of the most sought after meats in the north for its enchanting wild flavor and its tenderness.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 12; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 3; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.5; //recoops lost energy.
            this.replenish = 0.25; //restores will.


            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 13;
            this.ingredients = [["Raw Waanti Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 15 - Math.floor(player.getCharisma() / 10); // at max, buy for 10.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 10); // at max, sell for 10.
        }
        else if (this.type == "neculaisEar")
        {
            //For All Items
            this.identity = "Neculai's Ear";
            this.weight = 0.05;
            this.size = 6;
            this.description = "After killing Neculai you cut off his ear.";
            this.intForDes = 1;
            this.intDescription = "Without his ear he can't hear, oh dear!";

            //Define Utility
            this.utility = "questItem";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "natureCall")
        {
            //For All Items
            this.identity = "Nature Totem";
            this.weight = 10;
            this.size = 10;
            if (player.getKnowledge() >= 1 && player.getWillpower() >= 1)
            {
                this.description = "This stone channels nature spirits, though the essence has chosen to commune only with Irene.";
            }
            else
            {
                this.description = "This must be the source of the 'nature call'.";
            }
            this.intForDes = 35;
            this.intDescription = "This totem was crafted centuries ago, most likely by an ancient nature worshipping Kellish tribe.";

            //Define Utility
            this.utility = "questItem";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 100; // at max, buy for 100.
            this.sellValue = 100; // at max, sell for 100.
        }
        else if (this.type == "svehnsShipment")
        {
            //For All Items
            this.identity = "Svehn's Shipment";
            this.weight = 138;
            this.size = 21;
            this.description = "A crate of goods from the kingdom of Nirwaden.";
            this.intForDes = 0;
            this.intDescription = "Speak to Svehn the Smith to deliver the shipment.";

            //Define Utility
            this.utility = "questItem";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1500; // at max, buy for 1500.
            this.sellValue = 0; // at max, sell for 0.
        }
        else if (this.type == "svehnsLoot")
        {
            //For All Items
            this.identity = "Svehn's Shipment";
            this.weight = 138;
            this.size = 21;
            this.description = "A crate of goods from the kingdom of Nirwaden.";
            this.intForDes = 0;
            this.intDescription = "You decided to keep the loot for yourself...";

            //Define Utility
            this.utility = "package";
            this.store = [[new Item("svehnsLootEmpty", false, false), 1], [new Item("nirineseSpear", false, false), 10], [new Item("nirineseSabre", false, false), 10], [new Item("thriceForgedSteel", false, false), 4]];

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1500; // at max, buy for 1500.
            if (shopID != "Svehn the Smith")
            {
                this.sellValue = 1100; // at max, sell for 1100.
            }
            else
            {
                this.sellValue = 0; // at max, sell for 0.
            }
        }
        else if (this.type == "svehnsLootEmpty")
        {
            //For All Items
            this.identity = "Svehn's Shipment (Empty)";
            this.weight = 42;
            this.size = 21;
            this.description = "An empty crate that once held goods from the kingdom of Nirwaden.";
            this.intForDes = 0;
            this.intDescription = "You have looted the merchandise...";

            //Define Utility
            this.utility = "junk";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 22; // at max, buy for 1500.
            this.sellValue = 17; // at max, sell for 0.
        }
        else if (this.type == "wellAxle")
        {
            //For All Items
            this.identity = "Wooden Well Axle";
            this.weight = 4;
            this.size = 18;
            this.description = "A long wooden cylindrical axle that is spun in order to wrap or unwrap cord as a means of pullying a bucket up or down.";
            this.intForDes = 0;
            this.intDescription = "";

            //Define Utility
            this.utility = "questItem";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6; // at max, buy for 6.
            this.sellValue = 4; // at max, sell for 4.
        }
        else if (this.type == "wellCord")
        {
            //For All Items
            this.identity = "Long Metal Cord";
            this.weight = 7;
            this.size = 14;
            this.description = "A long cord fashioned of many woven strands of steel.";
            this.intForDes = 1;
            this.intDescription = "This is an incredibly durable type of cord.";

            //Define Utility
            this.utility = "questItem";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 14; // at max, buy for 14.
            this.sellValue = 12; // at max, sell for 12.
        }
        else if (this.type == "wellWinch")
        {
            //For All Items
            this.identity = "Well Winch";
            this.weight = 4;
            this.size = 19;
            this.description = "A steel winch forged in style and size to fit the design of a well.";
            this.intForDes = 0;
            this.intDescription = "The winch is the part that is manually turned in order to operate the pully system.";

            //Define Utility
            this.utility = "questItem";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 22; // at max, buy for 22.
            this.sellValue = 17; // at max, sell for 17.
        }
        else if (this.type == "wellStone")
        {
            //For All Items
            this.identity = "Chiseled Encircling Stone";
            this.weight = 1;
            this.size = 6;
            this.description = "A stone cut in a manner that would allow a number of them to be fit overlapping to form a relatively smooth empty cylinder of stone.";
            this.intForDes = 0;
            this.intDescription = "Stone cut like this is used to build wells.";

            //Define Utility
            this.utility = "questItem";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 2; // at max, sell for 2.
        }
        else if (this.type == "beesWax")
        {
            //For All Items
            this.identity = "Wax";
            this.weight = 1.8;
            this.size = 12;
            this.description = "A hefty glob of bee's wax.";
            this.intForDes = 0;
            this.intDescription = "It has an enchanting aroma of honey.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5; // at max, buy for 5.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 25); // at max, sell for 5.
        }
        else if (this.type == "candle")
        {
            //For All Items
            this.identity = "Candle";
            this.weight = 0.6;
            this.size = 12;
            this.description = "A stick of wax with a wick, usually referred to as a candle.";
            this.intForDes = 0;
            this.intDescription = "This candle has not been used yet.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["candle2", 1]];

            //ability
            this.ability = "lighter";

            //Crafting
            this.yield = 3;
            this.intForCraft = 7;
            this.ingredients = [["Wax", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 2; // at max, sell for 2.
        }
        else if (this.type == "candle2")
        {
            //For All Items
            this.identity = "Candle (2)";
            this.weight = 0.4;
            this.size = 12;
            this.description = "A stick of wax with a wick, usually referred to as a candle.";
            this.intForDes = 0;
            this.intDescription = "This candle has been worn in.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["candle1", 1]];

            //ability
            this.ability = "lighter";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "candle1")
        {
            //For All Items
            this.identity = "Candle (1)";
            this.weight = 0.2;
            this.size = 12;
            this.description = "A stick of wax with a wick, usually referred to as a candle.";
            this.intForDes = 0;
            this.intDescription = "This candle is almost all the way melted.";

            //Define Utility
            this.utility = "tool";

            //ability
            this.ability = "lighter";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "jackOLantern")
        {
            //For All Items
            this.identity = "Jack O Lantern";
            this.weight = 7;
            this.size = 12;
            this.description = "A decoratively carved pumpkin lit with several candles.";
            this.intForDes = 0;
            this.intDescription = "All of its candles are unused as of this point.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["jackOLantern2", 1]];

            //ability
            this.ability = "lighter";

            //Crafting
            this.yield = 1;
            this.intForCraft = 0;
            this.ingredients = [["Burnt Out Jack O Lantern", 1], ["Candle", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 23 - Math.floor(player.getCharisma() / 10); // at max, buy for 18.
            this.sellValue = 12 + Math.floor(player.getCharisma() / 8); // at max, sell for 18.
        }
        else if (this.type == "jackOLantern2")
        {
            //For All Items
            this.identity = "Jack O Lantern (2)";
            this.weight = 7;
            this.size = 12;
            this.description = "A decoratively carved pumpkin lit with several candles.";
            this.intForDes = 0;
            this.intDescription = "Its candles are all somewhat melted.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["jackOLantern1", 1]];

            //ability
            this.ability = "lighter";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 21 - Math.floor(player.getCharisma() / 10); // at max, buy for 16.
            this.sellValue = 10 + Math.floor(player.getCharisma() / 8); // at max, sell for 16.
        }
        else if (this.type == "jackOLantern1")
        {
            //For All Items
            this.identity = "Jack O Lantern (1)";
            this.weight = 7;
            this.size = 12;
            this.description = "A decoratively carved pumpkin lit with several candles.";
            this.intForDes = 0;
            this.intDescription = "Its candles are almost completely melted.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["jackOLanternEmpty", 1]];

            //ability
            this.ability = "lighter";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 19 - Math.floor(player.getCharisma() / 10); // at max, buy for 14.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 8); // at max, sell for 14.
        }
        else if (this.type == "jackOLanternEmpty")
        {
            //For All Items
            this.identity = "Burnt Out Jack O Lantern";
            this.weight = 7;
            this.size = 12;
            this.description = "A decoratively carved pumpkin.";
            this.intForDes = 0;
            this.intDescription = "Its candles are the way melted.";

            //Define Utility
            this.utility = "tool";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            if (player.raceName == "Kel")
            {
                this.intForCraft = 0;
            }
            else
            {
                this.intForCraft = 3;
            }
            this.ingredients = [["Pumpkin", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 16 - Math.floor(player.getCharisma() / 10); // at max, buy for 11.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 8); // at max, sell for 11.
        }
        else if (this.type == "pumpkin")
        {
            //For All Items
            this.identity = "Pumpkin";
            this.weight = 11;
            this.size = 12;
            this.description = "A large rounded orange squash.";
            this.intForDes = 0;
            this.intDescription = "Pumpkins are primarily cultivated by the kellish tribes; they are used as food and for carving.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 11 - Math.floor(player.getCharisma() / 12); // at max, buy for 7.
            this.sellValue = 4 + Math.floor(player.getCharisma() / 15); // at max, sell for 7.
        }
        else if (this.type == "roastedPumpkin")
        {
            //For All Items
            this.identity = "Roasted Pumpkin";
            this.weight = 10;
            this.size = 6;
            this.description = "A stringy textured mildly sweet roasted pumpkin squash.";
            this.intForDes = 10;
            this.intDescription = "Cooked pumpkin is best used in pumpkin bread or pumpkin pie.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 9; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 3; //warms player.
            this.heal = 0; //heals health.
            this.generation = -4; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            if (player.raceName == "Kel")
            {
                this.intForCraft = 4;
            }
            else
            {
                this.intForCraft = 10;
            }
            this.ingredients = [["Pumpkin", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6 - Math.floor(player.getCharisma() / 25); // at max, buy for 4.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 15); // at max, sell for 4.
        }
        else if (this.type == "oilLamp")
        {
            //For All Items
            this.identity = "Oil Lamp";
            this.weight = 3;
            this.size = 12;
            this.description = "An oil burning lamp.";
            this.intForDes = 0;
            this.intDescription = "The lamp is full of oil.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["oilLamp2", 1]];

            //ability
            this.ability = "lighter";

            //Crafting
            this.yield = 1;
            this.intForCraft = 0;
            this.ingredients = [["Empty Oil Lamp", 1], ["Jar of Oil", 1]];
            this.biproducts = [[new Item("glassJar", false), 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 50 - Math.floor(player.getCharisma() / 6); // at max, buy for 42.
            this.sellValue = 30 + Math.floor(player.getCharisma() / 4); // at max, sell for 42.
        }
        else if (this.type == "oilLamp2")
        {
            //For All Items
            this.identity = "Oil Lamp (2)";
            this.weight = 2.6;
            this.size = 12;
            this.description = "An oil burning lamp.";
            this.intForDes = 0;
            this.intDescription = "There is a fair amount of oil in this lamp.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["oilLamp1", 1]];

            //ability
            this.ability = "lighter";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 44 - Math.floor(player.getCharisma() / 6); // at max, buy for 36.
            this.sellValue = 24 + Math.floor(player.getCharisma() / 4); // at max, sell for 36.
        }
        else if (this.type == "oilLamp1")
        {
            //For All Items
            this.identity = "Oil Lamp (1)";
            this.weight = 2.3;
            this.size = 12;
            this.description = "An oil burning lamp.";
            this.intForDes = 0;
            this.intDescription = "This lamp is almost out of oil.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["oilLampEmpty", 1]];

            //ability
            this.ability = "lighter";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 40 - Math.floor(player.getCharisma() / 6); // at max, buy for 32.
            this.sellValue = 20 + Math.floor(player.getCharisma() / 4); // at max, sell for 32.
        }
        else if (this.type == "oilLampEmpty")
        {
            //For All Items
            this.identity = "Empty Oil Lamp";
            this.weight = 2;
            this.size = 12;
            this.description = "An oil burning lamp.";
            this.intForDes = 0;
            this.intDescription = "This lamp is out of oil.";

            //Define Utility
            this.utility = "tool";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 19;
            this.ingredients = [["Iron", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 38 - Math.floor(player.getCharisma() / 6); // at max, buy for 30.
            this.sellValue = 18 + Math.floor(player.getCharisma() / 4); // at max, sell for 30.
        }
        else if (this.type == "oilLantern")
        {
            //For All Items
            this.identity = "Oil Lantern";
            this.weight = 4;
            this.size = 12;
            this.description = "A finely crafted lantern that runs on oil.";
            this.intForDes = 0;
            this.intDescription = "The lantern is full of oil.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["oilLantern4", 1]];

            //ability
            this.ability = "lighter";

            //Crafting
            this.yield = 1;
            this.intForCraft = 0;
            this.ingredients = [["Empty Oil Lantern", 1], ["Jar of Oil", 1]];
            this.biproducts = [[new Item("glassJar", false), 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 82 - Math.floor(player.getCharisma() / 3); // at max, buy for 67.
            this.sellValue = 48 + Math.floor(player.getCharisma() / 3); // at max, sell for 63.
        }
        else if (this.type == "oilLantern4")
        {
            //For All Items
            this.identity = "Oil Lantern (4)";
            this.weight = 3.8;
            this.size = 12;
            this.description = "A finely crafted lantern that runs on oil.";
            this.intForDes = 0;
            this.intDescription = "Most of the oil in the lantern remains.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["oilLantern3", 1]];

            //ability
            this.ability = "lighter";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 78 - Math.floor(player.getCharisma() / 3); // at max, buy for 63.
            this.sellValue = 44 + Math.floor(player.getCharisma() / 3); // at max, sell for 59.
        }
        else if (this.type == "oilLantern3")
        {
            //For All Items
            this.identity = "Oil Lantern (3)";
            this.weight = 3.6;
            this.size = 12;
            this.description = "A finely crafted lantern that runs on oil.";
            this.intForDes = 0;
            this.intDescription = "The lantern has just over half of its oil.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["oilLantern2", 1]];

            //ability
            this.ability = "lighter";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 74 - Math.floor(player.getCharisma() / 3); // at max, buy for 59.
            this.sellValue = 40 + Math.floor(player.getCharisma() / 3); // at max, sell for 55.
        }
        else if (this.type == "oilLantern2")
        {
            //For All Items
            this.identity = "Oil Lantern (2)";
            this.weight = 3.4;
            this.size = 12;
            this.description = "A finely crafted lantern that runs on oil.";
            this.intForDes = 0;
            this.intDescription = "The lantern has just under half of its oil.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["oilLantern1", 1]];

            //ability
            this.ability = "lighter";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 72 - Math.floor(player.getCharisma() / 3); // at max, buy for 57.
            this.sellValue = 38 + Math.floor(player.getCharisma() / 3); // at max, sell for 53.
        }
        else if (this.type == "oilLantern1")
        {
            //For All Items
            this.identity = "Oil Lantern (1)";
            this.weight = 3.2;
            this.size = 12;
            this.description = "A finely crafted lantern that runs on oil.";
            this.intForDes = 0;
            this.intDescription = "The lantern is running low on oil..";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "reusable";
            this.refund = [["oilLanternEmpty", 1]];

            //ability
            this.ability = "lighter";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 71 - Math.floor(player.getCharisma() / 3); // at max, buy for 56.
            this.sellValue = 38 + Math.floor(player.getCharisma() / 3); // at max, sell for 53.
        }
        else if (this.type == "oilLanternEmpty")
        {
            //For All Items
            this.identity = "Empty Oil Lantern";
            this.weight = 3;
            this.size = 12;
            this.description = "A finely crafted lantern that runs on oil.";
            this.intForDes = 0;
            this.intDescription = "The Lantern has run out of oil.";

            //Define Utility
            this.utility = "tool";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 22;
            this.ingredients = [["Wood", 1], ["Iron", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 70 - Math.floor(player.getCharisma() / 3); // at max, buy for 55.
            this.sellValue = 38 + Math.floor(player.getCharisma() / 3); // at max, sell for 53.
        }
        else if (this.type == "grewbleEgg")
        {
            //For All Items
            this.identity = "Grewble Egg";
            this.weight = 2.5;
            this.size = 5;
            this.description = "One of many eggs laid by a grewble.";
            this.intForDes = 2;
            this.intDescription = "Leave it on the ground and it will hatch into a baby grewble.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "grewbleHatch";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "mofuFeather")
        {
            //For All Items
            this.identity = "Mofu Feather";
            this.weight = 0.001;
            this.size = 8;
            this.description = "A feather from a mofu bird.";
            this.intForDes = 2;
            this.intDescription = "Mofu feathers can be used in many creations.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 15); // at max, buy for 5.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 25); // at max, sell for 5.
        }
        else if (this.type == "mofuEgg")
        {
            //For All Items
            this.identity = "Mofu Egg";
            this.weight = 0.001;
            this.size = 5;
            this.description = "An egg laid by a mofu bird.";
            this.intForDes = 2;
            this.intDescription = "Mofu eggs can either be cooked or left to hatch.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "mofuHatch";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6 - Math.floor(player.getCharisma() / 25); // at max, buy for 4.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "mofuFoot")
        {
            //For All Items
            this.identity = "Mofu Foot";
            this.weight = 0.001;
            this.size = 8;
            this.description = "A hard rough bird foot from a mofu.";
            this.intForDes = 7;
            this.intDescription = "Mofu feet can be used in some alchemy recipes. They serve as formers.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3 - Math.floor(player.getCharisma() / 25); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "rawMofflingFlesh")
        {
            //For All Items
            this.identity = "Raw Moffling Flesh";
            this.weight = 0.1;
            this.size = 6;
            this.description = "The defeathered, eviscerated, whole body of a moffling ";
            this.intForDes = 3;
            this.intDescription = "Moffling is a commonly used name to refer to a baby mofu bird. Oh by the way... don't eat this raw.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "gutWorms";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6 - Math.floor(player.getCharisma() / 25); // at max, buy for 4.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "cookedMofuEgg")
        {
            //For All Items
            this.identity = "Egg";
            this.weight = 0.1;
            this.size = 6;
            this.description = "A cooked egg from a mofu bird.";
            this.intForDes = 1;
            this.intDescription = "Eggs are a good source of protein... and fat.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.05; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 5;
            this.ingredients = [["Mofu Egg", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6 - Math.floor(player.getCharisma() / 25); // at max, buy for 4.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 15); // at max, sell for 4.
        }
        else if (this.type == "fermentedMofuEgg")
        {
            //For All Items
            this.identity = "Fermented Egg";
            this.weight = 0.1;
            this.size = 6;
            this.description = "A fermented egg from a mofu bird.";
            this.intForDes = 9;
            this.intDescription = "Fermented egg is popular in Orgish cuisine, but it is also used in some alchemy recipes.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.05; //recoops lost energy.
            this.replenish = -0.25; //restores will.
            this.alcohol = 6; //intoxicates the mind.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 13;
            this.ingredients = [["Mofu Egg", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 25); // at max, buy for 6.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 15); // at max, sell for 5.
        }
        else if (this.type == "mofflingMeat")
        {
            //For All Items
            this.identity = "Moffling Meat";
            this.weight = 0.1;
            this.size = 6;
            this.description = "A whole roasted moffling.";
            this.intForDes = 1;
            this.intDescription = "In freydic tradition moffling is sometimes served as a delicacy served with fine berry sauce.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 4; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 2; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.1; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 20;
            this.ingredients = [["Raw Moffling Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 18 - Math.floor(player.getCharisma() / 15); // at max, buy for 15.
            this.sellValue = 10 + Math.floor(player.getCharisma() / 10); // at max, sell for 15.
        }
        else if (this.type == "pluttMoffling")
        {
            //For All Items
            this.identity = "Moffling Meat in Plutt Berry Sauce";
            this.weight = 0.1;
            this.size = 6;
            this.description = "A whole roasted moffling served with a thick sweet plutt berry sauce poured over it.";
            this.intForDes = 1;
            this.intDescription = "Moffling with plutt berry sauce is a delicacy enjoyed even by freydic nobles.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 7; //satisfies hunger.
            this.thirst = 0.25; //quenches thirst.
            this.warmth = 4; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.2; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 25;
            this.ingredients = [["Moffling Meat", 1], ["Plutt Berries", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 30 - Math.floor(player.getCharisma() / 10); // at max, buy for 25.
            this.sellValue = 20 + Math.floor(player.getCharisma() / 10); // at max, sell for 25.
        }
        else if (this.type == "akerMoffling")
        {
            //For All Items
            this.identity = "Moffling Meat in Aker Berry Sauce";
            this.weight = 0.1;
            this.size = 6;
            this.description = "A whole roasted moffling served with a tart aker berry sauce poured over it.";
            this.intForDes = 1;
            this.intDescription = "Moffling with aker berry sauce is a delicacy enjoyed even by freydic nobles.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 5.5; //satisfies hunger.
            this.thirst = 0.1; //quenches thirst.
            this.warmth = 4; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.2; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 23;
            this.ingredients = [["Moffling Meat", 1], ["Aker Berries", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 25 - Math.floor(player.getCharisma() / 10); // at max, buy for 20.
            this.sellValue = 15 + Math.floor(player.getCharisma() / 10); // at max, sell for 20.
        }
        else if (this.type == "rawMofuFlesh")
        {
            //For All Items
            this.identity = "Raw Mofu Flesh";
            this.weight = 3;
            this.size = 8;
            this.description = "The defeathered, eviscerated, whole body of a matured mofu bird. ";
            this.intForDes = 3;
            this.intDescription = "Mofu birds flesh is not safe to eat raw, be sure to cook it thoroughly.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "gutWorms";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 13 - Math.floor(player.getCharisma() / 12); // at max, buy for 9.
            this.sellValue = 6 + Math.floor(player.getCharisma() / 15); // at max, sell for 9.
        }
        else if (this.type == "mofuMeat")
        {
            //For All Items
            this.identity = "Mofu Meat";
            this.weight = 3;
            this.size = 8;
            this.description = "A whole roasted mofu.";
            this.intForDes = 0;
            this.intDescription = "Mofu is always a beloved addition to any meal!";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 12; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 5; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.2; //restores will.

            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 20;
            this.ingredients = [["Raw Mofu Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 30 - Math.floor(player.getCharisma() / 6); // at max, buy for 22.
            this.sellValue = 18 + Math.floor(player.getCharisma() / 12); // at max, sell for 22.
        }
        else if (this.type == "rawLargeMofuFlesh")
        {
            //For All Items
            this.identity = "Raw Large Mofu Flesh";
            this.weight = 5;
            this.size = 19;
            this.description = "The defeathered, eviscerated, whole body of a a large mofu bird. ";
            this.intForDes = 3;
            this.intDescription = "Mofu birds can grow huge when there is enough food available to permit them to. Oh and by the way, Don't eat the meat raw.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 3.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -3; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "gutWorms";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 26 - Math.floor(player.getCharisma() / 10); // at max, buy for 21.
            this.sellValue = 16 + Math.floor(player.getCharisma() / 10); // at max, sell for 21.
        }
        else if (this.type == "largeMofuMeat")
        {
            //For All Items
            this.identity = "Large Mofu Meat";
            this.weight = 5;
            this.size = 19;
            this.description = "A whole, slow roasted, and exceptionally large mofu.";
            this.intForDes = 3;
            this.intDescription = "Mofu this large is more often served at a noble's feast than a peasant's table.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 33; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 6; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.35; //restores will.

            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 26;
            this.ingredients = [["Raw Large Mofu Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 50 - Math.floor(player.getCharisma() / 5); // at max, buy for 40.
            this.sellValue = 30 + Math.floor(player.getCharisma() / 5); // at max, sell for 40.
        }
        else if (this.type == "fattyMofuLiver")
        {
            //For All Items
            this.identity = "Fatty Mofu Liver";
            this.weight = 3;
            this.size = 9;
            this.description = "Tender and creamy but firm mofu bird liver, known well as a culinary extravagence.";
            this.intForDes = 4;
            this.intDescription = "It is proper to eat fatty mofu liver raw.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 14; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0.05; //heals health.
            this.generation = 0.3; //recoops lost energy.
            this.replenish = 0.5; //restores will.

            //ability
            this.ability = "satiate";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 157 - Math.floor(player.getCharisma() / 5); // at max, buy for 147.
            this.sellValue = 134 + Math.floor(player.getCharisma() / 5); // at max, sell for 144.
        }
        else if (this.type == "golgemoffFeelers")
        {
            //For All Items
            this.identity = "Golgemoff Feelers";
            this.weight = 1;
            this.size = 8;
            this.description = "The long fleshy slimy feelers of a golgemoff.";
            this.intForDes = 15;
            this.intDescription = "The slime covering on the feelers has a toxic component that causes temporary blindness almost imediately upon contact with the skin.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 15); // at max, buy for 5.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 15); // at max, sell for 5.
        }
        else if (this.type == "rawGolgemoffFlesh")
        {
            //For All Items
            this.identity = "Raw Golgemoff Flesh";
            this.weight = 0.7;
            this.size = 7;
            this.description = "The thick sticky and jell-like yet solid raw flesh of a golgemoff.";
            this.intForDes = 13;
            this.intDescription = "The flesh of a golgemoff can be made into adhesive, but eating it is poisoness.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2; //satisfies hunger.
            this.thirst = -5; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = -2; //heals health.
            this.generation = -5; //recoops lost energy.
            this.replenish = -5; //restores will.

            //ability
            this.ability = "poisonII";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "golgemoffMeat")
        {
            //For All Items
            this.identity = "Golgemoff Meat";
            this.weight = 0.4;
            this.size = 7;
            this.description = "A hardened dry and discoloured hunk of what was once the flesh of a golgemoff.";
            this.intForDes = 13;
            this.intDescription = "This can be powdered and used as an ingredient in some alchemy recipes.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 13;
            this.ingredients = [["Raw Golgemoff Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "grushFur")
        {
            //For All Items
            this.identity = "Grush Fur";
            this.weight = 1;
            this.size = 10;
            this.description = "A section of green plant-like bristly fur.";
            this.intForDes = 36;
            this.intDescription = "Grushes natural developed this strange fur to hide among patches of grushweed unnoticed.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 9 - Math.floor(player.getCharisma() / 12); // at max, buy for 5.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 25); // at max, sell for 5.
        }
        else if (this.type == "rawGrushFlesh")
        {
            //For All Items
            this.identity = "Raw Grush Flesh";
            this.weight = 2;
            this.size = 9;
            this.description = "The raw earthy flesh of a grush.";
            this.intForDes = 6;
            this.intDescription = "If you eat it raw you may find yourself with a bit of indigestion.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -0.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "gassiness";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "grushMeat")
        {
            //For All Items
            this.identity = "Grush Meat";
            this.weight = 2;
            this.size = 9;
            this.description = "The cooked meat of a grush.";
            this.intForDes = 0;
            this.intDescription = "The meat has a natural and earthy flavor, and it is also juicy and tender.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 3; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 2; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Raw Grush Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 7 - Math.floor(player.getCharisma() / 15); // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 25); // at max, sell for 3.
        }
        else if (this.type == "avrakHide")
        {
            //For All Items
            this.identity = "Avrak Hide";
            this.weight = 2.5;
            this.size = 14;
            this.description = "A thick redish-brown hide from an avrak.";
            this.intForDes = 36;
            this.intDescription = "This can be tanned and made into leather armour or it can be made into fiber.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 20 - Math.floor(player.getCharisma() / 10); // at max, buy for 15.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 5); // at max, sell for 15.
        }
        else if (this.type == "evrakHide")
        {
            //For All Items
            this.identity = "Evrak Hide";
            this.weight = 3;
            this.size = 15;
            this.description = "A thick dark-brown hide from an evrak.";
            this.intForDes = 36;
            this.intDescription = "This can be tanned and made into leather armour or it can be made into fiber.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 25 - Math.floor(player.getCharisma() / 10); // at max, buy for 20.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 4); // at max, sell for 20.
        }
        else if (this.type == "evrakFiber")
        {
            //For All Items
            this.identity = "Fiber";
            this.weight = 0.1;
            this.size = 10;
            this.description = "Strong thin strands of fiber.";
            this.intForDes = 1;
            this.intDescription = "Fiber is a basic material used in many crafting recipies.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 6;
            this.intForCraft = 19;
            this.ingredients = [["Evrak Hide", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3; // at max, buy for 3.
            this.sellValue = 3; // at max, sell for 3.
        }
        else if (this.type == "avrakFiber")
        {
            //For All Items
            this.identity = "Fiber";
            this.weight = 0.1;
            this.size = 10;
            this.description = "Strong thin strands of fiber.";
            this.intForDes = 1;
            this.intDescription = "Fiber is a basic material used in many crafting recipies.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 7;
            this.intForCraft = 18;
            this.ingredients = [["Avrak Hide", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 2; // at max, sell for 2.
        }
        else if (this.type == "varnFiber")
        {
            //For All Items
            this.identity = "Fiber";
            this.weight = 0.1;
            this.size = 10;
            this.description = "Strong thin strands of fiber.";
            this.intForDes = 1;
            this.intDescription = "Fiber is a basic material used in many crafting recipies.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 3;
            this.intForCraft = 26;
            this.ingredients = [["Varn Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "rawTunskFlesh")
        {
            //For All Items
            this.identity = "Raw Tunsk Flesh";
            this.weight = 0.9;
            this.size = 9;
            this.description = "The raw flesh of a tunsk.";
            this.intForDes = 2;
            this.intDescription = "When cooked tunsk meat is rather tasty, if you don't mind its gamey flavour. Eating this raw may result in vomiting.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.75; //satisfies hunger.
            this.thirst = 0.25; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "potentialFoodPoisoning";


            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "tunskMeat")
        {
            //For All Items
            this.identity = "Tunsk Meat";
            this.weight = 0.85;
            this.size = 9;
            this.description = "The cooked meat of a tunsk.";
            this.intForDes = 1;
            this.intDescription = "The meat is tender, moist, and gamey.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 4.5; //satisfies hunger.
            this.thirst = 0.05; //quenches thirst.
            this.warmth = 0.5; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 13;
            this.ingredients = [["Raw Tunsk Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3 - Math.floor(player.getCharisma() / 50); // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "rawAvrakFlesh")
        {
            //For All Items
            this.identity = "Raw Avrak Flesh";
            this.weight = 3.5;
            this.size = 12;
            this.description = "A strange tender flesh with a good deal of fat.";
            this.intForDes = 1;
            this.intDescription = "Avrak flesh can be eaten raw as a delicacy.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 5; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";


            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 18 - Math.floor(player.getCharisma() / 12); // at max, buy for 14.
            this.sellValue = 9 + Math.floor(player.getCharisma() / 10); // at max, sell for 14.
        }
        else if (this.type == "rawEvrakFlesh")
        {
            //For All Items
            this.identity = "Raw Evrak Flesh";
            this.weight = 3.5;
            this.size = 12;
            this.description = "A strange tender flesh with a good deal of fat.";
            this.intForDes = 1;
            this.intDescription = "Evrak flesh can be eaten raw as a delicacy.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 5; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";


            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 18 - Math.floor(player.getCharisma() / 12); // at max, buy for 14.
            this.sellValue = 9 + Math.floor(player.getCharisma() / 10); // at max, sell for 14.
        }
        else if (this.type == "avrakMeat")
        {
            //For All Items
            this.identity = "Avrak Meat";
            this.weight = 3;
            this.size = 12;
            this.description = "The strangely tender and fatty cooked meat of an avrak.";
            this.intForDes = 1;
            this.intDescription = "Due to the fact that it is fatty, rich and exotic tasting tender meat avrak meat is highly sought after.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 24; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 4; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 22;
            this.ingredients = [["Raw Avrak Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 32 - Math.floor(player.getCharisma() / 6); // at max, buy for 24.
            this.sellValue = 19 + Math.floor(player.getCharisma() / 10); // at max, sell for 24.
        }
        else if (this.type == "evrakMeat")
        {
            //For All Items
            this.identity = "Evrak Meat";
            this.weight = 0.1;
            this.size = 6;
            this.description = "The strangely tender and fatty cooked meat of an evrak.";
            this.intForDes = 1;
            this.intDescription = "Due to the fact that it is fatty, rich and exotic tasting tender meat evrak meat is highly sought after.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 24; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 4; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 22;
            this.ingredients = [["Raw Evrak Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 32 - Math.floor(player.getCharisma() / 6); // at max, buy for 24.
            this.sellValue = 19 + Math.floor(player.getCharisma() / 10); // at max, sell for 24.
        }
        else if (this.type == "blubber")
        {
            //For All Items
            this.identity = "Blubber";
            this.weight = 1;
            this.size = 10;
            this.description = "A glob of fat...";
            this.intForDes = 9;
            this.intDescription = "This can be used to make oil which is a highly valued commodity.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 14 - Math.floor(player.getCharisma() / 10); // at max, buy for 9.
            this.sellValue = 4 + Math.floor(player.getCharisma() / 10); // at max, sell for 9.
        }
        else if (this.type == "walrusTusks")
        {
            //For All Items
            this.identity = "Walrus Tusks";
            this.weight = 2;
            this.size = 12;
            this.description = "The tusks of a land walrus.";
            this.intForDes = 12;
            this.intDescription = "Walrus tusks are used in the creation of several Freydic weapons and armours.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 17 - Math.floor(player.getCharisma() / 6); // at max, buy for 9.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 12.5); // at max, sell for 7.
        }
        else if (this.type == "fireStarter")
        {
            //For All Items
            this.identity = "Fire-Starter";
            this.weight = 1;
            this.size = 12;
            this.description = "A box of flints with an iron side to strike them against.";
            this.intForDes = 1;
            this.intDescription = "If this tool is in your inventory you can click on wood to place it as a campfire and then double click the campfire to light it!";

            //Define Utility
            this.utility = "tool";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 5;
            this.ingredients = [["Iron", 1], ["Flint", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 13 - Math.floor(player.getCharisma() / 15); // at max, buy for 10.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 15); // at max, sell for 8.
        }
        else if (this.type == "tent")
        {
            //For All Items
            this.identity = "Tent";
            this.weight = 6;
            this.size = 15;
            this.description = "A quick-to-set-up inhabitance that provides safe and comfortable rest.";
            this.intForDes = 1;
            this.intDescription = "If you have a hammer equipped click the tent in your inventory to place it, and double click on the placed tent to disassemble it.";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "tent";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 15;
            this.ingredients = [["Cloth", 6], ["Iron", 1], ["Fiber", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 55 - Math.floor(player.getCharisma() / 2); // at max, buy for 30.
            this.sellValue = 25 + Math.floor(player.getCharisma() / 10); // at max, sell for 30.
        }
        else if (this.type == "wood")
        {
            //For All Items
            this.identity = "Wood";
            this.weight = 2;
            this.size = 12;
            this.description = "Timber from trees.";
            this.intForDes = 3;
            this.intDescription = "This is an important raw material used in the crafting of many different things.";

            //Define Utility
            this.utility = "material";
            //subUtility
            this.subUtility = "campFire";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6 - Math.floor(player.getCharisma() / 25); // at max, buy for 4.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "clay")
        {
            //For All Items
            this.identity = "Clay";
            this.weight = 1.8;
            this.size = 8;
            this.description = "A hunk of clay.";
            this.intForDes = 4;
            this.intDescription = "Clay is used to make pottery of all sorts.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "stone")
        {
            //For All Items
            this.identity = "Stone";
            this.weight = 3;
            this.size = 8;
            this.description = "A chunk of rock.";
            this.intForDes = 6;
            this.intDescription = "Stone is used for either constructing or carving.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "darkStone")
        {
            //For All Items
            this.identity = "Stone";
            this.weight = 2.8;
            this.size = 8;
            this.description = "A chunk of rock.";
            this.intForDes = 30;
            this.intDescription = "This type of stone usually has a higher coal and iron content and sometimes but rarely also contains trace amounts of ruby.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "coal")
        {
            //For All Items
            this.identity = "Coal";
            this.weight = 1.2;
            this.size = 7;
            this.description = "A chunk of coal.";
            this.intForDes = 10;
            this.intDescription = "Coal is used in the forging of steel, but it also has other uses as both a fuel source and an alchemic ingredient.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 15); // at max, buy for 5.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 25); // at max, sell for 5.
        }
        else if (this.type == "ruby")
        {
            //For All Items
            this.identity = "Ruby";
            this.weight = 2;
            this.size = 7;
            this.description = "A magnificent and rare gemstone shining a rich shade of blazing red.";
            this.intForDes = 18;
            this.intDescription = "Ruby is a red variety of the mineral corundum, it is highly valued and is believed to enable certain magics.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 390; // at max, buy for 390.
            this.sellValue = 340 + Math.floor(player.getCharisma() / 1); // at max, sell for 390.
        }
        else if (this.type == "rawSilver")
        {
            //For All Items
            this.identity = "Raw Silver";
            this.weight = 2;
            this.size = 7;
            this.description = "A piece of unrefined silver.";
            this.intForDes = 3;
            this.intDescription = "Silver is a highly valued mineral that is used in many fine creations as well as in alchemy.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 82 - Math.floor(player.getCharisma() / 8); // at max, buy for 76.
            this.sellValue = 61 + Math.floor(player.getCharisma() / 3); // at max, sell for 76.
        }
        else if (this.type == "silver")
        {
            //For All Items
            this.identity = "Silver";
            this.weight = 4;
            this.size = 10;
            this.description = "A forged bar of silver.";
            this.intForDes = 2;
            this.intDescription = "Silver is a highly valued mineral that is used in many fine creations as well as in alchemy.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 21;
            this.ingredients = [["Raw Silver", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 226 - Math.floor(player.getCharisma() / 8); // at max, buy for 220.
            this.sellValue = 200 + Math.floor(player.getCharisma() / 2.5); // at max, sell for 220.
        }
        else if (this.type == "jvostranOre")
        {
            //For All Items
            this.identity = "Jvostran Ore";
            this.weight = 5;
            this.size = 10;
            this.description = "Jvostran diluted with other unimportant minerals.";
            this.intForDes = 25;
            this.intDescription = "Jvostran must be doubly purified in order to produce the famous metal it is commonly known for.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 150 - Math.floor(player.getCharisma() / 2); // at max, buy for 125.
            this.sellValue = 100 + Math.floor(player.getCharisma() / 2); // at max, sell for 125.
        }
        else if (this.type == "pureJvostranOre")
        {
            //For All Items
            this.identity = "Pure Jvostran Ore";
            this.weight = 8;
            this.size = 10;
            this.description = "Purified jvostran ore.";
            this.intForDes = 25;
            this.intDescription = "At this stage the jvostran still needs to be purified once more to be ready for use.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 36;
            this.ingredients = [["Jvostran Ore", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 325 - Math.floor(player.getCharisma() / 1); // at max, buy for 275.
            this.sellValue = 250 + Math.floor(player.getCharisma() / 2); // at max, sell for 275.
        }
        else if (this.type == "jvostran")
        {
            //For All Items
            this.identity = "Jvostran";
            this.weight = 15;
            this.size = 10;
            this.description = "A forged jvostran bar.";
            this.intForDes = 25;
            this.intDescription = "Jvostran is the most powerful non-magical metalic substance in known existence.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 43;
            this.ingredients = [["Pure Jvostran Ore", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 750 - Math.floor(player.getCharisma() / 1); // at max, buy for 700.
            this.sellValue = 600 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 700.
        }
        else if (this.type == "rawGold")
        {
            //For All Items
            this.identity = "Raw Gold";
            this.weight = 12;
            this.size = 7;
            this.description = "A piece of unrefined gold.";
            this.intForDes = 1;
            this.intDescription = "Gold is one of the most prized minerals in the lands.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 250; // at max, buy for 250.
            this.sellValue = 200 + Math.floor(player.getCharisma() / 1); // at max, sell for 250.
        }
        else if (this.type == "gold")
        {
            //For All Items
            this.identity = "Gold";
            this.weight = 25;
            this.size = 10;
            this.description = "A forged bar of gold.";
            this.intForDes = 0;
            this.intDescription = "Gold is one of the most prized minerals in the lands.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 23;
            this.ingredients = [["Raw Gold", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 600; // at max, buy for 600.
            this.sellValue = 550 + Math.floor(player.getCharisma() / 1); // at max, sell for 600.
        }
        else if (this.type == "ironOre")
        {
            //For All Items
            this.identity = "Iron Ore";
            this.weight = 2;
            this.size = 10;
            this.description = "Iron mixed with other less important minerals.";
            this.intForDes = 2;
            this.intDescription = "Iron is an important raw material used in the crafting of many different weapons and armours.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 10 - Math.floor(player.getCharisma() / 15); // at max, buy for 7.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 25); // at max, sell for 7.
        }
        else if (this.type == "iron")
        {
            //For All Items
            this.identity = "Iron";
            this.weight = 4;
            this.size = 10;
            this.description = "A forged iron bar.";
            this.intForDes = 2;
            this.intDescription = "This is an important raw material used in the crafting of many different weapons and armours.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 11;
            this.ingredients = [["Iron Ore", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 10 - Math.floor(player.getCharisma() / 15); // at max, buy for 7.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 25); // at max, sell for 7.
        }
        else if (this.type == "steel") //realsteel
        {
            //For All Items
            this.identity = "Steel";
            this.weight = 4;
            this.size = 10;
            this.description = "A forged steel bar.";
            this.intForDes = 2;
            this.intDescription = "This is an important raw material used in the crafting of many different weapons and armours.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 19;
            this.ingredients = [["Iron", 1], ["Coal", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 30 - Math.floor(player.getCharisma() / 10); // at max, buy for 25.
            this.sellValue = 15 + Math.floor(player.getCharisma() / 5); // at max, sell for 25.
        }
        else if (this.type == "twiceForgedSteel") //real steel
        {
            //For All Items
            this.identity = "Twice Forged Steel";
            this.weight = 4;
            this.size = 10;
            this.description = "A twice forged steel bar.";
            this.intForDes = 2;
            this.intDescription = "Steel that has been refined using ancient techniques.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 25;
            this.ingredients = [["Steel", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 35 - Math.floor(player.getCharisma() / 10); // at max, buy for 30.
            this.sellValue = 20 + Math.floor(player.getCharisma() / 5); // at max, sell for 30.
        }
        else if (this.type == "thriceForgedSteel") //realSteel
        {
            //For All Items
            this.identity = "Thrice Forged Steel";
            this.weight = 4;
            this.size = 10;
            this.description = "A thrice forged steel bar.";
            this.intForDes = 2;
            this.intDescription = "Steel that has been refined to perfection using ancient techniques.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 50;
            this.ingredients = [["Twice Forged Steel", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            if (shopID == "Svehn the Smith")
            {
                this.buyValue = 75 - Math.floor(player.getCharisma() / 10); // at max, buy for 65.
                this.sellValue = 50 + Math.floor(player.getCharisma() / 5); // at max, sell for 60.
            }
            else
            {
                this.buyValue = 55 - Math.floor(player.getCharisma() / 10); // at max, buy for 50.
                this.sellValue = 40 + Math.floor(player.getCharisma() / 5); // at max, sell for 50.
            }
        }
        else if (this.type == "elderWalrusTusks")
        {
            //For All Items
            this.identity = "Elder Walrus Tusks";
            this.weight = 7;
            this.size = 20;
            this.description = "The tusks of an elder walrus.";
            this.intForDes = 16;
            this.intDescription = "Elder Walrus tusks can sell for up to 37 coins and can be used to make specialized Freydic weapons and armour.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 59 - Math.floor(player.getCharisma() / 3); // at max, buy for 40.
            this.sellValue = 18 + Math.floor(player.getCharisma() / 3); // at max, sell for 37.
        }
        else if (this.type == "walrusHide")
        {
            //For All Items
            this.identity = "Walrus Hide";
            this.weight = 6;
            this.size = 35;
            this.description = "The hide of a land walrus.";
            this.intForDes = 15;
            this.intDescription = "Walrus hide is particularly thick and can be made into a number of different items!";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 16 - Math.floor(player.getCharisma() / 12.5); // at max, buy for 12.
            this.sellValue = 7 + Math.floor(player.getCharisma() / 10); // at max, sell for 12.
        }
        else if (this.type == "vomit")
        {
            //For All Items
            this.identity = "Vomit";
            this.weight = 1;
            this.size = 17;
            this.description = "This is well, vomit... Maybe I shouldn't be carrying this.";
            this.intForDes = 4;
            this.intDescription = "Vomiting usually occurs when a disease or poison affects hunger. A massive loss of hunger usually accompanies vomiting.";

            //Define Utility
            this.utility = "junk";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 0; // at max, buy for 0.
            this.sellValue = 0; // at max, sell for 0.
        }
        else if (this.type == "brokenHyelingCleaver")
        {
            //For All Items
            this.identity = "Shattered Hyeling Cleaver";
            this.weight = 1.5;
            this.size = 10;
            this.description = "A cleaver once made from hyeling claws now broken in several shards.";
            this.intForDes = 1;
            this.intDescription = "Clearly this cleaver was not of very high quality, if it was it wouldn't have broken...";

            //Define Utility
            this.utility = "junk";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6; // at max, buy for 6.
            this.sellValue = 2; // at max, sell for 2.
        }
        else if (this.type == "hyelingClaws")
        {
            //For All Items
            this.identity = "Hyeling Claws";
            this.weight = 0.3;
            this.size = 5;
            this.description = "The sharp light blue claws of a hyeling.";
            this.intForDes = 3;
            this.intDescription = "Hyelings shed their claws and often use them for forging weapons.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 2; // at max, sell for 2.
        }
        else if (this.type == "rawHyelingFlesh")
        {
            //For All Items
            this.identity = "Raw Hyeling Flesh";
            this.weight = 1.2;
            this.size = 7;
            this.description = "The raw flesh of a hyeling.";
            this.intForDes = 29;
            this.intDescription = "A substance in the blood seems to prevent any freezing of the flesh by cold weather conditions.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.25; //satisfies hunger.
            this.thirst = 0.25; //quenches thirst.
            this.warmth = 4; //warms player.
            this.heal = -2; //heals health.
            this.generation = -5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 15); // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "hyelingMeat")
        {
            //For All Items
            this.identity = "Hyeling Meat";
            this.weight = 1.15;
            this.size = 18;
            this.description = "The cooked meat of a Hyeling.";
            this.intForDes = 6;
            this.intDescription = "Cooked hyeling meat is completely safe to eat, but it doesn't taste particularly good.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1.5; //satisfies hunger.
            this.thirst = 0.2; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 3;
            this.ingredients = [["Raw Hyeling Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "suuliMelon")
        {
            //For All Items
            this.identity = "Suuli Melon";
            this.weight = 0.1;
            this.size = 13;
            this.description = "A green striped melon native to the more northern climates.";
            this.intForDes = 2;
            this.intDescription = "Although this type of melon grows in cold climates it can not survive the snowy tundras of the far north.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 12; //satisfies hunger.
            this.thirst = 6; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.2; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 24 - Math.floor(player.getCharisma() / 10); // at max, buy for 19.
            this.sellValue = 9 + Math.floor(player.getCharisma() / 5); // at max, sell for 19.
        }
        else if (this.type == "suuliMelonSlice")
        {
            //For All Items
            this.identity = "Suuli Melon Slice";
            this.weight = 0.1;
            this.size = 13;
            this.description = "A slice of suuli melon; it has a light green colour and is incredibly juicy and sweet.";
            this.intForDes = 2;
            this.intDescription = "Shops prefer to buy melons whole rather than cut up.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0.1; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 6;
            this.intForCraft = 2;
            this.ingredients = [["Suuli Melon", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 50); // at max, buy for 4.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 50); // at max, sell for 3.
        }
        else if (this.type == "carrot")
        {
            //For All Items
            this.identity = "Carrot";
            this.weight = 0.1;
            this.size = 9;
            this.description = "A ripe orange carrot.";
            this.intForDes = 5;
            this.intDescription = "Carrots can be used in some recipes to create more complex dishes.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1.5; //satisfies hunger.
            this.thirst = 0.1; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -0.2; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2; // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "potato")
        {
            //For All Items
            this.identity = "Potato";
            this.weight = 0.1;
            this.size = 9;
            this.description = "A starchy dry variety of potato.";
            this.intForDes = 5;
            this.intDescription = "This is the standard variety of potato and is the most common variety to be grown in farms.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.3; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -0.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "cookedPotato")
        {
            //For All Items
            this.identity = "Roasted Potato";
            this.weight = 0.1;
            this.size = 9;
            this.description = "A cooked potato; be careful it's hot don't drop it.";
            this.intForDes = 1;
            this.intDescription = "Eating Potatoes is a good way to restore hunger.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 3; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Potato", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4 - Math.floor(player.getCharisma() / 50); // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 25); // at max, sell for 3.
        }
        else if (this.type == "berulnPelt")
        {
            //For All Items
            this.identity = "Beruln Pelt";
            this.weight = 7;
            this.size = 38;
            this.description = "The pelt of a Beruln.";
            this.intForDes = 23;
            this.intDescription = "Beruln fur can be used to make warm clothing as well as to line fine Thengan Armours.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 116 - Math.floor(player.getCharisma() / 1); // at max, buy for 66.
            this.sellValue = 24 + Math.floor(player.getCharisma() / 1.25); // at max, sell for 64.
        }
        else if (this.type == "bigBerulnPelt")
        {
            //For All Items
            this.identity = "Large Beruln Pelt";
            this.weight = 10;
            this.size = 43;
            this.description = "The pelt of a Beruln.";
            this.intForDes = 23;
            this.intDescription = "Beruln fur can be used to make warm clothing as well as to line fine Thengan Armours.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 136 - Math.floor(player.getCharisma() / 1); // at max, buy for 86.
            this.sellValue = 34 + Math.floor(player.getCharisma() / 1.25); // at max, sell for 74.
        }
        else if (this.type == "berulnSkull")
        {
            //For All Items
            this.identity = "Beruln Skull";
            this.weight = 3;
            this.size = 11;
            this.description = "The skull of a beruln.";
            this.intForDes = 1;
            this.intDescription = "This beruln is not going to hurt anyone anymore...";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 98 - Math.floor(player.getCharisma() / 1); // at max, buy for 48.
            this.sellValue = 13 + Math.floor(player.getCharisma() / 2); // at max, sell for 38.
        }
        else if (this.type == "haeflower")
        {
            //For All Items
            this.identity = "Haeflower";
            this.weight = 0.16;
            this.size = 8;
            this.description = "A pointed-petaled blue flower with yellow pollen; it is found in cold mountainous landscapes.";
            this.intForDes = 30;
            this.intDescription = "It produces a toxin that leads to a psychodelic death upon its consumption.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 130; //recoops lost energy.
            this.replenish = 13; //restores will.

            //ability
            this.ability = "haeDeath";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 20 - Math.floor(player.getCharisma() / 15); // at max, buy for 17.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 3); // at max, sell for 17.
        }
        else if (this.type == "haeflowerPollen")
        {
            //For All Items
            this.identity = "Haeflower Pollen";
            this.weight = 0.001;
            this.size = 3;
            this.description = "The pollen of a haeflower.";
            this.intForDes = 9;
            this.intDescription = "The inhalation of this pollen will result in a energizing, body-numbing, mind-expanding psychodelic experience.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 100; //recoops lost energy.
            this.replenish = 10; //restores will.

            //ability
            this.ability = "haeflower";

            //Crafting
            this.yield = 1;
            this.intForCraft = 1;
            this.ingredients = [["Haeflower", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 16 - Math.floor(player.getCharisma() / 8); // at max, buy for 10.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 6); // at max, sell for 10.
        }
        else if (this.type == "tepprekliaFungus")
        {
            //For All Items
            this.identity = "Teppreklia Fungus";
            this.weight = 0.5;
            this.size = 10;
            this.description = "A yellowish fungal growth picked off of the tip of a vine.";
            this.intForDes = 11;
            this.intDescription = "Teppreklia is a fungus. It grows throughout the inner veination of a vine and then sprouts bulbous yellowish pertrusions from the tips.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 5; //warms player.
            this.heal = -1; //heals health.
            this.generation = -5; //recoops lost energy.
            this.replenish = -6; //restores will.

            //ability
            this.ability = "teppreklia";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2 - Math.floor(player.getCharisma() / 50); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "glinMushrooms")
        {
            //For All Items
            this.identity = "Glin Mushrooms";
            this.weight = 0.5;
            this.size = 10;
            this.description = "Light brown mushrooms that grow from a spongy white mycelium that rests just below the surface of the soil.";
            this.intForDes = 5;
            this.intDescription = "Glin mushrooms are poisonous but they are edible when boiled.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "poisonI";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 9 - Math.floor(player.getCharisma() / 15); // at max, buy for 6.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 12); // at max, sell for 6.
        }
        else if (this.type == "halcifMushroom")
        {
            //For All Items
            this.identity = "Halcif Mushroom";
            this.weight = 0.01;
            this.size = 5;
            this.description = "A ghostly white mushroom.";
            if (player.getIntelligence() >= 0 && player.getIntelligence() < 25)
            {
                this.intForDes = 10;
                this.intDescription = "Halcif mushrooms are so poisonous that if you touch them with your bare skin you may die.";
            }
            else
            {
                this.intForDes = 25;
                this.intDescription = "Although even touching a halcif mushroom can kill someone, when combined with other reactants the poison can be easily neutralized.";
            }

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 4; //restores will.

            //ability
            this.ability = "poisonIV";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 45 - Math.floor(player.getCharisma() / 3); // at max, buy for 30.
            this.sellValue = 18 + Math.floor(player.getCharisma() / 4); // at max, sell for 30.
        }
        else if (this.type == "cyrinthilimMushroom")
        {
            //For All Items
            this.identity = "Cyrinthilim Mushroom";
            this.weight = 0.4;
            this.size = 10;
            this.description = "A red mushroom with white specles that grows upon a bed of buried light-pink mycelium.";
            this.intForDes = 28;
            this.intDescription = "When dried, cyrinthilim mushrooms' toxins are somewhat neutralized.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.25; //recoops lost energy.
            this.replenish = -3; //restores will.

            //ability
            this.ability = "undriedCyrinthilim";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 14 - Math.floor(player.getCharisma() / 12); // at max, buy for 10.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 12); // at max, sell for 7.
        }
        else if (this.type == "driedCyrinthilimMushroom")
        {
            //For All Items
            this.identity = "Dried Cyrinthilim Mushroom";
            this.weight = 0.2;
            this.size = 10;
            this.description = "A dried cyrinthilim mushroom.";
            this.intForDes = 28;
            this.intDescription = "Dried cyrinthilim mushrooms contain a toxin that causes intense visual halucinations and sometimes even death when it is consumed.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.1; //recoops lost energy.
            this.replenish = -1.5; //restores will.

            //ability
            this.ability = "cyrinthilim";

            //Crafting
            this.yield = 1;
            this.intForCraft = 29;
            this.ingredients = [["Cyrinthilim Mushroom", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 18 - Math.floor(player.getCharisma() / 15); // at max, buy for 15.
            this.sellValue = 6 + Math.floor(player.getCharisma() / 10); // at max, sell for 11.
        }
        else if (this.type == "boiledGlinMushrooms")
        {
            //For All Items
            this.identity = "Boiled Glin Mushrooms";
            this.weight = 0.5;
            this.size = 10;
            this.description = "The boiled mushrooms have a firm texture and a savory taste.";
            this.intForDes = 5;
            this.intDescription = "Glin mushrooms that have been boiled for hours to remove their poison.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 2; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 6;
            this.intForCraft = 5;
            this.ingredients = [["Glin Mushrooms", 6], ["Bucket of Water", 1]];
            this.biproducts = [[new Item("bucket", false), 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 11 - Math.floor(player.getCharisma() / 12); // at max, buy for 7.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 12); // at max, sell for 7.
        }
        else if (this.type == "dyedMufCloth")
        {
            //For All Items
            this.identity = "Cloth";
            this.weight = 0.5;
            this.size = 12;
            this.description = "Muf cloth dyed white with tenic paste.";
            this.intForDes = 1;
            this.intDescription = "Dyed muf cloth can be used for manufacture just as any other cloth can.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 5;
            this.ingredients = [["Muf Cloth", 1], ["Tenic Paste", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 12; // at max, buy for 12.
            this.sellValue = 12; // at max, sell for 12.
        }
        else if (this.type == "cloth")
        {
            //For All Items
            this.identity = "Cloth";
            this.weight = 0.5;
            this.size = 12;
            this.description = "Thin fibers sewn together to form a smooth and consistent fabric.";
            this.intForDes = 1;
            this.intDescription = "Cloth is a basic material used in many crafting recipies.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 17;
            this.ingredients = [["Fiber", 5]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6 - Math.floor(player.getCharisma() / 15); // at max, buy for 3.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 50); // at max, sell for 3.
        }
        else if (this.type == "culprisBandage")
        {
            //For All Items
            this.identity = "Bandage";
            this.weight = 0.05;
            this.size = 3;
            this.description = "A strip of cloth rubbed with culpris.";
            this.intForDes = 5;
            this.intDescription = "Bandages can only be used effectively when you are above 1/2 health (50%), your energy is full (100%), and you have been thouroughly watered and fed (80%).";

            //Define Utility
            this.utility = "tool";
            this.subUtility = "bandage";

            //ability
            this.ability = "bandageI";

            //Crafting
            this.yield = 4;
            this.intForCraft = 2;
            this.ingredients = [["Culpris Leaf", 3], ["Cloth", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 50); // at max, buy for 4.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "naapridFiber")
        {
            //For All Items
            this.identity = "Fiber";
            this.weight = 0.1;
            this.size = 10;
            this.description = "Strong thin strands of fiber.";
            this.intForDes = 1;
            this.intDescription = "Fiber is a basic material used in many crafting recipies.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 10;
            this.intForCraft = 25;
            this.ingredients = [["Naaprid Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "winterWolfPelt")
        {
            //For All Items
            this.identity = "Winter Wolf Pelt";
            this.weight = 2;
            this.size = 16;
            this.description = "The pale white fur of a winter wolf.";
            this.intForDes = 17;
            this.intDescription = "Winter wolf fur is used to make fine Freydic clothing.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 24 - Math.floor(player.getCharisma() / 8); // at max, buy for 20.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 3); // at max, sell for 20.
        }
        else if (this.type == "greyWolfPelt")
        {
            //For All Items
            this.identity = "Grey Wolf Pelt";
            this.weight = 2;
            this.size = 16;
            this.description = "The ragged fur of a grey wolf.";
            this.intForDes = 8;
            this.intDescription = "Grey wolf fur can be used to make basic clothing and tailored goods.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 12 - Math.floor(player.getCharisma() / 15); // at max, buy for 9.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 8); // at max, sell for 9.
        }
        else if (this.type == "massiveGreyWolfPelt")
        {
            //For All Items
            this.identity = "Massive Grey Wolf Pelt";
            this.weight = 6;
            this.size = 24;
            this.description = "The ragged fur of a monstrously huge grey wolf.";
            this.intForDes = 13;
            this.intDescription = "Giant grey wolf fur is a valuable commodity, as grey wolves are hardly found so large.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 70 - Math.floor(player.getCharisma() / 5); // at max, buy for 60.
            this.sellValue = 45 + Math.floor(player.getCharisma() / 3); // at max, sell for 60.
        }
        else if (this.type == "massiveWinterWolfPelt")
        {
            //For All Items
            this.identity = "Massive Winter Wolf Pelt";
            this.weight = 6;
            this.size = 24;
            this.description = "The pale white fur of a monstrously huge winter wolf.";
            this.intForDes = 17;
            this.intDescription = "The fur from this rare breed of winter wolf is often made into clothing for those of higher class in Freydic society.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 115 - Math.floor(player.getCharisma() / 2); // at max, buy for 90.
            this.sellValue = 60 + Math.floor(player.getCharisma() / 2); // at max, sell for 85.
        }
        else if (this.type == "rawWinterWolfFlesh")
        {
            //For All Items
            this.identity = "Raw Winter Wolf Flesh";
            this.weight = 1;
            this.size = 14;
            this.description = "A tough slab of meat cut from a winter wolf.";
            this.intForDes = 2;
            this.intDescription = "Winter wolf flesh is a commonly used commodity in the land of the Freynor.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            if (player.raceName == "Freynor")
            {
                this.generation = 0; //recoops lost energy.
            }
            else
            {
                this.generation = -1; //recoops lost energy.
            }
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 7 - Math.floor(player.getCharisma() / 12.5); // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "winterWolfMeat")
        {
            //For All Items
            this.identity = "Winter Wolf Meat";
            this.weight = 1;
            this.size = 14;
            this.description = "The cooked meat of a winter wolf.";
            this.intForDes = 4;
            this.intDescription = "The Freynor have adapted to this tough meat after many generations of traditional meals and recipes.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.thirst = 0; //quenches thirst.
            this.heal = 0; //heals health.
            this.replenish = 0; //restores will.
            if (player.raceName == "Freynor")
            {
                this.hunger = 8; //satisfies hunger.
                this.warmth = 2; //warms player.
                this.generation = 0; //recoops lost energy.
                //ability
                this.ability = "satiate";
            }
            else
            {
                this.hunger = 5; //satisfies hunger.
                this.warmth = 0; //warms player.
                this.generation = -1; //recoops lost energy.
                //ability
                this.ability = "none";
            }

            //Crafting
            this.yield = 1;
            this.intForCraft = 5;
            this.ingredients = [["Raw Winter Wolf Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 12 - Math.floor(player.getCharisma() / 12.5); // at max, buy for 8.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 8); // at max, sell for 8.
        }
        else if (this.type == "rawGreyWolfFlesh")
        {
            //For All Items
            this.identity = "Raw Grey Wolf Flesh";
            this.weight = 1;
            this.size = 14;
            this.description = "A tough hunk of meat cut from a grey wolf.";
            this.intForDes = 2;
            this.intDescription = "Grey wolf flesh is rarely eaten by humans. Some hunters have tried it, but only as a means of survival.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "fleshMites";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 15); // at max, buy for 2.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "greyWolfMeat")
        {
            //For All Items
            this.identity = "Grey Wolf Meat";
            this.weight = 1;
            this.size = 14;
            this.description = "The cooked meat of a grey wolf.";
            this.intForDes = 1;
            this.intDescription = "This meat is not particularly desirable as a food product.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.thirst = 0; //quenches thirst.
            this.heal = 0; //heals health.
            this.replenish = 0; //restores will.
            this.hunger = 4; //satisfies hunger.
            this.warmth = 0; //warms player.
            this.generation = -1; //recoops lost energy.
            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 4;
            this.ingredients = [["Raw Grey Wolf Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 12.5); // at max, buy for 4.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 50); // at max, sell for 4.
        }
        else if (this.type == "rawWolfLiver")
        {
            //For All Items
            this.identity = "Raw Wolf Liver";
            this.weight = 0.5;
            this.size = 9;
            this.description = "The liver organ of a wolf.";
            this.intForDes = 6;
            this.intDescription = "Wolf Livers can make a wholesome food when cooked and has alchemical properties while raw.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 11 - Math.floor(player.getCharisma() / 25); // at max, buy for 9.
            this.sellValue = 4 + Math.floor(player.getCharisma() / 10); // at max, sell for 9.
        }
        else if (this.type == "wolfLiver")
        {
            //For All Items
            this.identity = "Wolf Liver";
            this.weight = 0.5;
            this.size = 9;
            this.description = "Cooked liver from a wolf.";
            this.intForDes = 3;
            this.intDescription = "High iron content!";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 4; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.25; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 2;
            this.ingredients = [["Raw Wolf Liver", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 15); // at max, buy for 5.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 15); // at max, sell for 5.
        }
        else if (this.type == "elderWalrusHide")
        {
            //For All Items
            this.identity = "Elder Walrus Hide";
            this.weight = 17;
            this.size = 45;
            this.description = "The hide of an elder walrus.";
            this.intForDes = 20;
            this.intDescription = "Elder Walrus hide can be made into a unique freydic armor!";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 120 - Math.floor(player.getCharisma() / 1); // at max, buy for 70.
            this.sellValue = 43 + Math.floor(player.getCharisma() / 3); // at max, sell for 59.
        }
        else if (this.type == "gulfreyShell")
        {
            //For All Items
            this.identity = "Gulfrey Shell Section";
            this.weight = 3;
            this.size = 17;
            this.description = "A piece of a gulfrey's shell plating.";
            this.intForDes = 30;
            this.intDescription = "Gulfreys are hot blooded and their shell helps to retain their heat in the frozen climates they inhabit.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 59 - Math.floor(player.getCharisma() / 2); // at max, buy for 34.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 5); // at max, sell for 18.
        }
        else if (this.type == "gulfreyMandibles")
        {
            //For All Items
            this.identity = "Gulfrey Mandibles";
            this.weight = 3;
            this.size = 17;
            this.description = "The mandibles of a gulfrey.";
            this.intForDes = 2;
            this.intDescription = "Gulfreys use their mandibles to grab and devour their prey.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 29 - Math.floor(player.getCharisma() / 5); // at max, buy for 19.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 5); // at max, sell for 15.
        }
        else if (this.type == "rawGulfreyFlesh")
        {
            //For All Items
            this.identity = "Raw Gulfrey Flesh";
            this.weight = 1;
            this.size = 17;
            this.description = "The slick and tender meat of a gulfrey. It has a sweet and meaty flavor.";
            this.intForDes = 12;
            this.intDescription = "The meat is supposed to be eaten raw, because when it is cooked it curdles and darkens.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 6; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 14 - Math.floor(player.getCharisma() / 10); // at max, buy for 9.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 10); // at max, sell for 8.
        }
        else if (this.type == "gulfreyMeat")
        {
            //For All Items
            this.identity = "Gulfrey Meat";
            this.weight = 1;
            this.size = 17;
            this.description = "The cooked gulfrey meat is curdled, gooey, and quite frankly, disgusting!";
            this.intForDes = 8;
            this.intDescription = "Gulfrey meat is not meant to be cooked; cooking the meat ruins it.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "foodPoisoning";

            //Crafting
            this.yield = 1;
            this.intForCraft = 0;
            this.ingredients = [["Raw Gulfrey Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 0; // at max, buy for 0.
            this.sellValue = 0; // at max, sell for 0.
        }
        else if (this.type == "rawMudflyFlesh")
        {
            //For All Items
            this.identity = "Raw Mudfly Flesh";
            this.weight = 0.6;
            this.size = 9;
            this.description = "The horrible smelling green mush-sack like flesh of a mudfly.";
            this.intForDes = 8;
            this.intDescription = "Nobody who doesn't have to eat mudfly meat will, especially not raw.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0.25; //satisfies hunger.
            this.thirst = 0.25; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -2.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "foodPoisoning";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 0; // at max, buy for 0.
            this.sellValue = 0; // at max, sell for 0.
        }
        else if (this.type == "mudflyMeat")
        {
            //For All Items
            this.identity = "Mudfly Meat";
            this.weight = 0.5;
            this.size = 9;
            this.description = "A snot green meat that has the texture of lubricated, jello-soft, rubber.";
            this.intForDes = 8;
            this.intDescription = "This is almost certainly one of the most disgusting 'foods' ever.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 1; //quenches thirst.
            this.warmth = 1; //warms player.
            this.heal = 0; //heals health.
            this.generation = -1.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "foodPoisoning";

            //Crafting
            this.yield = 1;
            this.intForCraft = 3;
            this.ingredients = [["Raw Mudfly Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 0; // at max, buy for 0.
            this.sellValue = 0; // at max, sell for 0.
        }
        else if (this.type == "mudflyMold")
        {
            //For All Items
            this.identity = "White Mud Wrot";
            this.weight = 0.5;
            this.size = 9;
            this.description = "This smells so terrible that you are tempted to pull the face off of your skull.";
            this.intForDes = 8;
            this.intDescription = "Mudfly flesh when kept properly can host a specific mold that is useful in alchemy and extremely deadly.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = -(7/10 * player.health); //heals health.
            this.generation = -55; //recoops lost energy.
            this.replenish = 14; //restores will.

            //ability
            this.ability = "poisonIV";

            //Crafting
            this.yield = 1;
            this.intForCraft = 32;
            this.ingredients = [["Raw Mudfly Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 43; // at max, buy for 43.
            this.sellValue = 43; // at max, sell for 43.
        }
        else if (this.type == "rawTorperFlesh")
        {
            //For All Items
            this.identity = "Raw Torper Flesh";
            this.weight = 1;
            this.size = 14;
            this.description = "The slick and rubbery flesh of a Torper.";
            this.intForDes = 9;
            this.intDescription = "Although the meat has no negative properties raw, it tastes much better cooked.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 11 - Math.floor(player.getCharisma() / 10); // at max, buy for 6.
            this.sellValue = 4 + Math.floor(player.getCharisma() / 25); // at max, sell for 6.
        }
        else if (this.type == "torperMeat")
        {
            //For All Items
            this.identity = "Torper Meat";
            this.weight = 1;
            this.size = 14;
            this.description = "The mild, yet scrumptious meat of a Torper.";
            this.intForDes = 2;
            this.intDescription = "The meat is a bit chewy, but not tough at all, perhaps it would go well with some honey...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 14; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 8;
            this.ingredients = [["Raw Torper Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 17 - Math.floor(player.getCharisma() / 25); // at max, buy for 15.
            this.sellValue = 10 + Math.floor(player.getCharisma() / 15); // at max, sell for 13.
        }
        else if (this.type == "varnMeat")
        {
            //For All Items
            this.identity = "Varn Meat";
            this.weight = 1;
            this.size = 14;
            this.description = "The cooked flesh of a varn.";
            this.intForDes = 0;
            this.intDescription = "This meat is actually pretty good tasting!";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 7; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "satiate";

            //Crafting
            this.yield = 1;
            this.intForCraft = 7;
            this.ingredients = [["Raw Varn Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 14 - Math.floor(player.getCharisma() / 25); // at max, buy for 12.
            this.sellValue = 6 + Math.floor(player.getCharisma() / 15); // at max, sell for 9.
        }
        else if (this.type == "rawVarnFlesh")
        {
            //For All Items
            this.identity = "Raw Varn Flesh";
            this.weight = 1;
            this.size = 14;
            this.description = "The raw flesh of a varn.";
            this.intForDes = 7;
            this.intDescription = "There is not much demand for varn flesh raw, but cooked, that is another story.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 7 - Math.floor(player.getCharisma() / 25); // at max, buy for 5.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 25); // at max, sell for 5.
        }
        else if (this.type == "viperMeat")
        {
            //For All Items
            this.identity = "Viper Meat";
            this.weight = 1;
            this.size = 14;
            this.description = "The cooked flesh of a viper.";
            this.intForDes = 0;
            this.intDescription = "It is chewy and sort of rubbery in texture and has a mild meaty bland taste.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 3.5; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0.1; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0.05; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 6;
            this.ingredients = [["Raw Viper Flesh", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 25); // at max, buy for 6.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "rawViperFlesh")
        {
            //For All Items
            this.identity = "Raw Viper Flesh";
            this.weight = 1;
            this.size = 14;
            this.description = "The raw flesh of a viper.";
            this.intForDes = 3;
            this.intDescription = "Although Vipers are poisonous their flesh is not.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 1; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = -0.5; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 25); // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
        }
        else if (this.type == "viperVenomGland")
        {
            //For All Items
            this.identity = "Viper Venom Gland";
            this.weight = 0.05;
            this.size = 7;
            this.description = "The gland within a viper that allows it to produce its venom.";
            this.intForDes = 14;
            this.intDescription = "Certain reactants in this venom could be used for alchemaic practises if they were to be fermented.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "poisonII";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 31 - Math.floor(player.getCharisma() / 10); // at max, buy for 26.
            this.sellValue = 9 + Math.floor(player.getCharisma() / 5); // at max, sell for 19.
        }
        else if (this.type == "fermentedViperVenomGland")
        {
            //For All Items
            this.identity = "Fermented Viper Venom Gland";
            this.weight = 1;
            this.size = 9;
            this.description = "The sour smelling bulged swolen fermented venom gland from a viper.";
            this.intForDes = 13;
            this.intDescription = "The poison becomes slightly less toxic after fermentation.";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "poisonI";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 34 - Math.floor(player.getCharisma() / 10); // at max, buy for 29.
            this.sellValue = 13 + Math.floor(player.getCharisma() / 5); // at max, sell for 23.
        }
        else if (this.type == "viperSnakeSkin")
        {
            //For All Items
            this.identity = "Viper Snake Skin";
            this.weight = 0.85;
            this.size = 13;
            this.description = "The green scaled skin of a viper.";
            this.intForDes = 11;
            this.intDescription = "This snake skin can be sewn into outfits and it can also be used as an alchemy ingredient for making potions.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 7 - Math.floor(player.getCharisma() / 15); // at max, buy for 4.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "torperVenomSac")
        {
            //For All Items
            this.identity = "Torper Venom Sac";
            this.weight = 1;
            this.size = 10;
            this.description = "A torper's venom producing gland that is swolen with the venom it has created so far.";
            this.intForDes = 0;
            this.intDescription = "Oh by the way, don't eat it...";

            //Define Utility
            this.utility = "food";

            //Utility Focused
            this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
            this.hunger = 0; //satisfies hunger.
            this.thirst = 0; //quenches thirst.
            this.warmth = 0; //warms player.
            this.heal = 0; //heals health.
            this.generation = 0; //recoops lost energy.
            this.replenish = 0; //restores will.

            //ability
            this.ability = "poisonIII";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 45 - Math.floor(player.getCharisma() / 3); // at max, buy for 29.
            this.sellValue = 9 + Math.floor(player.getCharisma() / 2.5); // at max, sell for 29.
        }
        else if (this.type == "torperFuzz")
        {
            //For All Items
            this.identity = "Torper Fuzz";
            this.weight = 1;
            this.size = 15;
            this.description = "The fur from a torper.";
            this.intForDes = 44;
            this.intDescription = "Torper fuzz is highly valuable and used in expensive clothing manufacture. Not only must the fuzz be procured from a torper, a giant deadly flying insect, the individual harvesting it must be extremely skilled or else it will come off in shreds.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 90 - Math.floor(player.getCharisma() / 1.63); // at max, buy for 60.
            this.sellValue = 30 + Math.floor(player.getCharisma() / 1.63); // at max, sell for 60.
        }
        else if (this.type == "smlGlutidOoze")
        {
            //For All Items
            this.identity = "Glutid Ooze";
            this.weight = 30;
            this.size = 14;
            this.description = "The sticky, super-toxic, highly-acidic, blue ooze of a glutid.";
            this.intForDes = 25;
            this.intDescription = "The ooze will boil if held in a temperature warmer than freezing.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 25 - Math.floor(player.getCharisma() / 10); // at max, buy for 20.
            this.sellValue = 10 + Math.floor(player.getCharisma() / 5); // at max, sell for 20.
        }
        else if (this.type == "medGlutidOoze")
        {
            //For All Items
            this.identity = "Glutid Ooze";
            this.weight = 50;
            this.size = 14;
            this.description = "The sticky, super-toxic, highly-acidic, blue ooze of a glutid.";
            this.intForDes = 25;
            this.intDescription = "The ooze will boil if held in a temperature warmer than freezing.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 35 - Math.floor(player.getCharisma() / 10); // at max, buy for 30.
            this.sellValue = 20 + Math.floor(player.getCharisma() / 5); // at max, sell for 30.
        }
        else if (this.type == "lrgGlutidOoze")
        {
            //For All Items
            this.identity = "Glutid Ooze";
            this.weight = 90;
            this.size = 14;
            this.description = "The sticky, super-toxic, highly-acidic, blue ooze of a glutid.";
            this.intForDes = 25;
            this.intDescription = "The ooze will boil if held in a temperature warmer than freezing.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 55 - Math.floor(player.getCharisma() / 10); // at max, buy for 50.
            this.sellValue = 40 + Math.floor(player.getCharisma() / 5); // at max, sell for 50.
        }
        else if (this.type == "smlOolidOozeRemains")
        {
            //For All Items
            this.identity = "Oolid Ooze Remains";
            this.weight = 6.6;
            this.size = 14;
            this.description = "The discoloured lifeless remains of an oolid.";
            this.intForDes = 15;
            this.intDescription = "The energy in the living ooze affects its colour, and when it dies the ooz's colour fades.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 12 - Math.floor(player.getCharisma() / 15); // at max, buy for 9.
            this.sellValue = 2 + Math.floor(player.getCharisma() / 25); // at max, sell for 4.
        }
        else if (this.type == "medOolidOozeRemains")
        {
            //For All Items
            this.identity = "Oolid Ooze Remains";
            this.weight = 20.1;
            this.size = 20;
            this.description = "The discoloured lifeless remains of an oolid.";
            this.intForDes = 15;
            this.intDescription = "The energy in the living ooze affects its colour, and when it dies the ooz's colour fades.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 16 - Math.floor(player.getCharisma() / 12); // at max, buy for 12.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 12); // at max, sell for 7.
        }
        else if (this.type == "lrgOolidOozeRemains")
        {
            //For All Items
            this.identity = "Oolid Ooze Remains";
            this.weight = 74.3;
            this.size = 28;
            this.description = "The discoloured lifeless remains of an oolid.";
            this.intForDes = 15;
            this.intDescription = "The energy in the living ooze affects its colour, and when it dies the ooz's colour fades.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 42 - Math.floor(player.getCharisma() / 5); // at max, buy for 32.
            this.sellValue = 22 + Math.floor(player.getCharisma() / 5); // at max, sell for 32.
        }
        else if (this.type == "shehidOozeSml")
        {
            //For All Items
            this.identity = "Shehid Ooze";
            this.weight = 9;
            this.size = 15;
            this.description = "The toxic gelatinous body of a shehid.";
            this.intForDes = 10;
            this.intDescription = "From whats left among the goo it looks like the primary diet of this creature was lizards and insects.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 47 - Math.floor(player.getCharisma() / 3); // at max, buy for 32.
            this.sellValue = 7 + Math.floor(player.getCharisma() / 2); // at max, sell for 32.
        }
        else if (this.type == "shehidShellSml")
        {
            //For All Items
            this.identity = "Shehid Shell";
            this.weight = 21;
            this.size = 16;
            this.description = "The shell of a shehid; it is extremely durable and hard.";
            this.intForDes = 1;
            this.intDescription = "The inside of the shell has developed a marvelous coating that glimmers beautifully in even the dimmest lighting.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 56 - Math.floor(player.getCharisma() / 3); // at max, buy for 41.
            this.sellValue = 26 + Math.floor(player.getCharisma() / 3); // at max, sell for 41.
        }
        else if (this.type == "shehidOozeLrg")
        {
            //For All Items
            this.identity = "Shehid Ooze";
            this.weight = 29;
            this.size = 25;
            this.description = "The toxic gelatinous body of a large shehid.";
            this.intForDes = 4;
            this.intDescription = "From the melted carcasses left among the goo it looks like it would be harder to figure out what this creature doesn't eat.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 102 - Math.floor(player.getCharisma() / 1.5); // at max, buy for 69.
            this.sellValue = 35 + Math.floor(player.getCharisma() / 1.5); // at max, sell for 68.
        }
        else if (this.type == "shehidShellLrg")
        {
            //For All Items
            this.identity = "Shehid Shell";
            this.weight = 65;
            this.size = 16;
            this.description = "The shell of a large shehid; it is extremely durable and hard.";
            this.intForDes = 1;
            this.intDescription = "The inside of the shell has developed a marvelous coating that glimmers beautifully in even the dimmest lighting.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 135 - Math.floor(player.getCharisma() / 1); // at max, buy for 85.
            this.sellValue = 60 + Math.floor(player.getCharisma() / 2); // at max, sell for 85.
        }
        else if (this.type == "varnPelt")
        {
            //For All Items
            this.identity = "Varn Pelt";
            this.weight = 1;
            this.size = 15;
            this.description = "The fur of a wild varn.";
            this.intForDes = 2;
            this.intDescription = "This can be used to make leather armour and fur clothing.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8 - Math.floor(player.getCharisma() / 15); // at max, buy for 5.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 25); // at max, sell for 5.
        }
        else if (this.type == "cutlass")
        {
            //For All Items
            this.identity = "Cutlass";
            this.weight = 1.5;
            this.size = 15;
            if (player.raceName != "Outlander")
            {
                this.description = "A strange blade of foreign design, clearly not of the known world.";
            }
            else
            {
                this.description = "A standard issue iron cutlass.";
            }
            this.intForDes = 8;
            this.intDescription = "This type of weapon was created in the unknown lands of the outlanders, and is primarily used by sailors.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 2;
            this.distance = 25 + (this.range * 7);
            this.range = 3 + 3/7;
            this.rate = 125 - (35 * player.getDexterity() / 50);
            this.damage = ((3.5) * (this.leveledDamageMultiple / 25) + ((6/50) * player.getStrength()) + ((2/50) * player.getDexterity())) * (1 + 0.2 * this.superStealthNum(1));
            this.magicalDamage = 0;
            this.negateArmour = 0 + this.superStealthNum(3);

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            if (player.raceName == "Outlander")
            {
                this.intForCraft = 8;
            }
            else
            {
                this.intForCraft = 30;
            }
            this.ingredients = [["Iron", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 25 - Math.floor(player.getCharisma() / 6); // at max, buy for 17.
            this.sellValue = 12 + Math.floor(player.getCharisma() / 10); // at max, sell for 17.
        }
        else if (this.type == "mace")
        {
            //For All Items
            this.identity = "Mace";
            this.weight = 4;
            this.size = 19;
            this.description = "An average sized iron mace.";
            this.intForDes = 4;
            this.intDescription = "This looks like it could do some good against light armoured enemies.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 2;
            this.distance = 24 + (this.range * 7);
            this.range = 1;
            this.rate = 155;
            this.damage = (3.5 - (this.damageHandicap * 1.5)) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 5;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 7;
            this.ingredients = [["Iron", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 18 - Math.floor(player.getCharisma() / 6); // at max, buy for 12.
            this.sellValue = 7 + Math.floor(player.getCharisma() / 10); // at max, sell for 12.
        }
        else if (this.type == "lightningCorseque")
        {
            //For All Items
            this.identity = "Lightning Corseque";
            this.weight = 14;
            this.size = 19;
            this.description = "An electrically imbued corseque; it has one long electrified blade and four smaller blades.";
            this.intForDes = 1;
            this.intDescription = "The essence of electricity inhabits this weapon.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 5;
            this.distance = 70 + (this.range * 7);
            this.range = 2 + 4/7;
            this.rate = 175;
            this.damage = (7 - (this.damageHandicap * 2)) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            this.magicalDamage = 5;
            this.negateArmour = 4 + ((1/10) * player.getStrength());

            //ability
            this.ability = "shock";

            //Crafting
            this.yield = 1;
            this.intForCraft = 40;
            this.ingredients = [["Steel", 1], ["Iron", 3], ["Sphere of Electricity", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1200; // at max, buy for 1200.
            this.sellValue = 1000 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 1200.
        }
        else if (this.type == "cero")
        {
            //For All Items
            this.identity = "Cero";
            this.weight = 0.5;
            this.size = 12;
            this.description = "A glowing blue blade that seems to hum and exude a certain radiance.";
            this.intForDes = 16;
            this.intDescription = "This blade is most likely either forged by a powerful mage or it is from out of this world.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 0;
            this.distance = 23 + (this.range * 7);
            this.range = 6 + 4/7;
            this.rate = 40;
            this.damage = (4 + (16/50) * player.getDexterity()) * (1 + this.superStealthNum(1)) ;
            this.magicalDamage = 1;
            this.negateArmour = 30 + this.superStealthNum(10);

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 16000; // at max, buy for 16000.
            this.sellValue = 16000; // at max, sell for 16000.
        }
        else if (this.type == "smashStick")
        {
            //For All Items
            this.identity = "Heavy Spiked Club";
            this.weight = 12;
            this.size = 19;
            this.description = "A huge metal club reinforced with sturdy, sharp, steel spikes.";
            this.intForDes = 5;
            this.intDescription = "For the most part heavy, spiked, and blunt styles of weapons are good against armoured foes.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getStrength() >= 20)
            {
                this.energyCost = 8;
            }
            else
            {
                this.energyCost = 10;
            }
            this.distance = 24 + (this.range * 7);
            this.range = 4;
            this.rate = 260;
            if (player.getStrength() >= 8)
            {
                this.damage = (13) * (this.leveledDamageMultiple / 25) + ((2/50) * player.getStrength());
            }
            else
            {
                this.damage = (12 - (this.damageHandicap * 4)) * (this.leveledDamageMultiple / 25) + ((2/50) * player.getStrength());
            }
            this.magicalDamage = 0;
            this.negateArmour = 10;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 32;
            this.ingredients = [["Steel", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 130 - Math.floor(player.getCharisma() / 5); // at max, buy for 120.
            this.sellValue = 95 + Math.floor(player.getCharisma() / 2); // at max, sell for 120.
        }
        else if (this.type == "longSpikedMorningStar")
        {
            //For All Items
            this.identity = "Long-Spiked Morning Star";
            this.weight = 8;
            this.size = 19;
            this.description = "A morning star build with long steel spikes for piercing armour. ";
            this.intForDes = 1;
            this.intDescription = "This weapon is meant to be used to pierce well-armoured enemies.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 7.5;
            this.distance = 31 + (this.range * 7);
            this.range = 1 + 4/7;
            this.rate = 240;
            this.damage = (10 - (this.damageHandicap * 2)) * (this.leveledDamageMultiple / 25) + ((6/50) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 14;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 30;
            this.ingredients = [["Steel", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 129 - Math.floor(player.getCharisma() / 3); // at max, buy for 114.
            this.sellValue = 92 + Math.floor(player.getCharisma() / 3); // at max, sell for 107.
        }
        else if (this.type == "burningSmashStick")
        {
            //For All Items
            this.identity = "Heavy Flaming Spiked Club";
            this.weight = 12;
            this.size = 19;
            this.description = "A spiked huge metal club enchanted with fire magic to always be aflame.";
            this.intForDes = 1;
            this.intDescription = "The essence of fire inhabits this weapon.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getStrength() >= 20)
            {
                this.energyCost = 8;
            }
            else
            {
                this.energyCost = 10;
            }
            this.distance = 24 + (this.range * 7);
            this.range = 4;
            this.rate = 260;
            if (player.getStrength() >= 8)
            {
                this.damage = (13) * (this.leveledDamageMultiple / 25) + ((2/50) * player.getStrength());
            }
            else
            {
                this.damage = (12 - (this.damageHandicap * 4)) * (this.leveledDamageMultiple / 25) + ((2/50) * player.getStrength());
            }
            this.magicalDamage = 2;
            this.negateArmour = 10;

            //ability
            this.ability = "burning";

            //Crafting
            this.yield = 1;
            this.intForCraft = 32;
            this.ingredients = [["Steel", 3], ["Sphere of Flames", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 830 - Math.floor(player.getCharisma() / 5); // at max, buy for 820.
            this.sellValue = 795 + Math.floor(player.getCharisma() / 2); // at max, sell for 820.
        }
        else if (this.type == "hammer")
        {
            //For All Items
            this.identity = "Hammer";
            this.weight = 2;
            this.size = 15;
            this.description = "A multipurpose tool, it can be used for battle as well as for smithing.";
            this.intForDes = 1;
            this.intDescription = "This must be equipped in order to perform metalwork at an anvil.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 1;
            this.distance = 10 + (this.range * 7);
            this.range = 3 + 5/7;
            this.rate = 125 - (1/2 * player.getDexterity());
            this.damage = (2 - 1 * this.damageHandicap) * (this.leveledDamageMultiple / 25);
            this.magicalDamage = 0;
            this.negateArmour = 2;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 3;
            this.ingredients = [["Iron", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 10 - Math.floor(player.getCharisma() / 25); // at max, buy for 8.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 15); // at max, sell for 8.
        }
        else if (this.type == "warHammer")
        {
            //For All Items
            this.identity = "War Hammer";
            this.weight = 7;
            this.size = 19;
            this.description = "A heavy iron maul built for war.";
            this.intForDes = 3;
            this.intDescription = "Heavy blunt weapons such as this are remarkable for bashing through an enemies armour and delivering large sums of damage.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 6;
            this.distance = 10 + (this.range * 7);
            this.range = 4; // + 7/7;
            this.rate = 225 - player.getDexterity();
            this.damage = (8 - 2 * this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 8;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 12;
            this.ingredients = [["Iron", 4]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 37 - Math.floor(player.getCharisma() / 6); // at max, buy for 29.
            this.sellValue = 14 + Math.floor(player.getCharisma() / 3); // at max, sell for 29.
        }
        else if (this.type == "freydicSword")
        {
            //For All Items
            this.identity = "Longsword";
            this.weight = 4;
            this.size = 16;
            this.description = "A longsword made of mostly steel but forged with just a hint of jvostran ore.";
            this.intForDes = 1;
            this.intDescription = "This sword looks to be Freynor in origin.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 5;
            this.distance = 29 + (this.range * 7);
            this.range = 5;
            this.rate = 145;
            this.damage = (6.5 - this.damageHandicap * 1.5) * (this.leveledDamageMultiple / 25) + ((9/50) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 22;
            this.ingredients = [["Steel", 2], ["Jvostran Melt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 92 - Math.floor(player.getCharisma() / 8); // at max, buy for 86.
            this.sellValue = 80 + Math.floor(player.getCharisma() / 8); // at max, sell for 86.
        }
        else if (this.type == "pickaxe")
        {
            //For All Items
            this.identity = "Pickaxe";
            this.weight = 2;
            this.size = 15;
            this.description = "An iron pickaxe used for mining.";
            this.intForDes = 4;
            this.intDescription = "A pickaxe is required for mining ore.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 2.5;
            this.distance = 18 + (this.range * 7);
            this.range = 3;
            this.rate = 135;
            this.damage = 2 * (this.leveledDamageMultiple / 25);
            this.magicalDamage = 0;
            this.negateArmour = 4;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 8;
            this.ingredients = [["Iron", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 26 - Math.floor(player.getCharisma() / 5); // at max, buy for 16.
            this.sellValue = 9 + Math.floor(player.getCharisma() / 10); // at max, sell for 14.
        }
        else if (this.type == "vardanianClub")
        {
            //For All Items
            this.identity = "Club";
            this.weight = 1.5;
            this.size = 14;
            this.description = "Sharpened iron studs attached to the end of a wooden handle.";
            this.intForDes = 4;
            this.intDescription = "It is for smacking with...";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = Math.max(1, 2 - (player.getEndurance() / 50));
            this.distance = 15 + (this.range * 7);
            this.range = 4;
            this.rate = Math.max(95, 125 - (30 * player.getDexterity() / 50));
            this.damage = (3 - this.damageHandicap) * (this.leveledDamageMultiple / 25);
            this.magicalDamage = 0;
            this.negateArmour = 3;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 2;
            this.intForCraft = 15;
            this.ingredients = [["Iron", 1], ["Wood", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 14 - Math.floor(player.getCharisma() / 25); // at max, buy for 12.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 12); // at max, sell for 12.
        }
        else if (this.type == "iceBlade")
        {
            //THIS IS A SUMMONED WEAPON AND CAN NOT BE USED AS A REGULAR ITEM.

            //These do not matter for summoned magical weapons.
            this.identity = "Ice Claymore";
            this.weight = 0;
            this.size = 1;
            this.description = "A claymore magically formed at your will; it is made purely of mystical ice, and it is unforgivingly sharp.";
            this.intForDes = 0;
            this.intDescription = "This is only attainable by the use of a spell, and it doesn't show up as an item only as an equipped weapon.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = Math.max(0, 6 - (player.getEminence() / 10));
            this.distance = 41 + (this.range * 7);
            this.range = 6 + 5/7;
            this.rate = Math.max(0, 175 - (75 * player.getConcentration() / 50));
            this.damage = 6 * (this.leveledDamageMultiple / 25) + ((1/5) * player.getStrength());
            this.magicalDamage = 3 + ((1/6) * player.getConcentration());
            this.negateArmour = 0;

            //ability
            this.ability = "freeze";
        }
        else if (this.type == "timberAxe")
        {
            //For All Items
            this.identity = "Timber Axe";
            this.weight = 3;
            this.size = 15;
            this.description = "An iron axe used for cutting down trees.";
            this.intForDes = 2;
            this.intDescription = "This is one of the few weapons that you can use to collect timber.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 3.5;
            this.distance = 12 + (this.range * 7);
            this.range = 5;
            this.rate = 155;
            this.damage = (7 - (this.damageHandicap * 2.5)) * (this.leveledDamageMultiple / 25);
            this.magicalDamage = 0;
            this.negateArmour = 1.5;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 13;
            this.ingredients = [["Iron", 2], ["Wood", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 45 - Math.floor(player.getCharisma() / 3); // at max, buy for 30.
            this.sellValue = 12 + Math.floor(player.getCharisma() / 3); // at max, sell for 27.
        }
        else if (this.type == "nirineseSpear")
        {
            //For All Items
            this.identity = "Nirinese Spear";
            this.weight = 4;
            this.size = 15;
            this.description = "A steel spear forged by the Nirinese.";
            this.intForDes = 2;
            this.intDescription = "A long metal polearm with a fancy steel guard and a sharp point made for piercing armour.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 5;
            this.distance = 56.5 + (this.range * 7);
            this.range = 1.5;
            this.rate = (150 - player.getDexterity());
            this.damage = (4 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 6 + ((1/6.25) * player.getStrength());

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 20;
            this.ingredients = [["Steel", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 30 - Math.floor(player.getCharisma() / 5); // at max, buy for 20.
            this.sellValue = 10 + Math.floor(player.getCharisma() / 5); // at max, sell for 20.
        }
        else if (this.type == "rasper")
        {
            //For All Items
            if (player.health < player.healthMAX / 3 && player.getEndurance() >= 14 && player.energy < 2 || player.health < player.healthMAX / 3 && player.getDexterity() >= 14 || player.health < player.healthMAX / 3 && player.getStrength() >= 14)
            {
                this.identity = "The Blade of Psychotic Rage";
                this.weight = 2;
                this.size = 16;
                this.description = "There will be blood.";
                this.intForDes = 10;
                this.intDescription = "When you have achieved 14 points in Dexterity, Endurance, or Strength you unlock for each a unique bonus for this blade while you are below 1/3 health.";
            }
            else
            {
                this.identity = "Rasp";
                this.weight = 2;
                this.size = 16;
                this.description = "A curved steel blade with a hooked pommel.";
                this.intForDes = 4;
                this.intDescription = "The notorious bandit Chieftain Nelgref often used Rasp's hook to gouge out the eyes of his victims.";
            }

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.health < player.healthMAX / 3 && player.getEndurance() >= 14 && player.energy < 2)
            {
                this.energyCost = 0;
            }
            else
            {
                this.energyCost = 2;
            }
            this.distance = 22 + (this.range * 7);
            this.range = 3 + 2/7;
            if (player.health < player.healthMAX / 3 && player.getDexterity() >= 14)
            {
                this.rate = 40;
            }
            else
            {
                this.rate = (100 - (player.getDexterity() / 5));
            }
            if (player.health < player.healthMAX / 3 && player.getStrength() >= 14)
            {
                this.damage = 6 * (this.leveledDamageMultiple / 25) + ((9 / 50) * player.getStrength());
            }
            else
            {
                this.damage = 5 * (this.leveledDamageMultiple / 25) + ((4 / 25) * player.getStrength());
            }
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 76 - Math.floor(player.getCharisma() / 5); // at max, buy for 66.
            this.sellValue = 46 + Math.floor(player.getCharisma() / 2.5); // at max, sell for 66.
        }
        else if (this.type == "blunderbuss")
        {
            //For All Items
            this.identity = "Blunderbuss";
            this.weight = 6;
            this.size = 20;
            this.description = "A steel flint-lock blunderbuss.";
            this.intForDes = 0;
            this.intDescription = "This gun combusts black-powder in order to propel several projectiles in the targets generalish direction at high velocity.";

            //Define Utility
            this.utility = "ranged";
            //Sub Utility
            this.subUtility = "gun";

            //Utility Focused
            this.range = 1100 + (400 * player.getRanged() / 50);
            this.rate = 100;
            this.speed = 8 + 1/3; //guns shoot triple their noted speed.
            this.negateArmour = 25;

            //ability
            this.ability = "none";

            if (player.raceName != "Outlander")
            {
                //Crafting
                this.yield = 1;
                this.intForCraft = 50;
                this.ingredients = [["Steel", 6], ["Flint", 1]];

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 1100 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 1000.
                this.sellValue = 900 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 1000.
            }
            else
            {
                //Crafting
                this.yield = 1;
                this.intForCraft = 26;
                this.ingredients = [["Steel", 6], ["Flint", 1]];

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 191 - Math.floor(player.getCharisma() / 3); // at max, buy for 176.
                this.sellValue = 125 + Math.floor(player.getCharisma() / 1); // at max, sell for 175.
            }
        }
        else if (this.type == "musket")
        {
            //For All Items
            this.identity = "Musket";
            this.weight = 5;
            this.size = 20;
            this.description = "A steel flint-lock musket.";
            this.intForDes = 0;
            this.intDescription = "This gun combusts black-powder in order to propel a thick steel ball towards the target at high velocity.";

            //Define Utility
            this.utility = "ranged";
            //Sub Utility
            this.subUtility = "gun";

            //Utility Focused
            this.range = 3000 + (350 * player.getRanged() / 50);
            this.rate = 82;
            this.speed = 8 + 1/3; //guns shoot triple their noted speed.
            this.negateArmour = 20;

            //ability
            this.ability = "none";

            if (player.raceName != "Outlander")
            {
                //Crafting
                this.yield = 1;
                this.intForCraft = 50;
                this.ingredients = [["Steel", 5], ["Flint", 1]];

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 900 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 800.
                this.sellValue = 700 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 800.
            }
            else
            {
                //Crafting
                this.yield = 1;
                this.intForCraft = 20;
                this.ingredients = [["Steel", 5], ["Flint", 1]];

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 115 - Math.floor(player.getCharisma() / 10); // at max, buy for 110.
                this.sellValue = 84 + Math.floor(player.getCharisma() / 2); // at max, sell for 109.
            }
        }
        else if (this.type == "bullet")
        {
            //For All Items
            this.identity = "Bullet";
            this.weight = 0.05;
            this.size = 2;
            this.description = "A smooth ball of steel.";
            this.intForDes = 1;
            this.intDescription = "When Propelled at extreme speeds this metal ball can cause a lot of damage.";

            //Define Utility
            this.utility = "ammunition";
            //Sub Utility
            this.subUtility = "bullet";
            this.subUtilityName = "Bullet";

            //Utility Focused
            if (player.weaponEquipped == "musket")
            {
                this.damage = 92;
            }
            else if (player.weaponEquipped == "blunderbuss")
            {
                this.damage = 32;
            }
            else if (player.weaponEquipped == "pistol")
            {
                this.damage = 43;
            }
            else
            {
                this.damage = 0;
            }
            this.magicalDamage = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 36;
            this.intForCraft = 5;
            this.ingredients = [["Steel", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "blackPowder")
        {
            //For All Items
            this.identity = "Black-Powder";
            this.weight = 0.001;
            this.size = 4;
            this.description = "A gritty black powder.";
            this.intForDes = 36;
            this.intDescription = "An alchemic mixture of coal, nitre, and sulfur, all boiled in alcohol; It happens to be massively combustible.";

            //Define Utility
            this.utility = "material";

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 200;
            this.intForCraft = 36;
            this.ingredients = [["Coal", 3], ["Nitre", 15], ["Sulfur", 2], ["Alcohol", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4; // at max, buy for 4.
            this.sellValue = 4; // at max, sell for 4.
        }
        else if (this.type == "crossbow")
        {
            //For All Items
            this.identity = "Crossbow";
            this.weight = 4;
            this.size = 23;
            this.description = "A sturdy crank-loaded steel crossbow.";
            this.intForDes = 6;
            this.intDescription = "This type of crossbow is of Nirinese design.";

            //Define Utility
            this.utility = "ranged";
            //Sub Utility
            this.subUtility = "crossbow";

            //Utility Focused
            this.range = 2500 + (500 * player.getRanged() / 50);
            //this.rate = Math.max(0.1, 35 - (34 * player.getRanged() / 50));
            this.speed = 14 + (2 * player.getRanged() / 50);
            this.negateArmour = 13 + (5 * player.getRanged() / 50);

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 50;
            this.ingredients = [["Steel", 5]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 640 - Math.floor(player.getCharisma() / 2); // at max, buy for 615.
            this.sellValue = 565 + Math.floor(player.getCharisma() / 1); // at max, sell for 615.
        }
        else if (this.type == "steelBolt")
        {
            //For All Items
            this.identity = "Steel Bolt";
            this.weight = 0.1;
            this.size = 8;
            this.description = "A crossbow bolt made of steel.";
            this.intForDes = 1;
            this.intDescription = "Don't touch the tip, it's extremely sharp!";

            //Define Utility
            this.utility = "ammunition";
            //Sub Utility
            this.subUtility = "bolt";
            this.subUtilityName = "Bolt";

            //Utility Focused
            this.damage = (13 + 1/3) * (1 + player.getRanged() / 25); //40 damage at max!
            this.magicalDamage = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 5;
            this.intForCraft = 45;
            this.ingredients = [["Steel", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 22 - Math.floor(player.getCharisma() / 5); // at max, buy for 12.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 12); // at max, sell for 12.
        }
        else if (this.type == "longbow")
        {
            //For All Items
            this.identity = "Long Bow";
            this.weight = 2;
            this.size = 23;
            this.description = "A well crafted long bow carved from fine and flexible wood and strung with an equally durable bowstring.";
            this.intForDes = 4;
            this.intDescription = "Long bows are known for their superior range!";

            //Define Utility
            this.utility = "ranged";
            //Sub Utility
            this.subUtility = "bow";

            //Utility Focused
            this.range = 1800 + (500 * player.getRanged() / 50);
            this.rate = Math.max(0.1, 35 - (34 * player.getRanged() / 50));
            this.speed = 5 + (3 * player.getRanged() / 50);
            this.negateArmour = (2 * player.getRanged() / 50);

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 25;
            this.ingredients = [["Wood", 1], ["Fiber", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 44 - Math.floor(player.getCharisma() / 8); // at max, buy for 38.
            this.sellValue = 23 + Math.floor(player.getCharisma() / 3); // at max, sell for 38.
        }
        else if (this.type == "oiledArrow")
        {
            //For All Items
            this.identity = "Oiled Arrow";
            this.weight = 0.05;
            this.size = 8;
            this.description = "An arrow with a sharp iron pointed tip dipped in flammable oil.";
            this.intForDes = 12;
            this.intDescription = "The arrow will only be lit on fire when shot if a tinderbox is in your inventory.";

            //Define Utility
            this.utility = "ammunition";
            //Sub Utility
            this.subUtility = "arrow";
            this.subUtilityName = "Arrow";

            //Utility Focused
            this.damage = 4 * (1 + player.getRanged() / 25);
            this.magicalDamage = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 90;
            this.intForCraft = 8;
            this.ingredients = [["Iron Arrow", 90], ["Jar of Oil", 1]];
            this.biproducts = [[new Item("glassJar", false), 1]]; //these are the accompanying items that come along with the main item being crafted.

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5 - Math.floor(player.getCharisma() / 12); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "lifeLeachArrow")
        {
            //For All Items
            this.identity = "Life Leach Arrow";
            this.weight = 0.1;
            this.size = 8;
            this.description = "A steel arrow infused with nechromantic magic.";
            this.intForDes = 6;
            this.intDescription = "Upon piercing its victim the life drains out of it into the one who shot the arrow.";

            //Define Utility
            this.utility = "ammunition";
            //Sub Utility
            this.subUtility = "arrow";
            this.subUtilityName = "Arrow";

            //Utility Focused
            this.damage = 6 * (1 + player.getRanged() / 25);
            this.magicalDamage = 0;

            //ability
            this.ability = "leach";

            //Crafting
            this.yield = 7;
            this.intForCraft = 45;
            this.ingredients = [["Steel", 1], ["Sphere of Nechromancy", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 250 - Math.floor(player.getCharisma() / 1); // at max, buy for 200.
            this.sellValue = 100 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 200.
        }
        else if (this.type == "freezingArrow")
        {
            //For All Items
            this.identity = "Freezing Arrow";
            this.weight = 0.1;
            this.size = 8;
            this.description = "A steel arrow infused with ice magic.";
            this.intForDes = 6;
            this.intDescription = "This arrow has magical ice sharpness and freezes its target upon piercing.";

            //Define Utility
            this.utility = "ammunition";
            //Sub Utility
            this.subUtility = "arrow";
            this.subUtilityName = "Arrow";

            //Utility Focused
            this.damage = 6 * (1 + player.getRanged() / 25);
            this.magicalDamage = 7;

            //ability
            this.ability = "freeze";

            //Crafting
            this.yield = 7;
            this.intForCraft = 45;
            this.ingredients = [["Steel", 1], ["Sphere of Ice", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 250 - Math.floor(player.getCharisma() / 1); // at max, buy for 200.
            this.sellValue = 100 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 200.
        }
        else if (this.type == "fireArrow")
        {
            //For All Items
            this.identity = "Fire Arrow";
            this.weight = 0.1;
            this.size = 8;
            this.description = "A steel arrow infused with Fiery magic.";
            this.intForDes = 6;
            this.intDescription = "Simply impact with a target will engulf it in long burning flames.";

            //Define Utility
            this.utility = "ammunition";
            //Sub Utility
            this.subUtility = "arrow";
            this.subUtilityName = "Arrow";

            //Utility Focused
            this.damage = 6 * (1 + player.getRanged() / 25);
            this.magicalDamage = 1;

            //ability
            this.ability = "longBurning";

            //Crafting
            this.yield = 7;
            this.intForCraft = 45;
            this.ingredients = [["Steel", 1], ["Sphere of Flames", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 250 - Math.floor(player.getCharisma() / 1); // at max, buy for 200.
            this.sellValue = 100 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 200.
        }
        else if (this.type == "shehidToxinArrow")
        {
            //For All Items
            this.identity = "Shehid Toxin Arrow";
            this.weight = 0.07;
            this.size = 8;
            this.description = "An arrow with a sharp iron pointed tip dipped in shehid ooze and dried.";
            this.intForDes = 6;
            this.intDescription = "The dried shehid ooze will temporarily paralyze most targets upon successfully penetrating the flesh.";

            //Define Utility
            this.utility = "ammunition";
            //Sub Utility
            this.subUtility = "arrow";
            this.subUtilityName = "Arrow";

            //Utility Focused
            this.damage = 4 * (1 + player.getRanged() / 25);
            this.magicalDamage = 0;

            //ability
            this.ability = "stunIII";

            //Crafting
            this.yield = 180;
            this.intForCraft = 8;
            this.ingredients = [["Iron Arrow", 180], ["Shehid Ooze", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 6 - Math.floor(player.getCharisma() / 12); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "arrow")
        {
            //For All Items
            this.identity = "Iron Arrow";
            this.weight = 0.05;
            this.size = 8;
            this.description = "An arrow with a sharp iron pointed tip";
            this.intForDes = 4;
            this.intDescription = "It is the arrow that determines the damage, not the bow.";

            //Define Utility
            this.utility = "ammunition";
            //Sub Utility
            this.subUtility = "arrow";
            this.subUtilityName = "Arrow";

            //Utility Focused
            this.damage = 4 * (1 + player.getRanged() / 25);
            this.magicalDamage = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 17;
            this.intForCraft = 5;
            this.ingredients = [["Wood", 1], ["Iron", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1; // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "steelArrow")
        {
            //For All Items
            this.identity = "Steel Arrow";
            this.weight = 0.1;
            this.size = 8;
            this.description = "An arrow with a long, sharp, steel pointed tip";
            this.intForDes = 4;
            this.intDescription = "It is the arrow that determines the damage, not the bow.";

            //Define Utility
            this.utility = "ammunition";
            //Sub Utility
            this.subUtility = "arrow";
            this.subUtilityName = "Arrow";

            //Utility Focused
            this.damage = 6 * (1 + player.getRanged() / 25);
            this.magicalDamage = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 10;
            this.intForCraft = 15;
            this.ingredients = [["Wood", 1], ["Steel", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4; // at max, buy for 4.
            this.sellValue = 4; // at max, sell for 4.
        }
        else if (this.type == "aldrekiiArrow")
        {
            //For All Items
            this.identity = "Aldrekii Arrow";
            this.weight = 0.05;
            this.size = 8;
            this.description = "A meticulously and skillfully crafted arrow of Aldrekii design.";
            this.intForDes = 4;
            this.intDescription = "The Aldrek are famed for their talent in archery, but also for their expertly crafted bows and arrows.";

            //Define Utility
            this.utility = "ammunition";
            //Sub Utility
            this.subUtility = "arrow";
            this.subUtilityName = "Arrow";

            //Utility Focused
            this.damage = 7 * (1 + player.getRanged() / 25);
            this.magicalDamage = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 6;
            this.intForCraft = 30;
            this.ingredients = [["Wood", 1], ["Ikrinium", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 20 - Math.floor(player.getCharisma() / 10); // at max, buy for 15.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 10); // at max, sell for 10.
        }
        else if (this.type == "frichFurMittens")
        {
            //For All Items
            this.identity = "Frich Fur Mittens";
            this.weight = 0.2;
            this.size = 11;
            this.description = "Mittens sewn from frich fur.";
            this.intForDes = 1;
            this.intDescription = "Frich clothing is associated with the low class.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "gloves";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0.2;
            this.thirstRetention = -0.05;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 1;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 3;
            this.intForCraft = 12;
            this.ingredients = [["Frich Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 4 - Math.floor(player.getCharisma() / 50); // at max, buy for 3.
            this.sellValue = 1 + Math.floor(player.getCharisma() / 25); // at max, sell for 3.
        }
        else if (this.type == "ardilFurGloves")
        {
            //For All Items
            this.identity = "Ardil Fur Gloves";
            this.weight = 0.25;
            this.size = 11;
            this.description = "Gloves sewn from the pelt of an ardil.";
            this.intForDes = 1;
            this.intDescription = "Ardil gloves are soft, comfortable, and warm.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "gloves";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0.3;
            this.thirstRetention = -0.06;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 2;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 15;
            this.ingredients = [["Ardil Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 7 - Math.floor(player.getCharisma() / 25); // at max, buy for 5.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 25); // at max, sell for 5.
        }
        else if (this.type == "berulnToothNecklace")
        {
            //For All Items
            this.identity = "Beruln Tooth Necklace";
            this.weight = 0.1;
            this.size = 11;
            this.description = "A necklace made with the tooth of a beruln.";
            this.intForDes = 1;
            this.intDescription = "Either you are a fearless adventurer who slayed a beruln and put its tooth onto a string, or you bought this at a shop.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "necklace";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 0;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 3;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 1;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 34;
            this.intForCraft = 25;
            this.ingredients = [["Fiber", 9], ["Beruln Skull", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 16 - Math.floor(player.getCharisma() / 6); // at max, buy for 8.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 15); // at max, sell for 6.
        }
        else if (this.type == "theCorpseRing")
        {
            //For All Items
            this.identity = "The Corpse Ring";
            this.weight = 0.01;
            this.size = 3;
            this.description = "A tar-black ring with a miniature whithered skull embedded in it as the centerpiece.";
            this.intForDes = 22;
            if (player.getEminence() < 5)
            {
                this.intDescription = "This ring will drain your life force if you do not have the power to control it.";
            }
            else
            {
                this.intDescription = "This ring feeds off of souls that still cling to their corpses, healing the wearer.";
            }

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "ring";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 0;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 3;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            if (player.getEminence() < 5)
            {
                this.ability = "drainPlayer";
            }
            else
            {
                this.ability = "drainCorpse";
            }

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 3090 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 2890.
            if (player.getEminence() < 5)
            {
                this.sellValue = 0; // at max, sell for 0.
            }
            else
            {
                this.sellValue = 2200 + Math.floor(player.getCharisma() / 0.1); // at max, sell for 2700.
            }
        }
        else if (this.type == "ironRing")
        {
            //For All Items
            this.identity = "Iron Ring";
            this.weight = 0.025;
            this.size = 3;
            this.description = "A thick ring of iron.";
            this.intForDes = 0;
            this.intDescription = "Just a simple boring old ring.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "ring";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 0;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //crafting
            this.yield = 8;
            this.intForCraft = 11;
            this.ingredients = [["Iron", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2 - Math.floor(player.getCharisma() / 50); // at max, buy for 1.
            this.sellValue = 1; // at max, sell for 1.
        }
        else if (this.type == "mofuFive")
        {
            //For All Items
            this.identity = "Mofu Feather Necklace";
            this.weight = 0.1;
            this.size = 11;
            this.description = "Five mofu feathers hanging from a thin cord of fiber.";
            this.intForDes = 1;
            this.intDescription = "You are one with the mofu...";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "necklace";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 0;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 2;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //crafting
            this.yield = 4;
            this.intForCraft = 21;
            this.ingredients = [["Fiber", 1], ["mofuFeather", 20]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 63 - Math.floor(player.getCharisma() / 2.5); // at max, buy for 43.
            this.sellValue = 43; // at max, sell for 6.
        }
        else if (this.type == "swampWalkerArmour")
        {
            //For All Items
            this.identity = "Swamp Walker Armour";
            this.weight = 3.5;
            this.size = 25;
            this.description = "Dark leather armour, a black hood that covers a metal mask which has stained glass eyes, and a blackish-green bandana.";
            this.intForDes = 13;
            this.intDescription = "This armour prevents airborne sickness.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 3.5 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 3;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0.45;
            this.thirstRetention = 0;
            this.shockResist = -1;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 6;
            this.rangedBonus = 2;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 4;
            this.survivalismBonus = 3;
            //Extra Stat Bonuses
            this.sleepBonus = 3;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "resistDisease";

            //Crafting
            this.yield = 1;
            this.intForCraft = 29;
            this.ingredients = [["Mountain Frich Pelt", 3], ["Iron", 1], ["Cloth", 1], ["Glass", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 130 - Math.floor(player.getCharisma() / 2); // at max, buy for 105.
            this.sellValue = 65 + Math.floor(player.getCharisma() / 2); // at max, sell for 90.
        }
        else if (this.type == "avrakLeatherArmour")
        {
            //For All Items
            this.identity = "Avrak Leather Armour";
            this.weight = 7;
            this.size = 26;
            this.description = "Armour made from the hide of an avrak.";
            this.intForDes = 1;
            this.intDescription = "Avrak hide is particularly thick and makes for a sturdy leather armour.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 6 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 5;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 1;
            this.thirstRetention = 0;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 2;
            this.rangedBonus = 1;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 3;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 29;
            this.ingredients = [["Avrak Hide", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 92 - Math.floor(player.getCharisma() / 2); // at max, buy for 67.
            this.sellValue = 42 + Math.floor(player.getCharisma() / 2); // at max, sell for 67.
        }
        else if (this.type == "evrakLeatherArmour")
        {
            //For All Items
            this.identity = "Evrak Leather Armour";
            this.weight = 8;
            this.size = 26;
            this.description = "Armour made from the hide of an evrak.";
            this.intForDes = 1;
            this.intDescription = "Evrak hide is particularly thick and makes for a sturdy leather armour.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 6 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 5;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0.95;
            this.thirstRetention = 0;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 1;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = 1;
            this.constitutionBonus = 1;
            this.staminaBonus = 1;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 30;
            this.ingredients = [["Evrak Hide", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 99 - Math.floor(player.getCharisma() / 2.5); // at max, buy for 79.
            this.sellValue = 54 + Math.floor(player.getCharisma() / 2); // at max, sell for 79.
        }
        else if (this.type == "walrusLeatherArmour")
        {
            //For All Items
            this.identity = "Walrus Leather Armour";
            this.weight = 3;
            this.size = 26;
            this.description = "Armour made from the hide of a land walrus.";
            this.intForDes = 3;
            this.intDescription = "This armour helps you to retain warmth and endure cold climates!";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 5 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 4;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 3;
            this.thirstRetention = - 0.5;
            this.shockResist = 5;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 1;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 25;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 24;
            this.ingredients = [["Walrus Hide", 1], ["Walrus Tusks", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 71 - Math.floor(player.getCharisma() / 3); // at max, buy for 56.
            this.sellValue = 29 + Math.floor(player.getCharisma() / 2); // at max, sell for 54.
        }
        else if (this.type == "skinAndBones")
        {
            //For All Items
            this.identity = "Worn Skin and Bones";
            this.weight = 11;
            this.size = 29;
            this.description = "Made from skinned human skin, and decorated with their bones.";
            this.intForDes = 11;
            this.intDescription = "This ghastly outfit belonged to the bandit chieftain Nelgref who would skin his victims and patch the new pieces onto this creation.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 4 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 11;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2.5;
            this.thirstRetention = -2.5;
            this.shockResist = 1;
            //Main Stat Bonuses
            this.strengthBonus = 3;
            this.enduranceBonus = 3;
            this.toughnessBonus = 6;
            this.intelligenceBonus = 0;
            this.charismaBonus = 11;
            this.rangedBonus = 0;
            this.constitutionBonus = 6;
            this.staminaBonus = -3;
            this.dexterityBonus = -11;
            this.survivalismBonus = -11;
            //Extra Stat Bonuses
            this.sleepBonus = 6;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "hefty";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1000 - Math.floor(player.getCharisma() / 0.1); // at max, buy for 500.
            this.sellValue = 0; // at max, sell for 0.
        }
        else if (this.type == "blackBearLeatherArmour")
        {
            //For All Items
            this.identity = "Black Bear Leather Armour";
            this.weight = 3;
            this.size = 26;
            this.description = "Armour made from the tanned hardened pelts of blackbears.";
            this.intForDes = 3;
            this.intDescription = "This armour is meant to be worn by woodland rangers who are skilled in survivalism and archery.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 3 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 5;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2.2;
            this.thirstRetention = - 0.5;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 2;
            this.rangedBonus = 1;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 1;
            //Extra Stat Bonuses
            this.sleepBonus = 1;
            this.hungerBonus = 1;
            this.thirstBonus = 0;
            this.warmthBonus = 10;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 19;
            this.ingredients = [["Black Bear Pelt", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 64 - Math.floor(player.getCharisma() / 12); // at max, buy for 60.
            this.sellValue = 45 + Math.floor(player.getCharisma() / 3); // at max, sell for 60.
        }
        else if (this.type == "balgurMercArmour")
        {
            //For All Items
            this.identity = "Balgur Mercenary Armour";
            this.weight = 4;
            this.size = 26;
            this.description = "The standard design for all armour worn by members of the balgur mercenary crew.";
            this.intForDes = 3;
            this.intDescription = "The Balgur Mercenaries are feared and respected throughout Thengaria and the surrounding regions.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 3.5 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 3;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0.75;
            this.thirstRetention = -0.1;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 1;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 5;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 1;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 80 - Math.floor(player.getCharisma() / 3); // at max, buy for 65.
            this.sellValue = 35 + Math.floor(player.getCharisma() / 2); // at max, sell for 60.
        }
        else if (this.type == "balgurCaptainArmour")
        {
            //For All Items
            this.identity = "Balgur Mercenary Captain Armour";
            this.weight = 7;
            this.size = 26;
            this.description = "This design of armour is specially made for only the captains of The Balgur Mercenaries.";
            this.intForDes = 3;
            this.intDescription = "The captains among The Balgur Mercenaries did not attain their ranks with ease; they are some of the most fearsome warriors you would meet.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 6 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 3;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0.9;
            this.thirstRetention = -0.1;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 2;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 8;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 1;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 2;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 145 - Math.floor(player.getCharisma() / 3); // at max, buy for 130.
            this.sellValue = 100 + Math.floor(player.getCharisma() / 2); // at max, sell for 125.
        }
        else if (this.type == "hetmerArmour")
        {
            //For All Items
            this.identity = "Wild Tusked Walrus Leather Armour";
            this.weight = 6;
            this.size = 26;
            this.description = "Armour made from the hide of a land Walrus.";
            this.intForDes = 0;
            this.intDescription = "This armour was made by the bandit chieftain Hetmer who reinforced it with sharpened walrus tusks and teeth to put fear into the hearts of his enemies.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 5.5 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 5;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 3;
            this.thirstRetention = - 0.5;
            this.shockResist = 6;
            //Main Stat Bonuses
            this.strengthBonus = 1;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 6;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 25;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Crafting
            //this armour can not be crafted -- it is unique and only Hetmer the bandit chieftain can drop it.

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 111 - Math.floor(player.getCharisma() / 3); // at max, buy for 96.
            this.sellValue = 71 + Math.floor(player.getCharisma() / 2); // at max, sell for 96.
        }
        else if (this.type == "anterShellArmour")
        {
            //For All Items
            this.identity = "Anter Shell Plate Armour";
            this.weight = 43;
            this.size = 28;
            this.description = "Armour made from the shells of anters.";
            this.intForDes = 1;
            this.intDescription = "This armour is heavy and not at all easy to move around in...";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 8 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 6;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 2;
            this.shockResist = 2;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 1;
            this.rangedBonus = -8;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = -22;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "heavy";

            //Crafting
            this.yield = 1;
            this.intForCraft = 24;
            this.ingredients = [["Anter Mandibles", 1], ["Anter Shell", 7]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 99; // at max, buy for 99.
            this.sellValue = 95 + Math.floor(player.getCharisma() / 12); // at max, sell for 99.
        }
        else if (this.type == "gulfreyShellArmour")
        {
            //For All Items
            this.identity = "Gulfrey Shell Plate Armour";
            this.weight = 12;
            this.size = 26;
            this.description = "Armour made from the shell sections of a gulfrey.";
            this.intForDes = 6;
            this.intDescription = "This armour is particularly light compared to metal plate armours.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 10 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 10;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 0;
            this.shockResist = 3;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 3;
            this.rangedBonus = -3;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = -1;
            this.survivalismBonus = -12;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 29;
            this.ingredients = [["Gulfrey Mandibles", 1], ["Gulfrey Shell Section", 7]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 194 - Math.floor(player.getCharisma() / 1); // at max, buy for 144.
            this.sellValue = 90 + Math.floor(player.getCharisma() / 1); // at max, sell for 140.
        }
        else if (this.type == "jvostranPlateArmour")
        {
            //For All Items
            this.identity = "Jvostran Plate Armour";
            this.weight = 172;
            this.size = 38;
            this.description = "Expertly forged armour made from refined jvostran ore.";
            this.intForDes = 12;
            this.intDescription = "Jvostran Plate armour is light blue compared to the dark blue of most jvostran because it is actually extremely thin.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 24 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 40;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 0;
            this.shockResist = -10;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 25;
            this.rangedBonus = -20;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = -55;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "heavy";

            //Crafting
            this.yield = 1;
            this.intForCraft = 47;
            this.ingredients = [["Jvostran", 22]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 24000 - Math.floor(player.getCharisma() / 0.01); // at max, buy for 19000.
            this.sellValue = 18000 + Math.floor(player.getCharisma() / 0.05); // at max, sell for 80.
        }
        else if (this.type == "chainArmour")
        {
            //For All Items
            this.identity = "Chain Mail Armour";
            this.weight = 15;
            this.size = 26;
            this.description = "Armour made from many small interconnected steel rings.";
            this.intForDes = 2;
            this.intDescription = "This armour is often used by a kingdom's soldiers because it is effective yet cheap enough to equip an army with.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 8 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 7;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 0;
            this.shockResist = -5;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = -2;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = -15;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 27;
            this.ingredients = [["Steel", 4]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 95 - Math.floor(player.getCharisma() / 3); // at max, buy for 80.
            this.sellValue = 65 + Math.floor(player.getCharisma() / 3); // at max, sell for 80.
        }
        else if (this.type == "thenganPlateArmour")
        {
            //For All Items
            this.identity = "Steel Plate Armour";
            this.weight = 80;
            this.size = 26;
            this.description = "Forged steel plate armour with elaborate enlayed patterns.";
            this.intForDes = 16;
            this.intDescription = "This armour is designed in the Thengan style and its enlayed patterns honor royal Thengan heraldry.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 14 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 15;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 0;
            this.shockResist = -8;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 15;
            this.rangedBonus = -20;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = -50;
            this.survivalismBonus = -50;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "heavy";

            //Crafting
            this.yield = 1;
            this.intForCraft = 36;
            this.ingredients = [["Steel", 18]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 640 - Math.floor(player.getCharisma() / 3); // at max, buy for 625.
            this.sellValue = 600 + Math.floor(player.getCharisma() / 2); // at max, sell for 625.
        }
        else if (this.type == "blackChainArmour")
        {
            //For All Items
            this.identity = "Black Chain Mail Armour";
            this.weight = 18;
            this.size = 26;
            this.description = "Armour made from many small interconnected rings of tempered nechrovite.";
            this.intForDes = 13;
            this.intDescription = "This armour is generally worn by soldiers in Vardania due to the land's abundance of nechrovite.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 9 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 9;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0;
            this.thirstRetention = 0;
            this.shockResist = -6;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = -2;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = -20;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 28;
            this.ingredients = [["Nechrovite", 4]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 139 - Math.floor(player.getCharisma() / 3); // at max, buy for 124.
            this.sellValue = 100 + Math.floor(player.getCharisma() / 2.5); // at max, sell for 120.
        }
        else if (this.type == "naapridLeatherArmour")
        {
            //For All Items
            this.identity = "Naaprid Leather Armour";
            this.weight = 2;
            this.size = 26;
            this.description = "Leather armour made from the tanned hide of a Naaprid.";
            this.intForDes = 1;
            this.intDescription = "This armour provides moderate heat retention in cold climates.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 3 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 2;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 1.5;
            this.thirstRetention = - 0.35;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            //Crafting
            this.yield = 1;
            this.intForCraft = 15;
            this.ingredients = [["Naaprid Pelt", 1], ["Naaprid Horn", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 46 - Math.floor(player.getCharisma() / 3); // at max, buy for 31.
            this.sellValue = 14 + Math.floor(player.getCharisma() / 3); // at max, sell for 29.
        }
        else if (this.type == "freydicRoyalDress")
        {
            //For All Items
            this.identity = "Freydic Royal Dress";
            this.weight = 1;
            this.size = 26;
            this.description = "The dress worn by the women in the freydic royal family.";
            this.intForDes = 5;
            this.intDescription = "This exquisite outfit is finely tailored from the fur of a massive winter wolf and lined with turquoise and sapphire engravings.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2;
            this.thirstRetention = -1;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            if (player.gender == "Male")
            {
                this.charismaBonus = -50;
            }
            else
            {
                this.charismaBonus = 30;
            }
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = -2;
            this.dexterityBonus = -10;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 10;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "hefty";

            //Crafting
            this.yield = 1;
            this.intForCraft = 43;
            this.ingredients = [["Sapphire", 1], ["Turquoise", 8], ["Massive Winter Wolf Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 5500 - Math.floor(player.getCharisma() / 0.125); // at max, buy for 5100.
            this.sellValue = 4700 + Math.floor(player.getCharisma() / 0.125); // at max, sell for 5100.
        }
        else if (this.type == "fineFreydicOutfitF")
        {
            //For All Items
            this.identity = "Lady's Fine Freydic Outfit";
            this.weight = 1;
            this.size = 26;
            this.description = "Expertly tailored clothing suitable for the high class.";
            this.intForDes = 1;
            this.intDescription = "Sewn from waanti fur, delicately lined with cloth on the inside!";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2.5;
            this.thirstRetention = -1;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            if (player.gender == "Male")
            {
                this.charismaBonus = -50;
            }
            else
            {
                this.charismaBonus = 15;
            }
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 15;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 41;
            this.ingredients = [["Waanti Pelt", 2], ["Cloth", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 250 - Math.floor(player.getCharisma() / 3); // at max, buy for 250.
            this.sellValue = 125 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 225.
        }
        else if (this.type == "fineFreydicOutfitM")
        {
            //For All Items
            this.identity = "Gent's Fine Freydic Outfit";
            this.weight = 1;
            this.size = 26;
            this.description = "Expertly tailored clothing suitable for the high class.";
            this.intForDes = 1;
            this.intDescription = "Sewn from waanti fur, delicately lined with cloth on the inside!";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2.5;
            this.thirstRetention = -1;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 10;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 15;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 41;
            this.ingredients = [["Waanti Pelt", 2], ["Cloth", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 250 - Math.floor(player.getCharisma() / 3); // at max, buy for 250.
            this.sellValue = 125 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 225.
        }
        else if (this.type == "freydicRoyalOutfit")
        {
            //For All Items
            this.identity = "Freydic Royal Outfit";
            this.weight = 4;
            this.size = 26;
            this.description = "A royal outfit tailored from the fur of a massive winter wolf: reinforced with fine steel, and embellished with numerous tiny Sapphires forming the shape of the royal Freynor coat of arms.";
            this.intForDes = 2;
            this.intDescription = "An outfit worn by the men in the Freynor royal family.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 8 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 6;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 3;
            this.thirstRetention = -2;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 35;
            this.rangedBonus = 0;
            this.constitutionBonus = 1;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 50;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 45;
            this.ingredients = [["Sapphire", 8], ["Steel", 5], ["Massive Winter Wolf Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 8950 - Math.floor(player.getCharisma() / 0.0625); // at max, buy for 8150.
            this.sellValue = 6925 + Math.floor(player.getCharisma() / 0.0625); // at max, sell for 7725.
        }
        else if (this.type == "hyelingArmour")
        {
            //For All Items
            this.identity = "Hyeling Battle Armour";
            this.weight = 7;
            this.size = 26;
            this.description = "A wood and fur armour commonly worn by hyeling soldiers.";
            this.intForDes = 2;
            this.intDescription = "The armour actually has four eye slits becuase hyelings have four eyes but only two of them are emphasized on the mask.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "armour";
            //Utility Focused
            //protections
            this.protection = 1.6 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 1.75;
            this.thirstRetention = -0.5;
            this.shockResist = -0.1;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 1;
            this.rangedBonus = -1;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = -2;
            this.survivalismBonus = 1;
            //Extra Stat Bonuses
            this.sleepBonus = 1;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 2;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 33;
            this.ingredients = [["Wood", 3], ["Waanti Pelt", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 60 - Math.floor(player.getCharisma() / 5); // at max, buy for 50.
            this.sellValue = 40 + Math.floor(player.getCharisma() / 5); // at max, sell for 50.
        }
        else if (this.type == "winterWolfOutfit")
        {
            //For All Items
            this.identity = "Winter Wolf Outfit";
            this.weight = 1;
            this.size = 26;
            this.description = "An outfit made from a the fur of a winter wolf; the hood is made from the wolf's head.";
            this.intForDes = 2;
            this.intDescription = "An outfit traditionally worn by the upper class men in the kingdom of Freynor.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2;
            this.thirstRetention = -0.5;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 9;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 20;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 29;
            this.ingredients = [["Winter Wolf Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 78 - Math.floor(player.getCharisma() / 2); // at max, buy for 53.
            this.sellValue = 30 + Math.floor(player.getCharisma() / 5); // at max, sell for 40.
        }
        else if (this.type == "winterWolfClothing")
        {
            //For All Items
            this.identity = "Winter Wolf Clothing";
            this.weight = 1;
            this.size = 26;
            this.description = "Clothing made from the fur of a winter wolf.";
            this.intForDes = 1;
            this.intDescription = "This is particularly good for staying warm in freezing climates!";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2;
            this.thirstRetention = -0.5;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 10;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 24;
            this.ingredients = [["Winter Wolf Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 51 - Math.floor(player.getCharisma() / 3); // at max, buy for 36.
            this.sellValue = 24 + Math.floor(player.getCharisma() / 5); // at max, sell for 34.
        }
        else if (this.type == "winterWolfDress")
        {
            //For All Items
            this.identity = "Winter Wolf Dress";
            this.weight = 1;
            this.size = 26;
            this.description = "A finely crafted dress made from the fur of a winter wolf.";
            this.intForDes = 1;
            this.intDescription = "This type of dress is often worn by wealthy or titled women in the Freynor lands. ";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 1.25;
            this.thirstRetention = -0.25;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            if (player.gender == "Male")
            {
                this.charismaBonus = -50;
            }
            else
            {
                this.charismaBonus = 7;
            }
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = -2;
            this.dexterityBonus = -10;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 10;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "hefty";

            this.yield = 1;
            this.intForCraft = 34;
            this.ingredients = [["Winter Wolf Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 90 - Math.floor(player.getCharisma() / 2); // at max, buy for 65.
            this.sellValue = 30 + Math.floor(player.getCharisma() / 2); // at max, sell for 55.
        }
        else if (this.type == "frichFurClothing")
        {
            //For All Items
            this.identity = "Frich Fur Clothing";
            this.weight = 1;
            this.size = 26;
            this.description = "Clothing sewn from the pelts of friches.";
            this.intForDes = 1;
            this.intDescription = "Frich clothing is associated with the low class.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 1;
            this.thirstRetention = -0.25;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = -1;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 11;
            this.ingredients = [["Frich Pelt", 4]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 14 - Math.floor(player.getCharisma() / 10); // at max, buy for 9.
            this.sellValue = 5 + Math.floor(player.getCharisma() / 12); // at max, sell for 9.
        }
        else if (this.type == "ardilFurClothing")
        {
            //For All Items
            this.identity = "Ardil Fur Clothing";
            this.weight = 1;
            this.size = 25;
            this.description = "Clothing sewn from the pelts of ardils.";
            this.intForDes = 1;
            this.intDescription = "Because ardils can be hard to catch and it takes numerous pelts to make an outfit, ardil clothing is prized.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2;
            this.thirstRetention = -1;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 1;
            this.rangedBonus = 1;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 3;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 14;
            this.ingredients = [["Ardil Pelt", 9]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 33;
            this.sellValue = 28 + Math.floor(player.getCharisma() / 10); // at max, sell for 33.
        }
        else if (this.type == "ardilFurSkirt")
        {
            //For All Items
            this.identity = "Ardil Fur Skirt with Leggings";
            this.weight = 1;
            this.size = 25;
            this.description = "An artfully sewn skirt and leggings made using ardil pelts.";
            this.intForDes = 1;
            this.intDescription = "Because ardils can be hard to catch and it takes numerous pelts to make an outfit, ardil clothing is prized.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2;
            this.thirstRetention = -1;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            if (player.gender == "Male")
            {
                this.charismaBonus = -50;
            }
            else
            {
                this.charismaBonus = 4;
            }
            this.rangedBonus = 1;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 3;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 15;
            this.ingredients = [["Ardil Pelt", 10]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 43 - Math.floor(player.getCharisma() / 12); // at max, buy for 39.
            this.sellValue = 33 + Math.floor(player.getCharisma() / 8); // at max, sell for 39.
        }
        else if (this.type == "grushFurClothing")
        {
            //For All Items
            this.identity = "Grush Fur Clothing";
            this.weight = 1;
            this.size = 25;
            this.description = "Clothing sewn from the plant-like green bristly fur of a Grush.";
            this.intForDes = 1;
            this.intDescription = "Grushes use their fur to camoflauge with their surroundings, perhaps you will too.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0.1;
            this.thirstRetention = 0;
            this.shockResist = 1;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = -2;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 2;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 18;
            this.ingredients = [["Grush Fur", 6]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 39 - Math.floor(player.getCharisma() / 3); // at max, buy for 24.
            this.sellValue = 14 + Math.floor(player.getCharisma() / 5); // at max, sell for 24.
        }
        else if (this.type == "blackBearFurClothing")
        {
            //For All Items
            this.identity = "Black Bear Fur Clothing";
            this.weight = 2;
            this.size = 25;
            this.description = "Clothing sewn from the pelt of a blackbear.";
            this.intForDes = 0;
            this.intDescription = "Black bear fur is soft, warm, and comfortable to wear.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2.2;
            this.thirstRetention = -0.5;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 2;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 10;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 17;
            this.ingredients = [["Black Bear Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 38 - Math.floor(player.getCharisma() / 15); // at max, buy for 35.
            this.sellValue = 29 + Math.floor(player.getCharisma() / 8); // at max, sell for 35.
        }
        else if (this.type == "waantiFurOutfit")
        {
            //For All Items
            this.identity = "Waanti Fur Outfit";
            this.weight = 1;
            this.size = 26;
            this.description = "Clothing sewn from the pelts of waanti.";
            this.intForDes = 0;
            this.intDescription = "Waanti fur is particularly good at holding in heat.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 2.1;
            this.thirstRetention = -1;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 1;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 7;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 16;
            this.ingredients = [["Waanti Pelt", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 22 - Math.floor(player.getCharisma() / 8); // at max, buy for 16.
            this.sellValue = 11 + Math.floor(player.getCharisma() / 10); // at max, sell for 16.
        }
        else if (this.type == "varnFurClothing")
        {
            //For All Items
            this.identity = "Varn Fur Clothing";
            this.weight = 1;
            this.size = 26;
            this.description = "Clothing sewn from the pelts of varns.";
            this.intForDes = 20;
            this.intDescription = "Varns are often found in temperate to cold forests and therefore much of the clothing produced from varns is near such regions.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 1.5;
            this.thirstRetention = -0.35;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 0;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 5;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 15;
            this.ingredients = [["Varn Pelt", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 19 - Math.floor(player.getCharisma() / 10); // at max, buy for 14.
            this.sellValue = 9 + Math.floor(player.getCharisma() / 10); // at max, sell for 14.
        }
        else if (this.type == "varnFurCloak")
        {
            //For All Items
            this.identity = "Varn Fur Cloak";
            this.weight = 1;
            this.size = 26;
            this.description = "A cloak sewn from varn fur.";
            this.intForDes = 20;
            this.intDescription = "Cloaks are an opportune clothing for a rogue because their design allows for easy sneaking as well as quick movements.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 1.5;
            this.thirstRetention = -0.35;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            this.charismaBonus = 0;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 1;
            this.survivalismBonus = 1;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 5;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 17;
            this.ingredients = [["Varn Pelt", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 27 - Math.floor(player.getCharisma() / 8); // at max, buy for 21.
            this.sellValue = 13 + Math.floor(player.getCharisma() / 6); // at max, sell for 21.
        }
        else if (this.type == "varnFurDress")
        {
            //For All Items
            this.identity = "Varn Fur Dress";
            this.weight = 1;
            this.size = 26;
            this.description = "A dress sewn from varn fur.";
            this.intForDes = 2;
            this.intDescription = "The fabric is thick and durable but soft and comfortable, overall it makes for a good dress for the non-aristocratic classes.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 0.5;
            this.thirstRetention = -0.15;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.intelligenceBonus = 0;
            if (player.gender == "Male")
            {
                this.charismaBonus = -50;
            }
            else
            {
                this.charismaBonus = 2;
            }
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = -2;
            this.dexterityBonus = -10;
            this.survivalismBonus = 0;
            //Extra Stat Bonuses
            this.sleepBonus = 0;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 5;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "hefty";

            this.yield = 1;
            this.intForCraft = 19;
            this.ingredients = [["Varn Pelt", 4]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 33 - Math.floor(player.getCharisma() / 8); // at max, buy for 27.
            this.sellValue = 17 + Math.floor(player.getCharisma() / 5); // at max, sell for 27.
        }
        else if (this.type == "mofuMatriarchHeaddress")
        {
            //For All Items
            this.identity = "Alzkwaya Matriarch Dress";
            this.weight = 1;
            this.size = 26;
            this.description = "A dress tailored from dyed mofu feathers of different sizes for the ruling matriarch of the kellish Alzkwaya tribe.";
            this.intForDes = 25;
            this.intDescription = "The Alzkwaya believe that this outfit draws out wisdom from nature and the spirit realm.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 1;
            this.thirstRetention = -3;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            if (player.gender == "Male")
            {
                this.charismaBonus = -50;
                this.intelligenceBonus = 0;
            }
            else
            {
                this.charismaBonus = 20;
                this.intelligenceBonus = 2;
            }
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = -3;
            this.dexterityBonus = -24;
            this.survivalismBonus = 2;
            //Extra Stat Bonuses
            this.sleepBonus = 2;
            this.hungerBonus = 2;
            this.thirstBonus = 2;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 1;

            //ability
            this.ability = "hefty";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 828 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 628.
            this.sellValue = 345 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 545.
        }
        else if (this.type == "mofuTribalWear")
        {
            //For All Items
            this.identity = "Alzkwaya Outfit";
            this.weight = 1;
            this.size = 22;
            this.description = "The mofu feather tailored outfit worn by the kellish Alzkwaya tribe's members.";
            this.intForDes = 22;
            this.intDescription = "In Alzkwaya culture a mofu's feathers are seen as being able to enable a link to the spirit world.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 1;
            this.thirstRetention = -3;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.charismaBonus = 3;
            this.intelligenceBonus = 0;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 1;
            this.survivalismBonus = -1;
            //Extra Stat Bonuses
            this.sleepBonus = 1;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 20;
            this.ingredients = [["Mofu Feather", 30]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 105 - Math.floor(player.getCharisma() / 2); // at max, buy for 80.
            this.sellValue = 70 + Math.floor(player.getCharisma() / 5); // at max, sell for 80.
        }
        else if (this.type == "mofuRunnerOutfit")
        {
            //For All Items
            this.identity = "Alzkwaya Runner Outfit";
            this.weight = 1;
            this.size = 24;
            this.description = "An Alzkwayan outfit with a cape of mofu feathers; worn by the Alzkwaya tribe's messengers.";
            this.intForDes = 25;
            this.intDescription = "To the Alzkwaya a cape of feathers is seen as a means of calling forth speed from the spirit world.";

            //Define Utility
            this.utility = "worn";
            //the type of armour/clothing it is...
            this.subUtility = "clothing";
            //Utility Focused
            //protections
            this.protection = 0 * ((player.toughness / 100) + 1);
            this.toughnessRequirement = 0;
            this.eminenceRequirement = 0;
            this.magicalProtection = 0;
            this.warmthRetention = 1;
            this.thirstRetention = -3;
            this.shockResist = 0;
            //Main Stat Bonuses
            this.strengthBonus = 0;
            this.enduranceBonus = 0;
            this.toughnessBonus = 0;
            this.charismaBonus = 4;
            this.intelligenceBonus = 0;
            this.rangedBonus = 0;
            this.constitutionBonus = 0;
            this.staminaBonus = 0;
            this.dexterityBonus = 2;
            this.survivalismBonus = -2;
            //Extra Stat Bonuses
            this.sleepBonus = 1;
            this.hungerBonus = 0;
            this.thirstBonus = 0;
            this.warmthBonus = 0;
            //Magical Stat Bonuses
            this.eminenceBonus = 0;
            this.willpowerBonus = 0;
            this.knowledgeBonus = 0;
            this.concentrationBonus = 0;
            this.memoryBonus = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 21;
            this.ingredients = [["Mofu Feather", 40]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 155 - Math.floor(player.getCharisma() / 2); // at max, buy for 130.
            this.sellValue = 120 + Math.floor(player.getCharisma() / 5); // at max, sell for 130.
        }
        else if (this.type == "longsword")
        {
            //For All Items
            this.identity = "Longsword";
            this.weight = 3;
            this.size = 30;
            this.description = "A well forged longsword.";
            this.intForDes = 5;
            this.intDescription = "This style of longsword is made in the lands of Thengar.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 6;
            this.distance = 25 + (this.range * 7);
            this.range = 4.5;
            this.rate = 100;
            this.damage = (7 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 30;
            this.ingredients = [["Steel", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 28 - Math.floor(player.getCharisma() / 4); // at max, buy for 15.
            this.sellValue = 11 + Math.floor(player.getCharisma() / 12.4); // at max, sell for 15.
        }
        else if (this.type == "thenganSwordAndShield")
        {
            //For All Items
            this.identity = "Sword and Shield";
            this.weight = 7;
            this.size = 31;
            this.description = "A sword and a shield designed for the soldiers of Thengar.";
            this.intForDes = 5;
            this.intDescription = "";

            //Define Utility
            this.utility = "weapon";
            this.subUtility = "shield";

            //Utility Focused
            this.energyCost = 5;
            this.distance = 34 + (this.range * 7);
            this.range = 3.5;
            this.rate = 100;
            this.damage = (6 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/25) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 0;
            this.blocking = 19 + (player.getToughness() / 5);
            this.blockCost = 3;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 36;
            this.ingredients = [["Steel", 8]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 113 - Math.floor(player.getCharisma() / 5); // at max, buy for 103.
            this.sellValue = 65  + Math.floor(player.getCharisma() / 2); // at max, sell for 90.
        }
        else if (this.type == "freydicWarAxe")
        {
            //For All Items
            this.identity = "Freydic War Axe";
            this.weight = 8;
            this.size = 30;
            this.description = "A powerful Freynor great axe.";
            this.intForDes = 25;
            this.intDescription = "Used by the Freynor as both a hunting weapon and a weapon of war.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getEndurance() >= 10)
            {
                this.energyCost = 13;
            }
            else
            {
                this.energyCost = 15;
            }
            this.distance = 23 + (this.range * 7);
            this.range = 5.4;
            this.rate = 140;
            this.damage = (11 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 2;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 32;
            this.ingredients = [["Steel", 3], ["Jvostran", 1], ["Walrus Tusks", 1], ["Walrus Hide", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 175 - Math.floor(player.getCharisma() / 1); // at max, buy for 125.
            this.sellValue = 75 + Math.floor(player.getCharisma() / 1); // at max, sell for 125.
        }
        else if (this.type == "freydicSpear")
        {
            //For All Items
            this.identity = "Freydic Spear";
            this.weight = 3;
            this.size = 30;
            this.description = "A Freydic spear used for hunting.";
            this.intForDes = 1;
            this.intDescription = "The Freydic spear is simply made with a wooden shaft wrapped in leather for the handle and a tip carved from bone.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 2;
            this.distance = 38 + (this.range * 7);
            this.range = 2.8;
            this.rate = 140;
            this.damage = (4 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/25) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 2;
            this.intForCraft = 12;
            this.ingredients = [["Wood", 2], ["Walrus Tusks", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 19 - Math.floor(player.getCharisma() / 5); // at max, buy for 9.
            this.sellValue = 7 + Math.floor(player.getCharisma() / 25); // at max, sell for 9.
        }
        else if (this.type == "vardanianAxe")
        {
            //For All Items
            this.identity = "Small War Axe";
            this.weight = 1;
            this.size = 20;
            this.description = "A small axe forged for war.";
            this.intForDes = 1;
            this.intDescription = "This axe is of Vardanian design.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 1;
            this.distance = 16 + (this.range * 7);
            this.range = 2.5;
            this.rate = 115 - player.getDexterity();
            this.damage = (3 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/50) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 3;
            this.ingredients = [["Iron", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 11 - Math.floor(player.getCharisma() / 12.5); // at max, buy for 7.
            this.sellValue = 3 + Math.floor(player.getCharisma() / 12.5); // at max, sell for 7.
        }
        else if (this.type == "vardanianAxeDual")
        {
            //For All Items
            this.identity = "Twin War Axes";
            this.weight = 2;
            this.size = 25;
            this.description = "Two small axes forged for war.";
            this.intForDes = 1;
            this.intDescription = "One axe per hand, that's how the Vardanians do it...";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 3;
            this.distance = 17 + (this.range * 7);
            this.range = 3.25;
            this.rate = 135 - player.getDexterity();
            this.damage = (6 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/25) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 5;
            this.ingredients = [["Iron", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 27 - Math.floor(player.getCharisma() / 5); // at max, buy for 17.
            this.sellValue = 8 + Math.floor(player.getCharisma() / 8); // at max, sell for 14.
        }
        else if (this.type == "nirineseSabre")
        {
            //For All Items
            this.identity = "Nirinese Sabre";
            this.weight = 4;
            this.size = 30;
            this.description = "A deadly Nirwaden sabre made from hardened thrice forged steel.";
            this.intForDes = 3;
            this.intDescription = "The sabre is one of the most frequently used weapons by the Nirinese.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 7;
            this.distance = 28 + (this.range * 7);
            this.range = 5.4;
            this.rate = 85;
            if (player.getDexterity() < 4)
            {
                this.damage = 7 * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            }
            else
            {
                this.damage = 9 * (this.leveledDamageMultiple / 25) + ((7/50) * player.getStrength());
            }
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 35;
            this.ingredients = [["Thrice Forged Steel", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 67 - Math.floor(player.getCharisma() / 5); // at max, buy for 57.
            this.sellValue = 32 + Math.floor(player.getCharisma() / 2); // at max, sell for 57.
        }
        else if (this.type == "blueBlade")
        {
            //For All Items
            this.identity = "Ruhn-kor-gren";
            this.weight = 23;
            this.size = 32;
            this.description = "A Freydic greatsword made out of pure jvostran ore.";
            this.intForDes = 36;
            this.intDescription = "pronounced: | Run | Kar | Gren | The name means strong, long and sharp in Ancient Freydic.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 35;
            this.distance = 45 + (this.range * 7);
            this.range = 7;
            this.rate = 325;
            this.damage = (31 - this.damageHandicap - this.damageHandicapII) * (this.leveledDamageMultiple / 25) + ((3/50) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 47;
            this.ingredients = [["Jvostran", 6]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1040 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 940.
            this.sellValue = 619 + Math.floor(player.getCharisma() / 0.4); // at max, sell for 744.
        }
        else if (this.type == "vardanianBattleAxe")
        {
            //For All Items
            this.identity = "Vardanian Battle Axe";
            this.weight = 17;
            this.size = 32;
            this.description = "A finely forged nechrovite and steel battle axe of Vardanian origin.";
            this.intForDes = 5;
            this.intDescription = "It is common for the most wealthy Vardanians to use a weapon such as this.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 22;
            this.distance = 16 + (this.range * 7);
            this.range = 6;
            this.rate = 175 - (1/2 * player.getDexterity());
            this.damage = (20 - this.damageHandicap - this.damageHandicapII) * (this.leveledDamageMultiple / 25) + ((1/25) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 4;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 50;
            this.ingredients = [["Steel", 1], ["Nechrovite", 4]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 720 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 620.
            this.sellValue = 290 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 390.
        }
        else if (this.type == "dualVardanianBattleAxe")
        {
            //For All Items
            this.identity = "Vardanian Battle Axes";
            this.weight = 34;
            this.size = 32;
            this.description = "Two finely forged nechrovite and steel battle axes, one in each hand.";
            this.intForDes = 0;
            this.intDescription = "It is a true feat of strength to be able to fight with two Vardanian battle axes at once.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getStrength() >= 35)
            {
                this.energyCost = 50;
            }
            else
            {
                this.energyCost = 100;
            }
            this.distance = 25 + (this.range * 7);
            this.range = 10;
            this.rate = 350 - (player.getDexterity());
            this.damage = (36 - this.damageHandicap - this.damageHandicapII) * (this.leveledDamageMultiple / 25) + ((2/25) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 5;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 56;
            this.ingredients = [["Vardanian Battle Axe", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 1440 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 1240.
            this.sellValue = 580 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 780.
        }
        else if (this.type == "flail")
        {
            //For All Items
            this.identity = "Flail";
            this.weight = 17;
            this.size = 24;
            this.description = "A heavy spiked metal ball attached to a handle by a chain.";
            this.intForDes = 3;
            this.intDescription = "Spikey crushy death death!";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 25;
            this.distance = 40 + (this.range * 7);
            this.range = 6;
            this.rate = 250;
            this.damage = (18 - this.damageHandicap - this.damageHandicapII) * (this.leveledDamageMultiple / 25) + ((1/12.5) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 11;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 44;
            this.ingredients = [["Steel", 5]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 435 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 235.
            this.sellValue = 195 + Math.floor(player.getCharisma() / 2); // at max, sell for 220.
        }
        else if (this.type == "aldrekiiBardiche")
        {
            //For All Items
            this.identity = "Aldrekii Bardiche";
            this.weight = 11;
            this.size = 32;
            this.description = "A long reaching pole axe forged by the Aldrek.";
            this.intForDes = 2;
            this.intDescription = "This weapon is used to attack enemies whilst maintaining a safe distance from them.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getEndurance() >= 50)
            {
                this.energyCost = 20;
            }
            else if (player.getEndurance() > 34)
            {
                this.energyCost = 23;
            }
            else
            {
                this.energyCost = 25;
            }
            this.distance = 55 + (this.range * 7);
            this.range = 3.6;
            this.rate = 165;
            this.damage = (20 - this.damageHandicap - this.damageHandicapII) * (this.leveledDamageMultiple / 25) + Math.floor(((1/6.6) * player.getStrength()));
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 40;
            this.ingredients = [["Ikrinium", 1], ["Steel", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 274 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 174.
            this.sellValue = 118 + Math.floor(player.getCharisma() / 1); // at max, sell for 168.
        }
        else if (this.type == "aldrekiiBlade")
        {
            //For All Items
            this.identity = "Aldrekii War Blade";
            this.weight = 3;
            this.size = 32;
            this.description = "A deeply curved blade forged by the aldrekii.";
            this.intForDes = 13;
            this.intDescription = "This blade was designed to be used in a quick fighting style.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 1.5;
            this.distance = 18 + (this.range * 7);
            this.range = 5;
            this.rate = 70 - Math.floor(player.getEndurance() / 5);
            if (player.getDexterity() >= 3 && player.getDexterity() < 10)
            {
                this.damage = ((4 - this.damageHandicap) * (this.leveledDamageMultiple / 25)) * (1 + 0.2 * this.superStealthNum(1));
            }
            else if (player.getDexterity() >= 10)
            {
                this.damage = ((5 - this.damageHandicap) * (this.leveledDamageMultiple / 25)) * (1 + 0.2 * this.superStealthNum(1));
            }
            else
            {
                this.damage = ((3 - this.damageHandicap) * (this.leveledDamageMultiple / 25)) * (1 + 0.2 * this.superStealthNum(1));
            }
            this.magicalDamage = 0;
            this.negateArmour = 0 + this.superStealthNum(1);

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 28;
            this.ingredients = [["Ikrinium", 1], ["Steel", 2]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 35 - Math.floor(player.getCharisma() / 10); // at max, buy for 30.
            this.sellValue = 14 + Math.floor(player.getCharisma() / 3); // at max, sell for 29.
        }
        else if (this.type == "aldrekiiClaws")
        {
            //For All Items
            this.identity = "Aldrekii Battle Claws";
            this.weight = 2.8;
            this.size = 32;
            this.description = "Metal claws, made from ikrinium infused steel.";
            this.intForDes = 1;
            this.intDescription = "The swift claws are used to kill enemies before they even have time to draw their blades.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 0.5;
            this.distance = 13 + (this.range * 7);
            this.range = 2 + 4/7;
            this.rate = Math.max(10, 50 - Math.floor(player.getDexterity() / 2));
            if (player.getDexterity() >= 3 && player.getDexterity() < 10)
            {
                this.damage = ((2.5 - this.damageHandicap) * (this.leveledDamageMultiple / 25)) * (1 + this.superStealthNum(1));
            }
            else if (player.getDexterity() >= 10)
            {
                this.damage = ((3.5 - this.damageHandicap) * (this.leveledDamageMultiple / 25)) * (1 + this.superStealthNum(1));
            }
            else
            {
                this.damage = ((2 - this.damageHandicap) * (this.leveledDamageMultiple / 25)) * (1 + this.superStealthNum(1));
            }
            this.magicalDamage = 0;
            this.negateArmour = 0.75 + this.superStealthNum(4.25);

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 33;
            this.ingredients = [["Ikrinium", 1], ["Steel", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 68 - Math.floor(player.getCharisma() / 5); // at max, buy for 58.
            this.sellValue = 52 + Math.floor(player.getCharisma() / 8); // at max, sell for 58.
        }
        else if (this.type == "freydicGreatSword")
        {
            //For All Items
            this.identity = "Greatsword";
            this.weight = 12;
            this.size = 35;
            this.description = "A powerful steel great sword of Freydic design.";
            this.intForDes = 1;
            this.intDescription = "It takes some strength to swing this blade effectively.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 18;
            this.distance = 38 + (this.range * 7);
            this.range = 8; //was 8.3
            this.rate = 235;
            if (player.getStrength() < 8)
            {
                this.damage = (12 - (this.damageHandicap * 5)) * (this.leveledDamageMultiple / 25) + ((2/25) * player.getStrength());
            }
            else
            {
                this.damage = 16 * (this.leveledDamageMultiple / 25) + (9 / 50 * player.getStrength());
            }
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 39;
            this.ingredients = [["Jvostran", 1], ["Steel", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 268 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 168.
            this.sellValue = 135 + Math.floor(player.getCharisma() / 2); // at max, sell for 160.
        }
        else if (this.type == "theNorthernGem")
        {
            //For All Items
            this.identity = "The Northern Gem";
            this.weight = 20;
            this.size = 35;
            this.description = "The blade of royal Freydic heritage passed down always to the heir of the kingdom of Freynor.";
            this.intForDes = 32;
            this.intDescription = "The inside of the blade is weighted with jvostran and the outside is the highest quality steel.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 20;
            this.distance = 50 + (this.range * 7);
            this.range = 6 + 6/7;
            this.rate = 220;
            if (player.getStrength() < 22)
            {
                this.damage = (15 - (this.damageHandicap * 3)) * (this.leveledDamageMultiple / 25);
            }
            else
            {
                this.damage = 18 * (this.leveledDamageMultiple / 25) + (10 / 50 * player.getStrength());
            }
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 60;
            this.ingredients = [["Jvostran", 3], ["Steel", 3], ["Gold", 1], ["Saphire", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 2600 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 2500.
            this.sellValue = 2400 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 2500.
        }
        else if (this.type == "kellishClaymore")
        {
            //For All Items
            this.identity = "Kellish Claymore";
            this.weight = 14;
            this.size = 38;
            this.description = "A hardy iron claymore.";
            this.intForDes = 4;
            this.intDescription = "The claymore is the most appreciated weapon among the kellish.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getEndurance() >= 25)
            {
                this.energyCost = 13;
            }
            else if (player.getEndurance() >= 10)
            {
                this.energyCost = 14;
            }
            else if (player.getEndurance() >= 5)
            {
                this.energyCost = 17;
            }
            else
            {
                this.energyCost = 21;
            }
            this.distance = 66 + (this.range * 7);
            this.range = 7;
            this.rate = 185;
            this.damage = (14 - (this.damageHandicap * 3)) * (this.leveledDamageMultiple / 25) + ((7/50) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 40;
            this.ingredients = [["Iron", 6], ["Naaprid Pelt", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 160 - Math.floor(player.getCharisma() / 1); // at max, buy for 110.
            this.sellValue = 70 + Math.floor(player.getCharisma() / 1.25); // at max, sell for 110.
        }
        else if (this.type == "kellishSword")
        {
            //For All Items
            this.identity = "Longsword";
            this.weight = 3;
            this.size = 14;
            this.description = "A sharp iron longsword.";
            this.intForDes = 2;
            this.intDescription = "This sword is of kellish design.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getEndurance() >= 25)
            {
                this.energyCost = 2.5;
            }
            else if (player.getEndurance() >= 10)
            {
                this.energyCost = 3;
            }
            else
            {
                this.energyCost = 3.5;
            }
            this.distance = 35 + (this.range * 7);
            this.range = 3 + 5/7;
            this.rate = 100;
            if (player.getEndurance() >= 10)
            {
                this.rate = 95;
            }
            this.damage = (4.5 - (this.damageHandicap * 0.5)) * (this.leveledDamageMultiple / 25) + ((5/50) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 13;
            this.ingredients = [["Iron", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 36 - Math.floor(player.getCharisma() / 8); // at max, buy for 30.
            this.sellValue = 20 + Math.floor(player.getCharisma() / 6); // at max, sell for 28.
        }
        else if (this.type == "kellishSawClub")
        {
            //For All Items
            this.identity = "Kellish Saw Club";
            this.weight = 3;
            this.size = 17;
            this.description = "A flat wooden club reinforced with sharpened iron teeth on each side.";
            this.intForDes = 1;
            this.intDescription = "The iron spikes built into the sides can pierce light armour with ease.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getEndurance() >= 5)
            {
                this.energyCost = 1;
            }
            else
            {
                this.energyCost = 2;
            }
            this.distance = 24 + (this.range * 7);
            this.range = 4;
            this.rate = Math.max(10, 115 - 15/50 * player.getDexterity());
            this.damage = (4 - (this.damageHandicap * 2)) * (this.leveledDamageMultiple / 25) + ((1/25) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 6;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 9;
            this.ingredients = [["Iron", 1], ["Wood", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 25 - Math.floor(player.getCharisma() / 6); // at max, buy for 17.
            this.sellValue = 11 + Math.floor(player.getCharisma() / 8); // at max, sell for 17.
        }
        else if (this.type == "hyelingCleaver")
        {
            //For All Items
            this.identity = "Hyeling Battle Cleaver";
            this.weight = 2;
            this.size = 35;
            this.description = "A blue cleaver crafted from a strange non-metal material.";
            this.intForDes = 30;
            this.intDescription = "Hyelings shed their claws and use them to forge weaponry.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 2.5;
            this.distance = 20 + (this.range * 7);
            this.range = 3 + 1/7;
            this.rate = 90;
            this.damage = (3 - (this.damageHandicap)) * (this.leveledDamageMultiple / 25) + ((2/50) * player.getStrength() + (3/50) * player.getDexterity());
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 35;
            this.ingredients = [["Hyeling Claws", 9]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 29 - Math.floor(player.getCharisma() / 10); // at max, buy for 24.
            this.sellValue = 19 + Math.floor(player.getCharisma() / 10); // at max, sell for 24.
        }
        else if (this.type == "vardanianCleaver")
        {
            //For All Items
            this.identity = "Vardanian War Cleaver";
            this.weight = 3.5;
            this.size = 35;
            this.description = "An expertly crafted steel war cleaver of Vardanian origin.";
            this.intForDes = 2;
            this.intDescription = "This weapon is used by the well equipped soldiers in Vardania.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            this.energyCost = 4.5;
            this.distance = 26 + (this.range * 7);
            this.range = 4;
            this.rate = 100;
            this.damage = (5.5 - (this.damageHandicap)) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 33;
            this.ingredients = [["Steel", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 50 - Math.floor(player.getCharisma() / 2.5); // at max, buy for 30.
            this.sellValue = 18 + Math.floor(player.getCharisma() / 5); // at max, sell for 28.
        }
        else if (this.type == "vardanianHeavyCleaver")
        {
            //For All Items
            this.identity = "Heavy Vardanian War Cleaver";
            this.weight = 8;
            this.size = 17;
            this.description = "A large and fearsome battle cleaver of Vardanian design.";
            this.intForDes = 2;
            this.intDescription = "This weapon is brutally effective if wielded by one skilled enough to use it.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getEndurance() >= 10)
            {
                this.energyCost = 10;
            }
            else
            {
                this.energyCost = 14;
            }
            this.distance = 38 + (this.range * 7);
            this.range = (5 + 6/7);
            this.rate = 181 - (32 / (51 - player.getDexterity()));

            if (player.getStrength() >= 26)
            {
                this.damage = (14) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            }
            else if (player.getStrength() >= 12)
            {
                this.damage = (13) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            }
            else if (player.getStrength() >= 7)
            {
                this.damage = (12) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            }
            else
            {
                this.damage = (11 - (this.damageHandicap)) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
            }

            this.magicalDamage = 0;
            this.negateArmour = 0;

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 44;
            this.ingredients = [["Steel", 2], ["Nechrovite", 4]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 336 - Math.floor(player.getCharisma() / 2); // at max, buy for 311.
            this.sellValue = 152 + Math.floor(player.getCharisma() / 0.33); // at max, sell for 303.
        }
        else if (this.type == "katana")
        {
            //For All Items
            this.identity = "Katana";
            this.weight = 2;
            this.size = 24;
            this.description = "A swift and deadly blade made of steel.";
            this.intForDes = 6;
            this.intDescription = "The more one trains their endurance and speed the more effective they become with the use of a katana.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getEndurance() < 20)
            {
                this.energyCost = 4;
            }
            else
            {
                this.energyCost = 2;
            }
            this.distance = 26 + (this.range * 7);
            this.range = (7 + 1/7);
            if (player.getDexterity() < 25)
            {
                this.rate = 90;
            }
            else
            {
                this.rate = 55;
            }
            this.damage = ((5 - (this.damageHandicap)) * (this.leveledDamageMultiple / 25) + ((10/50) * player.getDexterity())) * (1 + this.superStealthNum(1));
            this.magicalDamage = 0;
            this.negateArmour = 0 + this.superStealthNum(16);

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 43;
            this.ingredients = [["Steel", 3]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 90 - Math.floor(player.getCharisma() / 5); // at max, buy for 65.
            this.sellValue = 32 + Math.floor(player.getCharisma() / 2); // at max, sell for 57.
        }
        else if (this.type == "dualCurvedDaggers")
        {
            //For All Items
            this.identity = "Dual Curved Daggers";
            this.weight = 1;
            this.size = 17;
            this.description = "Two curved steel daggers used in synchrony to produce a deadly fighting style.";
            this.intForDes = 6;
            this.intDescription = "The more one trains their endurance and speed the more effective they become with the use of these daggers.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getEndurance() < 8)
            {
                this.energyCost = 2.5;
            }
            else
            {
                this.energyCost = 1.5;
            }
            this.distance = 26 + (this.range * 7);
            this.range = 3;
            if (player.getDexterity() < 7)
            {
                this.rate = 70;
            }
            else if (player.getDexterity() < 14)
            {
                this.rate = 60;
            }
            else
            {
                this.rate = 45;
            }
            this.damage = ((4.5 - (1.5 * this.damageHandicap)) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getDexterity())) * (1 + this.superStealthNum(1));
            this.magicalDamage = 0;
            this.negateArmour = 0 + this.superStealthNum(12);

            //ability
            this.ability = "none";

            this.yield = 1;
            this.intForCraft = 14;
            this.ingredients = [["Steel", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 24 - Math.floor(player.getCharisma() / 8); // at max, buy for 18.
            this.sellValue = 13 + Math.floor(player.getCharisma() / 10); // at max, sell for 18.
        }
        else if (this.type == "curvedDagger")
        {
            //For All Items
            this.identity = "Curved Dagger";
            this.weight = 0.5;
            this.size = 17;
            this.description = "A thin, light weight, and extremely sharp curved steel dagger.";
            this.intForDes = 6;
            this.intDescription = "The more one trains their endurance and speed the more effective they become with the use of this dagger.";

            //Define Utility
            this.utility = "weapon";

            //Utility Focused
            if (player.getEndurance() < 8)
            {
                this.energyCost = 2;
            }
            else
            {
                this.energyCost = 1;
            }
            this.distance = 26 + (this.range * 7);
            this.range = (2 + 4/7);
            if (player.getDexterity() < 7)
            {
                this.rate = 65;
            }
            else if (player.getDexterity() < 14)
            {
                this.rate = 55;
            }
            else
            {
                this.rate = 45;
            }
            this.damage = ((2 - (1/2 * this.damageHandicap)) * (this.leveledDamageMultiple / 25) + ((1/16) * player.getDexterity())) * (1 + this.superStealthNum(1));
            this.magicalDamage = 0;
            this.negateArmour = 0 + this.superStealthNum(10);

            //ability
            this.ability = "none";

            this.yield = 2;
            this.intForCraft = 13;
            this.ingredients = [["Steel", 1]];

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 12 - Math.floor(player.getCharisma() / 15); // at max, buy for 9.
            this.sellValue = 6 + Math.floor(player.getCharisma() / 15); // at max, sell for 9.
        }
        else if (this.type == "unitMarker")
        {
            //For All Items
            this.identity = "Marker";
            this.weight = 0;
            this.size = 12;
            this.description = "Place a marker to show where an item will be spawned in the future so that you don't get mixed up.";
            this.intForDes = 0;
            this.intDescription = "These are not a real game item.";

            //Define Utility
            this.utility = "junk";

            //ability
            this.ability = "none";

            //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
            this.buyValue = 0; // at max, buy for 0.
            this.sellValue = 0; // at max, sell for 0.
        }
        else if (this.type == "plantMarker")
            {
                //For All Items
                this.identity = "Marker";
                this.weight = 0;
                this.size = 12;
                this.description = "Place a marker to show where an item will be spawned in the future so that you don't get mixed up.";
                this.intForDes = 0;
                this.intDescription = "These are not a real game item.";

                //Define Utility
                this.utility = "junk";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 0; // at max, buy for 0.
                this.sellValue = 0; // at max, sell for 0.
            }
    };

    //This draws items onto the map.
    this.drawItem = function()
    {
        if (this.type == "coins")
        {
            for (var i = 0; i < worldItems.length; i++)
            {
                if (worldItems[i][0] === this)
                {
                    if (worldItems[i][1] <= 10)
                    {
                        XXX.beginPath();
                        XXX.drawImage(polyPNG, 405, 7, 6, 4, X - this.X + (1/2 * CCC.width) - (1/2 * 6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 4), 6, 4);
                        worldItems[i][0].size = 7;
                    }
                    else if (worldItems[i][1] > 10 && worldItems[i][1] <= 199)
                    {
                        XXX.beginPath();
                        XXX.drawImage(polyPNG, 405, 4, 16, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 16, 17);
                        worldItems[i][0].size = 14;
                    }
                    else if (worldItems[i][1] > 199 && worldItems[i][1] <= 549)
                    {
                        XXX.beginPath();
                        XXX.drawImage(polyPNG, 482, 32, 22, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 22), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22), 22, 22);
                        worldItems[i][0].size = 21;
                    }
                    else if (worldItems[i][1] > 549 && worldItems[i][1] <= 2999)
                    {
                        XXX.beginPath();
                        XXX.drawImage(polyPNG, 418, 21, 27, 29, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 29), 27, 29);
                        worldItems[i][0].size = 28;
                    }
                    else if (worldItems[i][1] > 2999 && worldItems[i][1] < 10000)
                    {
                        XXX.beginPath();
                        XXX.drawImage(polyPNG, 948, 5, 56, 50, X - this.X + (1/2 * CCC.width) - (1/2 * 56), Y - this.Y + (1/2 * CCC.height) - (1/2 * 50), 56, 50);
                        worldItems[i][0].size = 32;
                    }
                    else if (worldItems[i][1] >= 10000  && worldItems[i][1] < 99999)
                    {
                        XXX.beginPath();
                        XXX.drawImage(freeverse, 137, 192, 110, 102, X - this.X + (1/2 * CCC.width) - (1/2 * 110), Y - this.Y + (1/2 * CCC.height) - (1/2 * 102), 110, 102);
                        worldItems[i][0].size = 50;
                    }
                    else if (worldItems[i][1] >= 100000)
                    {
                        XXX.beginPath();
                        XXX.drawImage(freeverse, 270, 200, 110, 102, X - this.X + (1/2 * CCC.width) - (1/2 * 110), Y - this.Y + (1/2 * CCC.height) - (1/2 * 102), 110, 102);
                        worldItems[i][0].size = 75;
                    }
                }
            }
        }
        else if (this.type == "unitMarker")
        {
            XXX.beginPath();
            XXX.fillStyle = "gold";
            XXX.arc(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height), 15, 0, Math.PI * 2);
            XXX.fill();
        }
        else if (this.type == "plantMarker")
        {
            XXX.beginPath();
            XXX.fillStyle = "turquoise";
            XXX.arc(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height), 15, 0, Math.PI * 2);
            XXX.fill();
        }
        else if (this.type == "haeflower")
        {
            XXX.beginPath();
            XXX.drawImage(zapa, 19, 274, 32, 46, X - this.X + (1/2 * CCC.width) - (1/2 * 32 * 0.9), Y - this.Y + (1/2 * CCC.height) - (1/2 * 46 * 0.9), 32 * 0.9, 46 * 0.9);
        }
        else if (this.type == "haeflowerPollen")
        {
            XXX.beginPath();
            XXX.drawImage(zapa, 275, 215, 29, 25, X - this.X + (1/2 * CCC.width) - (1/2 * 29 * 0.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 25 * 0.4), 29 * 0.4, 25 * 0.4);
        }
        else if (this.type == "stone")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1698, 528, 29, 27, X - this.X + (1/2 * CCC.width) - (1/2 * 29), Y - this.Y + (1/2 * CCC.height) - (1/2 * 27), 29, 27);
        }
        else if (this.type == "darkStone")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1666, 466, 25, 24, X - this.X + (1/2 * CCC.width) - (1/2 * 25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 25, 24);
        }
        else if (this.type == "ruby")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1440, 527, 25, 26, X - this.X + (1/2 * CCC.width) - (1/2 * 25 * 0.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 26 * 0.3), 25 * 0.3, 26 * 0.3);
        }
        else if (this.type == "coal")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1531, 529, 29, 27, X - this.X + (1/2 * CCC.width) - (1/2 * 29), Y - this.Y + (1/2 * CCC.height) - (1/2 * 27), 29, 27);
        }
        else if (this.type == "ironOre")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1761, 464, 38, 26, X - this.X + (1/2 * CCC.width) - (1/2 * 38), Y - this.Y + (1/2 * CCC.height) - (1/2 * 26), 38, 26);
        }
        else if (this.type == "rawSilver")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1471, 524, 27, 35, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35), 27, 35);
        }
        else if (this.type == "rawGold")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1211, 522, 27, 35, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35), 27, 35);
        }
        else if (this.type == "silver")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1359, 562, 29, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 29), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 29, 18);
        }
        else if (this.type == "gold")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1323, 562, 29, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 29), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 29, 18);
        }
        else if (this.type == "jvostranOre")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1623, 528, 29, 27, X - this.X + (1/2 * CCC.width) - (1/2 * 29), Y - this.Y + (1/2 * CCC.height) - (1/2 * 27), 29, 27);
        }
        else if (this.type == "pureJvostranOre")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1328, 524, 35, 33, X - this.X + (1/2 * CCC.width) - (1/2 * 35 * 0.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 33 * 0.8), 35 * 0.8, 33 * 0.8);
        }
        else if (this.type == "jvostran")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1285, 563, 30, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 30), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 30, 17);
        }
        else if (this.type == "twiceForgedSteel")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1427, 561, 30, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 30), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20), 30, 20);
        }
        else if (this.type == "thriceForgedSteel")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1393, 561, 30, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 30), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20), 30, 20);
        }
        else if (this.type == "svehnsShipment" || this.type == "svehnsLoot")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 104, 213, 36, 37, X - this.X + (1/2 * CCC.width) - (1/2 * 36 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 37 * 1.4), 36 * 1.4, 37 * 1.4);
        }
        else if (this.type == "svehnsLootEmpty")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 95, 260, 51, 42, X - this.X + (1/2 * CCC.width) - (1/2 * 51 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 42 * 1.4), 51 * 1.4, 42 * 1.4);
        }
        else if (this.type == "cero")
        {
            XXX.beginPath();
            XXX.drawImage(zer0, 344, 8, 20, 50, X - this.X + (1/2 * CCC.width) - (1/2 * 20 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 50 * 1.5), 20 * 1.5, 50 * 1.5);
        }
        else if (this.type == "rawTunskFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 130, 6, 10, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 10 * 1.85), Y - this.Y + (1/2 * CCC.height) - (1/2 * 9 * 1.85), 10 * 1.85, 9 * 1.85);
        }
        else if (this.type == "tunskMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 130, 15, 10, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 10 * 1.85), Y - this.Y + (1/2 * CCC.height) - (1/2 * 9 * 1.85), 10 * 1.85, 9 * 1.85);
        }
        else if (this.type == "anterInnards")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 77, 371, 11, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 1.5), 11 * 1.5, 10 * 1.5);
        }
        else if (this.type == "anterAcid")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 93, 371, 11, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 1.5), 11 * 1.5, 10 * 1.5);
        }
        else if (this.type == "anterShell")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 75, 530, 24, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 24 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 1.6), 24 * 1.6, 16 * 1.6);
        }
        else if (this.type == "anterMandibles")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 77, 548, 20, 24, X - this.X + (1/2 * CCC.width) - (1/2 * 20 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24 * 1.5), 20 * 1.5, 24 * 1.5);
        }
        else if (this.type == "anterShellArmour")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 70, 389, 34, 52, X - this.X + (1/2 * CCC.width) - (1/2 * 34 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 52 * 2), 34 * 2, 52 * 2);
        }
        else if (this.type == "wegRoot")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 255, 58, 14, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19 * 2), 14 * 2, 19 * 2);
        }
        else if (this.type == "roastedWegRoot")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 280, 83, 14, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19 * 2), 14 * 2, 19 * 2);
        }
        else if (this.type == "roastedWegRootChunks")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 278, 60, 17, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12 * 2), 17 * 2, 12 * 2);
        }
        else if (this.type == "palntRoot")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 205, 473, 10, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 10 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15 * 1.4), 10 * 1.4, 15 * 1.4);
        }
        else if (this.type == "boiledPalntRoot")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 206, 478, 9, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 9 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 9 * 1.5), 9 * 1.5, 9 * 1.5);
        }
        else if (this.type == "palntFlower")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 185, 472, 9, 8, X - this.X + (1/2 * CCC.width) - (1/2 * 9 * 1.35), Y - this.Y + (1/2 * CCC.height) - (1/2 * 8 * 1.35), 9 * 1.35, 8 * 1.35);
        }
        else if (this.type == "vardanianClub")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 319, 453, 12, 38, X - this.X + (1/2 * CCC.width) - (1/2 * 12 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 38 * 1.4), 12 * 1.4, 38 * 1.4);
        }
        else if (this.type == "swampWalkerArmour")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 18, 581, 35, 65, X - this.X + (1/2 * CCC.width) - (1/2 * 35 * 1.325), Y - this.Y + (1/2 * CCC.height) - (1/2 * 65 * 1.325), 35 * 1.325, 65 * 1.325);
        }
        else if (this.type == "thenganPlateArmour")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 72, 581, 35, 65, X - this.X + (1/2 * CCC.width) - (1/2 * 35 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 65 * 1.5), 35 * 1.5, 65 * 1.5);
        }
        else if (this.type == "wightbloomBerries")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 197, 528, 18, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 18 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17 * 1.5), 18 * 1.5, 17 * 1.5);
        }
        else if (this.type == "ishBranch")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 865, 550, 18, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 18, 21);
        }
        else if (this.type == "itlinBranch")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 477, 103, 12, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 12 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 2), 12 * 2, 10 * 2);
        }
        else if (this.type == "butterMellowFlower")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 256, 39, 14, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 2), 14 * 2, 16 * 2);
        }
        else if (this.type == "mufBall")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 267, 19, 7, 7, X - this.X + (1/2 * CCC.width) - (1/2 * 7 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 7 * 2), 7 * 2, 7 * 2);
        }
        else if (this.type == "mufFiber")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 335, 23, 15, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 15 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12 * 2), 15 * 2, 12 * 2);
        }
        else if (this.type == "mufCloth")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 315, 10, 11, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13 * 2), 11 * 2, 13 * 2);
        }
        else if (this.type == "tenicFlower")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 295, 23, 14, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14 * 2), 14 * 2, 14 * 2);
        }
        else if (this.type == "tenicLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 279, 24, 14, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14 * 2), 14 * 2, 14 * 2);
        }
        else if (this.type == "tenicPaste")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 302, 24, 4, 6, X - this.X + (1/2 * CCC.width) - (1/2 * 4 * 2.35), Y - this.Y + (1/2 * CCC.height) - (1/2 * 6 * 2.25), 4 * 2.35, 6 * 2.25);
        }
        else if (this.type == "ardilFurClothing")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 49, 299, 30, 42, X - this.X + (1/2 * CCC.width) - (1/2 * 30 * 2.35), Y - this.Y + (1/2 * CCC.height) - (1/2 * 42 * 2.35), 30 * 2.35, 42 * 2.35);
        }
        else if (this.type == "ardilFurSkirt")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 48, 256, 30, 42, X - this.X + (1/2 * CCC.width) - (1/2 * 30 * 2.35), Y - this.Y + (1/2 * CCC.height) - (1/2 * 42 * 2.35), 30 * 2.35, 42 * 2.35);
        }
        else if (this.type == "ardilFurGloves")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 58, 233, 15, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 15 * 2.35), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17 * 2.35), 15 * 2.35, 17 * 2.35);
        }
        else if (this.type == "mofuTribalWear")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 4, 137, 38, 60, X - this.X + (1/2 * CCC.width) - (1/2 * 38 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 60 * 1.6), 38 * 1.6, 60 * 1.6);
        }
        else if (this.type == "mofuRunnerOutfit")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 50, 137, 37, 60, X - this.X + (1/2 * CCC.width) - (1/2 * 37 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 60 * 1.6), 37 * 1.6, 60 * 1.6);
        }
        else if (this.type == "mofuMatriarchHeaddress")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 5, 43, 35, 67, X - this.X + (1/2 * CCC.width) - (1/2 * 35 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 67 * 1.4), 35 * 1.4, 67 * 1.4);
        }
        else if (this.type == "jarOfUlgoyNectar")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 287, 347, 11, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 17.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 17.5, 24);
        }
        else if (this.type == "ulgoyLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 305, 348, 18, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 18 * 1.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14 * 1.25), 18 * 1.25, 14 * 1.25);
        }
        else if (this.type == "mofuFive")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 1, 1, 27, 24, X - this.X + (1/2 * CCC.width) - (1/2 * 27 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24 * 1.2), 27 * 1.2, 24 * 1.2);
        }
        else if (this.type == "theCorpseRing")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 48, 44, 13, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 13 * 1), Y - this.Y + (1/2 * CCC.height) - (1/2 * 9 * 1), 13 * 1, 9 * 1);
        }
        else if (this.type == "ironRing")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 32, 22, 11, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 1), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11 * 1), 11 * 1, 11 * 1);
        }
        else if (this.type == "rawArdilFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 50, 687, 8, 8, X - this.X + (1/2 * CCC.width) - (1/2 * 8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 8), 8, 8);
        }
        else if (this.type == "ardilMeat")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 82, 686, 8, 8, X - this.X + (1/2 * CCC.width) - (1/2 * 8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 8), 8, 8);
        }
        else if (this.type == "ardilPelt")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 928, 701, 29, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 29), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20), 29, 20);
        }
        else if (this.type == "lizardTail")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1544, 29, 10, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 12.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12.5), 12.5, 12.5);
        }
        else if (this.type == "pumpkinDough")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 73, 4, 10, 8, X - this.X + (1/2 * CCC.width) - (1/2 * 10 * 1.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 8 * 1.8), 10 * 1.8, 8 * 1.8);
        }
        else if (this.type == "pumpkinBread")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 56, 29, 16, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 16 * 1.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11 * 1.8), 16 * 1.8, 11 * 1.8);
        }
        else if (this.type == "butteredPumpkinBread")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 70, 2, 19, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 19 * 1.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18 * 1.8), 19 * 1.8, 18 * 1.8);
        }
        else if (this.type == "harstBread")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1395, 12, 15, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 15 * 1.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12 * 1.8), 15 * 1.8, 12 * 1.8);
        }
        else if (this.type == "butteredHarstBread")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1392, 27, 17, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17 * 1.8), 17 * 1.8, 17 * 1.8);
        }
        else if (this.type == "harstDough")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1412, 11, 11, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 1.5), 11 * 1.5, 10 * 1.5);
        }
        else if (this.type == "harstFlour")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1428, 12, 11, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 11), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 11, 15);
        }
        else if (this.type == "bagOfHarstFlour")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1443, 11, 23, 29, X - this.X + (1/2 * CCC.width) - (1/2 * 23), Y - this.Y + (1/2 * CCC.height) - (1/2 * 29), 23, 29);
        }
        else if (this.type == "honey")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 34, 244, 18, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 18, 21);
        }
        else if (this.type == "bee")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 12, 338, 14, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 14), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13), 14, 13);
        }
        else if (this.type == "wyrExtract")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1722, 200, 13, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 13), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 13, 17);
        }
        else if (this.type == "blackBearLeatherArmour")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 689, 2, 29, 46, X - this.X + (1/2 * CCC.width) - (1/2 * 29 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 46 * 2), 29 * 2, 46 * 2);
        }
        else if (this.type == "blackBearFurClothing")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 654, 2, 29, 46, X - this.X + (1/2 * CCC.width) - (1/2 * 29 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 46 * 2), 29 * 2, 46 * 2);
        }
        else if (this.type == "wellAxle")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 233, 350, 20, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 20 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17 * 1.6), 20 * 1.6, 17 * 1.6);
        }
        else if (this.type == "wellCord")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 209, 326, 23, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 23 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22 * 1.6), 23 * 1.6, 22 * 1.6);
        }
        else if (this.type == "wellStone")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 239, 332, 15, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 15 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 1.6), 15 * 1.6, 10 * 1.6);
        }
        else if (this.type == "wellWinch")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 213, 350, 17, 8, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 8 * 1.6), 17 * 1.6, 8 * 1.6);
        }
        else if (this.type == "blunderbuss")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1305, 12, 13, 35, X - this.X + (1/2 * CCC.width) - (1/2 * 13 * 1.65), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35 * 1.65), 13 * 1.65, 35 * 1.65);
        }
        else if (this.type == "musket")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1334, 11, 11, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 1.65), Y - this.Y + (1/2 * CCC.height) - (1/2 * 36 * 1.65), 11 * 1.65, 36 * 1.65);
        }
        else if (this.type == "bullet")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1321, 16, 5, 5, X - this.X + (1/2 * CCC.width) - (1/2 * 8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 8), 8, 8);
        }
        else if (this.type == "blackPowder")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1350, 13, 13, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 13), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11), 13, 11);
        }
        else if (this.type == "cutlass")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1369, 10, 19, 37, X - this.X + (1/2 * CCC.width) - (1/2 * 19 * 1.65), Y - this.Y + (1/2 * CCC.height) - (1/2 * 37 * 1.65), 19 * 1.65, 37 * 1.65);
        }
        else if (this.type == "brokenHyelingCleaver")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 223, 83, 31, 34, X - this.X + (1/2 * CCC.width) - (1/2 * 31 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 34 * 1.6), 31 * 1.6, 34 * 1.6);
        }
        else if (this.type == "hyelingClaws")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 98, 53, 22, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 22 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19 * 1.6), 22 * 1.6, 19 * 1.6);
        }
        else if (this.type == "rawHyelingFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 223, 600, 14, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18 * 1.6), 14 * 1.6, 18 * 1.6);
        }
        else if (this.type == "hyelingMeat")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 241, 601, 14, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18 * 1.6), 14 * 1.6, 18 * 1.6);
        }
        else if (this.type == "hyelingArmour")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 197, 30, 17, 46, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 46 * 2), 17 * 2, 46 * 2);
        }
        else if (this.type == "golgemoffFeelers")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 965, 266, 17, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 17), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 17, 16);
        }
        else if (this.type == "golgemoffMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 983, 264, 17, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 1.4), 17 * 1.4, 16 * 1.4);
        }
        else if (this.type == "rawGolgemoffFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 999, 264, 17, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 1.4), 17 * 1.4, 16 * 1.4);
        }
        else if (this.type == "rawAvrakFlesh" || this.type == "rawEvrakFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 139, 2350, 39, 29, X - this.X + (1/2 * CCC.width) - (1/2 * 39 * 0.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 29 * 0.8), 39 * 0.8, 29 * 0.8);
        }
        else if (this.type == "avrakMeat" || this.type == "evrakMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 141, 2394, 39, 29, X - this.X + (1/2 * CCC.width) - (1/2 * 39 * 0.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 29 * 0.8), 39 * 0.8, 29 * 0.8);
        }
        else if (this.type == "avrakHide")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 142, 2287, 41, 50, X - this.X + (1/2 * CCC.width) - (1/2 * 41 * 0.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 50 * 0.6), 41 * 0.6, 50 * 0.6);
        }
        else if (this.type == "evrakHide")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 62, 2314, 59, 50, X - this.X + (1/2 * CCC.width) - (1/2 * 59 * 0.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 50 * 0.6), 59 * 0.6, 50 * 0.6);
        }
        else if (this.type == "avrakLeatherArmour")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 8, 2091, 66, 83, X - this.X + (1/2 * CCC.width) - (1/2 * 66), Y - this.Y + (1/2 * CCC.height) - (1/2 * 83), 66, 83);
        }
        else if (this.type == "evrakLeatherArmour")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 18, 2002, 47, 80, X - this.X + (1/2 * CCC.width) - (1/2 * 47 * 1.05), Y - this.Y + (1/2 * CCC.height) - (1/2 * 80 * 1.05), 47 * 1.05, 80 * 1.05);
        }
        else if (this.type == "neevFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 148, 67, 21, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 21 * 1.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17 * 1.25), 21 * 1.25, 17 * 1.25);
        }
        else if (this.type == "neevFur")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 176, 64, 35, 25, X - this.X + (1/2 * CCC.width) - (1/2 * 35 * 1.15), Y - this.Y + (1/2 * CCC.height) - (1/2 * 25 * 1.15), 35 * 1.15, 25 * 1.15);
        }
        else if (this.type == "ogardPerfume")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 50, 4, 15, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 15), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19), 15, 19);
        }
        else if (this.type == "driedTechiLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 35, 6, 11, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 11), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 11, 16);
        }
        else if (this.type == "ogard")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 36, 28, 15, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 15 * 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 1.3), 15 * 1.3, 16 * 1.3);
        }
        else if (this.type == "groundOgard")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 37, 47, 16, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14), 16, 14);
        }
        else if (this.type == "ogardPollen")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 57, 50, 9, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 9 * 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 9 * 1.3), 9 * 1.3, 9 * 1.3);
        }
        else if (this.type == "cloth" || this.type == "dyedMufCloth")
        {
            XXX.beginPath();
            XXX.save();
            XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
            XXX.rotate(5/8 * 2 * Math.PI);
            XXX.drawImage(verse, 3955, 309, 29, 10,  - (1/2 * 29 * 1.5), - (1/2 * 10 * 1.5), 29 * 1.5, 10 * 1.5);
            XXX.restore();
        }
        else if (this.type == "culprisBandage")
        {
            XXX.beginPath();
            XXX.save();
            XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
            XXX.rotate(3/8 * 2 * Math.PI);
            XXX.drawImage(verse, 3955, 309, 29, 10,  - (1/2 * 29 / 1.25), - (1/2 * 10 / 1.25), 29 / 1.25, 10 / 1.25);
            XXX.restore();
        }
        else if (this.type == "naapridFiber" || this.type == "varnFiber" || this.type == "evrakFiber" || this.type == "avrakFiber")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 85, 46, 10, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 10 * 1.65), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18 * 1.65), 10 * 1.65, 18 * 1.65);
        }
        else if (this.type == "tent")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 1, 1, 32, 32, X - this.X + (1/2 * CCC.width) - (1/2 * 32 * 1.75), Y - this.Y + (1/2 * CCC.height) - (1/2 * 32 * 1.75), 32 * 1.75, 32 * 1.75);
        }
        else if (this.type == "neculaisEar")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 71, 48, 9, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 9 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12 * 1.2), 9 * 1.2, 12 * 1.2);
        }
        else if (this.type == "natureCall")
        {
            XXX.beginPath();
            XXX.drawImage(horde1, 529, 36, 88, 84, X - this.X + (1/2 * CCC.width) - (1/2 * 88 * 0.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 84 * 0.2), 88 * 0.2, 84 * 0.2);
        }
        else if (this.type == "berulnToothNecklace")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 96, 3, 14, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21 * 1.2), 14 * 1.2, 21 * 1.2);
        }
        else if (this.type == "techiLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 83, 147, 13, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 13), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 13, 15);
        }
        else if (this.type == "bucketOfPluttJuice" || this.type == "bucketOfHotPluttBerryCider" )
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 88, 93, 12, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 12 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13 * 2), 12 * 2, 13 * 2);
        }
        else if (this.type == "pluttJuicePintGlass" || this.type == "pluttCiderPintGlass" )
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 2, 31, 9, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 9 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 9 * 1.5), 9 * 1.5, 9 * 1.5);
        }
        else if (this.type == "glassBottle" || this.type == "glassBottleOfWater" || this.type == "glassBottleOfPluttWine")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 185, 36, 11, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12 * 2), 11 * 2, 12 * 2);
        }
        else if (this.type == "pluttWine")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 46, 196, 11, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11 * 1.5), 11 * 1.5, 11 * 1.5);
        }
        else if (this.type == "bushkaBerries")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 23, 125, 13, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 13), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12), 13, 12);
        }
        else if (this.type == "bushkaLeaves")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 3, 118, 14, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 14), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 14, 15);
        }
        else if (this.type == "beesWax")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 1, 2, 12, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 12 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13 * 1.4), 12 * 1.4, 13 * 1.4);
        }
        else if (this.type == "oilLantern" || this.type == "oilLantern4" || this.type == "oilLantern3" || this.type == "oilLantern2" || this.type == "oilLantern1" || this.type == "oilLanternEmpty")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 26, 109, 16, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 16 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 1.2), 16 * 1.2, 16 * 1.2);
        }
        else if (this.type == "oilLamp" || this.type == "oilLamp2" || this.type == "oilLamp1" || this.type == "oilLampEmpty")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 51, 110, 14, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15 * 1.2), 14 * 1.2, 15 * 1.2);
        }
        else if (this.type == "jackOLantern" || this.type == "jackOLantern2" || this.type == "jackOLantern1" || this.type == "jackOLanternEmpty")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 4, 100, 17, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18 * 1.2), 17 * 1.2, 18 * 1.2);
        }
        else if (this.type == "pumpkin")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 4, 100, 17, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18 * 1.2), 17 * 1.2, 18 * 1.2);
        }
        else if (this.type == "roastedPumpkin")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 85, 44, 15, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 15 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 1.2), 15 * 1.2, 16 * 1.2);
        }
        else if (this.type == "candle")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 14, 1, 11, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 1.2), 11 * 1.2, 16 * 1.2);
        }
        else if (this.type == "candle2")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 25, 1, 12, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 12 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13 * 1.2), 12 * 1.2, 13 * 1.2);
        }
        else if (this.type == "candle1")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 35, 1, 12, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 12 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 1.2), 12 * 1.2, 10 * 1.2);
        }
        else if (this.type == "pluttMoffling")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 1, 211, 18, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 18 * 0.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15 * 0.8), 18 * 0.8, 15 * 0.8);
        }
        else if (this.type == "akerMoffling")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 22, 211, 18, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 18 * 0.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15 * 0.8), 18 * 0.8, 15 * 0.8);
        }
        else if (this.type == "rawMofflingFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 86, 110, 17, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 0.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14 * 0.8), 17 * 0.8, 14 * 0.8);
        }
        else if (this.type == "mofflingMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 104, 111, 17, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 0.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14 * 0.8), 17 * 0.8, 14 * 0.8);
        }
        else if (this.type == "rawMofuFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 86, 110, 17, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14 * 1.2), 17 * 1.2, 14 * 1.2);
        }
        else if (this.type == "mofuMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 104, 111, 17, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14 * 1.2), 17 * 1.2, 14 * 1.2);
        }
        else if (this.type == "rawLargeMofuFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 86, 110, 17, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 2.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14 * 2.3), 17 * 2.3, 14 * 2.3);
        }
        else if (this.type == "largeMofuMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 104, 111, 17, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 2.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14 * 2.3), 17 * 2.3, 14 * 2.3);
        }
        else if (this.type == "fattyMofuLiver")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 114, 67, 9, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 9 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 9 * 2), 9 * 2, 9 * 2);
        }
        else if (this.type == "mofuFeather")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 139, 54, 11, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 11), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13), 11, 13);
        }
        else if (this.type == "mofuFoot")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 122, 56, 11, 7, X - this.X + (1/2 * CCC.width) - (1/2 * 11), Y - this.Y + (1/2 * CCC.height) - (1/2 * 7), 11, 7);
        }
        else if (this.type == "mofuEgg")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 109, 54, 8, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11), 8, 11);
        }
        else if (this.type == "cookedMofuEgg")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 96, 54, 11, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 11), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10), 11, 10);
        }
        else if (this.type == "fermentedMofuEgg")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 96, 45, 11, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 11), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10), 11, 10);
        }
        else if (this.type == "rawGrushFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1208, 27, 14, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 14), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 14, 16);
        }
        else if (this.type == "grushMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1207, 43, 14, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 14), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 14, 16);
        }
        else if (this.type == "grushFur")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1204, 7, 18, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 18, 16);
        }
        else if (this.type == "grushFurClothing")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1249, 69, 31, 52, X - this.X + (1/2 * CCC.width) - (1/2 * 31 * 1.9), Y - this.Y + (1/2 * CCC.height) - (1/2 * 52 * 1.9), 31 * 1.9, 52 * 1.9);
        }
        else if (this.type == "iron")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1212, 561, 28, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 28), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 28, 18);
        }
        else if (this.type == "steel")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1461, 563, 28, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 28), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 28, 15);
        }
        else if (this.type == "santhGrain")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2943, 205, 19, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 19), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19), 19, 19);
        }
        else if (this.type == "santhFlour")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2977, 204, 19, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 19), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19), 19, 19);
        }
        else if (this.type == "emptyBagSanth" || this.type == "emptyBagHarst")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 3016, 201, 22, 28, X - this.X + (1/2 * CCC.width) - (1/2 * 22), Y - this.Y + (1/2 * CCC.height) - (1/2 * 28), 22, 28);
        }
        else if (this.type == "bagOfSanthFlour")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 3050, 200, 22, 28, X - this.X + (1/2 * CCC.width) - (1/2 * 22), Y - this.Y + (1/2 * CCC.height) - (1/2 * 28), 22, 28);
        }
        else if (this.type == "kellishSanthDough")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2940, 230, 17, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 2.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14 * 2.6), 17 * 2.6, 14 * 2.6);
        }
        else if (this.type == "naapridButter")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2940, 230, 17, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 17), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14), 17, 14);
        }
        else if (this.type == "santhBread")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2970, 225, 23, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 23), Y - this.Y + (1/2 * CCC.height) - (1/2 * 23), 23, 23);
        }
        else if (this.type == "butteredSanthBread")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2965, 250, 32, 26, X - this.X + (1/2 * CCC.width) - (1/2 * 32), Y - this.Y + (1/2 * CCC.height) - (1/2 * 26), 32, 26);
        }
        else if (this.type == "healingSalve")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2943, 252, 11, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17 * 1.5), 11 * 1.5, 17 * 1.5);
        }
        else if (this.type == "carrot")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2864, 68, 18, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19), 18, 19);
        }
        else if (this.type == "suuliMelon")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2940, 67, 16, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22), 16, 22);
        }
        else if (this.type == "suuliMelonSlice")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2963, 68, 16, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 14), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20), 14, 20);
        }
        else if (this.type == "potato")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2770, 1, 10, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 10, 16);
        }
        else if (this.type == "cookedPotato")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2782, 1, 10, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 10, 16);
        }
        else if (this.type == "nechromanticDust")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 477, 922, 72, 66, X - this.X + (1/2 * CCC.width) - (1/2 * 72 * 0.35), Y - this.Y + (1/2 * CCC.height) - (1/2 * 66 * 0.35), 72 * 0.35, 66 * 0.35);
        }
        else if (this.type == "clay")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 1, 4, 11, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 2), 11 * 2, 10 * 2);
        }
        else if (this.type == "kellishClayPot")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3036, 1, 22, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 22 * 1.7), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19 * 1.7), 22 * 1.7, 19 * 1.7);
        }
        else if (this.type == "kellishClayPotOfNaapridMilk" || this.type == "kellishClayPotOfWaantiMilk")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3017, 1, 20, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 20 * 1.7), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18 * 1.7), 20 * 1.7, 18 * 1.7);
        }
        else if (this.type == "kellishClayPotOfWater")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 359, 37, 18, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 18 * 1.7), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20 * 1.7), 18 * 1.7, 20 * 1.7);
        }
        else if (this.type == "kellishClayPotOfMushroomStew")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 408, 25, 18, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 18 * 1.7), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20 * 1.7), 18 * 1.7, 20 * 1.7);
        }
        else if (this.type == "rawViperFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 529, 64, 13, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 13 * 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12 * 1.3), 13 * 1.3, 12 * 1.3);
        }
        else if (this.type == "viperMeat")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 543, 63, 13, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 13 * 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12 * 1.3), 13 * 1.3, 12 * 1.3);
        }
        else if (this.type == "viperVenomGland")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 529, 78, 10, 7, X - this.X + (1/2 * CCC.width) - (1/2 * 10 * 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 7 * 1.3), 10 * 1.3, 7 * 1.3);
        }
        else if (this.type == "fermentedViperVenomGland")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 544, 77, 12, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 12 * 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 9 * 1.3), 12 * 1.3, 9 * 1.3);
        }
        else if (this.type == "viperSnakeSkin")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 530, 52, 28, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 28 * 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 1.3), 28 * 1.3, 10 * 1.3);
        }
        else if (this.type == "rasper")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 651, 45, 21, 45, X - this.X + (1/2 * CCC.width) - (1/2 * 21 * 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 45 * 1.3), 21 * 1.3, 45 * 1.3);
        }
        else if (this.type == "jvostranPlateArmour")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 350, 660, 66, 106, X - this.X + (1/2 * CCC.width) - (1/2 * 66), Y - this.Y + (1/2 * CCC.height) - (1/2 * 106), 66, 106);
        }
        else if (this.type == "waterPintGlass")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 204, 17, 11, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 11 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 1.5), 11 * 1.5, 10 * 1.5);
        }
        else if (this.type == "harstGrain")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 241, 45, 12, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 12), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13), 12, 13);
        }
        else if (this.type == "harstAle")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 247, 17, 10, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 10 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 1.5), 10 * 1.5, 10 * 1.5);
        }
        else if (this.type == "techiTea")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 21, 48, 13, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 13 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13 * 1.5), 13 * 1.5, 13 * 1.5);
        }
        else if (this.type == "pintGlass")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 149, 19, 10, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 10 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10 * 1.5), 10 * 1.5, 10 * 1.5);
        }
        else if (this.type == "energilPotionI" || this.type == "energilPotionII" || this.type == "energilPotionIII" || this.type == "energilPotionIV" || this.type == "energilPotionV")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1700, 180, 12, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 12), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19), 12, 19);
        }
        else if (this.type == "mindPotionI" || this.type == "mindPotionII" || this.type == "mindPotionIII" || this.type == "mindPotionIV" || this.type == "mindPotionV")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 431, 945, 10, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 10, 17);
        }
        else if (this.type == "utExtract")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 431, 972, 10, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 10, 17);
        }
        else if (this.type == "potionGlass")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 419, 1, 10, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 10, 17);
        }
        else if (this.type == "vialOfWater")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 406, 1, 10, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 10, 16);
        }
        else if (this.type == "walrusLeatherWaterskin" || this.type == "walrusLeatherWaterskinOne" || this.type == "walrusLeatherWaterskinTwo" || this.type == "walrusLeatherWaterskinFull")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 79, 5, 19, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 19 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13 * 1.5), 19 * 1.5, 13 * 1.5);
        }
        else if (this.type == "bucket")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 101, 27, 14, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15 * 2), 14 * 2, 15 * 2);
        }
        else if (this.type == "bucketOfWater")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 133, 27, 14, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15 * 2), 14 * 2, 15 * 2);
        }
        else if (this.type == "bucketOfTechiTea")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 2, 61, 17, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17 * 2), 17 * 2, 17 * 2);
        }
        else if (this.type == "bucketOfNaapridMilk" || this.type == "bucketOfWaantiMilk")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 118, 27, 14, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15 * 2), 14 * 2, 15 * 2);
        }
        else if (this.type == "halcifMushroom")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 33, 62, 13, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 13), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 13, 15);
        }
        else if (this.type == "cyrinthilimMushroom")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 53, 27, 10, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 14), 10, 14);
        }
        else if (this.type == "glinMushrooms")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 5, 1, 18, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 18, 18);
        }
        else if (this.type == "tepprekliaFungus")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 3011, 70, 14, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 14), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 14, 16);
        }
        else if (this.type == "driedCyrinthilimMushroom")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 52, 45, 12, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 12), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11), 12, 11);
        }
        else if (this.type == "boiledGlinMushrooms")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 56, 1, 18, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 18, 18);
        }
        else if (this.type == "tylunFlower")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2155, 64, 28, 33, X - this.X + (1/2 * CCC.width) - (1/2 * 28), Y - this.Y + (1/2 * CCC.height) - (1/2 * 33), 28, 33);
        }
        else if (this.type == "stomwikLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2171, 44, 21, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 21), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 21, 16);
        }
        else if (this.type == "culprisLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2154, 160, 20, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13), 20, 13);
        }
        else if (this.type == "neprilneBerries")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2148, 516, 15, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 15), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 15, 16);
        }
        else if (this.type == "pluttBerries")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2111, 32, 19, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 19), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19), 19, 19);
        }
        else if (this.type == "driedPluttBerries")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 104, 47, 17, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 17), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19), 17, 19);
        }
        else if (this.type == "akerBerries")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2170, 20, 22, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 22), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19), 22, 19);
        }
        else if (this.type == "bequonFruit")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2990, 70, 17, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 17), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 17, 17);
        }
        else if (this.type == "luufBerries")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 367, 21, 10, 10, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10), 10, 10);
        }
        else if (this.type == "wyrLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 395, 167, 13, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 13 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11 * 1.5), 13 * 1.5, 11 * 1.5);
        }
        else if (this.type == "kellishSawClub")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 645, 466, 17, 55, X - this.X + (1/2 * CCC.width) - (1/2 * 17), Y - this.Y + (1/2 * CCC.height) - (1/2 * 55), 17, 55);
        }
        else if (this.type == "kellishClaymore")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 600, 435, 22, 112, X - this.X + (1/2 * CCC.width) - (1/2 * 22), Y - this.Y + (1/2 * CCC.height) - (1/2 * 112), 22, 112);
        }
        else if (this.type == "gribPelt")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1095, 155, 31, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 31 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19 * 1.2), 31 * 1.2, 19 * 1.2);
        }
        else if (this.type == "rawGribFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1393, 196, 20, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22), 20, 22);
        }
        else if (this.type == "gribMeat")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1371, 197, 20, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22), 20, 22);
        }
        else if (this.type == "hammer")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 512, 514, 36, 49, X - this.X + (1/2 * CCC.width) - (1/2 * 36 / 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 49 / 1.3), 36 / 1.3, 49 / 1.3);
        }
        else if (this.type == "warHammer")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 535, 411, 40, 72, X - this.X + (1/2 * CCC.width) - (1/2 * 40 / 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 72 / 1.3), 40 / 1.3, 72 / 1.3);
        }
        else if (this.type == "iceClaymore" || this.type == "leechingTouch")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1859, 36, 22, 27, X - this.X + (1/2 * CCC.width) - (1/2 * 22), Y - this.Y + (1/2 * CCC.height) - (1/2 * 27), 22, 27);
        }
        else if (this.type == "narthwarpMouth")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1901, 74, 30, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 30), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 30, 18);
        }
        else if (this.type == "lrgNarthwarpMouth")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1901, 74, 30, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 30 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18 * 2), 30 * 2, 18 * 2);
        }
        else if (this.type == "fermentedNarthwarpMouth")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1844, 64, 37, 32, X - this.X + (1/2 * CCC.width) - (1/2 * 37), Y - this.Y + (1/2 * CCC.height) - (1/2 * 32), 37, 32);
        }
        else if (this.type == "embers" || this.type == "fireballI" || this.type == "flyingColours" || this.type == "iceSpikes" || this.type == "drainingI" || this.type == "fireHands" || this.type == "sorcerer'sRaincoat" || this.type == "summonWolf")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1967, 67, 33, 26, X - this.X + (1/2 * CCC.width) - (1/2 * 33), Y - this.Y + (1/2 * CCC.height) - (1/2 * 26), 33, 26);
        }
        else if (this.type == "repel" || this.type == "lifeTap" || this.type == "electricBolt" || this.type == "chargedTouch" || this.type == "shieldingIII" || this.type == "shieldingIV" || this.type == "summonFrich")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1922, 4, 23, 32, X - this.X + (1/2 * CCC.width) - (1/2 * 23), Y - this.Y + (1/2 * CCC.height) - (1/2 * 32), 23, 32);
        }
        else if (this.type == "repellingWard")
        {
            XXX.beginPath();
            XXX.drawImage(zapa, 414, 461, 24, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 24 * 1.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17 * 1.25), 24 * 1.25, 17 * 1.25);
        }
        else if (this.type == "sanctuary")
        {
            XXX.beginPath();
            XXX.drawImage(zapa, 521, 447, 30, 29, X - this.X + (1/2 * CCC.width) - (1/2 * 30 * 1.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 29 * 1.25), 30 * 1.25, 29 * 1.25);
        }
        else if (this.type == "vivification" || this.type == "freezingGrasp" || this.type == "shieldingV" || this.type == "charm")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1928, 39, 40, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 40), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 40, 21);
        }
        else if (this.type == "frostWind" || this.type == "chasingLights" || this.type == "surge" || this.type == "shieldingI" || this.type == "shieldingII")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1773, 3, 28, 30, X - this.X + (1/2 * CCC.width) - (1/2 * 28), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30), 28, 30);
        }
        else if (this.type == "rawBearFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 731, 9, 25, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 25 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 1.6), 25 * 1.6, 16 * 1.6);
        }
        else if (this.type == "bearMeat")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 731, 27, 25, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 25 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 1.6), 25 * 1.6, 16 * 1.6);
        }
        else if (this.type == "rawBearTongue")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 757, 12, 17, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.35), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13 * 1.35), 17 * 1.35, 13 * 1.35);
        }
        else if (this.type == "bearTongue")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 757, 29, 17, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.35), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13 * 1.35), 17 * 1.35, 13 * 1.35);
        }
        else if (this.type == "smlBlackBearPelt")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 558, 18, 53, 30, X - this.X + (1/2 * CCC.width) - (1/2 * 53), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30), 53, 30);
        }
        else if (this.type == "medBlackBearPelt")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 558, 18, 53, 30, X - this.X + (1/2 * CCC.width) - (1/2 * 53 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30 * 1.4), 53 * 1.4, 30 * 1.4);
        }
        else if (this.type == "lrgBlackBearPelt")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 558, 18, 53, 30, X - this.X + (1/2 * CCC.width) - (1/2 * 53 * 3.35), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30 * 3.35), 53 * 3.35, 30 * 3.35);
        }
        else if (this.type == "vardanianHeavyCleaver")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 779, 1, 17, 68, X - this.X + (1/2 * CCC.width) - (1/2 * 17 * 1.1), Y - this.Y + (1/2 * CCC.height) - (1/2 * 68 * 1.1), 17 * 1.1, 68 * 1.1);
        }
        else if (this.type == "smlGlutidOoze")
        {
            var sizeMult = 1;
            if (Y > 6290 || Y > -3919 && currentSeason == "Frost")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 313, 268, 40, 37, X - this.X + (1/2 * CCC.width) - (1/2 * 40 * sizeMult), Y - this.Y + (1/2 * CCC.height) - (1/2 * 37 * sizeMult), 40 * sizeMult, 37 * sizeMult);
            }
            else
            {
                this.flashAnimate(100 + 100 * Math.random(), 0, 1, [{image: theCrack, imgX: 313, imgY: 268, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}, {image: theCrack, imgX: 250, imgY: 266, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}, {image: theCrack, imgX: 187, imgY: 270, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}, {image: theCrack, imgX: 123, imgY: 268, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}]);
            }
        }
        else if (this.type == "medGlutidOoze")
        {
            var sizeMult = 1.5;
            if (Y > 6290 || Y > -3919 && currentSeason == "Frost")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 313, 268, 40, 37, X - this.X + (1/2 * CCC.width) - (1/2 * 40 * sizeMult), Y - this.Y + (1/2 * CCC.height) - (1/2 * 37 * sizeMult), 40 * sizeMult, 37 * sizeMult);
            }
            else
            {
                this.flashAnimate(100 + 100 * Math.random(), 0, 1, [{image: theCrack, imgX: 313, imgY: 268, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}, {image: theCrack, imgX: 250, imgY: 266, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}, {image: theCrack, imgX: 187, imgY: 270, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}, {image: theCrack, imgX: 123, imgY: 268, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}]);
            }
        }
        else if (this.type == "lrgGlutidOoze")
        {
            var sizeMult = 2;
            if (Y > 6290 || Y > -3919 && currentSeason == "Frost")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 313, 268, 40, 37, X - this.X + (1/2 * CCC.width) - (1/2 * 40 * sizeMult), Y - this.Y + (1/2 * CCC.height) - (1/2 * 37 * sizeMult), 40 * sizeMult, 37 * sizeMult);
            }
            else
            {
                this.flashAnimate(100 + 100 * Math.random(), 0, 1, [{image: theCrack, imgX: 313, imgY: 268, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}, {image: theCrack, imgX: 250, imgY: 266, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}, {image: theCrack, imgX: 187, imgY: 270, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}, {image: theCrack, imgX: 123, imgY: 268, portionW: 40, portionH: 37, adjX: - (1/2 * 40 * sizeMult), adjY: - (1/2 * 37 * sizeMult), width: 40 * sizeMult, height: 37 * sizeMult}]);
            }
        }
        else if (this.type == "smlOolidOozeRemains")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 94, 171, 37, 35, X - this.X + (1/2 * CCC.width) - (1/2 * 37), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35), 37, 35);
        }
        else if (this.type == "medOolidOozeRemains")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 94, 171, 37, 35, X - this.X + (1/2 * CCC.width) - (1/2 * 37 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35 * 1.5), 37 * 1.5, 35 * 1.5);
        }
        else if (this.type == "lrgOolidOozeRemains")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 94, 171, 37, 35, X - this.X + (1/2 * CCC.width) - (1/2 * 37 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35 * 2), 37 * 2, 35 * 2);
        }
        else if (this.type == "shehidOozeSml")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1329, 19, 21, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 21), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22), 21, 22);
        }
        else if (this.type == "shehidOozeLrg")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1329, 19, 21, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 21 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22 * 2), 21 * 2, 22 * 2);
        }
        else if (this.type == "shehidShellSml")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1358, 19, 25, 24, X - this.X + (1/2 * CCC.width) - (1/2 * 25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 25, 24);
        }
        else if (this.type == "shehidShellLrg")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1358, 19, 25, 24, X - this.X + (1/2 * CCC.width) - (1/2 * 25 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24 * 2), 25 * 2, 24 * 2);
        }
        else if (this.type == "timberAxe")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 294, 330, 29, 45, X - this.X + (1/2 * CCC.width) - (1/2 * 29 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 45 * 1.4), 29 * 1.4, 45 * 1.4);
        }
        else if (this.type == "curvedDagger")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3538, 605, 10, 30, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30), 10, 30);
        }
        else if (this.type == "dualCurvedDaggers")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3552, 605, 16, 30, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30), 16, 30);
        }
        else if (this.type == "nirineseSpear")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 8, 1511, 13, 79, X - this.X + (1/2 * CCC.width) - (1/2 * 15.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 94.8), 15.6, 94.8);
        }
        else if (this.type == "crossbow")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3169, 118, 36, 34, X - this.X + (1/2 * CCC.width) - (1/2 * 37.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35.7), 37.8, 35.7);
        }
        else if (this.type == "steelBolt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3152, 1, 19, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 22.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 25.2), 22.8, 25.2);
        }
        else if (this.type == "varnFurDress")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 51, 387, 39, 52, X - this.X + (1/2 * CCC.width) - (1/2 * 60.45), Y - this.Y + (1/2 * CCC.height) - (1/2 * 80.6), 62.4, 83.2);
        }
        else if (this.type == "varnFurCloak")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 46, 439, 50, 61, X - this.X + (1/2 * CCC.width) - (1/2 * 77.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 92.55), 77.5, 92.55);
        }
        else if (this.type == "varnFurClothing")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 91, 380, 50, 61, X - this.X + (1/2 * CCC.width) - (1/2 * 80), Y - this.Y + (1/2 * CCC.height) - (1/2 * 95.6), 80, 95.6);
        }
        else if (this.type == "waantiFurOutfit")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 216, 457, 43, 65, X - this.X + (1/2 * CCC.width) - (1/2 * 43 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 65 * 1.5), 43 * 1.5, 65 * 1.5);
        }
        else if (this.type == "frichFurMittens")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 386, 21, 19, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 19 * 1.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11 * 1.2), 19 * 1.2, 11 * 1.2);
        }
        else if (this.type == "frichFurClothing")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 258, 316, 37, 60, X - this.X + (1/2 * CCC.width) - (1/2 * 59.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 96), 59.2, 96);
        }
        else if (this.type == "hetmerArmour")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 150, 309, 52, 66, X - this.X + (1/2 * CCC.width) - (1/2 * 72.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 92.4), 72.8, 92.4);
        }
        else if (this.type == "vardanianBattleAxe")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 374, 354, 29, 57, X - this.X + (1/2 * CCC.width) - (1/2 * 37.7), Y - this.Y + (1/2 * CCC.height) - (1/2 * 74.1), 37.7, 74.1);
        }
        else if (this.type == "dualVardanianBattleAxe")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 135, 682, 58, 64, X - this.X + (1/2 * CCC.width) - (1/2 * 58 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 64 * 1.4), 58 * 1.4, 64 * 1.4);
        }
        else if (this.type == "rawOlkrinFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3143, 290, 31, 29, X - this.X + (1/2 * CCC.width) - (1/2 * 46.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 43.5), 46.5, 43.5);
        }
        else if (this.type == "olkrinMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3114, 290, 31, 29, X - this.X + (1/2 * CCC.width) - (1/2 * 46.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 43.5), 46.5, 43.5);
        }
        else if (this.type == "olkrinSkull")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3033, 290, 49, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 73.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 54), 73.5, 54);
        }
        else if (this.type == "olkrinHorn")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3087, 287, 26, 34, X - this.X + (1/2 * CCC.width) - (1/2 * 52), Y - this.Y + (1/2 * CCC.height) - (1/2 * 68), 52, 68);
        }
        else if (this.type == "goliathOlkrinSkull")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3033, 290, 49, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 98), Y - this.Y + (1/2 * CCC.height) - (1/2 * 72), 98, 72);
        }
        else if (this.type == "olkrinArm")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3175, 287, 67, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 107.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 71.4), 107.2, 71.4);
        }
        else if (this.type == "olkrinMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3114, 290, 31, 29, X - this.X + (1/2 * CCC.width) - (1/2 * 46.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 43.5), 46.5, 43.5);
        }
        else if (this.type == "vardanianCleaver")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 250, 359, 14, 54, X - this.X + (1/2 * CCC.width) - (1/2 * 17.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 67.5), 17.5, 67.5);
        }
        else if (this.type == "hyelingCleaver")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 134, 3, 29, 33, X - this.X + (1/2 * CCC.width) - (1/2 * 29 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 33 * 1.6), 29 * 1.6, 33 * 1.6);
        }
        else if (this.type == "rawVarnFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3099, 1, 18, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22.5), 27, 22.5);
        }
        else if (this.type == "varnMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3115, 1, 18, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22.5), 27, 22.5);
        }
        else if (this.type == "varnPelt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2994, 291, 27, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 40.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22.5), 40.5, 22.5);
        }
        else if (this.type == "fireStarter")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2922, 136, 14, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 21), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16.5), 21, 16.5);
        }
        else if (this.type == "wood")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2917, 174, 23, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 34.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 34.5), 34.5, 34.5);
            XXX.drawImage(verse, 2917, 174, 23, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 34.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 34.5), 34.5, 34.5);
        }
        else if (this.type == "katana")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 168, 364, 16, 55, X - this.X + (1/2 * CCC.width) - (1/2 * 25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 81), 25, 81);
        }
        else if (this.type == "winterWolfOutfit")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3126, 156, 40, 50, X - this.X + (1/2 * CCC.width) - (1/2 * 72), Y - this.Y + (1/2 * CCC.height) - (1/2 * 90), 72, 90);
        }
        else if (this.type == "winterWolfClothing")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3223, 157, 40, 50, X - this.X + (1/2 * CCC.width) - (1/2 * 68), Y - this.Y + (1/2 * CCC.height) - (1/2 * 85), 72, 90);
        }
        else if (this.type == "freydicRoyalOutfit")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2959, 151, 41, 60, X - this.X + (1/2 * CCC.width) - (1/2 * 74.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 108), 74.2, 108);
        }
        else if (this.type == "fineFreydicOutfitF")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 294, 298, 42, 65, X - this.X + (1/2 * CCC.width) - (1/2 * 42 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 65 * 1.6), 42 * 1.6, 65 * 1.6);
        }
        else if (this.type == "fineFreydicOutfitM")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 286, 527, 41, 77, X - this.X + (1/2 * CCC.width) - (1/2 * 41 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 77 * 1.5), 41 * 1.5, 77 * 1.5);
        }
        else if (this.type == "naapridLeatherArmour")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3171, 59, 34, 57, X - this.X + (1/2 * CCC.width) - (1/2 * 61.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 101.6), 61.2, 101.6);
        }
        else if (this.type == "freydicRoyalDress")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3049, 148, 30, 47, X - this.X + (1/2 * CCC.width) - (1/2 * 57), Y - this.Y + (1/2 * CCC.height) - (1/2 * 87.3), 57, 87.3);
        }
        else if (this.type == "winterWolfDress")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3012, 147, 30, 47, X - this.X + (1/2 * CCC.width) - (1/2 * 57), Y - this.Y + (1/2 * CCC.height) - (1/2 * 87.3), 57, 87.3);
        }
        else if (this.type == "rawYoungNaapridFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3133, 10, 15, 9.5, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17.1), 27, 17.1);
        }
        else if (this.type == "youngNaapridMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3133, 1, 15, 9.5, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17.1), 27, 17.1);
        }
        else if (this.type == "rawNaapridFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2970, 1, 22, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 38.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35), 38.5, 35);
        }
        else if (this.type == "naapridMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2995, 1, 22, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 38.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35), 38.5, 35);
        }
        else if (this.type == "naapridPelt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2924, 1, 26, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 65), Y - this.Y + (1/2 * CCC.height) - (1/2 * 40), 65, 40);
        }
        else if (this.type == "naapridHorn")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2951, 1, 15, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 31.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 29.4), 31.5, 29.4);
        }
        else if (this.type == "thenganSwordAndShield")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3515, 140, 48, 40, X - this.X + (1/2 * CCC.width) - (1/2 * 61.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 48), 61.2, 48);
        }
        else if (this.type == "rawTrollsBlood")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 452, 33, 8, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 12), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 12, 21);
        }
        else if (this.type == "jarOfOil")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 97, 3, 10, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 15), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21.5), 15, 21.5);
        }
        else if (this.type == "glassJar")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 465, 33, 8, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 12), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 12, 21);
        }
        else if (this.type == "chainArmour")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 38, 310, 40, 61, X - this.X + (1/2 * CCC.width) - (1/2 * 60), Y - this.Y + (1/2 * CCC.height) - (1/2 * 91.5), 60, 91.5);
        }
        else if (this.type == "blackChainArmour")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 80, 310, 40, 61, X - this.X + (1/2 * CCC.width) - (1/2 * 60), Y - this.Y + (1/2 * CCC.height) - (1/2 * 91.5), 60, 91.5);
        }
        else if (this.type == "freydicGreatSword")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 126, 302, 16, 70, X - this.X + (1/2 * CCC.width) - (1/2 * 19.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 84), 19.2, 84);
        }
        else if (this.type == "theNorthernGem")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 257, 436, 24, 73, X - this.X + (1/2 * CCC.width) - (1/2 * 24 * 1.35), Y - this.Y + (1/2 * CCC.height) - (1/2 * 73 * 1.35), 24 * 1.35, 73 * 1.35);
        }
        else if (this.type == "hugeBogTrollSkull")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 63, 264, 45, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 67.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 54), 67.5, 54);
        }
        else if (this.type == "bogTrollSkull")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 63, 264, 45, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 45), Y - this.Y + (1/2 * CCC.height) - (1/2 * 36), 49.5, 39.6);
        }
        else if (this.type == "babyBogTrollSkull")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 63, 264, 45, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 22.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 22.5, 18);
        }
        else if (this.type == "trollFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2875, 1, 19, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 38), Y - this.Y + (1/2 * CCC.height) - (1/2 * 36), 38, 36);
        }
        else if (this.type == "trollMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2900, 1, 19, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 38), Y - this.Y + (1/2 * CCC.height) - (1/2 * 36), 38, 36);
        }
        else if (this.type == "aldrekiiArrow")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2832, 3, 41, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 32), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12), 32, 12);
        }
        else if (this.type == "rawWolfLiver")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2769, 2, 10, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 10, 15);
        }
        else if (this.type == "wolfLiver")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2782, 2, 10, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 10, 15);
        }
        else if (this.type == "winterWolfMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2812, 1, 14, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 21), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 21, 24);
        }
        else if (this.type == "rawWinterWolfFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2794, 1, 14, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 21), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 21, 24);
        }
        else if (this.type == "winterWolfPelt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2737, 2, 29, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 52.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 28.8), 52.2, 28.8);
        }
        else if (this.type == "massiveWinterWolfPelt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2737, 2, 29, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 92.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 51.2), 92.8, 51.2);
        }
        else if (this.type == "greyWolfMeat")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2812, 1, 14, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 21), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 21, 24);
        }
        else if (this.type == "rawGreyWolfFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2794, 1, 14, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 21), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 21, 24);
        }
        else if (this.type == "greyWolfPelt")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2737, 2, 29, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 52.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 28.8), 52.2, 28.8);
        }
        else if (this.type == "massiveGreyWolfPelt")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2737, 2, 29, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 92.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 51.2), 92.8, 51.2);
        }
        else if (this.type == "energyPotionI")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 38, 267, 10, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 10, 17);
        }
        else if (this.type == "speedPotionI")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 86, 134, 10, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 10, 17);
        }
        else if (this.type == "cleansingPotion")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 35, 134, 11, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 11), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19), 11, 19);
        }
        else if (this.type == "freydicSword")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2089, 2, 13, 46, X - this.X + (1/2 * CCC.width) - (1/2 * 16.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 57.5), 16.25, 57.5);
        }
        else if (this.type == "kellishSword")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 70, 1, 15, 49, X - this.X + (1/2 * CCC.width) - (1/2 * 15 * 1.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 49 * 1.3), 15 * 1.3, 49 * 1.3);
        }
        else if (this.type == "pickaxe")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 103, 233, 22, 26, X - this.X + (1/2 * CCC.width) - (1/2 * 33), Y - this.Y + (1/2 * CCC.height) - (1/2 * 39), 33, 39);
        }
        else if (this.type == "aldrekiiBlade")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2057, 4, 20, 45, X - this.X + (1/2 * CCC.width) - (1/2 * 24), Y - this.Y + (1/2 * CCC.height) - (1/2 * 54), 24, 54);
        }
        else if (this.type == "aldrekiiClaws")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 268, 214, 22, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 22 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 23 * 2), 22 * 2, 23 * 2);
        }
        else if (this.type == "flail")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1995, 1, 37, 33, X - this.X + (1/2 * CCC.width) - (1/2 * 55.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 49.5), 55.5, 49.5);
        }
        else if (this.type == "torperVenomSac")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 40, 226, 17, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 17), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 17, 16);
        }
        else if (this.type == "torperFuzz")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1867, 9, 23, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 23), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20), 23, 20);
        }
        else if (this.type == "rawTorperFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1894, 3, 18, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11), 18, 11);
        }
        else if (this.type == "torperMeat")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1895, 16, 18, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11), 18, 11);
        }
        else if (this.type == "gulfreyShellArmour")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1, 157, 36, 63, X - this.X + (1/2 * CCC.width) - (1/2 * 36), Y - this.Y + (1/2 * CCC.height) - (1/2 * 63), 49.4, 90.6);
        }
        else if (this.type == "grewbleEgg")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 9, 29, 12, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 12 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12 * 2), 12 * 2, 12 * 2);
        }
        else if (this.type == "grewbleGuts")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 30, 1, 21, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 21), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 21, 16);
        }
        else if (this.type == "lorkWeed")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 106, 173, 20, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 20 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17 * 2), 20 * 2, 17 * 2);
        }
        else if (this.type == "sesreStamen")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 263, 110, 10, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 10 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16 * 2), 10 * 2, 16 * 2);
        }
        else if (this.type == "sesreLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 282, 113, 15, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 15 * 2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13 * 2), 15 * 2, 13 * 2);
        }
        else if (this.type == "frichPelt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 1832, 10, 31, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 31), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 31, 18);
        }
        else if (this.type == "mountainFrichPelt")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1832, 10, 31, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 31 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18 * 1.5), 31 * 1.5, 18 * 1.5);
        }
        else if (this.type == "rawFrichFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 65, 226, 10, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 20, 24);
        }
        else if (this.type == "frichMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 79, 227, 10, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 20, 24);
        }
        else if (this.type == "waantiPelt")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 155, 62, 20, 27, X - this.X + (1/2 * CCC.width) - (1/2 * 20 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 27 * 1.6), 20 * 1.6, 27 * 1.6);
        }
        else if (this.type == "rawWaantiFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 128, 95, 14, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19 * 1.6), 14 * 1.6, 19 * 1.6);
        }
        else if (this.type == "waantiMeat")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 109, 95, 14, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 14 * 1.6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19 * 1.6), 14 * 1.6, 19 * 1.6);
        }
        else if (this.type == "rawUtFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 233, 960, 29, 24, X - this.X + (1/2 * CCC.width) - (1/2 * 29 * 1.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24 * 1.25), 29 * 1.25, 24 * 1.25);
        }
        else if (this.type == "utMeat")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 277, 962, 29, 24, X - this.X + (1/2 * CCC.width) - (1/2 * 29 * 1.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24 * 1.25), 29 * 1.25, 24 * 1.25);
        }
        else if (this.type == "fermentedUtTentacle")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 375, 950, 32, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 32 * 1.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 36 * 1.25), 32 * 1.25, 36 * 1.25);
        }
        else if (this.type == "utTentacle")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 318, 958, 43, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 43 * 1.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 23 * 1.25), 43 * 1.25, 23 * 1.25);
        }
        else if (this.type == "rawMountainFrichFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 65, 226, 10, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 20 * 2.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24 * 2), 20 * 2, 24 * 2);
        }
        else if (this.type == "MountainFrichMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 79, 227, 10, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 20 * 2.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24 * 2), 20 * 2, 24 * 2);
        }
        else if (this.type == "vardanianAxe")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 53, 158, 37, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 37), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22), 37, 22);
        }
        else if (this.type == "vardanianAxeDual")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 48, 187, 31, 35, X - this.X + (1/2 * CCC.width) - (1/2 * 31), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35), 31, 35);
        }
        else if (this.type == "gulfreyShell")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 48, 41, 31, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 31), Y - this.Y + (1/2 * CCC.height) - (1/2 * 23), 31, 23);
        }
        else if (this.type == "freydicSpear")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 4, 227, 20, 75, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 75), 20, 75);
        }
        else if (this.type == "gulfreyMandibles")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2, 92, 33, 33, X - this.X + (1/2 * CCC.width) - (1/2 * 33), Y - this.Y + (1/2 * CCC.height) - (1/2 * 33), 33, 33);
        }
        else if (this.type == "rawGulfreyFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 37, 9, 20, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20), 20, 20);
        }
        else if (this.type == "gulfreyMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 66, 9, 20, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20), 20, 20);
        }
        else if (this.type == "mudflyMeat")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 209, 89, 14, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 14) * 2, Y - this.Y + (1/2 * CCC.height) - (1/2 * 12) * 2, 14 * 2, 12 * 2);
        }
        else if (this.type == "rawMudflyFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 209, 77, 14, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 14) * 2, Y - this.Y + (1/2 * CCC.height) - (1/2 * 12) * 2, 14 * 2, 12 * 2);
        }
        else if (this.type == "mudflyMold")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 209, 65, 14, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 14) * 2, Y - this.Y + (1/2 * CCC.height) - (1/2 * 12) * 2, 14 * 2, 12 * 2);
        }
        else if (this.type == "vomit")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 55, 135, 24, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 24), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 24, 21);
        }
        else if (this.type == "gojiiBerries")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 615, 3, 19, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 19), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 19, 15);
        }
        else if (this.type == "nirineseSabre")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 7, 7, 26, 80, X - this.X + (1/2 * CCC.width) - (1/2 * 26), Y - this.Y + (1/2 * CCC.height) - (1/2 * 80), 26, 80);
        }
        else if (this.type == "freezingArrow")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 66, 73, 22, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 33), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13.5), 33, 13.5);
        }
        else if (this.type == "fireArrow")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 66, 80, 22, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 33), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13.5), 33, 13.5);
        }
        else if (this.type == "lifeLeachArrow")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 65, 88, 22, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 33), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13.5), 33, 13.5);
        }
        else if (this.type == "oiledArrow")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 67, 57, 19, 7, X - this.X + (1/2 * CCC.width) - (1/2 * 28.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 10.5), 28.5, 10.5);
        }
        else if (this.type == "shehidToxinArrow")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 66, 21, 22, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 33), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13.5), 33, 13.5);
        }
        else if (this.type == "steelArrow")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 182, 104, 23, 9, X - this.X + (1/2 * CCC.width) - (1/2 * 34.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13.5), 23, 9);
        }
        else if (this.type == "arrow")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 432, 554, 20, 8, X - this.X + (1/2 * CCC.width) - (1/2 * 30), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12), 20, 8);
        }
        else if (this.type == "ogoFruit")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 426, 4, 12, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22.5), 18, 22.5);
        }
        else if (this.type == "blueBlade")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 8, 531, 57, 63, X - this.X + (1/2 * CCC.width) - (1/2 * 68.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 75.6), 68.4, 75.6);
        }
        else if (this.type == "berulnSkull")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 446, 3, 15, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 30), Y - this.Y + (1/2 * CCC.height) - (1/2 * 40), 30, 40);
        }
        else if (this.type == "rawBerulnFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 526, 6, 21, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 31.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 34.5), 31.5, 34.5);
        }
        else if (this.type == "berulnMeat")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 506, 38, 21, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 31.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 34.5), 31.5, 34.5);
        }
        else if (this.type == "bigBerulnPelt")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 465, 1, 51, 30, X - this.X + (1/2 * CCC.width) - (1/2 * 117.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 69), 117.3, 69);
        }
        else if (this.type == "berulnPelt")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 465, 1, 51, 30, X - this.X + (1/2 * CCC.width) - (1/2 * 102), Y - this.Y + (1/2 * CCC.height) - (1/2 * 60), 102, 60);
        }
        else if (this.type == "longbow")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 380, 593, 34, 34, X - this.X + (1/2 * CCC.width) - (1/2 * 51), Y - this.Y + (1/2 * CCC.height) - (1/2 * 51), 51, 51);
        }
        else if (this.type == "walrusLeatherArmour")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 734, 202, 52, 58, X - this.X + (1/2 * CCC.width) - (1/2 * 52), Y - this.Y + (1/2 * CCC.height) - (1/2 * 58), 72.8, 81.2);
        }
        else if (this.type == "skinAndBones")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 105, 172, 30, 40, X - this.X + (1/2 * CCC.width) - (1/2 * 72), Y - this.Y + (1/2 * CCC.height) - (1/2 * 96), 72, 96);
            XXX.drawImage(polpol, 105, 172, 30, 40, X - this.X + (1/2 * CCC.width) - (1/2 * 72), Y - this.Y + (1/2 * CCC.height) - (1/2 * 96), 72, 96);
        }
        else if (this.type == "balgurMercArmour")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 4, 105, 39, 70, X - this.X + (1/2 * CCC.width) - (1/2 * 39 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 70 * 1.5), 39 * 1.5, 70 * 1.5);
        }
        else if (this.type == "balgurCaptainArmour")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 97, 108, 39, 70, X - this.X + (1/2 * CCC.width) - (1/2 * 39 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 70 * 1.5), 39 * 1.5, 70 * 1.5);
        }
        else if (this.type == "rawWalrusFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 99, 4, 17, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 26.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30), 26.5, 30);
        }
        else if (this.type == "aldrekiiBardiche")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 580, 253, 42, 137, X - this.X + (1/2 * CCC.width) - (1/2 * 42), Y - this.Y + (1/2 * CCC.height) - (1/2 * 137), 35.6, 109.6);
        }
        else if (this.type == "rawTilkFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 950, 236, 27, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 27, 21);
        }
        else if (this.type == "tilkMeat")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 918, 236, 27, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 27, 21);
        }
        else if (this.type == "tilkTentacle")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 982, 238, 27, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 27, 21);
        }
        else if (this.type == "lrgTilkTentacle")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 982, 238, 27, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 27 * 1.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21 * 1.4), 27 * 1.4, 21 * 1.4);
        }
        else if (this.type == "giantTilkTentacle")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 982, 238, 27, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 27 * 3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21 * 3), 27 * 3, 21 * 3);
        }
        else if (this.type == "rawWalrusFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 99, 4, 17, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 26.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30), 26.5, 30);
        }
        else if (this.type == "walrusMeat")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 257, 1, 17, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 26.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30), 26.5, 30);
        }
        else if (this.type == "walrusHide")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 287, 3, 45, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 112.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 55), 103.5, 50.6);
        }
        else if (this.type == "elderWalrusHide")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 287, 3, 45, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 157.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 77), 148.5, 72.6);
        }
        else if (this.type == "blubber")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 368, 9, 12, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 24), Y - this.Y + (1/2 * CCC.height) - (1/2 * 26), 24, 26);
        }
        else if (this.type == "walrusTusks")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 341, 10, 17, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 42.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 32.5), 42.5, 32.5);
        }
        else if (this.type == "elderWalrusTusks")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 341, 10, 17, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 68), Y - this.Y + (1/2 * CCC.height) - (1/2 * 52), 68, 52);
        }
        else if (this.type == "mace")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 554, 10, 61, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 61), Y - this.Y + (1/2 * CCC.height) - (1/2 * 36), 61, 36);
        }
        else if (this.type == "lightningCorseque")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 247, 54, 33, 77, X - this.X + (1/2 * CCC.width) - (1/2 * 33 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 77 * 1.5), 33 * 1.5, 77 * 1.5);
        }
        else if (this.type == "smashStick" || this.type == "burningSmashStick")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 189, 86, 23, 44, X - this.X + (1/2 * CCC.width) - (1/2 * 23 * 1.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 44 * 1.5), 23 * 1.5, 44 * 1.5);
        }
        else if (this.type == "longSpikedMorningStar")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 151, 128, 39, 39, X - this.X + (1/2 * CCC.width) - (1/2 * 39 * 1.15), Y - this.Y + (1/2 * CCC.height) - (1/2 * 39 * 1.15), 39 * 1.15, 39 * 1.15);
        }
        else if (this.type == "longsword")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 75, 366, 17, 47, X - this.X + (1/2 * CCC.width) - (1/2 * 17), Y - this.Y + (1/2 * CCC.height) - (1/2 * 47), 17, 64);
        }
        else if (this.type == "freydicWarAxe")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 17, 115, 113, 104, X - this.X + (1/2 * CCC.width) - (1/2 * 113), Y - this.Y + (1/2 * CCC.height) - (1/2 * 104), 113, 104);
        }
        else if (this.type == "rawEtyrFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 43, 684, 16, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13), 16, 13);
        }
        else if (this.type == "etyrMeat")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 73, 684, 16, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13), 16, 13);
        }
        else if (this.type == "etyrHide")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 37, 720, 25, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 25, 18);
        }
        else if (this.type == "trollsBlood")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 385, 7, 11, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 16.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22.5), 16.5, 22.5);
        }
        else if (this.type == "yaihefBerries")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 62, 508, 16, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 16, 16);
            }
    };

    this.drawInventoryItem = function(type, invX, invY)
    {
        this.invX = invX;
        this.invY = invY;
        this.type = type;

        if (this.type == "coins")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 405, 4, 16, 17, this.invX - (1/2 * 32), this.invY - (1/2 * 34), 32, 34);
        }
        else if (this.type == "unitMarker")
        {
            LXX.beginPath();
            LXX.fillStyle = "gold";
            LXX.arc(this.invX, this.invY, 15, 0, Math.PI * 2);
            LXX.fill();
        }
        else if (this.type == "plantMarker")
        {
            LXX.beginPath();
            LXX.fillStyle = "turquoise";
            LXX.arc(this.invX, this.invY, 15, 0, Math.PI * 2);
            LXX.fill();
        }
        else if (this.type == "haeflower")
        {
            LXX.beginPath();
            LXX.drawImage(zapa, 19, 274, 32, 46, this.invX - (1/2 * 32 * 0.9), this.invY - (1/2 * 46 * 0.9), 32 * 0.9, 46 * 0.9);
        }
        else if (this.type == "haeflowerPollen")
        {
            LXX.beginPath();
            LXX.drawImage(zapa, 275, 215, 29, 25, this.invX - (1/2 * 29 * 0.4), this.invY - (1/2 * 25 * 0.4), 29 * 0.4, 25 * 0.4);
        }
        else if (this.type == "stone")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1698, 528, 29, 27, this.invX - (1/2 * 29), this.invY - (1/2 * 27), 29, 27);
        }
        else if (this.type == "darkStone")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1666, 466, 25, 24, this.invX - (1/2 * 25), this.invY - (1/2 * 24), 25, 24);
        }
        else if (this.type == "ruby")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1440, 527, 25, 26, this.invX - (1/2 * 25 * 0.3), this.invY - (1/2 * 26 * 0.3), 25 * 0.3, 26 * 0.3);
        }
        else if (this.type == "coal")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1531, 529, 29, 27, this.invX - (1/2 * 29), this.invY - (1/2 * 27), 29, 27);
        }
        else if (this.type == "ironOre")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1761, 464, 38, 26, this.invX - (1/2 * 38), this.invY - (1/2 * 26), 38, 26);
        }
        else if (this.type == "rawSilver")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1471, 524, 27, 35, this.invX - (1/2 * 27), this.invY - (1/2 * 35), 27, 35);
        }
        else if (this.type == "rawGold")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1211, 522, 27, 35, this.invX - (1/2 * 27), this.invY - (1/2 * 35), 27, 35);
        }
        else if (this.type == "silver")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1359, 562, 29, 18, this.invX - (1/2 * 29), this.invY - (1/2 * 18), 29, 18);
        }
        else if (this.type == "gold")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1323, 562, 29, 18, this.invX - (1/2 * 29), this.invY - (1/2 * 18), 29, 18);
        }
        else if (this.type == "jvostranOre")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1623, 528, 29, 27, this.invX - (1/2 * 29), this.invY - (1/2 * 27), 29, 27);
        }
        else if (this.type == "pureJvostranOre")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1328, 524, 35, 33, this.invX - (1/2 * 35 * 0.8), this.invY - (1/2 * 33 * 0.8), 35 * 0.8, 33 * 0.8);
        }
        else if (this.type == "jvostran")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1285, 563, 30, 17, this.invX - (1/2 * 30), this.invY - (1/2 * 17), 30, 17);
        }
        else if (this.type == "twiceForgedSteel")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1427, 561, 30, 20, this.invX - (1/2 * 30), this.invY - (1/2 * 20), 30, 20);
        }
        else if (this.type == "thriceForgedSteel")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1393, 561, 30, 20, this.invX - (1/2 * 30), this.invY - (1/2 * 20), 30, 20);
        }
        else if (this.type == "svehnsShipment" || this.type == "svehnsLoot")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 104, 213, 36, 37, this.invX - (1/2 * 36 * 1.4), this.invY - (1/2 * 37 * 1.4), 36 * 1.4, 37 * 1.4);
        }
        else if (this.type == "svehnsLootEmpty")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 95, 260, 51, 42, this.invX - (1/2 * 51 * 1.4), this.invY - (1/2 * 42 * 1.4), 51 * 1.4, 42 * 1.4);
        }
        else if (this.type == "cero")
        {
            LXX.beginPath();
            LXX.drawImage(zer0, 344, 8, 20, 50, this.invX - (1/2 * 20 * 1.5 + 4), this.invY - (1/2 * 50 * 1.5), 20 * 1.5, 50 * 1.5);
        }
        else if (this.type == "rawTunskFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 130, 6, 10, 9, this.invX - (1/2 * 10 * 1.85), this.invY - (1/2 * 9 * 1.85), 10 * 1.85, 9 * 1.85);
        }
        else if (this.type == "tunskMeat")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 130, 15, 10, 9, this.invX - (1/2 * 10 * 1.85), this.invY - (1/2 * 9 * 1.85), 10 * 1.85, 9 * 1.85);
        }
        else if (this.type == "anterInnards")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 77, 371, 11, 10, this.invX - (1/2 * 11 * 1.5), this.invY - (1/2 * 10 * 1.5), 11 * 1.5, 10 * 1.5);
        }
        else if (this.type == "anterAcid")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 93, 371, 11, 10, this.invX - (1/2 * 11 * 1.5), this.invY - (1/2 * 10 * 1.5), 11 * 1.5, 10 * 1.5);
        }
        else if (this.type == "anterShell")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 75, 530, 24, 16, this.invX - (1/2 * 24 * 1.6), this.invY - (1/2 * 16 * 1.6), 24 * 1.6, 16 * 1.6);
        }
        else if (this.type == "anterMandibles")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 77, 548, 20, 24, this.invX - (1/2 * 20 * 1.5), this.invY - (1/2 * 24 * 1.5), 20 * 1.5, 24 * 1.5);
        }
        else if (this.type == "anterShellArmour")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 70, 389, 34, 52, this.invX - (1/2 * 34 * 1.5), this.invY - (1/2 * 52 * 1.5), 34 * 1.5, 52 * 1.5);
        }
        else if (this.type == "smlGlutidOoze")
        {
            var sizeMult = 1;

            LXX.beginPath();
            LXX.drawImage(theCrack, 313, 268, 40, 37, this.invX - (1/2 * 40 * sizeMult), this.invY - (1/2 * 37 * sizeMult), 40 * sizeMult, 37 * sizeMult);
        }
        else if (this.type == "medGlutidOoze")
        {
            var sizeMult = 1.5;

            LXX.beginPath();
            LXX.drawImage(theCrack, 313, 268, 40, 37, this.invX - (1/2 * 40 * sizeMult), this.invY - (1/2 * 37 * sizeMult), 40 * sizeMult, 37 * sizeMult);
        }
        else if (this.type == "lrgGlutidOoze")
        {
            var sizeMult = 2;

            LXX.beginPath();
            LXX.drawImage(theCrack, 313, 268, 40, 37, this.invX - (1/2 * 40 * sizeMult), this.invY - (1/2 * 37 * sizeMult), 40 * sizeMult, 37 * sizeMult);
        }
        else if (this.type == "smlOolidOozeRemains")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 94, 171, 37, 35, this.invX - (1/2 * 37), this.invY - (1/2 * 35), 37, 35);
        }
        else if (this.type == "medOolidOozeRemains")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 94, 171, 37, 35, this.invX - (1/2 * 37 * 1.5), this.invY - (1/2 * 35 * 1.5), 37 * 1.5, 35 * 1.5);
        }
        else if (this.type == "lrgOolidOozeRemains")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 94, 171, 37, 35, this.invX - (1/2 * 37 * 2), this.invY - (1/2 * 35 * 2), 37 * 2, 35 * 2);
        }
        else if (this.type == "rawTilkFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 950, 236, 27, 21, this.invX - (1/2 * 27), this.invY - (1/2 * 21), 27, 21);
        }
        else if (this.type == "tilkMeat")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 918, 236, 27, 21, this.invX - (1/2 * 27), this.invY - (1/2 * 21), 27, 21);
        }
        else if (this.type == "tilkTentacle")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 982, 238, 27, 21, this.invX - (1/2 * 27), this.invY - (1/2 * 21), 27, 21);
        }
        else if (this.type == "lrgTilkTentacle")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 982, 238, 27, 21, this.invX - (1/2 * 27 * 1.4), this.invY - (1/2 * 21 * 1.4), 27 * 1.4, 21 * 1.4);
        }
        else if (this.type == "giantTilkTentacle")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 982, 238, 27, 21, this.invX - (1/2 * 27 * 3), this.invY - (1/2 * 21 * 3), 27 * 3, 21 * 3);
        }
        else if (this.type == "wegRoot")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 255, 58, 14, 19, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 19 * 2), 14 * 2, 19 * 2);
        }
        else if (this.type == "roastedWegRoot")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 280, 83, 14, 19, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 19 * 2), 14 * 2, 19 * 2);
        }
        else if (this.type == "roastedWegRootChunks")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 278, 60, 17, 12, this.invX - (1/2 * 17 * 2), this.invY - (1/2 * 12 * 2), 17 * 2, 12 * 2);
        }
        else if (this.type == "palntRoot")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 205, 473, 10, 15, this.invX - (1/2 * 10 * 1.4), this.invY - (1/2 * 15 * 1.4), 10 * 1.4, 15 * 1.4);
        }
        else if (this.type == "boiledPalntRoot")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 206, 478, 9, 9, this.invX - (1/2 * 9 * 1.5), this.invY - (1/2 * 9 * 1.5), 9 * 1.5, 9 * 1.5);
        }
        else if (this.type == "palntFlower")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 185, 472, 9, 8, this.invX - (1/2 * 9 * 1.35), this.invY - (1/2 * 8 * 1.35), 9 * 1.35, 8 * 1.35);
        }
        else if (this.type == "vardanianClub")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 319, 453, 12, 38, this.invX - (1/2 * 12 * 1.4), this.invY - (1/2 * 38 * 1.4), 12 * 1.4, 38 * 1.4);
        }
        else if (this.type == "swampWalkerArmour")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 18, 581, 35, 65, this.invX - (1/2 * 35 * 1.1), this.invY - (1/2 * 65 * 1.1), 35 * 1.1, 65 * 1.1);
        }
        else if (this.type == "thenganPlateArmour")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 72, 581, 35, 65, this.invX - (1/2 * 35 * 1.1), this.invY - (1/2 * 65 * 1.1), 35 * 1.1, 65 * 1.1);
        }
        else if (this.type == "wightbloomBerries")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 197, 528, 18, 17, this.invX - (1/2 * 18 * 1.5), this.invY - (1/2 * 17 * 1.5), 18 * 1.5, 17 * 1.5);
        }
        else if (this.type == "ishBranch")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 865, 550, 18, 21, this.invX - (1/2 * 18), this.invY - (1/2 * 21), 18, 21);
        }
        else if (this.type == "itlinBranch")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 477, 103, 12, 10, this.invX - (1/2 * 12 * 2), this.invY - (1/2 * 10 * 2), 12 * 2, 10 * 2);
        }
        else if (this.type == "butterMellowFlower")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 256, 39, 14, 16, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 16 * 2), 14 * 2, 16 * 2);
        }
        else if (this.type == "mufBall")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 267, 19, 7, 7, this.invX - (1/2 * 7 * 2), this.invY - (1/2 * 7 * 2), 7 * 2, 7 * 2);
        }
        else if (this.type == "mufFiber")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 335, 23, 15, 12, this.invX - (1/2 * 15 * 2), this.invY - (1/2 * 12 * 2), 15 * 2, 12 * 2);
        }
        else if (this.type == "mufCloth")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 315, 10, 11, 13, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 13 * 2), 11 * 2, 13 * 2);
        }
        else if (this.type == "tenicFlower")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 295, 23, 14, 14, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 14 * 2), 14 * 2, 14 * 2);
        }
        else if (this.type == "tenicLeaf")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 279, 24, 14, 14, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 14 * 2), 14 * 2, 14 * 2);
        }
        else if (this.type == "tenicPaste")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 302, 24, 4, 6, this.invX - (1/2 * 4 * 2.35), this.invY - (1/2 * 6 * 2.25), 4 * 2.35, 6 * 2.25);
        }
        else if (this.type == "ardilFurClothing")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 49, 299, 30, 42, this.invX - (1/2 * 30 * 1.65), this.invY - (1/2 * 42 * 1.65), 30 * 1.65, 42 * 1.65);
        }
        else if (this.type == "ardilFurSkirt")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 48, 256, 30, 42, this.invX - (1/2 * 30 * 1.65), this.invY - (1/2 * 42 * 1.65), 30 * 1.65, 42 * 1.65);
        }
        else if (this.type == "ardilFurGloves")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 58, 233, 15, 17, this.invX - (1/2 * 15 * 1.65), this.invY - (1/2 * 17 * 1.65), 15 * 1.65, 17 * 1.65);
        }
        else if (this.type == "mofuTribalWear")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 4, 137, 38, 60, this.invX - (1/2 * 38 * 1.15), this.invY - (1/2 * 60 * 1.15), 38 * 1.15, 60 * 1.15);
        }
        else if (this.type == "mofuRunnerOutfit")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 50, 137, 37, 60, this.invX - (1/2 * 37 * 1.15), this.invY - (1/2 * 60 * 1.15), 37 * 1.15, 60 * 1.15);
        }
        else if (this.type == "mofuMatriarchHeaddress")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 5, 43, 35, 67, this.invX - (1/2 * 35 * 1.15), this.invY - (1/2 * 67 * 1.15), 35 * 1.15, 67 * 1.15);
        }
        else if (this.type == "jarOfUlgoyNectar")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 287, 347, 11, 16, this.invX - (1/2 * 17.5), this.invY - (1/2 * 24), 17.5, 24);
        }
        else if (this.type == "ulgoyLeaf")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 305, 348, 18, 14, this.invX - (1/2 * 18 * 1.25), this.invY - (1/2 * 14 * 1.25), 18 * 1.25, 14 * 1.25);
        }
        else if (this.type == "mofuFive")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 1, 1, 27, 24, this.invX - (1/2 * 27 * 1.2), this.invY - (1/2 * 24 * 1.2), 27 * 1.2, 24 * 1.2);
        }
        else if (this.type == "theCorpseRing")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 48, 44, 13, 9, this.invX - (1/2 * 13 * 1.25), this.invY - (1/2 * 9 * 1.25), 13 * 1.25, 9 * 1.25);
        }
        else if (this.type == "ironRing")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 32, 22, 11, 11, this.invX - (1/2 * 11 * 1.25), this.invY - (1/2 * 11 * 1.25), 11 * 1.25, 11 * 1.25);
        }
        else if (this.type == "rawArdilFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 50, 687, 8, 8, this.invX - (1/2 * 8), this.invY - (1/2 * 8), 8, 8);
        }
        else if (this.type == "ardilMeat")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 82, 686, 8, 8, this.invX - (1/2 * 8), this.invY - (1/2 * 8), 8, 8);
        }
        else if (this.type == "ardilPelt")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 928, 701, 29, 20, this.invX - (1/2 * 29), this.invY - (1/2 * 20), 29, 20);
        }
        else if (this.type == "lizardTail")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1544, 29, 10, 10, this.invX - (1/2 * 14), this.invY - (1/2 * 14), 14, 14);
        }
        else if (this.type == "pumpkinDough")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 73, 4, 10, 8, this.invX - (1/2 * 10 * 1.8), this.invY - (1/2 * 8 * 1.8), 10 * 1.8, 8 * 1.8);
        }
        else if (this.type == "pumpkinBread")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 56, 29, 16, 11, this.invX - (1/2 * 16 * 1.8), this.invY - (1/2 * 11 * 1.8), 16 * 1.8, 11 * 1.8);
        }
        else if (this.type == "butteredPumpkinBread")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 70, 2, 19, 18, this.invX - (1/2 * 19 * 1.8), this.invY - (1/2 * 18 * 1.8), 19 * 1.8, 18 * 1.8);
        }
        else if (this.type == "harstBread")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1395, 12, 15, 12, this.invX - (1/2 * 15 * 1.8), this.invY - (1/2 * 12 * 1.8), 15 * 1.8, 12 * 1.8);
        }
        else if (this.type == "butteredHarstBread")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1392, 27, 17, 17, this.invX - (1/2 * 17 * 1.8), this.invY - (1/2 * 17 * 1.8), 17 * 1.8, 17 * 1.8);
        }
        else if (this.type == "harstDough")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1412, 11, 11, 10, this.invX - (1/2 * 11 * 1.5), this.invY - (1/2 * 10 * 1.5), 11 * 1.5, 10 * 1.5);
        }
        else if (this.type == "harstFlour")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1428, 12, 11, 15, this.invX - (1/2 * 11), this.invY - (1/2 * 15), 11, 15);
        }
        else if (this.type == "bagOfHarstFlour")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1443, 11, 23, 29, this.invX - (1/2 * 23), this.invY - (1/2 * 29), 23, 29);
        }
        else if (this.type == "honey")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 34, 244, 18, 21, this.invX - (1/2 * 18), this.invY - (1/2 * 21), 18, 21);
        }
        else if (this.type == "bee")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 12, 338, 14, 13, this.invX - (1/2 * 14 * 2.3), this.invY - (1/2 * 13 * 2.3), 14 * 2.3, 13 * 2.3);
        }
        else if (this.type == "wyrExtract")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1722, 200, 13, 17, this.invX - (1/2 * 13), this.invY - (1/2 * 17), 13, 17);
        }
        else if (this.type == "blackBearLeatherArmour")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 689, 2, 29, 46, this.invX - (1/2 * 29 * 1.5), this.invY - (1/2 * 46 * 1.5), 29 * 1.5, 46 * 1.5);
        }
        else if (this.type == "blackBearFurClothing")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 654, 2, 29, 46, this.invX - (1/2 * 29 * 1.5), this.invY - (1/2 * 46 * 1.5), 29 * 1.5, 46 * 1.5);
        }
        else if (this.type == "wellAxle")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 233, 350, 20, 17, this.invX - (1/2 * 20 * 1.6), this.invY - (1/2 * 17 * 1.6), 20 * 1.6, 17 * 1.6);
        }
        else if (this.type == "wellCord")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 209, 326, 23, 22, this.invX - (1/2 * 23 * 1.6), this.invY - (1/2 * 22 * 1.6), 23 * 1.6, 22 * 1.6);
        }
        else if (this.type == "wellStone")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 239, 332, 15, 10, this.invX - (1/2 * 15 * 1.6), this.invY - (1/2 * 10 * 1.6), 15 * 1.6, 10 * 1.6);
        }
        else if (this.type == "wellWinch")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 213, 350, 17, 8, this.invX - (1/2 * 17 * 1.6), this.invY - (1/2 * 8 * 1.6), 17 * 1.6, 8 * 1.6);
        }
        else if (this.type == "blunderbuss")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1305, 12, 13, 35, this.invX - (1/2 * 13 * 1.65), this.invY - (1/2 * 35 * 1.65), 13 * 1.65, 35 * 1.65);
        }
        else if (this.type == "musket")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1334, 11, 11, 36, this.invX - (1/2 * 11 * 1.65), this.invY - (1/2 * 36 * 1.65), 11 * 1.65, 36 * 1.65);
        }
        else if (this.type == "bullet")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1321, 16, 5, 5, this.invX - (1/2 * 8), this.invY - (1/2 * 8), 8, 8);
        }
        else if (this.type == "blackPowder")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1350, 13, 13, 11, this.invX - (1/2 * 13), this.invY - (1/2 * 11), 13, 11);
        }
        else if (this.type == "cutlass")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1369, 10, 19, 37, this.invX - (1/2 * 19 * 1.65), this.invY - (1/2 * 37 * 1.65), 19 * 1.65, 37 * 1.65);
        }
        else if (this.type == "brokenHyelingCleaver")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 223, 83, 31, 34, this.invX - (1/2 * 31 * 1.6), this.invY - (1/2 * 34 * 1.6), 31 * 1.6, 34 * 1.6);
        }
        else if (this.type == "hyelingClaws")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 98, 53, 22, 19, this.invX - (1/2 * 22 * 1.6), this.invY - (1/2 * 19 * 1.6), 22 * 1.6, 19 * 1.6);
        }
        else if (this.type == "rawHyelingFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 223, 600, 14, 18, this.invX - (1/2 * 14 * 1.6), this.invY - (1/2 * 18 * 1.6), 14 * 1.6, 18 * 1.6);
        }
        else if (this.type == "hyelingMeat")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 241, 601, 14, 18, this.invX - (1/2 * 14 * 1.6), this.invY - (1/2 * 18 * 1.6), 14 * 1.6, 18 * 1.6);
        }
        else if (this.type == "hyelingArmour")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 197, 30, 17, 46, this.invX - (1/2 * 17 * 1.6), this.invY - (1/2 * 46 * 1.6), 17 * 1.6, 46 * 1.6);
        }
        else if (this.type == "golgemoffFeelers")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 965, 266, 17, 16, this.invX - (1/2 * 17), this.invY - (1/2 * 16), 17, 16);
        }
        else if (this.type == "golgemoffMeat")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 983, 264, 17, 16, this.invX - (1/2 * 17 * 1.6), this.invY - (1/2 * 16 * 1.6), 17 * 1.6, 16 * 1.6);
        }
        else if (this.type == "rawGolgemoffFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 999, 264, 17, 16, this.invX - (1/2 * 17 * 1.6), this.invY - (1/2 * 16 * 1.6), 17 * 1.6, 16 * 1.6);
        }
        else if (this.type == "rawAvrakFlesh" || this.type == "rawEvrakFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 139, 2350, 39, 29, this.invX - (1/2 * 39 * 0.8), this.invY - (1/2 * 29 * 0.8), 39 * 0.8, 29 * 0.8);
        }
        else if (this.type == "avrakMeat" || this.type == "evrakMeat")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 141, 2394, 39, 29, this.invX - (1/2 * 39 * 0.8), this.invY - (1/2 * 29 * 0.8), 39 * 0.8, 29 * 0.8);
        }
        else if (this.type == "avrakHide")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 142, 2287, 41, 50, this.invX - (1/2 * 41 * 0.6), this.invY - (1/2 * 50 * 0.6), 41 * 0.6, 50 * 0.6);
        }
        else if (this.type == "evrakHide")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 62, 2314, 59, 50, this.invX - (1/2 * 59 * 0.6), this.invY - (1/2 * 50 * 0.6), 59 * 0.6, 50 * 0.6);
        }
        else if (this.type == "avrakLeatherArmour")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 8, 2091, 66, 83, this.invX - (1/2 * 66 * 0.85), this.invY - (1/2 * 83 * 0.85), 66 * 0.85, 83 * 0.85);
        }
        else if (this.type == "evrakLeatherArmour")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 18, 2002, 47, 80, this.invX - (1/2 * 47 * 0.85), this.invY - (1/2 * 80 * 0.85), 47 * 0.85, 80 * 0.85);
        }
        else if (this.type == "neevFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 148, 67, 21, 17, this.invX - (1/2 * 21 * 1.25), this.invY - (1/2 * 17 * 1.25), 21 * 1.25, 17 * 1.25);
        }
        else if (this.type == "neevFur")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 176, 64, 35, 25, this.invX - (1/2 * 35 * 1.25), this.invY - (1/2 * 25 * 1.25), 35 * 1.25, 25 * 1.25);
        }
        else if (this.type == "ogardPerfume")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 50, 4, 15, 19, this.invX - (1/2 * 15), this.invY - (1/2 * 19), 15, 19);
        }
        else if (this.type == "driedTechiLeaf")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 35, 6, 11, 16, this.invX - (1/2 * 11), this.invY - (1/2 * 16), 11, 16);
        }
        else if (this.type == "ogard")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 36, 28, 15, 16, this.invX - (1/2 * 15 * 1.3), this.invY - (1/2 * 16 * 1.3), 15 * 1.3, 16 * 1.3);
        }
        else if (this.type == "groundOgard")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 37, 47, 16, 14, this.invX - (1/2 * 16), this.invY - (1/2 * 14), 16, 14);
        }
        else if (this.type == "ogardPollen")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 57, 50, 9, 9, this.invX - (1/2 * 9 * 1.3), this.invY - (1/2 * 9 * 1.3), 9 * 1.3, 9 * 1.3);
        }
        else if (this.type == "smashStick" || this.type == "burningSmashStick")
        {
            LXX.beginPath();
            LXX.save();
            LXX.translate(this.invX, this.invY);
            LXX.rotate(9/10 * Math.PI);
            LXX.drawImage(mofu, 189, 86, 23, 44, - (1/2 * 23 * 1.5), - (1/2 * 44 * 1.5), 23 * 1.5, 44 * 1.5);
            LXX.restore();
        }
        else if (this.type == "cloth" || this.type == "dyedMufCloth")
        {
            LXX.beginPath();
            LXX.save();
            LXX.translate(this.invX, this.invY);
            LXX.rotate(5/8 * 2 * Math.PI);
            LXX.drawImage(verse, 3955, 309, 29, 10,  - (1/2 * 29 * 1.5), - (1/2 * 10 * 1.5), 29 * 1.5, 10 * 1.5);
            LXX.restore();
        }
        else if (this.type == "culprisBandage")
        {
            LXX.beginPath();
            LXX.save();
            LXX.translate(this.invX, this.invY);
            LXX.rotate(3/8 * 2 * Math.PI);
            LXX.drawImage(verse, 3955, 309, 29, 10,  - (1/2 * 29 / 1.25), - (1/2 * 10 / 1.25), 29 / 1.25, 10 / 1.25);
            LXX.restore();
        }
        else if (this.type == "naapridFiber" || this.type == "varnFiber" || this.type == "evrakFiber" || this.type == "avrakFiber")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 85, 46, 10, 18, this.invX - (1/2 * 10 * 1.65), this.invY - (1/2 * 18 * 1.65), 10 * 1.65, 18 * 1.65);
        }
        else if (this.type == "tent")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 1, 1, 32, 32, this.invX - (1/2 * 32 * 1.5), this.invY - (1/2 * 32 * 1.5), 32 * 1.5, 32 * 1.5);
        }
        else if (this.type == "neculaisEar")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 71, 48, 9, 12, this.invX - (1/2 * 9 * 1.4), this.invY - (1/2 * 12 * 1.4), 9 * 1.4, 12 * 1.4);
        }
        else if (this.type == "natureCall")
        {
            LXX.beginPath();
            LXX.drawImage(horde1, 529, 36, 88, 84, this.invX - (1/2 * 88 * 0.2), this.invY - (1/2 * 84 * 0.2), 88 * 0.2, 84 * 0.2);
        }
        else if (this.type == "berulnToothNecklace")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 96, 3, 14, 21, this.invX - (1/2 * 14 * 1.2), this.invY - (1/2 * 21 * 1.2), 14 * 1.2, 21 * 1.2);
        }
        else if (this.type == "techiLeaf")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 83, 147, 13, 15, this.invX - (1/2 * 13), this.invY - (1/2 * 15), 13, 15);
        }
        else if (this.type == "bucketOfPluttJuice" || this.type == "bucketOfHotPluttBerryCider" )
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 87, 66, 13, 20, this.invX - (1/2 * 13 * 2), this.invY - (1/2 * 20 * 2), 13 * 2, 20 * 2);
        }
        else if (this.type == "pluttJuicePintGlass" || this.type == "pluttCiderPintGlass" )
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 1, 15, 12, 12, this.invX - (1/2 * 12 * 2), this.invY - (1/2 * 12 * 2), 12 * 2, 12 * 2);
        }
        else if (this.type == "glassBottle")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 173, 32, 10, 20, this.invX - (1/2 * 10 * 2), this.invY - (1/2 * 20 * 2), 10 * 2, 20 * 2);
        }
        else if (this.type == "glassBottleOfWater")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 149, 31, 10, 20, this.invX - (1/2 * 10 * 2), this.invY - (1/2 * 20 * 2), 10 * 2, 20 * 2);
        }
        else if (this.type == "glassBottleOfPluttWine")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 45, 208, 12, 22, this.invX - (1/2 * 12 * 2), this.invY - (1/2 * 22 * 2), 12 * 2, 22 * 2);
        }
        else if (this.type == "pluttWine")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 45, 181, 11, 11, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 11 * 2), 11 * 2, 11 * 2);
        }
        else if (this.type == "bushkaBerries")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 23, 125, 13, 12, this.invX - (1/2 * 13 * 1.15), this.invY - (1/2 * 12 * 1.15), 13 * 1.15, 12 * 1.5);
        }
        else if (this.type == "bushkaLeaves")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 3, 118, 14, 15, this.invX - (1/2 * 14 * 1.15), this.invY - (1/2 * 15 * 1.15), 14 * 1.15, 15 * 1.15);
        }
        else if (this.type == "beesWax")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 1, 2, 12, 13, this.invX - (1/2 * 12 * 1.4), this.invY - (1/2 * 13 * 1.4), 12 * 1.4, 13 * 1.4);
        }
        else if (this.type == "oilLantern" || this.type == "oilLantern4" || this.type == "oilLantern3" || this.type == "oilLantern2" || this.type == "oilLantern1" || this.type == "oilLanternEmpty")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 48, 1, 11, 27, this.invX - (1/2 * 11 * 1.2), this.invY - (1/2 * 27 * 1.2), 11 * 1.2, 27 * 1.2);
        }
        else if (this.type == "oilLamp" || this.type == "oilLamp2" || this.type == "oilLamp1" || this.type == "oilLampEmpty")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 14, 17, 12, 15, this.invX - (1/2 * 12 * 1.2), this.invY - (1/2 * 15 * 1.2), 12 * 1.2, 15 * 1.2);
        }
        else if (this.type == "jackOLantern" || this.type == "jackOLantern2" || this.type == "jackOLantern1" || this.type == "jackOLanternEmpty")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 82, 2, 18, 19, this.invX - (1/2 * 18 * 1.2), this.invY - (1/2 * 19 * 1.2), 18 * 1.2, 19 * 1.2);
        }
        else if (this.type == "pumpkin")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 64, 2, 18, 19, this.invX - (1/2 * 18 * 1.2), this.invY - (1/2 * 19 * 1.2), 18 * 1.2, 19 * 1.2);
        }
        else if (this.type == "roastedPumpkin")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 83, 23, 16, 18, this.invX - (1/2 * 16 * 1.2), this.invY - (1/2 * 18 * 1.2), 16 * 1.2, 18 * 1.2);
        }
        else if (this.type == "candle")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 14, 1, 11, 16, this.invX - (1/2 * 11 * 1.2), this.invY - (1/2 * 16 * 1.2), 11 * 1.2, 16 * 1.2);
        }
        else if (this.type == "candle2")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 25, 1, 12, 13, this.invX - (1/2 * 12 * 1.2), this.invY - (1/2 * 13 * 1.2), 12 * 1.2, 13 * 1.2);
        }
        else if (this.type == "candle1")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 35, 1, 12, 10, this.invX - (1/2 * 12 * 1.2), this.invY - (1/2 * 10 * 1.2), 12 * 1.2, 10 * 1.2);
        }
        else if (this.type == "pluttMoffling")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 1, 211, 18, 15, this.invX - (1/2 * 18 * 0.8), this.invY - (1/2 * 15 * 0.8), 18 * 0.8, 15 * 0.8);
        }
        else if (this.type == "akerMoffling")
        {
            LXX.beginPath();
            LXX.drawImage(candlewic, 22, 211, 18, 15, this.invX - (1/2 * 18 * 0.8), this.invY - (1/2 * 15 * 0.8), 18 * 0.8, 15 * 0.8);
        }
        else if (this.type == "rawMofflingFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 86, 110, 17, 14, this.invX - (1/2 * 17 * 0.8), this.invY - (1/2 * 14 * 0.8), 17 * 0.8, 14 * 0.8);
        }
        else if (this.type == "mofflingMeat")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 104, 111, 17, 14, this.invX - (1/2 * 17 * 0.8), this.invY - (1/2 * 14 * 0.8), 17 * 0.8, 14 * 0.8);
        }
        else if (this.type == "rawMofuFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 86, 110, 17, 14, this.invX - (1/2 * 17 * 1.2), this.invY - (1/2 * 14 * 1.2), 17 * 1.2, 14 * 1.2);
        }
        else if (this.type == "mofuMeat")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 104, 111, 17, 14, this.invX - (1/2 * 17 * 1.2), this.invY - (1/2 * 14 * 1.2), 17 * 1.2, 14 * 1.2);
        }
        else if (this.type == "rawLargeMofuFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 86, 110, 17, 14, this.invX - (1/2 * 17 * 2.3), this.invY - (1/2 * 14 * 2.3), 17 * 2.3, 14 * 2.3);
        }
        else if (this.type == "largeMofuMeat")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 104, 111, 17, 14, this.invX - (1/2 * 17 * 2.3), this.invY - (1/2 * 14 * 2.3), 17 * 2.3, 14 * 2.3);
        }
        else if (this.type == "fattyMofuLiver")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 114, 67, 9, 9, this.invX - (1/2 * 9 * 2), this.invY - (1/2 * 9 * 2), 9 * 2, 9 * 2);
        }
        else if (this.type == "mofuFeather")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 139, 54, 11, 13, this.invX - (1/2 * 11), this.invY - (1/2 * 13), 11, 13);
        }
        else if (this.type == "mofuFoot")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 122, 56, 11, 7, this.invX - (1/2 * 11), this.invY - (1/2 * 7), 11, 7);
        }
        else if (this.type == "mofuEgg")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 109, 54, 8, 11, this.invX - (1/2 * 8), this.invY - (1/2 * 11), 8, 11);
        }
        else if (this.type == "cookedMofuEgg")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 96, 54, 11, 10, this.invX - (1/2 * 11), this.invY - (1/2 * 10), 11, 10);
        }
        else if (this.type == "fermentedMofuEgg")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 96, 45, 11, 10, this.invX - (1/2 * 11), this.invY - (1/2 * 10), 11, 10);
        }
        else if (this.type == "rawGrushFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1208, 27, 14, 16, this.invX - (1/2 * 14), this.invY - (1/2 * 16), 14, 16);
        }
        else if (this.type == "grushMeat")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1207, 43, 14, 16, this.invX - (1/2 * 14), this.invY - (1/2 * 16), 14, 16);
        }
        else if (this.type == "grushFur")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1204, 7, 18, 16, this.invX - (1/2 * 18), this.invY - (1/2 * 16), 18, 16);
        }
        else if (this.type == "grushFurClothing")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 1249, 69, 31, 52, this.invX - (1/2 * 31 * 1.2), this.invY - (1/2 * 52 * 1.2), 31 * 1.2, 52 * 1.2);
        }
        else if (this.type == "iron")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1212, 561, 28, 18, this.invX - (1/2 * 28), this.invY - (1/2 * 18), 28, 18);
        }
        else if (this.type == "steel")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1461, 563, 28, 15, this.invX - (1/2 * 28), this.invY - (1/2 * 15), 28, 15);
        }
        else if (this.type == "santhGrain")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2943, 205, 19, 19, this.invX - (1/2 * 19), this.invY - (1/2 * 19), 19, 19);
        }
        else if (this.type == "santhFlour")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2977, 204, 19, 19, this.invX - (1/2 * 19), this.invY - (1/2 * 19), 19, 19);
        }
        else if (this.type == "emptyBagSanth" || this.type == "emptyBagHarst")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 3016, 201, 22, 28, this.invX - (1/2 * 22), this.invY - (1/2 * 28), 22, 28);
        }
        else if (this.type == "bagOfSanthFlour")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 3050, 200, 22, 28, this.invX - (1/2 * 22), this.invY - (1/2 * 28), 22, 28);
        }
        else if (this.type == "kellishSanthDough")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2940, 230, 17, 14, this.invX - (1/2 * 17 * 2.6), this.invY - (1/2 * 14 * 2.6), 17 * 2.6, 14 * 2.6);
        }
        else if (this.type == "naapridButter")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2940, 230, 17, 14, this.invX - (1/2 * 17), this.invY - (1/2 * 14), 17, 14);
        }
        else if (this.type == "santhBread")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2970, 225, 23, 23, this.invX - (1/2 * 23), this.invY - (1/2 * 23), 23, 23);
        }
        else if (this.type == "butteredSanthBread")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2965, 250, 32, 26, this.invX - (1/2 * 32), this.invY - (1/2 * 26), 32, 26);
        }
        else if (this.type == "healingSalve")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2943, 252, 11, 17, this.invX - (1/2 * 11 * 1.5), this.invY - (1/2 * 17 * 1.5), 11 * 1.5, 17 * 1.5);
        }
        else if (this.type == "carrot")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2864, 68, 18, 19, this.invX - (1/2 * 18), this.invY - (1/2 * 19), 18, 19);
        }
        else if (this.type == "suuliMelon")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2940, 67, 16, 22, this.invX - (1/2 * 16), this.invY - (1/2 * 22), 16, 22);
        }
        else if (this.type == "suuliMelonSlice")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2963, 68, 16, 22, this.invX - (1/2 * 14), this.invY - (1/2 * 20), 14, 20);
        }
        else if (this.type == "potato")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2770, 1, 10, 16, this.invX - (1/2 * 10), this.invY - (1/2 * 16), 10, 16);
        }
        else if (this.type == "cookedPotato")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2782, 1, 10, 16, this.invX - (1/2 * 10), this.invY - (1/2 * 16), 10, 16);
        }
        else if (this.type == "nechromanticDust")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 477, 922, 72, 66, this.invX - (1/2 * 72 * 0.35), this.invY - (1/2 * 66 * 0.35), 72 * 0.35, 66 * 0.35);
        }
        else if (this.type == "clay")
        {
            LXX.beginPath();
            LXX.drawImage(mufmuf, 1, 4, 11, 10, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 10 * 2), 11 * 2, 10 * 2);
        }
        else if (this.type == "kellishClayPot")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3036, 1, 22, 19, this.invX - (1/2 * 22 * 1.7), this.invY - (1/2 * 19 * 1.7), 22 * 1.7, 19 * 1.7);
        }
        else if (this.type == "kellishClayPotOfNaapridMilk" || this.type == "kellishClayPotOfWaantiMilk")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3017, 1, 20, 18, this.invX - (1/2 * 20 * 1.7), this.invY - (1/2 * 18 * 1.7), 20 * 1.7, 18 * 1.7);
        }
        else if (this.type == "kellishClayPotOfWater")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 359, 37, 18, 20, this.invX - (1/2 * 18 * 1.7), this.invY - (1/2 * 20 * 1.7), 18 * 1.7, 20 * 1.7);
        }
        else if (this.type == "kellishClayPotOfMushroomStew")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 408, 25, 18, 20, this.invX - (1/2 * 18 * 1.7), this.invY - (1/2 * 20 * 1.7), 18 * 1.7, 20 * 1.7);
        }
        else if (this.type == "rawViperFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 529, 64, 13, 12, this.invX - (1/2 * 13 * 1.3), this.invY - (1/2 * 12 * 1.3), 13 * 1.3, 12 * 1.3);
        }
        else if (this.type == "viperMeat")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 543, 63, 13, 12, this.invX - (1/2 * 13 * 1.3), this.invY - (1/2 * 12 * 1.3), 13 * 1.3, 12 * 1.3);
        }
        else if (this.type == "viperVenomGland")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 529, 78, 10, 7, this.invX - (1/2 * 10 * 1.3), this.invY - (1/2 * 7 * 1.3), 10 * 1.3, 7 * 1.3);
        }
        else if (this.type == "fermentedViperVenomGland")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 544, 77, 12, 9, this.invX - (1/2 * 12 * 1.3), this.invY - (1/2 * 9 * 1.3), 12 * 1.3, 9 * 1.3);
        }
        else if (this.type == "viperSnakeSkin")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 530, 52, 28, 10, this.invX - (1/2 * 28 * 1.3), this.invY - (1/2 * 10 * 1.3), 28 * 1.3, 10 * 1.3);
        }
        else if (this.type == "rasper")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 651, 45, 21, 45, this.invX - (1/2 * 21 * 1.3), this.invY - (1/2 * 45 * 1.3), 21 * 1.3, 45 * 1.3);
        }
        else if (this.type == "jvostranPlateArmour")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 350, 660, 66, 106, this.invX - (1/2 * 66 * 0.75) - 3, this.invY - (1/2 * 106 * 0.75), 66 * 0.75, 106 * 0.75);
        }
        else if (this.type == "waterPintGlass")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 205, 2, 11, 11, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 11 * 2), 11 * 2, 11 * 2);
        }
        else if (this.type == "harstGrain")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 241, 45, 12, 13, this.invX - (1/2 * 12), this.invY - (1/2 * 13), 12, 13);
        }
        else if (this.type == "harstAle")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 247, 1, 11, 12, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 12 * 2), 11 * 2, 12 * 2);
        }
        else if (this.type == "techiTea")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 19, 32, 17, 16, this.invX - (1/2 * 17 * 2), this.invY - (1/2 * 16 * 2), 17 * 2, 16 * 2);
        }
        else if (this.type == "pintGlass")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 148, 5, 11, 12, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 12 * 2), 11 * 2, 12 * 2);
        }
        else if (this.type == "energilPotionI" || this.type == "energilPotionII" || this.type == "energilPotionIII" || this.type == "energilPotionIV" || this.type == "energilPotionV")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1700, 180, 12, 19, this.invX - (1/2 * 12), this.invY - (1/2 * 19), 12, 19);
        }
        else if (this.type == "mindPotionI" || this.type == "mindPotionII" || this.type == "mindPotionIII" || this.type == "mindPotionIV" || this.type == "mindPotionV")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 431, 945, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
        }
        else if (this.type == "utExtract")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 431, 972, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
        }
        else if (this.type == "potionGlass")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 419, 1, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
        }
        else if (this.type == "vialOfWater")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 406, 1, 10, 16, this.invX - (1/2 * 10), this.invY - (1/2 * 16), 10, 16);
        }
        else if (this.type == "walrusLeatherWaterskin" || this.type == "walrusLeatherWaterskinOne" || this.type == "walrusLeatherWaterskinTwo" || this.type == "walrusLeatherWaterskinFull")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 79, 5, 19, 13, this.invX - (1/2 * 19 * 1.5), this.invY - (1/2 * 13 * 1.5), 19 * 1.5, 13 * 1.5);
        }
        else if (this.type == "bucket")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 103, 1, 14, 21, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 21 * 2), 14 * 2, 21 * 2);
        }
        else if (this.type == "bucketOfWater")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 133, 1, 14, 21, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 21 * 2), 14 * 2, 21 * 2);
        }
        else if (this.type == "bucketOfTechiTea")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 3, 36, 13, 20, this.invX - (1/2 * 13 * 2), this.invY - (1/2 * 20 * 2), 13 * 2, 20 * 2);
        }
        else if (this.type == "bucketOfNaapridMilk" || this.type == "bucketOfWaantiMilk")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 118, 1, 14, 21, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 21 * 2), 14 * 2, 21 * 2);
        }
        else if (this.type == "halcifMushroom")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 33, 62, 13, 15, this.invX - (1/2 * 13 * 2), this.invY - (1/2 * 15 * 2), 13 * 2, 15 * 2);
        }
        else if (this.type == "cyrinthilimMushroom")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 53, 27, 10, 14, this.invX - (1/2 * 10 * 2), this.invY - (1/2 * 14 * 2), 10 * 2, 14 * 2);
        }
        else if (this.type == "glinMushrooms")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 5, 1, 18, 18, this.invX - (1/2 * 18 * 2), this.invY - (1/2 * 18 * 2), 18 * 2, 18 * 2);
        }
        else if (this.type == "tepprekliaFungus")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 3011, 70, 14, 16, this.invX - (1/2 * 14), this.invY - (1/2 * 16), 14, 16);
        }
        else if (this.type == "driedCyrinthilimMushroom")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 52, 45, 12, 11, this.invX - (1/2 * 12 * 2), this.invY - (1/2 * 11 * 2), 12 * 2, 11 * 2);
        }
        else if (this.type == "boiledGlinMushrooms")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 56, 1, 18, 18, this.invX - (1/2 * 18 * 2), this.invY - (1/2 * 18 * 2), 18 * 2, 18 * 2);
        }
        else if (this.type == "tylunFlower")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2155, 64, 28, 33, this.invX - (1/2 * 28), this.invY - (1/2 * 33), 28, 33);
        }
        else if (this.type == "stomwikLeaf")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2171, 44, 21, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 16), 21, 16);
        }
        else if (this.type == "culprisLeaf")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2154, 160, 20, 13, this.invX - (1/2 * 20), this.invY - (1/2 * 13), 20, 13);
        }
        else if (this.type == "neprilneBerries")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2148, 516, 15, 16, this.invX - (1/2 * 15), this.invY - (1/2 * 16), 15, 16);
        }
        else if (this.type == "pluttBerries")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2111, 32, 19, 19, this.invX - (1/2 * 19), this.invY - (1/2 * 19), 19, 19);
        }
        else if (this.type == "driedPluttBerries")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 104, 47, 17, 19, this.invX - (1/2 * 17), this.invY - (1/2 * 19), 17, 19);
        }
        else if (this.type == "akerBerries")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2170, 20, 22, 19, this.invX - (1/2 * 22), this.invY - (1/2 * 19), 22, 19);
        }
        else if (this.type == "bequonFruit")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2990, 70, 17, 17, this.invX - (1/2 * 17), this.invY - (1/2 * 17), 17, 17);
        }
        else if (this.type == "luufBerries")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 367, 21, 10, 10, this.invX - (1/2 * 10 * 2.3), this.invY - (1/2 * 10 * 2.3), 10 * 2.3, 10 * 2.3);
        }
        else if (this.type == "wyrLeaf")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 395, 167, 13, 11, this.invX - (1/2 * 13 * 1.5), this.invY - (1/2 * 11 * 1.5), 13 * 1.5, 11 * 1.5);
        }
        else if (this.type == "kellishSawClub")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 645, 466, 17, 55, this.invX - (1/2 * 17), this.invY - (1/2 * 55), 17, 55);
        }
        else if (this.type == "kellishClaymore")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 600, 435, 22, 112, this.invX - (1/2 * 22 * 0.7), this.invY - (1/2 * 112 * 0.7), 22 * 0.7, 112 * 0.7);
        }
        else if (this.type == "gribPelt")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1095, 155, 31, 19, this.invX - (1/2 * 31 * 1.2), this.invY - (1/2 * 19 * 1.2), 31 * 1.2, 19 * 1.2);
        }
        else if (this.type == "rawGribFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1393, 196, 20, 22, this.invX - (1/2 * 20), this.invY - (1/2 * 22), 20, 22);
        }
        else if (this.type == "gribMeat")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1371, 197, 20, 22, this.invX - (1/2 * 20), this.invY - (1/2 * 22), 20, 22);
        }
        else if (this.type == "hammer")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 512, 514, 36, 49, this.invX - (1/2 * 36 / 1.3), this.invY - (1/2 * 49 / 1.3), 36 / 1.3, 49 / 1.3);
        }
        else if (this.type == "warHammer")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 535, 411, 40, 72, this.invX - (1/2 * 40 / 1.3), this.invY - (1/2 * 72 / 1.3), 40 / 1.3, 72 / 1.3);
        }
        else if (this.type == "iceClaymore" || this.type == "leechingTouch")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1859, 36, 22, 27, this.invX - (1/2 * 22), this.invY - (1/2 * 27), 22, 27);
        }
        else if (this.type == "surge" || this.type == "embers" || this.type == "fireballI" || this.type == "electricBolt" || this.type == "flyingColours" || this.type == "iceSpikes" || this.type == "frostWind" || this.type == "repel" || this.type == "lifeTap" || this.type == "drainingI" || this.type == "vivification" || this.type == "chasingLights" || this.type == "fireHands" || this.type == "freezingGrasp" || this.type == "chargedTouch" || this.type == "sorcerer'sRaincoat" || this.type == "shieldingI" || this.type == "shieldingII" || this.type == "shieldingIII" || this.type == "shieldingIV" || this.type == "shieldingV" || this.type == "summonFrich" || this.type == "summonWolf" || this.type == "charm" || this.type == "sanctuary" || this.type == "repellingWard")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1738, 4, 33, 26, this.invX - (1/2 * 33), this.invY - (1/2 * 26), 33, 26);
        }
        else if (this.type == "narthwarpMouth")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1901, 74, 30, 18, this.invX - (1/2 * 30), this.invY - (1/2 * 18), 30 , 18);
        }
        else if (this.type == "lrgNarthwarpMouth")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1901, 74, 30, 18, this.invX - (1/2 * 30 * 2), this.invY - (1/2 * 18 * 2), 30 * 2, 18 * 2);
        }
        else if (this.type == "fermentedNarthwarpMouth")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1844, 64, 37, 32, this.invX - (1/2 * 37), this.invY - (1/2 * 32), 37, 32);
        }
        else if (this.type == "rawBearFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 731, 9, 25, 16, this.invX - (1/2 * 25 * 1.6), this.invY - (1/2 * 16 * 1.6), 25 * 1.6, 16 * 1.6);
        }
        else if (this.type == "bearMeat")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 731, 27, 25, 16, this.invX - (1/2 * 25 * 1.6), this.invY - (1/2 * 16 * 1.6), 25 * 1.6, 16 * 1.6);
        }
        else if (this.type == "rawBearTongue")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 757, 12, 17, 13, this.invX - (1/2 * 17 * 1.35), this.invY - (1/2 * 13 * 1.35), 17 * 1.35, 13 * 1.35);
        }
        else if (this.type == "bearTongue")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 757, 29, 17, 13, this.invX - (1/2 * 17 * 1.35), this.invY - (1/2 * 13 * 1.35), 17 * 1.35, 13 * 1.35);
        }
        else if (this.type == "smlBlackBearPelt")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 558, 18, 53, 30, this.invX - (1/2 * 53), this.invY - (1/2 * 30), 53, 30);
        }
        else if (this.type == "medBlackBearPelt")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 558, 18, 53, 30, this.invX - (1/2 * 53 * 1.25), this.invY - (1/2 * 30 * 1.25), 53 * 1.25, 30 * 1.25);
        }
        else if (this.type == "lrgBlackBearPelt")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 558, 18, 53, 30, this.invX - (1/2 * 53 * 1.65), this.invY - (1/2 * 30 * 1.65), 53 * 1.65, 30 * 1.65);
        }
        else if (this.type == "vardanianHeavyCleaver")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 779, 1, 17, 68, this.invX - (1/2 * 17), this.invY - (1/2 * 68), 17, 68);
        }
        else if (this.type == "shehidOozeSml")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1329, 19, 21, 22, this.invX - (1/2 * 21), this.invY - (1/2 * 22), 21, 22);
        }
        else if (this.type == "shehidOozeLrg")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1329, 19, 21, 22, this.invX - (1/2 * 21 * 2), this.invY - (1/2 * 22 * 2), 21 * 2, 22 * 2);
        }
        else if (this.type == "shehidShellSml")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1358, 19, 25, 24, this.invX - (1/2 * 25), this.invY - (1/2 * 24), 25, 24);
        }
        else if (this.type == "shehidShellLrg")
        {
            LXX.beginPath();
            LXX.drawImage(polypol, 1358, 19, 25, 24, this.invX - (1/2 * 25 * 2), this.invY - (1/2 * 24 * 2), 25 * 2, 24 * 2);
        }
        else if (this.type == "timberAxe")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 294, 330, 29, 45, this.invX - (1/2 * 29 * 1.4), this.invY - (1/2 * 45 * 1.4), 29 * 1.4, 45 * 1.4);
        }
        else if (this.type == "curvedDagger")
        {
            LXX.beginPath();
            LXX.save();
            LXX.translate(this.invX, this.invY);
            LXX.rotate(Math.PI);
            LXX.drawImage(verse, 3538, 605, 10, 30, 0 - (1/2 * 10), 0 - (1/2 * 30), 10, 30);
            LXX.restore();
        }
        else if (this.type == "dualCurvedDaggers")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3552, 605, 16, 30, this.invX - (1/2 * 16), this.invY - (1/2 * 30), 16, 30);
        }
        else if (this.type == "nirineseSpear")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 8, 1511, 13, 79, this.invX - (1/2 * 13), this.invY - (1/2 * 79), 13, 79);
        }
        else if (this.type == "crossbow")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3169, 118, 36, 34, this.invX - (1/2 * 37.8), this.invY - (1/2 * 35.7), 37.8, 35.7);
        }
        else if (this.type == "steelBolt")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3152, 1, 19, 21, this.invX - (1/2 * 22.8), this.invY - (1/2 * 25.2), 22.8, 25.2);
        }
        else if (this.type == "varnFurDress")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 51, 387, 39, 52, this.invX - (1/2 * 60.45  * 0.8), this.invY - (1/2 * 85.6 * 0.8), 62.4 * 0.8, 83.2 * 0.8);
        }
        else if (this.type == "varnFurCloak")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 46, 439, 50, 61, this.invX - (1/2 * 77.5  * 0.8), this.invY - (1/2 * 92.55 * 0.7), 77.5 * 0.8, 92.55 * 0.7);
        }
        else if (this.type == "varnFurClothing")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 91, 380, 50, 61, this.invX - (1/2 * 80  * 0.8), this.invY - (1/2 * 95.6 * 0.7), 80 * 0.8, 95.6 * 0.7);
        }
        else if (this.type == "waantiFurOutfit")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 216, 457, 43, 65, this.invX - (1/2 * 43 * 1.2), this.invY - (1/2 * 65 * 1.2), 43 * 1.2, 65 * 1.2);
        }
        else if (this.type == "frichFurMittens")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 386, 21, 19, 11, this.invX - (1/2 * 19 * 1.4), this.invY - (1/2 * 11 * 1.4), 19 * 1.4, 11 * 1.4);
        }
        else if (this.type == "frichFurClothing")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 258, 316, 37, 60, this.invX - (1/2 * 44.4), this.invY - (1/2 * 72), 44.4, 72);
        }
        else if (this.type == "hetmerArmour")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 150, 309, 52, 66, this.invX - (1/2 * 62.4), this.invY - (1/2 * 79.2), 62.4, 79.2);
        }
        else if (this.type == "vardanianBattleAxe")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 374, 354, 29, 57, this.invX - (1/2 * 37.7), this.invY - (1/2 * 74.1), 37.7, 74.1);
        }
        else if (this.type == "dualVardanianBattleAxe")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 135, 682, 58, 64, this.invX - (1/2 * 58 * 1.4), this.invY - (1/2 * 64 * 1.4), 58 * 1.4, 64 * 1.4);
        }
        else if (this.type == "rawOlkrinFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3143, 290, 31, 29, this.invX - (1/2 * 46.5), this.invY - (1/2 * 43.5), 46.5, 43.5);
        }
        else if (this.type == "olkrinMeat")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3114, 290, 31, 29, this.invX - (1/2 * 46.5), this.invY - (1/2 * 43.5), 46.5, 43.5);
        }
        else if (this.type == "olkrinSkull")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3033, 290, 49, 36, this.invX - (1/2 * 73.5), this.invY - (1/2 * 54), 73.5, 54);
        }
        else if (this.type == "olkrinHorn")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3087, 287, 26, 34, this.invX - (1/2 * 52), this.invY - (1/2 * 68), 52, 68);
        }
        else if (this.type == "goliathOlkrinSkull")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3033, 290, 49, 36, this.invX - (1/2 * 73.5), this.invY - (1/2 * 54), 73.5, 54);
        }
        else if (this.type == "olkrinArm")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3175, 287, 67, 36, this.invX - (1/2 * 73.7), this.invY - (1/2 * 53.4), 73.7, 53.4);
        }
        else if (this.type == "olkrinMeat")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3114, 290, 31, 29, this.invX - (1/2 * 46.5), this.invY - (1/2 * 43.5), 46.5, 43.5);
        }
        else if (this.type == "vardanianCleaver")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 250, 359, 14, 54, this.invX - (1/2 * 17.5), this.invY - (1/2 * 67.5), 17.5, 67.5);
        }
        else if (this.type == "hyelingCleaver")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 134, 3, 29, 33, this.invX - (1/2 * 29 * 1.6), this.invY - (1/2 * 33 * 1.6), 29 * 1.6, 33 * 1.6);
        }
        else if (this.type == "rawVarnFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3099, 1, 18, 15, this.invX - (1/2 * 27), this.invY - (1/2 * 22.5), 27, 22.5);
        }
        else if (this.type == "varnMeat")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3115, 1, 18, 15, this.invX - (1/2 * 27), this.invY - (1/2 * 22.5), 27, 22.5);
        }
        else if (this.type == "varnPelt")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2994, 291, 27, 15, this.invX - (1/2 * 40.5), this.invY - (1/2 * 22.5), 40.5, 22.5);
        }
        else if (this.type == "fireStarter")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2922, 136, 14, 11, this.invX - (1/2 * 21), this.invY - (1/2 * 16.5), 21, 16.5);
        }
        else if (this.type == "wood")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2917, 174, 23, 23, this.invX - (1/2 * 34.5), this.invY - (1/2 * 34.5), 34.5, 34.5);
            LXX.drawImage(verse, 2917, 174, 23, 23, this.invX - (1/2 * 34.5), this.invY - (1/2 * 34.5), 34.5, 34.5);
        }
        else if (this.type == "katana")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 168, 364, 16, 55, this.invX - (1/2 * 22.5), this.invY - (1/2 * 70), 22.5, 75.5);
        }
        else if (this.type == "winterWolfOutfit")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3126, 156, 40, 50, this.invX - (1/2 * 48), this.invY - (1/2 * 60), 48, 60);
        }
        else if (this.type == "winterWolfClothing")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3223, 157, 40, 50, this.invX - (1/2 * 48), this.invY - (1/2 * 60), 48, 60);
        }
        else if (this.type == "freydicRoyalOutfit")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2959, 151, 41, 60, this.invX - (1/2 * 52.4), this.invY - (1/2 * 78), 52.4, 78);
        }
        else if (this.type == "fineFreydicOutfitF")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 294, 298, 42, 65, this.invX - (1/2 * 42 * 1.1), this.invY - (1/2 * 65 * 1.1), 42 * 1.1, 65 * 1.1);
        }
        else if (this.type == "fineFreydicOutfitM")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 286, 527, 41, 77, this.invX - (1/2 * 41 * 1), this.invY - (1/2 * 77 * 1), 41 * 1, 77 * 1);
        }
        else if (this.type == "naapridLeatherArmour")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3171, 59, 34, 57, this.invX - (1/2 * 44.2), this.invY - (1/2 * 71.1), 44.2, 71.1);
        }
        else if (this.type == "freydicRoyalDress")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3049, 148, 30, 47, this.invX - (1/2 * 45), this.invY - (1/2 * 70.5), 45, 70.5);
        }
        else if (this.type == "winterWolfDress")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3012, 147, 30, 47, this.invX - (1/2 * 45), this.invY - (1/2 * 70.5), 45, 70.5);
        }
        else if (this.type == "rawYoungNaapridFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3133, 10, 15, 9.5, this.invX - (1/2 * 27), this.invY - (1/2 * 17.1), 27, 17.1);
        }
        else if (this.type == "youngNaapridMeat")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3133, 1, 15, 9.5, this.invX - (1/2 * 27), this.invY - (1/2 * 17.1), 27, 17.1);
        }
        else if (this.type == "rawNaapridFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2970, 1, 22, 20, this.invX - (1/2 * 38.5), this.invY - (1/2 * 35), 38.5, 35);
        }
        else if (this.type == "naapridMeat")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2995, 1, 22, 20, this.invX - (1/2 * 38.5), this.invY - (1/2 * 35), 38.5, 35);
        }
        else if (this.type == "naapridPelt")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2924, 1, 26, 16, this.invX - (1/2 * 65), this.invY - (1/2 * 40), 65, 40);
        }
        else if (this.type == "naapridHorn")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2951, 1, 15, 14, this.invX - (1/2 * 31.5), this.invY - (1/2 * 29.4), 31.5, 29.4);
        }
        else if (this.type == "thenganSwordAndShield")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 3515, 140, 48, 40, this.invX - (1/2 * 61.2), this.invY - (1/2 * 48), 61.2, 48);
        }
        else if (this.type == "rawTrollsBlood")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 452, 33, 8, 14, this.invX - (1/2 * 12), this.invY - (1/2 * 21), 12, 21);
        }
        else if (this.type == "jarOfOil")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 97, 3, 10, 15, this.invX - (1/2 * 15), this.invY - (1/2 * 21.5), 15, 21.5);
        }
        else if (this.type == "glassJar")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 465, 33, 8, 14, this.invX - (1/2 * 12), this.invY - (1/2 * 21), 12, 21);
        }
        else if (this.type == "chainArmour")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 38, 310, 40, 61, this.invX - (1/2 * 40), this.invY - (1/2 * 61), 40, 61);
        }
        else if (this.type == "blackChainArmour")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 80, 310, 40, 61, this.invX - (1/2 * 40), this.invY - (1/2 * 61), 40, 61);
        }
        else if (this.type == "freydicGreatSword")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 126, 302, 16, 70, this.invX - (1/2 * 16), this.invY - (1/2 * 70), 16, 70);
        }
        else if (this.type == "theNorthernGem")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 257, 436, 24, 73, this.invX - (1/2 * 24), this.invY - (1/2 * 73), 24, 73);
        }
        else if (this.type == "hugeBogTrollSkull")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 67.5), this.invY - (1/2 * 54), 67.5, 54);
        }
        else if (this.type == "bogTrollSkull")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 45), this.invY - (1/2 * 36), 49.5, 39.6);
        }
        else if (this.type == "babyBogTrollSkull")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 22.5), this.invY - (1/2 * 18), 22.5, 18);
        }
        else if (this.type == "trollFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2875, 1, 19, 18, this.invX - (1/2 * 38), this.invY - (1/2 * 36), 38, 36);
        }
        else if (this.type == "trollMeat")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2900, 1, 19, 18, this.invX - (1/2 * 38), this.invY - (1/2 * 36), 38, 36);
        }
        else if (this.type == "aldrekiiArrow")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2832, 3, 41, 12, this.invX - (1/2 * 32), this.invY - (1/2 * 12), 32, 12);
        }
        else if (this.type == "rawWolfLiver")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2769, 2, 10, 15, this.invX - (1/2 * 15), this.invY - (1/2 * 22.5), 15, 22.5);
        }
        else if (this.type == "wolfLiver")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2782, 2, 10, 15, this.invX - (1/2 * 15), this.invY - (1/2 * 22.5), 15, 22.5);
        }
        else if (this.type == "winterWolfMeat")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2812, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
        }
        else if (this.type == "rawWinterWolfFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2794, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
        }
        else if (this.type == "winterWolfPelt")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2737, 2, 26, 16, this.invX - (1/2 * 34.8), this.invY - (1/2 * 19.2), 34.8, 19.2);
        }
        else if (this.type == "massiveWinterWolfPelt")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 2737, 2, 29, 16, this.invX - (1/2 * 58), this.invY - (1/2 * 32), 58, 32);
        }
        else if (this.type == "greyWolfMeat")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2812, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
        }
        else if (this.type == "rawGreyWolfFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2794, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
        }
        else if (this.type == "greyWolfPelt")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2737, 2, 26, 16, this.invX - (1/2 * 34.8), this.invY - (1/2 * 19.2), 34.8, 19.2);
        }
        else if (this.type == "massiveGreyWolfPelt")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2737, 2, 29, 16, this.invX - (1/2 * 58), this.invY - (1/2 * 32), 58, 32);
        }
        else if (this.type == "energyPotionI")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 38, 267, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
        }
        else if (this.type == "speedPotionI")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 86, 134, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
        }
        else if (this.type == "cleansingPotion")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 35, 134, 11, 19, this.invX - (1/2 * 11), this.invY - (1/2 * 19), 11, 19);
        }
        else if (this.type == "freydicSword")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2089, 2, 13, 46, this.invX - (1/2 * 16.25), this.invY - (1/2 * 57.5), 16.25, 57.5);
        }
        else if (this.type == "kellishSword")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 70, 1, 15, 49, this.invX - (1/2 * 15 * 1.3), this.invY - (1/2 * 49 * 1.3), 15 * 1.3, 49 * 1.3);
        }
        else if (this.type == "pickaxe")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 103, 233, 22, 26, this.invX - (1/2 * 33), this.invY - (1/2 * 39), 33, 39);
        }
        else if (this.type == "aldrekiiBlade")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2057, 4, 20, 45, this.invX - (1/2 * 24), this.invY - (1/2 * 54), 24, 54);
        }
        else if (this.type == "aldrekiiClaws")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 268, 214, 22, 23, this.invX - (1/2 * 22 * 2), this.invY - (1/2 * 23 * 2), 22 * 2, 23 * 2);
        }
        else if (this.type == "flail")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1995, 1, 37, 33, this.invX - (1/2 * 37), this.invY - (1/2 * 33), 37, 33);
        }
        else if (this.type == "torperVenomSac")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 40, 226, 17, 16, this.invX - (1/2 * 17), this.invY - (1/2 * 16), 17, 16);
        }
        else if (this.type == "torperFuzz")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1867, 9, 23, 20, this.invX - (1/2 * 23), this.invY - (1/2 * 20), 23, 20);
        }
        else if (this.type == "rawTorperFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1894, 3, 18, 11, this.invX - (1/2 * 18), this.invY - (1/2 * 11), 18, 11);
        }
        else if (this.type == "torperMeat")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1895, 16, 18, 11, this.invX - (1/2 * 18), this.invY - (1/2 * 11), 18, 11);
        }
        else if (this.type == "gulfreyShellArmour")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1, 157, 36, 63, this.invX - (1/2 * 36) + 2, this.invY - (1/2 * 63), 28.4, 59.6);
        }
        else if (this.type == "grewbleEgg")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 9, 29, 12, 12, this.invX - (1/2 * 12 * 2), this.invY - (1/2 * 12 * 2), 12 * 2, 12 * 2);
        }
        else if (this.type == "grewbleGuts")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 30, 1, 21, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 16), 21, 16);
        }
        else if (this.type == "lorkWeed")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 106, 173, 20, 17, this.invX - (1/2 * 20 * 2), this.invY - (1/2 * 17 * 2), 20 * 2, 17 * 2);
        }
        else if (this.type == "sesreStamen")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 263, 110, 10, 16, this.invX - (1/2 * 10 * 2), this.invY - (1/2 * 16 * 2), 10 * 2, 16 * 2);
        }
        else if (this.type == "sesreLeaf")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 282, 113, 15, 13, this.invX - (1/2 * 15 * 2), this.invY - (1/2 * 13 * 2), 15 * 2, 13 * 2);
        }
        else if (this.type == "frichPelt")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 1832, 10, 31, 18, this.invX - (1/2 * 31), this.invY - (1/2 * 18), 31, 18);
        }
        else if (this.type == "mountainFrichPelt")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 1832, 10, 31, 18, this.invX - (1/2 * 31 * 1.5), this.invY - (1/2 * 18 * 1.5), 31 * 1.5, 18 * 1.5);
        }
        else if (this.type == "rawFrichFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 65, 226, 10, 12, this.invX - (1/2 * 20), this.invY - (1/2 * 24), 20, 24);
        }
        else if (this.type == "frichMeat")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 79, 227, 10, 12, this.invX - (1/2 * 20), this.invY - (1/2 * 24), 20, 24);
        }
        else if (this.type == "waantiPelt")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 155, 62, 20, 27, this.invX - (1/2 * 20 * 1.6), this.invY - (1/2 * 27 * 1.6), 20 * 1.6, 27 * 1.6);
        }
        else if (this.type == "rawWaantiFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 128, 95, 14, 19, this.invX - (1/2 * 14 * 1.6), this.invY - (1/2 * 19 * 1.6), 14 * 1.6, 19 * 1.6);
        }
        else if (this.type == "waantiMeat")
        {
            LXX.beginPath();
            LXX.drawImage(furr, 109, 95, 14, 19, this.invX - (1/2 * 14 * 1.6), this.invY - (1/2 * 19 * 1.6), 14 * 1.6, 19 * 1.6);
        }
        else if (this.type == "rawUtFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 233, 960, 29, 24, this.invX - (1/2 * 29 * 1.25), this.invY - (1/2 * 24 * 1.25), 29 * 1.25, 24 * 1.25);
        }
        else if (this.type == "utMeat")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 277, 962, 29, 24, this.invX - (1/2 * 29 * 1.25), this.invY - (1/2 * 24 * 1.25), 29 * 1.25, 24 * 1.25);
        }
        else if (this.type == "fermentedUtTentacle")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 375, 950, 32, 36, this.invX - (1/2 * 32 * 1.25), this.invY - (1/2 * 36 * 1.25), 32 * 1.25, 36 * 1.25);
        }
        else if (this.type == "utTentacle")
        {
            LXX.beginPath();
            LXX.drawImage(freeverse, 318, 958, 43, 23, this.invX - (1/2 * 43 * 1.25), this.invY - (1/2 * 23 * 1.25), 43 * 1.25, 23 * 1.25);
        }
        else if (this.type == "rawMountainFrichFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 65, 226, 10, 12, this.invX - (1/2 * 20 * 2), this.invY - (1/2 * 24 * 2), 20 * 2, 24 * 2);
        }
        else if (this.type == "mountainFrichMeat")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 79, 227, 10, 12, this.invX - (1/2 * 20 * 2), this.invY - (1/2 * 24 * 2), 20 * 2, 24 * 2);
        }
        else if (this.type == "vardanianAxe")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 53, 158, 37, 22, this.invX - (1/2 * 33.3), this.invY - (1/2 * 19.8), 33.3, 19.8);
        }
        else if (this.type == "vardanianAxeDual")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 48, 187, 31, 35, this.invX - (1/2 * 27.9), this.invY - (1/2 * 31.5), 27.9, 31.5);
        }
        else if (this.type == "freydicSpear")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 4, 227, 20, 75, this.invX - (1/2 * 17.5), this.invY - (1/2 * 56.75), 17.5, 56.75);
        }
        else if (this.type == "gulfreyShell")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 48, 41, 31, 23, this.invX - (1/2 * 31), this.invY - (1/2 * 23), 31, 23);
        }
        else if (this.type == "gulfreyMandibles")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 2, 92, 33, 33, this.invX - (1/2 * 26.6), this.invY - (1/2 * 26.6), 26.6, 26.6);
        }
        else if (this.type == "rawGulfreyFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 37, 9, 20, 20, this.invX - (1/2 * 20), this.invY - (1/2 * 20), 20, 20);
        }
        else if (this.type == "gulfreyMeat")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 66, 9, 20, 20, this.invX - (1/2 * 20), this.invY - (1/2 * 20), 20, 20);
        }
        else if (this.type == "mudflyMeat")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 209, 89, 14, 12, this.invX - (1/2 * 14) * 2, this.invY - (1/2 * 12) * 2, 14 * 2, 12 * 2);
        }
        else if (this.type == "rawMudflyFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 209, 77, 14, 12, this.invX - (1/2 * 14) * 2, this.invY - (1/2 * 12) * 2, 14 * 2, 12 * 2);
        }
        else if (this.type == "mudflyMold")
        {
            LXX.beginPath();
            LXX.drawImage(lodo, 209, 65, 14, 12, this.invX - (1 / 2 * 14) * 2, this.invY - (1 / 2 * 12) * 2, 14 * 2, 12 * 2);
        }
        else if (this.type == "vomit")
        {
            LXX.beginPath();
            LXX.drawImage(oldverse, 55, 135, 24, 21, this.invX - (1/2 * 24), this.invY - (1/2 * 21), 24, 21);
        }
        else if (this.type == "gojiiBerries")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 615, 3, 19, 15, this.invX - (1/2 * 38), this.invY - (1/2 * 30), 38, 30);
        }
        else if (this.type == "nirineseSabre")
        {
            LXX.beginPath();
            LXX.drawImage(verse, 7, 7, 26, 80, this.invX - (1/2 * 19.5), this.invY - (1/2 * 60), 19.5, 60);
        }
        else if (this.type == "freezingArrow")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 66, 73, 22, 9, this.invX - (1/2 * 44), this.invY - (1/2 * 18), 44, 18);
        }
        else if (this.type == "fireArrow")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 66, 80, 22, 9, this.invX - (1/2 * 44), this.invY - (1/2 * 18), 44, 18);
        }
        else if (this.type == "lifeLeachArrow")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 65, 88, 22, 9, this.invX - (1/2 * 44), this.invY - (1/2 * 18), 44, 18);
        }
        else if (this.type == "oiledArrow")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 67, 57, 19, 7, this.invX - (1/2 * 38), this.invY - (1/2 * 14), 38, 14);
        }
        else if (this.type == "shehidToxinArrow")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 66, 21, 22, 9, this.invX - (1/2 * 44), this.invY - (1/2 * 18), 44, 18);
        }
        else if (this.type == "steelArrow")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 182, 104, 23, 9, this.invX - (1/2 * 46), this.invY - (1/2 * 18), 46, 18);
        }
        else if (this.type == "arrow")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 432, 554, 20, 8, this.invX - (1/2 * 40), this.invY - (1/2 * 16), 40, 16);
        }
        else if (this.type == "ogoFruit")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 426, 4, 12, 15, this.invX - (1/2 * 24), this.invY - (1/2 * 30), 24, 30);
        }
        else if (this.type == "blueBlade")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 8, 531, 57, 63, this.invX - (1/2 * 51.3), this.invY - (1/2 * 56.7), 51.3, 56.7);
        }
        else if (this.type == "berulnSkull")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 446, 3, 15, 20, this.invX - (1/2 * 22.5), this.invY - (1/2 * 30), 22.5, 30);
        }
        else if (this.type == "rawBerulnFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 526, 6, 21, 23, this.invX - (1/2 * 31.5), this.invY - (1/2 * 34.5), 31.5, 34.5);
        }
        else if (this.type == "berulnMeat")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 506, 38, 21, 23, this.invX - (1/2 * 31.5), this.invY - (1/2 * 34.5), 31.5, 34.5);
        }
        else if (this.type == "bigBerulnPelt")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 465, 1, 51, 30, this.invX - (1/2 * 76.5), this.invY - (1/2 * 45), 76.5, 45);
        }
        else if (this.type == "berulnPelt")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 465, 1, 51, 30, this.invX - (1/2 * 66.3), this.invY - (1/2 * 39), 66.3, 39);
        }
        else if (this.type == "longbow")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 380, 593, 34, 34, this.invX - (1/2 * 51), this.invY - (1/2 * 51), 51, 51);
        }
        else if (this.type == "walrusLeatherArmour")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 734, 202, 52, 58, this.invX - (1/2 * 52), this.invY - (1/2 * 58), 52, 58);
        }
        else if (this.type == "skinAndBones")
        {
            LXX.beginPath();
            LXX.drawImage(polpol, 105, 172, 30, 40, this.invX - (1/2 * 45), this.invY - (1/2 * 60), 45, 60);
            LXX.drawImage(polpol, 105, 172, 30, 40, this.invX - (1/2 * 45), this.invY - (1/2 * 60), 45, 60);
        }
        else if (this.type == "balgurMercArmour")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 4, 105, 39, 70, this.invX - (1/2 * 39), this.invY - (1/2 * 70), 39, 70);
        }
        else if (this.type == "balgurCaptainArmour")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 97, 108, 39, 70, this.invX - (1/2 * 39), this.invY - (1/2 * 70), 39, 70);
        }
        else if (this.type == "rawWalrusFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 99, 4, 17, 20, this.invX - (1/2 * 26.5), this.invY - (1/2 * 30), 26.5, 30);
        }
        else if (this.type == "aldrekiiBardiche")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 580, 253, 42, 137, this.invX - (1/2 * 21), this.invY - (1/2 * 68.5), 21, 68.5);
        }
        else if (this.type == "walrusMeat")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 257, 1, 17, 20, this.invX - (1/2 * 26.5), this.invY - (1/2 * 30), 26.5, 30);
        }
        else if (this.type == "walrusHide")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 287, 3, 45, 22, this.invX - (1/2 * 45), this.invY - (1/2 * 22), 45, 22);
        }
        else if (this.type == "elderWalrusHide")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 287, 3, 45, 22, this.invX - (1/2 * 90) + 7, this.invY - (1/2 * 44) + 4, 77.5, 33);
        }
        else if (this.type == "blubber")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 368, 9, 12, 13, this.invX - (1/2 * 24), this.invY - (1/2 * 26), 24, 26);
        }
        else if (this.type == "walrusTusks")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 341, 10, 17, 13, this.invX - (1/2 * 42.5), this.invY - (1/2 * 32.5), 42.5, 32.5);
        }
        else if (this.type == "elderWalrusTusks")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 341, 10, 17, 13, this.invX - (1/2 * 68), this.invY - (1/2 * 52), 68, 52);
        }
        else if (this.type == "mace")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 554, 10, 61, 36, this.invX - (1/2 * 61), this.invY - (1/2 * 38), 61, 36);
        }
        else if (this.type == "lightningCorseque")
        {
            LXX.beginPath();
            LXX.drawImage(mofu, 247, 54, 33, 77, this.invX - (1/2 * 33), this.invY - (1/2 * 77), 33, 77);
        }
        else if (this.type == "longSpikedMorningStar")
        {
            LXX.beginPath();
            LXX.drawImage(poly, 151, 128, 39, 39, this.invX - (1/2 * 39 * 1.15), this.invY - (1/2 * 39 * 1.15), 39 * 1.15, 39 * 1.15);
        }
        else if (this.type == "longsword")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 75, 366, 17, 47, this.invX - (1/2 * 25.5), this.invY - (1/2 * 70.5) - 3, 25.5, 70.5);
        }
        else if (this.type == "rawEtyrFlesh")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 43, 684, 16, 13, this.invX - (1/2 * 32), this.invY - (1/2 * 26), 32, 26);
        }
        else if (this.type == "freydicWarAxe")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 17, 115, 113, 104, this.invX - (1/2 * 90.4), this.invY - (1/2 * 83.2) + 4, 90.4, 83.2);
        }
        else if (this.type == "etyrMeat")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 73, 684, 16, 13, this.invX - (1/2 * 32), this.invY - (1/2 * 26), 32, 26);
        }
        else if (this.type == "etyrHide")
        {
            LXX.beginPath();
            LXX.drawImage(theCrack, 37, 720, 25, 18, this.invX - (1/2 * 50), this.invY - (1/2 * 36), 50, 36);
        }
        else if (this.type == "trollsBlood")
        {
            LXX.beginPath();
            LXX.drawImage(polyPNG, 385, 7, 11, 15, this.invX - (1/2 * 16.5), this.invY - (1/2 * 22.5), 16.5, 22.5);
        }
        else if (this.type == "yaihefBerries")
            {
                LXX.beginPath();
                LXX.drawImage(theCrack, 62, 508, 16, 16, this.invX - (1/2 * 32), this.invY - (1/2 * 32), 32, 32);
            }
    };

    this.drawShopCraftItem = function(type, invX, invY)
    {
        this.invX = invX;
        this.invY = invY;
        this.type = type;

        if (this.type == "coins")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 405, 4, 16, 17, this.invX - (1/2 * 32), this.invY - (1/2 * 34), 32, 34);
        }
        else if (this.type == "unitMarker")
        {
            XXX.beginPath();
            XXX.fillStyle = "gold";
            XXX.arc(this.invX, this.invY, 15, 0, Math.PI * 2);
            XXX.fill();
        }
        else if (this.type == "plantMarker")
        {
            XXX.beginPath();
            XXX.fillStyle = "turquoise";
            XXX.arc(this.invX, this.invY, 15, 0, Math.PI * 2);
            XXX.fill();
        }
        else if (this.type == "haeflower")
        {
            XXX.beginPath();
            XXX.drawImage(zapa, 19, 274, 32, 46, this.invX - (1/2 * 32 * 0.9), this.invY - (1/2 * 46 * 0.9), 32 * 0.9, 46 * 0.9);
        }
        else if (this.type == "haeflowerPollen")
        {
            XXX.beginPath();
            XXX.drawImage(zapa, 275, 215, 29, 25, this.invX - (1/2 * 29 * 0.4), this.invY - (1/2 * 25 * 0.4), 29 * 0.4, 25 * 0.4);
        }
        else if (this.type == "stone")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1698, 528, 29, 27, this.invX - (1/2 * 29), this.invY - (1/2 * 27), 29, 27);
        }
        else if (this.type == "darkStone")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1666, 466, 25, 24, this.invX - (1/2 * 25), this.invY - (1/2 * 24), 25, 24);
        }
        else if (this.type == "ruby")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1440, 527, 25, 26, this.invX - (1/2 * 25 * 0.3), this.invY - (1/2 * 26 * 0.3), 25 * 0.3, 26 * 0.3);
        }
        else if (this.type == "coal")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1531, 529, 29, 27, this.invX - (1/2 * 29), this.invY - (1/2 * 27), 29, 27);
        }
        else if (this.type == "ironOre")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1761, 464, 38, 26, this.invX - (1/2 * 38), this.invY - (1/2 * 26), 38, 26);
        }
        else if (this.type == "rawSilver")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1471, 524, 27, 35, this.invX - (1/2 * 27), this.invY - (1/2 * 35), 27, 35);
        }
        else if (this.type == "rawGold")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1211, 522, 27, 35, this.invX - (1/2 * 27), this.invY - (1/2 * 35), 27, 35);
        }
        else if (this.type == "silver")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1359, 562, 29, 18, this.invX - (1/2 * 29), this.invY - (1/2 * 18), 29, 18);
        }
        else if (this.type == "gold")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1323, 562, 29, 18, this.invX - (1/2 * 29), this.invY - (1/2 * 18), 29, 18);
        }
        else if (this.type == "jvostranOre")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1623, 528, 29, 27, this.invX - (1/2 * 29), this.invY - (1/2 * 27), 29, 27);
        }
        else if (this.type == "pureJvostranOre")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1328, 524, 35, 33, this.invX - (1/2 * 35 * 0.8), this.invY - (1/2 * 33 * 0.8), 35 * 0.8, 33 * 0.8);
        }
        else if (this.type == "jvostran")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1285, 563, 30, 17, this.invX - (1/2 * 30), this.invY - (1/2 * 17), 30, 17);
        }
        else if (this.type == "twiceForgedSteel")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1427, 561, 30, 20, this.invX - (1/2 * 30), this.invY - (1/2 * 20), 30, 20);
        }
        else if (this.type == "thriceForgedSteel")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1393, 561, 30, 20, this.invX - (1/2 * 30), this.invY - (1/2 * 20), 30, 20);
        }
        else if (this.type == "svehnsShipment" || this.type == "svehnsLoot")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 104, 213, 36, 37, this.invX - (1/2 * 36 * 1.4), this.invY - (1/2 * 37 * 1.4), 36 * 1.4, 37 * 1.4);
        }
        else if (this.type == "svehnsLootEmpty")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 95, 260, 51, 42, this.invX - (1/2 * 51 * 1.4), this.invY - (1/2 * 42 * 1.4), 51 * 1.4, 42 * 1.4);
        }
        else if (this.type == "cero")
        {
            XXX.beginPath();
            XXX.drawImage(zer0, 344, 8, 20, 50, this.invX - (1/2 * 20 * 1.5 + 4), this.invY - (1/2 * 50 * 1.5), 20 * 1.5, 50 * 1.5);
        }
        else if (this.type == "rawTunskFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 130, 6, 10, 9, this.invX - (1/2 * 10 * 1.85), this.invY - (1/2 * 9 * 1.85), 10 * 1.85, 9 * 1.85);
        }
        else if (this.type == "tunskMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 130, 15, 10, 9, this.invX - (1/2 * 10 * 1.85), this.invY - (1/2 * 9 * 1.85), 10 * 1.85, 9 * 1.85);
        }
        else if (this.type == "anterInnards")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 77, 371, 11, 10, this.invX - (1/2 * 11 * 1.5), this.invY - (1/2 * 10 * 1.5), 11 * 1.5, 10 * 1.5);
        }
        else if (this.type == "anterAcid")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 93, 371, 11, 10, this.invX - (1/2 * 11 * 1.5), this.invY - (1/2 * 10 * 1.5), 11 * 1.5, 10 * 1.5);
        }
        else if (this.type == "anterShell")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 75, 530, 24, 16, this.invX - (1/2 * 24 * 1.6), this.invY - (1/2 * 16 * 1.6), 24 * 1.6, 16 * 1.6);
        }
        else if (this.type == "anterMandibles")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 77, 548, 20, 24, this.invX - (1/2 * 20 * 1.5), this.invY - (1/2 * 24 * 1.5), 20 * 1.5, 24 * 1.5);
        }
        else if (this.type == "anterShellArmour")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 70, 389, 34, 52, this.invX - (1/2 * 34 * 1.5), this.invY - (1/2 * 52 * 1.5), 34 * 1.5, 52 * 1.5);
        }
        else if (this.type == "smlGlutidOoze")
        {
            var sizeMult = 1;

            XXX.beginPath();
            XXX.drawImage(theCrack, 313, 268, 40, 37, this.invX - (1/2 * 40 * sizeMult), this.invY - (1/2 * 37 * sizeMult), 40 * sizeMult, 37 * sizeMult);
        }
        else if (this.type == "medGlutidOoze")
        {
            var sizeMult = 1.5;

            XXX.beginPath();
            XXX.drawImage(theCrack, 313, 268, 40, 37, this.invX - (1/2 * 40 * sizeMult), this.invY - (1/2 * 37 * sizeMult), 40 * sizeMult, 37 * sizeMult);
        }
        else if (this.type == "lrgGlutidOoze")
        {
            var sizeMult = 2;

            XXX.beginPath();
            XXX.drawImage(theCrack, 313, 268, 40, 37, this.invX - (1/2 * 40 * sizeMult), this.invY - (1/2 * 37 * sizeMult), 40 * sizeMult, 37 * sizeMult);
        }
        else if (this.type == "smlOolidOozeRemains")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 94, 171, 37, 35, this.invX - (1/2 * 37), this.invY - (1/2 * 35), 37, 35);
        }
        else if (this.type == "medOolidOozeRemains")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 94, 171, 37, 35, this.invX - (1/2 * 37 * 1.5), this.invY - (1/2 * 35 * 1.5), 37 * 1.5, 35 * 1.5);
        }
        else if (this.type == "lrgOolidOozeRemains")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 94, 171, 37, 35, this.invX - (1/2 * 37 * 2), this.invY - (1/2 * 35 * 2), 37 * 2, 35 * 2);
        }
        else if (this.type == "rawTilkFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 950, 236, 27, 21, this.invX - (1/2 * 27), this.invY - (1/2 * 21), 27, 21);
        }
        else if (this.type == "tilkMeat")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 918, 236, 27, 21, this.invX - (1/2 * 27), this.invY - (1/2 * 21), 27, 21);
        }
        else if (this.type == "tilkTentacle")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 982, 238, 27, 21, this.invX - (1/2 * 27), this.invY - (1/2 * 21), 27, 21);
        }
        else if (this.type == "lrgTilkTentacle")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 982, 238, 27, 21, this.invX - (1/2 * 27 * 1.4), this.invY - (1/2 * 21 * 1.4), 27 * 1.4, 21 * 1.4);
        }
        else if (this.type == "giantTilkTentacle")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 982, 238, 27, 21, this.invX - (1/2 * 27 * 3), this.invY - (1/2 * 21 * 3), 27 * 3, 21 * 3);
        }
        else if (this.type == "wegRoot")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 255, 58, 14, 19, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 19 * 2), 14 * 2, 19 * 2);
        }
        else if (this.type == "roastedWegRoot")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 280, 83, 14, 19, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 19 * 2), 14 * 2, 19 * 2);
        }
        else if (this.type == "roastedWegRootChunks")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 278, 60, 17, 12, this.invX - (1/2 * 17 * 2), this.invY - (1/2 * 12 * 2), 17 * 2, 12 * 2);
        }
        else if (this.type == "palntRoot")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 205, 473, 10, 15, this.invX - (1/2 * 10 * 1.4), this.invY - (1/2 * 15 * 1.4), 10 * 1.4, 15 * 1.4);
        }
        else if (this.type == "boiledPalntRoot")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 206, 478, 9, 9, this.invX - (1/2 * 9 * 1.5), this.invY - (1/2 * 9 * 1.5), 9 * 1.5, 9 * 1.5);
        }
        else if (this.type == "palntFlower")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 185, 472, 9, 8, this.invX - (1/2 * 9 * 1.35), this.invY - (1/2 * 8 * 1.35), 9 * 1.35, 8 * 1.35);
        }
        else if (this.type == "vardanianClub")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 319, 453, 12, 38, this.invX - (1/2 * 12 * 1.4), this.invY - (1/2 * 38 * 1.4), 12 * 1.4, 38 * 1.4);
        }
        else if (this.type == "swampWalkerArmour")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 18, 581, 35, 65, this.invX - (1/2 * 35 * 1.1), this.invY - (1/2 * 65 * 1.1), 35 * 1.1, 65 * 1.1);
        }
        else if (this.type == "thenganPlateArmour")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 72, 581, 35, 65, this.invX - (1/2 * 35 * 1.1), this.invY - (1/2 * 65 * 1.1), 35 * 1.1, 65 * 1.1);
        }
        else if (this.type == "wightbloomBerries")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 197, 528, 18, 17, this.invX - (1/2 * 18 * 1.5), this.invY - (1/2 * 17 * 1.5), 18 * 1.5, 17 * 1.5);
        }
        else if (this.type == "ishBranch")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 865, 550, 18, 21, this.invX - (1/2 * 18), this.invY - (1/2 * 21), 18, 21);
        }
        else if (this.type == "itlinBranch")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 477, 103, 12, 10, this.invX - (1/2 * 12 * 2), this.invY - (1/2 * 10 * 2), 12 * 2, 10 * 2);
        }
        else if (this.type == "butterMellowFlower")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 256, 39, 14, 16, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 16 * 2), 14 * 2, 16 * 2);
        }
        else if (this.type == "mufBall")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 267, 19, 7, 7, this.invX - (1/2 * 7 * 2), this.invY - (1/2 * 7 * 2), 7 * 2, 7 * 2);
        }
        else if (this.type == "mufFiber")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 335, 23, 15, 12, this.invX - (1/2 * 15 * 2), this.invY - (1/2 * 12 * 2), 15 * 2, 12 * 2);
        }
        else if (this.type == "mufCloth")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 315, 10, 11, 13, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 13 * 2), 11 * 2, 13 * 2);
        }
        else if (this.type == "tenicFlower")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 295, 23, 14, 14, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 14 * 2), 14 * 2, 14 * 2);
        }
        else if (this.type == "tenicLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 279, 24, 14, 14, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 14 * 2), 14 * 2, 14 * 2);
        }
        else if (this.type == "tenicPaste")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 302, 24, 4, 6, this.invX - (1/2 * 4 * 2.35), this.invY - (1/2 * 6 * 2.25), 4 * 2.35, 6 * 2.25);
        }
        else if (this.type == "ardilFurClothing")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 49, 299, 30, 42, this.invX - (1/2 * 30 * 1.65), this.invY - (1/2 * 42 * 1.65), 30 * 1.65, 42 * 1.65);
        }
        else if (this.type == "ardilFurSkirt")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 48, 256, 30, 42, this.invX - (1/2 * 30 * 1.65), this.invY - (1/2 * 42 * 1.65), 30 * 1.65, 42 * 1.65);
        }
        else if (this.type == "ardilFurGloves")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 58, 233, 15, 17, this.invX - (1/2 * 15 * 1.65), this.invY - (1/2 * 17 * 1.65), 15 * 1.65, 17 * 1.65);
        }
        else if (this.type == "mofuTribalWear")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 4, 137, 38, 60, this.invX - (1/2 * 38 * 1.15), this.invY - (1/2 * 60 * 1.15), 38 * 1.15, 60 * 1.15);
        }
        else if (this.type == "mofuRunnerOutfit")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 50, 137, 37, 60, this.invX - (1/2 * 37 * 1.15), this.invY - (1/2 * 60 * 1.15), 37 * 1.15, 60 * 1.15);
        }
        else if (this.type == "mofuMatriarchHeaddress")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 5, 43, 35, 67, this.invX - (1/2 * 35 * 1.15), this.invY - (1/2 * 67 * 1.15), 35 * 1.15, 67 * 1.15);
        }
        else if (this.type == "jarOfUlgoyNectar")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 287, 347, 11, 16, this.invX - (1/2 * 17.5), this.invY - (1/2 * 24), 17.5, 24);
        }
        else if (this.type == "ulgoyLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 305, 348, 18, 14, this.invX - (1/2 * 18 * 1.25), this.invY - (1/2 * 14 * 1.25), 18 * 1.25, 14 * 1.25);
        }
        else if (this.type == "mofuFive")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 1, 1, 27, 24, this.invX - (1/2 * 27 * 1.2), this.invY - (1/2 * 24 * 1.2), 27 * 1.2, 24 * 1.2);
        }
        else if (this.type == "theCorpseRing")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 48, 44, 13, 9, this.invX - (1/2 * 13 * 1.25), this.invY - (1/2 * 9 * 1.25), 13 * 1.25, 9 * 1.25);
        }
        else if (this.type == "ironRing")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 32, 22, 11, 11, this.invX - (1/2 * 11 * 1.25), this.invY - (1/2 * 11 * 1.25), 11 * 1.25, 11 * 1.25);
        }
        else if (this.type == "rawArdilFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 50, 687, 8, 8, this.invX - (1/2 * 8), this.invY - (1/2 * 8), 8, 8);
        }
        else if (this.type == "ardilMeat")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 82, 686, 8, 8, this.invX - (1/2 * 8), this.invY - (1/2 * 8), 8, 8);
        }
        else if (this.type == "ardilPelt")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 928, 701, 29, 20, this.invX - (1/2 * 29), this.invY - (1/2 * 20), 29, 20);
        }
        else if (this.type == "lizardTail")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1544, 29, 10, 10, this.invX - (1/2 * 14), this.invY - (1/2 * 14), 14, 14);
        }
        else if (this.type == "smashStick" || this.type == "burningSmashStick")
        {
            XXX.beginPath();
            XXX.save();
            XXX.translate(this.invX, this.invY);
            XXX.rotate(9/10 * Math.PI);
            XXX.drawImage(mofu, 189, 86, 23, 44, - (1/2 * 23 * 1.5), - (1/2 * 44 * 1.5), 23 * 1.5, 44 * 1.5);
            XXX.restore();
        }
        else if (this.type == "pumpkinDough")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 73, 4, 10, 8, this.invX - (1/2 * 10 * 1.8), this.invY - (1/2 * 8 * 1.8), 10 * 1.8, 8 * 1.8);
        }
        else if (this.type == "pumpkinBread")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 56, 29, 16, 11, this.invX - (1/2 * 16 * 1.8), this.invY - (1/2 * 11 * 1.8), 16 * 1.8, 11 * 1.8);
        }
        else if (this.type == "butteredPumpkinBread")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 70, 2, 19, 18, this.invX - (1/2 * 19 * 1.8), this.invY - (1/2 * 18 * 1.8), 19 * 1.8, 18 * 1.8);
        }
        else if (this.type == "harstBread")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1395, 12, 15, 12, this.invX - (1/2 * 15 * 1.8), this.invY - (1/2 * 12 * 1.8), 15 * 1.8, 12 * 1.8);
        }
        else if (this.type == "butteredHarstBread")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1392, 27, 17, 17, this.invX - (1/2 * 17 * 1.8), this.invY - (1/2 * 17 * 1.8), 17 * 1.8, 17 * 1.8);
        }
        else if (this.type == "harstDough")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1412, 11, 11, 10, this.invX - (1/2 * 11 * 1.5), this.invY - (1/2 * 10 * 1.5), 11 * 1.5, 10 * 1.5);
        }
        else if (this.type == "harstFlour")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1428, 12, 11, 15, this.invX - (1/2 * 11), this.invY - (1/2 * 15), 11, 15);
        }
        else if (this.type == "bagOfHarstFlour")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1443, 11, 23, 29, this.invX - (1/2 * 23), this.invY - (1/2 * 29), 23, 29);
        }
        else if (this.type == "honey")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 34, 244, 18, 21, this.invX - (1/2 * 18), this.invY - (1/2 * 21), 18, 21);
        }
        else if (this.type == "bee")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 12, 338, 14, 13, this.invX - (1/2 * 14 * 2.3), this.invY - (1/2 * 13 * 2.3), 14 * 2.3, 13 * 2.3);
        }
        else if (this.type == "wyrExtract")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1722, 200, 13, 17, this.invX - (1/2 * 13), this.invY - (1/2 * 17), 13, 17);
        }
        else if (this.type == "blackBearLeatherArmour")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 689, 2, 29, 46, this.invX - (1/2 * 29 * 1.5), this.invY - (1/2 * 46 * 1.5), 29 * 1.5, 46 * 1.5);
        }
        else if (this.type == "blackBearFurClothing")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 654, 2, 29, 46, this.invX - (1/2 * 29 * 1.5), this.invY - (1/2 * 46 * 1.5), 29 * 1.5, 46 * 1.5);
        }
        else if (this.type == "wellAxle")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 233, 350, 20, 17, this.invX - (1/2 * 20 * 1.6), this.invY - (1/2 * 17 * 1.6), 20 * 1.6, 17 * 1.6);
        }
        else if (this.type == "wellCord")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 209, 326, 23, 22, this.invX - (1/2 * 23 * 1.6), this.invY - (1/2 * 22 * 1.6), 23 * 1.6, 22 * 1.6);
        }
        else if (this.type == "wellStone")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 239, 332, 15, 10, this.invX - (1/2 * 15 * 1.6), this.invY - (1/2 * 10 * 1.6), 15 * 1.6, 10 * 1.6);
        }
        else if (this.type == "wellWinch")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 213, 350, 17, 8, this.invX - (1/2 * 17 * 1.6), this.invY - (1/2 * 8 * 1.6), 17 * 1.6, 8 * 1.6);
        }
        else if (this.type == "blunderbuss")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1305, 12, 13, 35, this.invX - (1/2 * 13 * 1.65), this.invY - (1/2 * 35 * 1.65), 13 * 1.65, 35 * 1.65);
        }
        else if (this.type == "musket")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1334, 11, 11, 36, this.invX - (1/2 * 11 * 1.65), this.invY - (1/2 * 36 * 1.65), 11 * 1.65, 36 * 1.65);
        }
        else if (this.type == "bullet")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1321, 16, 5, 5, this.invX - (1/2 * 8), this.invY - (1/2 * 8), 8, 8);
        }
        else if (this.type == "blackPowder")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1350, 13, 13, 11, this.invX - (1/2 * 13), this.invY - (1/2 * 11), 13, 11);
        }
        else if (this.type == "cutlass")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1369, 10, 19, 37, this.invX - (1/2 * 19 * 1.65), this.invY - (1/2 * 37 * 1.65), 19 * 1.65, 37 * 1.65);
        }
        else if (this.type == "brokenHyelingCleaver")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 223, 83, 31, 34, this.invX - (1/2 * 31 * 1.6), this.invY - (1/2 * 34 * 1.6), 31 * 1.6, 34 * 1.6);
        }
        else if (this.type == "hyelingClaws")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 98, 53, 22, 19, this.invX - (1/2 * 22 * 1.6), this.invY - (1/2 * 19 * 1.6), 22 * 1.6, 19 * 1.6);
        }
        else if (this.type == "rawHyelingFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 223, 600, 14, 18, this.invX - (1/2 * 14 * 1.6), this.invY - (1/2 * 18 * 1.6), 14 * 1.6, 18 * 1.6);
        }
        else if (this.type == "hyelingMeat")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 241, 601, 14, 18, this.invX - (1/2 * 14 * 1.6), this.invY - (1/2 * 18 * 1.6), 14 * 1.6, 18 * 1.6);
        }
        else if (this.type == "hyelingArmour")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 197, 30, 17, 46, this.invX - (1/2 * 17 * 1.6), this.invY - (1/2 * 46 * 1.6), 17 * 1.6, 46 * 1.6);
        }
        else if (this.type == "golgemoffFeelers")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 965, 266, 17, 16, this.invX - (1/2 * 17), this.invY - (1/2 * 16), 17, 16);
        }
        else if (this.type == "golgemoffMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 983, 264, 17, 16, this.invX - (1/2 * 17 * 1.6), this.invY - (1/2 * 16 * 1.6), 17 * 1.6, 16 * 1.6);
        }
        else if (this.type == "rawGolgemoffFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 999, 264, 17, 16, this.invX - (1/2 * 17 * 1.6), this.invY - (1/2 * 16 * 1.6), 17 * 1.6, 16 * 1.6);
        }
        else if (this.type == "rawAvrakFlesh" || this.type == "rawEvrakFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 139, 2350, 39, 29, this.invX - (1/2 * 39 * 0.8), this.invY - (1/2 * 29 * 0.8), 39 * 0.8, 29 * 0.8);
        }
        else if (this.type == "avrakMeat" || this.type == "evrakMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 141, 2394, 39, 29, this.invX - (1/2 * 39 * 0.8), this.invY - (1/2 * 29 * 0.8), 39 * 0.8, 29 * 0.8);
        }
        else if (this.type == "avrakHide")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 142, 2287, 41, 50, this.invX - (1/2 * 41 * 0.6), this.invY - (1/2 * 50 * 0.6), 41 * 0.6, 50 * 0.6);
        }
        else if (this.type == "evrakHide")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 62, 2314, 59, 50, this.invX - (1/2 * 59 * 0.6), this.invY - (1/2 * 50 * 0.6), 59 * 0.6, 50 * 0.6);
        }
        else if (this.type == "avrakLeatherArmour")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 8, 2091, 66, 83, this.invX - (1/2 * 66 * 0.85), this.invY - (1/2 * 83 * 0.85), 66 * 0.85, 83 * 0.85);
        }
        else if (this.type == "evrakLeatherArmour")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 18, 2002, 47, 80, this.invX - (1/2 * 47 * 0.85), this.invY - (1/2 * 80 * 0.85), 47 * 0.85, 80 * 0.85);
        }
        else if (this.type == "neevFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 148, 67, 21, 17, this.invX - (1/2 * 21 * 1.25), this.invY - (1/2 * 17 * 1.25), 21 * 1.25, 17 * 1.25);
        }
        else if (this.type == "neevFur")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 176, 64, 35, 25, this.invX - (1/2 * 35 * 1.25), this.invY - (1/2 * 25 * 1.25), 35 * 1.25, 25 * 1.25);
        }
        else if (this.type == "ogardPerfume")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 50, 4, 15, 19, this.invX - (1/2 * 15), this.invY - (1/2 * 19), 15, 19);
        }
        else if (this.type == "driedTechiLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 35, 6, 11, 16, this.invX - (1/2 * 11), this.invY - (1/2 * 16), 11, 16);
        }
        else if (this.type == "ogard")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 36, 28, 15, 16, this.invX - (1/2 * 15 * 1.3), this.invY - (1/2 * 16 * 1.3), 15 * 1.3, 16 * 1.3);
        }
        else if (this.type == "groundOgard")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 37, 47, 16, 14, this.invX - (1/2 * 16), this.invY - (1/2 * 14), 16, 14);
        }
        else if (this.type == "ogardPollen")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 57, 50, 9, 9, this.invX - (1/2 * 9 * 1.3), this.invY - (1/2 * 9 * 1.3), 9 * 1.3, 9 * 1.3);
        }
        else if (this.type == "cloth" || this.type == "dyedMufCloth")
        {
            XXX.beginPath();
            XXX.save();
            XXX.translate(this.invX, this.invY);
            XXX.rotate(5/8 * 2 * Math.PI);
            XXX.drawImage(verse, 3955, 309, 29, 10,  - (1/2 * 29 * 1.5), - (1/2 * 10 * 1.5), 29 * 1.5, 10 * 1.5);
            XXX.restore();
        }
        else if (this.type == "culprisBandage")
        {
            XXX.beginPath();
            XXX.save();
            XXX.translate(this.invX, this.invY);
            XXX.rotate(3/8 * 2 * Math.PI);
            XXX.drawImage(verse, 3955, 309, 29, 10,  - (1/2 * 29 / 1.25), - (1/2 * 10 / 1.25), 29 / 1.25, 10 / 1.25);
            XXX.restore();
        }
        else if (this.type == "naapridFiber" || this.type == "varnFiber" || this.type == "evrakFiber" || this.type == "avrakFiber")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 85, 46, 10, 18, this.invX - (1/2 * 10 * 1.65), this.invY - (1/2 * 18 * 1.65), 10 * 1.65, 18 * 1.65);
        }
        else if (this.type == "tent")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 1, 1, 32, 32, this.invX - (1/2 * 32 * 1.5), this.invY - (1/2 * 32 * 1.5), 32 * 1.5, 32 * 1.5);
        }
        else if (this.type == "neculaisEar")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 71, 48, 9, 12, this.invX - (1/2 * 9 * 1.4), this.invY - (1/2 * 12 * 1.4), 9 * 1.4, 12 * 1.4);
        }
        else if (this.type == "natureCall")
        {
            XXX.beginPath();
            XXX.drawImage(horde1, 529, 36, 88, 84, this.invX - (1/2 * 88 * 0.2), this.invY - (1/2 * 84 * 0.2), 88 * 0.2, 84 * 0.2);
        }
        else if (this.type == "berulnToothNecklace")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 96, 3, 14, 21, this.invX - (1/2 * 14 * 1.2), this.invY - (1/2 * 21 * 1.2), 14 * 1.2, 21 * 1.2);
        }
        else if (this.type == "techiLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 83, 147, 13, 15, this.invX - (1/2 * 13), this.invY - (1/2 * 15), 13, 15);
        }
        else if (this.type == "bucketOfPluttJuice" || this.type == "bucketOfHotPluttBerryCider" )
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 87, 66, 13, 20, this.invX - (1/2 * 13 * 2), this.invY - (1/2 * 20 * 2), 13 * 2, 20 * 2);
        }
        else if (this.type == "pluttJuicePintGlass" || this.type == "pluttCiderPintGlass" )
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 1, 15, 12, 12, this.invX - (1/2 * 12 * 2), this.invY - (1/2 * 12 * 2), 12 * 2, 12 * 2);
        }
        else if (this.type == "glassBottle")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 173, 32, 10, 20, this.invX - (1/2 * 10 * 2), this.invY - (1/2 * 20 * 2), 10 * 2, 20 * 2);
        }
        else if (this.type == "glassBottleOfWater")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 149, 31, 10, 20, this.invX - (1/2 * 10 * 2), this.invY - (1/2 * 20 * 2), 10 * 2, 20 * 2);
        }
        else if (this.type == "glassBottleOfPluttWine")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 45, 208, 12, 22, this.invX - (1/2 * 12 * 2), this.invY - (1/2 * 22 * 2), 12 * 2, 22 * 2);
        }
        else if (this.type == "pluttWine")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 45, 181, 11, 11, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 11 * 2), 11 * 2, 11 * 2);
        }
        else if (this.type == "bushkaBerries")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 23, 125, 13, 12, this.invX - (1/2 * 13 * 1.15), this.invY - (1/2 * 12 * 1.15), 13 * 1.15, 12 * 1.5);
        }
        else if (this.type == "bushkaLeaves")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 3, 118, 14, 15, this.invX - (1/2 * 14 * 1.15), this.invY - (1/2 * 15 * 1.15), 14 * 1.15, 15 * 1.15);
        }
        else if (this.type == "beesWax")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 1, 2, 12, 13, this.invX - (1/2 * 12 * 1.4), this.invY - (1/2 * 13 * 1.4), 12 * 1.4, 13 * 1.4);
        }
        else if (this.type == "oilLantern" || this.type == "oilLantern4" || this.type == "oilLantern3" || this.type == "oilLantern2" || this.type == "oilLantern1" || this.type == "oilLanternEmpty")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 48, 1, 11, 27, this.invX - (1/2 * 11 * 1.2), this.invY - (1/2 * 27 * 1.2), 11 * 1.2, 27 * 1.2);
        }
        else if (this.type == "oilLamp" || this.type == "oilLamp2" || this.type == "oilLamp1" || this.type == "oilLampEmpty")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 14, 17, 12, 15, this.invX - (1/2 * 12 * 1.2), this.invY - (1/2 * 15 * 1.2), 12 * 1.2, 15 * 1.2);
        }
        else if (this.type == "jackOLantern" || this.type == "jackOLantern2" || this.type == "jackOLantern1" || this.type == "jackOLanternEmpty")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 82, 2, 18, 19, this.invX - (1/2 * 18 * 1.2), this.invY - (1/2 * 19 * 1.2), 18 * 1.2, 19 * 1.2);
        }
        else if (this.type == "pumpkin")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 64, 2, 18, 19, this.invX - (1/2 * 18 * 1.2), this.invY - (1/2 * 19 * 1.2), 18 * 1.2, 19 * 1.2);
        }
        else if (this.type == "roastedPumpkin")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 83, 23, 16, 18, this.invX - (1/2 * 16 * 1.2), this.invY - (1/2 * 18 * 1.2), 16 * 1.2, 18 * 1.2);
        }
        else if (this.type == "candle")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 14, 1, 11, 16, this.invX - (1/2 * 11 * 1.2), this.invY - (1/2 * 16 * 1.2), 11 * 1.2, 16 * 1.2);
        }
        else if (this.type == "candle2")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 25, 1, 12, 13, this.invX - (1/2 * 12 * 1.2), this.invY - (1/2 * 13 * 1.2), 12 * 1.2, 13 * 1.2);
        }
        else if (this.type == "candle1")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 35, 1, 12, 10, this.invX - (1/2 * 12 * 1.2), this.invY - (1/2 * 10 * 1.2), 12 * 1.2, 10 * 1.2);
        }
        else if (this.type == "pluttMoffling")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 1, 211, 18, 15, this.invX - (1/2 * 18 * 0.8), this.invY - (1/2 * 15 * 0.8), 18 * 0.8, 15 * 0.8);
        }
        else if (this.type == "akerMoffling")
        {
            XXX.beginPath();
            XXX.drawImage(candlewic, 22, 211, 18, 15, this.invX - (1/2 * 18 * 0.8), this.invY - (1/2 * 15 * 0.8), 18 * 0.8, 15 * 0.8);
        }
        else if (this.type == "rawMofflingFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 86, 110, 17, 14, this.invX - (1/2 * 17 * 0.8), this.invY - (1/2 * 14 * 0.8), 17 * 0.5, 14 * 0.8);
        }
        else if (this.type == "mofflingMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 104, 111, 17, 14, this.invX - (1/2 * 17 * 0.8), this.invY - (1/2 * 14 * 0.8), 17 * 0.5, 14 * 0.8);
        }
        else if (this.type == "rawMofuFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 86, 110, 17, 14, this.invX - (1/2 * 17 * 1.2), this.invY - (1/2 * 14 * 1.2), 17 * 1.2, 14 * 1.2);
        }
        else if (this.type == "mofuMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 104, 111, 17, 14, this.invX - (1/2 * 17), this.invY - (1/2 * 14), 17, 14);
        }
        else if (this.type == "rawLargeMofuFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 86, 110, 17, 14, this.invX - (1/2 * 17 * 2.3), this.invY - (1/2 * 14 * 2.3), 17 * 2.3, 14 * 2.3);
        }
        else if (this.type == "largeMofuMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 104, 111, 17, 14, this.invX - (1/2 * 17 * 2.3), this.invY - (1/2 * 14 * 2.3), 17 * 2.3, 14 * 2.3);
        }
        else if (this.type == "fattyMofuLiver")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 114, 67, 9, 9, this.invX - (1/2 * 9 * 2), this.invY - (1/2 * 9 * 2), 9 * 2, 9 * 2);
        }
        else if (this.type == "mofuFeather")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 139, 54, 11, 13, this.invX - (1/2 * 11), this.invY - (1/2 * 13), 11, 13);
        }
        else if (this.type == "mofuFoot")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 122, 56, 11, 7, this.invX - (1/2 * 11), this.invY - (1/2 * 7), 11, 7);
        }
        else if (this.type == "mofuEgg")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 109, 54, 8, 11, this.invX - (1/2 * 8), this.invY - (1/2 * 11), 8, 11);
        }
        else if (this.type == "cookedMofuEgg")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 96, 54, 11, 10, this.invX - (1/2 * 11), this.invY - (1/2 * 10), 11, 10);
        }
        else if (this.type == "fermentedMofuEgg")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 96, 45, 11, 10, this.invX - (1/2 * 11), this.invY - (1/2 * 10), 11, 10);
        }
        else if (this.type == "rawGrushFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1208, 27, 14, 16, this.invX - (1/2 * 14), this.invY - (1/2 * 16), 14, 16);
        }
        else if (this.type == "grushMeat")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1207, 43, 14, 16, this.invX - (1/2 * 14), this.invY - (1/2 * 16), 14, 16);
        }
        else if (this.type == "grushFur")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1204, 7, 18, 16, this.invX - (1/2 * 18), this.invY - (1/2 * 16), 18, 16);
        }
        else if (this.type == "grushFurClothing")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 1249, 69, 31, 52, this.invX - (1/2 * 31 * 1.2), this.invY - (1/2 * 52 * 1.2), 31 * 1.2, 52 * 1.2);
        }
        else if (this.type == "iron")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1212, 561, 28, 18, this.invX - (1/2 * 28), this.invY - (1/2 * 18), 28, 18);
        }
        else if (this.type == "steel")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1461, 563, 28, 15, this.invX - (1/2 * 28), this.invY - (1/2 * 15), 28, 15);
        }
        else if (this.type == "santhGrain")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2943, 205, 19, 19, this.invX - (1/2 * 19), this.invY - (1/2 * 19), 19, 19);
        }
        else if (this.type == "santhFlour")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2977, 204, 19, 19, this.invX - (1/2 * 19), this.invY - (1/2 * 19), 19, 19);
        }
        else if (this.type == "emptyBagSanth" || this.type == "emptyBagHarst")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 3016, 201, 22, 28, this.invX - (1/2 * 22), this.invY - (1/2 * 28), 22, 28);
        }
        else if (this.type == "bagOfSanthFlour")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 3050, 200, 22, 28, this.invX - (1/2 * 22), this.invY - (1/2 * 28), 22, 28);
        }
        else if (this.type == "kellishSanthDough")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2940, 230, 17, 14, this.invX - (1/2 * 17 * 2.6), this.invY - (1/2 * 14 * 2.6), 17 * 2.6, 14 * 2.6);
        }
        else if (this.type == "naapridButter")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2940, 230, 17, 14, this.invX - (1/2 * 17), this.invY - (1/2 * 14), 17, 14);
        }
        else if (this.type == "santhBread")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2970, 225, 23, 23, this.invX - (1/2 * 23), this.invY - (1/2 * 23), 23, 23);
        }
        else if (this.type == "butteredSanthBread")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2965, 250, 32, 26, this.invX - (1/2 * 32), this.invY - (1/2 * 26), 32, 26);
        }
        else if (this.type == "healingSalve")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2943, 252, 11, 17, this.invX - (1/2 * 11 * 1.5), this.invY - (1/2 * 17 * 1.5), 11 * 1.5, 17 * 1.5);
        }
        else if (this.type == "carrot")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2864, 68, 18, 19, this.invX - (1/2 * 18), this.invY - (1/2 * 19), 18, 19);
        }
        else if (this.type == "suuliMelon")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2940, 67, 16, 22, this.invX - (1/2 * 16), this.invY - (1/2 * 22), 16, 22);
        }
        else if (this.type == "suuliMelonSlice")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2963, 68, 16, 22, this.invX - (1/2 * 14), this.invY - (1/2 * 20), 14, 20);
        }
        else if (this.type == "potato")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2770, 1, 10, 16, this.invX - (1/2 * 10), this.invY - (1/2 * 16), 10, 16);
        }
        else if (this.type == "cookedPotato")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2782, 1, 10, 16, this.invX - (1/2 * 10), this.invY - (1/2 * 16), 10, 16);
        }
        else if (this.type == "nechromanticDust")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 477, 922, 72, 66, this.invX - (1/2 * 72 * 0.35), this.invY - (1/2 * 66 * 0.35), 72 * 0.35, 66 * 0.35);
        }
        else if (this.type == "clay")
        {
            XXX.beginPath();
            XXX.drawImage(mufmuf, 1, 4, 11, 10, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 10 * 2), 11 * 2, 10 * 2);
        }
        else if (this.type == "kellishClayPot")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3036, 1, 22, 19, this.invX - (1/2 * 22 * 1.7), this.invY - (1/2 * 19 * 1.7), 22 * 1.7, 19 * 1.7);
        }
        else if (this.type == "kellishClayPotOfNaapridMilk" || this.type == "kellishClayPotOfWaantiMilk")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3017, 1, 20, 18, this.invX - (1/2 * 20 * 1.7), this.invY - (1/2 * 18 * 1.7), 20 * 1.7, 18 * 1.7);
        }
        else if (this.type == "kellishClayPotOfWater")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 359, 37, 18, 20, this.invX - (1/2 * 18 * 1.7), this.invY - (1/2 * 20 * 1.7), 18 * 1.7, 20 * 1.7);
        }
        else if (this.type == "kellishClayPotOfMushroomStew")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 408, 25, 18, 20, this.invX - (1/2 * 18 * 1.7), this.invY - (1/2 * 20 * 1.7), 18 * 1.7, 20 * 1.7);
        }
        else if (this.type == "rawViperFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 529, 64, 13, 12, this.invX - (1/2 * 13 * 1.3), this.invY - (1/2 * 12 * 1.3), 13 * 1.3, 12 * 1.3);
        }
        else if (this.type == "viperMeat")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 543, 63, 13, 12, this.invX - (1/2 * 13 * 1.3), this.invY - (1/2 * 12 * 1.3), 13 * 1.3, 12 * 1.3);
        }
        else if (this.type == "viperVenomGland")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 529, 78, 10, 7, this.invX - (1/2 * 10 * 1.3), this.invY - (1/2 * 7 * 1.3), 10 * 1.3, 7 * 1.3);
        }
        else if (this.type == "fermentedViperVenomGland")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 544, 77, 12, 9, this.invX - (1/2 * 12 * 1.3), this.invY - (1/2 * 9 * 1.3), 12 * 1.3, 9 * 1.3);
        }
        else if (this.type == "viperSnakeSkin")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 530, 52, 28, 10, this.invX - (1/2 * 28 * 1.3), this.invY - (1/2 * 10 * 1.3), 28 * 1.3, 10 * 1.3);
        }
        else if (this.type == "rasper")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 651, 45, 21, 45, this.invX - (1/2 * 21 * 1.3), this.invY - (1/2 * 45 * 1.3), 21 * 1.3, 45 * 1.3);
        }
        else if (this.type == "jvostranPlateArmour")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 350, 660, 66, 106, this.invX - (1/2 * 66 * 0.75) - 3, this.invY - (1/2 * 106 * 0.75), 66 * 0.75, 106 * 0.75);
        }
        else if (this.type == "waterPintGlass")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 205, 2, 11, 11, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 11 * 2), 11 * 2, 11 * 2);
        }
        else if (this.type == "harstGrain")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 241, 45, 12, 13, this.invX - (1/2 * 12), this.invY - (1/2 * 13), 12, 13);
        }
        else if (this.type == "harstAle")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 247, 1, 11, 12, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 12 * 2), 11 * 2, 12 * 2);
        }
        else if (this.type == "techiTea")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 19, 32, 17, 16, this.invX - (1/2 * 17 * 2), this.invY - (1/2 * 16 * 2), 17 * 2, 16 * 2);
        }
        else if (this.type == "pintGlass")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 148, 5, 11, 12, this.invX - (1/2 * 11 * 2), this.invY - (1/2 * 12 * 2), 11 * 2, 12 * 2);
        }
        else if (this.type == "energilPotionI" || this.type == "energilPotionII" || this.type == "energilPotionIII" || this.type == "energilPotionIV" || this.type == "energilPotionV")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1700, 180, 12, 19, this.invX - (1/2 * 12), this.invY - (1/2 * 19), 12, 19);
        }
        else if (this.type == "mindPotionI" || this.type == "mindPotionII" || this.type == "mindPotionIII" || this.type == "mindPotionIV" || this.type == "mindPotionV")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 431, 945, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
        }
        else if (this.type == "utExtract")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 431, 972, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
        }
        else if (this.type == "potionGlass")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 419, 1, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
        }
        else if (this.type == "vialOfWater")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 406, 1, 10, 16, this.invX - (1/2 * 10), this.invY - (1/2 * 16), 10, 16);
        }
        else if (this.type == "walrusLeatherWaterskin" || this.type == "walrusLeatherWaterskinOne" || this.type == "walrusLeatherWaterskinTwo" || this.type == "walrusLeatherWaterskinFull")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 79, 5, 19, 13, this.invX - (1/2 * 19 * 1.5), this.invY - (1/2 * 13 * 1.5), 19 * 1.5, 13 * 1.5);
        }
        else if (this.type == "bucket")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 103, 1, 14, 21, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 21 * 2), 14 * 2, 21 * 2);
        }
        else if (this.type == "bucketOfWater")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 133, 1, 14, 21, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 21 * 2), 14 * 2, 21 * 2);
        }
        else if (this.type == "bucketOfTechiTea")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 3, 36, 13, 20, this.invX - (1/2 * 13 * 2), this.invY - (1/2 * 20 * 2), 13 * 2, 20 * 2);
        }
        else if (this.type == "bucketOfNaapridMilk" || this.type == "bucketOfWaantiMilk")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 118, 1, 14, 21, this.invX - (1/2 * 14 * 2), this.invY - (1/2 * 21 * 2), 14 * 2, 21 * 2);
        }
        else if (this.type == "halcifMushroom")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 33, 62, 13, 15, this.invX - (1/2 * 13 * 2), this.invY - (1/2 * 15 * 2), 13 * 2, 15 * 2);
        }
        else if (this.type == "cyrinthilimMushroom")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 53, 27, 10, 14, this.invX - (1/2 * 10 * 2), this.invY - (1/2 * 14 * 2), 10 * 2, 14 * 2);
        }
        else if (this.type == "glinMushrooms")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 5, 1, 18, 18, this.invX - (1/2 * 18 * 2), this.invY - (1/2 * 18 * 2), 18 * 2, 18 * 2);
        }
        else if (this.type == "tepprekliaFungus")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 3011, 70, 14, 16, this.invX - (1/2 * 14), this.invY - (1/2 * 16), 14, 16);
        }
        else if (this.type == "driedCyrinthilimMushroom")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 52, 45, 12, 11, this.invX - (1/2 * 12 * 2), this.invY - (1/2 * 11 * 2), 12 * 2, 11 * 2);
        }
        else if (this.type == "boiledGlinMushrooms")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 56, 1, 18, 18, this.invX - (1/2 * 18 * 2), this.invY - (1/2 * 18 * 2), 18 * 2, 18 * 2);
        }
        else if (this.type == "tylunFlower")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2155, 64, 28, 33, this.invX - (1/2 * 28), this.invY - (1/2 * 33), 28, 33);
        }
        else if (this.type == "stomwikLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2171, 44, 21, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 16), 21, 16);
        }
        else if (this.type == "culprisLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2154, 160, 20, 13, this.invX - (1/2 * 20), this.invY - (1/2 * 13), 20, 13);
        }
        else if (this.type == "neprilneBerries")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2148, 516, 15, 16, this.invX - (1/2 * 15), this.invY - (1/2 * 16), 15, 16);
        }
        else if (this.type == "pluttBerries")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2111, 32, 19, 19, this.invX - (1/2 * 19), this.invY - (1/2 * 19), 19, 19);
        }
        else if (this.type == "driedPluttBerries")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 104, 47, 17, 19, this.invX - (1/2 * 17), this.invY - (1/2 * 19), 17, 19);
        }
        else if (this.type == "akerBerries")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2170, 20, 22, 19, this.invX - (1/2 * 22), this.invY - (1/2 * 19), 22, 19);
        }
        else if (this.type == "bequonFruit")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2990, 70, 17, 17, this.invX - (1/2 * 17), this.invY - (1/2 * 17), 17, 17);
        }
        else if (this.type == "luufBerries")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 367, 21, 10, 10, this.invX - (1/2 * 10 * 2.3), this.invY - (1/2 * 10 * 2.3), 10 * 2.3, 10 * 2.3);
        }
        else if (this.type == "wyrLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 395, 167, 13, 11, this.invX - (1/2 * 13 * 1.5), this.invY - (1/2 * 11 * 1.5), 13 * 1.5, 11 * 1.5);
        }
        else if (this.type == "kellishSawClub")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 645, 466, 17, 55, this.invX - (1/2 * 17), this.invY - (1/2 * 55), 17, 55);
        }
        else if (this.type == "kellishClaymore")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 600, 435, 22, 112, this.invX - (1/2 * 22 * 0.7), this.invY - (1/2 * 112 * 0.7), 22 * 0.7, 112 * 0.7);
        }
        else if (this.type == "gribPelt")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1095, 155, 31, 19, this.invX - (1/2 * 31 * 1.2), this.invY - (1/2 * 19 * 1.2), 31 * 1.2, 19 * 1.2);
        }
        else if (this.type == "rawGribFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1393, 196, 20, 22, this.invX - (1/2 * 20), this.invY - (1/2 * 22), 20, 22);
        }
        else if (this.type == "gribMeat")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1371, 197, 20, 22, this.invX - (1/2 * 20), this.invY - (1/2 * 22), 20, 22);
        }
        else if (this.type == "hammer")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 512, 514, 36, 49, this.invX - (1/2 * 36 / 1.3), this.invY - (1/2 * 49 / 1.3), 36 / 1.3, 49 / 1.3);
        }
        else if (this.type == "warHammer")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 535, 411, 40, 72, this.invX - (1/2 * 40 / 1.3), this.invY - (1/2 * 72 / 1.3), 40 / 1.3, 72 / 1.3);
        }
        else if (this.type == "iceClaymore" || this.type == "leechingTouch")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1859, 36, 22, 27, this.invX - (1/2 * 22), this.invY - (1/2 * 27), 22, 27);
        }
        else if (this.type == "surge" || this.type == "embers" || this.type == "fireballI" || this.type == "electricBolt" || this.type == "flyingColours" || this.type == "iceSpikes" || this.type == "frostWind" || this.type == "repel" || this.type == "lifeTap" || this.type == "drainingI" || this.type == "vivification" || this.type == "chasingLights" || this.type == "fireHands" || this.type == "freezingGrasp" || this.type == "chargedTouch" || this.type == "sorcerer'sRaincoat" || this.type == "shieldingI" || this.type == "shieldingII" || this.type == "shieldingIII" || this.type == "shieldingIV" || this.type == "shieldingV" || this.type == "summonFrich" || this.type == "summonWolf" || this.type == "charm" || this.type == "sanctuary" || this.type == "repellingWard")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1738, 4, 33, 26, this.invX - (1/2 * 33), this.invY - (1/2 * 26), 33, 26);
        }
        else if (this.type == "narthwarpMouth")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1901, 74, 30, 18, this.invX - (1/2 * 30), this.invY - (1/2 * 18), 30 , 18);
        }
        else if (this.type == "lrgNarthwarpMouth")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1901, 74, 30, 18, this.invX - (1/2 * 30 * 2), this.invY - (1/2 * 18 * 2), 30 * 2, 18 * 2);
        }
        else if (this.type == "fermentedNarthwarpMouth")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1844, 64, 37, 32, this.invX - (1/2 * 37), this.invY - (1/2 * 32), 37, 32);
        }
        else if (this.type == "rawBearFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 731, 9, 25, 16, this.invX - (1/2 * 25 * 1.6), this.invY - (1/2 * 16 * 1.6), 25 * 1.6, 16 * 1.6);
        }
        else if (this.type == "bearMeat")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 731, 27, 25, 16, this.invX - (1/2 * 25 * 1.6), this.invY - (1/2 * 16 * 1.6), 25 * 1.6, 16 * 1.6);
        }
        else if (this.type == "rawBearTongue")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 757, 12, 17, 13, this.invX - (1/2 * 17 * 1.35), this.invY - (1/2 * 13 * 1.35), 17 * 1.35, 13 * 1.35);
        }
        else if (this.type == "bearTongue")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 757, 29, 17, 13, this.invX - (1/2 * 17 * 1.35), this.invY - (1/2 * 13 * 1.35), 17 * 1.35, 13 * 1.35);
        }
        else if (this.type == "smlBlackBearPelt")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 558, 18, 53, 30, this.invX - (1/2 * 53), this.invY - (1/2 * 30), 53, 30);
        }
        else if (this.type == "medBlackBearPelt")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 558, 18, 53, 30, this.invX - (1/2 * 53 * 1.25), this.invY - (1/2 * 30 * 1.25), 53 * 1.25, 30 * 1.25);
        }
        else if (this.type == "lrgBlackBearPelt")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 558, 18, 53, 30, this.invX - (1/2 * 53 * 1.65), this.invY - (1/2 * 30 * 1.65), 53 * 1.65, 30 * 1.65);
        }
        else if (this.type == "vardanianHeavyCleaver")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 779, 1, 17, 68, this.invX - (1/2 * 17), this.invY - (1/2 * 68), 17, 68);
        }
        else if (this.type == "shehidOozeSml")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1329, 19, 21, 22, this.invX - (1/2 * 21), this.invY - (1/2 * 22), 21, 22);
        }
        else if (this.type == "shehidOozeLrg")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1329, 19, 21, 22, this.invX - (1/2 * 21 * 2), this.invY - (1/2 * 22 * 2), 21 * 2, 22 * 2);
        }
        else if (this.type == "shehidShellSml")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1358, 19, 25, 24, this.invX - (1/2 * 25), this.invY - (1/2 * 24), 25, 24);
        }
        else if (this.type == "shehidShellLrg")
        {
            XXX.beginPath();
            XXX.drawImage(polypol, 1358, 19, 25, 24, this.invX - (1/2 * 25 * 2), this.invY - (1/2 * 24 * 2), 25 * 2, 24 * 2);
        }
        else if (this.type == "timberAxe")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 294, 330, 29, 45, this.invX - (1/2 * 29 * 1.4), this.invY - (1/2 * 45 * 1.4), 29 * 1.4, 45 * 1.4);
        }
        else if (this.type == "curvedDagger")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3538, 605, 10, 30, this.invX - (1/2 * 10), this.invY - (1/2 * 30), 10, 30);
        }
        else if (this.type == "dualCurvedDaggers")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3552, 605, 16, 30, this.invX - (1/2 * 16), this.invY - (1/2 * 30), 16, 30);
        }
        else if (this.type == "nirineseSpear")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 8, 1511, 13, 79, this.invX - (1/2 * 13), this.invY - (1/2 * 79), 13, 79);
        }
        else if (this.type == "crossbow")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3169, 118, 36, 34, this.invX - (1/2 * 37.8), this.invY - (1/2 * 35.7), 37.8, 35.7);
        }
        else if (this.type == "steelBolt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3152, 1, 19, 21, this.invX - (1/2 * 22.8), this.invY - (1/2 * 25.2), 22.8, 25.2);
        }
        else if (this.type == "varnFurDress")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 51, 387, 39, 52, this.invX - (1/2 * 60.45  * 0.8), this.invY - (1/2 * 85.6 * 0.8), 62.4 * 0.8, 83.2 * 0.8);
        }
        else if (this.type == "varnFurCloak")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 46, 439, 50, 61, this.invX - (1/2 * 77.5  * 0.8), this.invY - (1/2 * 92.55 * 0.7), 77.5 * 0.8, 92.55 * 0.7);
        }
        else if (this.type == "varnFurClothing")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 91, 380, 50, 61, this.invX - (1/2 * 80  * 0.8), this.invY - (1/2 * 95.6 * 0.7), 80 * 0.8, 95.6 * 0.7);
        }
        else if (this.type == "waantiFurOutfit")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 216, 457, 43, 65, this.invX - (1/2 * 43 * 1.2), this.invY - (1/2 * 65 * 1.2), 43 * 1.2, 65 * 1.2);
        }
        else if (this.type == "frichFurMittens")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 386, 21, 19, 11, this.invX - (1/2 * 19 * 1.4), this.invY - (1/2 * 11 * 1.4), 19 * 1.4, 11 * 1.4);
        }
        else if (this.type == "frichFurClothing")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 258, 316, 37, 60, this.invX - (1/2 * 44.4), this.invY - (1/2 * 72), 44.4, 72);
        }
        else if (this.type == "hetmerArmour")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 150, 309, 52, 66, this.invX - (1/2 * 62.4), this.invY - (1/2 * 79.2), 62.4, 79.2);
        }
        else if (this.type == "vardanianBattleAxe")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 374, 354, 29, 57, this.invX - (1/2 * 37.7), this.invY - (1/2 * 74.1), 37.7, 74.1);
        }
        else if (this.type == "dualVardanianBattleAxe")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 135, 682, 58, 64, this.invX - (1/2 * 58 * 1.4), this.invY - (1/2 * 64 * 1.4), 58 * 1.4, 64 * 1.4);
        }
        else if (this.type == "rawOlkrinFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3143, 290, 31, 29, this.invX - (1/2 * 46.5), this.invY - (1/2 * 43.5), 46.5, 43.5);
        }
        else if (this.type == "olkrinMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3114, 290, 31, 29, this.invX - (1/2 * 46.5), this.invY - (1/2 * 43.5), 46.5, 43.5);
        }
        else if (this.type == "olkrinSkull")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3033, 290, 49, 36, this.invX - (1/2 * 73.5), this.invY - (1/2 * 54), 73.5, 54);
        }
        else if (this.type == "olkrinHorn")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3087, 287, 26, 34, this.invX - (1/2 * 52), this.invY - (1/2 * 68), 52, 68);
        }
        else if (this.type == "goliathOlkrinSkull")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3033, 290, 49, 36, this.invX - (1/2 * 73.5), this.invY - (1/2 * 54), 73.5, 54);
        }
        else if (this.type == "olkrinArm")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3175, 287, 67, 36, this.invX - (1/2 * 73.7), this.invY - (1/2 * 53.4), 73.7, 53.4);
        }
        else if (this.type == "olkrinMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3114, 290, 31, 29, this.invX - (1/2 * 46.5), this.invY - (1/2 * 43.5), 46.5, 43.5);
        }
        else if (this.type == "vardanianCleaver")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 250, 359, 14, 54, this.invX - (1/2 * 17.5), this.invY - (1/2 * 67.5), 17.5, 67.5);
        }
        else if (this.type == "hyelingCleaver")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 134, 3, 29, 33, this.invX - (1/2 * 29 * 1.6), this.invY - (1/2 * 33 * 1.6), 29 * 1.6, 33 * 1.6);
        }
        else if (this.type == "rawVarnFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3099, 1, 18, 15, this.invX - (1/2 * 27), this.invY - (1/2 * 22.5), 27, 22.5);
        }
        else if (this.type == "varnMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3115, 1, 18, 15, this.invX - (1/2 * 27), this.invY - (1/2 * 22.5), 27, 22.5);
        }
        else if (this.type == "varnPelt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2994, 291, 27, 15, this.invX - (1/2 * 40.5), this.invY - (1/2 * 22.5), 40.5, 22.5);
        }
        else if (this.type == "fireStarter")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2922, 136, 14, 11, this.invX - (1/2 * 21), this.invY - (1/2 * 16.5), 21, 16.5);
        }
        else if (this.type == "wood")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2917, 174, 23, 23, this.invX - (1/2 * 34.5), this.invY - (1/2 * 34.5), 34.5, 34.5);
            XXX.drawImage(verse, 2917, 174, 23, 23, this.invX - (1/2 * 34.5), this.invY - (1/2 * 34.5), 34.5, 34.5);
        }
        else if (this.type == "katana")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 168, 364, 16, 55, this.invX - (1/2 * 22.5), this.invY - (1/2 * 70), 22.5, 75.5);
        }
        else if (this.type == "winterWolfOutfit")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3126, 156, 40, 50, this.invX - (1/2 * 48), this.invY - (1/2 * 60), 48, 60);
        }
        else if (this.type == "winterWolfClothing")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3223, 157, 40, 50, this.invX - (1/2 * 48), this.invY - (1/2 * 60), 48, 60);
        }
        else if (this.type == "freydicRoyalOutfit")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2959, 151, 41, 60, this.invX - (1/2 * 52.4), this.invY - (1/2 * 78), 52.4, 78);
        }
        else if (this.type == "fineFreydicOutfitF")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 294, 298, 42, 65, this.invX - (1/2 * 42 * 1.1), this.invY - (1/2 * 65 * 1.1), 42 * 1.1, 65 * 1.1);
        }
        else if (this.type == "fineFreydicOutfitM")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 286, 527, 41, 77, this.invX - (1/2 * 41 * 1), this.invY - (1/2 * 77 * 1), 41 * 1, 77 * 1);
        }
        else if (this.type == "naapridLeatherArmour")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3171, 59, 34, 57, this.invX - (1/2 * 44.2), this.invY - (1/2 * 71.1), 44.2, 71.1);
        }
        else if (this.type == "freydicRoyalDress")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3049, 148, 30, 47, this.invX - (1/2 * 45), this.invY - (1/2 * 70.5), 45, 70.5);
        }
        else if (this.type == "winterWolfDress")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3012, 147, 30, 47, this.invX - (1/2 * 45), this.invY - (1/2 * 70.5), 45, 70.5);
        }
        else if (this.type == "rawYoungNaapridFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3133, 10, 15, 9.5, this.invX - (1/2 * 27), this.invY - (1/2 * 17.1), 27, 17.1);
        }
        else if (this.type == "youngNaapridMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3133, 1, 15, 9.5, this.invX - (1/2 * 27), this.invY - (1/2 * 17.1), 27, 17.1);
        }
        else if (this.type == "rawNaapridFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2970, 1, 22, 20, this.invX - (1/2 * 38.5), this.invY - (1/2 * 35), 38.5, 35);
        }
        else if (this.type == "naapridMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2995, 1, 22, 20, this.invX - (1/2 * 38.5), this.invY - (1/2 * 35), 38.5, 35);
        }
        else if (this.type == "naapridPelt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2924, 1, 26, 16, this.invX - (1/2 * 65), this.invY - (1/2 * 40), 65, 40);
        }
        else if (this.type == "naapridHorn")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2951, 1, 15, 14, this.invX - (1/2 * 31.5), this.invY - (1/2 * 29.4), 31.5, 29.4);
        }
        else if (this.type == "thenganSwordAndShield")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 3515, 140, 48, 40, this.invX - (1/2 * 61.2), this.invY - (1/2 * 48), 61.2, 48);
        }
        else if (this.type == "rawTrollsBlood")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 452, 33, 8, 14, this.invX - (1/2 * 12), this.invY - (1/2 * 21), 12, 21);
        }
        else if (this.type == "jarOfOil")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 97, 3, 10, 15, this.invX - (1/2 * 15), this.invY - (1/2 * 21.5), 15, 21.5);
        }
        else if (this.type == "glassJar")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 465, 33, 8, 14, this.invX - (1/2 * 12), this.invY - (1/2 * 21), 12, 21);
        }
        else if (this.type == "chainArmour")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 38, 310, 40, 61, this.invX - (1/2 * 40), this.invY - (1/2 * 61), 40, 61);
        }
        else if (this.type == "blackChainArmour")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 80, 310, 40, 61, this.invX - (1/2 * 40), this.invY - (1/2 * 61), 40, 61);
        }
        else if (this.type == "freydicGreatSword")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 126, 302, 16, 70, this.invX - (1/2 * 16), this.invY - (1/2 * 70), 16, 70);
        }
        else if (this.type == "theNorthernGem")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 257, 436, 24, 73, this.invX - (1/2 * 24), this.invY - (1/2 * 73), 24, 73);
        }
        else if (this.type == "hugeBogTrollSkull")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 67.5), this.invY - (1/2 * 54), 67.5, 54);
        }
        else if (this.type == "bogTrollSkull")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 45), this.invY - (1/2 * 36), 49.5, 39.6);
        }
        else if (this.type == "babyBogTrollSkull")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 22.5), this.invY - (1/2 * 18), 22.5, 18);
        }
        else if (this.type == "trollFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2875, 1, 19, 18, this.invX - (1/2 * 38), this.invY - (1/2 * 36), 38, 36);
        }
        else if (this.type == "trollMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2900, 1, 19, 18, this.invX - (1/2 * 38), this.invY - (1/2 * 36), 38, 36);
        }
        else if (this.type == "aldrekiiArrow")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2832, 3, 41, 12, this.invX - (1/2 * 32), this.invY - (1/2 * 12), 32, 12);
        }
        else if (this.type == "rawWolfLiver")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2769, 2, 10, 15, this.invX - (1/2 * 15), this.invY - (1/2 * 22.5), 15, 22.5);
        }
        else if (this.type == "wolfLiver")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2782, 2, 10, 15, this.invX - (1/2 * 15), this.invY - (1/2 * 22.5), 15, 22.5);
        }
        else if (this.type == "winterWolfMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2812, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
        }
        else if (this.type == "rawWinterWolfFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2794, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
        }
        else if (this.type == "winterWolfPelt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2737, 2, 26, 16, this.invX - (1/2 * 34.8), this.invY - (1/2 * 19.2), 34.8, 19.2);
        }
        else if (this.type == "massiveWinterWolfPelt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 2737, 2, 29, 16, this.invX - (1/2 * 58), this.invY - (1/2 * 32), 58, 32);
        }
        else if (this.type == "greyWolfMeat")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2812, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
        }
        else if (this.type == "rawGreyWolfFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2794, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
        }
        else if (this.type == "greyWolfPelt")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2737, 2, 26, 16, this.invX - (1/2 * 34.8), this.invY - (1/2 * 19.2), 34.8, 19.2);
        }
        else if (this.type == "massiveGreyWolfPelt")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2737, 2, 29, 16, this.invX - (1/2 * 58), this.invY - (1/2 * 32), 58, 32);
        }
        else if (this.type == "energyPotionI")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 38, 267, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
        }
        else if (this.type == "speedPotionI")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 86, 134, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
        }
        else if (this.type == "cleansingPotion")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 35, 134, 11, 19, this.invX - (1/2 * 11), this.invY - (1/2 * 19), 11, 19);
        }
        else if (this.type == "freydicSword")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2089, 2, 13, 46, this.invX - (1/2 * 16.25), this.invY - (1/2 * 57.5), 16.25, 57.5);
        }
        else if (this.type == "kellishSword")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 70, 1, 15, 49, this.invX - (1/2 * 15 * 1.3), this.invY - (1/2 * 49 * 1.3), 15 * 1.3, 49 * 1.3);
        }
        else if (this.type == "pickaxe")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 103, 233, 22, 26, this.invX - (1/2 * 33), this.invY - (1/2 * 39), 33, 39);
        }
        else if (this.type == "aldrekiiBlade")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2057, 4, 20, 45, this.invX - (1/2 * 24), this.invY - (1/2 * 54), 24, 54);
        }
        else if (this.type == "aldrekiiClaws")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 268, 214, 22, 23, this.invX - (1/2 * 22 * 2), this.invY - (1/2 * 23 * 2), 22 * 2, 23 * 2);
        }
        else if (this.type == "flail")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1995, 1, 37, 33, this.invX - (1/2 * 37), this.invY - (1/2 * 33), 37, 33);
        }
        else if (this.type == "torperVenomSac")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 40, 226, 17, 16, this.invX - (1/2 * 17), this.invY - (1/2 * 16), 17, 16);
        }
        else if (this.type == "torperFuzz")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1867, 9, 23, 20, this.invX - (1/2 * 23), this.invY - (1/2 * 20), 23, 20);
        }
        else if (this.type == "rawTorperFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1894, 3, 18, 11, this.invX - (1/2 * 18), this.invY - (1/2 * 11), 18, 11);
        }
        else if (this.type == "torperMeat")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1895, 16, 18, 11, this.invX - (1/2 * 18), this.invY - (1/2 * 11), 18, 11);
        }
        else if (this.type == "gulfreyShellArmour")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1, 157, 36, 63, this.invX - (1/2 * 36) + 2, this.invY - (1/2 * 63), 28.4, 59.6);
        }
        else if (this.type == "grewbleEgg")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 9, 29, 12, 12, this.invX - (1/2 * 12 * 2), this.invY - (1/2 * 12 * 2), 12 * 2, 12 * 2);
        }
        else if (this.type == "grewbleGuts")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 30, 1, 21, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 16), 21, 16);
        }
        else if (this.type == "lorkWeed")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 106, 173, 20, 17, this.invX - (1/2 * 20 * 2), this.invY - (1/2 * 17 * 2), 20 * 2, 17 * 2);
        }
        else if (this.type == "sesreStamen")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 263, 110, 10, 16, this.invX - (1/2 * 10 * 2), this.invY - (1/2 * 16 * 2), 10 * 2, 16 * 2);
        }
        else if (this.type == "sesreLeaf")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 282, 113, 15, 13, this.invX - (1/2 * 15 * 2), this.invY - (1/2 * 13 * 2), 15 * 2, 13 * 2);
        }
        else if (this.type == "frichPelt")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 1832, 10, 31, 18, this.invX - (1/2 * 31), this.invY - (1/2 * 18), 31, 18);
        }
        else if (this.type == "mountainFrichPelt")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 1832, 10, 31, 18, this.invX - (1/2 * 31 * 1.5), this.invY - (1/2 * 18 * 1.5), 31 * 1.5, 18 * 1.5);
        }
        else if (this.type == "rawFrichFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 65, 226, 10, 12, this.invX - (1/2 * 20), this.invY - (1/2 * 24), 20, 24);
        }
        else if (this.type == "frichMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 79, 227, 10, 12, this.invX - (1/2 * 20), this.invY - (1/2 * 24), 20, 24);
        }
        else if (this.type == "waantiPelt")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 155, 62, 20, 27, this.invX - (1/2 * 20 * 1.6), this.invY - (1/2 * 27 * 1.6), 20 * 1.6, 27 * 1.6);
        }
        else if (this.type == "rawWaantiFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 128, 95, 14, 19, this.invX - (1/2 * 14 * 1.6), this.invY - (1/2 * 19 * 1.6), 14 * 1.6, 19 * 1.6);
        }
        else if (this.type == "waantiMeat")
        {
            XXX.beginPath();
            XXX.drawImage(furr, 109, 95, 14, 19, this.invX - (1/2 * 14 * 1.6), this.invY - (1/2 * 19 * 1.6), 14 * 1.6, 19 * 1.6);
        }
        else if (this.type == "rawUtFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 233, 960, 29, 24, this.invX - (1/2 * 29 * 1.25), this.invY - (1/2 * 24 * 1.25), 29 * 1.25, 24 * 1.25);
        }
        else if (this.type == "utMeat")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 277, 962, 29, 24, this.invX - (1/2 * 29 * 1.25), this.invY - (1/2 * 24 * 1.25), 29 * 1.25, 24 * 1.25);
        }
        else if (this.type == "fermentedUtTentacle")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 375, 950, 32, 36, this.invX - (1/2 * 32 * 1.25), this.invY - (1/2 * 36 * 1.25), 32 * 1.25, 36 * 1.25);
        }
        else if (this.type == "utTentacle")
        {
            XXX.beginPath();
            XXX.drawImage(freeverse, 318, 958, 43, 23, this.invX - (1/2 * 43 * 1.25), this.invY - (1/2 * 23 * 1.25), 43 * 1.25, 23 * 1.25);
        }
        else if (this.type == "rawMountainFrichFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 65, 226, 10, 12, this.invX - (1/2 * 20 * 2), this.invY - (1/2 * 24 * 2), 20 * 2, 24 * 2);
        }
        else if (this.type == "mountainFrichMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 79, 227, 10, 12, this.invX - (1/2 * 20 * 2), this.invY - (1/2 * 24 * 2), 20 * 2, 24 * 2);
        }
        else if (this.type == "vardanianAxe")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 53, 158, 37, 22, this.invX - (1/2 * 33.3), this.invY - (1/2 * 19.8), 33.3, 19.8);
        }
        else if (this.type == "vardanianAxeDual")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 48, 187, 31, 35, this.invX - (1/2 * 27.9), this.invY - (1/2 * 31.5), 27.9, 31.5);
        }
        else if (this.type == "freydicSpear")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 4, 227, 20, 75, this.invX - (1/2 * 17.5), this.invY - (1/2 * 56.75), 17.5, 56.75);
        }
        else if (this.type == "gulfreyShell")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 48, 41, 31, 23, this.invX - (1/2 * 31), this.invY - (1/2 * 23), 31, 23);
        }
        else if (this.type == "gulfreyMandibles")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 2, 92, 33, 33, this.invX - (1/2 * 26.6), this.invY - (1/2 * 26.6), 26.6, 26.6);
        }
        else if (this.type == "rawGulfreyFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 37, 9, 20, 20, this.invX - (1/2 * 20), this.invY - (1/2 * 20), 20, 20);
        }
        else if (this.type == "gulfreyMeat")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 66, 9, 20, 20, this.invX - (1/2 * 20), this.invY - (1/2 * 20), 20, 20);
        }
        else if (this.type == "mudflyMeat")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 209, 89, 14, 12, this.invX - (1/2 * 14) * 2, this.invY - (1/2 * 12) * 2, 14 * 2, 12 * 2);
        }
        else if (this.type == "rawMudflyFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 209, 77, 14, 12, this.invX - (1/2 * 14) * 2, this.invY - (1/2 * 12) * 2, 14 * 2, 12 * 2);
        }
        else if (this.type == "mudflyMold")
        {
            XXX.beginPath();
            XXX.drawImage(lodo, 209, 65, 14, 12, this.invX - (1/2 * 14) * 2, this.invY - (1/2 * 12) * 2, 14 * 2, 12 * 2);
        }
        else if (this.type == "vomit")
        {
            XXX.beginPath();
            XXX.drawImage(oldverse, 55, 135, 24, 21, this.invX - (1/2 * 24), this.invY - (1/2 * 21), 24, 21);
        }
        else if (this.type == "gojiiBerries")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 615, 3, 19, 15, this.invX - (1/2 * 38), this.invY - (1/2 * 30), 38, 30);
        }
        else if (this.type == "nirineseSabre")
        {
            XXX.beginPath();
            XXX.drawImage(verse, 7, 7, 26, 80, this.invX - (1/2 * 19.5), this.invY - (1/2 * 60), 19.5, 60);
        }
        else if (this.type == "freezingArrow")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 66, 73, 22, 9, this.invX - (1/2 * 44), this.invY - (1/2 * 18), 44, 18);
        }
        else if (this.type == "fireArrow")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 66, 80, 22, 9, this.invX - (1/2 * 44), this.invY - (1/2 * 18), 44, 18);
        }
        else if (this.type == "lifeLeachArrow")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 65, 88, 22, 9, this.invX - (1/2 * 44), this.invY - (1/2 * 18), 44, 18);
        }
        else if (this.type == "oiledArrow")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 67, 57, 19, 7, this.invX - (1/2 * 38), this.invY - (1/2 * 14), 38, 14);
        }
        else if (this.type == "shehidToxinArrow")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 66, 21, 22, 9, this.invX - (1/2 * 44), this.invY - (1/2 * 18), 44, 18);
        }
        else if (this.type == "steelArrow")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 182, 104, 23, 9, this.invX - (1/2 * 46), this.invY - (1/2 * 18), 46, 18);
        }
        else if (this.type == "arrow")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 432, 554, 20, 8, this.invX - (1/2 * 40), this.invY - (1/2 * 16), 40, 16);
        }
        else if (this.type == "ogoFruit")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 426, 4, 12, 15, this.invX - (1/2 * 24), this.invY - (1/2 * 30), 24, 30);
        }
        else if (this.type == "blueBlade")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 8, 531, 57, 63, this.invX - (1/2 * 51.3), this.invY - (1/2 * 56.7), 51.3, 56.7);
        }
        else if (this.type == "berulnSkull")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 446, 3, 15, 20, this.invX - (1/2 * 22.5), this.invY - (1/2 * 30), 22.5, 30);
        }
        else if (this.type == "rawBerulnFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 526, 6, 21, 23, this.invX - (1/2 * 31.5), this.invY - (1/2 * 34.5), 31.5, 34.5);
        }
        else if (this.type == "berulnMeat")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 506, 38, 21, 23, this.invX - (1/2 * 31.5), this.invY - (1/2 * 34.5), 31.5, 34.5);
        }
        else if (this.type == "bigBerulnPelt")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 465, 1, 51, 30, this.invX - (1/2 * 76.5), this.invY - (1/2 * 45), 76.5, 45);
        }
        else if (this.type == "berulnPelt")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 465, 1, 51, 30, this.invX - (1/2 * 66.3), this.invY - (1/2 * 39), 66.3, 39);
        }
        else if (this.type == "longbow")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 380, 593, 34, 34, this.invX - (1/2 * 51), this.invY - (1/2 * 51), 51, 51);
        }
        else if (this.type == "walrusLeatherArmour")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 734, 202, 52, 58, this.invX - (1/2 * 52), this.invY - (1/2 * 58), 52, 58);
        }
        else if (this.type == "skinAndBones")
        {
            XXX.beginPath();
            XXX.drawImage(polpol, 105, 172, 30, 40, this.invX - (1/2 * 45), this.invY - (1/2 * 60), 45, 60);
            XXX.drawImage(polpol, 105, 172, 30, 40, this.invX - (1/2 * 45), this.invY - (1/2 * 60), 45, 60);
        }
        else if (this.type == "balgurMercArmour")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 4, 105, 39, 70, this.invX - (1/2 * 39), this.invY - (1/2 * 70), 39, 70);
        }
        else if (this.type == "balgurCaptainArmour")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 97, 108, 39, 70, this.invX - (1/2 * 39), this.invY - (1/2 * 70), 39, 70);
        }
        else if (this.type == "rawWalrusFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 99, 4, 17, 20, this.invX - (1/2 * 26.5), this.invY - (1/2 * 30), 26.5, 30);
        }
        else if (this.type == "aldrekiiBardiche")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 580, 253, 42, 137, this.invX - (1/2 * 21), this.invY - (1/2 * 68.5), 21, 68.5);
        }
        else if (this.type == "walrusMeat")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 257, 1, 17, 20, this.invX - (1/2 * 26.5), this.invY - (1/2 * 30), 26.5, 30);
        }
        else if (this.type == "walrusHide")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 287, 3, 45, 22, this.invX - (1/2 * 45), this.invY - (1/2 * 22), 45, 22);
        }
        else if (this.type == "elderWalrusHide")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 287, 3, 45, 22, this.invX - (1/2 * 90) + 7, this.invY - (1/2 * 44) + 4, 77.5, 33);
        }
        else if (this.type == "blubber")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 368, 9, 12, 13, this.invX - (1/2 * 24), this.invY - (1/2 * 26), 24, 26);
        }
        else if (this.type == "walrusTusks")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 341, 10, 17, 13, this.invX - (1/2 * 42.5), this.invY - (1/2 * 32.5), 42.5, 32.5);
        }
        else if (this.type == "elderWalrusTusks")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 341, 10, 17, 13, this.invX - (1/2 * 68), this.invY - (1/2 * 52), 68, 52);
        }
        else if (this.type == "mace")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 554, 10, 61, 36, this.invX - (1/2 * 61), this.invY - (1/2 * 38), 61, 36);
        }
        else if (this.type == "lightningCorseque")
        {
            XXX.beginPath();
            XXX.drawImage(mofu, 247, 54, 33, 77, this.invX - (1/2 * 33), this.invY - (1/2 * 77), 33, 77);
        }
        else if (this.type == "longSpikedMorningStar")
        {
            XXX.beginPath();
            XXX.drawImage(poly, 151, 128, 39, 39, this.invX - (1/2 * 39 * 1.15), this.invY - (1/2 * 39 * 1.15), 39 * 1.15, 39 * 1.15);
        }
        else if (this.type == "longsword")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 75, 366, 17, 47, this.invX - (1/2 * 25.5), this.invY - (1/2 * 70.5) - 3, 25.5, 70.5);
        }
        else if (this.type == "rawEtyrFlesh")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 43, 684, 16, 13, this.invX - (1/2 * 32), this.invY - (1/2 * 26), 32, 26);
        }
        else if (this.type == "freydicWarAxe")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 17, 115, 113, 104, this.invX - (1/2 * 90.4), this.invY - (1/2 * 83.2) + 4, 90.4, 83.2);
        }
        else if (this.type == "etyrMeat")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 73, 684, 16, 13, this.invX - (1/2 * 32), this.invY - (1/2 * 26), 32, 26);
        }
        else if (this.type == "etyrHide")
        {
            XXX.beginPath();
            XXX.drawImage(theCrack, 37, 720, 25, 18, this.invX - (1/2 * 50), this.invY - (1/2 * 36), 50, 36);
        }
        else if (this.type == "trollsBlood")
        {
            XXX.beginPath();
            XXX.drawImage(polyPNG, 385, 7, 11, 15, this.invX - (1/2 * 16.5), this.invY - (1/2 * 22.5), 16.5, 22.5);
        }
        else if (this.type == "yaihefBerries")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 62, 508, 16, 16, this.invX - (1/2 * 32), this.invY - (1/2 * 32), 32, 32);
            }
    };

    this.operations = function()
    {
        this.setItemID(); //this constantly redefines the item's stats and/or details based on the players skills (for the items that use that kind of adjustment.

        if (this.X != false && this.Y != false) //this only lets an item draw if it has coordinates other than false.
        {
            this.drawItem(); //this draws the item onto the world's map.
        }
    };

}