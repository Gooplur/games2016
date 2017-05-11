/**
 * Created by skyeguy on 1/22/17.
 */

//The adventurer is the main character or the player.
function Adventurer()
{
    //Character related variables (non-code focused)
    this.name = "Name";
    //Leveling
    this.level = 1;
    this.experience = 0;
    this.experienceRequiredToLevel = 400 + (200 * (this.level - 1));
    this.skillPoints = 4; //you gain skill points every level that you can put into your skills. (4 points per level)
    this.totalSkillPoints = (4 * this.level) + 4;
    //Magical Leveling
    this.magicLevel = 0;
    this.magicalExperience = 0;
    this.magicalExperienceRequiredToLevel = 1000 + (400 * (this.level - 1));
    this.magicalSkillPoints = 0; //you gain magical skill points every magic level that you can put into magic related skills. ( 4 points per level)
    //Faction Relations
    this.kelFaction = 0; //green (kellish) Chieftain Har
    this.thengarFaction = 0; //brown (thengan) King Wolthgar
    this.freynorFaction = 0; //blue (freydic) King Jirdun
    this.aldrekFaction = 0; //red (aldrekii) Evaraxii Zoteff
    this.orgellFaction = 0; //yellow (orgish) King Lysander
    this.vardanFaction = 0; //black (vardanian) High Count Arlod
    this.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
    this.nirwadenFaction = 0; //orange (nirinese) Queen Lelaine
    //Lesser Faction Relations
    this.theBalgurMercenariesFaction = 0; //A fearsome and powerful mercinary group in the lands of Thengaria.
    //ranks
    this.theBalgurMercenariesRank = "none";
    //Skills
    this.constitution = 50; //this determines the amount of health that the player has. (4 health per point) (50 Maximum Constitution)
    this.strength = 50; //this skill adds or subtracts from your physical damage blows based on whether or not it is positive or negative. [+ 5 points of carry weight per level] (50 Maximum Strength)
    this.stamina = 50; //stamina determines the amount of energy you have for running and attacking. (5 energy per point) (50 Maximum Stamina)
    this.dexterity = 50; //this determines how fast you can move and how fast you can run. Dexterity also determines how well you can sneak.(50 Maximum Dexterity) [don't let it be boosted past 86]
    this.ranged = 50; //this skill increases the effectiveness of ranged weaponry.
    this.survivalism = 50; //This skill lets you unlock the ability to add new beast journal entries, it increases the effectiveness of traps, and it determines all stats related to animal taming, and companionship. (50 Maximum survivalism)
    this.intelligence = 50; //intelligence helps you earn experience faster in both magical and physical leveling systems, it lets you get special bonuses from certain reading materials, and it is the key skill for use of the crafting system.
    this.endurance = 50; //this skill determines the rate of regeneration for both energy and health it also increases your total hunger points. (50 Maximum Endurance) [for developer use: 58.333 repeating is the maximum amount for energy regeneration before it breaks... at this speed it is basically instant. Health will regenerate in a negative direction though at this number, so be careful...]
    this.toughness = 50; //this skill determine the player's natural armour (up to 5!), or how much damage a player can take without it affecting the player's health. Toughness also increases the players resistance to the environment and it reduces the likeliness of taking on negative effects. (50 Maximum Toughness)
    this.charisma = 0; //this skill allows you to access certain options gained through socializing, and it also determines how fast you gain and lose fame. [high charisma means that you will gain positive as well as negative fame quicker because your actions are more noticed by people]
    //Skill Adjusters
    this.AdConstitution = 0; //this is the amount of stat adjustment to constitution.
    this.AdStrength = 0; //this is the amount of stat adjustment to strength.
    this.AdStamina = 0; //this is the amount of stat adjustment to stamina.
    this.AdDexterity = 0; //this is the amount of stat adjustment to dexterity.
    this.AdRanged = 0; //this is the amount of stat adjustment to ranged.
    this.AdSurvivalism = 0; //this is the amount of stat adjustment to survivalism.
    this.AdIntelligence = 0; //this is the amount of stat adjustment to intelligence.
    this.AdEndurance = 0; //this is the amount of stat adjustment to endurance.
    this.AdToughness = 0; //this is the amount of stat adjustment to toughness.
    this.AdCharisma = 0; //this is the amount of stat adjustment to charisma.
    this.AdSleep = 0; //this is the amount of adjustment to sleep.
    this.AdShockResist // this is extra armour given shock resist.
    //more skill adjusters
    this.dexBoost = 0; //this is stat adjustment by magic and potions.
    this.intBoost = 0; //this is stat adjustment by magic and potions.
    this.memBoost = 0; //this is stat adjustment by magic and potions.
    this.wilBoost = 0; //this is stat adjustment by magic and potions.
    this.emiBoost = 0; //this is stat adjustment by magic and potions.
    //Magical Skills
    this.willpower = 50; //this is the amount of energy the caster has to cast magic with, like MP. (100 Maximum Willpower)
    this.knowledge = 50; //this determines what caliber of spells the caster can cast.
    this.concentration = 50; //this increases the effectiveness of the spells you cast.
    this.memory = 50; //this determines the rate of willpower regeneration. (100 Maximum Memory)
    this.eminence = 50; //this helps to determine your resistance to magical damage and how easy it is to cast spells.
    //Magical Skill Adjusters
    this.AdWillpower = 0; //this is the amount of stat adjustment to willpower.
    this.AdKnowledge = 0; //this is the amount of stat adjustment to knowledge.
    this.AdConcentration = 0; //this is the amount of stat adjustment to concentration.
    this.AdMemory = 0; //this is the amount of stat adjustment to memory.
    this.AdEminence = 0; //this is the amount of stat adjustment to eminence.
    //Ascribed Traits [these traits are randomized when you start your character]
    this.title = "Fairy Princess"; //Your title is determined by your starting wealth. [ascribed titles include: scum, peasant, commoner, tradefolk, highfolk, nobility, and royalty]
    this.gender = "Female"; //this will determine which sex you start out as.
    this.raceName = "Faelan";
    this.race = "pink"; //your players race will be determined by this trait. [races in poly land are much different than in real life]
    this.class = "Politician"; //Your character's class will start your character out with a weapon appropriate to your favoured combat style.
    this.gamemode = "standard";
    //Achieved Traits
    this.Status = []; //this is a list to be filled with all of the titles that the player earns or achieves.
    this.fame = 0; //this is how popular you are with the public, if it is positive it means that they like and honor you, and if it is negative it means that they hate and despise you. [fame is gained through quests and the slayings of certain dangerous beasts, whereas infamy is gained through crime and murder]
    this.subRace = "none"; //this is a race that you are not born as but you become, like a vampire or a werewolf.
    //SkillBased Stats
    this.antiVenomMAX = 0 + Math.floor((0.5 * this.toughness / 50) + (0.5 * this.endurance / 50)); //this is the maximum amount of venom resistance the player can have.
    this.antiVenom = this.antiVenomMAX; //this is the player's venom resistance.
    this.carryWeightMAX = 10 + (5 * this.strength);
    this.carryWeight = 0;
    this.magicalResistanceTotal = this.naturalMagicalResistance + this.magicalResistance; //this is the total resistance to magical attacks that your character has.
    this.naturalMagicalResistance = 0; //this is your characters natural magically-attained resistance to magical attacks.
    this.healthMAX = 0.1 + (4 * this.constitution); //maximum amount of damage the player can take.
    this.health = this.healthMAX; //amount of damage the player can take.
    this.energyMAX = 6 + (5 * this.stamina); //maximum amount of energy the player has.
    this.energy = this.energyMAX;//this.energyMAX; //characters energy for doing things.
    this.willMAX = 0.1 + this.willpower; //maximum amount of magical casting power.
    this.will = this.willMAX; //magical casting power.
    this.bindedWill = 0; //this is the amount of will that is dedicated to maintaining soul bind spells.
    this.armourTotal = this.naturalArmour + this.armour; //amount of damage that is deducted from incoming attacks before it applies to the player's health.
    this.naturalArmour = 0; //amount of armour a player has without including armor that the player could wear.
    this.baseHunger = 50;
    this.hungerMAX = 50;
    this.hunger = this.hungerMAX;
    this.thirstMAX = 20;
    this.thirst = this.thirstMAX;
    this.sleepMAX = 24;
    this.sleep = this.sleepMAX;
    this.extraSleep = 0; //this is sleep that is affected by spells or potion effects etc.
    this.totalSleep = this.sleepMAX + this.extraSleep + this.AdSleep;
    this.shockResist = 0; //this is your resistance to electric shock based damage
    this.totalShockResist = this.shockResist + this.AdShockResist;
    this.acidResistance = 0;
    //Non-SkillBased Stats
    this.armour = 0; //this is the armor that is gained from worn equipment.
    this.magicalResistance = 0; //this is the magical resistance that is gained from worn equipment.
    //Items and Such
    this.unskilledUse = false;
    this.weaponEquipped = "none";
    this.outfitEquipped = "none";
    this.glovesEquipped = "none";
    this.ringEquipped = "none";
    this.necklaceEquipped = "none";
    this.bootsEquipped = "none";

    //CODE FOCUSED VARIABLES (the stuff that is not so pretty to look at, but that makes the world go 'round)
    //position and build
    this.zIndex = 3;
    this.mySize = 10; // This determines the size of the player's body... Do not change this value!!!
    this.myScreenX = 700; //This is the midpoint X of the canvas.
    this.myScreenY = 275; //This is the midpoint Y of the canvas.
    this.rotation = 90 / 180 * Math.PI; //This is the rotation of your character in radians.
    //Location in game
    this.underground = false;
    //attacking variables
    this.stage = 0; //Stage represents which frame in a combat animation the character is on, and it is used to create weapon animations.
    this.attacking = false; //This variable is triggered by the attack button, when triggered and true it initiates an attack and it will not turn false again until that attack is carried out.
    this.resetFrameOrder = true; //This unlocks the animation for attacking when true, and locks it when false so that internal attack processes can finish up.
    //variables for walking and running related functions
    this.lLegY = 0; // this changes the length of the player's left leg
    this.rLegY = 0; // this changes the length of the player's right leg
    this.movingType = 1; //There are three four moving types 0: standing, 1: walking, 2: running, 3: sneaking 4: backwalking
    this.legSwitch = 0;
    //Climate Affected Stats
    this.baseWarmth = 50;
    this.baseThirst = 20;
    this.warmthMAX = 50 + (1 * this.endurance) + (4 * this.toughness); //This is how warm you are... if it goes to 0 or below then the player will start losing health at an average rate but also their speed will be massively decreased. [It only goes down in cold climates](freezing to death)
    this.warmth = this.warmthMAX; //This is the players current warmth.
    this.timeSinceLastWarmthChange = new Date().getTime(); //This is the time since the last change in the player's warmth.
    this.heatResistance = 0; //this is the amount of resistance from thirst depriving conditions and heat related effects the player has.
    this.warmthProtection = 0; //this is the amount of protection against the cold the player has.
    this.timeSinceLastColdRush = new Date().getTime(); //this is the time that has passed since the last time the player was hurt from being frozen.
    //Sensing related variables
    this.noticed = false; // if noticed is true it means that an AI Unit has and is currently noticing the player.
    this.inCombat = false; // this flag specifies whether or not the player is being attacked by a AI Unit.
    //attacking variables
    this.fistDamage = 0.25 + this.strength / 30; // this is the damage done by the player's fists
    this.bubbleOfDamageX = 0; //this is the x coordinate of the zone that the player hurts enemies with physical attacks in. (it changes based on the weapon.)
    this.bubbleOfDamageY = 0; //this is the y coordinate of the zone that the player hurts enemies with physical attacks in. (it changes based on the weapon.)
    this.weaponIsRanged = false; //this is flagged true if your weapon is a ranged weapon.
    this.weaponIsMagic = false; //this is flagged true if your weapon is a magical spell.
    this.finalAttackStage = false; //this lets you know when your attack animation is on its final frame.
    this.attackPause = new Date().getTime(); //This leaves a gap between your attacks so that you do not deal damage instantly.
    this.strike = false;
    this.releaseStage = false; //for archery this is the stage after the arrow has been loosed.
    this.ammoLoaded = false; //When the animation of loading the arrow/bolt etc. is done this flag turns on, allowing the player to shoot the projectile.
    this.reloadTime = new Date().getTime(); //this is the time that the player must wait before reloads.
    this.attackCooldown = new Date().getTime();
    this.attackManual = false; //this flag regulates manual attacking so that only one attack happens per attack.
    //blocking variables
    this.block = false;
    this.blocking = false;
    this.shielding = 0; //Shielding is the added armour from blocking with a shield or other blocking type of weapon.
    //archery
    this.projectileX = 0;
    this.projXAd = 0;
    this.projectileY = 0;
    this.projYAd = 0;
    //Bind Spell variables
    this.fistMagicalDamage = 0; //This is the magical damage the player does with his/her fists.
    //getOnTouchSpellResources
    this.fireHands = false;
    this.shockHands = false;
    this.freezeHands = false;
    //shieldingSpells
    this.mageShieldMAX = 0;
    this.mageShield = 0;
    this.mageShieldRate = 14;
    this.mageShieldSize = 0;
    this.mageShieldColour = "skyblue";
    //shield type variables
    this.sRaincoat = false;
    this.shieldingI = false;
    this.shieldingII = false;
    this.shieldingIII = false;
    this.shieldingIV = false;
    this.shieldingV = false;
    //(Official) Magic Variables
    this.spellSlots = 1; //this is the number of secondary spells or "incatations" the player can cast with the number keys.
    this.spellSlotsUsed = 0;
    this.spell = "none";
    this.sp1 = "none";
    this.sp2 = "none";
    this.sp3 = "none";
    this.sp4 = "none";
    this.sp5 = "none";
    this.sp6 = "none";
    this.sp7 = "none";
    this.sp8 = "none";
    this.sp9 = "none";
    this.passiveSpellsEquipped = [];
    this.casting = false;
    this.castingCooldown = new Date().getTime();
    this.secondaryCastingCooldown = new Date().getTime();
    this.doMagic = true; //this allows things to be done in the magic animation thing.
    //Inventory Variables
    this.inventoryPosition = 0;
    this.hinderance = false; //this is the state of being over-cucumbered.
    this.lootRadius = 50;
    this.distanceFromMouse = 0;
    this.isWeaponEquipped = false;
    this.isArmourEquipped = false;
    this.isAmmoEquipped = false;
    this.projectileReleased = true;
    this.rangedWeaponType = "none";
    this.areGlovesEquipped = false;
    this.isNecklaceEquipped = false;
    this.isRingEquipped = false;
    this.areBootsEquipped = false;
    //Shop Variables
    this.merchPosition = 0;
    //Bank Variables
    this.bankPosition = 0;
    //Crafting Variables
    this.craftPosition = 0;
    //Dialogue Variables
    this.dialoguePosition = 0; //This is the particular dialogue option you are on.
    this.dialogueOptions = []; //These are the options the player is allowed to choose from, they vary depending on which AI you speak with.
    this.dialogueChoiceMade = false; //this is a variable that helps determine when the player has chosen what to say during dialogue, it will be reset after the recipient registers the players input.
    this.romance = []; //This is the list of individuals in game that are in a romantic relationship with you.
    //effects variables
    this.miningLuck = 0;
    this.fedClock = 0; // this is the amount of time a player can avoid losing hunger after eating. This value is set elsewhere.
    this.fed = true; //When this is initiated the player will become satiated for a short duration of time.
    this.satiated = false; //This is an effect that means that the player is full and will not get hungry.
    this.gojiiTimer = 0;
    this.gojiiVomit = false; //this is a flag that makes sure that the vomiting part of gojii poisoning only happens once.
    this.timeSinceLastPoisoned = new Date().getTime();
    this.timeSinceBadFoodEaten = 0; //this is the time past which the player will throw up from food poisoning.
    this.poisonI = false;
    this.poisonII = false;
    this.poisonIII = false;
    this.poisonIV = false;
    this.poisonV = false;
    this.poisoned = false;
    this.gojiiPoisoned = false;
    this.swollenI = false;
    this.swollenII = false;
    this.swollenIII = false;
    this.swollenIV = false;
    this.swollenV = false;
    this.swollenSTR = 0;
    this.swollenDEX = 0;
    this.swollenRNG = 0;
    this.swollenCON = 0;
    this.swollenEND = 0;
    this.swollenTime = 0;
    this.fungalFever = false;
    this.timeSinceLastSwollen = new Date().getTime();
    this.timeSinceLastGutFeast = new Date().getTime();
    this.gutWorms = false; //this effect slowly saps the players hunger until the gutWorms starve to death or the player does at -1 hunger.
    this.freeze = 1; // this should be at one while the player has sufficient warmth. Otherwise, it should increase proportionally up to 4 by the time warmth is zero.
    this.frozen = false; //this is the flag that is triggered after the players warmth has reached 0 or below.
    this.freezing = false; //this is the effect during which the player loses warmth.
    this.recoverI = false;
    this.recoverII = false;
    this.recoverIII = false;
    this.recoverIV = false;
    this.recoverV = false;
    this.recovered = false; //this is the mini notice for health regeneration.
    this.recoveryTime = 0; //this is the amount of health bonuses the player gets over time.
    this.timeSinceLastRecovery = 0;
    this.energizeI = false;
    this.energizeII = false;
    this.energizeIII = false;
    this.energizeIV = false;
    this.energizeV = false;
    this.energized = false; //this is the mini notice for energy regeneration.
    this.energizeTime = 0; //this is the amount of energy bonuses the player gets over time.
    this.timeSinceLastEnergize = 0;
    this.energilI = false;
    this.energilII = false;
    this.energilIII = false;
    this.energilIV = false;
    this.energilV = false;
    this.fatigueI = false;
    this.fatigueII = false;
    this.fatigueIII = false;
    this.fatigueIV = false;
    this.fatigueV = false;
    this.energil = false; //this is the mini notice for energy regeneration.
    this.energilTime = 0; //this is the amount of energy bonuses the player gets over time.
    this.timeSinceLastEnergil = 0;
    this.speedI = false;
    this.speedII = false;
    this.speedIII = false;
    this.speedIV = false;
    this.speedV = false;
    this.dexTime = 0; //this is the amount of time that helps determine how long dexterity is magically increased.
    this.speedBoost = false; //this is the flag that indicates whether the effect is active for the mini notice system.
    this.intelligenceBoost = false;
    this.intelligenceI = false;
    this.intelligenceII = false;
    this.intelligenceIII = false;
    this.intelligenceIV = false;
    this.intelligenceV = false;
    this.intTime = 0; //this is the amount of time that helps determine how long intelligence is magically increased.
    this.willpowerBoost = 0;
    this.wilTime = 0; //this is the amount of time that helps determine how long willpower is magically increased.
    this.willpowerI = false;
    this.willpowerII = false;
    this.willpowerIII = false;
    this.willpowerIV = false;
    this.willpowerV = false;
    this.memBoost = 0;
    this.memTime = 0; //this is the amount of time that helps determine how long memory is magically increased.
    this.memoryI = false;
    this.memoryII = false;
    this.memoryIII = false;
    this.memoryIV = false;
    this.memoryV = false;
    this.timeSinceRawTrollBlood = 0; //this is the timer for troll poisoning
    this.trollPoisonActive = false; //this is the reset for troll poisonings magic resistance effect (resets the eminence boost to 0 when true)
    this.stunned = false; //this denotes whether or not the player is stunned and displays the mininotice icon if the player is.
    this.stunnedI = false;
    this.stunnedII = false;
    this.stunnedIII = false;
    this.stunnedTime = 0;
    this.stunTimer = new Date().getTime();
    this.fleshMites = false;
    this.timeSinceLastFleshFeast = new Date().getTime();
    this.burningTime = 0;
    this.burningTime2 = new Date().getTime();
    this.wateredClock = 0; //this is like fedClock for thirst.
    this.watered = true; //this is like fed for thirst.
    this.quenched = false; //this is like satiated for thirst.
    this.inebriation = 0;
    this.inebriated = false;
    this.timeSinceLastAlcoholCleanse = new Date().getTime();
    this.cyrinthilimTrip = false;
    this.cyrinthilimTime = 0;
    this.haeflowerTrip = false;
    this.haeflowerTime = 0;
    this.gassiness = false;
    this.gassyCha = 0;
    this.gassinessTime = 0;
    this.frozenTime = 0;
    this.nightVision = false;
    this.nonLimitedLightSource = false; //if a light source like a magical light sword or a torch is equipped this is true;
    this.timeSinceLightSourceFuelUsed = 0;
    this.lightSourceDuration = 0;
    this.lightSource = "none";
    this.storeGameTimeForSleep = gameTime;
    this.tireless = false; //if activated sleep does not go down or affect you. (this is like satiate or quench for sleep)
    this.tirelessTime = 15; //this is the timer in seconds that tireless endures.
    this.tirelessStoreTime = 0; //this needs to be set to new Date().getTime() in order for tireless to be activated.
    this.insomnia = false;
    this.insomniaTime = 0;
    this.insomniaStoreTime = 0;
    this.insomniated = false; //this is a flag that lets thing give the player permanent insomnia until this is switched off by something.
    this.blinded = false;
    this.blindedTime = 0;
    this.blindedStoreTime = 0;
    this.brainMaggots = false; //brain maggots give you brain damage and insomnia and eventually leads to blindness and death.
    this.perfume = "none";
    this.perfumeTime = 0;
    this.perfumeStoreTime = 0;
    this.perfumeCHA = 0;
    this.shockedTime = 0;
    this.shockedTime2 = new Date().getTime();
    this.immune = false; //this while true makes enemy damage equal to 0.
    this.illnesses = []; //what you're sick with.
    this.antibodies = []; //what you were once sick with and now immune to.
    this.bandagedStoreTime = new Date().getTime();
    this.bandagedTime = 0; //time limit for bandages
    this.bandaged = false; //this flag is true when your character has applied bandages which are still in effect.
    this.acidV = false;
    this.acidIV = false;
    this.acidIII = false;
    this.acidII = false;
    this.acidI = false;
    this.halfAcid = false;
    this.quarterAcid = false;
    this.acidTime = new Date().getTime();
    this.keepSuperStealth = new Date().getTime();
    this.superStealth = false; //this flag is used to check if the player is in superstealth.
    this.superStealthTime = 0.5; //this number is what actually activates superstealth.
    this.superStealthCooldown = 20; //this is the cooldown for superstealth.
    this.superStealthCooldownKeeper = new Date().getTime();
    this.superStealthBonus = 0; //this is the bonus to superstealth.
    this.superStealthCooldownReduction = 0; //this is the reduction of superstealth's cooldown.



    //utility or extra variables
    this.AdAbility = []; //this is a list of all active abilities held by armours and equipped outfits
    this.outfitZ = true; //this is the layer determiner for the players outfit, so that the outfit can draw underneath or above the players body layer.
    this.capeFlappiness = 0; //this is a variable that determines what costume the cape will be.
    this.wasCapeFlapping = false; //this lets the cape know it was showing so when the player slows down or stops moving the cape will ease back.
    this.decreaseInHealth = 0;
    this.stage = 0;
    this.experienceToggle = "normal"; //This flag is for toggling between the magical experience bar and the regular one.
    this.playerDeath = false; //this is the thing that lets the player only die once when they die.
    this.REQB = false; //Ranged Equip Blocker //stops the player from unequipping or equipping while ammunition is loaded into a ranged weapon. Prevents while true allows while false.
    this.cutcut = false; //for an sort of attacking of scenery this allows you to signal that an attack has happened.
    this.spellzLearned = 0;
    this.flashFrameTime = new Date().getTime();
    this.flashFrame = 0;
    this.outfitType = "none";
    this.glovesType = "none";
    this.necklaceType = "none";
    //extra-movement variables
    this.jumpBackKeepTime = 0;
    this.jumpBackTime = 8;
    this.jumpDistance = 5;
    this.jumpingBack = false;
    this.jBack = 0;
    this.readyToStopJumpingBack = false;
    this.readyForAnotherJumpBack = true;
    //mount variables
    this.mounted = false; //Are you mounted?
    this.mountType = "none"; //What type of mount is it?
    this.mountSpeed = 0; //The official speed of your mount
    this.mountMove = 0; //how fast your mount moves.

    //a function for all of the small functions to fix tiny obscure yet sometimes important details...
    this.quickFixes = function()
    {
        //keep the player from getting stuck outside of dialogue for dialogue reasons.
        if (lowBar != "dialogue")
        {
            this.speechMovementInhibitor = false;
            playersTurnToMove = true;
        }
        else
        {
            playersTurnToMove = false;
        }
        //noUnequipRangeWhileLoaded
        if (this.weapon.subUtility == "bow")
        {
            if (this.projectileReleased == true)
            {
                this.REQB = false;
            }
            else
            {
                this.REQB = true;
            }
        }
        else if (this.weapon.subUtility == "crossbow")
        {
            if (this.ammoLoaded == false)
            {
                this.REQB = false;
            }
            else
            {
                this.REQB = true;
            }
        }
        else if (this.weapon.subUtility == "gun")
        {
            if (this.ammoLoaded == false)
            {
                this.REQB = false;
            }
            else
            {
                this.REQB = true;
            }
        }

        //setSpellToFalseWhenWeaponIsTrue
        if (this.weaponEquipped != "none" && this.spell != "none")
        {
            this.spell = "none";
            for (var i = 0; i < primarySpells.length; i++)
            {
                primarySpells[i].equipped = false;
            }
        }

        //electricity on the highest layer possible;
        this.onElectric = function()
        {
            if (new Date().getTime() - this.shockedTime <= 3000 && (1 - (this.shockResist / 10)) > 0)
            {
                this.flashAnimate(90, this.rotation, 0.90, [{image: mofu, imgX: 415, imgY: 4, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * this.mySize, adjY: -1 / 2 * ((28 * 1.5)/10) * this.mySize, width: ((28 * 1.5)/10) * this.mySize, height: ((28 * 1.5)/10) * this.mySize}, {image: mofu, imgX: 455, imgY: 3, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * this.mySize, adjY: -1 / 2 * ((28 * 1.5)/10) * this.mySize, width: ((28 * 1.5)/10) * this.mySize, height: ((28 * 1.5)/10) * this.mySize}, {image: mofu, imgX: 497, imgY: 4, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * this.mySize, adjY: -1 / 2 * ((28 * 1.5)/10) * this.mySize, width: ((28 * 1.5)/10) * this.mySize, height: ((28 * 1.5)/10) * this.mySize}]);
                if (new Date().getTime() - this.shockedTime2 >= 250)
                {
                    this.shockedTime2 = new Date().getTime();
                    this.health -= Math.max(0, 1 - (this.totalShockResist / 10));
                }
            }
        }
        //fire effect on highest layer possible;
        this.onFire = function()
        {
            if (new Date().getTime() - this.burningTime <= 9000 && (1.2 - this.heatResistance) > 0)
            {
                this.flashAnimate(90, this.rotation, 0.90, [{image: polypol, imgX: 1691, imgY: 184, portionW: 24, portionH: 23, adjX: -1/2 * ((24 * 1.5)/10) * this.mySize, adjY: -1/2 * ((23 * 1.5)/10) * this.mySize, width: ((24 * 1.5)/10) * this.mySize, height: ((23 * 1.5)/10) * this.mySize}, {image: polypol, imgX: 1721, imgY: 185, portionW: 24, portionH: 23, adjX: -1/2 * ((24 * 1.5)/10) * this.mySize, adjY: -1/2 * ((23 * 1.5)/10) * this.mySize, width: ((24 * 1.5)/10) * this.mySize, height: ((23 * 1.5)/10) * this.mySize}, {image: polypol, imgX: 1750, imgY: 185, portionW: 24, portionH: 23, adjX: -1/2 * ((24 * 1.5)/10) * this.mySize, adjY: -1/2 * ((23 * 1.5)/10) * this.mySize, width: ((24 * 1.5)/10) * this.mySize, height: ((23 * 1.5)/10) * this.mySize}, {image: polypol, imgX: 1783, imgY: 185, portionW: 24, portionH: 23, adjX: -1/2 * ((24 * 1.5)/10) * this.mySize, adjY: -1/2 * ((23 * 1.5)/10) * this.mySize, width: ((24 * 1.5)/10) * this.mySize, height: ((23 * 1.5)/10) * this.mySize}]);
                if (new Date().getTime() - this.burningTime2 >= 99)
                {
                    this.frozenTime = 0;
                    this.burningTime2 = new Date().getTime();
                    this.health -= Math.max(0, 0.12 - (this.heatResistance / 10));
                    this.warmth += 0.5;
                    this.thirst = Math.max(0, this.thirst - 0.11);
                }
            }
        };
        this.onFire();

        this.onIce = function()
        {
            if (this.warmthProtection < 100 && new Date().getTime() - this.frozenTime <= 4500)
            {
                this.burningTime = 0;
                this.warmth = Math.max(-5, this.warmth - ((this.warmthMAX + 5) - this.warmthProtection));
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.globalAlpha = 0.9;
                XXX.drawImage(polypol, 1691, 240, 28, 24, - 1/2 * (28 * 1.2) / 10 * this.mySize, - 1/2 * (24 * 1.2) / 10 * this.mySize, (28 * 1.2) / 10 * this.mySize, (24 * 1.2) / 10 * this.mySize);
                XXX.restore();
            }
        };
        this.onIce();
    };

    //experience and leveling function
    this.doLeveling = function()
    {
        if (this.raceName == "Cephrite")
        {
            this.totalSkillPoints = 4 * this.level;

            if (this.title == "Royalty")
            {
                if (this.class == "Mage")
                {
                    this.totalMagicPoints = (2 * this.magicLevel) + 9 - this.spellzLearned;
                }
                else
                {
                    this.totalMagicPoints = (2 * this.magicLevel) + 6 - this.spellzLearned;
                }
            }
            else
            {
                if (this.class == "Mage")
                {
                    this.totalMagicPoints = (2 * this.magicLevel) + 7 - this.spellzLearned;
                }
                else
                {
                    this.totalMagicPoints = (2 * this.magicLevel) + 4 - this.spellzLearned;
                }
            }
        }
        else
        {
            if (this.title == "Royalty")
            {
                this.totalSkillPoints = (4 * this.level) + 6;
            }
            else
            {
                this.totalSkillPoints = (4 * this.level) + 4;
            }

            if (this.class == "Mage")
            {
                this.totalMagicPoints = 2 * this.magicLevel + 3 - this.spellzLearned;
            }
            else
            {
                this.totalMagicPoints = 2 * this.magicLevel - this.spellzLearned;
            }
        }

        //MAGICAL LEVELING
        if (this.magicLevel < 25)
        {
            this.magicalExperienceRequiredToLevel = 1200 + (400 * (this.magicLevel - 1));
        }
        else if (this.magicLevel < 35)
        {
            this.magicalExperienceRequiredToLevel = 2000 + (600 * (this.magicLevel - 1));
        }
        else if (this.magicLevel < 55)
        {
            this.magicalExperienceRequiredToLevel = 3000 + (900 * (this.magicLevel - 1));
        }
        else
        {
            this.magicalExperienceRequiredToLevel = 4200 + (1300 * (this.magicLevel - 1));
        }

        //STANDARD LEVELING
        if (this.level < 10)
        {
            this.experienceRequiredToLevel = 400 + (200 * (this.level - 1));
        }
        else if (this.level < 20)
        {
            this.experienceRequiredToLevel = 1000 + (400 * (this.level - 1));
        }
        else if (this.level < 30)
        {
            this.experienceRequiredToLevel = 2200 + (600 * (this.level - 1));
        }
        else if (this.level < 40)
        {
            this.experienceRequiredToLevel = 4600 + (800 * (this.level - 1));
        }
        else if (this.level < 50)
        {
            this.experienceRequiredToLevel = 9400 + (1000 * (this.level - 1));
        }
        else
        {
            this.experienceRequiredToLevel = 19000 + (1200 * (this.level - 1));
        }


        if (this.experience >= this.experienceRequiredToLevel)
        {
            this.experience -= this.experienceRequiredToLevel;
            this.level += 1;
            this.skillPoints += 4;

            popDuration = new Date().getTime();
            popType = "levelup";
            //console.log("You are now level " + this.level + ", and now have " + this.skillPoints + " skill points to spend!");
        }

        if (this.magicalExperience >= this.magicalExperienceRequiredToLevel)
        {
            this.magicalExperience -= this.magicalExperienceRequiredToLevel;
            this.magicLevel += 1;
            this.magicalSkillPoints += 2;

            popDuration = new Date().getTime();
            popType = "magicLevelup";
        }
        //console.log(this.experience);
    };
    //set stats function
    this.setBaseStats = function ()
    {
        //calculate how much will max is decreased by tertiary bind spells.
        var bindedWillSum = 0;
        for (var i = 0; i < bindedWillList.length; i++)
        {
            bindedWillSum += bindedWillList[i][1];
        }
        this.bindedWill = bindedWillSum;

        //this sets all other skills listed.
        this.fistDamage = 0.25 + (this.getStrength() / 50); // this is the damage done by the player's fists
        this.antiVenomMAX = 0 + (0.7 * (this.getToughness() / 50)) + (0.3 * (this.getEndurance() / 50)); //this is the maximum amount of venom resistance the player can have.
        this.carryWeightMAX = 10 + (5 * this.getStrength());
        this.naturalArmour = this.getToughness() / 50;
        this.armourTotal = this.naturalArmour + this.armour + this.shielding;
        this.willMAX = (0.1 + this.willpower) - this.bindedWill;
        this.energyMAX = 6 + (5 * this.getStamina());
        this.healthMAX = 0.1 + (4 * this.getConstitution());
        this.naturalMagicalResistance = this.getEminence() / 5;
        this.magicalResistanceTotal = this.naturalMagicalResistance + this.magicalResistance;
        this.hungerMAX = this.baseHunger;
        this.thirstMAX = this.baseThirst;
        this.warmthMAX = this.baseWarmth + (1 * this.getEndurance()) + (4 * this.getToughness());
        this.spellSlots = 1 + Math.floor(this.memory * 8 / 50);
        this.sleepMAX = 24 + this.getEndurance();
        this.totalSleep = this.sleepMAX + this.extraSleep + this.AdSleep;
        this.totalShockResist = this.shockResist + this.AdShockResist;
        this.jumpBackTime = 8 - (this.getEndurance() / 12.5);

        //this sets carry weight based on the total added weights in the player's inventory.
        if (Inventory.length > 0)
        {
            var totalWeight = 0;
            for (var i = 0; i < Inventory.length; i++)
            {
                Inventory[i][0].setItemID();
                totalWeight += (Inventory[i][0].weight * Inventory[i][1]); //this is the weight from the item times the amount of items of that type in the inventory.
            }
            this.carryWeight = totalWeight;
            //console.log("The carryWeight is: " + this.carryWeight + " out of a total potential weight limit of " + this.carryWeightMAX + ".")
        }
        else
        {
            this.carryWeight = 0; //If the Inventory is empty then the carry weight is 0.
        }
    };

    this.flashAnimate = function(framerate, rotation, transparency, list, doAfter)
    {
        //use a list with coords for images: [{image:, imgX:, imgY:, portionW:, portionH:, adjX:, adjY:, width:, height:}, ... etc.]
        if (this.flashFrame >= list.length)
        {
            if (typeof(doAfter) != "undefined")
            {
                if (doAfter == true)
                {
                    return true;
                }
            }
            this.flashFrame = 0;
        }

        if (rotation != false)
        {
            XXX.save();
            XXX.globalAlpha = transparency;
            XXX.translate(this.myScreenX, this.myScreenY);
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

    this.effects = function ()
    {
        this.outfitEffects = function()
        {
            //CHECK FOR EFFECTS
            //set flags
            var resistDiseaseFlag = false;
            var drainPlayerFlag = false;
            var drainCorpseFlag = false;

            //search worn ability list for abilities
            for (var i = 0; i < this.AdAbility.length; i++)
            {
                if (this.AdAbility[i] == "resistDisease")
                {
                    resistDiseaseFlag = true;
                }
                if (this.AdAbility[i] == "drainPlayer")
                {
                    drainPlayerFlag = true;
                }
                if (this.AdAbility[i] == "drainCorpse")
                {
                    drainCorpseFlag = true;
                }
            }

            //EXECUTE EFFECTS

            //resistDisease
            if (resistDiseaseFlag)
            {
                this.resistDisease = true;
            }
            else
            {
                this.resistDisease = false;
            }

            if (drainPlayerFlag)
            {
                this.health -= 0.11;
            }

            if (drainCorpseFlag)
            {
                for (var i = 0; i < deadAIList.length; i++)
                {
                    var distToCorpse = Math.sqrt((X - deadAIList[i].X) * (X - deadAIList[i].X) + (Y - deadAIList[i].Y) * (Y - deadAIList[i].Y));
                    var corpseDrainAmount = 2 + Math.floor(this.getEminence() / 10);
                    if (distToCorpse <= 25 + (15 * this.getEminence()))
                    {
                        for (var j = 0; j < corpseDrainAmount; j++)
                        {
                            magicList.push(new Magic({ID: "drainOrb"}, false, 0, deadAIList[i]));
                        }
                        deadAIList.splice(i, 1);
                    }
                }
            }
        };

        this.sickness = function() //illnesses lists are so: ["name", #timeSick#, #initialIllnessDuration#]
        {
            for (var j = 0; j < this.illnesses.length; j++)
            {
                for (var i = 0; i < this.antibodies.length; i++)
                {

                    if (this.antibodies[i][1] <= 0)
                    {
                        this.antibodies.splice(i, 1);
                        break;
                    }
                    else
                    {
                        this.antibodies[i][1] -= 0.001;

                        if (this.illnesses[j][0] == this.antibodies[i][0])
                        {
                            this.illnesses.splice(j, 1);
                            break;
                        }
                    }
                }
                var illDuration = Math.max(6, this.illnesses[j][2] - this.getToughness());
                if (this.illnesses[j][1] >= this.illDuration)
                {
                    this.antibodies.push([this.illnesses[j][0], 2500 + (12 * this.getToughness())]);
                }
                else
                {
                    this.illnesses[j][1] += 0.001;

                    if (this.illnesses[j][1] >= (illDuration / 8))
                    {
                        //ILLNESSES TAKE EFFECT HERE
                        if (this.illnesses[j][0] == "Throat-Frost")
                        {
                            //Throat-Frost causes your body to stop producing enough natural heat.
                            this.warmth -= 0.0002;

                            //by the middle of its duration the body reacts with swelling
                            if (this.illnesses[j][1] >= (illDuration * 5 / 8) && this.illnesses[j][1] <= (illDuration * 7.25 / 8))
                            {
                                this.swollenII = true;
                                swollenTime = Math.max(player.swollenTime, 90);
                                this.energy -= 0.0001;
                            }
                        }
                    }
                }
            }
        };

        this.sleepCalculator = function()
        {
            if (new Date().getTime() - this.tirelessStoreTime <= this.tirelessTime * 1000)
            {
                this.tireless = true;
            }
            else
            {
                this.tireless = false;
            }

            if (this.tireless != true)
            {
                if (gameTime - this.storeGameTimeForSleep >= 60)
                {
                    if (fairSleep)
                    {
                        this.storeGameTimeForSleep = gameTime;
                        this.storeSleeperTime = sleeperTime;
                        fairSleep = false;
                    }
                    if (gameTime > this.storeGameTimeForSleep)
                    {
                        console.log(((gameTime - this.storeGameTimeForSleep)/(60 * 60)));
                        this.sleep -= ((gameTime - (this.storeGameTimeForSleep + (sleeperTime - this.storeSleeperTime)))/(60 * 60));
                        this.storeGameTimeForSleep = gameTime;
                        this.storeSleeperTime = sleeperTime;
                    }
                }
            }
            else
            {
                this.storeGameTimeForSleep = gameTime;
            }

            //console.log(this.sleep + " :: " + (gameTime - this.storeGameTimeForSleep) + " ;; " + minuteOfHour);

            if (this.sleep > this.totalSleep) //total sleep == sleepMAX extraSleep and AdSleep
            {
                this.sleep = this.totalSleep;
            }

            //da la (player) efectos negativos por no haber dormido por mucho tiempo.
            if (this.sleep <= 0 && this.sleep > -24)
            {
                if (this.energilI != true)
                {
                    this.fatigueI = true;
                    this.energilTime = Math.max(4, this.energilTime);
                    if (this.will > this.willMAX / 2)
                    {
                        this.will = this.willMAX / 2;
                    }
                }
            }
            else if (this.sleep <= -24 && this.sleep > -48)
            {
                if (this.energilII != true)
                {
                    this.fatigueII = true;
                    this.energilTime = Math.max(4, this.energilTime);
                    if (this.will > this.willMAX / 4)
                    {
                        this.will = this.willMAX / 4;
                    }
                }
            }
            else if (this.sleep <= -48 && this.sleep > -72)
            {
                if (this.energilIII != true)
                {
                    this.fatigueIII = true;
                    this.energilTime = Math.max(4, this.energilTime);
                    if (this.will > this.willMAX / 8)
                    {
                        this.will = this.willMAX / 8;
                    }
                }
            }
            else if (this.sleep <= -72 && this.sleep > -96)
            {
                if (this.energilIV != true)
                {
                    this.fatigueIV = true;
                    this.energilTime = Math.max(4, this.energilTime);
                    if (this.will > this.willMAX / 16)
                    {
                        this.will = this.willMAX / 16;
                    }
                }
            }
            else if (this.sleep <= -96)
            {
                if (this.energilV != true)
                {
                    this.fatigueV = true;
                    this.energilTime = Math.max(4, this.energilTime);
                    if (this.will > this.willMAX / 32)
                    {
                        this.will = this.willMAX / 32;
                    }
                }
            }

            //Insomnia
            if (new Date().getTime() - this.insomniaStoreTime <= this.insomniaTime * 1000 || this.brainMaggots == true || this.cyrinthilimTime > 0 || this.insomniated == true)
            {
                this.insomnia = true;
            }
            else
            {
                this.insomnia = false;
            }
        };

        this.tepprekliaFungalFever = function()
        {
            if (this.swollenV == false)
            {
                this.fungalFever = false;
            }

            if (this.fungalFever)
            {
                this.warmth += 0.002;
                this.thirst -= 0.001;
            }
        };

        this.blinder = function()
        {
            //Blinded
            if (new Date().getTime() - this.blindedStoreTime <= this.blindedTime * 1000 || this.intelligence < -15 && this.brainMaggots == true)
            {
                this.blinded = true;
            }
            else
            {
                this.blinded = false;
            }
        };

        this.brainMaggot = function()
        {
            if (this.brainMaggots == true)
            {
                if (gameLoopNumber % 5500 == 0)
                {
                    this.intelligence -= 1;
                    if (this.intelligence < -5)
                    {
                        this.health -= 6;
                        this.energy -= 3;
                        this.will -= 9;
                    }
                }
            }
        };

        this.swollen = function()
        {
            if (new Date().getTime() - this.timeSinceLastSwollen > 1000)
            {
                this.timeSinceLastSwollen = new Date().getTime();
                this.swollenTime = Math.max(0, this.swollenTime - 1);
            }

            if (this.swollenTime > 0)
            {
                if (this.swollenV)
                {
                    this.swollenDEX = -8;
                    this.swollenSTR = -5;
                    this.swollenCON = -8;
                    this.swollenRNG = -5;
                    this.swollenEND = -8;
                }
                else if (this.swollenIV)
                {
                    this.swollenDEX = -5;
                    this.swollenSTR = -3;
                    this.swollenCON = -5;
                    this.swollenRNG = -3;
                    this.swollenEND = -5;
                }
                else if (this.swollenIII)
                {
                    this.swollenDEX = -3;
                    this.swollenSTR = -2;
                    this.swollenCON = -3;
                    this.swollenRNG = -2;
                    this.swollenEND = -3;
                }
                else if (this.swollenII)
                {
                    this.swollenDEX = -2;
                    this.swollenSTR = -1;
                    this.swollenCON = -2;
                    this.swollenRNG = -1;
                    this.swollenEND = -2;
                }
                else if (this.swollenI)
                {
                    this.swollenDEX = -1;
                    this.swollenSTR = 0;
                    this.swollenCON = -1;
                    this.swollenRNG = 0;
                    this.swollenEND = -1;
                }
            }
            else
            {
                this.swollenV = false;
                this.swollenIV = false;
                this.swollenIII = false;
                this.swollenII = false;
                this.swollenI = false;

                this.swollenDEX = 0;
                this.swollenSTR = 0;
                this.swollenCON = 0;
                this.swollenRNG = 0;
                this.swollenEND = 0;
            }
        }

        this.perfumed = function()
        {
            if (this.perfume != "none")
            {
                if (new Date().getTime() - this.perfumeStoreTime < 1000 * this.perfumeTime)
                {
                    if (this.gender != "Male")
                    {
                        if (this.perfume == "ogard")
                        {
                            this.perfumeCHA = 4;
                        }
                    }
                }
                else
                {
                    this.perfumeTime = 0;
                    this.perfumeStoreTime = 0;
                    this.perfume = "none";
                }
            }
            else
            {
                this.perfumeCHA = 0;
            }
        };

        this.climateEffects = function ()
        {
            //If the player's warmth is not at max then the flag for the mini notice is true otherwise it is false.
            if (this.warmth < this.warmthMAX)
            {
                this.freezing = true;
            }
            else
            {
                this.freezing = false;
            }

            //This is Where warmth and thirst will either increase or decrease depending on the region the player is in.
            if (elevation == 3 && new Date().getTime() - this.timeSinceLastWarmthChange > 5000)
            {
                if (currentSeason == "Bright")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (3 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Harvest")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (3 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (4 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (3.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Frost")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (4 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (4.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Bounty")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (3 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (4 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (3.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
            }
            else if (elevation == 2 && new Date().getTime() - this.timeSinceLastWarmthChange > 5000)
            {
                if (currentSeason == "Bright")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Harvest")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (3 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Frost")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (3 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (4 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (3.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Bounty")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (3 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
            }
            else if (elevation == 1 && new Date().getTime() - this.timeSinceLastWarmthChange > 5000)
            {
                if (currentSeason == "Bright")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Harvest")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Frost")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (3 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Bounty")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
            }
            else if (elevation == 0 && new Date().getTime() - this.timeSinceLastWarmthChange > 5000) //every 0.85 seconds warmth increases if not at its max. Thirst only ever increases by intaking moisture... obviously.
            {
                if (currentSeason == "Bright")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 1);
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 0.5);
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Harvest")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Frost")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Bounty")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
            }
            else if (elevation == -1 && new Date().getTime() - this.timeSinceLastWarmthChange > 5000) //every 0.85 seconds warmth increases if not at its max. Thirst only ever increases by intaking moisture... obviously.
            {
                if (currentSeason == "Bright")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 1.5);
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 1);
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 1.25);
                    }
                }
                else if (currentSeason == "Harvest")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 0.5);
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Frost")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Bounty")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 0.5);
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                this.warmth = Math.min(this.warmthMAX, this.warmth + 1);
                this.timeSinceLastWarmthChange = new Date().getTime();
            }
            else if (elevation == -2 && new Date().getTime() - this.timeSinceLastWarmthChange > 5000) //every 0.85 seconds warmth increases if not at its max. Thirst only ever increases by intaking moisture... obviously.
            {
                if (currentSeason == "Bright")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 2);
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 1);
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 1.5);
                    }
                }
                else if (currentSeason == "Harvest")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 1);
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 0);
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 0.5);
                    }
                }
                else if (currentSeason == "Frost")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 0);
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0.5 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (0.25 - this.warmthProtection)));
                        this.timeSinceLastWarmthChange = new Date().getTime();
                    }
                }
                else if (currentSeason == "Bounty")
                {
                    if (timeOfDay == "Day")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 1);
                    }
                    else if (timeOfDay == "Night")
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 0);
                    }
                    else
                    {
                        this.warmth = Math.min(this.warmthMAX, this.warmth + 0.5);
                    }
                }
            }

            //This is where frozen is is set to true when your warmth runs out. //It Applies the speed decrease based on warmth here as well.
            if (this.warmth <= 0)
            {
                this.warmth = 0;
                this.frozen = true;
                this.freeze = Math.max(this.freeze, 4);
            }
            else if (this.warmth <= 10)
            {
                this.frozen = false;
                this.freeze = Math.max(this.freeze, 3.44);
            }
            else if (this.warmth <= 20)
            {
                this.frozen = false;
                this.freeze = Math.max(this.freeze, 3);
            }
            else if (this.warmth <= 25)
            {
                this.frozen = false;
                this.freeze = Math.max(this.freeze, 2.44);
            }
            else if (this.warmth <= 30)
            {
                this.frozen = false;
                this.freeze = Math.max(this.freeze, 2);
            }
            else if (this.warmth <= 40)
            {
                this.frozen = false;
                this.freeze = Math.max(this.freeze, 1.44);
            }
            else
            {
                this.frozen = false;
                this.freeze = Math.max(this.freeze, 1);
            }

            //If frozen is true decrease
            if (this.frozen == true)
            {
                if (new Date().getTime() - this.timeSinceLastColdRush > 4000)
                {
                    this.timeSinceLastColdRush = new Date().getTime();
                    this.health -= 4;
                }
            }
        };

        this.light = function()
        {
            if (new Date().getTime() - this.timeSinceLightSourceFuelUsed < this.lightSourceDuration * 1000 || this.nonLimitedLightSource)
            {
                if (this.lightSource == "oilLantern")
                {
                    lights.push({X:X, Y: Y, size: 250, extraStops: true, GRD: 0.7, Alpha: 0.9, showMe: true});
                }
                else if (this.lightSource == "oilLamp")
                {
                    lights.push({X:X, Y: Y, size: 175, extraStops: true, GRD: 0.7, Alpha: 0.8, showMe: true});
                }
                else if (this.lightSource == "jackOLantern")
                {
                    lights.push({X:X, Y: Y, size: 85, extraStops: true, GRD: 0.7, Alpha: 0.4, showMe: true});
                }
                else if (this.lightSource == "candle")
                {
                    lights.push({X:X, Y: Y, size: 65, extraStops: true, GRD: 0.35, Alpha: 0.5, showMe: true});
                }
            }
            else
            {
                this.lightSource = "none"
            }
        };

        this.overCucumbered = function()
        {
            if (this.carryWeight > this.carryWeightMAX || this.unskilledUse == true)
            {
                this.hinderance = true; //This is the flag that notes whether or not the player is carrying to much.//TODO make a mini notice for hinderance... it should look like and old fashioned circus weight.
            }
            else
            {
                this.hinderance = false;
            }

            if (this.stunnedI || this.stunnedII || this.stunnedIII)
            {
                this.stunned = true;
            }
            else
            {
                this.stunned = false;
            }

            if (this.hinderance == true || this.stunned == true) //If the player is carrying too much then they are slowed down depending on how much above the maximum they are carrying.
            {
                //slowness for using armour that is beyond your toughness level.
                if (this.unskilledUse == true)
                {
                    this.freeze = Math.max(this.freeze, 22);
                }
                else if (this.stunnedIII == true)
                {
                    this.freeze = Math.max(this.freeze, 21);
                }
                else if (this.carryWeight > this.carryWeightMAX * 4)
                {
                    this.freeze = Math.max(this.freeze, 20);
                }
                else if (this.carryWeight > this.carryWeightMAX * 3.5)
                {
                    this.freeze = Math.max(this.freeze, 15);
                }
                else if (this.carryWeight > this.carryWeightMAX * 3)
                {
                    this.freeze = Math.max(this.freeze, 11);
                }
                else if (this.stunnedII == true)
                {
                    this.freeze = Math.max(this.freeze, 10);
                }
                else if (this.carryWeight > this.carryWeightMAX * 2.5)
                {
                    this.freeze = Math.max(this.freeze, 9);
                }
                else if (this.carryWeight > this.carryWeightMAX * 2.25)
                {
                    this.freeze = Math.max(this.freeze, 7);
                }
                else if (this.stunnedI == true)
                {
                    this.freeze = Math.max(this.freeze, 5.5);
                }
                else if (this.carryWeight > this.carryWeightMAX * 2)
                {
                    this.freeze = Math.max(this.freeze, 5);
                }
                else if (this.carryWeight > this.carryWeightMAX * 1.75)
                {
                    this.freeze = Math.max(this.freeze, 4);
                }
                else if (this.carryWeight > this.carryWeightMAX * 1.5)
                {
                    this.freeze = Math.max(this.freeze, 3);
                }
                else if (this.carryWeight > this.carryWeightMAX * 1.25)
                {
                    this.freeze = Math.max(this.freeze, 2);
                }
                else if (this.carryWeight > this.carryWeightMAX)
                {
                    this.freeze = Math.max(this.freeze, 1.5);
                }
            }
            //freeze will otherwise be set in the function prior to this "climateEffects" so it will be at the standard (freeze == 1) if the player is not below on his/her warmth stat.
        };

        this.gutWorm = function ()
        {
            if (this.hunger <= -1)
            {
                this.gutWorms = false;
            }
            if (this.gutWorms == true && new Date().getTime() - this.timeSinceLastGutFeast >= 100)
            {
                //reset the timer for the gutworms feasting.
                this.timeSinceLastGutFeast = new Date().getTime();
                //Take away hunger from the player because the gut-worms are eating the player's nutrition and calorie intake.
                this.hunger -= 0.005125 * (TTD / 16.75);
            }
        };

        this.acidify = function ()
        {
            if (new Date().getTime() <= this.acidTime)
            {
                if (this.acidV == true)
                {
                    this.health -= Math.max(0, 0.05 * (TTD / 16.75) - (this.acidResistance / 1000));
                }
                else if (this.acidIV == true)
                {
                    this.health -= Math.max(0, 0.04 * (TTD / 16.75) - (this.acidResistance / 1000));
                }
                else if (this.acidIII == true)
                {
                    this.health -= Math.max(0, 0.03 * (TTD / 16.75) - (this.acidResistance / 1000));
                }
                else if (this.acidII == true)
                {
                    this.health -= Math.max(0, 0.02 * (TTD / 16.75) - (this.acidResistance / 1000));
                }
                else if (this.acidI == true)
                {
                    this.health -= Math.max(0, 0.01 * (TTD / 16.75) - (this.acidResistance / 1000));
                }
                else if (this.halfAcid == true)
                {
                    this.health -= Math.max(0, 0.005 * (TTD / 16.75) - (this.acidResistance / 1000));
                }
                else if (this.quarterAcid == true)
                {
                    this.health -= Math.max(0, 0.0025 * (TTD / 16.75) - (this.acidResistance / 1000));
                }
            }
            else
            {
                this.acidV = false;
                this.acidIV = false;
                this.acidIII = false;
                this.acidII = false;
                this.acidI = false;
                this.halfAcid = false;
                this.quarterAcid = false;
            }
        };

        this.fleshMite = function()
        {
            if (this.fleshMites == true)
            {
                this.freeze = Math.max(this.freeze, 2.25);
            }

            if (this.fleshMites == true && new Date().getTime() - this.timeSinceLastFleshFeast >= 75)
            {
                //reset the timer for the fleshMites feasting.
                this.timeSinceLastFleshFeast = new Date().getTime();
                //Take away health from the player because the fleshMites are eating the player from the inside.
                this.health -= 0.0025625 * (TTD / 16.75);
            }
        };

        this.alcoholManagement = function()
        {
            if (new Date().getTime() - this.timeSinceLastAlcoholCleanse >= 1000)
            {
                //reset the timer for the gutworms feasting.
                this.timeSinceLastAlcoholCleanse = new Date().getTime();
                //Take away hunger from the player because the gut-worms are eating the player's nutrition and calorie intake.
                this.inebriation = Math.max(0, this.inebriation - 1);

                if (this.inebriation >= 100 + (this.getToughness() * 3))
                {
                    this.inebriated = true;
                }
                else
                {
                    this.inebriated = false;
                }
            }
        };

        this.bandagedTimer = function()
        {
            if (this.bandagedTime >= 1)
            {
                if (new Date().getTime() - this.bandagedStoreTime >= 1000)
                {
                    this.bandagedStoreTime = new Date().getTime();
                    this.bandagedTime -= 1;
                }
            }
            if (this.bandagedTime > 0)
            {
                this.bandaged = true;
            }
            else
            {
                this.bandaged = false;
            }
        };

        this.stunnedTimer = function()
        {
            if (this.stunnedTime >= 1)
            {
                if (new Date().getTime() - this.stunTimer >= 1000)
                {
                    this.stunTimer = new Date().getTime();
                    this.stunnedTime -= 1;
                }
            }
            if (this.stunnedTime <= 0)
            {
                this.stunnedI = false;
                this.stunnedII = false;
                this.stunnedIII = false;
            }
        };

        this.recovery = function() //for health and energy regenerations
        {
            //This enables the poisoned mini notice if any type of any category of energy restore is in effect.
            if (this.energizeI || this.energizeII || this.energizeIII || this.energizeIV || this.energizeV)
            {
                this.energized = true;
            }
            else
            {
                this.energized = false;
            }

            //This enables the poisoned mini notice if any type of any category of health restore is in effect.
            if (this.recoverI || this.recoverII || this.recoverIII || this.recoverIV || this.recoverV)
            {
                this.recovered = true;
            }
            else
            {
                this.recovered = false;
            }

            //This enables the poisoned mini notice if any type of any category of health restore is in effect.
            if (this.energilI || this.energilII || this.energilIII || this.energilIV || this.energilV || this.fatigueI || this.fatigueII || this.fatigueIII || this.fatigueIV || this.fatigueV)
            {
                this.energil = true;
            }
            else
            {
                this.energil = false;
            }

            //This section covers all five ranks of the basic type of health regeneration.
            if (this.recoveryTime > 0)
            {
                if (this.recoverV == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastRecovery = new Date().getTime();
                    //Take away health
                    this.health = Math.min(this.healthMAX, this.health + (2 / 10));
                    this.recoveryTime -= 1;
                }
                else if (this.recoverIV == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastRecovery = new Date().getTime();
                    //Take away health
                    this.health = Math.min(this.healthMAX, this.health + (2 / 20));
                    this.recoveryTime -= 1;
                }
                else if (this.recoverIII == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastRecovery = new Date().getTime();
                    //Take away health
                    this.health = Math.min(this.healthMAX, this.health + (2 / 30));
                    this.recoveryTime -= 1;
                }
                if (this.recoverII == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastRecovery = new Date().getTime();
                    //Take away health
                    this.health = Math.min(this.healthMAX, this.health + (2 / 40));
                    this.recoveryTime -= 1;
                }
                else if (this.recoverI == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastRecovery = new Date().getTime();
                    //Take away health
                    this.health = Math.min(this.healthMAX, this.health + (2 / 50));
                    this.recoveryTime -= 1;
                }
            }
            else
            {
                this.recoverI = false;
                this.recoverII = false;
                this.recoverIII = false;
                this.recoverIV = false;
                this.recoverV = false;
            }

            //This section covers all five ranks of the basic type of energy regeneration.
            if (this.energizeTime > 0)
            {
                if (this.energizeV == true && new Date().getTime() - this.timeSinceLastEnergize > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergize = new Date().getTime();
                    //Take away health
                    this.energy = Math.min(this.energyMAX, this.energy + (3 / 10));
                    this.energizeTime -= 1;
                }
                else if (this.energizeIV == true && new Date().getTime() - this.timeSinceLastEnergize > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergize = new Date().getTime();
                    //Take away health
                    this.energy = Math.min(this.energyMAX, this.energy + (3 / 20));
                    this.energizeTime -= 1;
                }
                else if (this.energizeIII == true && new Date().getTime() - this.timeSinceLastEnergize > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergize = new Date().getTime();
                    //Take away health
                    this.energy = Math.min(this.energyMAX, this.energy + (3 / 30));
                    this.energizeTime -= 1;
                }
                if (this.energizeII == true && new Date().getTime() - this.timeSinceLastEnergize > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergize = new Date().getTime();
                    //Take away health
                    this.energy = Math.min(this.energyMAX, this.energy + (3 / 40));
                    this.energizeTime -= 1;
                }
                else if (this.energizeI == true && new Date().getTime() - this.timeSinceLastEnergize> 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergize = new Date().getTime();
                    //Take away health
                    this.energy = Math.min(this.energyMAX, this.energy + (3 / 50));
                    this.energizeTime -= 1;
                }
            }
            else
            {
                this.energizeI = false;
                this.energizeII = false;
                this.energizeIII = false;
                this.energizeIV = false;
                this.energizeV = false;
            }

            //This section covers all five ranks of the basic type of energil (the lessening of normal energy consumption) and fatigue (the intensification of normal energy consumption).
            if (this.energilTime > 0)
            {
                if (this.fatigueV == true && new Date().getTime() - this.timeSinceLastEnergil > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergil = new Date().getTime();
                    energil = 3;
                    this.energilTime -= 1;
                }
                else if (this.energilV == true && new Date().getTime() - this.timeSinceLastEnergil > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergil = new Date().getTime();
                    //Take away health
                    energil = 0;
                    this.energilTime -= 1;
                }
                else if (this.fatigueIV == true && new Date().getTime() - this.timeSinceLastEnergil > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergil = new Date().getTime();
                    //Take away health
                    energil = 2.5;
                    this.energilTime -= 1;
                }
                else if (this.energilIV == true && new Date().getTime() - this.timeSinceLastEnergil > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergil = new Date().getTime();
                    //Take away health
                    energil = 0.2;
                    this.energilTime -= 1;
                }
                else if (this.fatigueIII == true && new Date().getTime() - this.timeSinceLastEnergil > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergil = new Date().getTime();
                    //Take away health
                    energil = 2;
                    this.energilTime -= 1;
                }
                else if (this.energilIII == true && new Date().getTime() - this.timeSinceLastEnergil > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergil = new Date().getTime();
                    //Take away health
                    energil = 0.4;
                    this.energilTime -= 1;
                }
                if (this.fatigueII == true && new Date().getTime() - this.timeSinceLastEnergil > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergil = new Date().getTime();
                    //Take away health
                    energil = 1.5;
                    this.energilTime -= 1;
                }
                if (this.energilII == true && new Date().getTime() - this.timeSinceLastEnergil > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergil = new Date().getTime();
                    //Take away health
                    energil = 0.6;
                    this.energilTime -= 1;
                }
                else if (this.fatigueI == true && new Date().getTime() - this.timeSinceLastEnergil > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergil = new Date().getTime();
                    //Take away health
                    energil = 1.2;
                    this.energilTime -= 1;
                }
                else if (this.energilI == true && new Date().getTime() - this.timeSinceLastEnergil > 50)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastEnergil = new Date().getTime();
                    energil = 0.8;
                    this.energilTime -= 1;
                }
            }
            else
            {
                energil = 1;
                this.energilI = false;
                this.energilII = false;
                this.energilIII = false;
                this.energilIV = false;
                this.energilV = false;
                this.fatigueI = false;
                this.fatigueII = false;
                this.fatigueIII = false;
                this.fatigueIV = false;
                this.fatigueV = false;
            }
        };

        this.skillBoost = function()
        {
            //This is the flag setter for dexterity boosts.
            if (this.speedI || this.speedII || this.speedIII || this.speedIV || this.speedV)
            {
                this.speedBoost = true;
            }
            else
            {
                if (this.speedBoost == true)
                {
                    this.dexBoost = 0;
                    this.speedBoost = false;
                }
            }

            //This applies the boost.
            if (this.speedV == true && new Date().getTime() - this.dexTime < 25000)
            {
                rapidamente = true;
            }
            else if (this.speedIV == true && new Date().getTime() - this.dexTime < 25000)
            {
                this.dexBoost = 65;
            }
            else if (this.speedIII == true && new Date().getTime() - this.dexTime < 25000)
            {
                this.dexBoost = 55;
            }
            if (this.speedII == true && new Date().getTime() - this.dexTime < 25000)
            {
                this.dexBoost = 45;
            }
            else if (this.speedI == true && new Date().getTime() - this.dexTime < 25000)
            {
                this.dexBoost = 35;
            }
            else
            {
                this.dexBoost = 0;
                if (developerRapidamente == false)
                {
                    rapidamente = false;
                }

                this.speedI = false;
                this.speedII = false;
                this.speedIII = false;
                this.speedIV = false;
                this.speedV = false;
            }

            //This is the flag setter for intelligence boosts.
            if (this.intelligenceI || this.intelligenceII || this.intelligenceIII || this.intelligenceIV || this.intelligenceV)
            {
                this.intelligenceBoost = true;
            }
            else
            {
                if (this.intelligenceBoost == true)
                {
                    this.intBoost = 0;
                    this.intelligenceBoost = false;
                }
            }

            //This applies the boost.
            if (this.intelligenceV == true && new Date().getTime() - this.intTime < 25000)
            {
                this.intBoost = 60;
            }
            else if (this.intelligenceIV == true && new Date().getTime() - this.intTime < 25000)
            {
                this.intBoost = 35;
            }
            else if (this.intelligenceIII == true && new Date().getTime() - this.intTime < 25000)
            {
                this.intBoost = 20;
            }
            if (this.intelligenceII == true && new Date().getTime() - this.intTime < 25000)
            {
                this.intBoost = 10;
            }
            else if (this.intelligenceI == true && new Date().getTime() - this.intTime < 25000)
            {
                this.intBoost = 5;
            }
            else
            {
                this.intBoost = 0;

                this.intelligenceI = false;
                this.intelligenceII = false;
                this.intelligenceIII = false;
                this.intelligenceIV = false;
                this.intelligenceV = false;
            }

            //This is the flag setter for willpower boosts.
            if (this.willpowerI || this.willpowerII || this.willpowerIII || this.willpowerIV || this.willpowerV)
            {
                this.willpowerBoost = true;
            }
            else
            {
                if (this.willpowerBoost == true)
                {
                    this.wilBoost = 0;
                    this.willpowerBoost = false;
                }
            }

            //This applies the boost.
            if (this.willpowerV == true && new Date().getTime() - this.wilTime < 25000)
            {
                this.wilBoost = 50;
            }
            else if (this.intelligenceIV == true && new Date().getTime() - this.wilTime < 25000)
            {
                this.wilBoost = 25;
            }
            else if (this.intelligenceIII == true && new Date().getTime() - this.wilTime < 25000)
            {
                this.wilBoost = 10;
            }
            if (this.intelligenceII == true && new Date().getTime() - this.wilTime < 25000)
            {
                this.wilBoost = 5;
            }
            else if (this.intelligenceI == true && new Date().getTime() - this.wilTime < 25000)
            {
                this.wilBoost = 2;
            }
            else
            {
                this.wilBoost = 0;

                this.willpowerI = false;
                this.willpowerII = false;
                this.willpowerIII = false;
                this.willpowerIV = false;
                this.willpowerV = false;
            }

            //This is the flag setter for memory boosts.
            if (this.memoryI || this.memoryII || this.memoryIII || this.memoryIV || this.memoryV)
            {
                this.memoryBoost = true;
            }
            else
            {
                if (this.memoryBoost == true)
                {
                    this.memBoost = 0;
                    this.memoryBoost = false;
                }
            }

            //This applies the boost.
            if (this.memoryV == true && new Date().getTime() - this.memTime < 25000)
            {
                this.memBoost = 40;
            }
            else if (this.memoryIV == true && new Date().getTime() - this.memTime < 25000)
            {
                this.memBoost = 25;
            }
            else if (this.memoryIII == true && new Date().getTime() - this.memTime < 25000)
            {
                this.memBoost = 16;
            }
            if (this.memoryII == true && new Date().getTime() - this.memTime < 25000)
            {
                this.memBoost = 9;
            }
            else if (this.memoryI == true && new Date().getTime() - this.memTime < 25000)
            {
                this.memBoost = 4;
            }
            else
            {
                this.memBoost = 0;

                this.memoryI = false;
                this.memoryII = false;
                this.memoryIII = false;
                this.memoryIV = false;
                this.memoryV = false;
            }
        };

        this.sightSeeing = function()
        {
            if (adminShowSight || this.getDexterity() >= 50 && this.movingType == 3)
            {
                showSight = true;
            }
            else
            {
                showSight = false;
            }
        };

        this.superStealthness = function()
        {
            var stlthIncrement;

            //activate with control while stealthing
            if (fKey && altKey && this.getDexterity() >= 25)
            {
                if (this.getDexterity() >= 40)
                {
                    stlthIncrement = 39 + this.superStealthBonus;
                    this.superStealthCooldown = Math.max(7, (12 - this.superStealthCooldownReduction));
                }
                else if (this.getDexterity() >= 35)
                {
                    stlthIncrement = 34 + this.superStealthBonus;
                    this.superStealthCooldown = Math.max(7, (16 - this.superStealthCooldownReduction));
                }
                else if (this.getDexterity() >= 30)
                {
                    stlthIncrement = 29 + this.superStealthBonus;
                    this.superStealthCooldown = Math.max(7, (20 - this.superStealthCooldownReduction));
                }
                else
                {
                    stlthIncrement = 24 + this.superStealthBonus;
                    this.superStealthCooldown = Math.max(7, (24 - this.superStealthCooldownReduction));
                }

                if (new Date().getTime() - this.superStealthCooldownKeeper > this.superStealthCooldown * 1000)
                {
                    this.superStealthTime = stlthIncrement;
                }
            }
            if (this.superStealthTime > 0)
            {
                if (new Date().getTime() - this.keepSuperStealth > 100) //time is kept in tenths of a second.
                {
                    this.keepSuperStealth = new Date().getTime();
                    this.superStealthTime -= 1;
                }
                this.superStealthCooldownKeeper = new Date().getTime(); //prepares the cooldown.
                this.superStealth = true;
            }
            else
            {
                this.keepSuperStealth = new Date().getTime();
                this.superStealth = false;
            }
        };

        this.poison = function ()
        {
            //This enables the poisoned mini notice if any type of any category of poison is in effect.
            if (this.poisonI == true || this.poisonII == true || this.poisonIII == true || this.poisonIV == true || this.poisonV == true)
            {
                this.poisoned = true;
            }
            else
            {
                this.poisoned = false;
            }

            //This section covers all five ranks of the basic type of poison.
            if (this.poisonV == true && new Date().getTime() - this.timeSinceLastPoisoned > 2000)
            {
                //reset the timer for the poison.
                this.timeSinceLastPoisoned = new Date().getTime();
                //Take away health
                this.health -= Math.max(0, (6 - (this.antiVenom * 2)));
            }
            else if (this.poisonIV == true && new Date().getTime() - this.timeSinceLastPoisoned > 3000)
            {
                //reset the timer for the poison.
                this.timeSinceLastPoisoned = new Date().getTime();
                //Take away health
                this.health -= Math.max(0, (5 - (this.antiVenom * 2)));
            }
            else if (this.poisonIII == true && new Date().getTime() - this.timeSinceLastPoisoned > 4000)
            {
                //reset the timer for the poison.
                this.timeSinceLastPoisoned = new Date().getTime();
                //Take away health
                this.health -= Math.max(0, (4 - (this.antiVenom * 2)));
            }
            if (this.poisonII == true && new Date().getTime() - this.timeSinceLastPoisoned > 6000)
            {
                //reset the timer for the poison.
                this.timeSinceLastPoisoned = new Date().getTime();
                //Take away health
                this.health -= Math.max(0, (3 - (this.antiVenom * 2)));
            }
            else if (this.poisonI == true && new Date().getTime() - this.timeSinceLastPoisoned > 8000)
            {
                //reset the timer for the poison.
                this.timeSinceLastPoisoned = new Date().getTime();
                //Take away health
                this.health -= Math.max(0, (2 - (this.antiVenom * 2)));
            }

            //gojii berry poison
            if (new Date().getTime() - this.gojiiTimer >= 300000 && new Date().getTime() - this.gojiiTimer < 301000) //was 240000
            {

                if (this.gojiiVomit == true)
                {
                    worldItems.push([new Item("vomit", X, Y), 1]);
                    worldItems.push([new Item("vomit", X, Y), 1]);
                    this.hunger = Math.max(0, this.hunger - 48);
                    this.gojiiVomit = false;
                }
                this.antiVenom = 0;
                this.poisonV = true;
                this.energy = -10;
                this.will = 0;
                this.gojiiPoisoned = true;
            }

            //Indigestion (Gassiness)
            if (this.gassinessTime > 0)
            {
                this.gassiness = true;
                this.gassinessTime -= 0.005  * (TTD / 16.75);
                this.gassyCha = -60;
                if (((this.gassinessTime / 5) * 1000) % 101)
                {
                    magicList.push(new Magic({ID:"fart"}, true));
                }
            }
            else
            {
                this.gassiness = false;
                this.gassyCha = 0;
                this.gassinessTime = 0;
            }

            //Cyrinthilim Drug Trip
            if (this.cyrinthilimTime > 0)
            {
                this.cyrinthilimTrip = true;
                this.cyrinthilimTime -= 0.005  * (TTD / 16.75);
                this.health -= 0.0075 * (TTD / 16.75);
                this.energy += 0.0003  * (TTD / 16.75);
            }
            else
            {
                this.cyrinthilimTrip = false;
            }

            //Haeflower Drug Trip
            if (this.haeflowerTime > 0)
            {
                this.haeflowerTrip = true;
                this.haeflowerTime -= 0.005 * (TTD / 16.75);
                this.energy -= 0.00005 * (TTD / 16.75);
                this.will -= 0.0001 * (TTD / 16.75);
            }
            else
            {
                this.haeflowerTrip = false;
            }

            //Food poisoning
            if (new Date().getTime() - this.timeSinceBadFoodEaten >= 33000 && new Date().getTime() - this.timeSinceBadFoodEaten < 34000)
            {
                worldItems.push([new Item("vomit", X, Y), 1]);
                this.hunger = Math.max(0, this.hunger - 24);
                this.energy -= 3;
                this.timeSinceBadFoodEaten = 0;
            }

            //Troll poisoning
            if (new Date().getTime() - this.timeSinceRawTrollBlood < 25000)
            {
                this.emiBoost = 5;
                this.trollPoisonActive = true; //this triggers the mini notice.
            }
            else
            {
                if (this.trollPoisonActive == true)
                {
                    this.emiBoost = 0;
                    this.trollPoisonActive = false;
                }
            }

            //TODO different types of poisons will get their own seperate categories!
        };

        //Effects Operations
        //major game effects
        this.climateEffects(); //todo add faster dehydration in deserts.
        this.overCucumbered(); //If the player is carrying too much weight the player all of a sudden becomes submersed in invisible cucumbers making it very challenging for him/her to move.
        this.outfitEffects();
        this.sickness();

        //minor game effects
        this.sightSeeing();
        this.perfumed();
        this.swollen();
        this.tepprekliaFungalFever();
        this.gutWorm();
        this.fleshMite();
        this.brainMaggot();
        this.alcoholManagement();
        this.bandagedTimer();
        this.stunnedTimer();
        this.acidify();
        this.poison();
        this.recovery();
        this.skillBoost();
        this.light();
        this.sleepCalculator();
        this.blinder();
        this.superStealthness();
    };

    //operations for the stat/variables regarding the characters skills and leveling
    this.skillOperations = function()
    {
        //basic skills
        this.doLeveling();
        this.setBaseStats();
    };

    //SKILL BACKUP FUNCTIONS (these functions will allow base skills to be adjusted while retaining the original value of the skill)
    //this function sets endurance to itself if not in the instant regeneration developer mode otherwise it sets it to 58.333
    this.setMageShield = function()
    {
        if (this.shieldingV == true)
        {
            this.mageShieldMAX = 92;
            this.mageShieldRate = 11;
            this.mageShieldSize = 36;
            this.mageShieldColour = "skyblue";
        }
        else if (this.shieldingIV == true)
        {
            this.mageShieldMAX = 49;
            this.mageShieldRate = 13;
            this.mageShieldSize = 35;
            this.mageShieldColour = "skyblue";
        }
        else if (this.shieldingIII == true)
        {
            this.mageShieldMAX = 25;
            this.mageShieldRate = 14;
            this.mageShieldSize = 34;
            this.mageShieldColour = "skyblue";
        }
        else if (this.shieldingII == true)
        {
            this.mageShieldMAX = 14;
            this.mageShieldRate = 19;
            this.mageShieldSize = 32;
            this.mageShieldColour = "skyblue";
        }
        else if (this.shieldingI == true)
        {
            this.mageShieldMAX = 6;
            this.mageShieldRate = 21;
            this.mageShieldSize = 32;
            this.mageShieldColour = "skyblue";
        }
        else if (this.sRaincoat == true)
        {
            this.mageShieldMAX = 2;
            this.mageShieldRate = 26;
            this.mageShieldSize = 24;
            this.mageShieldColour = "skyblue";
        }
        else
        {
            this.mageShieldMAX = 0;
            this.mageShield = 0;
            this.mageShieldRate = 14;
            this.mageShieldSize = 0;
            this.mageShieldColour = "skyblue";
        }
    }
    this.getMagicHands = function(sort)
    {
        if (sort == "damage")
        {
            if (this.leechHands)
            {
                return 6;
            }
            else if (this.shockHands)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
        else
        {
            if (this.leechHands)
            {
                return "leeching";
            }
            else if (this.shockHands)
            {
                return "shock";
            }
            else if (this.fireHands)
            {
                return "burning";
            }
            else if (this.freezeHands)
            {
                return "freeze";
            }
            else
            {
                return "none";
            }
        }
    };
    this.getEndurance = function()
    {
        if (energyDrink == true) //Increases energy instantly but decreases health at about - 1 per every four seconds.
        {
            //If developerMode "instantRegeneration" is on the players endurance will rise to the highest possible point without breaking
            return 58.333;
        }
        else if (quickRegeneration == true) //Increases Both health and energy Quickly, but health much more quickly than energy.
        {
            return 53.555;
        }
        else if (this.gojiiPoisoned == true)
        {
            return Math.max(0, Math.min((this.endurance + this.AdEndurance + this.swollenEND) / 2, 53.555));
        }
        else // returns the normal amount.
        {
            return Math.max(0, Math.min(this.endurance + this.AdEndurance + this.swollenEND, 53.555));
        }
    };
    this.getStrength = function()
    {
        if (incredibleHulk == true) //increases strength a lot!!!
        {
            //If developerMode "incredibleHulk" is on the players strength will be ten times the normal maximum.
            return 500;
        }
        else if (this.gojiiPoisoned == true)
        {
            return Math.max(0, (this.strength + this.AdStrength) / 2);
        }
        else // returns the normal amount.
        {
            return Math.max(0, (this.strength + this.AdStrength + this.swollenSTR));
        }
    };
    this.getConstitution = function()
    {
        if (incredibleHulk == true) //increases health a lot!!!
        {
            //If developerMode "incredibleHulk" is on the players constitution will be five times its normal maximum.
            return 250;
        }
        else // returns the normal amount.
        {
            return Math.max(0, (this.constitution + this.AdConstitution + this.swollenCON));
        }
    };
    this.getDexterity = function()
    {
        if (rapidamente == true)
        {
            return 350;
        }
        else if (this.gojiiPoisoned == true) //increases health a lot!!!
        {
            //If developerMode "incredibleHulk" is on the players constitution will be five times its normal maximum.
            return Math.max(0, Math.min(86, (this.dexterity + this.AdDexterity + this.dexBoost + this.swollenDEX) / 12));
        }
        else if (this.frozen == true)
        {
            return Math.max(0, Math.min(86, (this.dexterity + this.AdDexterity + this.dexBoost + this.swollenDEX) / 10));
        }
        else // returns the normal amount.
        {
            return Math.max(0, Math.min(86, (this.dexterity + this.AdDexterity + this.dexBoost + this.swollenDEX)));
        }
    };

    this.getStamina = function()
    {
        return (Math.max(0, this.stamina + this.AdStamina));
    };

    this.getToughness = function()
    {
        return (Math.max(0, this.toughness + this.AdToughness));
    };

    this.getRanged = function()
    {
        return (Math.max(0, this.ranged + this.AdRanged + this.swollenRNG));
    };

    this.getSurvivalism = function()
    {
        return (Math.max(0, this.survivalism + this.AdSurvivalism + this.gassyCha));
    };

    this.getIntelligence = function()
    {
        return (Math.max(0, this.intelligence + this.AdIntelligence + this.intBoost));
    };

    this.getCharisma = function()
    {
        return (Math.max(0, Math.min(50, this.charisma + this.AdCharisma + this.gassyCha + this.perfumeCHA)));
    };

    this.getWillpower = function()
    {
        return (Math.max(0, this.willpower + this.AdWillpower + this.wilBoost));
    };

    this.getConcentration = function()
    {
        return (Math.max(0, this.concentration + this.AdConcentration));
    };

    this.getMemory = function()
    {
        return (Math.max(0, this.memory + this.AdMemory + this.memBoost));
    };

    this.getEminence = function()
    {
        return (Math.max(0, this.eminence + this.AdEminence + this.emiBoost));
    };

    this.getKnowledge = function()
    {
        return (Math.max(0, this.knowledge + this.AdKnowledge));
    };

    //MINI NOTICES
    //THIS IS DAD's example of how to make a miniNotice bar

    //this.notices = [];
    //
    //this.addNotice( name )
    //{
    //    if (name in notices)
    //        return;
    //    notices.push( name );
    //};
    //this.removeNotice( name )
    //{
    //    var pos = notices.indexOf( name );
    //    if (pos != -1)
    //        notices.splice( pos, 1 );
    //};

    this.miniNoticeList = [];

    this.addNotice = function (name)
    {
        var positionInNoticeList = this.miniNoticeList.indexOf(name);
        if (positionInNoticeList in this.miniNoticeList)
        {
            return;
        }
        else
        {
            this.miniNoticeList.push(name);
            positionInNoticeList = this.miniNoticeList.indexOf(name);
        }
    };

    this.removeNotice = function (name)
    {
        var positionInNoticeList = this.miniNoticeList.indexOf(name); //This looks through the mini notice list and finds the position of the object you are looking for.
        if (positionInNoticeList != -1) //if it is not equal to negative one, which is the return when something is not in a list...
        {
            //then remove it from the list
            this.miniNoticeList.splice(positionInNoticeList, 1);
        }
    };

    this.arrangeNotices = function(name)
    {
        var positionInNoticeList = this.miniNoticeList.indexOf(name);
        for (var i = 0; i < this.miniNoticeList.length; i++)
        {
            if (i == positionInNoticeList)
            {
                return (1 + (21 * i));
            }
        }
    };

    this.showNoticeName = function()
    {
        if (mouseY > 413 && mouseY < 413 + 20)
        {
            for (var i = 0; i < this.miniNoticeList.length; i++)
            {
                //this lets the player see the name of the effect that is affecting them.
                if (mouseX >= (1 + (21 * i)) && mouseX <= (1 + (21 * i)) + 20)
                {
                    XXX.textAlign = "left";
                    if (timeOfDay == "Day" && this.underground != true)
                    {
                        XXX.fillStyle = "black";
                    }
                    else
                    {
                        XXX.fillStyle = "white";
                    }
                    XXX.font = "bold 22px Book Antiqua";
                    XXX.fillText(this.miniNoticeList[i], 1, 407);
                }
            }
        }
    };

    //FREEZING Notice Function
    this.freezingChecker = function()
    {
        if (this.freezing == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.

            this.addNotice("Freezing");
            //blue background
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 255, 255, 1)";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Freezing"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            //white cover layer that fades away as warmth gos away
            var trans = Math.max(0.15, Math.min(1, this.warmth / 50)); // this is how faded the white layer should be.
            XXX.beginPath();
            XXX.fillStyle = "rgba(65, 105, 225, " + trans + ")";
            XXX.rect(this.arrangeNotices("Freezing"), 413, 20, 20);
            XXX.fill();
            XXX.drawImage(polyPNG, 207, 7, 13, 12, this.arrangeNotices("Freezing") + 1, 415, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Freezing");
        }
    };

    //Starvation Notice Function
    this.starvationChecker = function()
    {
        if (this.hunger <= 5)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Starvation");
            //red background
            XXX.beginPath();
            XXX.fillStyle = "red";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Starvation"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(freeverse, 582, 54, 17, 21, this.arrangeNotices("Starvation"), 412.5, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Starvation");
        }
    };

    //Sleep Deprivation Notice Function
    this.deprivationChecker = function()
    {
        if (this.sleep <= 0)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Sleep Deprivation");
            //red background
            XXX.beginPath();
            XXX.fillStyle = "#000080";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Sleep Deprivation"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(freeverse, 625, 59, 19, 18, this.arrangeNotices("Sleep Deprivation"), 412.5, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Sleep Deprivation");
        }
    };

    //Brain Maggots Notice Function
    this.brainMaggotsChecker = function()
    {
        if (this.brainMaggots == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Brain Maggots");
            //red background
            XXX.beginPath();
            XXX.fillStyle = "#BAA0A1";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Brain Maggots"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(poly, 211, 114, 23, 20, this.arrangeNotices("Brain Maggots"), 412.5, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Brain Maggots");
        }
    };

    //Fungal Fever Notice Function
    this.fungalFeverChecker = function()
    {
        if (this.fungalFever == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Fungal Fever");
            //red background
            XXX.beginPath();
            XXX.fillStyle = "#DCD060";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Fungal Fever"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(oldverse, 3196, 60, 54, 48, this.arrangeNotices("Fungal Fever"), 412.5, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Fungal Fever");
        }
    };

    //Bandaged Notice Function
    this.bandagedChecker = function()
    {
        if (this.bandaged == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Bandaged");
            //red background
            XXX.beginPath();
            XXX.fillStyle = "#76EEC6";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Bandaged"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(verse, 3955, 309, 29, 10, this.arrangeNotices("Bandaged") + 5, 417, 11, 16);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Bandaged");
        }
    };

    //Acidic Notice Function
    this.acidicChecker = function()
    {
        if (this.quarterAcid == true || this.halfAcid == true || this.acidI == true || this.acidII == true || this.acidIII == true || this.acidIV == true || this.acidV == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Acidic");
            //red background
            XXX.beginPath();
            XXX.fillStyle = "lightGreen";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Acidic"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(lodo, 3, 4, 11, 9, this.arrangeNotices("Acidic"), 413.75, 19, 19);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Acidic");
        }
    };

    //Insomnia Notice Function
    this.insomniaChecker = function()
    {
        if (this.insomnia == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Insomnia");
            //red background
            XXX.beginPath();
            XXX.fillStyle = "black";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Insomnia"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(candlewic, 14, 32, 10, 9, this.arrangeNotices("Insomnia") + 4, 417, 12.5, 11);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Insomnia");
        }
    };

    //Dehydration Notice Function
    this.dehydrationChecker = function()
    {
        if (this.thirst <= 0)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Dehydrated");
            //tan background
            XXX.beginPath();
            XXX.fillStyle = "tan";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Dehydrated"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(freeverse, 603, 54, 20, 21, this.arrangeNotices("Dehydrated"), 413.5, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Dehydrated");
        }
    };

    //Quenched Notice Function
    this.quenchedChecker = function()
    {
        if (this.quenched)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Quenched");
            //light blue background
            XXX.beginPath();
            XXX.fillStyle = "lightBLue";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Quenched"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 220, 8, 9, 10, this.arrangeNotices("Quenched"), 413.5, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Quenched");
        }
    };

    //Stunned Notice Function
    this.stunnedChecker = function()
    {
        if (this.stunned == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.

            this.addNotice("Stunned");
            //lightish yellowish background
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 236, 139, 1)";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Stunned"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polypol, 1555, 2, 22, 27, this.arrangeNotices("Stunned"), 413.5, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Stunned");
        }
    };

    //fleshMites Notice Function
    this.fleshMights = function()
    {
        if (this.fleshMites == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Flesh Mites");
            //reddish background
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 127, 80, 1)";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Flesh Mites"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polypol, 1586, 5, 19, 16, this.arrangeNotices("Flesh Mites"), 413.5, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Flesh Mites");
        }
    };

    //Gassiness Notice Function
    this.indigestionChecker = function()
    {
        if (this.gassiness == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Gassiness");
            //reddish background
            XXX.beginPath();
            XXX.fillStyle = "brown";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Gassiness"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(oldverse, 1821, 179, 48, 35, this.arrangeNotices("Gassiness"), 413.5, 20, 18);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Gassiness");
        }
    };

    //Gut Worms Notice Function
    this.sicknessChecker = function ()
    {
        if (this.illnesses.length > 0)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Sickness");

            //pinkish gut-like background colour.
            XXX.beginPath();
            XXX.fillStyle = "rgba(64, 64, 64, 1)";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Sickness"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(oldverse, 1821, 179, 48, 35, this.arrangeNotices("Sickness") + 1.5, 413.5, 9, 12);
            XXX.drawImage(polyPNG, 207, 7, 13, 12, this.arrangeNotices("Sickness") + 2.5, 415, 19, 19);
            XXX.drawImage(polyPNG, 5, 716, 18, 16, this.arrangeNotices("Sickness") + 1.5, 414, 18, 11);
            XXX.drawImage(poly, 211, 114, 23, 20, this.arrangeNotices("Sickness") + 1.5, 412.5, 16, 20);
            XXX.drawImage(poly, 57, 50, 8, 8, this.arrangeNotices("Sickness") + 2.75, 415, 15, 15);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Sickness");
        }
    };

    //Gut Worms Notice Function
    this.gutWormsChecker = function ()
    {
        if (this.gutWorms == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Gut Worms");
            //pinkish gut-like background colour.
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 255, 255, 1)";
            XXX.rect(this.arrangeNotices("Gut Worms"), 413, 20, 20);
            XXX.fill();

            //pinkish gut-like background colour.
            XXX.beginPath();
            XXX.fillStyle = "rgba(233, 150, 122, 0.4)";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Gut Worms"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 5, 716, 18, 16, this.arrangeNotices("Gut Worms") + 0, 414, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Gut Worms");
        }
    };
    //RECOVERY Notice Function
    this.recoveredChecker = function ()
    {
        if (this.recovered == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Recovery");
            //the background
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "lightGreen";
            XXX.rect(this.arrangeNotices("Recovery"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            //the image
            XXX.drawImage(polyPNG, 36, 26, 13, 11, this.arrangeNotices("Recovery") - 0.75, 413, 21, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Recovery");
        }
    };

    //ENERGIZED Notice Function
    this.energizedChecker = function ()
    {
        if (this.energized == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Energized");
            //the background
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "#ffff99";
            XXX.rect(this.arrangeNotices("Energized"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            //the image
            XXX.drawImage(polyPNG, 63, 25, 13, 14, this.arrangeNotices("Energized") - 1.525, 413, 24, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Energized");
        }
    };

    //SPEED BOOST Notice Function
    this.speedBoostChecker = function()
    {
        if (this.speedBoost == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Quickness");
            //the background
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "#cca400";
            XXX.rect(this.arrangeNotices("Quickness"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            //the image
            XXX.drawImage(polyPNG, 77, 27, 13, 13, this.arrangeNotices("Quickness") - 0.5, 413, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Quickness");
        }
    };

    //INTELLIGENCE BOOST Notice Function
    this.intelligenceBoostChecker = function()
    {
        if (this.intelligenceBoost == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Enhanced Thought");
            //the background
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "white";
            XXX.rect(this.arrangeNotices("Enhanced Thought"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            //the image
            XXX.drawImage(freeverse, 530, 65, 12, 10, this.arrangeNotices("Enhanced Thought") -0.65, 413, 23, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Enhanced Thought");
        }
    };

    //WILLPOWER BOOST Notice Function
    this.willpowerBoostChecker = function()
    {
        if (this.willpowerBoost == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Will");
            //the background
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "#B6AFC4";
            XXX.rect(this.arrangeNotices("Will"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            //the image
            XXX.drawImage(freeverse, 765, 101, 41, 50, this.arrangeNotices("Will"), 413, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Will");
        }
    };

    //WILLPOWER BOOST Notice Function
    this.memoryBoostChecker = function()
    {
        if (this.memoryBoost == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Memorization");
            //the background
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "#1F1F21";
            XXX.rect(this.arrangeNotices("Memorization"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            //the image
            XXX.drawImage(freeverse, 884, 103, 41, 50, this.arrangeNotices("Memorization"), 413, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Memorization");
        }
    };

    //TROLL POISON Notice Function
    this.trollPoisonChecker = function ()
    {
        if (this.trollPoisonActive == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Troll Poison");
            //the background
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "#d9ff66";
            XXX.rect(this.arrangeNotices("Troll Poison"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            //the image
            XXX.drawImage(polyPNG, 16, 24, 18, 16, this.arrangeNotices("Troll Poison") - 0.70, 414.3, 19.8, 17.6);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Troll Poison");
        }
    };
    //HINDERANCE Notice Function
    this.hinderanceChecker = function ()
    {
        if (this.hinderance == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Hinderance");
            XXX.beginPath();
            XXX.fillStyle = "slategrey";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Hinderance"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 232, 5, 17, 14, this.arrangeNotices("Hinderance") - 0.6, 414, 21.25, 17.5);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Hinderance");
        }
    };

    this.poisonedChecker = function ()
    {
        if (this.poisoned == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Poisoned");
            XXX.beginPath();
            XXX.fillStyle = "darkseagreen";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Poisoned"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 5, 1, 21, 18, this.arrangeNotices("Poisoned") + 0.25, 413.75, 21, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Poisoned");
        }
    };

    this.tirelessnessChecker = function ()
    {
        if (energil < 1)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Tirelessness");
            XXX.beginPath();
            XXX.fillStyle = "#FF82AB";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Tirelessness"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 77, 27, 13, 13, this.arrangeNotices("Tirelessness") - 0.5, 413, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Tirelessness");
        }
    };

    this.fatigueChecker = function ()
    {
        if (energil > 1)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
            this.addNotice("Fatigue");
            XXX.beginPath();
            XXX.fillStyle = "#B0C4DE";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Fatigue"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polypol, 1555, 2, 22, 27, this.arrangeNotices("Fatigue"), 413.5, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Fatigue");
        }
    };

    //SATIATION Notice Function
    this.satiationChecker = function ()
    {
        if (this.satiated == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.

            this.addNotice("Satiation");
            XXX.beginPath();
            XXX.fillStyle = "darkOrange";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Satiation"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 124, 6, 17, 19, this.arrangeNotices("Satiation"), 413, 17, 19);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Satiation");
        }
    };

    //Perfumed Notice Function
    this.perfumedChecker = function ()
    {
        if (this.perfume != "none")
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.

            this.addNotice("Perfumed");
            XXX.beginPath();
            XXX.fillStyle = "pink";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Perfumed"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(poly, 57, 50, 8, 8, this.arrangeNotices("Perfumed") + 1.25, 415, 16, 16);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Perfumed");
        }
    };

    //Swollen Notice Function
    this.swollenChecker = function ()
    {
        if (this.swollenI || this.swollenII || this.swollenIII || this.swollenIV || this.swollenV)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.

            this.addNotice("Swollen");
            XXX.beginPath();
            XXX.fillStyle = "purple";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Swollen"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(poly, 323, 103, 9, 9, this.arrangeNotices("Swollen"), 413, 20, 20);
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Swollen");
        }
    };

    //SEEN BY TARGET Notice Function (noticed by any AI unit)
    this.noticedChecker = function ()
    {
        var hits = 0;
        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
        {
            if (ArtificialIntelligenceAccess[i].playerSeen == true)
            {
                hits += 1;
            }
        }
        if (hits > 0)
        {
            this.noticed = true;
        }
        else
        {
            this.noticed = false;
        }

        if (this.noticed == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.

            this.addNotice("Noticed");
            XXX.beginPath();
            XXX.fillStyle = "darkGrey";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Noticed"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 28, 8, 52, 14, this.arrangeNotices("Noticed"), 420, 27 * 0.7, 7 * 0.7); // main Y + 7 :: main X + 0
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Noticed");
        }
    };

    //Super Stealth notice Function (super stealth active)
    this.superStealthed = function ()
    {
        if (this.superStealth == true)
        {
            // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.

            this.addNotice("Super-Stealth");
            XXX.beginPath();
            XXX.fillStyle = "black";
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.rect(this.arrangeNotices("Super-Stealth"), 413, 20, 20);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 28, 8, 52, 14, this.arrangeNotices("Super-Stealth"), 420, 27 * 0.7, 7 * 0.7); // main Y + 7 :: main X + 0
        }
        else
        {
            //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
            this.removeNotice("Super-Stealth");
        }
    };

    //Mini Notice Operations Function
    this.miniNotices = function ()
    {
        this.arrangeNotices();
        this.noticedChecker();
        this.superStealthed();
        this.perfumedChecker();
        this.fungalFeverChecker();
        this.swollenChecker();
        this.brainMaggotsChecker();
        this.satiationChecker();
        this.freezingChecker();
        this.hinderanceChecker();
        this.stunnedChecker();
        this.gutWormsChecker();
        this.sicknessChecker();
        this.fleshMights();
        this.poisonedChecker();
        this.recoveredChecker();
        this.trollPoisonChecker();
        this.energizedChecker();
        this.speedBoostChecker();
        this.intelligenceBoostChecker();
        this.willpowerBoostChecker();
        this.memoryBoostChecker();
        this.starvationChecker();
        this.dehydrationChecker();
        this.quenchedChecker();
        this.indigestionChecker();
        this.tirelessnessChecker();
        this.fatigueChecker();
        this.deprivationChecker();
        this.insomniaChecker();
        this.bandagedChecker();
        this.acidicChecker();
    };

    //MOVEMENT ANIMATION
    //walking, running, sneaking, etc.
    this.movement = function ()
    {
        // self = this because apparently you can not use this in a setTimeout which I needed to use to pace the walking animation speed.
        var self = this;

        // if the player is standing, the player's legs are not moving or changing.
        //STANDING
        if (this.movingType == 0)
        {
            this.lLegY = 0;
            this.rLegY = 0;
        }

        // if the player is walking backwards then the player's legs move back and forth to simulate walking backwards.
        //BACKWALKING
        if (this.movingType == 4)
        {
            // the left leg goes back 25 pixles and the right goes forward 25.
            if (this.lLegY > -23 && this.legSwitch == 0)
            {
                // this makes the legs extend
                self.lLegY -= 1 * TTD / (16.75 - (0.17 / 4 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                self.rLegY += 1 * TTD / (16.75 - (0.17 / 4 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                //console.log("left" + " " + self.lLegY + " " + self.rLegY);
            }
            else
            {
                //switch to the right leg forward routine.
                this.legSwitch = 1;
            }

            // the right leg goes back 25 pixles and the left goes forward 25.
            if (this.lLegY < 23 && this.legSwitch == 1)
            {
                // this makes the legs extend
                self.lLegY += 1 * TTD / (16.75 - (0.17 / 4 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                self.rLegY -= 1 * TTD / (16.75 - (0.17 / 4 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                //console.log("right" + " " + self.lLegY + " " + self.rLegY);
            }
            else
            {
                // switch to the left leg forward routine.
                this.legSwitch = 0;
            }
        }

        // if the player is walking then the player's legs move back and forth to simulate walking.
        //WALKING
        if (rapidamente == true)
        {
            if (this.lLegY < 27 && this.legSwitch == 0)
            {
                // this makes the legs extend
                self.lLegY += 1 * TTD / (12.35 - (0.25 / 2 * 86));
                self.rLegY -= 1 * TTD / (12.35 - (0.25 / 2 * 86));
            }
            else
            {
                // switch to the left leg forward routine.
                this.legSwitch = 1;
            }

            if (this.lLegY > -27 && this.legSwitch == 1)
            {
                // this makes the legs extend
                self.lLegY -= 1 * TTD / (12.35 - (0.25 / 2 * 86));
                self.rLegY += 1 * TTD / (12.35 - (0.25 / 2 * 86));
            }
            else
            {
                // switch to the left leg forward routine.
                this.legSwitch = 0;
            }
        }
        else if (this.movingType == 1)
        {
            // the right leg goes back 25 pixles and the left goes forward 25.
            if (this.lLegY < 23 && this.legSwitch == 0)
            {
                // this makes the legs extend
                self.lLegY += 1 * TTD / (16.75 - (0.17 / 2 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                self.rLegY -= 1 * TTD / (16.75 - (0.17 / 2 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                //console.log("left" + " " + self.lLegY + " " + self.rLegY);
            }
            else
            {
                //switch to the right leg forward routine.
                this.legSwitch = 1;
            }

            // the left leg goes back 25 pixles and the right goes forward 25.
            if (this.lLegY > -23 && this.legSwitch == 1)
            {
                // this makes the legs extend
                self.lLegY -= 1 * TTD / (16.75 - (0.17 / 2 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                self.rLegY += 1 * TTD / (16.75 - (0.17 / 2 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                //console.log("right" + " " + self.lLegY + " " + self.rLegY);
            }
            else
            {
                // switch to the left leg forward routine.
                this.legSwitch = 0;
            }
        }

        //RUNNING
        //You can only run if you have the energy...

        if (this.movingType == 2)
        {
            // the right leg goes back 25 pixles and the left goes forward 25.
            if (this.lLegY < 27 && this.legSwitch == 0)
            {
                // this makes the legs extend
                self.lLegY += 1 * TTD / (12.35 - (0.25 / 2 * this.getDexterity())); // 0.25 subtracted from the DT stabilizer is to make the running animation speed as dexterity is increased.
                self.rLegY -= 1 * TTD / (12.35 - (0.25 / 2 * this.getDexterity())); // 0.25 subtracted from the DT stabilizer is to make the running animation speed as dexterity is increased.
                //console.log("left" + " " + self.lLegY + " " + self.rLegY);
            }
            else
            {
                //switch to the right leg forward routine.
                this.legSwitch = 1;
            }

            // the left leg goes back 25 pixles and the right goes forward 25.
            if (this.lLegY > -27 && this.legSwitch == 1)
            {
                // this makes the legs extend
                self.lLegY -= 1 * TTD / (12.35 - (0.25 / 2 * this.getDexterity())); // 0.25 subtracted from the DT stabilizer is to make the running animation speed as dexterity is increased.
                self.rLegY += 1 * TTD / (12.35 - (0.25 / 2 * this.getDexterity())); // 0.25 subtracted from the DT stabilizer is to make the running animation speed as dexterity is increased.
                //console.log("right" + " " + self.lLegY + " " + self.rLegY);
            }
            else
            {
                // switch to the left leg forward routine.
                this.legSwitch = 0;
            }
        }
        //SNEAKING
        if (this.movingType == 3)
        {
            if (shiftKey)
            {
                // the right leg goes back 25 pixles and the left goes forward 25.
                if (this.lLegY < 15 && this.legSwitch == 0)
                {
                    // this makes the legs extend
                    self.lLegY += 1 * TTD / (50.75 - (0.3 / 2 * this.getDexterity())); // 0.3 subtracted from the DT stabilizer is to make the sneaking animation speed as dexterity is increased.
                    self.rLegY -= 1 * TTD / (50.75 - (0.3 / 2 * this.getDexterity())); // 0.3 subtracted from the DT stabilizer is to make the sneaking animation speed as dexterity is increased.
                    //console.log("left" + " " + self.lLegY + " " + self.rLegY);
                }
                else
                {
                    //switch to the right leg forward routine.
                    this.legSwitch = 1;
                }

                // the left leg goes back 25 pixles and the right goes forward 25.
                if (this.lLegY > -15 && this.legSwitch == 1)
                {
                    // this makes the legs extend
                    self.lLegY -= 1 * TTD / (50.75 - (0.3 / 2 * this.getDexterity())); // 0.3 subtracted from the DT stabilizer is to make the sneaking animation speed as dexterity is increased.
                    self.rLegY += 1 * TTD / (50.75 - (0.3 / 2 * this.getDexterity())); // 0.3 subtracted from the DT stabilizer is to make the sneaking animation speed as dexterity is increased.
                    //console.log("right" + " " + self.lLegY + " " + self.rLegY);
                }
                else
                {
                    // switch to the left leg forward routine.
                    this.legSwitch = 0;
                }
            }
        }

        //MOUNTED
        if (this.movingType == 6)
        {
            this.lLegY = 0;
            this.rLegY = 0;
        }
    };
    //DRAW AND DO MOUNT STUFF
    this.mount = function() //player mount
    {
        if (this.mountType == "none")
        {
            //STATS
            this.mounted = false;
            this.mountSpeed = 0;
            //DRAW
            //---- n/a
        }
        else if (this.mountType == "Naaprid") //todo fix this section/add mounts
        {
            //STATS
            this.mounted = true;
            this.mountSpeed = 72;
            //DRAW
            if (wKey == true && shiftKey == true) //If moving and not attacking initiate moving animation...
            {
                this.stageEngine(3, 0.210, false);
                this.mountStage = Math.floor( this.stage );
            }
            else if (wKey == true) //If moving and not attacking initiate moving animation...
            {
                this.stageEngine(3, 0.140, false);
                this.mountStage = Math.floor( this.stage );
            }
            else
            {
                this.mountStage = 0;
            }

            if (this.mountStage <= 0)
            {
                XXX.save();
                XXX.translate(screenX + 1/2 * CCC.width, screenY + 1/2 * CCC.height);
                XXX.rotate(this.rotation - 1/2 * Math.PI);
                XXX.drawImage(verse, 2849, 50, 61, 37, -1 * 61 * 2.15, -1 * 37 * 2.15,  61 * 2.15, 37 * 2.15);
                XXX.restore();
            }
            else if (this.mountStage == 1)
            {
                XXX.save();
                XXX.translate(screenX + 1/2 * CCC.width, screenY + 1/2 * CCC.height);
                XXX.rotate(this.rotation - 1/2 * Math.PI);
                XXX.drawImage(verse, 3088, 50, 61, 37, 1/2 * 61, 1/2 * 37, 61 * 2.15, 37 * 2.15);
                XXX.restore();
            }
            else if (this.mountStage == 2)
            {
                XXX.save();
                XXX.translate(screenX + 1/2 * CCC.width, screenY + 1/2 * CCC.height);
                XXX.rotate(this.rotation - 1/2 * Math.PI);
                XXX.drawImage(verse, 3005, 50, 61, 37, 1/2 * 61, 1/2 * 37, 61 * 2.15, 37 * 2.15);
                XXX.restore();
            }
        }
    }

    //DRAW SELF STUFF
    //to put it simply, this function draws two lines that represent the main character's legs.
    this.drawLegs = function ()
    {
        XXX.save();
        XXX.translate(700, 275);
        XXX.rotate(this.rotation);
        XXX.strokeStyle = "black";
        XXX.lineWidth = 2;
        XXX.moveTo(-4, 0);
        XXX.lineTo(-4, 0 + this.lLegY);
        XXX.stroke();
        XXX.moveTo(4, 0);
        XXX.lineTo(4, 0 + this.rLegY);
        XXX.stroke();
        XXX.restore();
        //console.log(this.lLegY + " is this.lLegY, " + this.rLegY + " is this.rLegY, " + this.movingType + " is this.movingType")
    };

    //this function draws a circle the color of the character's race with a black border line around it, this acts as the main characters body.
    this.drawBody = function ()
    {
        XXX.save();
        XXX.translate(this.myScreenX, this.myScreenY); //Translate resets the coordinates to the arguements mentioned (x, y).
        XXX.rotate(this.rotation);
        XXX.beginPath();
        XXX.lineWidth = 1;
        XXX.arc(0, 0, this.mySize, 0, 2 * Math.PI);
        XXX.strokeStyle = "black";
        XXX.fillStyle = this.race;
        XXX.stroke();
        XXX.fill();
        XXX.restore();

        //draw affliction: from disease or other source
        //fungal fever from teppreklia ingestion
        if (this.fungalFever)
        {
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY); //Translate resets the coordinates to the arguements mentioned (x, y).
            XXX.rotate(this.rotation);
            XXX.beginPath();
            XXX.globalALpha = 0.35;
            XXX.lineWidth = 1;
            XXX.arc(0, 0, this.mySize, 0, 2 * Math.PI);
            XXX.strokeStyle = "#DCD060";
            //XXX.fillStyle = "#DCD060";
            XXX.stroke();
            //XXX.fill();
            XXX.restore();
        }
    };

    this.drawOutfit = function ()
    {
        //this.outfitEquipped = "walrusLeatherArmour";
        //Stat Determination
        //OUTFIT
        var outfit;
        if (this.outfitEquipped == "walrusLeatherArmour")
        {
            outfit = allWorn[1];
        }
        else if (this.outfitEquipped == "gulfreyShellArmour")
        {
            outfit = allWorn[2];
        }
        else if (this.outfitEquipped == "blackChainArmour")
        {
            outfit = allWorn[3];
        }
        else if (this.outfitEquipped == "chainArmour")
        {
            outfit = allWorn[4];
        }
        else if (this.outfitEquipped == "freydicRoyalDress")
        {
            outfit = allWorn[5];
        }
        else if (this.outfitEquipped == "winterWolfDress")
        {
            outfit = allWorn[6];
        }
        else if (this.outfitEquipped == "naapridLeatherArmour")
        {
            outfit = allWorn[7];
        }
        else if (this.outfitEquipped == "freydicRoyalOutfit")
        {
            outfit = allWorn[8];
        }
        else if (this.outfitEquipped == "winterWolfOutfit")
        {
            outfit = allWorn[9];
        }
        else if (this.outfitEquipped == "winterWolfClothing")
        {
            outfit = allWorn[10];
        }
        else if (this.outfitEquipped == "hetmerArmour")
        {
            outfit = allWorn[11];
        }
        else if (this.outfitEquipped == "frichFurClothing")
        {
            outfit = allWorn[12];
        }
        else if (this.outfitEquipped == "varnFurClothing")
        {
            outfit = allWorn[13];
        }
        else if (this.outfitEquipped == "varnFurCloak")
        {
            outfit = allWorn[14];
        }
        else if (this.outfitEquipped == "varnFurDress")
        {
            outfit = allWorn[15];
        }
        else if (this.outfitEquipped == "jvostranPlateArmour")
        {
            outfit = allWorn[17];
        }
        else if (this.outfitEquipped == "grushFurClothing")
        {
            outfit = allWorn[18];
        }
        else if (this.outfitEquipped == "balgurMercArmour")
        {
            outfit = allWorn[19];
        }
        else if (this.outfitEquipped == "balgurCaptainArmour")
        {
            outfit = allWorn[20];
        }
        else if (this.outfitEquipped == "avrakLeatherArmour")
        {
            outfit = allWorn[22];
        }
        else if (this.outfitEquipped == "blackBearLeatherArmour")
        {
            outfit = allWorn[23];
        }
        else if (this.outfitEquipped == "blackBearFurClothing")
        {
            outfit = allWorn[24];
        }
        else if (this.outfitEquipped == "skinAndBones")
        {
            outfit = allWorn[25];
        }
        else if (this.outfitEquipped == "mofuMatriarchHeaddress")
        {
            outfit = allWorn[27];
        }
        else if (this.outfitEquipped == "mofuTribalWear")
        {
            outfit = allWorn[28];
        }
        else if (this.outfitEquipped == "mofuRunnerOutfit")
        {
            outfit = allWorn[29];
        }
        else if (this.outfitEquipped == "ardilFurClothing")
        {
            outfit = allWorn[30];
        }
        else if (this.outfitEquipped == "ardilFurSkirt")
        {
            outfit = allWorn[31];
        }
        else if (this.outfitEquipped == "thenganPlateArmour")
        {
            outfit = allWorn[33];
        }
        else if (this.outfitEquipped == "swampWalkerArmour")
        {
            outfit = allWorn[34];
        }
        else if (this.outfitEquipped == "evrakLeatherArmour")
        {
            outfit = allWorn[35];
        }
        else if (this.outfitEquipped == "anterShellArmour")
        {
            outfit = allWorn[36];
        }
        else if (this.outfitEquipped == "fineFreydicOutfitF")
        {
            outfit = allWorn[39];
        }
        else if (this.outfitEquipped == "fineFreydicOutfitM")
        {
            outfit = allWorn[40];
        }
        else if (this.outfitEquipped == "hyelingArmour")
        {
            outfit = allWorn[41];
        }
        else
        {
            outfit = allWorn[0];
        }

        var gloves;

        if (this.glovesEquipped == "frichFurMittens")
        {
            gloves = allWorn[16];
        }
        else if (this.glovesEquipped == "ardilFurGloves")
        {
            gloves = allWorn[32];
        }
        else
        {
            gloves = allWorn[0];
        }

        var necklace;

        if (this.necklaceEquipped == "berulnToothNecklace")
        {
            necklace = allWorn[21];
        }
        else if (this.necklaceEquipped == "mofuFive")
        {
            necklace = allWorn[26];
        }
        else
        {
            necklace = allWorn[0];
        }

        var ring;

        if (this.ringEquipped == "theCorpseRing")
        {
            ring = allWorn[37];
        }
        else if (this.ringEquipped == "ironRing")
        {
            ring = allWorn[38];
        }
        else
        {
            ring = allWorn[0];
        }

        this.outfitType = outfit;
        this.glovesType = gloves;
        this.necklaceType = necklace;
        this.ringType = ring;
        //TODO add boots.

        this.armour = outfit.protection + gloves.protection + necklace.protection + ring.protection; //TODO add boot's stats to all of the stats as well.
        this.magicalResistance = outfit.magicalProtection + gloves.magicalProtection + necklace.magicalProtection + ring.magicalProtection;
        this.warmthProtection = outfit.warmthRetention + gloves.warmthRetention + necklace.warmthRetention + ring.warmthRetention;
        this.heatResistance = outfit.thirstRetention + gloves.thirstRetention + necklace.thirstRetention + ring.thirstRetention;
        this.AdShockResist = outfit.shockResist + gloves.shockResist + necklace.shockResist + ring.shockResist;
        //Main Stat Bonuses
        this.AdStrength = outfit.strengthBonus + gloves.strengthBonus + necklace.strengthBonus + ring.strengthBonus;
        this.AdEndurance = outfit.enduranceBonus + gloves.enduranceBonus + necklace.enduranceBonus + ring.enduranceBonus;
        this.AdToughness = outfit.toughnessBonus + gloves.toughnessBonus + necklace.toughnessBonus + ring.toughnessBonus;
        this.AdIntelligence = outfit.intelligenceBonus + gloves.intelligenceBonus + necklace.intelligenceBonus + ring.intelligenceBonus;
        this.AdCharisma = outfit.charismaBonus + gloves.charismaBonus + necklace.charismaBonus + ring.charismaBonus;
        this.AdRanged = outfit.rangedBonus + gloves.rangedBonus + necklace.rangedBonus + ring.rangedBonus;
        this.AdConstitution = outfit.constitutionBonus + gloves.constitutionBonus + necklace.constitutionBonus + ring.constitutionBonus;
        this.AdStamina = outfit.staminaBonus + gloves.staminaBonus + necklace.staminaBonus + ring.staminaBonus;
        this.AdDexterity = outfit.dexterityBonus + gloves.dexterityBonus + necklace.dexterityBonus + ring.dexterityBonus;
        this.AdSurvivalism = outfit.survivalismBonus + gloves.survivalismBonus + necklace.survivalismBonus + ring.survivalismBonus;
        //Extra Stat Bonuses
        this.AdSleep = outfit.sleepBonus + gloves.sleepBonus + necklace.sleepBonus;
        this.hungerMAX = this.hungerMAX + outfit.hungerBonus + gloves.hungerBonus + necklace.hungerBonus + ring.hungerBonus;
        this.thirstMAX = this.thirstMAX + outfit.thirstBonus + gloves.thirstBonus + necklace.thirstBonus + ring.thirstBonus;
        this.warmthMAX = this.warmthMAX + outfit.warmthBonus + gloves.warmthBonus + necklace.warmthBonus + ring.warmthBonus;
        //Magical Stat Bonuses
        this.AdEminence = outfit.eminenceBonus + gloves.eminenceBonus + necklace.eminenceBonus + ring.eminenceBonus;
        this.AdWillpower = outfit.willpowerBonus + gloves.willpowerBonus + necklace.willpowerBonus + ring.willpowerBonus;
        this.AdKnowledge = outfit.knowledgeBonus + gloves.knowledgeBonus + necklace.knowledgeBonus + ring.knowledgeBonus;
        this.AdConcentration = outfit.concentrationBonus + gloves.concentrationBonus + necklace.concentrationBonus + ring.concentrationBonus;
        this.AdMemory = outfit.memoryBonus + gloves.memoryBonus + necklace.memoryBonus + ring.memoryBonus;

        this.AdAbility = [outfit.ability, gloves.ability, necklace.ability, ring.ability];

        if (this.getToughness() < outfit.toughnessRequirement)
        {
            this.unskilledUse = true;
        }
        else
        {
            this.unskilledUse = false;
        }

        //DRAW OUTFIT
        if (this.outfitEquipped == "walrusLeatherArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (1 / 2 * Math.PI));
            XXX.drawImage(polyPNG, 804, 262, 35, 24, -(1 / 2 * 45.5) + 8, -(1 / 2 * 31.2) + 1.25, 42, 28.8);
            XXX.restore();
        }
        else if (this.outfitEquipped == "gulfreyShellArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (1 / 2 * Math.PI));
            XXX.drawImage(oldverse, 44, 89, 51, 35, -(1 / 2 * 40.8) + 6.3, -(1 / 2 * 28) - 0.5, 45.9, 31.5);
            XXX.restore();
        }
        else if (this.outfitEquipped == "hyelingArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (Math.PI));
            XXX.drawImage(furr, 197, 3, 16, 16, -(1 / 2 * 16 * 2.1) + 0, -(1 / 2 * 16 * 2.1) + 1, 16 * 2.1, 16 * 2.1);
            XXX.restore();
        }
        else if (this.outfitEquipped == "fineFreydicOutfitF")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(furr, 289, 439, 40, 32, -(1 / 2 * 40) - 1.3, -(1 / 2 * 32) + 2, 40, 32);
            XXX.restore();
        }
        else if (this.outfitEquipped == "fineFreydicOutfitM")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(furr, 230, 555, 40, 32, -(1 / 2 * 40) + 2.9, -(1 / 2 * 32) + 4.5, 36, 28.8);
            XXX.restore();
        }
        else if (this.outfitEquipped == "jvostranPlateArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (1 / 2 * Math.PI));
            XXX.drawImage(verse, 508, 659, 40, 39, -(1 / 2 * 40 * 0.8) + 2, -(1 / 2 * 39 * 0.8) + 0, 40 * 0.8, 39 * 0.8);
            XXX.restore();
        }
        else if (this.outfitEquipped == "blackChainArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 1948, 1, 31, 27, -(1 / 2 * 26) - 0.3, -(1 / 2 * 27) + 1.5, 27, 27);
            XXX.restore();
        }
        else if (this.outfitEquipped == "anterShellArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(polpol, 71, 450, 34, 35, -(1 / 2 * 34 * 1.3) - 0.6, -(1 / 2 * 35 * 1.3) - 2, 34 * 1.3, 35 * 1.3);
            XXX.restore();
        }
        else if (this.outfitEquipped == "chainArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 1915, 1, 31, 27, -(1 / 2 * 26) - 1.3, -(1 / 2 * 27) + 1.5, 27, 27);
            XXX.restore();
        }
        else if (this.outfitEquipped == "skinAndBones")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (1 / 2 * Math.PI));
            //XXX.drawImage(polpol, 112, 139, 21, 26, -(1 / 2 * 21 * 1.6) - 2, -(1 / 2 * 26 * 1.6) + 2, 21 * 1.6, 26 * 1.6);
            XXX.drawImage(polpol, 112, 139, 21, 26, -(1 / 2 * 21 * 2) - 2, -(1 / 2 * 26 * 2) + 2, 21 * 2, 26 * 2);
            XXX.restore();
        }
        else if (this.outfitEquipped == "blackBearLeatherArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (1 / 2 * Math.PI));
            XXX.drawImage(polypol, 622, 26, 23, 22, -(1 / 2 * 23 * 1.3) - 0, -(1 / 2 * 22 * 1.3) + 0, 23 * 1.3, 22 * 1.3);
            XXX.restore();
        }
        else if (this.outfitEquipped == "blackBearFurClothing")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (1 / 2 * Math.PI));
            XXX.drawImage(polypol, 622, 3, 23, 22, -(1 / 2 * 23 * 1.4) - 0, -(1 / 2 * 22 * 1.4) + 0, 23 * 1.4, 22 * 1.4);
            XXX.restore();
        }
        else if (this.outfitEquipped == "freydicRoyalDress")
        {
            this.outfitZ = false;
            if (this.movingType == 0 || this.movingType == 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3141, 206, 38, 42, -(1 / 2 * 38) + 0.3, -(1 / 2 * 42) + 4.3, 38, 42);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3182, 206, 38, 42, -(1 / 2 * 38) + 0.3, -(1 / 2 * 42) + 5.3, 38, 42);
                XXX.restore();
            }
        }
        else if (this.outfitEquipped == "winterWolfDress")
        {
            this.outfitZ = false;
            if (this.movingType == 0 || this.movingType == 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3044, 208, 38, 42, -(1 / 2 * 38) + 0.3, -(1 / 2 * 42) + 8.8, 38, 42);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3003, 208, 38, 42, -(1 / 2 * 38) + 0.3, -(1 / 2 * 42) + 7.8, 38, 42);
                XXX.restore();
            }
        }
        else if (this.outfitEquipped == "naapridLeatherArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 3062, 1, 35, 22, -(1 / 2 * 49) + 0.5, -(1 / 2 * 30.8) + 2.25, 49, 30.8);
            XXX.restore();
        }
        else if (this.outfitEquipped == "thenganPlateArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (Math.PI));
            XXX.drawImage(theCrack, 127, 614, 23, 20, -(1 / 2 * 23 * 1.6) - 0, -(1 / 2 * 20 * 1.6) -0, 23 * 1.6, 20 * 1.6);
            XXX.restore();
        }
        else if (this.outfitEquipped == "swampWalkerArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (Math.PI));
            XXX.drawImage(theCrack, 128, 584, 21, 19, -(1 / 2 * 21 * 1.55) - 0, -(1 / 2 * 19 * 1.55) -0, 21 * 1.55, 19 * 1.55);
            XXX.restore();
        }
        else if (this.outfitEquipped == "balgurMercArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (Math.PI));
            XXX.drawImage(poly, 48, 106, 40, 32, -(1 / 2 * 40 * 1.2) - 3.65, -(1 / 2 * 32 * 1.2) -18.25, 40 * 1.38, 32 * 1.73);
            XXX.restore();
        }
        else if (this.outfitEquipped == "balgurCaptainArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (Math.PI));
            XXX.drawImage(poly, 50, 140, 36, 36, -(1 / 2 * 36 * 1.2) + 5, -(1 / 2 * 36 * 1.2) -9.5, 36 * 0.9, 36 * 1.45);
            XXX.restore();
        }
        if (this.outfitEquipped == "avrakLeatherArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (1 / 2 * Math.PI));
            XXX.drawImage(mofu, 92, 2119, 48, 39, -(1 / 2 * 48 * 0.9) - 2, -(1 / 2 * 39 * 0.9) + 0, 48 * 0.9, 39 * 0.9);
            XXX.restore();
        }
        if (this.outfitEquipped == "evrakLeatherArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (1 / 2 * Math.PI));
            XXX.drawImage(mofu, 71, 2186, 53, 57, -(1 / 2 * 53 * 0.7) + 2, -(1 / 2 * 57 * 0.7) + 1, 53 * 0.7, 57 * 0.7);
            XXX.restore();
        }
        else if (this.outfitEquipped == "grushFurClothing")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (1 / 2 * Math.PI));
            XXX.drawImage(mofu, 1200, 68, 26, 27, -(1 / 2 * 26 * 1.22) - 0.75, -(1 / 2 * 27 * 1.2) + 1.2, 26 * 1.22, 27 * 1.2);
            XXX.restore();
        }
        else if (this.outfitEquipped == "freydicRoyalOutfit")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 3084, 155, 36, 37, -(1 / 2 * 54) + 5, -(1 / 2 * 55.5) - 0.75, 46.8, 48.1);
            XXX.restore();
        }
        else if (this.outfitEquipped == "winterWolfOutfit")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 3099, 208, 28, 25, -(1 / 2 * 33.6) + 0, -(1 / 2 * 30) - 0.75, 33.6, 30);
            XXX.restore();
        }
        else if (this.outfitEquipped == "winterWolfClothing")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 3185, 165, 33, 28, -(1 / 2 * 26.4) + 0, -(1 / 2 * 22.4) - 0.75, 29.7, 25.2);
            XXX.restore();
        }
        else if (this.outfitEquipped == "hetmerArmour")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation - (1 / 2 * Math.PI));
            XXX.drawImage(polyPNG, 792, 308, 52, 48, -(1 / 2 * 62.4) + 0, -(1 / 2 * 57.6) - 2.5, 67.6, 62.4);
            XXX.restore();
        }
        else if (this.outfitEquipped == "frichFurClothing")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 2106, 5, 29, 24, -(1 / 2 * 29) + 1.75, -(1 / 2 * 24) - 0, 26, 26);
            XXX.restore();
        }
        else if (this.outfitEquipped == "waantiFurOutfit")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(furr, 289, 493, 29, 22, -(1 / 2 * 29 * 1.5) + 0, -(1 / 2 * 22 * 1.5) - 0.25, 29 * 1.5, 22 * 1.5);
            XXX.restore();
        }
        else if (this.outfitEquipped == "varnFurClothing" || this.outfitEquipped == "varnFurCloak")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 2140, 29, 25, 20, -(1 / 2 * 25) - 1.75, -(1 / 2 * 20) - 4, 31, 27.2);
            XXX.restore();
        }
        else if (this.outfitEquipped == "varnFurDress")
        {
            this.outfitZ = false;
            if (this.movingType == 0 || this.movingType == 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 7, 436, 34, 32, -(1 / 2 * 68) + 20, -(1 / 2 * 64) + 18.3, 27.2, 26.6);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3, 390, 43, 43, -(1 / 2 * 86) + 26, -(1 / 2 * 86) + 27.3, 34.4, 40);
                XXX.restore();
            }
        }
        else if (this.outfitEquipped == "mofuMatriarchHeaddress")
        {
            this.outfitZ = false;
            if (this.movingType == 0 || this.movingType == 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation + 1/2 * Math.PI);
                XXX.drawImage(polpol, 99, 39, 53, 39, -(1 / 2 * 53) + 1, -(1 / 2 * 39) + 1.85, 53, 39);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation + 1/2 * Math.PI);
                XXX.drawImage(polpol, 100, 1, 53, 39, -(1 / 2 * 53) + 1.6, -(1 / 2 * 39) + 4, 53, 39);
                XXX.restore();
            }
        }
        else if (this.outfitEquipped == "mofuTribalWear")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation + 1/2 * Math.PI);
            XXX.drawImage(polpol, 61, 97, 32, 32, -(1 / 2 * 32 * 1.25) + 4, -(1 / 2 * 32 * 1.25) + 0.75, 32 * 1.25, 32 * 1.25);
            XXX.restore();
        }
        else if (this.outfitEquipped == "mofuRunnerOutfit")
        {
            this.outfitZ = true;
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY);
            XXX.rotate(this.rotation + 1/2 * Math.PI);
            XXX.drawImage(polpol, 61, 97, 32, 32, -(1 / 2 * 32 * 1.25) + 4, -(1 / 2 * 32 * 1.35) + 0.75, 32 * 1.25, 32 * 1.35);
            XXX.restore();
        }
        else if (this.outfitEquipped == "ardilFurClothing" || this.outfitEquipped == "ardilFurSkirt")
        {
            this.outfitZ = true;
            if (this.movingType == 0 || this.movingType == 1 || this.movingType == 4 || this.freeze > 1.5)
            {
                if (this.outfitState == 1)
                {
                    if (this.flashAnimate(250, this.rotation - 1/2 * Math.PI, 1, [{image: polpol, imgX: 4, imgY: 256, portionW: 41, portionH: 22, adjX: -(1 / 2 * 41 * 1.7) - 4, adjY: -(1 / 2 * 22 * 1.7) - 0.2, width: 41 * 1.7, height: 22 * 1.7}, {image: polpol, imgX: 4, imgY: 234, portionW: 41, portionH: 22, adjX: -(1 / 2 * 41 * 1.7) - 4, adjY: -(1 / 2 * 22 * 1.7) - 0.2, width: 41 * 1.7, height: 22 * 1.7}], true))
                    {
                        XXX.save();
                        XXX.translate(this.myScreenX, this.myScreenY);
                        XXX.rotate(this.rotation - 1/2 * Math.PI);
                        XXX.drawImage(polpol, 4, 234, 41, 22, -(1 / 2 * 41 * 1.7) - 4, -(1 / 2 * 22 * 1.7) - 0.2, 41 * 1.7, 22 * 1.7);
                        XXX.restore();
                        this.outfitState = 0;
                    }
                }
                else
                {
                    this.outfitState = 0;
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation - 1/2 * Math.PI);
                    XXX.drawImage(polpol, 4, 234, 41, 22, -(1 / 2 * 41 * 1.7) - 4, -(1 / 2 * 22 * 1.7) - 0.2, 41 * 1.7, 22 * 1.7);
                    XXX.restore();
                }
            }
            else if (this.outfitState == 0)
            {
                if (this.flashAnimate(250, this.rotation - 1/2 * Math.PI, 1, [{image: polpol, imgX: 4, imgY: 234, portionW: 41, portionH: 22, adjX: -(1 / 2 * 41 * 1.7) - 4, adjY: -(1 / 2 * 22 * 1.7) - 0.2, width: 41 * 1.7, height: 22 * 1.7}, {image: polpol, imgX: 4, imgY: 256, portionW: 41, portionH: 22, adjX: -(1 / 2 * 41 * 1.7) - 4, adjY: -(1 / 2 * 22 * 1.7) - 0.2, width: 41 * 1.7, height: 22 * 1.7}], true))
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation - 1/2 * Math.PI);
                    XXX.drawImage(polpol, 4, 256, 41, 22, -(1 / 2 * 41 * 1.7) - 4, -(1 / 2 * 22 * 1.7) - 0.2, 41 * 1.7, 22 * 1.7);
                    XXX.restore();
                    this.outfitState = 1;
                }
            }
            else if (this.outfitState == 1)
            {
                this.flashAnimate(120, this.rotation - 1/2 * Math.PI, 1, [{image: polpol, imgX: 4, imgY: 214, portionW: 41, portionH: 22, adjX: -(1 / 2 * 41 * 1.7) - 4, adjY: -(1 / 2 * 22 * 1.7) - 0.2, width: 41 * 1.7, height: 22 * 1.7}, {image: polpol, imgX: 4, imgY: 319, portionW: 41, portionH: 22, adjX: -(1 / 2 * 41 * 1.7) - 3.5, adjY: -(1 / 2 * 22 * 1.7) - 0.2, width: 41 * 1.7, height: 22 * 1.7}, {image: polpol, imgX: 3.4, imgY: 300, portionW: 41, portionH: 22, adjX: -(1 / 2 * 41 * 1.7) - 4, adjY: -(1 / 2 * 22 * 1.7) - 0.2, width: 41 * 1.7, height: 22 * 1.7}, {image: polpol, imgX: 4, imgY: 279, portionW: 41, portionH: 22, adjX: -(1 / 2 * 41 * 1.7) - 3.3, adjY: -(1 / 2 * 22 * 1.7) - 0.2, width: 41 * 1.7, height: 22 * 1.7}]);
            }
        }
    };

    //This draws the arms either equipped with weaponry spells, or bare. Also the animation for the attacks is done here!
    this.drawArms = function ()
    {
        var self = this;

        //ATTACK INITIATOR [this triggers the attack when the player presses the space key]
        if (spaceKey == true)
        {
            if (this.weaponIsRanged == false && (this.weapon.energyCost * energil <= this.energy) && new Date().getTime() - this.attackCooldown >= 10 * this.weapon.rate && this.spell == "none")
            {
                if (this.attacking == false && this.blocking == false && qKey == false && eKey == false && this.mounted == false)
                {
                    this.energy -= this.weapon.energyCost * energil;
                    this.powerAttack = false;
                    this.strike = true;
                    this.cutcut = true; //for an sort of attacking of scenery this allows you to signal that an attack has happened.
                }
            }
            else if (this.weaponIsRanged == true && this.spell == "none" && this.mounted == false)
            {
                for (var i = Inventory.length - 1; i > -1; i--)
                {
                    if (Inventory[i][0].utility == "ammunition" && Inventory[i][0].subUtility == "arrow" && Inventory[i][0].equipped == true && this.rangedWeaponType == "bow")
                    {
                        if (this.attacking != true && this.projectileReleased == true)
                        {
                            if (Inventory[i][1] >= 1 && this.isAmmoEquipped == true)
                            {
                                Inventory[i][1] -= 1;
                                this.projectileReleased = false;
                                this.strike = true;
                            }
                        }
                    }
                    else if (Inventory[i][0].utility == "ammunition" && Inventory[i][0].subUtility == "bolt" && Inventory[i][0].equipped == true && this.rangedWeaponType == "crossbow")
                    {
                        spaceKey = false;
                        if (this.attacking != true)
                        {
                            if (Inventory[i][1] >= 1 && this.ammoLoaded == false)
                            {
                                Inventory[i][1] -= 1;
                                this.projectileReleased = false;
                                this.strike = true;
                            }

                            //console.log("projectile released " + this.projectileReleased + " ammo loaded " + this.ammoLoaded + " attacking " + this.attacking);
                            if (this.ammoLoaded == true)
                            {
                                this.projectileReleased = true;
                            }
                        }
                    }
                    else if (Inventory[i][0].utility == "ammunition" && Inventory[i][0].subUtility == "bullet" && Inventory[i][0].equipped == true && this.rangedWeaponType == "gun")
                    {
                        var blkPwder = -1;
                        for (var j = Inventory.length - 1; j > -1; j--)
                        {
                            if (Inventory[j][0].type == "blackPowder" && Inventory[j][1] >= 1)
                            {
                                blkPwder = j;
                                break;
                            }
                        }
                        spaceKey = false;
                        if (this.attacking != true)
                        {
                            var amnt;
                            if (this.weaponEquipped == "blunderbuss")
                            {
                                amnt = 5;
                            }
                            else
                            {
                                amnt = 1;
                            }

                            if (Inventory[i][1] >= amnt && blkPwder > -1 && this.ammoLoaded == false)
                            {

                                Inventory[i][1] -= amnt;
                                Inventory[blkPwder][1] -= 1;
                                this.projectileReleased = false;
                                this.strike = true;
                            }

                            //console.log("projectile released " + this.projectileReleased + " ammo loaded " + this.ammoLoaded + " attacking " + this.attacking);
                            if (this.ammoLoaded == true)
                            {
                                this.projectileReleased = true;
                            }
                        }
                    }
                }
            }
            else if (this.weaponEquipped == "none" && this.spell != "none" && this.mounted == false)
            {
                if (this.casting == false && this.will >= this.spell.cost && new Date().getTime() - this.castingCooldown >= (this.spell.cooldown * 1000))
                {
                    this.casting = true;
                    this.will -= this.spell.cost;
                }
            }
        }
        //BLOCK INITIATOR
        if (qKey == true)
        {
            if (this.weapon.subUtility == "shield" && this.blocking == false && this.mounted == false)
            {
                if (this.weapon.blockCost <= this.energy && this.attacking == false && spaceKey == false)
                {
                    this.energy -= this.weapon.blockCost;
                    this.block = true;
                }
            }
        }
        //POWER ATTACK INITIATOR
        if (eKey == true)
        {
            if (this.weaponIsRanged == false && (this.weapon.energyCost * 2.5 * energil <= this.energy) && new Date().getTime() - this.attackCooldown >= 25 * this.weapon.rate && this.getStrength() >= 10 && this.spell == "none" && this.mounted == false)
            {
                if (this.attacking == false && this.blocking == false && qKey == false && spaceKey == false)
                {
                    this.energy -= (this.weapon.energyCost * 2.5 * energil);
                    this.powerAttack = true;
                    this.strike = true;
                    this.cutcut = true; //for an sort of attacking of scenery this allows you to signal that an attack has happened.
                }
            }
        }

        if (this.strike == true) //Strike triggers attacking which needs to be on for the entire attack.
        {
            this.strike = false;
            this.attacking = true;
        }

        if (this.block == true) //Strike triggers attacking which needs to be on for the entire attack.
        {
            this.block = false;
            this.blocking = true;
        }

        //STAGE ENGINE [this function allows each type of weapon to cycle through the stages of their attack]
        this.stageEngine = function (maxStage, framerate, bothwaysBool)
        {

            if (self.attacking == true && self.weaponIsRanged == false || self.attacking == true && self.weaponIsRanged == true && self.projectileReleased == false || self.blocking == true || self.casting == true)
            {
                if (this.resetFrameOrder == true)
                {
                    this.frameOrder = "positive"; // this sets the animation frame cycling direction to positive when the attack is initialized.
                    this.resetFrameOrder = false; // this keeps the reset from messing up reverse swings that may come after the primary positive direction attack.
                }
                if (this.frameOrder == "positive")
                {
                    if (self.stage >= maxStage) // Once all of the animation stages are completed...
                    {
                        if (bothwaysBool == false) // if the animation is one way it ends here...
                        {
                            if (this.weaponEquipped != "flail" && this.weaponEquipped != "aldrekiiClaws" && this.weaponEquipped != "cero")
                            {
                                self.finalAttackStage = true;
                                self.attackCooldown = new Date().getTime();
                            }
                            self.attacking = false;
                            self.casting = false;
                            self.stage = 0;
                            this.resetFrameOrder = true; //This variable resets the order of the frames so that it always starts cycling through the animations in the positive direction.
                        }
                        else if (bothwaysBool == true) //but if it is two directional it swings back to frame zero.
                        {
                            self.finalAttackStage = true;
                            self.attackCooldown = new Date().getTime();
                            this.frameOrder = "negative";
                        }
                    }
                    else
                    {
                        if (rapidamente == false)
                        {
                            self.stage += framerate * TTD / (16.75 - (0.1 / 2 * ((this.getDexterity() / 2) + 0.5))); //This is the part that actually changes the frame in the positive direction.
                        }
                        else
                        {
                            self.stage += framerate * TTD / (16.75 - (0.1 / 2 * 25));
                        }
                    }
                }

                if (this.frameOrder == "negative") //This stuff is for the swing back.
                {
                    if (self.stage < 1)
                    {
                        self.attacking = false;
                        self.blocking = false;
                        self.casting = false;
                        self.stage = 0;
                        this.resetFrameOrder = true; //This variable resets the order of the frames so that it always starts cycling through the animations in the positive direction.

                    }
                    else
                    {
                        if (rapidamente == false)
                        {
                            self.stage -= framerate * TTD / (16.75 - (0.1 / 2 * ((this.getDexterity() / 4) + 0.5))); //This is the part that actually changes the frame in the negative direction.
                        }
                        else
                        {
                            self.stage -= framerate * TTD / (16.75 - (0.1 / 2 * 12.5));
                        }
                    }
                }

            }
        };

        //SECONDARY SPELLS
        var kee = false;
        var keeNum = false;

        if (key1 == true)
        {
            kee = true;
            keeNum = 1;
        }
        else if (key2 == true)
        {
            kee = true;
            keeNum = 2;
        }
        else if (key3 == true)
        {
            kee = true;
            keeNum = 3;
        }
        else if (key4 == true)
        {
            kee = true;
            keeNum = 4;
        }
        else if (key5 == true)
        {
            kee = true;
            keeNum = 5;
        }
        else if (key6 == true)
        {
            kee = true;
            keeNum = 6;
        }
        else if (key7 == true)
        {
            kee = true;
            keeNum = 7;
        }
        else if (key8 == true)
        {
            kee = true;
            keeNum = 8;
        }
        else if (key9 == true)
        {
            kee = true;
            keeNum = 9;
        }

        if (kee == true && gameState != "paused")
        {
            for (var i = 0; i < secondarySpells.length; i++)
            {
                if (secondarySpells[i].equipped == keeNum)
                {
                    //Ice Blade Incantation
                    if (secondarySpells[i].ID == "iceClaymore")
                    {
                        if (this.weaponEquipped == "iceBlade" && new Date().getTime() - this.secondaryCastingCooldown >= 500)
                        {
                            this.secondaryCastingCooldown = new Date().getTime();
                            this.weaponEquipped = "none";
                        }
                        else if (this.spell == "none" && this.weaponEquipped == "none" && this.will - secondarySpells[i].cost >= 0 && new Date().getTime() - this.secondaryCastingCooldown >= (secondarySpells[i].cooldown * 1000))
                        {
                            this.secondaryCastingCooldown = new Date().getTime();
                            this.will -= secondarySpells[i].cost;
                            this.magicalExperience += secondarySpells[i].EXP;
                            if (this.getEminence() < 10)
                            {
                                this.warmth -= 5;
                            }
                            this.weaponEquipped = "iceBlade";
                        }
                    }
                    //Repel
                    if (secondarySpells[i].ID == "repel")
                    {
                        if (new Date().getTime() - this.secondaryCastingCooldown >= (secondarySpells[i].cooldown * 1000) && this.will - secondarySpells[i].cost >= 0)
                        {
                            this.will -= secondarySpells[i].cost;
                            this.magicalExperience += secondarySpells[i].EXP;
                            magicList.push(new Magic({ID: "repel"}, true));
                            this.secondaryCastingCooldown = new Date().getTime();
                        }
                    }
                    //Chasing Lights
                    if (secondarySpells[i].ID == "chasingLights")
                    {
                        if (new Date().getTime() - this.secondaryCastingCooldown >= (secondarySpells[i].cooldown * 1000) && this.will - secondarySpells[i].cost >= 0)
                        {
                            this.will -= secondarySpells[i].cost;
                            this.magicalExperience += secondarySpells[i].EXP;

                            magicList.push(new Magic({ID: "chasingLights"}, true));

                            if (this.getConcentration() > 2)
                            {
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                            }

                            if (this.getConcentration() > 4)
                            {
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                            }

                            if (this.getConcentration() > 7)
                            {
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                            }

                            if (this.getConcentration() > 10)
                            {
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                            }

                            if (this.getConcentration() > 15)
                            {
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                            }

                            if (this.getConcentration() > 20)
                            {
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                            }

                            if (this.getConcentration() > 30)
                            {
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                            }

                            if (this.getConcentration() > 40)
                            {
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                            }

                            if (this.getConcentration() > 50)
                            {
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                                magicList.push(new Magic({ID: "chasingLights"}, true));
                            }


                            this.secondaryCastingCooldown = new Date().getTime();
                        }
                    }
                    //Life-Tap
                    if (secondarySpells[i].ID == "lifeTap")
                    {
                        if (new Date().getTime() - this.secondaryCastingCooldown >= (secondarySpells[i].cooldown * 1000) && this.will - secondarySpells[i].cost >= 0)
                        {
                            this.will -= secondarySpells[i].cost;
                            this.magicalExperience += secondarySpells[i].EXP;

                            magicList.push(new Magic({ID: "lifeTap"}, true));
                            if (this.willpower == 0 && this.constitution > 0)
                            {
                                this.willpower += 1;
                                this.totalMagicPoints += 1;
                                this.constitution -= 1;
                                this.totalSkillPoints -= 1;
                            }
                            else
                            {
                                this.energy -= 6 + 0.6 * this.getConcentration();
                                this.health -= 6 + 0.6 * this.getConcentration();
                                this.will += 3 + 0.2 * this.getConcentration();
                            }

                            this.secondaryCastingCooldown = new Date().getTime();
                        }
                    }
                    //Surge
                    if (secondarySpells[i].ID == "surge")
                    {
                        if (new Date().getTime() - this.secondaryCastingCooldown >= (secondarySpells[i].cooldown * 1000) && this.will - secondarySpells[i].cost >= 0)
                        {
                            this.will -= secondarySpells[i].cost;
                            this.magicalExperience += secondarySpells[i].EXP;

                            magicList.push(new Magic({ID: "surge"}, true));

                            this.secondaryCastingCooldown = new Date().getTime();
                        }
                    }
                    //Sanctuary
                    if (secondarySpells[i].ID == "sanctuary")
                    {
                        if (new Date().getTime() - this.secondaryCastingCooldown >= (secondarySpells[i].cooldown * 1000) && this.will - secondarySpells[i].cost >= 0)
                        {
                            this.will -= secondarySpells[i].cost;
                            this.magicalExperience += secondarySpells[i].EXP;

                            magicList.push(new Magic({ID: "sanctuary"}, true));

                            this.secondaryCastingCooldown = new Date().getTime();
                        }
                    }
                    //Repelling Ward
                    if (secondarySpells[i].ID == "repellingWard")
                    {
                        if (new Date().getTime() - this.secondaryCastingCooldown >= (secondarySpells[i].cooldown * 1000) && this.will - secondarySpells[i].cost >= 0)
                        {
                            this.will -= secondarySpells[i].cost;
                            this.magicalExperience += secondarySpells[i].EXP;

                            magicList.push(new Magic({ID: "repellingWard"}, true));

                            this.secondaryCastingCooldown = new Date().getTime();
                        }
                    }
                }
            }
        }

        //TERTIARY SPELLS
        for (var i = 0; i < tertiarySpells.length; i++)
        {
            if (tertiarySpells[i].equipped == true)
            {
                //binds are paid for by decreasing max will while active.
                if (this.willMAX - tertiarySpells[i].cost >= 0)
                {
                    var hitth = 0;
                    for (var j = 0; j < bindedWillList.length; j++)
                    {
                        if (bindedWillList[j][0] == tertiarySpells[i].ID)
                        {
                            hitth = 1;
                        }
                    }
                    if (!hitth)
                    {
                        bindedWillList.push([tertiarySpells[i].ID, tertiarySpells[i].cost]);
                    }
                }
                else
                {
                    var hitth = 0;
                    for (var j = 0; j < bindedWillList.length; j++)
                    {
                        if (bindedWillList[j][0] == tertiarySpells[i].ID)
                        {
                            hitth = 1;
                        }
                    }
                    if (!hitth)
                    {
                        tertiarySpells[i].equipped = false;
                    }
                }

                if (tertiarySpells[i].equipped) //if it is still equal to true then...
                {
                    //TERTIARY SPELL EFFECTS (equipped)
                    if (tertiarySpells[i].ID == "fireHands")
                    {
                        this.fireHands = true;
                    }
                    if (tertiarySpells[i].ID == "chargedTouch")
                    {
                        this.shockHands = true;
                    }
                    if (tertiarySpells[i].ID == "freezingGrasp")
                    {
                        this.freezeHands = true;
                    }
                    if (tertiarySpells[i].ID == "leechingTouch")
                    {
                        this.leechHands = true;
                    }
                    if (tertiarySpells[i].ID == "sorcerer'sRaincoat")
                    {
                        this.sRaincoat = true;
                    }
                    if (tertiarySpells[i].ID == "shieldingI")
                    {
                        this.shieldingI = true;
                    }
                    if (tertiarySpells[i].ID == "shieldingII")
                    {
                        this.shieldingII = true;
                    }
                    if (tertiarySpells[i].ID == "shieldingIII")
                    {
                        this.shieldingIII = true;
                    }
                    if (tertiarySpells[i].ID == "shieldingIV")
                    {
                        this.shieldingIV = true;
                    }
                    if (tertiarySpells[i].ID == "shieldingV")
                    {
                        this.shieldingV = true;
                    }
                }
            }
            else
            {
                //removes one unequipped bind per loop.
                for (var j = 0; j < bindedWillList.length; j++)
                {
                    if (bindedWillList[j][0] == tertiarySpells[i].ID)
                    {
                        bindedWillList.splice(j, 1);
                        break;
                    }
                }

                //TERTIARY SPELL EFFECTS (unequipped)
                if (tertiarySpells[i].ID == "fireHands")
                {
                    this.fireHands = false;
                }
                if (tertiarySpells[i].ID == "chargedTouch")
                {
                    this.shockHands = false;
                }
                if (tertiarySpells[i].ID == "freezingGrasp")
                {
                    this.freezeHands = false;
                }
                if (tertiarySpells[i].ID == "leechingTouch")
                {
                    this.leechHands = false;
                }
                if (tertiarySpells[i].ID == "sorcerer'sRaincoat")
                {
                    this.sRaincoat = false;
                }
                if (tertiarySpells[i].ID == "shieldingI")
                {
                    this.shieldingI = false;
                }
                if (tertiarySpells[i].ID == "shieldingII")
                {
                    this.shieldingII = false;
                }
                if (tertiarySpells[i].ID == "shieldingIII")
                {
                    this.shieldingIII = false;
                }
                if (tertiarySpells[i].ID == "shieldingIV")
                {
                    this.shieldingIV = false;
                }
                if (tertiarySpells[i].ID == "shieldingV")
                {
                    this.shieldingV = false;
                }
            }
        }


        //SPELL ARMS (Primary Spells: forms)

        //Flying Colors Form
        if (this.spell.ID == "flyingColours")
        {
            this.stageEngine(5, 0.20, true);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1636, 92, 46, 27, -29, -21, 46 * 1.3, 27);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1636, 64, 46, 27, -29, -21, 46 * 1.3, 27);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1636, 35, 46, 27, -29, -21, 46 * 1.3, 27);
                XXX.restore();
                this.doMagic = true
            }
            else if (Math.floor(this.stage) >= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1636, 5, 46, 27, -30, -21, 46 * 1.3, 27);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    this.magicalExperience += this.spell.EXP;
                    magicList.push(new Magic(player.spell, true));
                }
                this.castingCooldown = new Date().getTime();
            }
        }

        //Vivification Form
        if (this.spell.ID == "vivification")
        {
            this.stageEngine(20, 0.16, false);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 5, 107, 61, 52, -39.5, -30.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 6, 167, 61, 52, -36.5, -35.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 4, 228, 61, 52, -39.5, -38.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 4, 301, 61, 52, -39.5, -33, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 6, 363, 61, 52, -38, -33.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 6, 428, 61, 52, -40.5, -38.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 8, 489, 61, 52, -39.5, -37.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 9, 557, 61, 52, -39.5, -39, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 10, 638, 61, 52, -38.5, -38, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 9)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 10, 707, 61, 52, -39.5, -39, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 10)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 12, 792, 61, 52, -39.1, -38.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 11)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 15, 892, 61, 52, -37.7, -40, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 12)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 139, 416, 61, 52, -37.6, -40, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 13)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 136, 503, 61, 52, -38, -40.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 14)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 133, 592, 61, 52, -40.3, -41, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 15)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 135, 679, 61, 52, -38.8, -41, 61 * 1.3, 52 * 1.3);
                XXX.restore();
                this.doMagic = true;
            }
            else if (Math.floor(this.stage) <= 16)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 136, 763, 61, 52, -39.5, -30, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 17)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 137, 828, 61, 52, -39.5, -29.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    this.magicalExperience += this.spell.EXP;

                    var closerestToPlayz = "catFace";
                    var closerestest = "none";
                    var positionOfCloserest = null;
                    for (var i = 0; i < deadAIList.length; i++)
                    {
                        if (closerestToPlayz == "catFace" || closerestToPlayz > deadAIList[i].DTP())
                        {
                            closerestToPlayz = deadAIList[i].DTP();
                            closerestest = deadAIList[i];
                            positionOfCloserest = i;
                        }
                    }

                    if (closerestToPlayz <= 85)
                    {
                        closerestest.alive = true;
                        closerestest.health = closerestest.healthMAX;
                        closerestest.revived = true;

                        //death variables
                        closerestest.timeSinceDead = 0;
                        closerestest.wasAlive = true;
                        //Humanoid related Variables (for humanlike units only)
                        closerestest.lLegY = 0;
                        closerestest.rLegY = 0;
                        closerestest.legSwitch = 0;
                        closerestest.talking = false; //this notes whether or not the unit is in the middle of saying something in a conversation.
                        //effects variables
                        closerestest.blindedTime = 0;
                        closerestest.blinded = false;
                        closerestest.burningTime = 0;
                        closerestest.burningTime2 = new Date().getTime();
                        closerestest.frozenTime = 0;

                        if (player.getConcentration >= 35)
                        {
                            closerestest.disturbedTime = 0;
                            closerestest.disturbed = false;
                        }

                        ArtificialIntelligenceAccess.push(closerestest);
                        deadAIList.splice(positionOfCloserest, 1);
                    }
                }
            }
            else if (Math.floor(this.stage) <= 18)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 137, 902, 61, 52, -40.4, -29.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 19)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 139, 946, 61, 52, -39.5, -47.5, 61 * 1.3, 52 * 1.3);
                XXX.restore();
                this.castingCooldown = new Date().getTime();
            }

        }

        //Draining Form
        if (this.spell.ID == "drainingI" || this.spell.ID == "drainingII" || this.spell.ID == "drainingIII")
        {
            this.stageEngine(6, 0.20, true);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1867, 296, 36, 31, -22, -30, 36 * 1.2, 31 * 1.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1867, 334, 36, 31, -26, -28, 36 * 1.2, 31 * 1.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1870, 373, 36, 31, -25, -29, 36 * 1.2, 31 * 1.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1872, 409, 36, 31, -25, -27, 36 * 1.2, 31 * 1.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1875, 443, 36, 31, -24, -27, 36 * 1.2, 31 * 1.2);
                XXX.restore();
                this.doMagic = true;
            }
            else if (Math.floor(this.stage) >= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1875, 477, 36, 31, -28, -28, 36 * 1.2, 31 * 1.2);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    this.magicalExperience += this.spell.EXP;
                    magicList.push(new Magic(player.spell, true));
                }
                this.castingCooldown = new Date().getTime();
            }
        }

        //Ice Spikes Form
        if (this.spell.ID == "iceSpikes")
        {
            this.stageEngine(7, 0.20, false);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1862, 109, 44, 24, -22, -20, 44, 24);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1864, 141, 44, 24, -22, -20, 44, 24);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1864, 203, 44, 24, -21, -21, 44, 24);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1864, 230, 44, 24, -21, -21, 44, 24);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1865, 172, 44, 24, -21, -21, 44, 24);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1864, 260, 44, 24, -21, -21, 44, 24);
                XXX.restore();
                this.doMagic = true;
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1864, 260, 44, 24, -21, -21, 44, 24);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    if (this.getEminence() < 10)
                    {
                        this.warmth -= 5;
                    }
                    this.magicalExperience += this.spell.EXP;

                    if (player.getConcentration() >= 50)
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                        magicList.push(new Magic(player.spell, true, 2));
                        magicList.push(new Magic(player.spell, true, 3));
                        magicList.push(new Magic(player.spell, true, 4));
                        magicList.push(new Magic(player.spell, true, 5));
                        magicList.push(new Magic(player.spell, true, 6));
                        magicList.push(new Magic(player.spell, true, 7));
                    }
                    else if (player.getConcentration() >= 40)
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                        magicList.push(new Magic(player.spell, true, 2));
                        magicList.push(new Magic(player.spell, true, 3));
                        magicList.push(new Magic(player.spell, true, 4));
                        magicList.push(new Magic(player.spell, true, 5));
                    }
                    else if (player.getConcentration() >= 30)
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                        magicList.push(new Magic(player.spell, true, 2));
                        magicList.push(new Magic(player.spell, true, 3));
                        magicList.push(new Magic(player.spell, true, 4));
                    }
                    else if (player.getConcentration() >= 20)
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                        magicList.push(new Magic(player.spell, true, 2));
                        magicList.push(new Magic(player.spell, true, 3));
                    }
                    else if (player.getConcentration() >= 10)
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                        magicList.push(new Magic(player.spell, true, 2));
                    }
                    else
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                    }

                }
                this.castingCooldown = new Date().getTime();
            }
        }

        //Summoning Form
        if (this.spell.ID == "summonFrich" || this.spell.ID == "summonWolf")
        {
            this.stageEngine(7, 0.20, false);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 408, 57, 37, -1/2 * 57 * 1.4, -1/2 * 41 * 1.4, 57 * 1.4, 37 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 163, 367, 57, 37, -1/2 * 57 * 1.35, -1/2 * 39 * 1.35, 57 * 1.35, 37 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 408, 57, 37, -1/2 * 57 * 1.35, -1/2 * 39 * 1.35, 57 * 1.35, 37 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 450, 57, 37, -1/2 * 57 * 1.3, -1/2 * 39 * 1.3, 57 * 1.3, 37 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 174, 490, 37, 29, -1/2 * 37 * 1.3, -1/2 * 29 * 1.3, 37 * 1.3, 29 * 1.3);
                XXX.restore();
                this.doMagic = true;
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 175, 570, 37, 29, -1/2 * 37 * 1.25, -1/2 * 29 * 1.25, 37 * 1.25, 29 * 1.25);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    this.magicalExperience += this.spell.EXP;

                    if (player.getConcentration() >= 50)
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                        magicList.push(new Magic(player.spell, true, 2));
                        magicList.push(new Magic(player.spell, true, 3));
                        magicList.push(new Magic(player.spell, true, 4));
                        magicList.push(new Magic(player.spell, true, 5));
                        magicList.push(new Magic(player.spell, true, 6));
                    }
                    else if (player.getConcentration() >= 40)
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                        magicList.push(new Magic(player.spell, true, 2));
                        magicList.push(new Magic(player.spell, true, 3));
                        magicList.push(new Magic(player.spell, true, 4));
                        magicList.push(new Magic(player.spell, true, 5));
                    }
                    else if (player.getConcentration() >= 30)
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                        magicList.push(new Magic(player.spell, true, 2));
                        magicList.push(new Magic(player.spell, true, 3));
                        magicList.push(new Magic(player.spell, true, 4));
                    }
                    else if (player.getConcentration() >= 20)
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                        magicList.push(new Magic(player.spell, true, 2));
                        magicList.push(new Magic(player.spell, true, 3));
                    }
                    else if (player.getConcentration() >= 10)
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                        magicList.push(new Magic(player.spell, true, 2));
                    }
                    else
                    {
                        magicList.push(new Magic(player.spell, true, 1));
                    }
                }
                this.castingCooldown = new Date().getTime();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 174, 490, 37, 29, -1/2 * 37 * 1.25, -1/2 * 29 * 1.25, 37 * 1.25, 29 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 408, 57, 37, -1/2 * 57 * 1.25, -1/2 * 37 * 1.25, 57 * 1.25, 37 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 450, 57, 37, -1/2 * 57 * 1.25, -1/2 * 37 * 1.25, 57 * 1.25, 37 * 1.25);
                XXX.restore();
            }
        }

        if (this.spell.ID == "SummonSingularLargeCreature")
        {
            this.stageEngine(7, 0.20, false);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 408, 57, 37, -1/2 * 57 * 1.4, -1/2 * 41 * 1.4, 57 * 1.4, 37 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 163, 367, 57, 37, -1/2 * 57 * 1.35, -1/2 * 39 * 1.35, 57 * 1.35, 37 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 408, 57, 37, -1/2 * 57 * 1.35, -1/2 * 39 * 1.35, 57 * 1.35, 37 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 450, 57, 37, -1/2 * 57 * 1.3, -1/2 * 39 * 1.3, 57 * 1.3, 37 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 174, 490, 37, 29, -1/2 * 37 * 1.3, -1/2 * 29 * 1.3, 37 * 1.3, 29 * 1.3);
                XXX.restore();
                this.doMagic = true;
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 175, 570, 37, 29, -1/2 * 37 * 1.25, -1/2 * 29 * 1.25, 37 * 1.25, 29 * 1.25);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    this.magicalExperience += this.spell.EXP;
                    magicList.push(new Magic(player.spell, true, 1));
                }
                this.castingCooldown = new Date().getTime();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 174, 490, 37, 29, -1/2 * 37 * 1.25, -1/2 * 29 * 1.25, 37 * 1.25, 29 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 408, 57, 37, -1/2 * 57 * 1.25, -1/2 * 37 * 1.25, 57 * 1.25, 37 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 450, 57, 37, -1/2 * 57 * 1.25, -1/2 * 37 * 1.25, 57 * 1.25, 37 * 1.25);
                XXX.restore();
            }
        }

        //Charm Form
        if (this.spell.ID == "charm")
        {
            this.stageEngine(7, 0.20, false);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 408, 57, 37, -1/2 * 57 * 1.4, -1/2 * 41 * 1.4, 57 * 1.4, 37 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 163, 367, 57, 37, -1/2 * 57 * 1.35, -1/2 * 39 * 1.35, 57 * 1.35, 37 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 408, 57, 37, -1/2 * 57 * 1.35, -1/2 * 39 * 1.35, 57 * 1.35, 37 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 450, 57, 37, -1/2 * 57 * 1.3, -1/2 * 39 * 1.3, 57 * 1.3, 37 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 174, 490, 37, 29, -1/2 * 37 * 1.3, -1/2 * 29 * 1.3, 37 * 1.3, 29 * 1.3);
                XXX.restore();
                this.doMagic = true;
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 174, 516, 38, 31, -1/2 * 38 * 1.3, -1/2 * 31 * 1.3, 38 * 1.3, 31 * 1.3);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    this.magicalExperience += this.spell.EXP;
                    magicList.push(new Magic(player.spell, true, 1));
                }
                this.castingCooldown = new Date().getTime();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 174, 490, 37, 29, -1/2 * 37 * 1.25, -1/2 * 29 * 1.25, 37 * 1.25, 29 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 408, 57, 37, -1/2 * 57 * 1.25, -1/2 * 37 * 1.25, 57 * 1.25, 37 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 165, 450, 57, 37, -1/2 * 57 * 1.25, -1/2 * 37 * 1.25, 57 * 1.25, 37 * 1.25);
                XXX.restore();
            }
        }

        //Fireball Form
        if (this.spell.ID == "fireballI" || this.spell.ID == "fireballII" || this.spell.ID == "fireballIII")
        {
            this.stageEngine(7, 0.25, true);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1635, 2, 49, 33, -29, -23, 49 * 1.2, 33);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1636, 33, 49, 33, -27.5, -23, 49 * 1.2, 33);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1635, 60, 49, 33, -29, -25, 49 * 1.2, 33);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1691, 118, 49, 33, -29, -24, 49 * 1.2, 33);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1690, 80, 49, 33, -30.25, -25, 49 * 1.2, 33);
                XXX.restore();
                this.doMagic = true
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1691, 42, 49, 33, -28, -35, 49 * 1.2, 33 * 1.2);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    if (this.spell.ID == "fireballI")
                    {
                        this.warmth += 3;
                    }
                    else if (this.spell.ID == "fireballII")
                    {
                        this.warmth += 4;
                    }
                    else if (this.spell.ID == "fireballIII")
                    {
                        this.warmth += 7;
                    }
                    this.magicalExperience += this.spell.EXP;
                    magicList.push(new Magic(player.spell, true));
                }
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1731, 43, 49, 33, -27, -36, 49 * 1.2, 33 * 1.2);
                XXX.restore();
                this.castingCooldown = new Date().getTime();

            }
        }

        //Frost Wind Form
        if (this.spell.ID == "frostWind")
        {
            this.stageEngine(19, 0.14, false);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1575, 29, 48, 35, -23.5, -25.5, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1577, 67, 48, 35, -22.5, -25, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1577, 103, 48, 35, -22.1, -25.4, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1578, 141, 48, 35, -20.5, -28, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1573, 187, 48, 35, -24.3, -26.6, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1574, 226, 48, 35, -25, -26.5, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1573, 187, 48, 35, -24.3, -26.6, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1578, 141, 48, 35, -20.5, -28, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1577, 103, 48, 35, -22.1, -25.4, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 9)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1577, 67, 48, 35, -22.5, -25, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 10)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1575, 29, 48, 35, -23.5, -25.5, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 11)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1577, 67, 48, 35, -22.5, -25, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 12)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1577, 103, 48, 35, -22.1, -25.4, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 13)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1578, 141, 48, 35, -20.5, -28, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 14)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1573, 187, 48, 35, -24.3, -26.6, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 15)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1574, 226, 48, 35, -25, -26.5, 48, 35);
                XXX.restore();
                this.doMagic = true;
            }
            else if (Math.floor(this.stage) <= 16)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1574, 226, 48, 35, -25, -26.5, 48, 35);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    if (this.getEminence() < 10)
                    {
                        this.warmth -= 5;
                    }
                    this.magicalExperience += this.spell.EXP;
                    magicList.push(new Magic(player.spell, true, 1));
                    magicList.push(new Magic(player.spell, true, 2));
                    magicList.push(new Magic(player.spell, true, 3));
                    magicList.push(new Magic(player.spell, true, 4));
                    magicList.push(new Magic(player.spell, true, 5));
                    magicList.push(new Magic(player.spell, true, 6));
                    magicList.push(new Magic(player.spell, true, 7));
                    magicList.push(new Magic(player.spell, true, 8));
                }
            }
            else if (Math.floor(this.stage) <= 17)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1574, 226, 48, 35, -25, -26.5, 48, 35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 18)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1574, 226, 48, 35, -25, -26.5, 48, 35);
                XXX.restore();
                this.castingCooldown = new Date().getTime();
            }

        }

        //Embers Form
        if (this.spell.ID == "embers")
        {
            this.stageEngine(9, 0.25, false);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1635, 2, 49, 33, -29, -23, 49 * 1.2, 33);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1636, 33, 49, 33, -27.5, -23, 49 * 1.2, 33);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1635, 60, 49, 33, -29, -25, 49 * 1.2, 33);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1635, 89, 49, 33, -29, -24, 49 * 1.2, 33);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1632, 118, 49, 33, -30.25, -25, 49 * 1.2, 33);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1632, 146, 49, 33, -30, -25, 49 * 1.2, 33);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1635, 177, 49, 33, -28.5, -26, 49 * 1.2, 33);
                XXX.restore();
                this.doMagic = true
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1635, 207, 49, 33, -29.5, -23, 49 * 1.2, 33);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    this.warmth += 4;
                    this.magicalExperience += this.spell.EXP;
                    magicList.push(new Magic(player.spell, true));
                }
            }
            else if (Math.floor(this.stage) >= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1637, 234, 49, 33, -29, -23, 49 * 1.2, 33);
                XXX.restore();
                this.castingCooldown = new Date().getTime();
            }
        }

        //Electric Bolt Form
        if (this.spell.ID == "electricBolt")
        {
            this.stageEngine(8, 0.25, false);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 455, 103, 32, 30, -17, -25, 32 * 1.25, 30 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 455, 144, 32, 30, -19, -25, 32 * 1.25, 30 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 457, 175, 32, 30, -22, -28, 32 * 1.25, 30 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 458, 207, 32, 30, -21, -27, 32 * 1.25, 30 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 460, 236, 32, 30, -22, -30, 32 * 1.25, 30 * 1.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 461, 267, 32, 30, -21, -33, 32 * 1.25, 30 * 1.25);
                XXX.restore();
                this.doMagic = true;
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 461, 267, 32, 30, -21, -33, 32 * 1.25, 30 * 1.25);
                XXX.restore();
                if (this.doMagic)
                {
                    this.doMagic = false;
                    this.magicalExperience += this.spell.EXP;
                    magicList.push(new Magic(player.spell, true));
                }
            }
            else if (Math.floor(this.stage) >= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 461, 267, 32, 30, -21, -33, 32 * 1.25, 30 * 1.25);
                XXX.restore();
                this.castingCooldown = new Date().getTime();
            }
        }


        //ARM VARIANTS (player weapon types)
        //FISTS
        if (this.weaponEquipped == "none" && this.spell == "none")
        {
            this.stageEngine(6, 0.2, true);

            if (this.attacking == false)
            {
                this.stage = 0;
            }

            //ATTACK ANIMATION
            if (this.stage <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 631, 55, 92, 30, -22, -17, 46, 22);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 638, 118, 80, 37, -24, -17, 46, 22);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 639, 195, 80, 37, -26, -20, 46, 22);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 643, 276, 80, 37, -28.5, -20, 48, 23);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 653, 352, 80, 37, -26.5, -21, 48, 23);
                XXX.restore();
            }

        }
        //MACE
        if (this.weaponEquipped == "mace")
        {
            this.stageEngine(6, 0.15, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK ANIMATION
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 51, 70, 105, 46, -26, -22, 70, 45);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 169, 62, 105, 46, -26, -29, 70, 45);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 282, 47, 105, 53, -33, -40, 70, 45);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 399, 68, 105, 59, -38, -43, 72, 45);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 520, 59, 105, 69, -28, -43, 72, 47);
                XXX.restore();
            }
        }
        //KELLISH SWORD
        if (this.weaponEquipped == "kellishSword")
        {
            this.stageEngine(7, 0.21, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK ANIMATION
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 160, 14, 77, 75, -1/2 * 77 * 1.3 + 4, -1/2 * 75 * 1.3 - 17, 77 * 1.3, 75 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 161, 101, 77, 75, -1/2 * 77 * 1.3 + 1, -1/2 * 75 * 1.3 - 13, 77 * 1.3, 75 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 160, 14, 77, 75, -1/2 * 77 * 1.3 + 4, -1/2 * 75 * 1.3 - 17, 77 * 1.3, 75 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 166, 190, 77, 75, -1/2 * 77 * 1.3 - 0.2, -1/2 * 75 * 1.3 - 22, 77 * 1.3, 75 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 248, 9, 77, 75, -1/2 * 77 * 1.3 -0.5, -1/2 * 75 * 1.3 - 23, 77 * 1.3, 75 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 258, 99, 77, 75, -1/2 * 77 * 1.3 + 0.5, -1/2 * 75 * 1.3 - 15, 77 * 1.3, 75 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 258, 205, 77, 75, -1/2 * 77 * 1.3 - 3, -1/2 * 75 * 1.3 - 3.5, 77 * 1.3, 75 * 1.3);
                XXX.restore();
            }
        }
        //LIGHTNING CORSEQUE
        if (this.weaponEquipped == "lightningCorseque")
        {
            this.stageEngine(4, 0.18, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK ANIMATION
            if (Math.floor(this.stage) <= 0)
            {
                this.flashAnimate(90, this.rotation, 0.90, [{image: mofu, imgX: 327, imgY: 43, portionW: 33, portionH: 77, adjX: -7, adjY: -92, width: 33 * 1.5, height: 77 * 1.5}, {image: mofu, imgX: 365, imgY: 43, portionW: 33, portionH: 77, adjX: -7, adjY: -92, width: 33 * 1.5, height: 77 * 1.5}, {image: mofu, imgX: 404, imgY: 43.5, portionW: 33, portionH: 77, adjX: -7, adjY: -92, width: 33 * 1.5, height: 77 * 1.5}]);
            }
            else if (Math.floor(this.stage) <= 1)
            {
                this.flashAnimate(90, this.rotation, 0.90, [{image: mofu, imgX: 325, imgY: 222, portionW: 33, portionH: 77, adjX: -6, adjY: -102, width: 33 * 1.5, height: 77 * 1.5}, {image: mofu, imgX: 366, imgY: 222, portionW: 33, portionH: 77, adjX: -6, adjY: -102, width: 33 * 1.5, height: 77 * 1.5}, {image: mofu, imgX: 406, imgY: 222, portionW: 33, portionH: 77, adjX: -6, adjY: -102, width: 33 * 1.5, height: 77 * 1.5}]);
            }
            else if (Math.floor(this.stage) >= 2)
            {
                this.flashAnimate(90, this.rotation, 0.90, [{image: mofu, imgX: 329, imgY: 133, portionW: 33, portionH: 77, adjX: -5, adjY: -100, width: 33 * 1.5, height: 77 * 1.5}, {image: mofu, imgX: 370.5, imgY: 134, portionW: 33, portionH: 77, adjX: -5, adjY: -100, width: 33 * 1.5, height: 77 * 1.5}, {image: mofu, imgX: 409.5, imgY: 134, portionW: 33, portionH: 77, adjX: -5, adjY: -100, width: 33 * 1.5, height: 77 * 1.5}]);
            }
        }
        //ZER0's BLADE
        if (this.weaponEquipped == "cero")
        {
            this.stageEngine(13, 0.20, false); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK ANIMATION
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 206, 16, 76, 75, -1/2 * 76 * 3 + 175, -1/2 * 75 * 3 + 141, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 211, 84, 76, 75, -1/2 * 76 * 3 + 175, -1/2 * 75 * 3 + 141, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 213, 157, 76, 75, -1/2 * 76 * 3 + 176, -1/2 * 75 * 3 + 141, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 218, 224, 76, 75, -1/2 * 76 * 3 + 178, -1/2 * 75 * 3 + 138, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 311, 77, 76, 75, -1/2 * 76 * 3 + 177, -1/2 * 75 * 3 + 137, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 318, 148, 76, 75, -1/2 * 76 * 3 + 177, -1/2 * 75 * 3 + 138, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                this.attackManual = false;
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 317, 223, 76, 75, -1/2 * 76 * 3 + 178, -1/2 * 75 * 3 + 138, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7) //this is the same as 8
            {
                if (this.attackManual == false)
                {
                    this.attackManual = true;
                    this.finalAttackStage = true;
                    this.attackCooldown = new Date().getTime();
                }
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 113, 149, 76, 75, -1/2 * 76 * 3 + 175, -1/2 * 75 * 3 + 136, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 8) //This is the same as 9
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 113, 149, 76, 75, -1/2 * 76 * 3 + 175, -1/2 * 75 * 3 + 136, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 9) //this is the same as 8
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 113, 149, 76, 75, -1/2 * 76 * 3 + 175, -1/2 * 75 * 3 + 136, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 10) //this is the same as 8 and 9
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 113, 149, 76, 75, -1/2 * 76 * 3 + 175, -1/2 * 75 * 3 + 136, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 11)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 116, 224, 76, 75, -1/2 * 76 * 3 + 175.5, -1/2 * 75 * 3 + 136, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 12)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(zer0, 22, 151, 76, 75, -1/2 * 76 * 3 + 177, -1/2 * 75 * 3 + 133, -1/2 * 76 * 3, -1/2 * 75 * 3);
                XXX.restore();
            }
        }
        //HEAVY SPIKED CLUB
        if (this.weaponEquipped == "smashStick")
        {
            this.stageEngine(7, 0.19, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK ANIMATION
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 187, 132, 64, 55, -65, -44, 64 * 1.5, 55 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 252, 132, 64, 55, -64, -47, 64 * 1.5, 55 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 190, 190, 64, 55, -51, -52.5, 64 * 1.5, 55 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 242, 191, 64, 55, -48.5, -58, 64 * 1.5, 55 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 187, 245, 64, 55, -42, -60, 64 * 1.5, 55 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 239, 250, 64, 55, -36, -51, 64 * 1.5, 55 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 186, 307, 64, 55, -37, -49, 64 * 1.5, 55 * 1.5);
                XXX.restore();
            }
        }
        //HEAVY FLAMING SPIKED CLUB
        if (this.weaponEquipped == "burningSmashStick")
        {
            this.stageEngine(7, 0.23, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK ANIMATION
            if (Math.floor(this.stage) <= 0)
            {
                this.flashAnimate(90, this.rotation, 0.90, [{image: mofu, imgX: 60, imgY: 404, portionW: 66, portionH: 65, adjX: -58, adjY: -52, width: 66 * 1.5, height: 65 * 1.5}, {image: mofu, imgX: 56, imgY: 353, portionW: 66, portionH: 65, adjX: -63, adjY: -52, width: 66 * 1.5, height: 65 * 1.5}, {image: mofu, imgX: 43, imgY: 131, portionW: 66, portionH: 65, adjX: -63, adjY: -47, width: 66 * 1.5, height: 65 * 1.5}, {image: mofu, imgX: 60, imgY: 404, portionW: 66, portionH: 65, adjX: -58, adjY: -52, width: 66 * 1.5, height: 65 * 1.5}, {image: mofu, imgX: 56, imgY: 353, portionW: 66, portionH: 65, adjX: -63, adjY: -52, width: 66 * 1.5, height: 65 * 1.5}]);
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 109, 127, 66, 65, -60, -55, 66 * 1.5, 65 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 41, 180, 66, 65, -56, -70, 66 * 1.5, 65 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 97, 186, 66, 65, -48, -65, 66 * 1.5, 65 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 41, 245, 66, 65, -44, -62, 66 * 1.5, 65 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 92, 248, 66, 65, -38, -55, 66 * 1.5, 65 * 1.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 40, 306, 66, 65, -38, -51.5, 66 * 1.5, 65 * 1.5);
                XXX.restore();
            }
        }
        //CUTLASS
        if (this.weaponEquipped == "cutlass")
        {
            this.stageEngine(5, 0.18, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK ANIMATION
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 640, 106, 57, 57, -43.5, -51, 57 * 1.65, 57 * 1.65);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 701, 110, 57, 57, -43, -49, 57 * 1.65, 57 * 1.65);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 769, 110, 57, 57, -46.5, -52, 57 * 1.65, 57 * 1.65);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 830, 107, 57, 57, -42, -56, 57 * 1.65, 57 * 1.65);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 892, 104, 57, 57, -45, -62, 57 * 1.65, 57 * 1.65);
                XXX.restore();
            }
        }
        //VARDANIAN CLUB
        if (this.weaponEquipped == "vardanianClub")
        {
            this.stageEngine(8, 0.19, true);

            //ATTACK ANIMATION
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 449, 456, 83, 54, -1/2 * 83 * 1.5 + 4, -1/2 * 54 * 1.5 - 0.25, 83 * 1.4, 54 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 521, 454, 83, 54, -1/2 * 83 * 1.5 + 17, -1/2 * 54 * 1.5 + 1, 83 * 1.4, 54 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 449, 456, 83, 54, -1/2 * 83 * 1.5 +4, -1/2 * 54 * 1.5 - 0.25, 83 * 1.4, 54 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 594, 457, 83, 54, -1/2 * 83 * 1.5 + 6.5, -1/2 * 54 * 1.5 + 0, 83 * 1.4, 54 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 675, 454, 83, 54, -1/2 * 83 * 1.5 + 5, -1/2 * 54 * 1.5 - 4, 83 * 1.4, 54 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 745, 447, 83, 54, -1/2 * 83 * 1.5 - 1, -1/2 * 54 * 1.5 - 8.25, 83 * 1.4, 54 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 838, 449, 83, 54, -1/2 * 83 * 1.5 + 2.75, -1/2 * 54 * 1.5 - 4, 83 * 1.4, 54 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 932, 448, 83, 54, -1/2 * 83 * 1.5 + 2.25, -1/2 * 54 * 1.5 - 1.45, 83 * 1.4, 54 * 1.4);
                XXX.restore();
            }
        }
        //LONG-SPIKED MORNING STAR
        if (this.weaponEquipped == "longSpikedMorningStar")
        {
            this.stageEngine(7, 0.125, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK ANIMATION
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(poly, 207, 143, 55, 58, -34, -39, 55 * 1.15, 58 * 1.15);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(poly, 260, 145, 55, 58, -30, -42, 55 * 1.15, 58 * 1.15);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(poly, 307, 147, 55, 58, -31, -40, 55 * 1.15, 58 * 1.15);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(poly, 356, 147, 55, 58, -33, -39, 55 * 1.15, 58 * 1.15);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(poly, 400, 142, 55, 58, -30, -47, 55 * 1.15, 58 * 1.15);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(poly, 452, 141, 55, 58, -31, -51, 55 * 1.15, 58 * 1.15);
                XXX.restore();
            }
        }
        //LONG SWORD
        if (this.weaponEquipped == "longsword")
        {
            this.stageEngine(8, 0.2, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 917, 566, 96, 86, -18, -31, 88, 86);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 918, 487, 96, 86, -12, -39, 88, 86);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 915, 421, 96, 86, -16, -57, 88, 86);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 909, 342, 96, 86, -22, -67, 88, 86);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 905, 239, 96, 86, -29, -77, 88, 86);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 898, 100, 96, 86, -35, -81, 88, 86);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 825, 1, 96, 86, -35, -78, 88, 86);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 788, 111, 96, 86, -48, -75, 88, 86);
                XXX.restore();
            }
        }
        //NIRINESE SABRE
        if (this.weaponEquipped == "nirineseSabre")
        {
            this.stageEngine(9, 0.3, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 373, 2, 90, 96, -55, -41, 90, 96);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 455, 2, 90, 96, -40, -44, 90, 96);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 529, 2, 90, 96, -44, -39, 90, 96);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 600, 2, 90, 96, -45, -44, 90, 96);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 696, 2, 90, 96, -32, -44, 90, 96);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 798, 2, 90, 96, -32, -48, 90, 96);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 896, 2, 90, 96, -36, -46, 90, 96);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 996, 2, 90, 96, -42, -71.5, 90, 96);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 1085, 2, 90, 96, -49, -84, 90, 96);
                XXX.restore();
            }
        }
        //RUHNKOR-GREN (ancient freydic greatsword)
        if (this.weaponEquipped == "blueBlade")
        {
            this.stageEngine(7, 0.21, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 3, 189, 100, 97, -16, -80, 120, 116.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 202, 616, 100, 97, -16, -28, 120, 116.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 204, 670, 100, 97, -16, -95, 120, 116.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 308, 669, 100, 97, -24, -97, 120, 116.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 403, 669, 100, 97, -33, -108, 120, 116.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 491, 671, 100, 97, -35, -109, 120, 116.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 558, 670, 100, 97, -62, -108, 120, 116.4);
                XXX.restore();
            }
        }
        //THENGAN SWORD AND SHIELD
        if (this.weaponEquipped == "thenganSwordAndShield")
        {
            if (this.attacking == true)
            {
                this.stageEngine(7, 0.21, true);
            }
            else if (this.blocking == true)
            {
                this.stageEngine(12, 0.21, true);
            }

            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3351, 187, 110, 85, -50, -72, 121, 93.5);
                XXX.restore();
            }

            if (this.attacking == true)
            {
                //this.stage = 5;
                //ATTACK
                if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3462, 184, 110, 85, -58, -71, 121, 93.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3296, 269, 110, 85, -64, -67, 121, 93.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3401, 271, 110, 85, -68, -75, 121, 93.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3495, 274, 110, 85, -75, -72, 121, 93.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 5)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3575, 274, 110, 85, -82, -73, 121, 93.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 6)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3666, 274, 110, 85, -69, -72, 121, 93.5);
                    XXX.restore();
                }
            }

            if (this.blocking == true)
            {
                //BLOCK
                if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3306, 353, 110, 85, -43, -65, 121, 93.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3429, 357, 110, 85, -41, -57, 121, 93.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3530, 356, 110, 85, -46, -63, 121, 93.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3626, 365, 110, 85, -49, -52, 121, 93.5);
                    XXX.restore();
                }
            }
        }
        //FREYDIC WAR AXE
        if (this.weaponEquipped == "freydicWarAxe")
        {
            this.stageEngine(6, 0.19, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 138, 118, 113, 104, -68.75, -55, 101.7, 93.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 301, 145, 113, 104, -55.75, -60, 101.7, 93.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 428, 163, 113, 104, -49, -56, 101.7, 93.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 133, 229, 113, 104, -48, -62.5, 101.7, 93.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 276, 252, 113, 104, -38, -63, 101.7, 93.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 393, 275, 113, 104, -40.5, -51.3, 101.7, 93.6);
                XXX.restore();
            }
        }
        //ALDREKII BARDICHE
        if (this.weaponEquipped == "aldrekiiBardiche")
        {
            this.stageEngine(5, 0.18, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 68, 381, 143, 141, -45, -65, 100.1, 98.7);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 234, 391, 143, 141, -42, -76, 100.1, 98.7);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 394, 414, 143, 141, -48, -79, 100.1, 98.7);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 565, 413, 143, 141, -52, -86, 100.1, 98.7);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 714, 396, 143, 141, -67, -89, 100.1, 98.7);
                XXX.restore();
            }
        }
        //FREYDIC SPEAR
        if (this.weaponEquipped == "freydicSpear")
        {
            this.stageEngine(5, 0.18, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 382, 104, 53, 76, -39, -65, 53, 76);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 434, 104, 53, 76, -37.5, -67, 53, 76);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 484, 104, 53, 76, -35.25, -68, 53, 76);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 535, 104, 53, 76, -28.5, -71, 53, 76);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 591, 104, 53, 76, -21.5, -73.75, 53, 76);
                XXX.restore();
            }
        }
        //ALDREKII WAR BLADE
        if (this.weaponEquipped == "aldrekiiBlade")
        {
            this.stageEngine(6, 0.2, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2206, 75, 60, 52, -13, -51, 72, 64.8);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2271, 74, 60, 52, -22.5, -54, 72, 64.8);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2334, 71, 60, 52, -35, -54, 72, 64.8);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2397, 69, 60, 52, -47, -56, 72, 64.8);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2458, 67, 60, 52, -54, -54.5, 72, 64.8);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2515, 66, 60, 52, -60.5, -51, 72, 64.8);
                XXX.restore();
            }
        }
        //ALDREKII BATTLE CLAWS
        if (this.weaponEquipped == "aldrekiiClaws")
        {
            this.stageEngine(12, 0.22, false);

            //ATTACK
            if (Math.floor(this.stage) <= 0) //A
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 11, 209, 59, 47,- 1/2 * 59 * 2 + 3.25, -1/2 * 47 * 2 - 1.5, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1) //B
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 70, 210, 59, 47,- 1/2 * 59 * 2 + 6.85, -1/2 * 47 * 2 + 0.75, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2) //C
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 124, 212, 59, 47,- 1/2 * 59 * 2 + 5.4, -1/2 * 47 * 2 + 0.9, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                if (this.attackManual == false)
                {
                    this.attackManual = true;
                    this.finalAttackStage = true;
                    this.attackCooldown = new Date().getTime();
                }

                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 185, 212, 59, 47,- 1/2 * 59 * 2 + 2.75, -1/2 * 47 * 2 - 0.5, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4) //C
            {
                this.attackManual = false;
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 124, 212, 59, 47,- 1/2 * 59 * 2 + 5.4, -1/2 * 47 * 2 + 0.9, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5) //B
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 70, 210, 59, 47,- 1/2 * 59 * 2 + 6.85, -1/2 * 47 * 2 + 0.75, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6) //A
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 11, 209, 59, 47,- 1/2 * 59 * 2 + 3.25, -1/2 * 47 * 2 - 1.5, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7) //B2
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 133, 253, 59, 47,- 1/2 * 59 * 2 + 1, -1/2 * 47 * 2 - 2.75, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 8) //C2
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 78, 253, 59, 47,- 1/2 * 59 * 2 + 1, -1/2 * 47 * 2 - 5, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 9) //D
            {
                if (this.attackManual == false)
                {
                    this.attackManual = true;
                    this.finalAttackStage = true;
                    this.attackCooldown = new Date().getTime();
                }
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 15, 251, 59, 47,- 1/2 * 59 * 2 + 1.65, -1/2 * 47 * 2 - 9, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 10) //C2
            {
                this.attackManual = false;
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 78, 253, 59, 47,- 1/2 * 59 * 2 + 1, -1/2 * 47 * 2 - 5, 59 * 2, 47 * 2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 11) //B2
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 133, 253, 59, 47,- 1/2 * 59 * 2 + 1, -1/2 * 47 * 2 - 2.75, 59 * 2, 47 * 2);
                XXX.restore();
            }
        }
        //PICKAXE
        if (this.weaponEquipped == "pickaxe")
        {
            this.stageEngine(6, 0.2, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2581, 78, 35, 37, -23, -50.5, 52.5, 55.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2626, 78, 35, 37, -17.5, -53, 52.5, 55.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2669, 78, 35, 37, -20, -54, 52.5, 55.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2716, 78, 35, 37, -23, -50, 52.5, 55.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2765, 78, 35, 37, -22, -47.5, 52.5, 55.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2800, 78, 35, 37, -42, -43, 52.5, 55.5);
                XXX.restore();
            }
        }
        //FREYDIC LONGSWORD
        if (this.weaponEquipped == "freydicSword")
        {
            this.stageEngine(7, 0.2, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2210, 1, 73, 63, -13, -60, 91.875, 78.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2290, 1, 73, 63, -17.5, -60, 91.875, 78.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2367, 1, 73, 63, -25, -61, 91.875, 78.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2438, 1, 73, 63, -31, -61.5, 91.875, 78.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2513, 1, 73, 63, -36, -64, 91.875, 78.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2577, 1, 73, 63, -44, -69, 91.875, 78.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2635, 1, 73, 63, -49.25, -69, 91.875, 78.75);
                XXX.restore();
            }
        }
        //FREYDIC GREATSWORD
        if (this.weaponEquipped == "freydicGreatSword")
        {
            this.stageEngine(8, 0.23, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2205, 203, 89, 88, -7, -80, 106.8, 105.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2305, 203, 89, 88, -6, -83.5, 106.8, 105.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2405, 203, 89, 88, -8, -85.5, 106.8, 105.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2505, 203, 89, 88, -13.5, -87, 106.8, 105.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2605, 203, 89, 88, -21, -90, 106.8, 105.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2678, 203, 89, 88, -49, -93, 106.8, 105.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2750, 203, 89, 88, -55, -92.5, 106.8, 105.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2830, 203, 89, 88, -65, -90, 106.8, 105.6);
                XXX.restore();
            }
        }
        //THE NORTHERN GEM
        if (this.weaponEquipped == "theNorthernGem") //booble
        {
            this.stageEngine(7, 0.22, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 239, 547, 114, 82, -1/2 * 114 * 1.35 - 4.3, -1/2 * 82 * 1.35 - 27, 114 * 1.35, 82 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 340, 540, 114, 82, -1/2 * 114 * 1.35 - 3, -1/2 * 82 * 1.35 - 34, 114 * 1.35, 82 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 441, 534, 114, 82, -1/2 * 114 * 1.35 + 2, -1/2 * 82 * 1.35 - 44.5, 114 * 1.35, 82 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 556, 533, 114, 82, -1/2 * 114 * 1.35 + 5, -1/2 * 82 * 1.35 - 49, 114 * 1.35, 82 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 244, 628, 114, 82, -1/2 * 114 * 1.35 + 7, -1/2 * 82 * 1.35 - 40, 114 * 1.35, 82 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 359, 630, 114, 82, -1/2 * 114 * 1.35 + 10.5, -1/2 * 82 * 1.35 - 32.5, 114 * 1.35, 82 * 1.35);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 474, 642, 114, 82, -1/2 * 114 * 1.35 + 11.5, -1/2 * 82 * 1.35 - 17.5, 114 * 1.35, 82 * 1.35);
                XXX.restore();
            }
        }
        //KELLISH CLAYMORE
        if (this.weaponEquipped == "kellishClaymore")
        {
            this.stageEngine(14, 0.24, true);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 491, 830, 135, 135, -50, -90, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 654, 827, 135, 135, -50, -93, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 870, 837, 135, 135, -46, -85, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1100, 838, 135, 135, -44, -80, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1386, 832, 135, 135, -14, -81, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1652, 828, 135, 135, -10, -79, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 513, 993, 135, 135, -15, -82, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 673, 990, 135, 135, -21, -83, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 892, 981, 135, 135, -17, -93, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 9)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1106, 971, 135, 135, -18, -113, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 10)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1333, 963, 135, 135, -59, -124, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 11)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1611, 961, 135, 135, -74, -124, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 12)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 503, 1162, 135, 135, -75, -117, 135, 135);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 13)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 680, 1158, 135, 135, -88, -112, 135, 135);
                XXX.restore();
            }

        }
        //SMALL WAR AXE
        if (this.weaponEquipped == "vardanianAxe")
        {
            this.stageEngine(5, 0.20, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 670, 161, 86, 53, -62.25, -52, 107.7, 66.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 789, 161, 86, 53, -53.75, -50, 107.7, 66.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 879, 161, 86, 53, -66.85, -52, 107.7, 66.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 988, 161, 86, 53, -43.75, -52, 107.7, 66.25);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 1075, 161, 86, 53, -47.25, -52, 107.7, 66.25);
                XXX.restore();
            }
        }
        //TWIN WAR AXES
        if (this.weaponEquipped == "vardanianAxeDual")
        {
            this.stageEngine(4, 0.21, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 669, 92, 110, 68, -55, -60, 110, 68);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 785, 92, 110, 68, -49, -60, 110, 68);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 884, 92, 110, 68, -49, -65, 110, 68);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 972, 92, 110, 68, -49, -68, 110, 68);
                XXX.restore();
            }
        }
        //VARDANIAN WAR CLEAVER
        if (this.weaponEquipped == "vardanianCleaver")
        {
            this.stageEngine(6, 0.21, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 667, 222, 73, 64, -51, -64, 91.25, 80);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 732, 222, 73, 64, -49, -64, 91.25, 80);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 801, 222, 73, 64, -51, -65, 91.25, 80);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 876, 222, 73, 64, -50, -64, 91.25, 80);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 955, 220, 73, 64, -46.5, -65, 91.25, 80);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 1034, 222, 73, 64, -44.6, -63, 91.25, 80);
                XXX.restore();
            }
        }
        //FLAIL
        if (this.weaponEquipped == "flail")
        {
            this.stageEngine(11, 0.18, false); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2194, 128, 66, 72, -42, -102, 99, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2253, 128, 66, 72, -47.5, -103, 99, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2313, 128, 66, 72, -41.75, -103, 99, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2373, 128, 66, 72, -46.5, -102, 99, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                if (this.attackManual == false)
                {
                    this.attackManual = true;
                    this.finalAttackStage = true;
                    this.attackCooldown = new Date().getTime();
                }
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2430, 128, 66, 72, -62, -104.5, 99, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                this.attackManual = false;
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2489, 128, 66, 72, -57.5, -105, 99, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2539, 128, 66, 72, -59.25, -103, 99, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2588, 128, 66, 72, -61.5, -104.5, 99, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2639, 128, 66, 72, -58, -104, 99, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 9)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2689, 128, 66, 72, -62, -104, 99, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 10)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2744, 128, 66, 72, -51.5, -105, 99, 108);
                XXX.restore();
            }
        }
        //KATANA
        if (this.weaponEquipped == "katana")
        {
            this.stageEngine(11, 0.5, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3909, 453, 57, 66, -41, -78, 89.1, 97.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3841, 449, 57, 66, -29, -85, 89.1, 97.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3772, 449, 57, 66, -33, -83.75, 89.1, 97.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3701, 449, 57, 66, -34, -82, 89.1, 97.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3645, 449, 57, 66, -32.5, -83, 89.1, 97.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3591, 449, 57, 66, -40, -81.5, 89.1, 97.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3541, 449, 57, 66, -48.25, -79, 89.1, 97.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3496, 449, 57, 66, -59, -75, 89.1, 97.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3453, 449, 57, 66, -65, -74, 89.1, 97.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 9)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3402, 449, 57, 66, -74, -72.5, 89.1, 97.2);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 10)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3333, 449, 57, 66, -89.5, -71, 89.1, 97.2);
                XXX.restore();
            }
        }
        //TIMBER AXE
        if (this.weaponEquipped == "timberAxe")
        {
            this.stageEngine(7, 0.25, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 334, 332, 54, 49, -60.25, -42, 54 * 1.4, 49 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 390, 328, 54, 49, -56.25, -47, 54 * 1.4, 49 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 453, 330, 54, 49, -44.25, -60, 54 * 1.4, 49 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 516, 330, 54, 49, -35, -60, 54 * 1.4, 49 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 576, 332, 54, 49, -30, -56, 54 * 1.4, 49 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 634, 332, 54, 49, -25, -49, 54 * 1.4, 49 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 680, 332, 54, 49, -16, -43, 54 * 1.4, 49 * 1.4);
                XXX.restore();
            }
        }
        //CURVED DAGGER
        if (this.weaponEquipped == "curvedDagger")
        {
            this.stageEngine(7, 0.35, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3552, 657, 50, 34, -30.25, -20, 50, 34);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3618, 652, 50, 34, -31, -24, 50, 34);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3683, 650, 50, 34, -30.25, -26, 50, 34);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3745, 650, 50, 34, -27.5, -25, 50, 34);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3811, 650, 50, 34, -22.5, -27, 50, 34);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3875, 650, 50, 34, -16, -28.5, 50, 34);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3937, 645, 50, 34, -17, -33.5, 50, 34);
                XXX.restore();
            }
        }
        //DUAL CURVED DAGGER
        if (this.weaponEquipped == "dualCurvedDaggers")
        {
            this.stageEngine(7, 0.30, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3585, 595, 73, 51, -41.25, -40, 73, 51);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3660, 595, 73, 51, -37.25, -40, 73, 51);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3729, 595, 73, 51, -35.25, -41, 73, 51);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3797, 592, 58, 51, -24.25, -47, 58, 51);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3847, 595, 58, 51, -23.5, -46, 58, 51);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3893, 595, 58, 51, -23, -49, 58, 51);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3942, 595, 58, 51, -21.5, -48.5, 58, 51);
                XXX.restore();
            }
        }
        //VARDANIAN HEAVY CLEAVER
        if (this.weaponEquipped == "vardanianHeavyCleaver")
        {
            this.stageEngine(12, 0.28, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 11, 107, 73, 90, -51, -77, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 124, 107, 73, 90, -57, -75, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 239, 102, 73, 90, -56, -81, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 356, 107, 73, 90, -56, -80, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 468, 107, 73, 90, -58.5, -74, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 569, 107, 73, 90, -57, -74, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 682, 85, 73, 90, -51, -88, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 784, 83, 73, 90, -42, -91, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 873, 85, 73, 90, -33, -88, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 9)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 971, 86, 73, 90, -24, -85, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 10)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1082, 92, 73, 90, -14, -78, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 11)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1204, 96, 73, 90, -9, -72, 73 * 1.1, 90 * 1.1);
                XXX.restore();
            }
        }
        //HYELING BATTLE CLEAVER
        if (this.weaponEquipped == "hyelingCleaver")
        {
            this.stageEngine(7, 0.22, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(furr, 131, 302, 63, 50, -31.5 * 1.6, -25 * 1.6, 63 * 1.6, 50 * 1.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(furr, 130, 370, 63, 50, -31.5 * 1.6, -25 * 1.6, 63 * 1.6, 50 * 1.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(furr, 132, 434, 63, 50, -31.5 * 1.6, -25 * 1.6, 63 * 1.6, 50 * 1.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(furr, 133, 492, 63, 50, -31.5 * 1.6, -25 * 1.6, 63 * 1.6, 50 * 1.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(furr, 131, 547, 63, 50, -31.5 * 1.6, -25 * 1.6, 63 * 1.6, 50 * 1.6);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(furr, 128, 599, 63, 50, -31.5 * 1.6 - 1, -25 * 1.6 -10, 63 * 1.6, 50 * 1.6);
                XXX.restore();
            }
        }
        //VARDANIAN BATTLE AXES
        if (this.weaponEquipped == "dualVardanianBattleAxe")
        {
            this.stageEngine(5, 0.19, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 420, 360, 70, 68, -1/2 * 70 * 1.4, -1/2 * 68 * 1.4 - 14, 70 * 1.4, 68 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 521, 347, 56, 103, -1/2 * 56 * 1.4 - 2, -1/2 * 103 * 1.4 - 10, 56 * 1.4, 103 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 624, 346, 59, 118, -1/2 * 59 * 1.4 + 0.75, -1/2 * 118 * 1.4 - 5, 59 * 1.4, 118 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 733, 355, 115, 90, -1/2 * 115 * 1.4 - 0.25, -1/2 * 90 * 1.4 - 7, 115 * 1.4, 90 * 1.4);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 882, 375, 134, 59, -1/2 * 134 * 1.4 - 0.35, -1/2 * 59 * 1.4 + 4, 134 * 1.4, 59 * 1.4);
                XXX.restore();
            }
        }
        //VARDANIAN BATTLE AXE
        if (this.weaponEquipped == "vardanianBattleAxe")
        {
            this.stageEngine(7, 0.235, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3342, 537, 61, 55, -13, -31.5, 79.3, 71.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3425, 533, 61, 55, -13, -46, 79.3, 71.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3506, 532, 61, 55, -15, -54, 79.3, 71.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3580, 526, 61, 55, -28, -62, 79.3, 71.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3647, 529, 61, 55, -39, -68, 79.3, 71.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3720, 532, 61, 55, -53, -59, 79.3, 71.5);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3784, 531, 61, 55, -69, -44, 79.3, 71.5);
                XXX.restore();
            }
            /*else if (Math.floor(this.stage) >= 7)
             {
             XXX.save();
             XXX.translate(this.myScreenX, this.myScreenY);
             XXX.rotate(this.rotation);
             XXX.drawImage(verse, 3865, 528, 61, 55, -70, -30, 79.3, 71.5);
             XXX.restore();
             }*/
        }
        //ICE CLAYMORE
        if (this.weaponEquipped == "iceBlade")
        {
            this.stageEngine(8, 0.22, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds
            //ATTACK

            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 340, 267, 104, 108, -90, -64, 104, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 507, 265, 104, 108, -89, -74, 104, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 669, 256, 104, 108, -78, -88, 104, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 819, 249, 104, 108, -62, -94, 104, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 934, 248, 104, 108, -52, -102, 104, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1055, 255, 104, 108, -41, -99, 104, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1186, 264, 104, 108, -30, -95, 104, 108);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1333, 274, 104, 108, -17, -82, 104, 108);
                XXX.restore();
            }
        }
        //NIRINESE SPEAR
        if (this.weaponEquipped == "nirineseSpear")
        {
            this.stageEngine(7, 0.235, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 41, 1505, 42, 87, -9, -66.5, 50.4, 98.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 82, 1507, 42, 87, -7, -68.5, 50.4, 98.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 120, 1506, 42, 87, -6, -72, 50.4, 98.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 159, 1501, 42, 87, -6, -76, 50.4, 98.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 193, 1501, 42, 87, -14.5, -77, 50.4, 98.1);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 224, 1501, 42, 87, -17.5, -79, 50.4, 98.1);
                XXX.restore();
            }
            /*else if (Math.floor(this.stage) <= 4)
             {
             XXX.save();
             XXX.translate(this.myScreenX, this.myScreenY);
             XXX.rotate(this.rotation);
             XXX.drawImage(verse, 193, 1501, 42, 87, -12, -75, 50.4, 98.1);
             XXX.restore();
             }
             else if (Math.floor(this.stage) >= 5)
             {
             XXX.save();
             XXX.translate(this.myScreenX, this.myScreenY);
             XXX.rotate(this.rotation);
             XXX.drawImage(verse, 224, 1501, 42, 87, -15, -77, 50.4, 98.1);
             XXX.restore();
             }*/
        }
        //WAR HAMMER
        if (this.weaponEquipped == "warHammer")
        {
            this.stageEngine(9, 0.22, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 32, 605, 93, 87, -21, -43, 93 / 1.3, 87 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 169, 605, 93, 87, -21, -43, 93 / 1.3, 87 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 304, 605, 93, 87, -22, -45, 93 / 1.3, 87 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 443, 605, 93, 87, -29, -46, 93 / 1.3, 87 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 589, 599, 93, 87, -32, -50, 93 / 1.3, 87 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 720, 590, 93, 87, -36, -53, 93 / 1.3, 87 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 836, 594, 93, 87, -46, -50, 93 / 1.3, 87 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 958, 593, 93, 87, -49, -47.5, 93 / 1.3, 87 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1083, 591, 93, 87, -51.5, -45, 93 / 1.3, 87 / 1.3);
                XXX.restore();
            }
        }
        //HAMMER
        if (this.weaponEquipped == "hammer")
        {
            this.stageEngine(8, 0.24, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 399, 703, 70, 70, -19, -36, 70 / 1.3, 70 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 518, 704, 70, 70, -22, -39, 70 / 1.3, 70 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 615, 708, 70, 70, -24, -39, 70 / 1.3, 70 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 732, 708, 70, 70, -25, -41, 70 / 1.3, 70 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 814, 701, 70, 70, -29, -45, 70 / 1.3, 70 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 918, 704, 70, 70, -41, -44, 70 / 1.3, 70 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1002, 702, 70, 70, -43, -36, 70 / 1.3, 70 / 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1083, 703, 70, 70, -47, -34, 70 / 1.3, 70 / 1.3);
                XXX.restore();
            }
        }
        //KELLISH SAW CLUB
        if (this.weaponEquipped == "kellishSawClub")
        {
            this.stageEngine(7, 0.21, true);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1254, 663, 85, 85, -64, -52, 85, 85);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1346, 661, 85, 85, -58, -54, 85, 85);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1429, 662, 85, 85, -47.5, -54, 85, 85);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1506, 661, 85, 85, -41, -57, 85, 85);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1597, 662, 85, 85, -26, -60, 85, 85);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1663, 664, 85, 85, -33, -64, 85, 85);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 1732, 663, 85, 85, -34, -64, 85, 85);
                XXX.restore();
            }
        }
        //RASPER
        if (this.weaponEquipped == "rasper")
        {
            this.stageEngine(5, 0.20, true);

            //ATTACK
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 683, 43, 55, 51, -47, -49, 55 * 1.3, 51 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 755, 37, 55, 51, -39, -55, 55 * 1.3, 51 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 834, 38, 55, 51, -36, -54, 55 * 1.3, 51 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 903, 35, 55, 51, -30, -54.5, 55 * 1.3, 51 * 1.3);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 928, 346, 55, 51, -27, -54, 55 * 1.3, 51 * 1.3);
                XXX.restore();
            }
        }
        //LONG BOW
        if (this.weaponEquipped == "longbow")
        {
            //for ranged this sets the stage back so that it can start again.
            if (this.ammoLoaded == false && new Date().getTime() - this.reloadTime > allWeapons[5].rate * 100 && this.releaseStage == true)
            {
                this.stage = 0;
                this.releaseStage = false;
            }

            //If the stage is less than full drawback then draw back when attacking is triggered.
            if (this.stage < 6)
            {
                this.stageEngine(8, 0.15, false);
            }

            //ATTACK ANIMATION
            //This cycles through the stages of the attack
            if (Math.floor(this.stage) <= 0 && this.releaseStage == false)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 421, 589, 40, 43, -17, -41, 50, 53.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1 && this.releaseStage == false)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 487, 589, 40, 43, -11, -42, 50, 53.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2 && this.releaseStage == false)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 536, 589, 40, 43, -16, -39, 50, 53.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3 && this.releaseStage == false)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 576, 588, 40, 43, -19, -41, 50, 53.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4 && this.releaseStage == false)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 608, 588, 40, 43, -21, -41, 50, 53.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5 && this.releaseStage == false)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 645, 589, 40, 43, -16, -40, 50, 53.75);
                XXX.restore();
            }
            else if (Math.floor(this.stage) >= 6 && this.releaseStage == false)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 681, 582, 40, 43, -22, -38.5, 50, 53.75);
                XXX.restore();
                this.ammoLoaded = true;
            }
            //This is an extra stage for the release, it is specially triggered by the release of the space bar.
            if (this.releaseStage == true)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 717, 583, 40, 43, -17, -38.5, 50, 53.75);
                XXX.restore();
            }
        }
        //CROSSBOW
        if (this.weaponEquipped == "crossbow")
        {
            if (this.ammoLoaded == false)
            {
                this.stageEngine(24, 0.10, true);
            }
            else
            {
                if (machineGunCrossbow)
                {
                    this.stage = 23;
                }
                else
                {
                    if (this.projectileReleased == false)
                    {
                        this.stage = "loadedAndReady";
                    }
                    else
                    {
                        this.stage = 0;
                    }
                }
            }

            //Loading ANIMATION
            //This cycles through the stages of the load
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3911, 695, 50, 40, -27, -43, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2788, 695, 50, 40, -25, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2843, 695, 50, 40, -26, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 3)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2899, 695, 50, 40, -28, -39.5, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 4)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2950, 695, 50, 40, -26, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 5)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2994, 695, 50, 40, -28, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 6)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3044, 695, 50, 40, -25.5, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 7)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3089, 695, 50, 40, -27, -39.5, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 8)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3135, 695, 50, 40, -26, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 9)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3183, 695, 50, 40, -27.85, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 10)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3227, 695, 50, 40, -26.85, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 11)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3270, 695, 50, 40, -28, -39.5, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 12)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3313, 695, 50, 40, -26.35, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 13)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3358, 695, 50, 40, -26.85, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 14)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3403, 695, 50, 40, -26.85, -42, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 15)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3452, 695, 50, 40, -25.85, -41, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 16)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3498, 695, 50, 40, -25, -40, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 17)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3552, 695, 50, 40, -23.6, -39, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 18)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3608, 698, 50, 40, -22.5, -36, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 19)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3665, 698, 50, 40, -23.5, -37.25, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 20)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3717, 698, 50, 40, -26, -38.25, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 21)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3770, 698, 50, 40, -26, -38.25, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 22)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3817, 698, 50, 40, -27, -38.25, 52.5, 42);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 23)
            {
                if (machineGunCrossbow)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3962, 695, 32, 39, -21, -43.25, 33.6, 40.95);
                    XXX.restore();
                    this.attacking = false;
                    this.ammoLoaded = true;
                }
                else
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3865, 698, 50, 40, -27, -38.25, 52.5, 42);
                    XXX.restore();
                    this.attacking = false;
                    this.ammoLoaded = true;
                }
            }
            else if (this.stage == "loadedAndReady")
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3865, 698, 50, 40, -27, -38.25, 52.5, 42);
                XXX.restore();
            }
        }
        //MUSKET
        if (this.weaponEquipped == "musket")
        {
            if (this.ammoLoaded == false)
            {
                if (new Date().getTime() - this.reloadTime > allWeapons[42].rate * 100)
                {
                    this.stageEngine(3, 0.10, true);
                }
            }
            else
            {
                if (this.projectileReleased == false)
                {
                    if (this.stage != "loadedAndReady")
                    {
                        musketRld.play();
                    }
                    this.stage = "loadedAndReady";
                }
                else
                {
                    this.stage = 0;
                }
            }

            //Loading ANIMATION
            //This cycles through the stages of the load
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 517, 100, 25, 44, -14, -60, 25 * 1.8, 44 * 1.8);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 552, 100, 25, 44, -14, -61, 25 * 1.8, 44 * 1.8);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 587, 99, 25, 44, -11, -60, 25 * 1.8, 44 * 1.8);
                XXX.restore();
                this.attacking = false;
                this.ammoLoaded = true;


            }
            else if (this.stage == "loadedAndReady")
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 587, 99, 25, 44, -11, -60, 25 * 1.8, 44 * 1.8);
                XXX.restore();
            }
        }
        //BLUNDERBUSS
        if (this.weaponEquipped == "blunderbuss")
        {
            if (this.ammoLoaded == false)
            {
                if (new Date().getTime() - this.reloadTime > allWeapons[42].rate * 100)
                {
                    this.stageEngine(3, 0.10, true);
                }
            }
            else
            {
                if (this.projectileReleased == false)
                {
                    if (this.stage != "loadedAndReady")
                    {
                        musketRld.play();
                    }
                    this.stage = "loadedAndReady";
                }
                else
                {
                    this.stage = 0;
                }
            }

            //Loading ANIMATION
            //This cycles through the stages of the load
            if (Math.floor(this.stage) <= 0)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 518, 153, 25, 44, -9, -47, 25 * 1.8, 44 * 1.8);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 1)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 552, 153, 25, 44, -9, -47, 25 * 1.8, 44 * 1.8);
                XXX.restore();
            }
            else if (Math.floor(this.stage) <= 2)
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 587, 153, 25, 44, -9, -47, 25 * 1.8, 44 * 1.8);
                XXX.restore();
                this.attacking = false;
                this.ammoLoaded = true;


            }
            else if (this.stage == "loadedAndReady")
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 587, 153, 25, 44, -9, -47, 25 * 1.8, 44 * 1.8);
                XXX.restore();
            }
        }
    };

    this.weaponSetup = function ()
    {
        //console.log("WeaponEquipped: " + this.weaponEquipped + "  PrimarySpell: " + this.spell.name);

        //if the weapon is ranged they tell the projectile class where to position the arrow/bolt here.
        if (this.weaponEquipped == "longbow")
        {
            this.weapon = allWeapons[5];

            //This adjusts the starting position of the arrow/bolt.
            this.projectileX = -3;
            this.projectileY = -3;
        }
        else if (this.weaponEquipped == "crossbow")
        {
            this.weapon = allWeapons[22];

            //This adjusts the starting position of the arrow/bolt.
            if (machineGunCrossbow)
            {
                this.projectileX = 5.35;
                this.projectileY = 5.35;
            }
            else
            {
                this.projectileX = 4.85;
                this.projectileY = 4.85;
            }
        }
        else if (this.weaponEquipped == "musket")
        {
            this.weapon = allWeapons[42];

            //This adjusts the starting position of the bullet.
            this.projectileX = -9;
            this.projectileY = -7;
        }
        else if (this.weaponEquipped == "blunderbuss")
        {
            this.weapon = allWeapons[44];

            //This adjusts the starting position of the bullet.
            this.projectileX = -20;
            this.projectileY = -20;
        }

        //Access Stats for each weapon first. //1/2 is directly forward facing.
        if (this.weaponEquipped == "mace")
        {
            this.weapon = allWeapons[0];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.4 / 5 * Math.PI) * (this.mySize + 24);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.4 / 5 * Math.PI) * (this.mySize + 24);
        }
        else if (this.weaponEquipped == "longsword")
        {
            this.weapon = allWeapons[1];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 1 / 4 * Math.PI) * (this.mySize + 25);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1 / 4 * Math.PI) * (this.mySize + 25);
        }
        else if (this.weaponEquipped == "none" && this.spell == "none")
        {
            this.weapon = allWeapons[2];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 1 / 2 * Math.PI) * (this.mySize + 10);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1 / 2 * Math.PI) * (this.mySize + 10);
        }
        else if (this.weaponEquipped == "freydicWarAxe")
        {
            this.weapon = allWeapons[3];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 1 / 3 * Math.PI) * (this.mySize + 23);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1 / 3 * Math.PI) * (this.mySize + 23);
        }
        else if (this.weaponEquipped == "aldrekiiBardiche")
        {
            this.weapon = allWeapons[4];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 16 / 30 * Math.PI) * (this.mySize + 55);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 16 / 30 * Math.PI) * (this.mySize + 55);
        }
        else if (this.weaponEquipped == "blueBlade")
        {
            this.weapon = allWeapons[7];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 1 / 4 * Math.PI) * (this.mySize + 45);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1 / 4 * Math.PI) * (this.mySize + 45);
        }
        else if (this.weaponEquipped == "nirineseSabre")
        {
            this.weapon = allWeapons[8];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 1.9 / 5 * Math.PI) * (this.mySize + 28);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1.9 / 5 * Math.PI) * (this.mySize + 28);
        }
        else if (this.weaponEquipped == "freydicSpear")
        {
            this.weapon = allWeapons[9];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.3 / 5 * Math.PI) * (this.mySize + 38);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.3 / 5 * Math.PI) * (this.mySize + 38);
        }
        else if (this.weaponEquipped == "vardanianAxeDual")
        {
            this.weapon = allWeapons[10];
            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 1 / 2 * Math.PI) * (this.mySize + 17);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1 / 2 * Math.PI) * (this.mySize + 17);
        }
        else if (this.weaponEquipped == "vardanianAxe")
        {
            this.weapon = allWeapons[11];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 3 / 5 * Math.PI) * (this.mySize + 16);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3 / 5 * Math.PI) * (this.mySize + 16);
        }
        else if (this.weaponEquipped == "flail")
        {
            this.weapon = allWeapons[12];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.4 / 5 * Math.PI) * (this.mySize + 40);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.4 / 5 * Math.PI) * (this.mySize + 40);
        }
        else if (this.weaponEquipped == "aldrekiiBlade")
        {
            this.weapon = allWeapons[13];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 3 / 5 * Math.PI) * (this.mySize + 18);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3 / 5 * Math.PI) * (this.mySize + 18);
        }
        else if (this.weaponEquipped == "pickaxe")
        {
            this.weapon = allWeapons[14];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 3.2 / 5 * Math.PI) * (this.mySize + 18);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3.2 / 5 * Math.PI) * (this.mySize + 18);
        }
        else if (this.weaponEquipped == "freydicSword")
        {
            this.weapon = allWeapons[15];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 1.45 / 5 * Math.PI) * (this.mySize + 29);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1.45 / 5 * Math.PI) * (this.mySize + 29);
        }
        else if (this.weaponEquipped == "freydicGreatSword")
        {
            this.weapon = allWeapons[17];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 1.65 / 5 * Math.PI) * (this.mySize + 38); //was -1.45 / 5 //was 33
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1.65 / 5 * Math.PI) * (this.mySize + 38); //was -1.45 / 5 //was 33
        }
        else if (this.weaponEquipped == "thenganSwordAndShield")
        {
            this.weapon = allWeapons[18];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.3 / 5 * Math.PI) * (this.mySize + 34);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.3 / 5 * Math.PI) * (this.mySize + 34);
        }
        else if (this.weaponEquipped == "katana")
        {
            this.weapon = allWeapons[19];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 3.5/5 * Math.PI) * (this.mySize + 26);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3.5/5 * Math.PI) * (this.mySize + 26);
        }
        else if (this.weaponEquipped == "vardanianCleaver")
        {
            this.weapon = allWeapons[20];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.4/5 * Math.PI) * (this.mySize + 26);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.4/5 * Math.PI) * (this.mySize + 26);
        }
        else if (this.weaponEquipped == "vardanianBattleAxe")
        {
            this.weapon = allWeapons[21];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.5/5 * Math.PI) * (this.mySize + 16);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.5/5 * Math.PI) * (this.mySize + 16);
        }
        else if (this.weaponEquipped == "nirineseSpear")
        {
            this.weapon = allWeapons[24];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.1/5 * Math.PI) * (this.mySize + 56.5);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.1/5 * Math.PI) * (this.mySize + 56.5);
        }
        else if (this.weaponEquipped == "curvedDagger")
        {
            this.weapon = allWeapons[25];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 3.3/5 * Math.PI) * (this.mySize + 2);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3.3/5 * Math.PI) * (this.mySize + 2);
        }
        else if (this.weaponEquipped == "dualCurvedDaggers")
        {
            this.weapon = allWeapons[26];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.4/5 * Math.PI) * (this.mySize + 7);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.4/5 * Math.PI) * (this.mySize + 7);
        }
        else if (this.weaponEquipped == "timberAxe")
        {
            this.weapon = allWeapons[27];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.4/5 * Math.PI) * (this.mySize + 12);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.4/5 * Math.PI) * (this.mySize + 12);
        }
        else if (this.weaponEquipped == "vardanianHeavyCleaver")
        {
            this.weapon = allWeapons[28];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.05/5 * Math.PI) * (this.mySize + 38);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.05/5 * Math.PI) * (this.mySize + 38);
        }
        else if (this.weaponEquipped == "iceBlade")
        {
            this.weapon = allWeapons[29];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.8/5 * Math.PI) * (this.mySize + 41);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.8/5 * Math.PI) * (this.mySize + 41);
        }
        else if (this.weaponEquipped == "warHammer")
        {
            this.weapon = allWeapons[30];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 3/5 * Math.PI) * (this.mySize + 10);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3/5 * Math.PI) * (this.mySize + 10);
        }
        else if (this.weaponEquipped == "kellishClaymore")
        {
            this.weapon = allWeapons[31];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.5/5 * Math.PI) * (this.mySize + 66);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.5/5 * Math.PI) * (this.mySize + 66);
        }
        else if (this.weaponEquipped == "hammer")
        {
            this.weapon = allWeapons[32];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 3.4/5 * Math.PI) * (this.mySize + 10);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3.4/5 * Math.PI) * (this.mySize + 10);
        }
        else if (this.weaponEquipped == "kellishSawClub")
        {
            this.weapon = allWeapons[33];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 3/5 * Math.PI) * (this.mySize + 24);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3/5 * Math.PI) * (this.mySize + 24);
        }
        else if (this.weaponEquipped == "rasper")
        {
            this.weapon = allWeapons[34];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.1/5 * Math.PI) * (this.mySize + 22);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.1/5 * Math.PI) * (this.mySize + 22);
        }
        else if (this.weaponEquipped == "longSpikedMorningStar")
        {
            this.weapon = allWeapons[40];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 1/2 * Math.PI) * (this.mySize + 31);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1/2 * Math.PI) * (this.mySize + 31);
        }
        else if (this.weaponEquipped == "cutlass")
        {
            this.weapon = allWeapons[41];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2/5 * Math.PI) * (this.mySize + 25);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2/5 * Math.PI) * (this.mySize + 25);
        }
        else if (this.weaponEquipped == "smashStick")
        {
            this.weapon = allWeapons[45];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.1/5 * Math.PI) * (this.mySize + 24);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.1/5 * Math.PI) * (this.mySize + 24);
        }
        else if (this.weaponEquipped == "burningSmashStick")
        {
            this.weapon = allWeapons[46];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.1/5 * Math.PI) * (this.mySize + 24);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.1/5 * Math.PI) * (this.mySize + 24);
        }
        else if (this.weaponEquipped == "lightningCorseque")
        {
            this.weapon = allWeapons[47];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.25/5 * Math.PI) * (this.mySize + 70);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.25/5 * Math.PI) * (this.mySize + 70);
        }
        else if (this.weaponEquipped == "kellishSword")
        {
            this.weapon = allWeapons[48];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.75/5 * Math.PI) * (this.mySize + 35);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.75/5 * Math.PI) * (this.mySize + 35);
        }
        else if (this.weaponEquipped == "dualVardanianBattleAxe")
        {
            this.weapon = allWeapons[49];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.5/5 * Math.PI) * (this.mySize + 25);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.5/5 * Math.PI) * (this.mySize + 25);
        }
        else if (this.weaponEquipped == "vardanianClub")
        {
            this.weapon = allWeapons[50];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 3.15/5 * Math.PI) * (this.mySize + 15);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3.15/5 * Math.PI) * (this.mySize + 15);
        }
        else if (this.weaponEquipped == "theNorthernGem")
        {
            this.weapon = allWeapons[51];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.1/5 * Math.PI) * (this.mySize + 50);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.1/5 * Math.PI) * (this.mySize + 50);
        }
        else if (this.weaponEquipped == "aldrekiiClaws")
        {
            this.weapon = allWeapons[53];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.5/5 * Math.PI) * (this.mySize + 13);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.5/5 * Math.PI) * (this.mySize + 13);
        }
        else if (this.weaponEquipped == "hyelingCleaver")
        {
            this.weapon = allWeapons[54];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.25/5 * Math.PI) * (this.mySize + 20);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.25/5 * Math.PI) * (this.mySize + 20);
        }
        else if (this.weaponEquipped == "cero")
        {
            this.weapon = allWeapons[55];

            //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
            this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.3/5 * Math.PI) * (this.mySize + 23);
            this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.3/5 * Math.PI) * (this.mySize + 23);
        }
    };

    //BLOCKING FUNCTION
    this.defend = function()
    {
        if (this.blocking == true)
        {
            this.shielding = this.weapon.blocking;
        }
        else
        {
            this.shielding = 0;
        }
    };

    //OFFICIAL ATTACKING FUNCTION
    this.attack = function()
    {
        //Access Stats for each weapon first with weaponSetup function.

        //Carry Out melee attack.
        if (this.attacking == true && this.weaponIsRanged == false && this.weaponIsMagic == false)
        {
            //show attack bubble if visual attack range mode is on for development
            if (showPlayerAttackBubble == true)
            {
                XXX.beginPath();
                XXX.fillStyle = "rgba(0, 0, 300, 0.25)";
                XXX.arc(this.myScreenX - (this.bubbleOfDamageX - X), this.myScreenY - (this.bubbleOfDamageY - Y), (this.weapon.range * 6), 0, 2 * Math.PI);
                XXX.fill();
            }
            if ((new Date().getTime() - this.attackPause) > 1000 - (20 * this.weapon.rate))
            {
                this.attackPause = new Date().getTime();

                for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                {
                    var dfu = Math.sqrt((ArtificialIntelligenceAccess[i].X - this.bubbleOfDamageX) * (ArtificialIntelligenceAccess[i].X - this.bubbleOfDamageX) + (ArtificialIntelligenceAccess[i].Y - this.bubbleOfDamageY) * (ArtificialIntelligenceAccess[i].Y - this.bubbleOfDamageY)) - ArtificialIntelligenceAccess[i].sizeRadius; //This is the distance from the center of the players attack/damaging bubble to the AI Unit.

                    if (dfu <= this.weapon.range * 7 && this.finalAttackStage == true)
                    {
                        if (this.powerAttack == false)
                        {
                            ArtificialIntelligenceAccess[i].health -= Math.max(0, (this.weapon.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.weapon.negateArmour))) + Math.max(0, this.weapon.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance);
                            console.log("You Dealt " + (Math.max(0, this.weapon.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.weapon.negateArmour)) + Math.max(0, this.weapon.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance)) + " damage!");
                        }
                        else
                        {
                            ArtificialIntelligenceAccess[i].health -= Math.max(0, ((this.weapon.damage * 1.5) - Math.max(0, ArtificialIntelligenceAccess[i].armour - (this.weapon.negateArmour * 1.5)))) + Math.max(0, this.weapon.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance);
                            console.log("Power Attack: " + Math.max(0, (this.weapon.damage * 1.5) - Math.max(0, ArtificialIntelligenceAccess[i].armour - (this.weapon.negateArmour * 1.5))) + Math.max(0, this.weapon.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance) + " Damage!");
                        }

                        //console.log(this.weapon.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance);
                        ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                        ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();

                        //effects

                        if (this.weapon.ability == "freeze")
                        {
                            ArtificialIntelligenceAccess[i].frozenTime = new Date().getTime();
                        }
                        else if (this.weapon.ability == "burning")
                        {
                            ArtificialIntelligenceAccess[i].burningTime = new Date().getTime();
                        }
                        else if (this.weapon.ability == "leeching")
                        {
                            var dmgDealt = Math.ceil(Math.max(0, this.weapon.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.weapon.negateArmour)) + Math.max(0, this.weapon.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance));
                            if (dmgDealt > 0)
                            {
                                var counterOrbCount = 0;
                                if (ArtificialIntelligenceAccess[i].health < 0)
                                {
                                    counterOrbCount = Math.round(- ArtificialIntelligenceAccess[i].health);
                                }
                                var orbsAllowed = Math.max(0, dmgDealt - ArtificialIntelligenceAccess[i].magicalResistance - counterOrbCount);
                                for (var j = 0; j < orbsAllowed; j++)
                                {
                                    magicList.push(new Magic({ID: "drainOrb"}, false, 0, ArtificialIntelligenceAccess[i]));
                                }
                            }
                        }
                        else if (this.weapon.ability == "freezingStun")
                        {
                            ArtificialIntelligenceAccess[i].frozenTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].stunTimer = 5;
                            ArtificialIntelligenceAccess[i].stunIV = true;
                        }
                        else if (this.weapon.ability == "shock")
                        {
                            ArtificialIntelligenceAccess[i].shockedTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].shockedTime2 = new Date().getTime();
                        }
                        else if (this.weapon.ability == "stunI")
                        {
                            ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].stunTimer = 5;
                            ArtificialIntelligenceAccess[i].stunI = true;
                        }
                        else if (this.weapon.ability == "stunII")
                        {
                            ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].stunTimer = 5;
                            ArtificialIntelligenceAccess[i].stunII = true;
                        }
                        else if (this.weapon.ability == "stunIII")
                        {
                            ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].stunTimer = 5;
                            ArtificialIntelligenceAccess[i].stunIII = true;
                        }
                        else if (this.weapon.ability == "stunIV")
                        {
                            ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].stunTimer = 5;
                            ArtificialIntelligenceAccess[i].stunIV = true;
                        }
                        else if (this.weapon.ability == "stunV")
                        {
                            ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].stunTimer = 5;
                            ArtificialIntelligenceAccess[i].stunV = true;
                        }
                    }
                }

                this.finalAttackStage = false;
            }
        }
        else if (this.weaponIsRanged == true)
        {
            //On release the projectile is fired.
            if (this.projectileReleased == false && spaceKey == false && this.ammoLoaded == true && this.weapon.subUtility == "bow" || this.weapon.subUtility == "crossbow" && this.projectileReleased == true && this.ammoLoaded == true || this.weapon.subUtility == "gun" && this.projectileReleased == true && this.ammoLoaded == true)
            {
                this.attacking = false;
                this.reloadTime = new Date().getTime();
                this.ammoLoaded = false;
                if (this.weapon.subUtility == "bow")
                {
                    this.projectileReleased = true;
                    this.releaseStage = true;
                }
                else if (this.weapon.subUtility == "crossbow")
                {
                    this.projectileReleased = false;
                }
                else if (this.weapon.subUtility == "gun")
                {
                    this.projectileReleased = false;
                }

                for (var i = 0; i < Inventory.length; i++)
                {
                    if (Inventory[i][0].utility == "ammunition" && Inventory[i][0].equipped == true)
                    {
                        //this sets the currently equipped ammo to a variable called loaded.
                        var loaded = Inventory[i][0];
                    }
                    else if (Inventory[i][0].utility == "ranged" && Inventory[i][0].equipped == true)
                    {
                        //This sets the currently equipped ranged weapon to a variable called projector.
                        var projector = Inventory[i][0];
                    }
                }
                //This puts the projectile into action!
                if (machineGunCrossbow)
                {
                    crossbowGun.playbackRate = 2;
                    crossbowGun.volume = 0.25;
                    crossbowGun.currentTime = 0;
                    crossbowGun.play();
                    playerProjectiles.push(new Projectile("cheatMachineGunBullet", X + Math.cos(this.rotation) * (this.projectileX + this.projXAd), Y + Math.sin(this.rotation) * (this.projectileY + this.projYAd), this.rotation, 18, 5000, 250, playerProjectiles));
                }
                else
                {
                    if (player.weaponEquipped == "musket")
                    {
                        musket.currentTime = 0;
                        musket.play();
                    }

                    if (player.weaponEquipped == "blunderbuss")
                    {
                        blunder.currentTime = 0;
                        blunder.play();
                        for (var k = 0; k < 5; k++)
                        {
                            playerProjectiles.push(new Projectile(loaded.type, X + Math.cos(this.rotation) * (this.projectileX + this.projXAd), Y + Math.sin(this.rotation) * (this.projectileY + this.projYAd), this.rotation + (Math.random() * ((Math.PI / 360) * 50)) - ((Math.PI / 360) * 25), projector.speed, projector.range, projector.negateArmour, playerProjectiles));
                        }
                    }
                    else
                    {
                        playerProjectiles.push(new Projectile(loaded.type, X + Math.cos(this.rotation) * (this.projectileX + this.projXAd), Y + Math.sin(this.rotation) * (this.projectileY + this.projYAd), this.rotation, projector.speed, projector.range, projector.negateArmour, playerProjectiles));
                    }
                }

                for (var i = 0; i < Inventory.length; i++)
                {
                    if (Inventory[i][1] < 1 && Inventory[i][0].utility == "ammunition" && Inventory[i][0].equipped == true)
                    {
                        this.isAmmoEquipped = false;
                        Inventory.splice(i, 1);
                        break;
                    }
                }
                if (this.weapon.subUtility == "gun")
                {
                    for (var i = 0; i < Inventory.length; i++)
                    {
                        if (Inventory[i][1] < 1 && Inventory[i][0].type == "blackPowder")
                        {
                            Inventory.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
        else
        {

        }
    };

    //This makes the character always face the mouse pointer.
    this.pointAtMouse = function()
    {
        if (!this.jumpingBack)
        {
            this.rotation = Math.atan2(mouseY - this.myScreenY, mouseX - this.myScreenX) + Math.PI / 2;
        }
        //console.log(this.rotation);
    };

    //OBSTRUCTION CHECKER (this checks to see if something is in the player's way).
    this.isObstructed = function(x, y)
    {
        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
        {
            if (ArtificialIntelligenceAccess[i])
            {
                var focusUnit = ArtificialIntelligenceAccess[i]; //This is the current unit focused on other than this unit.
                var x1 = focusUnit.X; //the focus unit's X position.
                var y1 = focusUnit.Y; //the focus unit's Y position.
                var d = Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1)); //This is the distance between this unit and the focus unit.
                if (d < this.mySize + focusUnit.sizeRadius && focusUnit.alive == true && focusUnit.flying != true) // if the total distance between this unit and the focus unit is less than the size of the two radiuses then it returns true to the movement function which calls it.
                {
                    return true; //d == this.sizeRadius + focusUnit.sizeRadius :: this is the point at which the two units would be exactly touching eachother with no overlap.
                }
            }
        }
        for (var i = 0; i < scenicList.length; i++)
        {
            if (scenicList[i].solid == true)
            {
                var focusObject = scenicList[i]; //This is the current unit focused on other than this unit.
                var x1 = focusObject.X; //the focus unit's X position.
                var y1 = focusObject.Y; //the focus unit's Y position.
                var d = Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1)); //This is the distance between this unit and the focus unit.
                if (d < this.mySize + focusObject.radius) // if the total distance between this unit and the focus unit is less than the size of the two radiuses then it returns true to the movement function which calls it.
                {
                    return true; //d == this.sizeRadius + focusUnit.sizeRadius :: this is the point at which the two units would be exactly touching eachother with no overlap.
                }
            }
        }
        //TODO add a similar routine for the structure list when it is added...

        //When an AI Unit is speaking you are forced to be polite and not move while you listen to them.
        if (this.speechMovementInhibitor == true && playersTurnToMove == false)
        {
            return true;
        }
    };

    // CHARACTER MOVEMENT
    this.motion = function ()
    {
        //BACKWALKING
        if (sKey == true && shiftKey != true && wKey != true && this.getDexterity() >= 5 && !this.jumpingBack && this.mounted == false)
        {
            this.movingType = 4;

            // If the place where the player would move next under the same instruction is blocked then the player will not move.
            if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
            {
                var nextX = X + (Math.cos(this.rotation - 1 / 2 * Math.PI) * (0.5 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 48 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                var nextY = Y + (Math.sin(this.rotation - 1 / 2 * Math.PI) * (0.5 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 48 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                if (!this.isObstructed(nextX, nextY))
                {
                    X += (Math.cos(this.rotation - 1 / 2 * Math.PI) * (0.5 / this.freeze) + Math.cos(this.rotation - 1 / 2 * Math.PI) * (1 / 48 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    Y += (Math.sin(this.rotation - 1 / 2 * Math.PI) * (0.5 / this.freeze) + Math.sin(this.rotation - 1 / 2 * Math.PI) * (1 / 48 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                }
            }
            else
            {
                //TODO eventually make magical walls and game borders that wallPhase does not let the player walk through.
                X += (Math.cos(this.rotation - 1 / 2 * Math.PI) * (0.5 / this.freeze) + Math.cos(this.rotation - 1 / 2 * Math.PI) * (1 / 48 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                Y += (Math.sin(this.rotation - 1 / 2 * Math.PI) * (0.5 / this.freeze) + Math.sin(this.rotation - 1 / 2 * Math.PI) * (1 / 48 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
            }
        }
        //STANDING
        if (wKey == false && altKey == false && sKey == false && !this.jumpingBack && this.mounted == false)
        {
            this.movingType = 0;
        }
        //WALKING
        if (wKey == true && shiftKey != true && !this.jumpingBack && this.mounted == false)
        {
            this.movingType = 1;

            // If the place where the player would move next under the same instruction is blocked then the player will not move.
            if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
            {
                var nextX = X + (Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                var nextY = Y + (Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                if (!this.isObstructed(nextX, nextY))
                {
                    X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                }
            }
            else
            {
                //TODO eventually make magical walls and game borders that wallPhase does not let the player walk through.
                X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * 1 + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
                Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * 1 + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
            }
        }
        //RUNNING
        // if you run out of energy while running you regress into a walk.
        if (this.energy <= 0 && wKey == true && shiftKey == true && !this.jumpingBack && this.mounted == false)
        {
            this.movingType = 1;

            // If the place where the player would move next under the same instruction is blocked then the player will not move.
            if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
            {
                var nextX = X + (Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                var nextY = Y + (Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                if (!this.isObstructed(nextX, nextY))
                {
                    X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                }
            }
            else
            {
                X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * 1 + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
                Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * 1 + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
            }
        }

        if (wKey == true && shiftKey == true && this.energy > 0 && !this.jumpingBack && this.mounted == false)
        {
            this.movingType = 2;

            // If the place where the player would move next under the same instruction is blocked then the player will not move.
            if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
            {
                var nextX = X + (Math.cos(this.rotation + 1 / 2 * Math.PI) * (4 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                var nextY = Y + (Math.sin(this.rotation + 1 / 2 * Math.PI) * (4 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                if (!this.isObstructed(nextX, nextY))
                {
                    X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * (4 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * (4 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                }
            }
            else
            {
                X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * 4 + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
                Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * 4 + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
            }
        }
        //SNEAKING
        if (altKey == true && wKey == false && !this.jumpingBack && this.mounted == false)
        {
            this.movingType = 3;
            if (shiftKey)
            {
                // If the place where the player would move next under the same instruction is blocked then the player will not move.
                if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
                {
                    var nextX = X + (Math.cos(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    var nextY = Y + (Math.sin(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    if (!this.isObstructed(nextX, nextY))
                    {
                        X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                        Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    }
                }
                else
                {
                    X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * 0.2 + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity())) * (TTD / 16.75);
                    Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * 0.2 + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity())) * (TTD / 16.75);
                }
            }
        }
        //JUMP-BACK
        if (sKey == true && shiftKey == true && this.jumpingBack == false && this.readyForAnotherJumpBack && this.getDexterity() >= 10 && this.energy >= 5 && this.movingType != 2 && this.mounted == false)
        {
            if (this.freeze <= 1.5)
            {
                this.energy -= 5;
                this.movingType = 5;
                this.jumpingBack = true;
                this.readyForAnotherJumpBack = false;
                this.jBack = 0;
                this.jumpBack();

                var jumpHitter = true;
                for (var i = 1; i <= 17 + this.jumpDistance; i++)
                {
                    var nextX = X - 3 * i * ((Math.cos(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * 40 / this.freeze))) * (TTD / 16.75);
                    var nextY = Y - 3 * i * ((Math.sin(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * 40 / this.freeze))) * (TTD / 16.75);
                    if (this.isObstructed(nextX, nextY))
                    {
                        jumpHitter = false;
                    }
                }

                if (jumpHitter)
                {
                    this.immune = true;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].target == player && ArtificialIntelligenceAccess[i].ranged != true && ArtificialIntelligenceAccess[i].unavoidable != true)
                        {
                            if (player.getDexterity() >= 25)
                            {
                                if (this.freeze > 1)
                                {
                                    ArtificialIntelligenceAccess[i].timeBetweenAttacks = new Date().getTime() + 750;
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess[i].timeBetweenAttacks = new Date().getTime() + 1500;
                                }
                            }
                            else if (player.getDexterity() >= 20)
                            {
                                if (this.freeze > 1)
                                {
                                    ArtificialIntelligenceAccess[i].timeBetweenAttacks = new Date().getTime() + 650;
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess[i].timeBetweenAttacks = new Date().getTime() + 1300;
                                }
                            }
                            else if (player.getDexterity() >= 15)
                            {
                                if (this.freeze > 1)
                                {
                                    ArtificialIntelligenceAccess[i].timeBetweenAttacks = new Date().getTime() + 550;
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess[i].timeBetweenAttacks = new Date().getTime() + 1100;
                                }
                            }
                            else
                            {
                                if (this.freeze > 1)
                                {
                                    ArtificialIntelligenceAccess[i].timeBetweenAttacks = new Date().getTime() + 450;
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess[i].timeBetweenAttacks = new Date().getTime() + 900;
                                }
                            }
                        }
                    }
                }
            }
        }
        //Segment the jump process
        if (this.jumpingBack)
        {
            if (this.jBack < (17 + this.jumpDistance))
            {
                this.jumpBack();
                this.jumpBackKeepTime = new Date().getTime();
            }
            else
            {
                this.readyToStopJumpingBack = true;
                this.jumpingBack = false;
            }
        }
        //End the jump back and have a wait time.
        if (this.readyToStopJumpingBack && this.jBack > 0)
        {
            this.immune = false;
            if (new Date().getTime() - this.jumpBackKeepTime > this.jumpBackTime * 1000)
            {
                this.readyToStopJumpingBack = false;
                this.readyForAnotherJumpBack = true;
                this.jBack = 0;
            }
        }
    };

    this.jumpBack = function()
    {
        this.jBack += 1;

        // If the place where the player would move next under the same instruction is blocked then the player will not move.
        if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
        {
            var nextX = X - 3 * ((Math.cos(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * 40 / this.freeze))) * (TTD / 16.75);
            var nextY = Y - 3 * ((Math.sin(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * 40 / this.freeze))) * (TTD / 16.75);
            if (!this.isObstructed(nextX, nextY))
            {
                X -= 3 * ((Math.cos(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * 40 / this.freeze))) * (TTD / 16.75);
                Y -= 3 * ((Math.sin(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * 40 / this.freeze))) * (TTD / 16.75);
            }
        }
        else
        {
            X -= 3 * ((Math.cos(this.rotation + 1 / 2 * Math.PI) * 0.2 + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * 40))) * (TTD / 16.75);
            Y -= 3 * ((Math.sin(this.rotation + 1 / 2 * Math.PI) * 0.2 + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * 40))) * (TTD / 16.75);
        }
    };

    //MOUNTED -- riding animals as mounts
    if (wKey == true && this.mounted)
    {
        this.movingType = 6;
        if (shiftKey == true)
        {
            this.mountMove = this.mountSpeed * 1.5;
        }
        else
        {
            this.mountMove = this.mountSpeed;
        }
        // If the place where the player would move next under the same instruction is blocked then the player will not move.
        if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
        {
            var nextX = X + (Math.cos(this.rotation + 1 / 2 * Math.PI) * (4) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.mountMove)) * (TTD / 16.75);
            var nextY = Y + (Math.sin(this.rotation + 1 / 2 * Math.PI) * (4) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.mountMove)) * (TTD / 16.75);
            if (!this.isObstructed(nextX, nextY))
            {
                X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * (4) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.mountMove)) * (TTD / 16.75);
                Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * (4) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.mountMove)) * (TTD / 16.75);
            }
        }
        else
        {
            X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * (4) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.mountMove)) * (TTD / 16.75);
            Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * (4) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.mountMove)) * (TTD / 16.75);
        }
    }

    //USER INTERFACE BAR

    //The bar for the UI buttons
    this.buildUIBar = function ()
    {
        XXX.beginPath();
        if (mouseY < 526 && lowBar != "skills" && lowBar != "shop" && lowBar != "bank" && lowBar != "crafting" && lowBar != "spellbook" && lowBar != "beastJournal" && lowBar != "questLog")
        {
            XXX.fillStyle = "rgba(211, 211, 211, 0.1)";
            XXX.strokeStyle = "rgba(211, 211, 211, 0.1)"
        }
        else
        {
            XXX.fillStyle = "lightGrey";
            XXX.strokeStyle = "black";
        }
        XXX.rect(140, 527, 1259, 22);
        XXX.fill();
        XXX.stroke();
    };
    //UI Buttons
    this.uiButton = function ()
    {
        if (mouseY > 526 || lowBar == "skills" || lowBar == "shop" || lowBar == "bank" || lowBar == "crafting" || lowBar == "spellbook" || lowBar == "beastJournal" || lowBar == "questLog")
        {
            //inventory button
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.fillStyle = "chocolate";
            XXX.rect(152, 527, 20, 22);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 153, 5, 21, 18, 151.25, 528.5, 21, 18);

            //character skills menu button
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.fillStyle = "cornsilk";
            XXX.rect(173, 527, 20, 22);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 639, 1, 23, 20, 172.25, 530.75, 20, 18);

            //magic menu (spellbook) button
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.fillStyle = "lightBlue";
            XXX.rect(194, 527, 20, 22);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 0, 734, 25, 31, 195.5, 527, 25 / 1.45, 31 / 1.45);

            //handcrafting menu button
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.fillStyle = "tan";
            XXX.rect(215, 527, 20, 22);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polypol, 512, 514, 36, 49, 215, 528, 20, 20);

            //Beast Journal menu button
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.fillStyle = "#BBCC96";
            XXX.rect(236, 527, 20, 22);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polypol, 1978, 11, 18, 23, 237, 529, 16.4, 18.4);

            //Quest Log menu button
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.fillStyle = "#D8ADE7";
            XXX.rect(257, 527, 20, 22);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(horde1, 364, 53, 119, 92, 258, 528, 20, 20);

            //saving menu button
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.fillStyle = "white";
            XXX.rect(278, 527, 20, 22);
            XXX.fill();
            XXX.stroke();
            XXX.drawImage(polyPNG, 663, 1, 31, 24, 277, 530, 21, 15.6);
        }
    };

    //This makes it so that clicking will toggle on or off any of the UI icons.
    this.toggleUIIcon = function ()
    {
        //When the inventory button clicked the lowbar becomes the inventory.
        if (mouseX > 152 && mouseX < 172 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar != "inventory")
        {
            clickReleased = false;
            lowBar = "inventory";
            player.inventoryPosition = 0;
            invScroll = 0;
            if (gameState == "paused")
            {
                gameState = "active";
            }
        }
        else if (mouseX > 152 && mouseX < 172 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar == "inventory")
        {
            clickReleased = false;
            lowBar = "information";
        }

        //When the character/skills button is clicked the entire screen transforms and becomes the character skills section.
        if (mouseX > 173 && mouseX < 193 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar != "skills")
        {
            clickReleased = false;
            lowBar = "skills";
            gameState = "paused";
        }
        else if (mouseX > 173 && mouseX < 193 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar == "skills")
        {
            clickReleased = false;
            lowBar = "information";
            gameState = "active";
        }

        //When the spellbook button is clicked the lowbar and screen shows the player the spellBook.
        if (mouseX > 194 && mouseX < 214 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar != "spellbook")
        {
            clickReleased = false;
            lowBar = "spellbook";
            gameState = "paused";
        }
        else if (mouseX > 194 && mouseX < 214 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar == "spellbook")
        {
            clickReleased = false;
            lowBar = "information";
            gameState = "active";
        }

        //When the crafting button is clicked it opens the handcrafting menu.
        if (mouseX > 215 && mouseX < 236 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar != "crafting" || mouseX > 215 && mouseX < 236 && mouseY < 549 && mouseY > 527 && clickReleased == true && crafting != "handcrafted")
        {
            clickReleased = false;
            player.craftPosition = 0;
            craftScroll = 0;
            lowBar = "crafting";
            crafting = "handcrafted";
            gameState = "paused";
        }
        else if (mouseX > 215 && mouseX < 236 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar == "crafting" && crafting == "handcrafted")
        {
            clickReleased = false;
            lowBar = "information";
            gameState = "active";
        }

        //When the beastJournal button is clicked it shows the player information about creatures they have logged.
        if (mouseX > 236 && mouseX < 257 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar != "beastJournal")
        {
            clickReleased = false;
            lowBar = "beastJournal";
            showBeastStat = -1;
            player.inventoryPosition = 0;
            invScroll = 0;
            gameState = "paused";
        }
        else if (mouseX > 236 && mouseX < 257 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar == "beastJournal")
        {
            clickReleased = false;
            lowBar = "information";
            player.inventoryPosition = 0;
            invScroll = 0;
            gameState = "active";
        }

        //When the save button is clicked the lowbar shows the player the four saving slots to choose from.
        if (mouseX > 257 && mouseX < 278 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar != "questLog")
        {
            clickReleased = false;
            lowBar = "questLog";
            gameState = "paused";
        }
        else if (mouseX > 257 && mouseX < 278 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar == "questLog")
        {
            clickReleased = false;
            lowBar = "information";
            gameState = "active";
        }

        //When the save button is clicked the lowbar shows the player the four saving slots to choose from.
        if (mouseX > 278 && mouseX < 299 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar != "save")
        {
            clickReleased = false;
            lowBar = "save";
            if (gameState == "paused")
            {
                gameState = "active";
            }
        }
        else if (mouseX > 278 && mouseX < 299 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar == "save")
        {
            clickReleased = false;
            lowBar = "information";
            gameState = "active";
        }
    };

    //highlight the selected icon in the user interface.
    this.highlightSelectedUI = function ()
    {
        if (lowBar == "inventory")
        {
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 215, 0, 0.35)";
            XXX.fillRect(152, 527, 20, 23);
        }
        else if (lowBar == "skills")
        {
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 215, 0, 0.35)";
            XXX.fillRect(173, 527, 20, 23);
        }
        else if (lowBar == "spellbook")
        {
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 215, 0, 0.35)";
            XXX.fillRect(194, 527, 20, 23);
        }
        else if (lowBar == "crafting" && crafting == "handcrafted")
        {
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 215, 0, 0.35)";
            XXX.fillRect(215, 527, 20, 23);
        }
        else if (lowBar == "beastJournal")
        {
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 215, 0, 0.35)";
            XXX.fillRect(236, 527, 20, 23);
        }
        else if (lowBar == "questLog")
        {
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 215, 0, 0.35)";
            XXX.fillRect(257, 527, 20, 23);
        }
        else if (lowBar == "save")
        {
            XXX.beginPath();
            XXX.fillStyle = "rgba(255, 215, 0, 0.35)";
            XXX.fillRect(278, 527, 20, 23);
        }
    };

    //MAGIC MENU (Spellbook)
    this.displayMagicMenu = function()
    {
        if (lowBar == "spellbook")
        {
            //MAIN BACKGROUND
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(1, 1, 1398, 526);
            XXX.fill();
            XXX.stroke();

            //Exit bank Button
            //the button part
            if (mouseX > 2 && mouseX < 2 + 148 && mouseY > 529 && mouseY < 529 + 20)
            {
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();

                if (clicked == true)
                {
                    clicked = false;
                    lowBar = "information";
                    gameState = "active";
                }
            }
            else
            {
                XXX.beginPath();
                XXX.fillStyle = "E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();
            }
            //the text part
            XXX.font = "bold 14px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Exit Spellbook", 75, 543);

            //LowBar (spell type options)
            //Primary Spells (Forms)
            LXX.beginPath();
            if (lMouseX > 1 && lMouseX < 1 + (1400 / 3) && lMouseY > 0 && lMouseY < 80)
            {
                LXX.fillStyle = "gold";
            }
            else
            {
                LXX.fillStyle = "lightGrey";
            }
            LXX.strokeStyle = "black";
            LXX.lineWidth = 1;
            LXX.rect(1, 1, 1400 / 3, 78);
            LXX.fill();
            LXX.stroke();
            //text part
            LXX.fillStyle = "black";
            LXX.textAlign = "center";
            if (lMouseX > 1 && lMouseX < 1 + (1400 / 3) && lMouseY > 0 && lMouseY < 80)
            {
                LXX.font = "bold 16px Book Antiqua";
                LXX.fillText("Spells that require a physical motion to be performed.", 467 / 2, 45);
                if (clickReleased)
                {
                    clickReleased = false;
                    magicMenu = "primary";
                    magicPos = 0;
                }
            }
            else
            {
                LXX.font = "bold 40px Book Antiqua";
                LXX.fillText("Forms", 467 / 2, 50);
            }
            //Secondary Spells (Incantations)
            LXX.beginPath();
            if (lMouseX > (1400 / 3) && lMouseX < (1400 / 3) + (1400 / 3) && lMouseY > 0 && lMouseY < 80)
            {
                LXX.fillStyle = "gold";
            }
            else
            {
                LXX.fillStyle = "lightGrey";
            }
            LXX.strokeStyle = "black";
            LXX.lineWidth = 1;
            LXX.rect((1400 / 3), 1, 1400 / 3, 78);
            LXX.fill();
            LXX.stroke();
            //text part
            LXX.fillStyle = "black";
            LXX.textAlign = "center";
            if (lMouseX > (1400 / 3) && lMouseX < (1400 / 3) + (1400 / 3) && lMouseY > 0 && lMouseY < 80)
            {
                LXX.font = "bold 16px Book Antiqua";
                LXX.fillText("Spells cast by speaking magical words.", 467 + 467 / 2, 45);
                if (clickReleased)
                {
                    clickReleased = false;
                    magicMenu = "secondary";
                    magicPos = 0;
                }
            }
            else
            {
                LXX.font = "bold 40px Book Antiqua";
                LXX.fillText("Incantations", 467 + 467 / 2, 50);
            }
            //Passive Spells (Binds)
            LXX.beginPath();
            if (lMouseX > (1400 * 2 / 3) - 1 && lMouseX < (1400 * 2 / 3) - 1 + (1400 / 3) && lMouseY > 0 && lMouseY < 80)
            {
                LXX.fillStyle = "gold";
            }
            else
            {
                LXX.fillStyle = "lightGrey";
            }
            LXX.strokeStyle = "black";
            LXX.lineWidth = 1;
            LXX.rect((1400 * 2 / 3) - 1, 1, 1400 / 3, 78);
            LXX.fill();
            LXX.stroke();
            //text part
            LXX.fillStyle = "black";
            LXX.textAlign = "center";
            if (lMouseX > (1400 * 2 / 3) - 1 && lMouseX < (1400 * 2 / 3) - 1 + (1400 / 3) && lMouseY > 0 && lMouseY < 80)
            {
                LXX.font = "bold 16px Book Antiqua";
                LXX.fillText("Passive spells cast directly from the soul.", 467 * 2 + 467 / 2, 45);
                if (clickReleased)
                {
                    clickReleased = false;
                    magicMenu = "tertiary";
                    magicPos = 0;
                }
            }
            else
            {
                LXX.font = "bold 40px Book Antiqua";
                LXX.fillText("Binds", 467 * 2 + 467 / 2, 50);
            }

            //___________________________|
            //Magical Knowledge Inventory
            //---------------------------\
            if (magicMenu == "primary")
            {
                for (var i = 0; i < primarySpells.length; i++)
                {
                    if (80 * i - (-24 + (magicPos * 80)) >= 24 && 80 * i - (-24 + (magicPos * 80)) <= 501)
                    {
                        XXX.beginPath();
                        XXX.strokeStyle = "black";
                        XXX.lineWidth = 2;
                        XXX.fillStyle = "lightBlue";
                        if (primarySpells[i].equipped)
                        {
                            XXX.fillStyle = "#007ba7";
                        }
                        XXX.rect(100, 80 * i - (-24 + (magicPos * 80)), 1200, 80);
                        XXX.fill();
                        XXX.stroke();

                        if (mouseX > 100 && mouseX < 1300 && mouseY > 80 * i - (-24 + (magicPos * 80)) && mouseY < 80 * i - (-24 + (magicPos * 80)) + 80)
                        {
                            XXX.fillStyle = "black";
                            XXX.textAlign = "center";
                            XXX.font = "bold 16px Book Antiqua";
                            XXX.fillText(primarySpells[i].description, 700, 45 + 80 * i - (-24 + (magicPos * 80)));

                            if (clicked)
                            {
                                clicked = false;
                                if (primarySpells[i].equipped)
                                {
                                    this.spell = "none";
                                    primarySpells[i].equipped = false;
                                }
                                else
                                {
                                    for (var j = 0; j < primarySpells.length; j++)
                                    {
                                        if (primarySpells[j].equipped)
                                        {
                                            primarySpells[j].equipped = false;
                                        }
                                    }

                                    if (this.weaponEquipped == "none")
                                    {
                                        primarySpells[i].equipped = true;
                                        this.spell = primarySpells[i];
                                    }
                                }
                            }
                        }
                        else
                        {
                            XXX.fillStyle = "black";
                            XXX.textAlign = "center";
                            XXX.font = "bold 40px Book Antiqua";
                            XXX.fillText(primarySpells[i].name + "  ( " + Math.floor(primarySpells[i].cost) + " )" , 700, 50 + 80 * i - (-24 + (magicPos * 80)));
                        }
                    }
                }
            }
            else if (magicMenu == "secondary")
            {
                for (var i = 0; i < secondarySpells.length; i++)
                {
                    var hits = 0;
                    for (var j = 0; j < secondarySpells.length; j++)
                    {
                        if (secondarySpells[j].equipped == false)
                        {
                            hits += 1;
                        }
                    }
                    if (hits == secondarySpells.length)
                    {
                        this.spellSlotsUsed = 0;
                    }

                    if (80 * i - (-24 + (magicPos * 80)) >= 24 && 80 * i - (-24 + (magicPos * 80)) <= 501)
                    {
                        XXX.beginPath();
                        XXX.strokeStyle = "black";
                        XXX.lineWidth = 2;
                        XXX.fillStyle = "lightBlue";
                        if (secondarySpells[i].equipped)
                        {
                            XXX.fillStyle = "#007ba7";
                        }
                        XXX.rect(100, 80 * i - (-24 + (magicPos * 80)), 1200, 80);
                        XXX.fill();
                        XXX.stroke();

                        if (mouseX > 100 && mouseX < 1300 && mouseY > 80 * i - (-24 + (magicPos * 80)) && mouseY < 80 * i - (-24 + (magicPos * 80)) + 80)
                        {
                            XXX.fillStyle = "black";
                            XXX.textAlign = "center";
                            XXX.font = "bold 16px Book Antiqua";
                            XXX.fillText(secondarySpells[i].description, 700, 45 + 80 * i - (-24 + (magicPos * 80)));

                            if (clicked && secondarySpells[i].equipped != false)
                            {
                                clicked = false;
                                secondarySpells[i].equipped = false;
                                this.spellSlotsUsed -= 1;
                            }

                            if (key1 || key2 || key3 || key4 || key5 || key6 || key7 || key8 || key9)
                            {
                                for (var j = 0; j < secondarySpells.length; j++)
                                {
                                    if (secondarySpells[j].equipped == 1 && key1 || secondarySpells[j].equipped == 2 && key2 || secondarySpells[j].equipped == 3 && key3 || secondarySpells[j].equipped == 4 && key4 || secondarySpells[j].equipped == 5 && key5 || secondarySpells[j].equipped == 6 && key6 || secondarySpells[j].equipped == 7 && key7 || secondarySpells[j].equipped == 8 && key8 || secondarySpells[j].equipped == 9 && key9)
                                    {
                                        secondarySpells[j].equipped = false;
                                        this.spellSlotsUsed -= 1;
                                    }
                                }

                                if (this.spellSlotsUsed < this.spellSlots)
                                {
                                    this.spellSlotsUsed += 1;
                                    if (key1)
                                    {
                                        secondarySpells[i].equipped = 1;
                                        this.sp1 = secondarySpells[i];
                                    }
                                    else if (key2)
                                    {
                                        secondarySpells[i].equipped = 2;
                                        this.sp2 = secondarySpells[i];
                                    }
                                    else if (key3)
                                    {
                                        secondarySpells[i].equipped = 3;
                                        this.sp3 = secondarySpells[i];
                                    }
                                    else if (key3)
                                    {
                                        secondarySpells[i].equipped = 3;
                                        this.sp3 = secondarySpells[i];
                                    }
                                    else if (key4)
                                    {
                                        secondarySpells[i].equipped = 4;
                                        this.sp4 = secondarySpells[i];
                                    }
                                    else if (key5)
                                    {
                                        secondarySpells[i].equipped = 5;
                                        this.sp5 = secondarySpells[i];
                                    }
                                    else if (key6)
                                    {
                                        secondarySpells[i].equipped = 6;
                                        this.sp6 = secondarySpells[i];
                                    }
                                    else if (key7)
                                    {
                                        secondarySpells[i].equipped = 7;
                                        this.sp7 = secondarySpells[i];
                                    }
                                    else if (key8)
                                    {
                                        secondarySpells[i].equipped = 8;
                                        this.sp8 = secondarySpells[i];
                                    }
                                    else if (key9)
                                    {
                                        secondarySpells[i].equipped = 9;
                                        this.sp9 = secondarySpells[i];
                                    }
                                }
                            }
                        }
                        else
                        {
                            XXX.fillStyle = "black";
                            XXX.textAlign = "center";
                            XXX.font = "bold 40px Book Antiqua";
                            XXX.fillText(secondarySpells[i].name + "  ( " + Math.floor(secondarySpells[i].cost) + " )" , 700, 50 + 80 * i - (-24 + (magicPos * 80)));

                            if (secondarySpells[i].equipped != false)
                            {
                                XXX.fillStyle = "black";
                                XXX.textAlign = "center";
                                XXX.font = "bold 20px Book Antiqua";
                                XXX.fillText(secondarySpells[i].equipped, 1275, 50 + 80 * i - (-24 + (magicPos * 80)));
                            }
                        }
                    }
                }
            }
            if (magicMenu == "tertiary")
            {
                for (var i = 0; i < tertiarySpells.length; i++)
                {
                    if (80 * i - (-24 + (magicPos * 80)) >= 24 && 80 * i - (-24 + (magicPos * 80)) <= 501)
                    {
                        XXX.beginPath();
                        XXX.strokeStyle = "black";
                        XXX.lineWidth = 2;
                        XXX.fillStyle = "lightBlue";
                        if (tertiarySpells[i].equipped)
                        {
                            XXX.fillStyle = "#007ba7";
                        }
                        XXX.rect(100, 80 * i - (-24 + (magicPos * 80)), 1200, 80);
                        XXX.fill();
                        XXX.stroke();

                        if (mouseX > 100 && mouseX < 1300 && mouseY > 80 * i - (-24 + (magicPos * 80)) && mouseY < 80 * i - (-24 + (magicPos * 80)) + 80)
                        {
                            XXX.fillStyle = "black";
                            XXX.textAlign = "center";
                            XXX.font = "bold 16px Book Antiqua";
                            XXX.fillText(tertiarySpells[i].description, 700, 45 + 80 * i - (-24 + (magicPos * 80)));

                            if (clicked)
                            {
                                clicked = false;
                                if (tertiarySpells[i].equipped)
                                {
                                    tertiarySpells[i].equipped = false;
                                    for (var j = 0; j < this.passiveSpellsEquipped.length; j++)
                                    {
                                        if (tertiarySpells[i].ID == this.passiveSpellsEquipped[j].ID)
                                        {
                                            this.passiveSpellsEquipped.splice(j, 1);
                                            break;
                                        }

                                    }
                                }
                                else
                                {
                                    tertiarySpells[i].equipped = true;
                                    this.passiveSpellsEquipped.push(tertiarySpells[i]);
                                }
                            }
                        }
                        else
                        {
                            XXX.fillStyle = "black";
                            XXX.textAlign = "center";
                            XXX.font = "bold 40px Book Antiqua";
                            XXX.fillText(tertiarySpells[i].name + "  ( " + Math.floor(tertiarySpells[i].cost) + " )" , 700, 50 + 80 * i - (-24 + (magicPos * 80)));
                        }
                    }
                }
            }
            //scroll arrows /\  \/
            XXX.save();
            XXX.translate(700, 11);
            XXX.rotate(1/2 * Math.PI);
            //XXX.drawImage(polyPNG, 1, 735, 11, 30, 0 - 1/2 * 12 * 2, 0 - 1/2 * 64 * 2, 12 * 2, 64 * 2);
            XXX.drawImage(polyPNG, 1, 735, 11, 30, 0 - 1/2 * 12, 0 - 1/2 * 64, 12, 64);
            XXX.restore();

            XXX.save();
            XXX.translate(700, 517);
            XXX.rotate(- 1/2 * Math.PI);
            //XXX.drawImage(polyPNG, 1, 735, 11, 30, 0 - 1/2 * 12  * 2, 0 - 1/2 * 64  * 2, 12 * 2, 64 * 2);
            XXX.drawImage(polyPNG, 1, 735, 11, 30, 0 - 1/2 * 12, 0 - 1/2 * 64, 12, 64);
            XXX.restore();

            //set and track the current spell menu.
            if (magicMenu == "primary")
            {
                currentMagicMenu = primarySpells;
            }
            else if (magicMenu == "secondary")
            {
                currentMagicMenu = secondarySpells;
            }
            else if (magicMenu == "tertiary")
            {
                currentMagicMenu = tertiarySpells;
            }

            if (mouseX > (700 - 64) && mouseX < (700 + 64) && mouseY > 13 - 12 && mouseY < 13 + 12 && clicked && magicPos > 0)
            {
                clicked = false;
                magicPos -= 1;
            }
            else if (mouseX > (700 - 64) && mouseX < (700 + 64) && mouseY > 515 - 12 && mouseY < 515 + 12 && clicked && magicPos + 6 < currentMagicMenu.length)
            {
                clicked = false;
                magicPos += 1;
            }
        }
    };

    //DIALOGUE
    this.displayDialogue = function()
    {
        if (lowBar == "dialogue")
        {
            //setUp Dialogue
            LXX.fillStyle = "black";
            LXX.font = "bold 20px Book Antiqua";
            LXX.textAlign = "center";

            if (this.dialogueOptions.length > 0)
            {
                LXX.fillText(this.dialogueOptions[this.dialoguePosition][0], 700, 45);
            }

            //Scrolling through dialogue options
            //left scroll arrow
            LXX.beginPath();
            LXX.lineWidth = 1;
            LXX.fillStyle ="darkGrey";
            LXX.strokeStyle ="black";
            LXX.rect(0.5, 0.5, 20, 79);
            LXX.fill();
            LXX.stroke();
            LXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

            //right scroll arrow
            LXX.beginPath();
            LXX.lineWidth = 1;
            LXX.fillStyle ="darkGrey";
            LXX.strokeStyle ="black";
            LXX.rect(1379.5, 0.5, 20, 79);
            LXX.fill();
            LXX.stroke();
            LXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);

            this.dialogueScrolling = function()
            {
                if (playersTurnToSpeak)
                {
                    if (this.dialogueChoiceMade == false && this.dialogueOptions.length >= 1)
                    {
                        this.speechMovementInhibitor = false;
                        if (lMouseX > 20.5 && lMouseX <= 1379.5 && lMouseY < 79.5 && lMouseY >= 0.5 && clicked == true)
                        {
                            clicked = false;

                            LXX.beginPath();
                            LXX.fillStyle = "rgba(255,215,0, 0.55)";
                            LXX.fillRect(20.5, 0.5, 1359, 79);

                            this.dialogueOptions[this.dialoguePosition][1] = true;
                            this.dialogueChoiceMade = true;
                        }
                        else if (lMouseX > 20.5 && lMouseX <= 1379.5 && lMouseY < 79.5 && lMouseY >= 0.5)
                        {
                            LXX.beginPath();
                            LXX.fillStyle = "rgba(255,215,0, 0.25)";
                            LXX.fillRect(20.5, 0.5, 1359, 79);
                        }

                        else if (this.dialoguePosition > 0 && lMouseX >= 0.5 && lMouseX <= 20.5 && lMouseY <= 79.5 && lMouseY >= 0.5 && clicked == true)
                        {
                            clicked = false;
                            this.dialoguePosition -= 1;
                        }
                        if (this.dialoguePosition < (this.dialogueOptions.length - 1) && lMouseX >= 1379.5 && lMouseX <= 1399.5 && lMouseY <= 79.5 && lMouseY >= 0.5 && clicked == true)
                        {
                            clicked = false;
                            this.dialoguePosition += 1;
                        }
                    }
                }
                else
                {
                    this.speechMovementInhibitor = true;
                }
            };
            //operations
            this.dialogueScrolling();
        }
    };

    //CRAFTING
    this.displayCrafting = function()
    {
        if (lowBar == "crafting" && crafting != "none")
        {
            //MAIN BACKGROUND
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(1, 1, 1398, 526);
            XXX.fill();
            XXX.stroke();

            //Exit bank Button
            //the button part
            if (mouseX > 2 && mouseX < 2 + 148 && mouseY > 529 && mouseY < 529 + 20)
            {
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();

                if (clicked == true)
                {
                    clicked = false;
                    lowBar = "information";
                    gameState = "active";
                }
            }
            else
            {
                XXX.beginPath();
                XXX.fillStyle = "E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();
            }
            //the text part
            XXX.font = "bold 14px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Exit Crafting Menu", 75, 543);

            //line between bank account and description
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 2;
            XXX.moveTo(0, 80);
            XXX.lineTo(1400, 80);
            XXX.stroke();

            //Determine which type of crafting menu to show...
            var preCraftMenu = 0;
            var craftMenu = [];

            if (crafting == "smithing")
            {
                preCraftMenu = smithing;
            }
            else if (crafting == "foods")
            {
                preCraftMenu = foods;
            }
            else if (crafting == "tailoring")
            {
                preCraftMenu = tailoring;
            }
            else if (crafting == "jewelry")
            {
                preCraftMenu = jewelry;
            }
            else if (crafting == "alchemy")
            {
                preCraftMenu = alchemy;
            }
            else if (crafting == "forging")
            {
                preCraftMenu = forge;
            }
            else if (crafting == "brewing")
            {
                preCraftMenu = brewing;
            }
            else if (crafting == "handcrafted")
            {
                preCraftMenu = handcrafted;
            }

            for (var i = 0; i < preCraftMenu.length; i++)
            {
                if (this.getIntelligence() >= preCraftMenu[i].intForCraft)
                {
                    craftMenu.push(preCraftMenu[i]);
                }
            }

            //CRAFTING MENU
            this.showCrafting = function()
            {
                // each inventory slot is a list with three things in it... [Item, quantity]
                for (var i = 0; i < craftMenu.length; i++)
                {
                    XXX.beginPath();
                    XXX.lineWidth = 2;
                    //XXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                    var hits = 0;
                    var requirementsMet = false;
                    for (var j = 0; j < craftMenu[i].ingredients.length; j++)
                    {
                        for (var k = 0; k < Inventory.length; k++)
                        {
                            if (craftMenu[i].ingredients[j][0] == Inventory[k][0].identity && craftMenu[i].ingredients[j][1] <= Inventory[k][1])
                            {
                                hits += 1;
                            }
                        }
                    }
                    if (hits == craftMenu[i].ingredients.length)
                    {
                        requirementsMet = true
                    }

                    if (requirementsMet)
                    {
                        XXX.fillStyle ="rgba(0, 238, 0, 0.45)";
                        //XXX.strokeStyle ="darkGreen";
                        XXX.strokeStyle ="black";
                    }
                    else
                    {
                        XXX.fillStyle ="rgba(238, 0, 0, 0.45)";
                        //XXX.strokeStyle ="red";
                        XXX.strokeStyle ="black";
                    }

                    XXX.rect(craftScroll + 20.5 + (79 * i), 0.5, 79, 79);
                    XXX.fill();
                    XXX.stroke();

                    //image
                    craftMenu[i].drawShopCraftItem(craftMenu[i].type, craftScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                }

                //left scroll arrow
                XXX.beginPath();
                XXX.lineWidth = 1;
                XXX.fillStyle ="darkGrey";
                XXX.strokeStyle ="black";
                XXX.rect(0.5, 0.5, 20, 79);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                //right scroll arrow
                XXX.beginPath();
                XXX.lineWidth=1;
                XXX.fillStyle ="darkGrey";
                XXX.strokeStyle ="black";
                XXX.rect(1379.5, 0.5, 20, 79);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
            };

            this.craftScrolling = function()
            {
                //When the left inventory scroll is clicked scroll one to the left if there is one to the left otherwise don't.
                if (this.craftPosition < craftMenu.length && mouseX > 1379.5 && mouseX < 1399.5 && mouseY > 0.5 && mouseY < 80 && clickReleased == true) //this (20.5, 0.5, 79, 79) is the position the first in the list will be in if the left scroll will not work.
                {
                    clickReleased = false;
                    craftScroll -= 79;
                    this.craftPosition += 1;
                }

                //When the right inventory scroll is clicked scroll one to the right if there is one to the right otherwise don't.
                if (this.craftPosition > 0 && mouseX > 0.5 && mouseX < 20.5 && mouseY > 0.5 && mouseY < 80 && clickReleased == true)
                {
                    clickReleased = false;
                    craftScroll += 79;
                    this.craftPosition -= 1;
                }
            };

            this.craftingInteract = function()
            {
                var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                for (var i = -this.craftPosition; i < craftMenu.length - this.craftPosition; i++)
                {
                    listOfInvX1Coords.push(20.5 + (79 * i));
                }


                var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                for (var i = -this.craftPosition; i < craftMenu.length - this.craftPosition; i++)
                {
                    listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                }


                var invY1Coord = 0.5; //This doesn't change.


                var invY2Coord = 79.5; //this is just Y + 79

                for (var i = craftMenu.length - 1; i > -1; i--)
                {
                    if (mouseX >= 21 && mouseX <= 1329  && mouseY < 80) //This checks if the mouse is between the scroll buttons rather than on them.
                    {
                        if (clickReleased == true && mouseX > listOfInvX1Coords[i] && mouseX < listOfInvX2Coords[i] && mouseY > invY1Coord && mouseY < invY2Coord && this.REQB == false)
                        {
                            clickReleased = false;
                            var hits = 0;
                            for (var l = 0; l < craftMenu[i].ingredients.length; l++)
                            {
                                for (var p = 0; p < Inventory.length; p++)
                                {
                                    if (craftMenu[i].ingredients[l][0] == Inventory[p][0].identity && craftMenu[i].ingredients[l][1] <= Inventory[p][1])
                                    {
                                        hits += 1;
                                    }
                                }
                            }

                            var deleteIngredients = [];
                            if (hits == craftMenu[i].ingredients.length)
                            {
                                for (var l = 0; l < craftMenu[i].ingredients.length; l++)
                                {
                                    for (var p = 0; p < Inventory.length; p++)
                                    {
                                        if (craftMenu[i].ingredients[l][0] == Inventory[p][0].identity)
                                        {
                                            deleteIngredients.push([p, craftMenu[i].ingredients[l][1]]);
                                        }
                                    }
                                }
                                var listToDelete = [];
                                for (var q = 0; q < deleteIngredients.length; q++) //todo there was a problem with crafting here....
                                {
                                    //console.log(Inventory);
                                    //console.log(q);
                                    //console.log(deleteIngredients[q][0]);
                                    if (Inventory[deleteIngredients[q][0]][1] - deleteIngredients[q][1] == 0)
                                    {
                                        listToDelete.push(deleteIngredients[q][0]);
                                    }
                                    else
                                    {
                                        Inventory[deleteIngredients[q][0]][1] -= deleteIngredients[q][1];
                                    }
                                }

                                //console.log(listToDelete);
                                for (var n = Inventory.length - 1; n > -1; n--)
                                {
                                    for (var m = 0; m < listToDelete.length; m++)
                                    {
                                        if (listToDelete[m] == n)
                                        {
                                            Inventory.splice(n, 1);
                                        }
                                    }
                                }
                                //put the newly crafted creation into a pre-existing stack or a new one.
                                var craftIt = -1;
                                for (var l = 0; l < Inventory.length; l++)
                                {
                                    if (Inventory[l][0].type == craftMenu[i].type)
                                    {
                                        craftIt = l;
                                        break;
                                    }
                                }
                                if (craftIt != -1)
                                {
                                    Inventory[craftIt][1] += craftMenu[i].yield;
                                }
                                else
                                {
                                    Inventory.push([craftMenu[i], craftMenu[i].yield]);
                                }

                                //give the player any created biproducts of the crafting recipe. (items that accompany the main item being crafted.)
                                for (var bi = 0; bi < craftMenu[i].biproducts.length; bi ++)
                                {
                                    craftIt = -1;
                                    for (var l = 0; l < Inventory.length; l++)
                                    {
                                        if (Inventory[l][0].type == craftMenu[i].biproducts[bi][0])
                                        {
                                            craftIt = l;
                                            break;
                                        }
                                    }
                                    if (craftIt != -1)
                                    {
                                        Inventory[craftIt][1] += craftMenu[i].biproducts[bi][1];
                                    }
                                    else
                                    {
                                        Inventory.push([craftMenu[i].biproducts[bi][0], craftMenu[i].biproducts[bi][1]]);
                                    }
                                }
                            }
                        }
                        else if (mouseX > listOfInvX1Coords[i] && mouseX < listOfInvX2Coords[i] && mouseY > invY1Coord && mouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                        {

                            //The Name of the Item
                            XXX.font = "bold 40px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText(craftMenu[i].identity, 1/2 * CCC.width, 150);

                            var recipe = [];
                            var anti = [];
                            var punch = 0;
                            for (var l = 0; l < craftMenu[i].ingredients.length; l++)
                            {
                                punch = 0;
                                for (var p = 0; p < Inventory.length; p++)
                                {
                                    if (Inventory[p][0].identity == craftMenu[i].ingredients[l][0])
                                    {
                                        punch = 1;
                                    }

                                    if (punch)
                                    {
                                        if (craftMenu[i].ingredients[l][0] == Inventory[p][0].identity && craftMenu[i].ingredients[l][1] <= Inventory[p][1])
                                        {
                                            var preRecipe = craftMenu[i].ingredients[l][0] + " x " + craftMenu[i].ingredients[l][1];
                                            recipe.push(preRecipe);
                                        }
                                        else if (craftMenu[i].ingredients[l][0] == Inventory[p][0].identity && craftMenu[i].ingredients[l][1] >= Inventory[p][1])
                                        {
                                            var preRecipe = craftMenu[i].ingredients[l][0] + " x " + craftMenu[i].ingredients[l][1];
                                            anti.push(preRecipe);
                                        }
                                    }
                                }
                                if (!punch)
                                {
                                    var preRecipe = craftMenu[i].ingredients[l][0] + " x " + craftMenu[i].ingredients[l][1];
                                    anti.push(preRecipe);
                                }
                            }
                            //console.log(anti);
                            //Ingredient Info (normal: ingredients that you do have)
                            XXX.font = "bold 20px Book Antiqua"; //used to be 32px but the ingredients would not all fit...
                            XXX.fillStyle = "darkGreen";
                            XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText(recipe.join("    "), 1/2 * CCC.width, 300);

                            //Ingredient Info (anti: missing ingredients)
                            XXX.font = "bold 20px Book Antiqua";
                            XXX.fillStyle = "crimson";
                            XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText(anti.join("    "), 1/2 * CCC.width, 500);
                        }
                    }
                }
            };

            this.displayCrafterInventory = function()
            {
                // each inventory slot is a list with three things in it... [Item, quantity]
                for (var i = 0; i < Inventory.length; i++)
                {
                    if (Inventory[i][0].equipped == true)
                    {
                        LXX.beginPath();
                        LXX.lineWidth = 2;
                        LXX.fillStyle ="rgba(102, 255, 102, 0.35)";
                        LXX.strokeStyle ="black";
                        LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                        LXX.fill();
                        LXX.stroke();
                        Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                        //quantity
                        LXX.font="16px Book Antiqua";
                        LXX.textAlign="left";
                        LXX.fillStyle ="black";
                        if (Inventory[i][1] < 1000)
                        {
                            LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                        {
                            LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000000)
                        {
                            LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        //weight
                        LXX.font="10px Book Antiqua";
                        LXX.fillStyle ="black";
                        LXX.textAlign="right";
                        LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                        LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                    }
                    else
                    {
                        LXX.beginPath();
                        LXX.lineWidth = 2;
                        LXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                        LXX.strokeStyle ="black";
                        LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                        LXX.fill();
                        LXX.stroke();
                        Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                        //quantity
                        LXX.font="16px Book Antiqua";
                        LXX.textAlign="left";
                        LXX.fillStyle ="black";
                        if (Inventory[i][1] < 1000)
                        {
                            LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                        {
                            LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000000)
                        {
                            LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        //weight
                        LXX.font="10px Book Antiqua";
                        LXX.fillStyle ="black";
                        LXX.textAlign="right";
                        LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                        LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                    }
                }

                //left scroll arrow
                LXX.beginPath();
                LXX.lineWidth = 1;
                LXX.fillStyle ="darkGrey";
                LXX.strokeStyle ="black";
                LXX.rect(0.5, 0.5, 20, 79);
                LXX.fill();
                LXX.stroke();
                LXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                //weight display
                LXX.beginPath();
                LXX.fillStyle ="lightGray";
                LXX.strokeStyle ="black";
                LXX.rect(1329.5, 0.1, 50, 79.8);
                LXX.fill();
                LXX.stroke();
                //Draw a cover on the weight display to represent the amount of carry weight filled.
                LXX.beginPath();
                //LXX.fillStyle ="rgba(255, 255, 255, 0.65)"; //white fill in colour
                //LXX.fillStyle ="rgba(139, 134, 78, 0.8)"; //beige fill in colour
                //LXX.fillStyle = "rgba(138, 54, 15, 0.65)"; //burnt sienna colour
                LXX.fillStyle ="grey";
                LXX.rect(1329.6, 79.5, 50, -79 * this.carryWeight / this.carryWeightMAX);
                LXX.fill();
                //Draw the weight number on the top and bottom and the deviding bar.
                LXX.font="16px Book Antiqua";
                LXX.fillStyle = "black";
                LXX.textAlign="center";
                LXX.fillText(JSON.stringify(Math.floor(this.carryWeight)), 1352, 25);
                //dividing line
                LXX.beginPath();
                LXX.strokeStyle="black";
                LXX.lineWidth=3;
                LXX.moveTo(1334, 39.5);
                LXX.lineTo(1374, 39.5);
                LXX.stroke();
                //divisor
                LXX.font="16px Book Antiqua";
                LXX.fillStyle = "black";
                LXX.textAlign="center";
                LXX.fillText(JSON.stringify(Math.floor(this.carryWeightMAX)), 1352, 64.5);
                LXX.textAlign="left"; //this is to reset it to the standard for the rest to come.

                //right scroll arrow
                LXX.beginPath();
                LXX.lineWidth=1;
                LXX.fillStyle ="darkGrey";
                LXX.strokeStyle ="black";
                LXX.rect(1379.5, 0.5, 20, 79);
                LXX.fill();
                LXX.stroke();
                LXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
            };
            this.crafterInventoryInteract = function()
            {
                var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                for (var i = -this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
                {
                    listOfInvX1Coords.push(20.5 + (79 * i));
                }


                var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                for (var i = -this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
                {
                    listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                }


                var invY1Coord = 0.5; //This doesn't change.


                var invY2Coord = 79.5; //this is just Y + 79

                for (var i = Inventory.length - 1; i > -1; i--)
                {
                    if (lMouseX >= 21 && lMouseX <= 1329) //This checks if the mouse is between the scroll buttons rather than on them.
                    {
                        if (lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                        {
                            var sizer = 0;

                            for (var k = 0; k < Inventory[i][0].identity.length; k++)
                            {
                                if (Inventory[i][0].identity[k] == "'")
                                {
                                    sizer += 1;
                                }
                                else if (Inventory[i][0].identity[k].indexOf(' ') != -1)
                                {
                                    sizer += 0;
                                }
                                else if (Inventory[i][0].identity[k] == Inventory[i][0].identity[k].toUpperCase() )
                                {
                                    sizer += 17; //9.21;
                                }
                                else if (Inventory[i][0].identity[k] == Inventory[i][0].identity[k].toLowerCase())
                                {
                                    sizer += 12;
                                }
                            }

                            XXX.beginPath();
                            XXX.fillStyle="white";
                            XXX.fillRect(3, 503, sizer, 22);
                            //The Name of the Item
                            XXX.font = "bold 22px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText(Inventory[i][0].identity, 4, 522);
                        }
                    }
                }
            };

            //OPERATIONS
            this.displayCrafterInventory();
            this.crafterInventoryInteract();
            this.showCrafting();
            this.craftScrolling();
            this.craftingInteract();
        }
    };

    //BEAST JOURNAL
    this.displayBeastJournal = function()
    {
        if (lowBar == "beastJournal")
        {
            //MAIN BACKGROUND
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(1, 1, 1398, 526);
            XXX.fill();
            XXX.stroke();

            //Exit bank Button
            //the button part
            if (mouseX > 2 && mouseX < 2 + 148 && mouseY > 529 && mouseY < 529 + 20)
            {
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();

                if (clicked == true)
                {
                    clicked = false;
                    lowBar = "information";
                    gameState = "active";
                }
            }
            else
            {
                XXX.beginPath();
                XXX.fillStyle = "E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();
            }
            //the text part
            XXX.font = "bold 14px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Exit Beast Journal", 75, 543);

            //DISPLAY PLAYER'S INVENTORY
            this.showBeastBar = function()
            {
                // each inventory slot is a list with three things in it... [Item, quantity]
                for (var i = 0; i < beastJournal.length; i++)
                {

                    LXX.beginPath();
                    LXX.lineWidth = 2;
                    LXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                    LXX.strokeStyle ="black";
                    LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                    LXX.fill();
                    LXX.stroke();
                    LXX.save();
                    LXX.translate(invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                    var picture;
                    if (beastJournal[i].image[0] == "verse")
                    {
                        picture = verse;
                    }
                    else if (beastJournal[i].image[0] == "polypol")
                    {
                        picture = polypol;
                    }
                    else if (beastJournal[i].image[0] == "polpol")
                    {
                        picture = polpol;
                    }
                    else if (beastJournal[i].image[0] == "oldverse")
                    {
                        picture = oldverse;
                    }
                    else if (beastJournal[i].image[0] == "freeverse")
                    {
                        picture = freeverse;
                    }
                    else if (beastJournal[i].image[0] == "theCrack")
                    {
                        picture = theCrack;
                    }
                    else if (beastJournal[i].image[0] == "polyPNG")
                    {
                        picture = polyPNG;
                    }
                    else if (beastJournal[i].image[0] == "mofu")
                    {
                        picture = mofu;
                    }
                    else if (beastJournal[i].image[0] == "poly")
                    {
                        picture = poly;
                    }
                    else if (beastJournal[i].image[0] == "mufmuf")
                    {
                        picture = mufmuf;
                    }
                    else if (beastJournal[i].image[0] == "lodo")
                    {
                        picture = lodo;
                    }
                    else if (beastJournal[i].image[0] == "furr")
                    {
                        picture = furr;
                    }
                    //sourcing image from list: //this list is of all the beasts your character learns about in the world.
                    //beastJournal List -- each element in which is an object.
                    //              IMG                         Start X                    Start Y                  Width                      Height                        Centering X            +  Adjust X                            Centering Y          +        Adjust Y                   SizeX                    SizeY
                    LXX.drawImage(picture, beastJournal[i].image[1], beastJournal[i].image[2], beastJournal[i].image[3], beastJournal[i].image[4], -1/2 * beastJournal[i].image[7] + beastJournal[i].image[5], -1/2 * beastJournal[i].image[8] + beastJournal[i].image[6], beastJournal[i].image[7], beastJournal[i].image[8]);
                    LXX.restore();
                }

                //left scroll arrow
                LXX.beginPath();
                LXX.lineWidth = 1;
                LXX.fillStyle ="darkGrey";
                LXX.strokeStyle ="black";
                LXX.rect(0.5, 0.5, 20, 79);
                LXX.fill();
                LXX.stroke();
                LXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                //right scroll arrow
                LXX.beginPath();
                LXX.lineWidth=1;
                LXX.fillStyle ="darkGrey";
                LXX.strokeStyle ="black";
                LXX.rect(1379.5, 0.5, 20, 79);
                LXX.fill();
                LXX.stroke();
                LXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
            };

            //Show Beast Stats
            this.showBeastStats = function()
            {
                var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                for (var i = -this.inventoryPosition; i < beastJournal.length - this.inventoryPosition; i++)
                {
                    listOfInvX1Coords.push(20.5 + (79 * i));
                }


                var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                for (var i = -this.inventoryPosition; i < beastJournal.length - this.inventoryPosition; i++)
                {
                    listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                }


                var invY1Coord = 0.5; //This doesn't change.


                var invY2Coord = 79.5; //this is just Y + 79

                for (var i = beastJournal.length - 1; i > -1; i--)
                {
                    if (lMouseX >= 21 && lMouseX <= 1329) //This checks if the mouse is between the scroll buttons rather than on them.
                    {
                        if (lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord)
                        {
                            console.log("true");
                        }
                        else
                        {
                            console.log("false");
                        }
                        if (clickReleased == true && lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord && this.REQB == false) //When you click on a beast it shows you its information.
                        {
                            clickReleased = false;
                            showBeastStat = i;
                        }
                    }
                }

                if (showBeastStat != -1) //Show the stats of the clicked on beast in the list
                {
                    //The Name of the Beast
                    XXX.font = "bold 42px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText(beastJournal[showBeastStat].name, 1/2 * CCC.width, 50);

                    for (var i = 0; i < beastJournal[showBeastStat].description.length; i++)
                    {
                        //The description of the Beast
                        XXX.font = "bold 20px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText(beastJournal[showBeastStat].description[i], 1/2 * CCC.width, 85 + (i * 25));
                    }

                    //FIRST ROW
                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Health: " + beastJournal[showBeastStat].health, 4, 25 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Armour: " + beastJournal[showBeastStat].armour, 224, 25 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Damage: " + beastJournal[showBeastStat].damage, 444, 25 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Armour Negation: " + beastJournal[showBeastStat].negate, 664, 25 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Ability: " + beastJournal[showBeastStat].ability, 944, 25 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Fire-Proofing: " + beastJournal[showBeastStat].fireProof, 1204, 25 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //SECOND ROW
                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Habitat: " + beastJournal[showBeastStat].habitat, 4, 100 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Variety: " + beastJournal[showBeastStat].alpha, 364, 100 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Longest Range of Sight: " + beastJournal[showBeastStat].sight, 624, 100 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Magic-Proofing: " + beastJournal[showBeastStat].magicProof, 944, 100 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Vital Area Radius: " + beastJournal[showBeastStat].size, 1174, 100 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //THIRD ROW
                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Movement Speed: " + beastJournal[showBeastStat].speed, 4, 175 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Rotation Speed: " + beastJournal[showBeastStat].rotation, 304, 175 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Attack Rate: " + beastJournal[showBeastStat].rate, 604, 175 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));

                    //The description of the Beast
                    XXX.font = "bold 20px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Experience Earned For Killing: " + beastJournal[showBeastStat].experience, 944, 175 + ( 85 + (beastJournal[showBeastStat].description.length * 25)));
                }
            };

            this.beastBarScrolling = function()
            {
                //When the left inventory scroll is clicked scroll one to the left if there is one to the left otherwise don't.
                if (this.inventoryPosition < beastJournal.length && lMouseX > 1379.5 && lMouseX < 1399.5 && lMouseY > 0.5 && lMouseY < 80 && clickReleased == true) //this (20.5, 0.5, 79, 79) is the position the first in the list will be in if the left scroll will not work.
                {
                    clickReleased = false;
                    this.timeSinceLastScrolled = new Date().getTime();
                    invScroll -= 79;
                    this.inventoryPosition += 1;
                }

                //When the right inventory scroll is clicked scroll one to the right if there is one to the right otherwise don't.
                if (this.inventoryPosition > 0 && lMouseX > 0.5 && lMouseX < 20.5 && lMouseY > 0.5 && lMouseY < 80 && clickReleased == true)
                {
                    clickReleased = false;
                    this.timeSinceLastScrolled = new Date().getTime();
                    invScroll += 79;
                    this.inventoryPosition -= 1;
                }
            };

            this.beastBarScrolling();
            this.showBeastBar();
            this.showBeastStats();
        }
    };

    //QUEST LOG
    this.displayQuestLog = function()
    {
        if (lowBar == "questLog")
        {
            //MAIN BACKGROUND
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(1, 1, 1398, 526);
            XXX.fill();
            XXX.stroke();

            //Fame Box
            if (mouseX > 2 && mouseX < 2 + 148 && mouseY > 529 && mouseY < 529 + 20)
            {
                XXX.beginPath();
                XXX.fillStyle = "white";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();

                //the text part
                XXX.font = "bold 14px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(player.fame, 75, 543);
            }
            else
            {
                XXX.beginPath();
                XXX.fillStyle = "E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();

                //the text part
                XXX.font = "bold 14px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Fame", 75, 543);
            }

            //low bar controls which quests you see.
            if (lMouseY > 0 && lMouseY < 80)
            {
                if (clicked)
                {
                    clicked = false;

                    questScroll = 0;

                    if (quests.questMenu == "active")
                    {
                        quests.questMenu = "complete";
                    }
                    else if (quests.questMenu == "complete")
                    {
                        quests.questMenu = "active";
                    }
                }
            }

            if (quests.questMenu == "active")
            {
                //the text
                LXX.font = "bold 46px Book Antiqua";
                LXX.fillStyle = "black";
                LXX.textAlign = "center";
                LXX.fillText("Active Quests ( " + quests.activeQuests.length + " )", 1398 / 2, 55);
            }
            else if (quests.questMenu == "complete")
            {
                //the text
                LXX.font = "bold 46px Book Antiqua";
                LXX.fillStyle = "black";
                LXX.textAlign = "center";
                LXX.fillText("Completed Quests ( " + quests.completeQuests.length + " )", 1398 / 2, 55);
            }

            this.questScrolling = function()
            {
                //scroll arrows /\  \/
                XXX.save();
                XXX.translate(700, 11);
                XXX.rotate(1/2 * Math.PI);
                //XXX.drawImage(polyPNG, 1, 735, 11, 30, 0 - 1/2 * 12 * 2, 0 - 1/2 * 64 * 2, 12 * 2, 64 * 2);
                XXX.drawImage(polyPNG, 1, 735, 11, 30, 0 - 1/2 * 12, 0 - 1/2 * 64, 12, 64);
                XXX.restore();

                XXX.save();
                XXX.translate(700, 517);
                XXX.rotate(- 1/2 * Math.PI);
                //XXX.drawImage(polyPNG, 1, 735, 11, 30, 0 - 1/2 * 12  * 2, 0 - 1/2 * 64  * 2, 12 * 2, 64 * 2);
                XXX.drawImage(polyPNG, 1, 735, 11, 30, 0 - 1/2 * 12, 0 - 1/2 * 64, 12, 64);
                XXX.restore();

                var currentQuestMenuLength;
                if (quests.questMenu == "active")
                {
                    currentQuestMenuLength = quests.activeQuests.length;
                }
                else if (quests.questMenu == "complete")
                {
                    currentQuestMenuLength = quests.completeQuests.length;
                }

                if (mouseX > (700 - 64) && mouseX < (700 + 64) && mouseY > 13 - 12 && mouseY < 13 + 12 && clicked && questScroll > 0)
                {
                    clicked = false;
                    questScroll -= 1;
                }
                else if (mouseX > (700 - 64) && mouseX < (700 + 64) && mouseY > 515 - 12 && mouseY < 515 + 12 && clicked && questScroll + 12 < currentQuestMenuLength)
                {
                    clicked = false;
                    questScroll += 1;
                }
            };

            this.buildQuestList = function()
            {
                if (quests.questMenu == "active")
                {
                    for (var i = 0; i < quests.activeQuests.length; i ++)
                    {
                        if ((i - questScroll) >= 0 && (i - questScroll) <= 11)
                        {
                            if (mouseY > 50 + (36 * i) - (questScroll * 36) && mouseY < 50 + (36 * i) - (questScroll * 36) + 36)
                            {
                                XXX.beginPath();
                                XXX.fillStyle = "gold";
                                XXX.strokeStyle = "black";
                                XXX.lineWidth = 2;
                                XXX.rect(1, 50 + (36 * i) - (questScroll * 36), 1398, 36);
                                XXX.fill();
                                XXX.stroke();

                                //the text
                                XXX.font = "bold 18px Book Antiqua";
                                XXX.fillStyle = "black";
                                XXX.textAlign = "center";
                                XXX.fillText(quests.activeQuests[i].description, 1398 / 2, 50 + (36 * i) - (questScroll * 36) + 23.5);
                            }
                            else
                            {
                                XXX.beginPath();
                                XXX.fillStyle = "white";
                                XXX.strokeStyle = "black";
                                XXX.lineWidth = 2;
                                XXX.rect(1, 50 + (36 * i) - (questScroll * 36), 1398, 36);
                                XXX.fill();
                                XXX.stroke();

                                //the text
                                XXX.font = "bold 26px Book Antiqua";
                                XXX.fillStyle = "black";
                                XXX.textAlign = "center";
                                XXX.fillText(quests.activeQuests[i].name, 1398 / 2, 50 + (36 * i) - (questScroll * 36) + 27);
                            }
                        }
                    }
                }
                else if (quests.questMenu == "complete")
                {
                    for (var i = 0; i < quests.completeQuests.length; i ++)
                    {
                        if ((i - questScroll) >= 0 && (i - questScroll) <= 11)
                        {
                            if (mouseY > 50 + (36 * i) - (questScroll * 36) && mouseY < 50 + (36 * i) - (questScroll * 36) + 36)
                            {
                                XXX.beginPath();
                                XXX.fillStyle = "gold";
                                XXX.strokeStyle = "black";
                                XXX.lineWidth = 2;
                                XXX.rect(1, 50 + (36 * i) - (questScroll * 36), 1398, 36);
                                XXX.fill();
                                XXX.stroke();

                                //the text
                                XXX.font = "bold 18px Book Antiqua";
                                XXX.fillStyle = "black";
                                XXX.textAlign = "center";
                                XXX.fillText(quests.completeQuests[i].description, 1398 / 2, 50 + (36 * i) - (questScroll * 36) + 23.5);
                            }
                            else
                            {
                                XXX.beginPath();
                                XXX.fillStyle = "white";
                                XXX.strokeStyle = "black";
                                XXX.lineWidth = 2;
                                XXX.rect(1, 50 + (36 * i) - (questScroll * 36), 1398, 36);
                                XXX.fill();
                                XXX.stroke();

                                //the text
                                XXX.font = "bold 26px Book Antiqua";
                                XXX.fillStyle = "black";
                                XXX.textAlign = "center";
                                XXX.fillText(quests.completeQuests[i].name, 1398 / 2, 50 + (36 * i) - (questScroll * 36) + 27);
                            }
                        }
                    }
                }
            };

            this.questCompleter = function() //if there is a quest of the same name in the complete quests lists as in the active list it will delete the one in the active list.
            {
                var hit = -1;
                for (var i = 0; i < quests.completeQuests.length; i++)
                {
                    for (var j = 0; j < quests.activeQuests.length; j++)
                    {
                        if (quests.activeQuests[j].name == quests.completeQuests[i].name)
                        {
                            hit = j;
                            break;
                        }
                    }
                }

                if (hit >= 0)
                {
                    quests.activeQuests.splice(hit, 1);
                }
            };

            this.questCompleter();
            this.questScrolling();
            this.buildQuestList();
        }
    };

    //BANKING
    this.displayBank = function()
    {
        if (lowBar == "bank")
        {
            //MAIN BACKGROUND
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(1, 1, 1398, 526);
            XXX.fill();
            XXX.stroke();

            //Exit bank Button
            //the button part
            if (mouseX > 2 && mouseX < 2 + 148 && mouseY > 529 && mouseY < 529 + 20)
            {
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();

                if (clicked == true)
                {
                    clicked = false;
                    lowBar = "information";
                    gameState = "active";
                }
            }
            else
            {
                XXX.beginPath();
                XXX.fillStyle = "E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();
            }
            //the text part
            XXX.font = "bold 14px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Exit Bank", 75, 543);

            //line between bank account and description
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 2;
            XXX.moveTo(0, 80);
            XXX.lineTo(1400, 80);
            XXX.stroke();

            //DISPLAY PLAYER'S INVENTORY
            this.displayCustomerInventory = function()
            {
                // each inventory slot is a list with three things in it... [Item, quantity]
                for (var i = 0; i < Inventory.length; i++)
                {
                    if (Inventory[i][0].equipped == true)
                    {
                        LXX.beginPath();
                        LXX.lineWidth = 2;
                        LXX.fillStyle ="rgba(102, 255, 102, 0.35)";
                        LXX.strokeStyle ="black";
                        LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                        LXX.fill();
                        LXX.stroke();
                        Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                        //quantity
                        LXX.font="16px Book Antiqua";
                        LXX.textAlign="left";
                        LXX.fillStyle ="black";
                        if (Inventory[i][1] < 1000)
                        {
                            LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                        {
                            LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000000)
                        {
                            LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        //weight
                        LXX.font="10px Book Antiqua";
                        LXX.fillStyle ="black";
                        LXX.textAlign="right";
                        LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                        LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                    }
                    else
                    {
                        LXX.beginPath();
                        LXX.lineWidth = 2;
                        LXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                        LXX.strokeStyle ="black";
                        LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                        LXX.fill();
                        LXX.stroke();
                        Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                        //quantity
                        LXX.font="16px Book Antiqua";
                        LXX.textAlign="left";
                        LXX.fillStyle ="black";
                        if (Inventory[i][1] < 1000)
                        {
                            LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                        {
                            LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000000)
                        {
                            LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        //weight
                        LXX.font="10px Book Antiqua";
                        LXX.fillStyle ="black";
                        LXX.textAlign="right";
                        LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                        LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                    }
                }

                //left scroll arrow
                LXX.beginPath();
                LXX.lineWidth = 1;
                LXX.fillStyle ="darkGrey";
                LXX.strokeStyle ="black";
                LXX.rect(0.5, 0.5, 20, 79);
                LXX.fill();
                LXX.stroke();
                LXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                //weight display
                LXX.beginPath();
                LXX.fillStyle ="lightGray";
                LXX.strokeStyle ="black";
                LXX.rect(1329.5, 0.1, 50, 79.8);
                LXX.fill();
                LXX.stroke();
                //Draw a cover on the weight display to represent the amount of carry weight filled.
                LXX.beginPath();
                //LXX.fillStyle ="rgba(255, 255, 255, 0.65)"; //white fill in colour
                //LXX.fillStyle ="rgba(139, 134, 78, 0.8)"; //beige fill in colour
                //LXX.fillStyle = "rgba(138, 54, 15, 0.65)"; //burnt sienna colour
                LXX.fillStyle ="grey";
                LXX.rect(1329.6, 79.5, 50, -79 * this.carryWeight / this.carryWeightMAX);
                LXX.fill();
                //Draw the weight number on the top and bottom and the deviding bar.
                LXX.font="16px Book Antiqua";
                LXX.fillStyle = "black";
                LXX.textAlign="center";
                LXX.fillText(JSON.stringify(Math.floor(this.carryWeight)), 1352, 25);
                //dividing line
                LXX.beginPath();
                LXX.strokeStyle="black";
                LXX.lineWidth=3;
                LXX.moveTo(1334, 39.5);
                LXX.lineTo(1374, 39.5);
                LXX.stroke();
                //divisor
                LXX.font="16px Book Antiqua";
                LXX.fillStyle = "black";
                LXX.textAlign="center";
                LXX.fillText(JSON.stringify(Math.floor(this.carryWeightMAX)), 1352, 64.5);
                LXX.textAlign="left"; //this is to reset it to the standard for the rest to come.

                //right scroll arrow
                LXX.beginPath();
                LXX.lineWidth=1;
                LXX.fillStyle ="darkGrey";
                LXX.strokeStyle ="black";
                LXX.rect(1379.5, 0.5, 20, 79);
                LXX.fill();
                LXX.stroke();
                LXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
            };

            //
            //THE INVENTORY's SCROLLING IS LEAKING INTO BOTH SHOP AND BANK SYSTEMS So an extra inventory scroll is not needed here.
            //

            //DISPLAY BANK ACCOUNT
            this.displayBankAccount = function()
            {
                // each inventory slot is a list with three things in it... [Item, quantity]
                for (var i = 0; i < bankSlots; i++)
                {
                    XXX.beginPath();
                    XXX.lineWidth = 2;
                    XXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                    XXX.strokeStyle ="black";
                    XXX.rect(bankScroll + 20.5 + (79 * i), 0.5, 79, 79);
                    XXX.fill();
                    XXX.stroke();
                    if (i < bankAccount.length)
                    {
                        //image
                        bankAccount[i][0].drawShopCraftItem(bankAccount[i][0].type, bankScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                        //quantity
                        XXX.font="16px Book Antiqua";
                        XXX.textAlign="left";
                        XXX.fillStyle ="black";
                        if (bankAccount[i][1] < 1000)
                        {
                            XXX.fillText(bankAccount[i][1], bankScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (bankAccount[i][1] >= 1000 && bankAccount[i][1] < 1000000)
                        {
                            XXX.fillText(Math.floor(bankAccount[i][1] / 1000) + "K", bankScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (bankAccount[i][1] >= 1000000)
                        {
                            XXX.fillText((Math.floor(bankAccount[i][1] / 100000) / 10) + "M", bankScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        //weight
                        XXX.font="10px Book Antiqua";
                        XXX.fillStyle ="black";
                        XXX.textAlign="right";
                        XXX.fillText("W:" + bankAccount[i][0].weight, bankScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                        XXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                    }
                }

                //left scroll arrow
                XXX.beginPath();
                XXX.lineWidth = 1;
                XXX.fillStyle ="darkGrey";
                XXX.strokeStyle ="black";
                XXX.rect(0.5, 0.5, 20, 79);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                //right scroll arrow
                XXX.beginPath();
                XXX.lineWidth=1;
                XXX.fillStyle ="darkGrey";
                XXX.strokeStyle ="black";
                XXX.rect(1379.5, 0.5, 20, 79);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
            };

            this.bankAccountScrolling = function()
            {
                //When the left inventory scroll is clicked scroll one to the left if there is one to the left otherwise don't.
                if (this.bankPosition < bankSlots && mouseX > 1379.5 && mouseX < 1399.5 && mouseY > 0.5 && mouseY < 80 && clickReleased == true) //this (20.5, 0.5, 79, 79) is the position the first in the list will be in if the left scroll will not work.
                {
                    clickReleased = false;
                    bankScroll -= 79;
                    this.bankPosition += 1;
                }

                //When the right inventory scroll is clicked scroll one to the right if there is one to the right otherwise don't.
                if (this.bankPosition > 0 && mouseX > 0.5 && mouseX < 20.5 && mouseY > 0.5 && mouseY < 80 && clickReleased == true)
                {
                    clickReleased = false;
                    bankScroll += 79;
                    this.bankPosition -= 1;
                }
            };

            this.customerInventoryInteract = function()
            {
                var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                for (var i = -this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
                {
                    listOfInvX1Coords.push(20.5 + (79 * i));
                }


                var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                for (var i = -this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
                {
                    listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                }


                var invY1Coord = 0.5; //This doesn't change.


                var invY2Coord = 79.5; //this is just Y + 79

                for (var i = Inventory.length - 1; i > -1; i--)
                {
                    if (lMouseX >= 21 && lMouseX <= 1329) //This checks if the mouse is between the scroll buttons rather than on them.
                    {
                        if (clickReleased == true && lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord && this.REQB == false) //When you click on an item you either access its utility or you equip it.
                        {
                            clickReleased = false;
                            if (Inventory[i][0].equipped == false)
                            {
                                var gotIn = false;
                                var deletion = false;
                                var deleteNum = -1;
                                for (var j = bankAccount.length - 1; j > -1; j--)
                                {
                                    //console.log("i: " + i + " j: " + j + " bankAccount.length: " + bankAccount.length + " Inventory.length: " + Inventory.length);
                                    //console.log("bank: " + bankAccount[j]);
                                    //console.log("Inv: " + Inventory[i][0]);
                                    if (bankAccount[j][0].type == Inventory[i][0].type)
                                    {
                                        gotIn = true;
                                        if (altKey)
                                        {
                                            altKey = false;
                                            var amount = prompt("Enter the amount you would like to deposit.");
                                            var amountt = 0;
                                            if (amount != "")
                                            {
                                                amountt = JSON.parse(amount);
                                            }

                                            if (amountt != 0)
                                            {
                                                if (Inventory[i][1] - amountt <= 0)
                                                {
                                                    if (Inventory[i][1] - amountt == 0 && amountt != 0)
                                                    {
                                                        bankAccount[j][1] += amountt;
                                                        deletion = true;
                                                        deleteNum = i;
                                                        //Inventory.splice(i, 1);
                                                    }
                                                }
                                                else
                                                {
                                                    bankAccount[j][1] += amountt;
                                                    Inventory[i][1] -= amountt;
                                                }
                                            }

                                        }
                                        else if (shiftKey)
                                        {
                                            bankAccount[j][1] += Inventory[i][1];
                                            deletion = true;
                                            deleteNum = i;
                                            //Inventory.splice(i, 1);
                                        }
                                        else
                                        {
                                            bankAccount[j][1] += 1;
                                            if (Inventory[i][1] - 1 < 1)
                                            {
                                                deletion = true;
                                                deleteNum = i;
                                                //Inventory.splice(i, 1);
                                            }
                                            else
                                            {
                                                Inventory[i][1] -= 1;
                                            }
                                        }
                                    }
                                }
                                if (gotIn == false)
                                {
                                    if (bankAccount.length < bankSlots)
                                    {
                                        var invenType = Inventory[i][0].type;
                                        if (altKey)
                                        {
                                            altKey = false;
                                            var amount = prompt("Enter the amount you would like to deposit.");
                                            var amountt = 0;
                                            if (amount != "")
                                            {
                                                amountt = JSON.parse(amount);
                                            }

                                            if (amountt != 0)
                                            {
                                                if (Inventory[i][1] - amountt <= 0)
                                                {
                                                    if (Inventory[i][1] - amountt == 0)
                                                    {
                                                        bankAccount.push([new Item(invenType, false, false), amountt]);
                                                        deletion = true;
                                                        deleteNum = i;
                                                        //Inventory.splice(i, 1);
                                                    }
                                                }
                                                else
                                                {
                                                    bankAccount.push([new Item(invenType, false, false), amountt]);
                                                    Inventory[i][1] -= amountt;
                                                }
                                            }

                                        }
                                        else if (shiftKey)
                                        {
                                            bankAccount.push([new Item(invenType, false, false), Inventory[i][1]]);
                                            deletion = true;
                                            deleteNum = i;
                                            //Inventory.splice(i, 1);
                                        }
                                        else
                                        {
                                            bankAccount.push([new Item(invenType, false, false), 1]);
                                            if (Inventory[i][1] - 1 < 1)
                                            {
                                                deletion = true;
                                                deleteNum = i;
                                                //Inventory.splice(i, 1);
                                            }
                                            else
                                            {
                                                Inventory[i][1] -= 1;
                                            }
                                        }
                                    }
                                }

                                if (deletion == true)
                                {
                                    deletion = false;
                                    Inventory.splice(deleteNum, 1);
                                }
                            }
                        }
                        else if (lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                        {
                            var sizer = 0;

                            for (var k = 0; k < Inventory[i][0].identity.length; k++)
                            {
                                if (Inventory[i][0].identity[k] == "'")
                                {
                                    sizer += 1;
                                }
                                else if (Inventory[i][0].identity[k].indexOf(' ') != -1)
                                {
                                    sizer += 0;
                                }
                                else if (Inventory[i][0].identity[k] == Inventory[i][0].identity[k].toUpperCase() )
                                {
                                    sizer += 17; //9.21;
                                }
                                else if (Inventory[i][0].identity[k] == Inventory[i][0].identity[k].toLowerCase())
                                {
                                    sizer += 12;
                                }
                            }

                            XXX.beginPath();
                            XXX.fillStyle="white";
                            XXX.fillRect(3, 503, sizer, 22);
                            //The Name of the Item
                            XXX.font = "bold 22px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText(Inventory[i][0].identity, 4, 522);
                        }
                    }
                }
            };

            this.bankAccountInteract = function()
            {
                var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                for (var i = -this.bankPosition; i < bankAccount.length - this.bankPosition; i++)
                {
                    listOfInvX1Coords.push(20.5 + (79 * i));
                }


                var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                for (var i = -this.bankPosition; i < bankAccount.length - this.bankPosition; i++)
                {
                    listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                }


                var invY1Coord = 0.5; //This doesn't change.


                var invY2Coord = 79.5; //this is just Y + 79

                for (var i = bankAccount.length - 1; i > -1; i--)
                {
                    if (mouseX >= 21 && mouseX <= 1329  && mouseY < 80) //This checks if the mouse is between the scroll buttons rather than on them.
                    {
                        if (clickReleased == true && mouseX > listOfInvX1Coords[i] && mouseX < listOfInvX2Coords[i] && mouseY > invY1Coord && mouseY < invY2Coord && this.REQB == false)
                        {
                            clickReleased = false;
                            var gotIn = false;
                            for (var j = Inventory.length - 1; j > -1; j--)
                            {
                                //console.log("i: " + i + " j: " + j + "bankAccount.length: " + bankAccount.length);
                                //console.log("bank: " + bankAccount[i]);
                                //console.log("Inv: " + Inventory[j][0]);
                                if (bankAccount[i][0].type == Inventory[j][0].type)
                                {
                                    gotIn = true;
                                    if (altKey)
                                    {
                                        altKey = false;
                                        var amount = prompt("Enter the amount you would like to withdraw.");
                                        var amountt = 0;
                                        if (amount != "")
                                        {
                                            amountt = JSON.parse(amount);
                                        }

                                        if (amountt != 0)
                                        {
                                            if (bankAccount[i][1] - amountt <= 0)
                                            {
                                                if (bankAccount[i][1] - amountt == 0)
                                                {
                                                    Inventory[j][1] += amountt;
                                                    bankAccount.splice(i, 1);
                                                    break;
                                                }
                                            }
                                            else
                                            {
                                                Inventory[j][1] += amountt;
                                                bankAccount[i][1] -= amountt;
                                            }
                                        }

                                    }
                                    else if (shiftKey)
                                    {
                                        Inventory[j][1] += bankAccount[i][1];
                                        bankAccount.splice(i, 1);
                                        break;
                                    }
                                    else
                                    {
                                        Inventory[j][1] += 1;
                                        if (bankAccount[i][1] - 1 < 1)
                                        {
                                            bankAccount.splice(i, 1);
                                            break;
                                        }
                                        else
                                        {
                                            bankAccount[i][1] -= 1;
                                        }
                                    }
                                }
                            }

                            if (gotIn == false)
                            {
                                var invenType = bankAccount[i][0].type;
                                if (altKey)
                                {
                                    altKey = false;
                                    var amount = prompt("Enter the amount you would like to withdraw.");
                                    var amountt = 0;
                                    if (amount != "")
                                    {
                                        amountt = JSON.parse(amount);
                                    }

                                    if (amountt != 0)
                                    {
                                        if (bankAccount[i][1] - amountt <= 0)
                                        {
                                            if (bankAccount[i][1] - amountt == 0 && amountt != 0)
                                            {
                                                Inventory.push([new Item(invenType, false, false), amountt]);
                                                bankAccount.splice(i, 1);
                                            }
                                        }
                                        else
                                        {
                                            Inventory.push([new Item(invenType, false, false), amountt]);
                                            bankAccount[i][1] -= amountt;
                                        }
                                    }

                                }
                                else if (shiftKey)
                                {
                                    Inventory.push([new Item(invenType, false, false), bankAccount[i][1]]);
                                    bankAccount.splice(i, 1);
                                }
                                else
                                {
                                    Inventory.push([new Item(invenType, false, false), 1]);
                                    if (bankAccount[i][1] - 1 < 1)
                                    {
                                        bankAccount.splice(i, 1);
                                    }
                                    else
                                    {
                                        bankAccount[i][1] -= 1;
                                    }
                                }
                            }
                        }
                        else if (mouseX > listOfInvX1Coords[i] && mouseX < listOfInvX2Coords[i] && mouseY > invY1Coord && mouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                        {
                            var sizer = 0;

                            for (var k = 0; k < bankAccount[i][0].identity.length; k++)
                            {
                                if (bankAccount[i][0].identity[k] == "'")
                                {
                                    sizer += 1;
                                }
                                else if (bankAccount[i][0].identity[k].indexOf(' ') != -1)
                                {
                                    sizer += 0;
                                    console.log("space");
                                }
                                else if (bankAccount[i][0].identity[k] == bankAccount[i][0].identity[k].toUpperCase() )
                                {
                                    sizer += 17; //9.21;
                                }
                                else if (bankAccount[i][0].identity[k] == bankAccount[i][0].identity[k].toLowerCase())
                                {
                                    sizer += 12;
                                }
                            }

                            XXX.beginPath();
                            XXX.fillStyle="white";
                            XXX.fillRect(3, 82, sizer, 22);
                            //The Name of the Item
                            XXX.font = "bold 22px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                            console.log(bankAccount);
                            XXX.fillText(bankAccount[i][0].identity, 4, 100);
                        }
                    }
                }
            };
            //TITLE
            XXX.font = "bold 60px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
            XXX.fillText("The Golden Glove Banking Company", 1/2 * CCC.width, 152.5);
            XXX.font = "bold 60px Book Antiqua";
            XXX.fillStyle = "gold";
            XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
            XXX.fillText("The Golden Glove Banking Company", 1/2 * CCC.width, 155);

            //BUY BANK SLOTS (option 1)
            if (mouseX > 1/2 * CCC.width - 200 && mouseX < 1/2 * CCC.width - 200 + 400 && mouseY > 200 && mouseY < 235)
            {
                XXX.beginPath();
                XXX.lineWidth=4;
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.rect(1/2 * CCC.width - 200, 200, 400, 35);
                XXX.fill();
                XXX.stroke();
                //Text part
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                XXX.fillText(bankSlotCost + " Coins", 1/2 * CCC.width, 228);
                if (clickReleased)
                {
                    clickReleased = false;
                    var paid = false;
                    for (var i = 0; i < Inventory.length; i++)
                    {
                        if (Inventory[i][0].type == "coins" && Inventory[i][1] - bankSlotCost > 0)
                        {
                            Inventory[i][1] -= bankSlotCost;
                            bankSlots += 1;
                            paid = true;
                            break;
                        }
                        else if (Inventory[i][0].type == "coins" && Inventory[i][1] - bankSlotCost == 0)
                        {
                            Inventory.splice(i, 1);
                            bankSlots += 1;
                            paid = true;
                            break;
                        }
                    }
                    if (paid == false)
                    {
                        for (var i = 0; i < bankAccount.length; i++)
                        {
                            if (bankAccount[i][0].type == "coins" && bankAccount[i][1] - bankSlotCost > 0)
                            {
                                bankAccount[i][1] -= bankSlotCost;
                                bankSlots += 1;
                                paid = true;
                                break;
                            }
                            else if (bankAccount[i][0].type == "coins" && bankAccount[i][1] - bankSlotCost == 0)
                            {
                                bankAccount.splice(i, 1);
                                bankSlots += 1;
                                paid = true;
                                break;
                            }
                        }
                    }
                }
            }
            else
            {
                XXX.beginPath();
                XXX.lineWidth=4;
                XXX.fillStyle = "#ffbf00";
                XXX.strokeStyle = "black";
                XXX.rect(1/2 * CCC.width - 200, 200, 400, 35);
                XXX.fill();
                XXX.stroke();
                //Text part
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                XXX.fillText("Purchase a Banking Slot", 1/2 * CCC.width, 226);
            }

            this.bankSlotPricer = function()
            {
                if (bankSlots == 1)
                {
                    bankSlotCost = 25;
                }
                else if (bankSlots == 2)
                {
                    bankSlotCost = 50;
                }
                else if (bankSlots == 3)
                {
                    bankSlotCost = 75;
                }
                else if (bankSlots == 4)
                {
                    bankSlotCost = 100;
                }
                else if (bankSlots == 5)
                {
                    bankSlotCost = 150;
                }
                else if (bankSlots == 6)
                {
                    bankSlotCost = 200;
                }
                else if (bankSlots == 7)
                {
                    bankSlotCost = 250;
                }
                else if (bankSlots == 8)
                {
                    bankSlotCost = 300;
                }
                else if (bankSlots >= 9)
                {
                    bankSlotCost = 350;
                }
            };

            this.bankAccountInteract();
            this.customerInventoryInteract();
            this.displayBankAccount();
            this.bankAccountScrolling();
            this.displayCustomerInventory();
            this.bankSlotPricer();
        }
    };

    //SAVE SLOTS
    this.displaySaves = function()
    {
        if (lowBar == "save")
        {
            //box 1
            LXX.beginPath();
            LXX.fillStyle = "lightGrey";
            LXX.lineWidth=2;
            LXX.strokeStyle = "black";
            LXX.rect(1, 1, 175 - 2, 78);
            LXX.fill();
            LXX.stroke();
            //text
            LXX.fillStyle = "black";
            LXX.textAlign ="center";
            var getSaveData = localStorage.getItem("save1");
            var getData = "none";
            var dataList = [];
            //sensing/action
            if (lMouseX > 1 && lMouseX < 175 && lMouseY > 1 && lMouseY < 78)
            {
                loadType = 1;
                if (typeof(getSaveData) != "undefined")
                {
                    getData = JSON.parse(getSaveData);
                    if (getData != null)
                    {
                        dataList = loadList("mainCharacterAccess");
                        LXX.font="bold 16px Book Antiqua";
                        LXX.fillText(dataList[0].name, 87.5, 27);
                        LXX.font="bold 10px Book Antiqua";
                        LXX.fillText("LV: " + dataList[0].level, 87.5, 47);
                        LXX.fillText("MLV: " + dataList[0].magicLevel, 87.5, 60);
                        LXX.fillText("Skill: " + (dataList[0].totalSkillPoints + dataList[0].totalMagicPoints), 87.5, 73);
                    }
                    else
                    {
                        LXX.font="bold 30px Book Antiqua";
                        LXX.fillText("Empty", 87.5, 52);
                    }
                }
                else
                {
                    LXX.font="bold 30px Book Antiqua";
                    LXX.fillText("Empty", 87.5, 52);
                }

                //highlight
                LXX.beginPath();
                LXX.fillStyle = "rgba(255,215,0, 0.35)";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(1, 1, 175 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //save
                if (clicked == true)
                {
                    clicked = false;

                    saveType = 1;

                    popType = "save1";
                    confirmed = false;
                    save1 = null;
                }
            }
            else
            {
                LXX.font="bold 30px Book Antiqua";
                LXX.fillText("Save 1", 87.5, 52);
            }

            //box 2
            LXX.beginPath();
            LXX.fillStyle = "lightGrey";
            LXX.lineWidth=2;
            LXX.strokeStyle = "black";
            LXX.rect(176, 1, 175 - 2, 78);
            LXX.fill();
            LXX.stroke();
            //text
            LXX.fillStyle = "black";
            LXX.textAlign ="center";
            var getSaveData = localStorage.getItem("save2");
            var getData = "none";
            var dataList = [];
            //sensing/action
            if (lMouseX > 176 && lMouseX < 176 + 173 && lMouseY > 1 && lMouseY < 78)
            {
                loadType = 2;
                if (typeof(getSaveData) != "undefined")
                {
                    getData = JSON.parse(getSaveData);
                    if (getData != null)
                    {
                        dataList = loadList("mainCharacterAccess");
                        LXX.font="bold 16px Book Antiqua";
                        LXX.fillText(dataList[0].name, 176 + 87.5, 27);
                        LXX.font="bold 10px Book Antiqua";
                        LXX.fillText("LV: " + dataList[0].level, 176 + 87.5, 47);
                        LXX.fillText("MLV: " + dataList[0].magicLevel, 176 + 87.5, 60);
                        LXX.fillText("Skill: " + (dataList[0].totalSkillPoints + dataList[0].totalMagicPoints), 176 + 87.5, 73);
                    }
                    else
                    {
                        LXX.font="bold 30px Book Antiqua";
                        LXX.fillText("Empty", 176 + 87.5, 52);
                    }
                }
                else
                {
                    LXX.font="bold 30px Book Antiqua";
                    LXX.fillText("Empty", 176 + 87.5, 52);
                }

                //highlight
                LXX.beginPath();
                LXX.fillStyle = "rgba(255,215,0, 0.35)";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(176, 1, 175 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //save
                if (clicked == true)
                {
                    clicked = false;

                    saveType = 2;

                    popType = "save2";
                    confirmed = false;
                    save2 = null;
                }
            }
            else
            {
                LXX.font="bold 30px Book Antiqua";
                LXX.fillText("Save 2", 176 + 87.5, 52);
            }

            //box 3
            LXX.beginPath();
            LXX.fillStyle = "lightGrey";
            LXX.lineWidth=2;
            LXX.strokeStyle = "black";
            LXX.rect(351, 1, 175 - 2, 78);
            LXX.fill();
            LXX.stroke();
            //text
            LXX.fillStyle = "black";
            LXX.textAlign ="center";
            var getSaveData = localStorage.getItem("save3");
            var getData = "none";
            var dataList = [];
            //sensing/action
            if (lMouseX > 351 && lMouseX < 351 + 173 && lMouseY > 1 && lMouseY < 78)
            {
                loadType = 3;
                if (typeof(getSaveData) != "undefined")
                {
                    getData = JSON.parse(getSaveData);
                    if (getData != null)
                    {
                        dataList = loadList("mainCharacterAccess");
                        LXX.font="bold 16px Book Antiqua";
                        LXX.fillText(dataList[0].name, 351 + 87.5, 27);
                        LXX.font="bold 10px Book Antiqua";
                        LXX.fillText("LV: " + dataList[0].level, 351 + 87.5, 47);
                        LXX.fillText("MLV: " + dataList[0].magicLevel, 351 + 87.5, 60);
                        LXX.fillText("Skill: " + (dataList[0].totalSkillPoints + dataList[0].totalMagicPoints), 351 + 87.5, 73);
                    }
                    else
                    {
                        LXX.font="bold 30px Book Antiqua";
                        LXX.fillText("Empty", 351 + 87.5, 52);
                    }
                }
                else
                {
                    LXX.font="bold 30px Book Antiqua";
                    LXX.fillText("Empty", 351 + 87.5, 52);
                }

                //highlight
                LXX.beginPath();
                LXX.fillStyle = "rgba(255,215,0, 0.35)";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(351, 1, 175 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //save
                if (clicked == true)
                {
                    clicked = false;

                    saveType = 3;

                    popType = "save3";
                    confirmed = false;
                    save3 = null;
                }
            }
            else
            {
                LXX.font="bold 30px Book Antiqua";
                LXX.fillText("Save 3", 351 + 87.5, 52);
            }

            //box 4
            LXX.beginPath();
            LXX.fillStyle = "lightGrey";
            LXX.lineWidth=2;
            LXX.strokeStyle = "black";
            LXX.rect(526, 1, 175 - 2, 78);
            LXX.fill();
            LXX.stroke();
            //text
            LXX.fillStyle = "black";
            LXX.textAlign ="center";
            var getSaveData = localStorage.getItem("save4");
            var getData = "none";
            var dataList = [];
            //sensing/action
            if (lMouseX > 526 && lMouseX < 526 + 173 && lMouseY > 1 && lMouseY < 78)
            {
                loadType = 4;
                if (typeof(getSaveData) != "undefined")
                {
                    getData = JSON.parse(getSaveData);
                    if (getData != null)
                    {
                        dataList = loadList("mainCharacterAccess");
                        LXX.font="bold 16px Book Antiqua";
                        LXX.fillText(dataList[0].name, 526 + 87.5, 27);
                        LXX.font="bold 10px Book Antiqua";
                        LXX.fillText("LV: " + dataList[0].level, 526 + 87.5, 47);
                        LXX.fillText("MLV: " + dataList[0].magicLevel, 526 + 87.5, 60);
                        LXX.fillText("Skill: " + (dataList[0].totalSkillPoints + dataList[0].totalMagicPoints), 526 + 87.5, 73);
                    }
                    else
                    {
                        LXX.font="bold 30px Book Antiqua";
                        LXX.fillText("Empty", 526 + 87.5, 52);
                    }
                }
                else
                {
                    LXX.font="bold 30px Book Antiqua";
                    LXX.fillText("Empty", 526 + 87.5, 52);
                }

                //highlight
                LXX.beginPath();
                LXX.fillStyle = "rgba(255,215,0, 0.35)";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(526, 1, 175 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //save
                if (clicked == true)
                {
                    clicked = false;

                    saveType = 4;

                    popType = "save4";
                    confirmed = false;
                    save4 = null;
                }
            }
            else
            {
                LXX.font="bold 30px Book Antiqua";
                LXX.fillText("Save 4", 526 + 87.5, 52);
            }
            //box 5
            LXX.beginPath();
            LXX.fillStyle = "lightGrey";
            LXX.lineWidth=2;
            LXX.strokeStyle = "black";
            LXX.rect(701, 1, 175 - 2, 78);
            LXX.fill();
            LXX.stroke();
            //text
            LXX.fillStyle = "black";
            LXX.textAlign ="center";
            var getSaveData = localStorage.getItem("save5");
            var getData = "none";
            var dataList = [];
            //sensing/action
            if (lMouseX > 701 && lMouseX < 701 + 173 && lMouseY > 1 && lMouseY < 78)
            {
                loadType = 5;
                if (typeof(getSaveData) != "undefined")
                {
                    getData = JSON.parse(getSaveData);
                    if (getData != null)
                    {
                        dataList = loadList("mainCharacterAccess");
                        LXX.font="bold 16px Book Antiqua";
                        LXX.fillText(dataList[0].name, 701 + 87.5, 27);
                        LXX.font="bold 10px Book Antiqua";
                        LXX.fillText("LV: " + dataList[0].level, 701 + 87.5, 47);
                        LXX.fillText("MLV: " + dataList[0].magicLevel, 701 + 87.5, 60);
                        LXX.fillText("Skill: " + (dataList[0].totalSkillPoints + dataList[0].totalMagicPoints), 701 + 87.5, 73);
                    }
                    else
                    {
                        LXX.font="bold 30px Book Antiqua";
                        LXX.fillText("Empty", 701 + 87.5, 52);
                    }
                }
                else
                {
                    LXX.font="bold 30px Book Antiqua";
                    LXX.fillText("Empty", 701 + 87.5, 52);
                }

                //highlight
                LXX.beginPath();
                LXX.fillStyle = "rgba(255,215,0, 0.35)";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(701, 1, 175 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //save
                if (clicked == true)
                {
                    clicked = false;

                    saveType = 5;

                    popType = "save5";
                    confirmed = false;
                    save5 = null;
                }
            }
            else
            {
                LXX.font="bold 30px Book Antiqua";
                LXX.fillText("Save 5", 701 + 87.5, 52);
            }
            //box 6
            LXX.beginPath();
            LXX.fillStyle = "lightGrey";
            LXX.lineWidth=2;
            LXX.strokeStyle = "black";
            LXX.rect(876, 1, 175 - 2, 78);
            LXX.fill();
            LXX.stroke();
            //text
            LXX.fillStyle = "black";
            LXX.textAlign ="center";
            var getSaveData = localStorage.getItem("save6");
            var getData = "none";
            var dataList = [];
            //sensing/action
            if (lMouseX > 876 && lMouseX < 876 + 173 && lMouseY > 1 && lMouseY < 78)
            {
                loadType = 6;
                if (typeof(getSaveData) != "undefined")
                {
                    getData = JSON.parse(getSaveData);
                    if (getData != null)
                    {
                        dataList = loadList("mainCharacterAccess");
                        LXX.font="bold 16px Book Antiqua";
                        LXX.fillText(dataList[0].name, 876 + 87.5, 27);
                        LXX.font="bold 10px Book Antiqua";
                        LXX.fillText("LV: " + dataList[0].level, 876 + 87.5, 47);
                        LXX.fillText("MLV: " + dataList[0].magicLevel, 876 + 87.5, 60);
                        LXX.fillText("Skill: " + (dataList[0].totalSkillPoints + dataList[0].totalMagicPoints), 876 + 87.5, 73);
                    }
                    else
                    {
                        LXX.font="bold 30px Book Antiqua";
                        LXX.fillText("Empty", 876 + 87.5, 52);
                    }
                }
                else
                {
                    LXX.font="bold 30px Book Antiqua";
                    LXX.fillText("Empty", 876 + 87.5, 52);
                }

                //highlight
                LXX.beginPath();
                LXX.fillStyle = "rgba(255,215,0, 0.35)";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(876, 1, 175 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //save
                if (clicked == true)
                {
                    clicked = false;

                    saveType = 6;

                    popType = "save6";
                    confirmed = false;
                    save6 = null;
                }
            }
            else
            {
                LXX.font="bold 30px Book Antiqua";
                LXX.fillText("Save 6", 876 + 87.5, 52);
            }
            //box 7
            LXX.beginPath();
            LXX.fillStyle = "lightGrey";
            LXX.lineWidth=2;
            LXX.strokeStyle = "black";
            LXX.rect(1051, 1, 175 - 2, 78);
            LXX.fill();
            LXX.stroke();
            //text
            LXX.fillStyle = "black";
            LXX.textAlign ="center";
            var getSaveData = localStorage.getItem("save7");
            var getData = "none";
            var dataList = [];
            //sensing/action
            if (lMouseX > 1051 && lMouseX < 1051 + 173 && lMouseY > 1 && lMouseY < 78)
            {
                loadType = 7;
                if (typeof(getSaveData) != "undefined")
                {
                    getData = JSON.parse(getSaveData);
                    if (getData != null)
                    {
                        dataList = loadList("mainCharacterAccess");
                        LXX.font="bold 16px Book Antiqua";
                        LXX.fillText(dataList[0].name, 1051 + 87.5, 27);
                        LXX.font="bold 10px Book Antiqua";
                        LXX.fillText("LV: " + dataList[0].level, 1051 + 87.5, 47);
                        LXX.fillText("MLV: " + dataList[0].magicLevel, 1051 + 87.5, 60);
                        LXX.fillText("Skill: " + (dataList[0].totalSkillPoints + dataList[0].totalMagicPoints), 1051 + 87.5, 73);
                    }
                    else
                    {
                        LXX.font="bold 30px Book Antiqua";
                        LXX.fillText("Empty", 1051 + 87.5, 52);
                    }
                }
                else
                {
                    LXX.font="bold 30px Book Antiqua";
                    LXX.fillText("Empty", 1051 + 87.5, 52);
                }

                //highlight
                LXX.beginPath();
                LXX.fillStyle = "rgba(255,215,0, 0.35)";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(1051, 1, 175 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //save
                if (clicked == true)
                {
                    clicked = false;

                    saveType = 7;

                    popType = "save7";
                    confirmed = false;
                    save7 = null;
                }
            }
            else
            {
                LXX.font="bold 30px Book Antiqua";
                LXX.fillText("Save 7", 1051 + 87.5, 52);
            }
            //box 8
            LXX.beginPath();
            LXX.fillStyle = "lightGrey";
            LXX.lineWidth=2;
            LXX.strokeStyle = "black";
            LXX.rect(1226, 1, 175 - 2, 78);
            LXX.fill();
            LXX.stroke();
            //text
            LXX.fillStyle = "black";
            LXX.textAlign ="center";
            var getSaveData = localStorage.getItem("save8");
            var getData = "none";
            var dataList = [];
            //sensing/action
            if (lMouseX > 1226 && lMouseX < 1226 + 173 && lMouseY > 1 && lMouseY < 78)
            {
                loadType = 8;
                if (typeof(getSaveData) != "undefined")
                {
                    getData = JSON.parse(getSaveData);
                    if (getData != null)
                    {
                        dataList = loadList("mainCharacterAccess");
                        LXX.font="bold 16px Book Antiqua";
                        LXX.fillText(dataList[0].name, 1226 + 87.5, 27);
                        LXX.font="bold 10px Book Antiqua";
                        LXX.fillText("LV: " + dataList[0].level, 1226 + 87.5, 47);
                        LXX.fillText("MLV: " + dataList[0].magicLevel, 1226 + 87.5, 60);
                        LXX.fillText("Skill: " + (dataList[0].totalSkillPoints + dataList[0].totalMagicPoints), 1226 + 87.5, 73);
                    }
                    else
                    {
                        LXX.font="bold 30px Book Antiqua";
                        LXX.fillText("Empty", 1226 + 87.5, 52);
                    }
                }
                else
                {
                    LXX.font="bold 30px Book Antiqua";
                    LXX.fillText("Empty", 1226 + 87.5, 52);
                }

                //highlight
                LXX.beginPath();
                LXX.fillStyle = "rgba(255,215,0, 0.35)";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(1226, 1, 175 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //save
                if (clicked == true)
                {
                    clicked = false;

                    saveType = 8;

                    popType = "save8";
                    confirmed = false;
                    save8 = null;
                }
            }
            else
            {
                LXX.font="bold 30px Book Antiqua";
                LXX.fillText("Save 8", 1226 + 87.5, 52);
            }
        }
    };

    //SHOP
    this.displayShop = function()
    {
        if (lowBar == "shop")
        {
            //MAIN BACKGROUND
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(1, 1, 1398, 526);
            XXX.fill();
            XXX.stroke();

            //Exit Shop Button
            //the button part
            if (mouseX > 2 && mouseX < 2 + 148 && mouseY > 529 && mouseY < 529 + 20)
            {
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();

                if (clicked == true)
                {
                    clicked = false;
                    lowBar = "information";
                    gameState = "active";
                }
            }
            else
            {
                XXX.beginPath();
                XXX.fillStyle = "E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();
            }
            //the text part
            XXX.font = "bold 14px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Exit Shop", 75, 543);

            //line between inventory and description
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 2;
            XXX.moveTo(0, 80);
            XXX.lineTo(1400, 80);
            XXX.stroke();

            //DISPLAY PLAYER'S INVENTORY
            this.displaySellInventory = function()
            {
                // each inventory slot is a list with three things in it... [Item, quantity]
                for (var i = 0; i < Inventory.length; i++)
                {
                    if (Inventory[i][0].equipped == true)
                    {
                        LXX.beginPath();
                        LXX.lineWidth = 2;
                        LXX.fillStyle ="rgba(102, 255, 102, 0.35)";
                        LXX.strokeStyle ="black";
                        LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                        LXX.fill();
                        LXX.stroke();
                        Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                        //quantity
                        LXX.font="16px Book Antiqua";
                        LXX.textAlign="left";
                        LXX.fillStyle ="black";
                        if (Inventory[i][1] < 1000)
                        {
                            LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                        {
                            LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000000)
                        {
                            LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        //weight
                        LXX.font="10px Book Antiqua";
                        LXX.fillStyle ="black";
                        LXX.textAlign="right";
                        LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                        LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                    }
                    else
                    {
                        LXX.beginPath();
                        LXX.lineWidth = 2;
                        LXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                        LXX.strokeStyle ="black";
                        LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                        LXX.fill();
                        LXX.stroke();
                        Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                        //quantity
                        LXX.font="16px Book Antiqua";
                        LXX.textAlign="left";
                        LXX.fillStyle ="black";
                        if (Inventory[i][1] < 1000)
                        {
                            LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                        {
                            LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000000)
                        {
                            LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        //weight
                        LXX.font="10px Book Antiqua";
                        LXX.fillStyle ="black";
                        LXX.textAlign="right";
                        LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                        LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                    }
                }

                //left scroll arrow
                LXX.beginPath();
                LXX.lineWidth = 1;
                LXX.fillStyle ="darkGrey";
                LXX.strokeStyle ="black";
                LXX.rect(0.5, 0.5, 20, 79);
                LXX.fill();
                LXX.stroke();
                LXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                //weight display
                LXX.beginPath();
                LXX.fillStyle ="lightGray";
                LXX.strokeStyle ="black";
                LXX.rect(1329.5, 0.1, 50, 79.8);
                LXX.fill();
                LXX.stroke();
                //Draw a cover on the weight display to represent the amount of carry weight filled.
                LXX.beginPath();
                //LXX.fillStyle ="rgba(255, 255, 255, 0.65)"; //white fill in colour
                //LXX.fillStyle ="rgba(139, 134, 78, 0.8)"; //beige fill in colour
                //LXX.fillStyle = "rgba(138, 54, 15, 0.65)"; //burnt sienna colour
                LXX.fillStyle ="grey";
                LXX.rect(1329.6, 79.5, 50, -79 * this.carryWeight / this.carryWeightMAX);
                LXX.fill();
                //Draw the weight number on the top and bottom and the deviding bar.
                LXX.font="16px Book Antiqua";
                LXX.fillStyle = "black";
                LXX.textAlign="center";
                LXX.fillText(JSON.stringify(Math.floor(this.carryWeight)), 1352, 25);
                //dividing line
                LXX.beginPath();
                LXX.strokeStyle="black";
                LXX.lineWidth=3;
                LXX.moveTo(1334, 39.5);
                LXX.lineTo(1374, 39.5);
                LXX.stroke();
                //divisor
                LXX.font="16px Book Antiqua";
                LXX.fillStyle = "black";
                LXX.textAlign="center";
                LXX.fillText(JSON.stringify(Math.floor(this.carryWeightMAX)), 1352, 64.5);
                LXX.textAlign="left"; //this is to reset it to the standard for the rest to come.

                //right scroll arrow
                LXX.beginPath();
                LXX.lineWidth=1;
                LXX.fillStyle ="darkGrey";
                LXX.strokeStyle ="black";
                LXX.rect(1379.5, 0.5, 20, 79);
                LXX.fill();
                LXX.stroke();
                LXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
            };

            this.sellInventoryInteract = function()
            {
                var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                for (var i = -this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
                {
                    listOfInvX1Coords.push(20.5 + (79 * i));
                }


                var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                for (var i = -this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
                {
                    listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                }


                var invY1Coord = 0.5; //This doesn't change.


                var invY2Coord = 79.5; //this is just Y + 79

                for (var i = Inventory.length - 1; i > -1; i--)
                {
                    if (lMouseX >= 21 && lMouseX <= 1329) //This checks if the mouse is between the scroll buttons rather than on them.
                    {
                        if (clickReleased == true && lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord && this.REQB == false) //When you click on an item you either access its utility or you equip it.
                        {
                            clickReleased = false;
                            if (Inventory[i][1] - itemAmount >= 0 && Inventory[i][0].type != "coins" && Inventory[i][0].equipped == false)
                            {
                                var badDeal = false;
                                var shifted = 0;
                                var newMoney = -1;
                                var money = -1;
                                var shopMoney = -1;
                                var targetItem = -1; //the item that will be added to the shops inventory.
                                for (var j = shopInventory.length - 1; j > -1; j--)
                                {
                                    if (shopInventory[j][0].type == "coins")
                                    {
                                        shopMoney = j;
                                    }
                                    if (shopInventory[j][0].type == Inventory[i][0].type)
                                    {
                                        targetItem = j;
                                    }
                                }
                                for (var k = Inventory.length - 1; k > -1; k--)
                                {
                                    if (Inventory[k][0].type == "coins")
                                    {
                                        money = k;
                                    }
                                }

                                if (shopMoney != -1)
                                {
                                    if (shopInventory[shopMoney][1] >= Inventory[i][0].sellValue * itemAmount)
                                    {
                                        shopInventory[shopMoney][1] -= Inventory[i][0].sellValue * itemAmount;

                                        if (money != -1)
                                        {
                                            Inventory[money][1] += Inventory[i][0].sellValue * itemAmount;
                                        }
                                        else
                                        {
                                            newMoney = [new Item("coins", false, false), (Inventory[i][0].sellValue * itemAmount)];
                                            Inventory.unshift(newMoney);
                                            money = 0;
                                            shifted = 1;
                                        }

                                        //Item Transference
                                        if (Inventory[i + shifted][1] - itemAmount == 0)
                                        {
                                            if (targetItem != -1)
                                            {
                                                shopInventory[targetItem][1] += itemAmount;
                                            }
                                            else
                                            {
                                                shopInventory.push([Inventory[i + shifted][0], itemAmount]);
                                            }
                                            Inventory.splice(i + shifted, 1);
                                        }
                                        else
                                        {
                                            Inventory[i + shifted][1] -= itemAmount;
                                            if (targetItem != -1)
                                            {
                                                shopInventory[targetItem][1] += itemAmount;
                                            }
                                            else
                                            {
                                                shopInventory.push([Inventory[i + shifted][0], itemAmount]);
                                            }
                                        }

                                        //Since the location may have been altered we need to reset money and shopMoney
                                        for (var j = shopInventory.length - 1; j > -1; j--)
                                        {
                                            if (shopInventory[j][0].type == "coins")
                                            {
                                                shopMoney = j;
                                            }
                                        }
                                        for (var k = Inventory.length - 1; k > -1; k--)
                                        {
                                            if (Inventory[k][0].type == "coins")
                                            {
                                                money = k;
                                            }
                                        }

                                        if (shopInventory[shopMoney][1] <= 0)
                                        {
                                            shopInventory.splice(shopMoney, 1);
                                        }

                                        if (money != -1)
                                        {
                                            console.log(Inventory);
                                            if (Inventory[money][1] <= 0)
                                            {
                                                Inventory.splice(money, 1);
                                            }
                                        }
                                    }
                                    else //If the shop can't afford to buy it you sell it anyway for whatever the shop has left.
                                    {
                                        if (itemAmount > 1)
                                        {
                                            badDeal = confirm("Are you sure you want to sell your " + itemAmount + " " + Inventory[i][0].identity + "s for only " + shopInventory[shopMoney][1] + " coins?");
                                        }
                                        else
                                        {
                                            badDeal = confirm("Are you sure you want to sell your " + Inventory[i][0].identity + " for only " + shopInventory[shopMoney][1] + " coins?");
                                        }


                                        if (badDeal == true)
                                        {
                                            badDeal = shopInventory[shopMoney][1];
                                            shopInventory[shopMoney][1] -= shopInventory[shopMoney][1];

                                            if (money != -1)
                                            {
                                                Inventory[money][1] += badDeal;
                                            }
                                            else
                                            {
                                                newMoney = [new Item("coins", false, false), badDeal];
                                                Inventory.unshift(newMoney);
                                                money = 0;
                                                shifted = 1;
                                            }

                                            //Item Transference
                                            if (Inventory[i + shifted][1] - itemAmount == 0)
                                            {
                                                if (targetItem != -1)
                                                {
                                                    shopInventory[targetItem][1] += itemAmount;
                                                }
                                                else
                                                {
                                                    shopInventory.push([Inventory[i + shifted][0], itemAmount]);
                                                }
                                                Inventory.splice(i + shifted, 1);
                                            }
                                            else
                                            {
                                                Inventory[i + shifted][1] -= itemAmount;
                                                if (targetItem != -1)
                                                {
                                                    shopInventory[targetItem][1] += itemAmount;
                                                }
                                                else
                                                {
                                                    shopInventory.push([Inventory[i + shifted][0], itemAmount]);
                                                }
                                            }

                                            //Since the location may have been altered we need to reset money and shopMoney
                                            for (var j = shopInventory.length - 1; j > -1; j--)
                                            {
                                                if (shopInventory[j][0].type == "coins")
                                                {
                                                    shopMoney = j;
                                                }
                                            }
                                            for (var k = Inventory.length - 1; k > -1; k--)
                                            {
                                                if (Inventory[k][0].type == "coins")
                                                {
                                                    money = k;
                                                }
                                            }

                                            if (shopInventory[shopMoney][1] <= 0)
                                            {
                                                shopInventory.splice(shopMoney, 1);
                                            }

                                            if (money != -1)
                                            {
                                                if (Inventory[money][1] <= 0)
                                                {
                                                    Inventory.splice(money, 1);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                        {
                            //The Name of the Item
                            XXX.font = "bold 60px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText(Inventory[i][0].identity, 1/2 * CCC.width, 140);

                            //Sell Price

                            XXX.font = "bold 140px Book Antiqua";
                            XXX.fillStyle = "gold";
                            XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText(Inventory[i][0].sellValue * itemAmount, 1/2 * CCC.width, 340);

                        }
                    }
                }
            };

            //DISPLAY SHOP INVENTORY
            this.displayMerchandise = function()
            {
                // each inventory slot is a list with three things in it... [Item, quantity]
                for (var i = 0; i < shopInventory.length; i++)
                {
                    XXX.beginPath();
                    XXX.lineWidth = 2;
                    XXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                    XXX.strokeStyle ="black";
                    XXX.rect(merchScroll + 20.5 + (79 * i), 0.5, 79, 79);
                    XXX.fill();
                    XXX.stroke();
                    shopInventory[i][0].drawShopCraftItem(shopInventory[i][0].type, merchScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                    //quantity
                    XXX.font="16px Book Antiqua";
                    XXX.textAlign="left";
                    XXX.fillStyle ="black";
                    if (shopInventory[i][1] < 1000)
                    {
                        XXX.fillText(shopInventory[i][1], merchScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                    }
                    else if (shopInventory[i][1] >= 1000 && shopInventory[i][1] < 1000000)
                    {
                        XXX.fillText(Math.floor(shopInventory[i][1] / 1000) + "K", merchScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                    }
                    else if (shopInventory[i][1] >= 1000000)
                    {
                        XXX.fillText((Math.floor(shopInventory[i][1] / 100000) / 10) + "M", merchScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                    }
                    //weight
                    XXX.font="10px Book Antiqua";
                    XXX.fillStyle ="black";
                    XXX.textAlign="right";
                    XXX.fillText("W:" + shopInventory[i][0].weight, merchScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                    XXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                }

                //left scroll arrow
                XXX.beginPath();
                XXX.lineWidth = 1;
                XXX.fillStyle ="darkGrey";
                XXX.strokeStyle ="black";
                XXX.rect(0.5, 0.5, 20, 79);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                //right scroll arrow
                XXX.beginPath();
                XXX.lineWidth=1;
                XXX.fillStyle ="darkGrey";
                XXX.strokeStyle ="black";
                XXX.rect(1379.5, 0.5, 20, 79);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
            };

            this.merchandiseInteract = function()
            {
                var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                for (var i = -this.merchPosition; i < shopInventory.length - this.merchPosition; i++)
                {
                    listOfInvX1Coords.push(20.5 + (79 * i));
                }


                var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                for (var i = -this.merchPosition; i < shopInventory.length - this.merchPosition; i++)
                {
                    listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                }


                var invY1Coord = 0.5; //This doesn't change.


                var invY2Coord = 79.5; //this is just Y + 79

                for (var i = shopInventory.length - 1; i > -1; i--)
                {
                    if (mouseX >= 21 && mouseX <= 1329  && mouseY < 80) //This checks if the mouse is between the scroll buttons rather than on them.
                    {
                        if (clickReleased == true && mouseX > listOfInvX1Coords[i] && mouseX < listOfInvX2Coords[i] && mouseY > invY1Coord && mouseY < invY2Coord && this.REQB == false)
                        {
                            clickReleased = false;
                            if (shopInventory[i][1] - itemAmount >= 0 && shopInventory[i][0].type != "coins")
                            {
                                var shifted = 0;
                                var newMoney = -1;
                                var money = -1;
                                var shopMoney = -1;
                                var targetItem = -1;
                                for (var j = Inventory.length - 1; j > -1; j--)
                                {
                                    if (Inventory[j][0].type == "coins")
                                    {
                                        money = j;
                                    }
                                    if (Inventory[j][0].type == shopInventory[i][0].type)
                                    {
                                        targetItem = j;
                                    }
                                }
                                for (var k = shopInventory.length - 1; k > -1; k--)
                                {
                                    if (shopInventory[k][0].type == "coins")
                                    {
                                        shopMoney = k;
                                    }
                                }

                                if (money != -1)
                                {
                                    if (Inventory[money][1] >= shopInventory[i][0].buyValue * itemAmount)
                                    {
                                        Inventory[money][1] -= shopInventory[i][0].buyValue * itemAmount;

                                        if (shopMoney != -1)
                                        {
                                            shopInventory[shopMoney][1] += shopInventory[i][0].buyValue * itemAmount;
                                        }
                                        else
                                        {
                                            newMoney = [new Item("coins", false, false), (shopInventory[i][0].buyValue * itemAmount)];
                                            shopInventory.unshift(newMoney);
                                            shopMoney = 0;
                                            shifted = 1;
                                        }

                                        //Item Transference
                                        if (shopInventory[i + shifted][1] - itemAmount == 0)
                                        {
                                            if (targetItem != -1)
                                            {
                                                Inventory[targetItem][1] += itemAmount;
                                            }
                                            else
                                            {
                                                Inventory.push([shopInventory[i + shifted][0], itemAmount]);
                                            }
                                            shopInventory.splice(i + shifted, 1);
                                        }
                                        else
                                        {
                                            shopInventory[i + shifted][1] -= itemAmount;

                                            if (targetItem != -1)
                                            {
                                                Inventory[targetItem][1] += itemAmount;
                                            }
                                            else
                                            {
                                                Inventory.push([shopInventory[i + shifted][0], itemAmount]);
                                            }
                                        }

                                        //Since the location may have been altered we need to reset shopMoney and money
                                        for (var j = Inventory.length - 1; j > -1; j--)
                                        {
                                            if (Inventory[j][0].type == "coins")
                                            {
                                                money = j;
                                            }
                                        }
                                        for (var k = shopInventory.length - 1; k > -1; k--)
                                        {
                                            if (shopInventory[k][0].type == "coins")
                                            {
                                                shopMoney = k;
                                            }
                                        }

                                        if (Inventory[money][1] <= 0)
                                        {
                                            Inventory.splice(money, 1);
                                        }

                                        if (shopMoney != -1)
                                        {
                                            if (shopInventory[shopMoney][1] <= 0)
                                            {
                                                shopInventory.splice(shopMoney, 1);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (mouseX > listOfInvX1Coords[i] && mouseX < listOfInvX2Coords[i] && mouseY > invY1Coord && mouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                        {
                            //The Name of the Item
                            XXX.font = "bold 60px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText(shopInventory[i][0].identity, 1/2 * CCC.width, 140);

                            //Buy Price
                            XXX.font = "bold 140px Book Antiqua";
                            XXX.fillStyle = "gold";
                            XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText(shopInventory[i][0].buyValue * itemAmount, 1/2 * CCC.width, 340);
                        }
                    }
                }
            };

            this.merchandiseScrolling = function()
            {
                //When the left inventory scroll is clicked scroll one to the left if there is one to the left otherwise don't.
                if (this.merchPosition < shopInventory.length && mouseX > 1379.5 && mouseX < 1399.5 && mouseY > 0.5 && mouseY < 80 && clickReleased == true) //this (20.5, 0.5, 79, 79) is the position the first in the list will be in if the left scroll will not work.
                {
                    clickReleased = false;
                    this.timeSinceLastScrolled = new Date().getTime();
                    merchScroll -= 79;
                    this.merchPosition += 1;
                }

                //When the right inventory scroll is clicked scroll one to the right if there is one to the right otherwise don't.
                if (this.merchPosition > 0 && mouseX > 0.5 && mouseX < 20.5 && mouseY > 0.5 && mouseY < 80 && clickReleased == true)
                {
                    clickReleased = false;
                    this.timeSinceLastScrolled = new Date().getTime();
                    merchScroll += 79;
                    this.merchPosition -= 1;
                }
            };

            var selectNumber = 0;

            this.drawAmountSelector = function()
            {
                //Draw Left Scroller
                XXX.drawImage(polyPNG, 1, 735, 11, 30, (1/2 * CCC.width - 40) - 11, 440, 6, 32);
                //Draw Name Display
                XXX.beginPath();
                XXX.fillStyle = "lightGrey";
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.rect((1/2 * CCC.width - 40), 440, 80, 30);
                XXX.fill();
                XXX.stroke();
                //Draw Right Scroller
                XXX.drawImage(polyPNG, 11, 735, 11, 30, (1/2 * CCC.width - 40) + 84, 440, 6, 32);
            };

            this.amountScroll = function()
            {
                //left Scroll
                if (itemAmount > 1 && mouseX < (1/2 * CCC.width - 40) && mouseX >= (1/2 * CCC.width - 40) - 13 && mouseY > 440 && mouseY < 440 + 30 && clicked == true)
                {
                    clicked = false;
                    if (shiftKey)
                    {
                        itemAmount = 1;
                    }
                    else
                    {
                        itemAmount -= 1;
                    }
                }
                else if (mouseX > (1/2 * CCC.width - 40) + 80 && mouseX <= (1/2 * CCC.width - 40) + 93 && mouseY > 440 && mouseY < 440 + 30 && clicked == true)
                {
                    clicked = false;
                    if (shiftKey)
                    {
                        itemAmount = itemAmount * 2;
                    }
                    else
                    {
                        itemAmount += 1;
                    }
                }

                //Write number of amount in box
                XXX.font = "bold 22px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(itemAmount, (1/2 * CCC.width - 40) + 40, 462.5)
            };

            //activate internal methods
            this.displaySellInventory();
            this.sellInventoryInteract();
            this.merchandiseScrolling();
            this.displayMerchandise();
            this.merchandiseInteract();
            this.drawAmountSelector();
            this.amountScroll();
        }
    };

    //SKILLS
    this.displayCharacterInfo = function ()
    {

        if (lowBar == "skills")
        {
            //MAIN BACKGROUND
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(1, 1, 1398, 526);
            XXX.fill();
            XXX.stroke();

            //CHARACTER DETAILS BOX
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 4;
            XXX.strokeRect(0, 0, 350, 215);

            //LEVEL AND MAGIC LEVEL BOX
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 4;
            XXX.strokeRect(0, 215, 350, 309);

            //EXPERIENCE SWITCHER BUTTON
            //the button part
            if (mouseX > 2 && mouseX < 2 + 148 && mouseY > 529 && mouseY < 529 + 20)
            {
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();

                if (clicked == true)
                {
                    clicked = false;
                    if (this.experienceToggle == "normal")
                    {
                        this.experienceToggle = "magical";
                    }
                    else if (this.experienceToggle == "magical")
                    {
                        this.experienceToggle = "normal";
                    }
                }
            }
            else
            {
                XXX.beginPath();
                XXX.fillStyle = "E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(2, 529, 148, 20);
                XXX.fill();
                XXX.stroke();
            }
            //the text part
            XXX.font = "12px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Toggle Experience Type", 75, 542);

            //EXPERIENCE BAR
            if (this.experienceToggle == "normal")
            {
                LXX.beginPath();
                LXX.fillStyle = "goldenrod";
                LXX.fillRect(0, 0, (this.experience / this.experienceRequiredToLevel) * 1400, 80);

                if (lMouseX > 0 && lMouseX < 1400 && lMouseY > 0 && lMouseY < 80)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "45px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("Experience: " + Math.floor(this.experience) + " / " + this.experienceRequiredToLevel, 700, 55);
                }
            }
            else if (this.experienceToggle == "magical")
            {
                LXX.beginPath();
                LXX.fillStyle = "indigo";
                LXX.fillRect(0, 0, (this.magicalExperience / this.magicalExperienceRequiredToLevel) * 1400, 80);

                if (lMouseX > 0 && lMouseX < 1400 && lMouseY > 0 && lMouseY < 80)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "45px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("Magic Experience: " + Math.floor(this.magicalExperience) + " / " + this.magicalExperienceRequiredToLevel, 700, 55);
                }
            }

            //PLAYER DETAILS
            //NAME
            //box
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 3;
            XXX.rect(0, 0, 350, 51);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "bold 35px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText(this.name, 174, 36);

            //Race
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(10, 61, 85, 40);
            XXX.fill();
            XXX.stroke();

            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Race", 10 + (1 / 2 * 85), 90);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(105, 61, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText(this.raceName, 105 + (1 / 2 * 235), 90);

            //Gender
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(10, 111, 85, 40);
            XXX.fill();
            XXX.stroke();

            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Sex", 10 + (1 / 2 * 85), 90 + 50);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(105, 111, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText(this.gender, 105 + (1 / 2 * 235), 90 + 50);

            //Status
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(10, 161, 85, 40);
            XXX.fill();
            XXX.stroke();

            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Status", 10 + (1 / 2 * 85), 90 + 100);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(105, 161, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText(this.title, 105 + (1 / 2 * 235), 90 + 100);

            //LEVEL

            //Level
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(10, 76 + 150, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Level", 10 + (1 / 2 * 235), 105 + 150);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(255, 76 + 150, 85, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText(this.level, 255 + (1 / 2 * 85), 105 + 150);

            //Skill Points
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(10, 76 + 200, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Skill Points", 10 + (1 / 2 * 235), 105 + 200);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(255, 76 + 200, 85, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText(this.skillPoints, 255 + (1 / 2 * 85), 105 + 200);

            //Total Skill Points
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(10, 76 + 250, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Total Skill Points", 10 + (1 / 2 * 235), 105 + 250);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(255, 76 + 250, 85, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText(this.totalSkillPoints, 255 + (1 / 2 * 85), 105 + 250);

            //Deviding line between level and magic level stuff
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.lineWidth = 3;
            XXX.moveTo(0, 376);
            XXX.lineTo(350, 376);
            XXX.stroke();

            //Magic Level
            //Magic Level
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(10, 86 + 300, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Magic Level", 10 + (1 / 2 * 235), 115 + 300);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(255, 86 + 300, 85, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText(this.magicLevel, 255 + (1 / 2 * 85), 115 + 300);

            //Magic Points
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(10, 86 + 345, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Magic Points", 10 + (1 / 2 * 235), 115 + 345);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(255, 86 + 345, 85, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText(this.magicalSkillPoints, 255 + (1 / 2 * 85), 115 + 345);

            //Total Magic Points
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(10, 86 + 390, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Total Magic Points", 10 + (1 / 2 * 235), 115 + 390);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(255, 86 + 390, 85, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText(this.totalMagicPoints, 255 + (1 / 2 * 85), 115 + 390);

            //THE SKILLS
            //Constitution
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360, 108 + (-87), 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Constitution", 360 + (1 / 2 * 235), 137 + (-87));

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605, 108 + (-87), 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdConstitution > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.constitution + " + " + this.AdConstitution, 605 + (1 / 2 * 105), 137 + (-87));
            }
            else if (this.AdConstitution < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.constitution + " - " + (this.AdConstitution * -1), 605 + (1 / 2 * 105), 137 + (-87));
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.constitution, 605 + (1 / 2 * 105), 137 + (-87));
            }

            if (mouseX > 720 && mouseX < 740 && mouseY > 118 + (-87) && mouseY < 138 + (-87))
            {
                if (clicked == true && this.skillPoints >= 1)
                {
                    clicked = false;
                    if (this.constitution < 50)
                    {
                        this.skillPoints -= 1;
                        this.constitution += 1;
                        this.health += 2;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + (-87), 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + (-87), 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730, 136 + (-87));

            //Endurance
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360, 108 + (-37), 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Endurance", 360 + (1 / 2 * 235), 137 + (-37));

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605, 108 + (-37), 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdEndurance > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.endurance + " + " + this.AdEndurance, 605 + (1 / 2 * 105), 137 + (-37));
            }
            else if (this.AdEndurance < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.endurance + " - " + (this.AdEndurance * -1), 605 + (1 / 2 * 105), 137 + (-37));
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.endurance, 605 + (1 / 2 * 105), 137 + (-37));
            }

            if (mouseX > 720 && mouseX < 740 && mouseY > 118 + (-37) && mouseY < 138 + (-37))
            {
                if (clicked == true && this.skillPoints >= 1)
                {
                    clicked = false;
                    if (this.endurance < 50)
                    {
                        this.skillPoints -= 1;
                        this.endurance += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + (-37), 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + (-37), 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730, 136 + (-37));

            //Strength
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360, 108 + 13, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Strength", 360 + (1 / 2 * 235), 137 + 13);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605, 108 + 13, 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdStrength > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.strength + " + " + this.AdStrength, 605 + (1 / 2 * 105), 137 + 13);
            }
            else if (this.AdStrength < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.strength + " - " + (this.AdStrength * -1), 605 + (1 / 2 * 105), 137 + 13);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.strength, 605 + (1 / 2 * 105), 137 + 13);
            }

            if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 13 && mouseY < 138 + 13)
            {
                if (clicked == true && this.skillPoints >= 1)
                {
                    clicked = false;
                    if (this.strength < 50)
                    {
                        this.skillPoints -= 1;
                        this.strength += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 13, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 13, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730, 136 + 13);

            //Toughness
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360, 108 + 63, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Toughness", 360 + (1 / 2 * 235), 137 + 63);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605, 108 + 63, 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdToughness > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.toughness + " + " + this.AdToughness, 605 + (1 / 2 * 105), 137 + 63);
            }
            else if (this.AdToughness < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.toughness + " - " + (this.AdToughness * -1), 605 + (1 / 2 * 105), 137 + 63);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.toughness, 605 + (1 / 2 * 105), 137 + 63);
            }

            if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 63 && mouseY < 138 + 63)
            {
                if (clicked == true && this.skillPoints >= 1)
                {
                    clicked = false;
                    if (this.toughness < 50)
                    {
                        this.skillPoints -= 1;
                        this.toughness += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 63, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 63, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730, 136 + 63);

            //Stamina
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360, 108 + 113, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Stamina", 360 + (1 / 2 * 235), 137 + 113);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605, 108 + 113, 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdStamina > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.stamina + " + " + this.AdStamina, 605 + (1 / 2 * 105), 137 + 113);
            }
            else if (this.AdStamina < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.stamina + " - " + (this.AdStamina * -1), 605 + (1 / 2 * 105), 137 + 113);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.stamina, 605 + (1 / 2 * 105), 137 + 113);
            }

            if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 113 && mouseY < 138 + 113)
            {
                if (clicked == true && this.skillPoints >= 1)
                {
                    clicked = false;
                    if (this.stamina < 50)
                    {
                        this.skillPoints -= 1;
                        this.stamina += 1;
                        this.energy += 2.5;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 113, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 113, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730, 136 + 113);

            //Dexterity
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360, 108 + 163, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Dexterity", 360 + (1 / 2 * 235), 137 + 163);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605, 108 + 163, 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdDexterity > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.dexterity + " + " + this.AdDexterity, 605 + (1 / 2 * 105), 137 + 163);
            }
            else if (this.AdDexterity < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.dexterity + " - " + (this.AdDexterity * -1), 605 + (1 / 2 * 105), 137 + 163);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.dexterity, 605 + (1 / 2 * 105), 137 + 163);
            }

            if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 163 && mouseY < 138 + 163)
            {
                if (clicked == true && this.skillPoints >= 1)
                {
                    clicked = false;
                    if (this.dexterity < 50)
                    {
                        this.skillPoints -= 1;
                        this.dexterity += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 163, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 163, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730, 136 + 163);

            //RANGED
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360, 108 + 213, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Ranged", 360 + (1 / 2 * 235), 137 + 213);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605, 108 + 213, 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdRanged > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.ranged + " + " + this.AdRanged, 605 + (1 / 2 * 105), 137 + 213);
            }
            else if (this.AdRanged < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.ranged + " - " + (this.AdRanged * -1), 605 + (1 / 2 * 105), 137 + 213);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.ranged, 605 + (1 / 2 * 105), 137 + 213);
            }

            if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 213 && mouseY < 138 + 213)
            {
                if (clicked == true && this.skillPoints >= 1)
                {
                    clicked = false;
                    if (this.ranged < 50)
                    {
                        this.skillPoints -= 1;
                        this.ranged += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 213, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 213, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730, 136 + 213);

            //Survivalism
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360, 108 + 263, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Survivalism", 360 + (1 / 2 * 235), 137 + 263);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605, 108 + 263, 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdSurvivalism > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.survivalism + " + " + this.AdSurvivalism, 605 + (1 / 2 * 105), 137 + 263);
            }
            else if (this.AdSurvivalism < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.survivalism + " - " + (this.AdSurvivalism * -1), 605 + (1 / 2 * 105), 137 + 263);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.survivalism, 605 + (1 / 2 * 105), 137 + 263);
            }

            if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 263 && mouseY < 138 + 263)
            {
                if (clicked == true && this.skillPoints >= 1)
                {
                    clicked = false;
                    if (this.survivalism < 50)
                    {
                        this.skillPoints -= 1;
                        this.survivalism += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 263, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 263, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730, 136 + 263);

            //Intelligence
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360, 108 + 313, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Intelligence", 360 + (1 / 2 * 235), 137 + 313);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605, 108 + 313, 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdIntelligence > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.intelligence + " + " + this.AdIntelligence, 605 + (1 / 2 * 105), 137 + 313);
            }
            else if (this.AdIntelligence < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.intelligence + " - " + (this.AdIntelligence * -1), 605 + (1 / 2 * 105), 137 + 313);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.intelligence, 605 + (1 / 2 * 105), 137 + 313);
            }

            if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 313 && mouseY < 138 + 313)
            {
                if (clicked == true && this.skillPoints >= 1)
                {
                    clicked = false;
                    if (this.intelligence < 50)
                    {
                        this.skillPoints -= 1;
                        this.intelligence += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 313, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 313, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730, 136 + 313);

            //Charisma
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360, 108 + 363, 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Charisma", 360 + (1 / 2 * 235), 137 + 363);

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605, 108 + 363, 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdCharisma > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.charisma + " + " + this.AdCharisma, 605 + (1 / 2 * 105), 137 + 363);
            }
            else if (this.AdCharisma < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.charisma + " - " + (this.AdCharisma * -1), 605 + (1 / 2 * 105), 137 + 363);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.charisma, 605 + (1 / 2 * 105), 137 + 363);
            }

            if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 363 && mouseY < 138 + 363)
            {
                if (clicked == true && this.skillPoints >= 1)
                {
                    clicked = false;
                    if (this.charisma < 50)
                    {
                        this.skillPoints -= 1;
                        this.charisma += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 363, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720, 118 + 363, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730, 136 + 363);

            //Knowledge
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360 + 530, 108 + (-87), 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Knowledge", 360 + 530+ (1 / 2 * 235), 137 + (-87)); //29 more

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605 + 530, 108 + (-87), 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdKnowledge > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.knowledge + " + " + this.AdKnowledge, 605 + 530 + (1 / 2 * 105), 137 -87);
            }
            else if (this.AdKnowledge < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.knowledge + " - " + (this.AdKnowledge * -1), 605 + 530 + (1 / 2 * 105), 137 -87);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.knowledge, 605 + 530 + (1 / 2 * 105), 137 -87);
            }

            if (mouseX > 720 + 530 && mouseX < 740 + 530 && mouseY > 118 - 87 && mouseY < 138 - 87)
            {
                if (clicked == true && this.magicalSkillPoints >= 1)
                {
                    clicked = false;
                    if (this.knowledge < 50)
                    {
                        this.magicalSkillPoints -= 1;
                        this.knowledge += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720 + 530, 118  -87, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720 + 530, 118 - 87, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730 + 530, 136 -87);

            //Memory
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360 + 530, 108 + (-37), 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Memory", 360 + 530+ (1 / 2 * 235), 137 + (-37)); //29 more

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605 + 530, 108 + (-37), 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdMemory > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.memory + " + " + this.AdMemory, 605 + 530 + (1 / 2 * 105), 137 -37);
            }
            else if (this.AdMemory < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.memory + " - " + (this.AdMemory * -1), 605 + 530 + (1 / 2 * 105), 137 -37);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.memory, 605 + 530 + (1 / 2 * 105), 137 -37);
            }

            if (mouseX > 720 + 530 && mouseX < 740 + 530 && mouseY > 118 - 37 && mouseY < 138 - 37)
            {
                if (clicked == true && this.magicalSkillPoints >= 1)
                {
                    clicked = false;
                    if (this.memory < 50)
                    {
                        this.magicalSkillPoints -= 1;
                        this.memory += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720 + 530, 118  -37, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720 + 530, 118 - 37, 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730 + 530, 136 -37);

            //willpower
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360 + 530, 108 + (13), 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Willpower", 360 + 530 + (1 / 2 * 235), 137 + (13)); //29 more

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605 + 530, 108 + (13), 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdWillpower > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.willpower + " + " + this.AdWillpower, 605 + 530 + (1 / 2 * 105), 137 + 13);
            }
            else if (this.AdWillpower < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.willpower + " - " + (this.AdWillpower * -1), 605 + 530 + (1 / 2 * 105), 137 + 13);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.willpower, 605 + 530 + (1 / 2 * 105), 137 + 13);
            }

            if (mouseX > 720 + 530 && mouseX < 740 + 530 && mouseY > 118 + (13) && mouseY < 138 + (13))
            {
                if (clicked == true && this.magicalSkillPoints >= 1)
                {
                    clicked = false;
                    if (this.willpower < 50)
                    {
                        this.magicalSkillPoints -= 1;
                        this.willpower += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720 + 530, 118 + (13), 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720 + 530, 118 + (13), 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730 + 530, 136 + (13));

            //Concentration
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360 + 530, 108 + (63), 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Concentration", 360 + 530 + (1 / 2 * 235), 137 + (63)); //29 more

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605 + 530, 108 + (63), 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdConcentration > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.concentration + " + " + this.AdConcentration, 605 + 530 + (1 / 2 * 105), 137 + 63);
            }
            else if (this.AdConcentration < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.concentration + " - " + (this.AdConcentration * -1), 605 + 530 + (1 / 2 * 105), 137 + 63);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.concentration, 605 + 530 + (1 / 2 * 105), 137 + 63);
            }

            if (mouseX > 720 + 530 && mouseX < 740 + 530 && mouseY > 118 + (63) && mouseY < 138 + (63))
            {
                if (clicked == true && this.magicalSkillPoints >= 1)
                {
                    clicked = false;
                    if (this.concentration < 50)
                    {
                        this.magicalSkillPoints -= 1;
                        this.concentration += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720 + 530, 118 + (63), 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720 + 530, 118 + (63), 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730 + 530, 136 + (63));

            //Eminence
            //box: subject half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(360 + 530, 108 + (113), 235, 40);
            XXX.fill();
            XXX.stroke();
            //text
            XXX.font = "30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("Eminence", 360 + 530 + (1 / 2 * 235), 137 + (113)); //29 more

            //box: response half
            XXX.beginPath();
            XXX.fillStyle = "#E8E8E8";
            XXX.strokeStyle = "black";
            XXX.lineWidth = 1;
            XXX.rect(605 + 530, 108 + (113), 105, 40);
            XXX.fill();
            XXX.stroke();
            //text
            if (this.AdEminence + this.emiBoost > 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#00EE76";
                XXX.textAlign = "center";
                XXX.fillText(this.eminence + " + " + (this.AdEminence + this.emiBoost), 605 + 530 + (1 / 2 * 105), 137 + 113);
            }
            else if (this.AdEminence + this.emiBoost < 0)
            {
                XXX.font = "bold 30px Book Antiqua";
                XXX.fillStyle = "#EE0000";
                XXX.textAlign = "center";
                XXX.fillText(this.eminence + " - " + ((this.AdEminence + this.emiBoost) * -1), 605 + 530 + (1 / 2 * 105), 137 + 113);
            }
            else
            {
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.eminence, 605 + 530 + (1 / 2 * 105), 137 + 113);
            }

            if (mouseX > 720 + 530 && mouseX < 740 + 530 && mouseY > 118 + (113) && mouseY < 138 + (113))
            {
                if (clicked == true && this.magicalSkillPoints >= 1)
                {
                    clicked = false;
                    if (this.eminence < 50)
                    {
                        this.magicalSkillPoints -= 1;
                        this.eminence += 1;
                    }
                }

                //box: Upgrade box (hovered over)
                XXX.beginPath();
                XXX.fillStyle = "gold";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720 + 530, 118 + (113), 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            else
            {
                //box: Upgrade box
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(720 + 530, 118 + (113), 20, 20);
                XXX.fill();
                XXX.stroke();
            }
            //text
            XXX.font = "italic 30px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign = "center";
            XXX.fillText("+", 730 + 530, 136 + (113));
        }
    };

    //INVENTORY
    this.displayInventory = function()
    {
        if (lowBar == "inventory")
        {
            // each inventory slot is a list with three things in it... [Item, quantity]
            for (var i = 0; i < Inventory.length; i++)
            {
                if (Inventory[i][0].equipped == true)
                {
                    LXX.beginPath();
                    LXX.lineWidth = 2;
                    LXX.fillStyle ="rgba(102, 255, 102, 0.35)";
                    LXX.strokeStyle ="black";
                    LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                    LXX.fill();
                    LXX.stroke();
                    Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                    //quantity
                    LXX.font="16px Book Antiqua";
                    LXX.textAlign="left";
                    LXX.fillStyle ="black";
                    if (Inventory[i][1] < 1000)
                    {
                        LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                    }
                    else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                    {
                        LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                    }
                    else if (Inventory[i][1] >= 1000000)
                    {
                        LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                    }
                    //drop button
                    LXX.drawImage(polyPNG, 183, 7, 17, 15, invScroll +20.5 + (79 * i) + 62, 3, 18.7, 16.5);
                    //weight
                    LXX.font="10px Book Antiqua";
                    LXX.fillStyle ="black";
                    LXX.textAlign="right";
                    LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                    LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                }
                else
                {
                    LXX.beginPath();
                    LXX.lineWidth = 2;
                    LXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                    LXX.strokeStyle ="black";
                    LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                    LXX.fill();
                    LXX.stroke();
                    Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                    //quantity
                    LXX.font="16px Book Antiqua";
                    LXX.textAlign="left";
                    LXX.fillStyle ="black";
                    if (Inventory[i][1] < 1000)
                    {
                        LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                    }
                    else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                    {
                        LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                    }
                    else if (Inventory[i][1] >= 1000000)
                    {
                        LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                    }
                    //drop button
                    LXX.drawImage(polyPNG, 183, 7, 17, 15, invScroll +20.5 + (79 * i) + 62, 3, 18.7, 16.5);
                    //weight
                    LXX.font="10px Book Antiqua";
                    LXX.fillStyle ="black";
                    LXX.textAlign="right";
                    LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                    LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                }
            }

            //left scroll arrow
            LXX.beginPath();
            LXX.lineWidth = 1;
            LXX.fillStyle ="darkGrey";
            LXX.strokeStyle ="black";
            LXX.rect(0.5, 0.5, 20, 79);
            LXX.fill();
            LXX.stroke();
            LXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

            //weight display
            LXX.beginPath();
            LXX.fillStyle ="lightGray";
            LXX.strokeStyle ="black";
            LXX.rect(1329.5, 0.1, 50, 79.8);
            LXX.fill();
            LXX.stroke();
            //Draw a cover on the weight display to represent the amount of carry weight filled.
            LXX.beginPath();
            //LXX.fillStyle ="rgba(255, 255, 255, 0.65)"; //white fill in colour
            //LXX.fillStyle ="rgba(139, 134, 78, 0.8)"; //beige fill in colour
            //LXX.fillStyle = "rgba(138, 54, 15, 0.65)"; //burnt sienna colour
            LXX.fillStyle ="grey";
            LXX.rect(1329.6, 79.5, 50, -79 * this.carryWeight / this.carryWeightMAX);
            LXX.fill();
            //Draw the weight number on the top and bottom and the deviding bar.
            LXX.font="16px Book Antiqua";
            LXX.fillStyle = "black";
            LXX.textAlign="center";
            LXX.fillText(JSON.stringify(Math.floor(this.carryWeight)), 1352, 25);
            //dividing line
            LXX.beginPath();
            LXX.strokeStyle="black";
            LXX.lineWidth=3;
            LXX.moveTo(1334, 39.5);
            LXX.lineTo(1374, 39.5);
            LXX.stroke();
            //divisor
            LXX.font="16px Book Antiqua";
            LXX.fillStyle = "black";
            LXX.textAlign="center";
            LXX.fillText(JSON.stringify(Math.floor(this.carryWeightMAX)), 1352, 64.5);
            LXX.textAlign="left"; //this is to reset it to the standard for the rest to come.

            //right scroll arrow
            LXX.beginPath();
            LXX.lineWidth=1;
            LXX.fillStyle ="darkGrey";
            LXX.strokeStyle ="black";
            LXX.rect(1379.5, 0.5, 20, 79);
            LXX.fill();
            LXX.stroke();
            LXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
        }
    };

    this.interactWithInventory = function()
    {
        var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

        for (var i = - this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
        {
            listOfInvX1Coords.push(20.5 + (79 * i));
        }


        var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

        for (var i = - this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
        {
            listOfInvX2Coords.push(20.5 + (79 * i) + 79);
        }


        var invY1Coord = 0.5; //This doesn't change.


        var invY2Coord = 79.5; //this is just Y + 79

        for (var i = Inventory.length - 1; i > -1; i--)
        {
            if (lMouseX >= 21 && lMouseX <= 1329) //This checks if the mouse is between the scroll buttons rather than on them.
            {
                if (shiftKey != true && lowBar == "inventory" && clickReleased == true && lMouseX > listOfInvX1Coords[i] + 64 && lMouseX < listOfInvX2Coords[i] && lMouseY > 3 && lMouseY < 20 && Inventory[i][0].equipped == false && this.REQB == false) //Drop item when the X button is pressed.
                {
                    clickReleased = false;
                    Inventory[i][1] -= 1;
                    if (Inventory[i][1] <= 0)
                    {
                        Inventory[i][0].X = X;
                        Inventory[i][0].Y = Y;
                        worldItems.push([Inventory[i][0], 1]);

                        Inventory.splice(i, 1);
                    }
                    else
                    {
                        worldItems.push([new Item(Inventory[i][0].type, X, Y), 1]);
                    }
                }
                else if (shiftKey == true && lowBar == "inventory"  && clickReleased == true && lMouseX > listOfInvX1Coords[i] + 64 && lMouseX < listOfInvX2Coords[i] && lMouseY > 3 && lMouseY < 20 && Inventory[i][0].equipped == false && this.REQB == false) //Drop all items when the X button is pressed.
                {
                    clickReleased = false;
                    worldItems.push([new Item(Inventory[i][0].type, X, Y), Inventory[i][1] + cheatItem]);
                    Inventory.splice(i, 1);
                }
                else if (clickReleased == true && lowBar == "inventory" && lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord && this.REQB == false) //When you click on an item you either access its utility or you equip it.
                {
                    clickReleased = false;
                    //console.log(Inventory[i][0].equipped);
                    if (Inventory[i][0].utility == "food")
                    {
                        //Eating/Drinking
                        this.hunger = Math.min(this.hungerMAX, this.hunger + Inventory[i][0].hunger);
                        this.energy = Math.min(this.energyMAX, this.energy + Inventory[i][0].generation);
                        this.health = Math.min(this.healthMAX, this.health + Inventory[i][0].heal);
                        this.will = Math.min(this.willMAX, this.will + Inventory[i][0].replenish);
                        this.warmth = Math.min(this.warmthMAX, this.warmth + Inventory[i][0].warmth);
                        this.thirst = Math.min(this.thirstMAX, this.thirst + Inventory[i][0].thirst);
                        this.sleep = Math.min(this.sleepMAX, this.sleep + Inventory[i][0].wake);
                        this.inebriation += Inventory[i][0].alcohol;

                        //some items when used will give you an item when they are used.
                        if (Inventory[i][0].subUtility == "reusable")
                        {
                            var hits = 0;
                            for (var rr = 0; rr < Inventory[i][0].refund.length; rr ++)
                            {
                                for (var r = 0; r < Inventory.length; r ++)
                                {
                                    if (Inventory[r][0].type == Inventory[i][0].refund[rr][0])
                                    {
                                        Inventory[r][1] += Inventory[i][0].refund[rr][1];
                                        break;
                                    }
                                    else
                                    {
                                        hits += 1;
                                    }
                                }
                                if (hits == Inventory.length)
                                {
                                    Inventory.push([new Item(Inventory[i][0].refund[rr][0], false, false), Inventory[i][0].refund[rr][1]]);
                                }
                            }
                        }
                        //Inside of this IF statement is the place to write the effects gained from eating/drinking etc.
                        if (Inventory[i][0].ability != "none")
                        {
                            //Effects

                            if (Inventory[i][0].ability == "gutWorms" && this.gutWorms == false) //gut worms
                            {
                                var gutwormz = Math.round(Math.random()); //this makes it so that you will only get the gut worms 50% of the time.
                                if (gutwormz)
                                {
                                    this.gutWorms = true;
                                }
                            }
                            else if (Inventory[i][0].ability == "gojii") //gojii berry poison
                            {
                                this.gojiiTimer = new Date().getTime();
                                this.gojiiVomit = true;
                            }
                            else if (Inventory[i][0].ability == "haeflower") //haeflower pollen
                            {
                                this.energilTime = 900;
                                this.fatigueIII = true;
                                this.memTime = new Date().getTime() + 900;
                                this.memoryV = true;
                                this.haeflowerTime = 900;
                            }
                            else if (Inventory[i][0].ability == "haeDeath") //haeflower toxin
                            {
                                this.poisonIV = true;
                                this.energilTime = 2000;
                                this.fatigueIV = true;
                                this.memTime = new Date().getTime() + 2000;
                                this.memoryV = true;
                                this.haeflowerTime = 2000;

                                //causing vomiting
                                if (this.timeSinceBadFoodEaten == 0)
                                {
                                    this.timeSinceBadFoodEaten = new Date().getTime();
                                }
                                else if (new Date().getTime() - this.timeSinceBadFoodEaten < 33000 - 11500)
                                {
                                    this.timeSinceBadFoodEaten -= 11000
                                }
                                else if (new Date().getTime() - this.timeSinceBadFoodEaten < 33000 - 4500)
                                {
                                    this.timeSinceBadFoodEaten -= 4000
                                }
                            }
                            else if (Inventory[i][0].ability == "rawwyr") //wyr leaf extract effects...
                            {
                                //food poison and reduced hunger.
                                if (this.timeSinceBadFoodEaten == 0)
                                {
                                    this.timeSinceBadFoodEaten = new Date().getTime();
                                }

                                //cure basic poison
                                this.poisonI = false;
                                this.poisonII = false;
                            }
                            else if (Inventory[i][0].ability == "antidoteI") //Cures poison
                            {
                                this.poisonI = false;
                            }
                            else if (Inventory[i][0].ability == "antidoteII") //Cures poison
                            {
                                this.poisonI = false;
                                this.poisonII = false;
                            }
                            else if (Inventory[i][0].ability == "antidoteIII") //Cures poison
                            {
                                this.poisonI = false;
                                this.poisonII = false;
                                this.poisonIII = false;
                            }
                            else if (Inventory[i][0].ability == "antidoteIV") //Cures poison
                            {
                                this.poisonI = false;
                                this.poisonII = false;
                                this.poisonIII = false;
                                this.poisonIV = false;
                            }
                            else if (Inventory[i][0].ability == "antidoteV") //Cures poison
                            {
                                this.poisonI = false;
                                this.poisonII = false;
                                this.poisonIII = false;
                                this.poisonIV = false;
                                this.poisonV = false;
                            }
                            else if (Inventory[i][0].ability == "swellingI")
                            {
                                this.swollenI = true;
                                this.swollenTime = Math.max(player.swollenTime, 200);
                            }
                            else if (Inventory[i][0].ability == "swellingII")
                            {
                                this.swollenII = true;
                                this.swollenTime = Math.max(player.swollenTime, 300);
                            }
                            else if (Inventory[i][0].ability == "swellingIII")
                            {
                                this.swollenIII = true;
                                this.swollenTime = Math.max(player.swollenTime, 400);
                            }
                            else if (Inventory[i][0].ability == "teppreklia")
                            {
                                this.swollenV = true;
                                this.swollenTime = Math.max(player.swollenTime, 1200);
                                this.thirst -= 10;
                                this.fungalFever = true;
                            }
                            else if (Inventory[i][0].ability == "satiate") //Food with this effect will keep you fed for a little bit.
                            {
                                this.fed = true;
                            }
                            else if (Inventory[i][0].ability == "quench") //Food with this effect will keep you quenched for a little bit.
                            {
                                this.watered = true;
                            }
                            else if (Inventory[i][0].ability == "sensational") //Food with this effect will keep you fed and quenched for a little bit.
                            {
                                this.watered = true;
                                this.fed = true;
                            }
                            else if (Inventory[i][0].ability == "healthVI") //This is the highest level of health regeneration.
                            {
                                this.recoveryTime = 200;
                                this.recoverV = true;
                            }
                            else if (Inventory[i][0].ability == "healthV") //This is the highest level of health regeneration.
                            {
                                this.recoveryTime = 100;
                                this.recoverV = true;
                            }
                            else if (Inventory[i][0].ability == "healthIV") //This is the fourth level of health regeneration.
                            {
                                this.recoveryTime = 100;
                                this.recoverIV = true;
                            }
                            else if (Inventory[i][0].ability == "healthIII") //This is the third level of health regeneration.
                            {
                                this.recoveryTime = 100;
                                this.recoverIII = true;
                            }
                            else if (Inventory[i][0].ability == "healthII") //This is the third level of health regeneration.
                            {
                                this.recoveryTime = 100;
                                this.recoverII = true;
                            }
                            else if (Inventory[i][0].ability == "healthI") //This is the third level of health regeneration.
                            {
                                this.recoveryTime = 100;
                                this.recoverI = true;
                            }
                            else if (Inventory[i][0].ability == "fatigueV") //This is the highest level of health regeneration.
                            {
                                this.energilTime = 600;
                                this.fatigueV = true;
                            }
                            else if (Inventory[i][0].ability == "fatigueIV") //This is the fourth level of health regeneration.
                            {
                                this.energilTime = 600;
                                this.fatigueIV = true;
                            }
                            else if (Inventory[i][0].ability == "fatigueIII") //This is the third level of health regeneration.
                            {
                                this.energilTime = 600;
                                this.fatigueIII = true;
                            }
                            else if (Inventory[i][0].ability == "fatigueII") //This is the third level of health regeneration.
                            {
                                this.energilTime = 600;
                                this.fatigueII = true;
                            }
                            else if (Inventory[i][0].ability == "fatigueI") //This is the third level of health regeneration.
                            {
                                this.energilTime = 600;
                                this.fatigueI = true;
                            }
                            else if (Inventory[i][0].ability == "energilV") //This is the highest level of health regeneration.
                            {
                                this.energilTime = 400;
                                this.energilV = true;
                            }
                            else if (Inventory[i][0].ability == "energilIV") //This is the fourth level of health regeneration.
                            {
                                this.energilTime = 400;
                                this.energilIV = true;
                            }
                            else if (Inventory[i][0].ability == "energilIII") //This is the third level of health regeneration.
                            {
                                this.energilTime = 400;
                                this.energilIII = true;
                            }
                            else if (Inventory[i][0].ability == "energilII") //This is the third level of health regeneration.
                            {
                                this.energilTime = 400;
                                this.energilII = true;
                            }
                            else if (Inventory[i][0].ability == "energilI") //This is the third level of health regeneration.
                            {
                                this.energilTime = 400;
                                this.energilI = true;
                            }
                            else if (Inventory[i][0].ability == "energyV") //This is the highest level of health regeneration.
                            {
                                this.energizeTime = 100;
                                this.energizeV = true;
                            }
                            else if (Inventory[i][0].ability == "energyIV") //This is the fourth level of health regeneration.
                            {
                                this.energizeTime = 100;
                                this.energizeIV = true;
                            }
                            else if (Inventory[i][0].ability == "energyIII") //This is the third level of health regeneration.
                            {
                                this.energizeTime = 100;
                                this.energizeIII = true;
                            }
                            else if (Inventory[i][0].ability == "energyII") //This is the third level of health regeneration.
                            {
                                this.energizeTime = 100;
                                this.energizeII = true;
                            }
                            else if (Inventory[i][0].ability == "energyI") //This is the third level of health regeneration.
                            {
                                this.energizeTime = 100;
                                this.energizeI = true;
                            }
                            else if (Inventory[i][0].ability == "ogardPerfume") //This makes you smell good therefore enchanting those you interact with to like you more and give you better deals... that is if you are not a man.
                            {
                                this.perfume = "ogard";
                                this.perfumeTime = 540;
                                this.perfumeStoreTime = new Date().getTime();
                            }
                            else if (Inventory[i][0].ability == "speedI") //This is for enhancing dexterity.
                            {
                                this.dexTime = new Date().getTime();
                                this.speedI = true;
                            }
                            else if (Inventory[i][0].ability == "speedII") //This is for enhancing dexterity.
                            {
                                this.dexTime = new Date().getTime();
                                this.speedII = true;
                            }
                            else if (Inventory[i][0].ability == "speedIII") //This is for enhancing dexterity.
                            {
                                this.dexTime = new Date().getTime();
                                this.speedIII = true;
                            }
                            else if (Inventory[i][0].ability == "speedIV") //This is for enhancing dexterity.
                            {
                                this.dexTime = new Date().getTime();
                                this.speedIV = true;
                            }
                            else if (Inventory[i][0].ability == "speedV") //This is for enhancing dexterity.
                            {
                                this.dexTime = new Date().getTime();
                                this.speedV = true;
                            }
                            else if (Inventory[i][0].ability == "mindI") //This is for enhancing dexterity.
                            {
                                this.intTime = new Date().getTime() + 35000;
                                this.intelligenceI = true;
                                this.memTime = new Date().getTime() + 35000;
                                this.memoryI = true;
                                this.wilTime = new Date().getTime() + 35000;
                                this.willpowerI = true;
                            }
                            else if (Inventory[i][0].ability == "mindII") //This is for enhancing dexterity.
                            {
                                this.intTime = new Date().getTime() + 95000;
                                this.intelligenceII = true;
                                this.memTime = new Date().getTime() + 95000;
                                this.memoryII = true;
                                this.wilTime = new Date().getTime() + 95000;
                                this.willpowerII = true;
                            }
                            else if (Inventory[i][0].ability == "mindIII") //This is for enhancing dexterity.
                            {
                                this.intTime = new Date().getTime() + 155000;
                                this.intelligenceIII = true;
                                this.memTime = new Date().getTime() + 155000;
                                this.memoryIII = true;
                                this.wilTime = new Date().getTime() + 155000;
                                this.willpowerIII = true;
                            }
                            else if (Inventory[i][0].ability == "mindIV") //This is for enhancing dexterity.
                            {
                                this.intTime = new Date().getTime() + 215000;
                                this.intelligenceIV = true;
                                this.memTime = new Date().getTime() + 215000;
                                this.memoryIV = true;
                                this.wilTime = new Date().getTime() + 215000;
                                this.willpowerIV = true;
                            }
                            else if (Inventory[i][0].ability == "mindV") //This is for enhancing dexterity.
                            {
                                this.intTime = new Date().getTime() + 275000;
                                this.intelligenceV = true;
                                this.memTime = new Date().getTime() + 275000;
                                this.memoryV = true;
                                this.wilTime = new Date().getTime() + 275000;
                                this.willpowerV = true;
                            }
                            else if (Inventory[i][0].ability == "gassiness") //This gives the player indigestion (bad gasses)
                            {
                                this.gassinessTime += 20;
                            }
                            else if (Inventory[i][0].ability == "fleshMites") //This gives the player fleshMites
                            {
                                var fleshMitez = Math.floor(Math.random() * 4);
                                if (fleshMitez)
                                {
                                    this.fleshMites = true;
                                }
                            }
                            else if (Inventory[i][0].ability == "cleansing")
                            {
                                //takes away satiation and quenched
                                this.fedClock = 0;
                                this.wateredClock = 0;

                                //takes away up to poisonIII
                                this.poisonI = false;
                                this.poisonII = false;
                                this.poisonIII = false;
                                this.poisonIV = false;
                                if (this.poisonV == true)
                                {
                                    this.poisonV = false;
                                    this.poisonI = true;
                                }
                                this.fungalFever = false;
                                this.cyrinthilimTime = 0;
                                this.haeflowerTime = 0;
                                this.inebriation = 0;
                                this.fleshMites = false;
                                this.gutWorms = false;
                                this.brainMaggots = false;
                                this.gojiiTimer = 0;
                                this.gojiiPoisoned = false;
                                this.insomniaTime = 0;
                                this.insomniaStoreTime = 0;
                                this.insomniated = false; //this is a flag that lets thing give the player permanent insomnia until this is switched off by something.
                                this.swollenV = false;
                                this.swollenIV = false;
                                this.swollenIII = false;
                                this.swollenII = false;
                                this.swollenI = false;
                                this.swollenTime = 0;

                                //food poison and reduced hunger.
                                if (this.timeSinceBadFoodEaten == 0)
                                {
                                    this.timeSinceBadFoodEaten = new Date().getTime();
                                }
                            }
                            else if (Inventory[i][0].ability == "foodPoisoning") //this effect makes the player vomit and lose 22 hunger.
                            {
                                if (this.timeSinceBadFoodEaten == 0)
                                {
                                    this.timeSinceBadFoodEaten = new Date().getTime();
                                }
                                else if (new Date().getTime() - this.timeSinceBadFoodEaten < 33000 - 11500)
                                {
                                    this.timeSinceBadFoodEaten -= 11000
                                }
                                else if (new Date().getTime() - this.timeSinceBadFoodEaten < 33000 - 4500)
                                {
                                    this.timeSinceBadFoodEaten -= 4000
                                }
                            }
                            else if (Inventory[i][0].ability == "potentialFoodPoisoning") //this effect makes the player vomit and lose 22 hunger.
                            {
                                var chanse = Math.floor(Math.random() * 3); //By the way I know that chance is not spelled with an S this is so that I won't be repetitive with variable names.

                                if (chanse == 0)
                                {
                                    if (this.timeSinceBadFoodEaten == 0)
                                    {
                                        this.timeSinceBadFoodEaten = new Date().getTime();
                                    }
                                }

                                if (this.timeSinceBadFoodEaten != 0 && new Date().getTime() - this.timeSinceBadFoodEaten < 33000 - 11500)
                                {
                                    this.timeSinceBadFoodEaten -= 11000
                                }
                                else if (this.timeSinceBadFoodEaten != 0 && new Date().getTime() - this.timeSinceBadFoodEaten < 33000 - 4500)
                                {
                                    this.timeSinceBadFoodEaten -= 4000
                                }
                            }
                            else if (Inventory[i][0].ability == "trollPoison") //trollPoison
                            {
                                this.poisonI = true;
                                this.timeSinceRawTrollBlood = new Date().getTime();
                            }
                            else if (Inventory[i][0].ability == "undriedCyrinthilim") //if a fresh cyrinthilim mushroom is eaten...
                            {
                                this.poisonIV = true;
                                if (this.cyrinthilimTime < 0)
                                {
                                    this.cyrinthilimTime = 0;
                                }
                                this.cyrinthilimTime += 36;
                            }
                            else if (Inventory[i][0].ability == "cyrinthilim") //if a dried cyrinthilim mushroom is eaten...
                            {
                                if (this.cyrinthilimTime < 0)
                                {
                                    this.cyrinthilimTime = 0;
                                }
                                this.cyrinthilimTime += Math.floor(Math.random() * 11) + 10;
                            }
                            else if (Inventory[i][0].ability == "swollenI") //swollenI
                            {
                                this.swollenI = true;
                                this.swollenTime += 45;
                            }
                            else if (Inventory[i][0].ability == "poisonI") //poisonI
                            {
                                this.poisonI = true;
                            }
                            else if (Inventory[i][0].ability == "poisonII") //poisonII
                            {
                                this.poisonII = true;
                            }
                            else if (Inventory[i][0].ability == "poisonIII") //poisonIII
                            {
                                this.poisonIII = true;
                            }
                            else if (Inventory[i][0].ability == "poisonIV") //poisonIV
                            {
                                this.poisonIV = true;
                            }
                            else if (Inventory[i][0].ability == "poisonV") //poisonV
                            {
                                this.poisonV = true;
                            }
                        }

                        if (Inventory[i][1] <= 1)
                        {
                            Inventory.splice(i, 1);
                        }
                        else
                        {
                            Inventory[i][1] -= 1;
                        }
                    }
                    else if (Inventory[i][0].utility == "weapon")
                    {
                        //equpping a weapon
                        if (this.isWeaponEquipped == false)
                        {
                            Inventory[i][0].equipped = true;
                            this.isWeaponEquipped = true;
                            this.weaponEquipped = Inventory[i][0].type;
                            this.weaponIsRanged = false;
                        }
                        else
                        {
                            //unequipping a weapon
                            if (Inventory[i][0].equipped == true)
                            {
                                this.isWeaponEquipped = false;
                                Inventory[i][0].equipped = false;
                                this.weaponEquipped = "none";
                                this.weaponIsRanged = false;
                            }

                        }
                    }
                    else if (Inventory[i][0].utility == "package") //store is a list of which items you get from the container.
                    {
                        var psh = true;
                        for (var g = 0; g < Inventory[i][0].store.length; g++)
                        {
                            psh = true;
                            for (var inv = 0; inv < Inventory.length; inv++)
                            {
                                if (Inventory[inv][0].type == Inventory[i][0].store[g][0].type)
                                {
                                    Inventory[inv][1] += Inventory[i][0].store[g][1];
                                    psh = false;
                                }
                            }
                            if (psh == true)
                            {
                                Inventory.push(Inventory[i][0].store[g]);
                            }
                        }

                        if (Inventory[i][1] <= 1)
                        {
                            Inventory.splice(i, 1);
                        }
                        else
                        {
                            Inventory[i][1] -= 1;
                        }
                    }
                    else if (Inventory[i][0].utility == "spell")
                    {
                        var slaps = 0;
                        //learning a spell
                        if (Inventory[i][0].spellGroup == "Form" && player.getKnowledge() >= Inventory[i][0].spellKnowledgeRequirement)
                        {
                            for (var sp = 0; sp < primarySpells.length; sp++)
                            {
                                if (Inventory[i][0].spellID == primarySpells[sp].ID)
                                {
                                    primarySpells[sp].name = Inventory[i][0].spellName;
                                    primarySpells[sp].cost = Inventory[i][0].spellCost;
                                    primarySpells[sp].cooldown = Inventory[i][0].spellCooldown;
                                    primarySpells[sp].description = Inventory[i][0].spellDescription;
                                    primarySpells[sp].EXP = Inventory[i][0].spellEXP;
                                    slaps += 1;
                                }
                            }

                            if (slaps == 0 && (this.memory - 1) >= 0)
                            {
                                this.will = 0;
                                this.memory -= 1;
                                this.spellzLearned += 1;
                                primarySpells.push({name: Inventory[i][0].spellName, ID: Inventory[i][0].spellID, equipped: false, cost: Inventory[i][0].spellCost, cooldown: Inventory[i][0].spellCooldown, description: Inventory[i][0].spellDescription, EXP: Inventory[i][0].spellEXP});
                            }
                        }
                        else if (Inventory[i][0].spellGroup == "Incantation" && player.getKnowledge() >= Inventory[i][0].spellKnowledgeRequirement)
                        {
                            for (var ssp = 0; ssp < secondarySpells.length; ssp++)
                            {
                                if (Inventory[i][0].spellID == secondarySpells[ssp].ID)
                                {
                                    secondarySpells[ssp].name = Inventory[i][0].spellName;
                                    secondarySpells[ssp].cost = Inventory[i][0].spellCost;
                                    secondarySpells[ssp].cooldown = Inventory[i][0].spellCooldown;
                                    secondarySpells[ssp].description = Inventory[i][0].spellDescription;
                                    secondarySpells[ssp].EXP = Inventory[i][0].spellEXP;
                                    slaps += 1;
                                }
                            }

                            if (slaps == 0 && (this.memory - 1) >= 0)
                            {
                                this.will = 0;
                                this.memory -= 1;
                                this.spellzLearned += 1;
                                secondarySpells.push({name: Inventory[i][0].spellName, ID: Inventory[i][0].spellID, equipped: false, cost: Inventory[i][0].spellCost, cooldown: Inventory[i][0].spellCooldown, description: Inventory[i][0].spellDescription, EXP: Inventory[i][0].spellEXP});
                            }
                        }
                        else if (Inventory[i][0].spellGroup == "Bind" && player.getKnowledge() >= Inventory[i][0].spellKnowledgeRequirement)
                        {
                            for (var sssp = 0; sssp < tertiarySpells.length; sssp++)
                            {
                                if (Inventory[i][0].spellID == tertiarySpells[sssp].ID)
                                {
                                    tertiarySpells[sssp].name = Inventory[i][0].spellName;
                                    tertiarySpells[sssp].cost = Inventory[i][0].spellCost;
                                    tertiarySpells[sssp].cooldown = Inventory[i][0].spellCooldown;
                                    tertiarySpells[sssp].description = Inventory[i][0].spellDescription;
                                    tertiarySpells[sssp].EXP = Inventory[i][0].spellEXP;
                                    slaps += 1;
                                }
                            }

                            if (slaps == 0 && (this.memory - 1) >= 0)
                            {
                                this.will = 0;
                                this.memory -= 1;
                                this.spellzLearned += 1;
                                tertiarySpells.push({name: Inventory[i][0].spellName, ID: Inventory[i][0].spellID, equipped: false, cost: Inventory[i][0].spellCost, cooldown: Inventory[i][0].spellCooldown, description: Inventory[i][0].spellDescription, EXP: Inventory[i][0].spellEXP});
                            }
                        }
                    }
                    else if (Inventory[i][0].utility == "ranged")
                    {
                        //equpping a ranged weapon
                        if (this.isWeaponEquipped == false)
                        {
                            Inventory[i][0].equipped = true;
                            this.isWeaponEquipped = true;
                            this.weaponEquipped = Inventory[i][0].type;
                            this.rangedWeaponType = Inventory[i][0].subUtility;
                            this.weaponIsRanged = true;

                            if (Inventory[i][0].subUtility == "bow")
                            {
                                this.projectileReleased = true;
                            }
                            else if (Inventory[i][0].subUtility == "bow")
                            {
                                this.projectileReleased = false;
                            }
                        }
                        else
                        {
                            //unequipping a ranged weapon
                            if (Inventory[i][0].equipped == true)
                            {
                                Inventory[i][0].equipped = false;
                                this.isWeaponEquipped = false;
                                this.rangedWeaponType = "none";
                                this.weaponEquipped = "none";
                                this.weaponIsRanged = false;
                            }
                        }
                    }
                    else if (Inventory[i][0].utility == "ammunition")
                    {
                        //equpping a ranged weapon
                        if (this.isAmmoEquipped == false)
                        {
                            Inventory[i][0].equipped = true;
                            this.isAmmoEquipped = true;
                        }
                        else
                        {
                            //unequipping a ranged weapon
                            if (Inventory[i][0].equipped == true)
                            {
                                Inventory[i][0].equipped = false;
                                this.isAmmoEquipped = false;
                            }
                        }
                    }
                    else if (Inventory[i][0].utility == "worn")
                    {
                        if (Inventory[i][0].subUtility == "armour" || Inventory[i][0].subUtility == "clothing" || Inventory[i][0].subUtility == "magic")
                        {
                            //equpping armour
                            if (this.isArmourEquipped == false)
                            {
                                Inventory[i][0].equipped = true;
                                this.isArmourEquipped = true;
                                this.outfitEquipped = Inventory[i][0].type;
                                //console.log(Inventory[i][0].type + " :: " + this.armour);
                            }
                            else
                            {
                                //console.log(Inventory[i][0].type + " :: " + this.armour);
                                //unequipping armour
                                if (Inventory[i][0].equipped == true)
                                {
                                    Inventory[i][0].equipped = false;
                                    this.isArmourEquipped = false;
                                    this.outfitEquipped = "none";
                                }
                            }
                        }
                        else if (Inventory[i][0].subUtility == "gloves")
                        {
                            //equpping gloves
                            if (this.areGlovesEquipped == false)
                            {
                                Inventory[i][0].equipped = true;
                                this.areGlovesEquipped = true;
                                this.glovesEquipped = Inventory[i][0].type;
                            }
                            else
                            {
                                //unequipping gloves
                                if (Inventory[i][0].equipped == true)
                                {
                                    Inventory[i][0].equipped = false;
                                    this.areGlovesEquipped = false;
                                    this.glovesEquipped = "none";
                                }
                            }
                        }
                        else if (Inventory[i][0].subUtility == "necklace")
                        {
                            //equpping necklace
                            if (this.isNecklaceEquipped == false)
                            {
                                Inventory[i][0].equipped = true;
                                this.isNecklaceEquipped = true;
                                this.necklaceEquipped = Inventory[i][0].type;
                            }
                            else
                            {
                                //unequipping necklace
                                if (Inventory[i][0].equipped == true)
                                {
                                    Inventory[i][0].equipped = false;
                                    this.isNecklaceEquipped = false;
                                    this.necklaceEquipped = "none";
                                }
                            }
                        }
                        else if (Inventory[i][0].subUtility == "ring")
                        {
                            //equpping ring
                            if (this.isRingEquipped == false)
                            {
                                Inventory[i][0].equipped = true;
                                this.isRingEquipped = true;
                                this.ringEquipped = Inventory[i][0].type;
                            }
                            else
                            {
                                //unequipping ring
                                if (Inventory[i][0].equipped == true)
                                {
                                    Inventory[i][0].equipped = false;
                                    this.isRingEquipped = false;
                                    this.ringEquipped = "none";
                                }
                            }
                        }
                        else if (Inventory[i][0].subUtility == "boots")
                        {
                            //equpping boots
                            if (this.areBootsEquipped == false)
                            {
                                Inventory[i][0].equipped = true;
                                this.areBootsEquipped = true;
                                this.bootsEquipped = Inventory[i][0].type;
                            }
                            else
                            {
                                //unequipping boots
                                if (Inventory[i][0].equipped == true)
                                {
                                    Inventory[i][0].equipped = false;
                                    this.areBootsEquipped = false;
                                    this.bootsEquipped = "none";
                                }
                            }
                        }
                    }
                    else
                    {
                        if (Inventory[i][0].ability == "lighter")
                        {

                            var useLight = false;

                            for (var f = 0; f < Inventory.length; f++)
                            {
                                if (Inventory[f][0].type == "fireStarter")
                                {
                                    useLight = true;
                                    break;
                                }
                            }

                            if (useLight)
                            {
                                //Light instruments give light effect to player when used.
                                if (Inventory[i][0].type == "oilLantern" || Inventory[i][0].type == "oilLantern4" || Inventory[i][0].type == "oilLantern3" || Inventory[i][0].type == "oilLantern2" || Inventory[i][0].type == "oilLantern1")
                                {
                                    if (shiftKey)
                                    {
                                        useLight = false;
                                        if (Inventory[i][0].type == "oilLantern")
                                        {
                                            scenicList.push(new Scenery("oilLantern", X, Y, Math.random() * Math.PI, false, [1800, 5]));
                                        }
                                        else if (Inventory[i][0].type == "oilLantern4")
                                        {
                                            scenicList.push(new Scenery("oilLantern", X, Y, Math.random() * Math.PI, false, [1800, 4]));
                                        }
                                        else if (Inventory[i][0].type == "oilLantern3")
                                        {
                                            scenicList.push(new Scenery("oilLantern", X, Y, Math.random() * Math.PI, false, [1800, 3]));
                                        }
                                        else if (Inventory[i][0].type == "oilLantern2")
                                        {
                                            scenicList.push(new Scenery("oilLantern", X, Y, Math.random() * Math.PI, false, [1800, 2]));
                                        }
                                        else
                                        {
                                            scenicList.push(new Scenery("oilLantern", X, Y, Math.random() * Math.PI, false, [1800, 1]));
                                        }
                                    }
                                    else
                                    {
                                        player.timeSinceLightSourceFuelUsed = new Date().getTime();
                                        player.lightSourceDuration = 1800;
                                        player.lightSource = "oilLantern";
                                    }
                                }
                                else if (Inventory[i][0].type == "oilLamp" || Inventory[i][0].type == "oilLamp2" || Inventory[i][0].type == "oilLamp1")
                                {
                                    if (shiftKey)
                                    {
                                        useLight = false;
                                        if (Inventory[i][0].type == "oilLamp")
                                        {
                                            scenicList.push(new Scenery("oilLamp", X, Y, Math.random() * Math.PI, false, [1200, 3]));
                                        }
                                        else if (Inventory[i][0].type == "oilLamp2")
                                        {
                                            scenicList.push(new Scenery("oilLamp", X, Y, Math.random() * Math.PI, false, [1200, 2]));
                                        }
                                        else
                                        {
                                            scenicList.push(new Scenery("oilLamp", X, Y, Math.random() * Math.PI, false, [1200, 1]));
                                        }
                                    }
                                    else
                                    {
                                        player.timeSinceLightSourceFuelUsed = new Date().getTime();
                                        player.lightSourceDuration = 1200;
                                        player.lightSource = "oilLamp";
                                    }
                                }
                                else if (Inventory[i][0].type == "candle" || Inventory[i][0].type == "candle2" || Inventory[i][0].type == "candle1")
                                {
                                    if (shiftKey)
                                    {
                                        useLight = false;
                                        if (Inventory[i][0].type == "candle")
                                        {
                                            scenicList.push(new Scenery("candle", X, Y, Math.random() * Math.PI, false, [180, 3]));
                                        }
                                        else if (Inventory[i][0].type == "candle2")
                                        {
                                            scenicList.push(new Scenery("candle", X, Y, Math.random() * Math.PI, false, [180, 2]));
                                        }
                                        else
                                        {
                                            scenicList.push(new Scenery("candle", X, Y, Math.random() * Math.PI, false, [180, 1]));
                                        }
                                    }
                                    else
                                    {
                                        player.timeSinceLightSourceFuelUsed = new Date().getTime();
                                        player.lightSourceDuration = 180;
                                        player.lightSource = "candle";
                                    }
                                }
                                else if (Inventory[i][0].type == "jackOLantern" || Inventory[i][0].type == "jackOLantern2" || Inventory[i][0].type == "jackOLantern1")
                                {
                                    if (shiftKey)
                                    {
                                        useLight = false;
                                        if (Inventory[i][0].type == "jackOLantern")
                                        {
                                            scenicList.push(new Scenery("jackOLantern", X, Y, Math.random() * Math.PI, false, [540, 3]));
                                        }
                                        else if (Inventory[i][0].type == "jackOLantern2")
                                        {
                                            scenicList.push(new Scenery("jackOLantern", X, Y, Math.random() * Math.PI, false, [540, 2]));
                                        }
                                        else
                                        {
                                            scenicList.push(new Scenery("jackOLantern", X, Y, Math.random() * Math.PI, false, [540, 1]));
                                        }
                                    }
                                    else
                                    {
                                        player.timeSinceLightSourceFuelUsed = new Date().getTime();
                                        player.lightSourceDuration = 540;
                                        player.lightSource = "jackOLantern";
                                    }
                                }

                                //some items when used will give you an item when they are used.
                                if (Inventory[i][0].subUtility == "reusable" && useLight)
                                {
                                    var hits = 0;
                                    for (var rr = 0; rr < Inventory[i][0].refund.length; rr ++)
                                    {
                                        for (var r = 0; r < Inventory.length; r ++)
                                        {
                                            if (Inventory[r][0].type == Inventory[i][0].refund[rr][0])
                                            {
                                                Inventory[r][1] += Inventory[i][0].refund[rr][1];
                                                break;
                                            }
                                            else
                                            {
                                                hits += 1;
                                            }
                                        }
                                        if (hits == Inventory.length)
                                        {
                                            Inventory.push([new Item(Inventory[i][0].refund[rr][0], false, false), Inventory[i][0].refund[rr][1]]);
                                        }
                                    }
                                }

                                if (Inventory[i][1] > 1)
                                {
                                    Inventory[i][1] -= 1;
                                }
                                else
                                {
                                    Inventory.splice(i, 1);
                                }
                            }
                        }
                        else if (Inventory[i][0].ability == "mofuHatch")
                        {
                            var canPlace = true;
                            var hits = 0;
                            for (var j = 0; j < scenicList.length; j++)
                            {
                                //5 is the radius of mofuEgg Scenery Object.
                                if (scenicList[j].X - 5 <= X + scenicList[j].radius && scenicList[j].X + 5 >= X - scenicList[j].radius && scenicList[j].Y - 5 <= Y + scenicList[j].radius && scenicList[j].Y + 5 >= Y - scenicList[j].radius)
                                {
                                    canPlace = false;
                                }
                            }

                            if (canPlace == true)
                            {
                                scenicList.push(new Scenery("fertilizedMofuEgg", X, Y, (Math.random() * (2 * Math.PI)), false));

                                if (Inventory[i][1] - 1 <= 0)
                                {
                                    Inventory.splice(i, 1);
                                }
                                else
                                {
                                    Inventory[i][1] -= 1;
                                }
                                break;
                            }
                        }
                        else if (Inventory[i][0].ability == "grewbleHatch")
                        {
                            var canPlace = true;
                            var hits = 0;
                            for (var j = 0; j < scenicList.length; j++)
                            {
                                //5 is the radius of mofuEgg Scenery Object.
                                if (scenicList[j].X - 5 <= X + scenicList[j].radius && scenicList[j].X + 5 >= X - scenicList[j].radius && scenicList[j].Y - 5 <= Y + scenicList[j].radius && scenicList[j].Y + 5 >= Y - scenicList[j].radius)
                                {
                                    canPlace = false;
                                }
                            }

                            if (canPlace == true)
                            {
                                scenicList.push(new Scenery("grewbleEgg", X, Y, (Math.random() * (2 * Math.PI)), false));

                                if (Inventory[i][1] - 1 <= 0)
                                {
                                    Inventory.splice(i, 1);
                                }
                                else
                                {
                                    Inventory[i][1] -= 1;
                                }
                                break;
                            }
                        }
                        else if (Inventory[i][0].subUtility == "campFire")
                        {
                            var canPlace = true;
                            var hits = 0;
                            for (var j = 0; j < scenicList.length; j++)
                            {
                                //19 is the radius of campFire Scenery Object.
                                if (scenicList[j].X - 19 <= X + scenicList[j].radius && scenicList[j].X + 19 >= X - scenicList[j].radius && scenicList[j].Y - 19 <= Y + scenicList[j].radius && scenicList[j].Y + 19 >= Y - scenicList[j].radius)
                                {
                                    canPlace = false;
                                }
                            }
                            for (var j = 0; j < Inventory.length; j++)
                            {
                                if (Inventory[j][0].identity != "Fire-Starter")
                                {
                                    hits += 1;
                                }
                            }

                            if (hits == Inventory.length)
                            {
                                canPlace = false;
                            }

                            if (canPlace == true)
                            {
                                scenicList.push(new Scenery("campFire", X, Y, (Math.random() * (2 * Math.PI)), false));

                                if (Inventory[i][1] - 1 <= 0)
                                {
                                    Inventory.splice(i, 1);
                                }
                                else
                                {
                                    Inventory[i][1] -= 1;
                                }
                                break;
                            }
                        }
                        else if (Inventory[i][0].subUtility == "tent" && this.weaponEquipped == "hammer")
                        {
                            var canPlace = true;
                            var hits = 0;
                            var inFrontY = Y + Math.sin(this.rotation + 1/2 * Math.PI) * 52;
                            var inFrontX = X + Math.cos(this.rotation + 1/2 * Math.PI) * 52;
                            for (var j = 0; j < scenicList.length; j++)
                            {
                                //42 is the radius of tent Scenery Object.
                                if (scenicList[j].X - 42 <= inFrontX + scenicList[j].radius && scenicList[j].X + 42 >= inFrontX - scenicList[j].radius && scenicList[j].Y - 42 <= inFrontY + scenicList[j].radius && scenicList[j].Y + 42 >= inFrontY - scenicList[j].radius)
                                {
                                    canPlace = false;
                                }
                            }

                            if (canPlace == true)
                            {
                                scenicList.push(new Scenery("tent", inFrontX, inFrontY, (this.rotation), false));

                                if (Inventory[i][1] - 1 <= 0)
                                {
                                    Inventory.splice(i, 1);
                                }
                                else
                                {
                                    Inventory[i][1] -= 1;
                                }
                                break;
                            }
                        }
                        else if (Inventory[i][0].subUtility == "bandage")
                        {
                            if (Inventory[i][0].ability == "bandageI")
                            {
                                this.bandagedTime = Math.max(200, this.bandagedTime);
                            }
                            else if (Inventory[i][0].ability == "bandageII")
                            {
                                this.health += 0.5;
                                this.bandagedTime = Math.max(400, this.bandagedTime);
                            }
                            else if (Inventory[i][0].ability == "bandageIII")
                            {
                                this.health += 1;
                                this.bandagedTime = Math.max(640, this.bandagedTime);
                            }
                            else if (Inventory[i][0].ability == "bandageIV")
                            {
                                this.health += 2;
                                this.bandagedTime = Math.max(880, this.bandagedTime);
                            }
                            else if (Inventory[i][0].ability == "bandageV")
                            {
                                this.health += 3;
                                this.bandagedTime = Math.max(1200, this.bandagedTime);
                            }
                            //todo if bleeding effect is a thing have that be stopped by bandages here.
                            //delete bandage when used...
                            if (Inventory[i][1] - 1 <= 0)
                            {
                                Inventory.splice(i, 1);
                            }
                            else
                            {
                                Inventory[i][1] -= 1;
                            }
                            break;
                        }
                    }
                }
                else if (lowBar == "inventory" && lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                {
                    itemDescriptionBox = true;
                    //this allows intelligence based descriptions if the player's character meets the correct requirements in intelligence.
                    var regProps;
                    var intDes;

                    if (Inventory[i][0].isRegenerative == true)
                    {
                        regProps = true;
                    }
                    else
                    {
                        regProps = false;
                    }

                    if (this.intelligence >= Inventory[i][0].intForDes)
                    {
                        intDes = true;
                    }
                    else
                    {
                        intDes = false;
                    }

                    //This is the Item Information Pannel
                    XXX.beginPath();
                    XXX.lineWidth = 1;
                    XXX.fillStyle = "lightGrey";
                    XXX.strokeStyle = "black";
                    XXX.rect(152, 458, 1247, 68);
                    XXX.fill();
                    XXX.stroke();

                    //The Name of the Item
                    XXX.font="bold 16px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText(Inventory[i][0].identity, 157, 474);

                    //The description of the item and perhaps also the intelligence description...
                    XXX.font="italic 15px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                    if (intDes == true)
                    {
                        XXX.fillText( " - " + Inventory[i][0].description + "   ' " + Inventory[i][0].intDescription + " ' ", 157, 490);
                    }
                    else
                    {
                        XXX.fillText( " - " + Inventory[i][0].description, 157, 490);
                    }

                    //Based on the utility of the item, different information is displayed to the player.
                    if (Inventory[i][0].utility == "food")
                    {
                        //How much hunger, thirst, and warmth it gives.
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        if (regProps == true)
                        {
                            XXX.fillText("      Food + " + Inventory[i][0].hunger + "   Drink + " + Inventory[i][0].thirst + "    Warming + " + Inventory[i][0].warmth + "    Energy + " + Inventory[i][0].generation + "    Health + " + Inventory[i][0].heal + "    Will + " + Inventory[i][0].replenish, 157, 514);
                        }
                        else
                        {
                            if (Inventory[i][0].warmth > 0)
                            {
                                XXX.fillText("      Food + " + Inventory[i][0].hunger + "   Drink + " + Inventory[i][0].thirst + "    Warming + " + Inventory[i][0].warmth, 157, 514);
                            }
                            else
                            {
                                XXX.fillText("      Food + " + Inventory[i][0].hunger + "   Drink + " + Inventory[i][0].thirst, 157, 514);
                            }
                        }
                    }
                    else if (Inventory[i][0].utility == "weapon")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText("      Damage + " + Math.floor(Inventory[i][0].damage) + "   Armour Negation + " + Math.floor(Inventory[i][0].negateArmour) + "    Magic + " + Math.floor(Inventory[i][0].magicalDamage) + "    Range + " + Math.floor(Inventory[i][0].distance) + "    Reach + " + Math.floor(Inventory[i][0].range) + "    Rate + " + Math.floor(Inventory[i][0].rate) + "    Energy Cost: " + Math.floor(Inventory[i][0].energyCost), 157, 514);
                    }
                    else if (Inventory[i][0].utility == "ranged")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        if (Inventory[i][0].subUtility == "bow")
                        {
                            XXX.fillText("      Range + " + Math.floor(Inventory[i][0].range) + "   Rate + " + Math.floor(Inventory[i][0].rate) + "    Projectile Speed + " + Math.floor(Inventory[i][0].speed) + "    Armour Negation + " + Math.floor(Inventory[i][0].negateArmour), 157, 514);
                        }
                        else if (Inventory[i][0].subUtility == "crossbow")
                        {
                            XXX.fillText("      Range + " + Math.floor(Inventory[i][0].range) + "    Projectile Speed + " + Math.floor(Inventory[i][0].speed) + "    Armour Negation + " + Math.floor(Inventory[i][0].negateArmour), 157, 514);
                        }
                        else if (Inventory[i][0].subUtility == "gun")
                        {
                            XXX.fillText("      Range + " + Math.floor(Inventory[i][0].range) + "   Rate + " + Math.floor(Inventory[i][0].rate) + "    Projectile Speed + " + Math.floor(Inventory[i][0].speed * 2) + "    Armour Negation + " + Math.floor(Inventory[i][0].negateArmour), 157, 514);
                        }

                    }
                    else if (Inventory[i][0].utility == "ammunition")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText("      Type: " + Inventory[i][0].subUtilityName + "   Damage + " + Math.floor(Inventory[i][0].damage) + "    Magical Damage + " + Math.floor(Inventory[i][0].magicalDamage), 157, 514);
                    }
                    else if (Inventory[i][0].utility == "spell")
                    {
                        if (this.getKnowledge() >= Inventory[i][0].spellKnowledgeRequirement)
                        {
                            XXX.font="14px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                            if (Inventory[i][0].spellGroup != "Bind")
                            {
                                if (Inventory[i][0].damages == true)
                                {
                                    XXX.fillText("      Type: " + Inventory[i][0].spellGroup + "   Genre: " + Inventory[i][0].spellGenre + "    Damage + " + Math.floor(Inventory[i][0].spellDamage) + "    Cooldown + " + Math.floor(Inventory[i][0].spellCooldown) + "    Casting Distance: " + Inventory[i][0].spellRange + "    Knowledge Requirement: " + Math.floor(Inventory[i][0].spellKnowledgeRequirement), 157, 514);
                                }
                                else
                                {
                                    XXX.fillText("      Type: " + Inventory[i][0].spellGroup + "   Genre: " + Inventory[i][0].spellGenre + "    Cooldown + " + Math.floor(Inventory[i][0].spellCooldown) + "    Knowledge Requirement: " + Math.floor(Inventory[i][0].spellKnowledgeRequirement), 157, 514);
                                }
                            }
                            else
                            {
                                XXX.fillText("      Type: " + Inventory[i][0].spellGroup + "   Genre: " + Inventory[i][0].spellGenre + "    Knowledge Requirement: " + Math.floor(Inventory[i][0].spellKnowledgeRequirement), 157, 514);
                            }
                        }
                        else
                        {
                            XXX.font="14px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText("      Junk", 157, 514);
                        }
                    }
                    else if (Inventory[i][0].utility == "material")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText("      Material", 157, 514);
                    }
                    else if (Inventory[i][0].utility == "currency")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText(Inventory[i][1], 237, 514);
                        XXX.fillText("      Currency", 157, 514);
                    }
                    else if (Inventory[i][0].utility == "junk")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText("      Junk", 157, 514);
                    }
                    else if (Inventory[i][0].utility == "tool")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText("      Utility", 157, 514);
                    }
                    else if (Inventory[i][0].utility == "book")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText("      Book", 157, 514);
                    }
                    else if (Inventory[i][0].utility == "recipe")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText("      Recipe", 157, 514);
                    }
                    else if (Inventory[i][0].utility == "questItem")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText("      Quest Item", 157, 514);
                    }
                    else if (Inventory[i][0].utility == "package")
                    {
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText("      Package", 157, 514);
                    }
                    else if (Inventory[i][0].utility == "worn")
                    {
                        //How much hunger, thirst, and warmth it gives.
                        XXX.font="14px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        if (Inventory[i][0].subUtility == "armour")
                        {
                            XXX.fillText("      Armour + " + Math.floor(Inventory[i][0].protection) + "   Magical Resistance  + " + Inventory[i][0].magicalProtection + "    Heat Resistance + " + Inventory[i][0].thirstRetention + "    Cold Resistance + " + Inventory[i][0].warmthRetention + "    Toughness Required: " + Math.floor(Inventory[i][0].toughnessRequirement), 157, 514);
                        }
                        else if (Inventory[i][0].subUtility == "clothing" || Inventory[i][0].subUtility == "gloves" || Inventory[i][0].subUtility == "boots")
                        {
                            XXX.fillText("      Heat Resistance + " + Inventory[i][0].thirstRetention + "    Cold Resistance + " + Inventory[i][0].warmthRetention, 157, 514);
                        }
                        else if (Inventory[i][0].subUtility == "necklace")
                        {
                            XXX.fillText("      Pendant", 157, 514);
                        }
                        else if (Inventory[i][0].subUtility == "ring")
                        {
                            XXX.fillText("      Ring", 157, 514);
                        }
                    }
                }
            }
        }
    };

    this.pickUpItem = function()
    {
        if (worldItems.length > 0 && gameState == "active" || worldItems.length > 0 && gameState == "stopTime")
        {
            if (dClick == true)
            {
                console.log( "worldItems:" );
                console.log( worldItems );

                for (var i = worldItems.length - 1; i > -1; i -= 1)
                {
                    this.distanceFromMouse = Math.sqrt((X - (X - mouseX + (1/2 * CCC.width)))  *   (X - (X - mouseX + (1/2 * CCC.width)))   +  (Y - (Y - mouseY + (1/2 * CCC.height)))  *   (Y - (Y - mouseY + (1/2 * CCC.height)))); //distanceToPlayerFromMouse
                    var itemDistanceToMouse = Math.sqrt((worldItems[i][0].X - (X - mouseX + (1/2 * CCC.width))) * (worldItems[i][0].X - (X - mouseX + (1/2 * CCC.width))) + (worldItems[i][0].Y - (Y - mouseY + (1/2 * CCC.height))) * (worldItems[i][0].Y - (Y - mouseY + (1/2 * CCC.height)))); //distanceToItemFromMouse
                    if (this.distanceFromMouse <= this.lootRadius && itemDistanceToMouse <= worldItems[i][0].size)
                    {
                        //console.log(i + " ;; " + itemDistanceToMouse + " ;; " + worldItems[i].type);
                        if (Inventory.length > 0)
                        {
                            var hits = 0;
                            for (var j = Inventory.length - 1; j > -1; j -= 1)
                            {
                                if (Inventory[j][0].type == worldItems[i][0].type)
                                {
                                    //console.log("sameType, changing quantity!");
                                    Inventory[j][1] += worldItems[i][1];
                                    worldItems.splice(i, 1);
                                    break;
                                }
                                else
                                {
                                    hits += 1; // if the type is not the same then add a hit.
                                }
                            }

                            if (hits >= Inventory.length) // if hits is equal to the length of the inventory that means that none of the inventory item types are matching.
                            {
                                //console.log("notSameType, adding item!")
                                Inventory.push([new Item(worldItems[i][0].type, false, false), worldItems[i][1]]);
                                worldItems.splice(i, 1);
                                break;
                            }
                        }
                        else
                        {
                            //console.log("no items in list, adding item!")

                            Inventory.push([new Item(worldItems[i][0].type, false, false), worldItems[i][1]]);
                            worldItems.splice(i, 1);
                        }
                    }
                }
            }
        }
    };

    this.inventoryScrolling = function()
    {
        //When the left inventory scroll is clicked scroll one to the left if there is one to the left otherwise don't.
        if (this.inventoryPosition < Inventory.length && lMouseX > 1379.5 && lMouseX < 1399.5 && lMouseY > 0.5 && lMouseY < 80 && clickReleased == true) //this (20.5, 0.5, 79, 79) is the position the first in the list will be in if the left scroll will not work.
        {
            clickReleased = false;
            this.timeSinceLastScrolled = new Date().getTime();
            invScroll -= 79;
            this.inventoryPosition += 1;
        }

        //When the right inventory scroll is clicked scroll one to the right if there is one to the right otherwise don't.
        if (this.inventoryPosition > 0 && lMouseX > 0.5 && lMouseX < 20.5 && lMouseY > 0.5 && lMouseY < 80 && clickReleased == true)
        {
            clickReleased = false;
            this.timeSinceLastScrolled = new Date().getTime();
            invScroll += 79;
            this.inventoryPosition -= 1;
        }
    };

    //Health bar
    this.drawHealthBar = function()
    {
        //This is the background for the bar.
        XXX.beginPath();
        XXX.lineWidth = 1;
        XXX.strokeStyle = "black";
        XXX.fillStyle = "lightGrey";
        XXX.rect(1, 527, 150, 22);
        XXX.fill();
        XXX.stroke();
        //This is the layer that shows how much has been lost in the current fight.
        XXX.beginPath();
        XXX.fillStyle = "red";
        XXX.rect((this.health / this.healthMAX) * 151, 527, (this.decreaseInHealth / this.healthMAX) * 150, 22);
        XXX.fill();
        //This is the layer that changes to represent the amount.
        XXX.beginPath();
        XXX.fillStyle = "lightGreen";
        XXX.rect(1, 527, (this.health / this.healthMAX) * 150, 22);
        XXX.fill();

        // When the mouse hovers over it says its type.
        if (mouseX > 1 && mouseX < 151 && mouseY > 527 && mouseY < 549)
        {
            if (this.mageShieldMAX == 0 || this.mageShield <= 0 || shiftKey)
            {
                XXX.fillStyle ="black";
                XXX.font = "16px Serif";
                XXX.fillText("Health: " + Math.floor(this.health) + "/" + Math.floor(this.healthMAX), 31, 544);
            }
        }

    };

    //Mage Shield Bar
    this.drawMageShieldBar = function()
    {
        if (mouseX > 1 && mouseX < 151 && mouseY > 527 && mouseY < 549 && shiftKey)
        {
            XXX.save();
            //This is the layer that changes to represent the amount.
            XXX.beginPath();
            XXX.fillStyle = this.mageShieldColour;
            XXX.globalAlpha = 0.25;
            XXX.rect(1, 527, (this.mageShield / this.mageShieldMAX) * 150, 22);
            XXX.fill();
            XXX.restore();
        }
        else
        {
            //This is the layer that changes to represent the amount.
            XXX.beginPath();
            XXX.fillStyle = this.mageShieldColour;
            XXX.rect(1, 527, (this.mageShield / this.mageShieldMAX) * 150, 22);
            XXX.fill();

        }

        // When the mouse hovers over it says its type.
        if (mouseX > 1 && mouseX < 151 && mouseY > 527 && mouseY < 549)
        {
            if (this.mageShieldMAX != 0 && this.mageShield > 0 && !shiftKey)
            {
                XXX.fillStyle ="black";
                XXX.font = "16px Serif";
                XXX.fillText("Shielding: " + Math.floor(this.mageShield) + "/" + Math.floor(this.mageShieldMAX), 31, 544);
            }
        }

    };

    //AntiVenom bar
    this.drawAntiVenomBar = function()
    {
        var avY;
        if (showAntiVenomBar)
        {
            avY = 1;
        }
        else
        {
            avY = -200;
        }

        //This is the background for the bar.
        XXX.beginPath();
        XXX.lineWidth = 1;
        XXX.strokeStyle = "black";
        XXX.fillStyle = "lightGrey";
        XXX.rect(1, avY + 27, 150, 22);
        XXX.fill();
        XXX.stroke();

        //This is the layer that changes to represent the amount.
        XXX.beginPath();
        XXX.fillStyle = "Green";
        XXX.rect(1, avY + 27, (this.health / this.healthMAX) * 150, 22);
        XXX.fill();

        // When the mouse hovers over it says its type.
        if (mouseX > 1 && mouseX < 151 && mouseY > avY + 27 && mouseY < avY + 49)
        {
            XXX.fillStyle ="black";
            XXX.font = "16px Serif";
            XXX.fillText("Anti-Venom: " + Math.floor(this.antiVenom) + "/" + Math.floor(this.antiVenomMAX), 31, avY + 44);
        }
    };
    //Energy Bar
    this.drawStaminaBar = function()
    {
        XXX.beginPath();
        XXX.strokeStyle = "black";
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = 1;
        XXX.rect(1, 504, 150, 22);
        XXX.fill();
        XXX.stroke();
        //This is the layer that changes to represent the amount.
        XXX.beginPath();
        XXX.lineWidth = 1;
        XXX.fillStyle = "yellow";
        XXX.rect(1, 504, (this.energy / this.energyMAX) * 150, 22);
        XXX.fill();

        // When the mouse hovers over it says its type.
        if (mouseX > 1 && mouseX < 151 && mouseY > 504 && mouseY < 526)
        {
            XXX.fillStyle ="black";
            XXX.font = "16px Serif";
            XXX.fillText("Energy: " + Math.floor(this.energy) + "/" + this.energyMAX, 31, 521);
        }

    };
    //Hunger Bar
    this.drawHungerBar = function()
    {
        //This is the background for the bar.
        XXX.beginPath();
        XXX.lineWidth = 1;
        XXX.strokeStyle = "black";
        XXX.fillStyle = "lightGrey";
        XXX.rect(1, 481, 150, 22);
        XXX.fill();
        XXX.stroke();
        //This is the layer that changes to represent the amount.
        XXX.beginPath();
        XXX.fillStyle = "orangered";
        XXX.rect(1, 481, (this.hunger / this.hungerMAX) * 150, 22);
        XXX.fill();

        // When the mouse hovers over it says its type.
        if (mouseX > 1 && mouseX < 151 && mouseY > 481 && mouseY < 503)
        {
            XXX.fillStyle ="black";
            XXX.font = "16px Serif";
            XXX.fillText("Hunger: " + Math.floor(this.hunger) + "/" + this.hungerMAX, 31, 498);
        }

    };
    //Willpower Bar
    this.drawWillBar = function()
    {
        //This is the background for the bar.
        XXX.beginPath();
        XXX.lineWidth = 1;
        XXX.strokeStyle = "black";
        XXX.fillStyle = "lightGrey";
        XXX.rect(1, 435, 150, 22);
        XXX.fill();
        XXX.stroke();
        //This is the layer that changes to represent the amount.
        XXX.beginPath();
        XXX.fillStyle = "mediumpurple";
        XXX.rect(1, 435, (this.will / this.willMAX) * 150, 22);
        XXX.fill();

        // When the mouse hovers over it says its type.
        if (mouseX > 1 && mouseX < 151 && mouseY > 435 && mouseY < 457)
        {
            XXX.fillStyle ="black";
            XXX.font = "16px Serif";
            XXX.fillText("Will: " + Math.floor(this.will) + "/" + Math.floor(this.willMAX), 31, 452);
        }
    };
    //Thirst Bar
    this.drawThirstBar = function()
    {
        //This is the background for the bar.
        XXX.beginPath();
        XXX.lineWidth = 1;
        XXX.strokeStyle = "black";
        XXX.fillStyle = "lightGrey";
        XXX.rect(1, 458, 150, 22);
        XXX.fill();
        XXX.stroke();
        //This is the layer that changes to represent the amount.
        XXX.beginPath();
        XXX.fillStyle = "lightBlue";
        XXX.rect(1, 458, (this.thirst / this.thirstMAX) * 150, 22);
        XXX.fill();

        // When the mouse hovers over it says its type.
        if (mouseX > 1 && mouseX < 151 && mouseY > 458 && mouseY < 480)
        {
            XXX.fillStyle ="black";
            XXX.font = "16px Serif";
            XXX.fillText("Thirst: " + Math.floor(this.thirst) + "/" + Math.floor(this.thirstMAX), 31, 475);
        }
    };

    //FUNCTION FOR COMPACTING ALL USER INTERFACE FUNCTIONS
    this.UI = function()
    {

        //UI Bar
        this.buildUIBar(); //#UI Bar
        this.uiButton(); //#Inventory
        this.highlightSelectedUI(); //#UI Bar
        this.toggleUIIcon(); //#UI Bar

        //Stat Bars
        if (gameState == "active" || gameState == "stopTime" || gameState == "popUp")
        {
            XXX.textAlign = "left";
            this.drawWillBar(); //#Stat Bar
            this.drawHungerBar(); //#Stat Bar
            this.drawStaminaBar(); //#Stat Bar
            this.drawHealthBar(); //#Stat Bar
            this.drawThirstBar(); //#Stat Bar
            this.drawMageShieldBar();
        }
        this.drawAntiVenomBar(); //#Stat Bar //this is a developer stat bar only and it also is used to take the fall for an animation glitch that only affects the last stat bar drawn.

        //Dialogue
        this.displayDialogue(); //#Dialogue

        //Crafting
        this.displayCrafting(); //#Crafting

        //Spellbook
        this.displayMagicMenu(); //#Spellbook

        //Shop
        this.displayShop(); //#Shop

        //Bank
        this.displayBank(); //#Bank

        //Beast Journal
        this.displayBeastJournal(); //#BeastJournal

        //Quest Log
        this.displayQuestLog(); //#QuestLog

        //Skills
        this.displayCharacterInfo(); //#Skills

        //Dialogue
        //this.displayDialogueOptions(); //#Diaglogue

        //Saves
        this.displaySaves(); //#Saves

        //Inventory
        if (lowBar != "beastJournal")
        {
            this.inventoryScrolling(); //#Inventory
        }
        this.displayInventory(); //#Inventory
        this.pickUpItem(); //#Inventory
        this.interactWithInventory(); //#Inventory
    };

    //STAT RECHARGING
    //Health
    this.healthRegeneration = function()
    {
        if (this.movingType == 0 && this.inCombat == false && spaceKey == false && this.attacking == false && this.health < this.healthMAX && this.health > (this.healthMAX * 1/2) && this.energy >= this.energyMAX && this.hunger >= (8/10 * this.hungerMAX) && this.thirst >= (8/10 * this.thirstMAX) && this.fleshMites == false && this.bandaged) //Restore health faster if not in combat and not moving and well watered and fed, and only if above 3/5 health and full energy: A bandage must be used.
        {
            this.health += 5 * (TTD / (45000 - 420 * Math.min(58.333, this.getEndurance()) * 2));
        }
        else if (this.movingType == 0 && this.inCombat == false && spaceKey == false && this.attacking == false && this.health < this.healthMAX && this.health > (this.healthMAX * 3/5) && this.energy >= this.energyMAX && this.hunger >= (9/10 * this.hungerMAX) && this.thirst >= (9/10 * this.thirstMAX) && this.fleshMites == false && this.getEndurance() >= 10) //Restore health faster if not in combat and not moving and well watered and fed, and only if above 3/5 health and full energy: If level 10 endurance is achieved.
        {
            this.health += 2 * (TTD / (45000 - 420 * Math.min(58.333, this.getEndurance()) * 2));
        }
        else if (this.health < this.healthMAX && this.health > 0 && this.fleshMites == false && this.hunger > 0 && this.thirst > 0)
        {
            this.health += 1 * (TTD / (45000 - 420 * Math.min(58.333, this.getEndurance()) * 2));
        }
        if (this.health > this.healthMAX)
        {
            this.health = this.healthMAX;
        }
        else if (this.health < 0)
        {
            this.health = 0;
        }
    };

    this.mageShieldRegeneration = function()
    {
        if (!this.inCombat && this.mageShield < 0)
        {
            this.mageShield = 0;
        }

        if (this.mageShieldMAX > 0)
        {
            if (this.mageShield < this.mageShieldMAX)
            {
                this.mageShield += 1 * (TTD / (this.mageShieldRate * 100));
            }
            if (this.mageShield > this.mageShieldMAX)
            {
                this.mageShield = this.mageShieldMAX;
            }
        }
    };

    this.antiVenomRegeneration = function()
    {
        if (this.antiVenom < this.antiVenomMAX)
        {
            this.antiVenom += 1 * (TTD / (120000 - 820 * this.getEndurance() * 2));
        }
        if (this.antiVenom > this.antiVenomMAX)
        {
            this.antiVenom = this.antiVenomMAX;
        }
        else if (this.antiVenom < 0)
        {
            this.antiVenom = 0;
        }
    };

    //Energy
    this.energyRegeneration = function()
    {
        if (this.movingType != 2)
        {
            //ENERGY REGENERATION
            if (this.hunger > 1/10 * this.hungerMAX) //if the hunger is greater than 1/10 regeneration is allowed.
            {
                if (this.energy < this.energyMAX)
                {
                    this.energy += 1 * (TTD / (6000 - 57 * Math.min(52, this.getEndurance()) * 2));
                }

                //increased regeneration speed when not in combat and not moving and when you are not at lower than two thirds of your maximum energy.
                if (this.movingType == 0 && this.inCombat == false && spaceKey == false && this.attacking == false) //Restore energy faster if not in combat and not moving.
                {
                    if (this.energy >= (2/3 * this.energyMAX))
                    {
                        this.energy += 1 * (TTD / (2000 - 10 * Math.min(52, this.getEndurance()) * 2));
                    }
                }

                //Sets energy to max if it exceeds maximum energy.
                if (this.energy > this.energyMAX)
                {
                    this.energy = this.energyMAX;
                }
            }
        }
        else if (this.movingType == 2) //Drain energy while running rather than regenerate it.
        {
            if (this.energy > 0)
            {
                this.energy -= 1 * energil * (TTD / (1300 + 50 * Math.min(52, this.getEndurance()) * 2));
            }

            if (this.energy < 0)
            {
                this.energy = -5;
            }
        }
    };
    //Hunger
    //this is a timer that starts whenever food is eaten, it makes it so that hunger doesn't go down for a little while directly after eating food.
    this.fedTimer = function()
    {
        if (this.fed == true)
        {
            this.fedClock = 50 + 1/2 * this.getEndurance() * 2;
            this.fed = false;
        }
        if (this.fedClock > 0)
        {
            this.satiated = true;
            this.fedClock -= 1 * (TTD / 1400);
        }
        else
        {
            //console.log(this.fedClock);
            this.satiated = false;
        }

        if (this.watered == true)
        {
            this.wateredClock = 50 + 1/2 * this.getEndurance() * 2;
            this.watered = false;
        }
        if (this.wateredClock > 0)
        {
            this.quenched = true;
            this.wateredClock -= 1 * (TTD / 1400);
        }
        else
        {
            this.quenched = false;
        }
    };
    //this is the hunger timer.
    this.hungerClock = function()
    {
        if (this.satiated == false)
        {
            this.hunger -= 1 * (TTD / (40000 + 300 * this.getEndurance() * 2));

            if (this.hunger <= 1/10 * this.hungerMAX && this.hunger > -10) // at 1/10 of hunger the player loses the use of energy... That means no attacks.
            {
                this.energy = Math.max(-5, this.energy - 1 * (TTD / (1000 + 100 * this.getEndurance() * 2)));
            }
            if (this.hunger <= 0)
            {
                this.hunger = 0;
                this.health -= 1 * (TTD / (1000 + 100 * this.getEndurance() * 2));
            }
        }
    };
    //this is the hunger timer.
    this.thirstClock = function()
    {
        if (this.quenched == false)
        {
            this.thirst -= 1 * (TTD / (60000 + 200 * this.getEndurance() * 2));

            if (this.thirst <= 0)
            {
                console.log("pass");
                this.thirst = 0;
                this.health -= 2 * (TTD / (1000 + 100 * this.getEndurance() * 2));
            }
        }

        if (this.thirst >= this.thirstMAX)
        {
            this.thirst = this.thirstMAX;
        }
    };
    //WILL
    this.willRegeneration = function()
    {
        if (this.will < this.willMAX)
        {
            this.will += 1 * (TTD / (10000 - 95 * this.getMemory()));
        }
        if (this.will > this.willMAX)
        {
            this.will = this.willMAX;
        }

        if (this.will < -10)
        {
            this.will = -10;
        }
    };
    //FUNCTION FOR COMPACTING ALL STAT RECHARGE FUNCTIONS
    this.statRecharge = function()
    {
        this.willRegeneration();
        this.fedTimer();
        this.hungerClock();
        this.thirstClock();
        this.energyRegeneration();
        this.antiVenomRegeneration();
        this.mageShieldRegeneration();
        if (this.inCombat == false)
        {
            this.healthRegeneration();
        }
        else
        {
            if (this.health > this.healthMAX)
            {
                this.health = this.healthMAX;
            }
            else if (this.health < 0)
            {
                this.health = 0;
            }
        }
    };

    //OUT OF COMBAT SENSING
    this.engagedSenser = function()
    {
        if (this.inCombat == true)
        {
            var hits = 0;
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i ++)
            {
                if (ArtificialIntelligenceAccess[i].playerSeen == false || ArtificialIntelligenceAccess[i].playerSeen == true && ArtificialIntelligenceAccess[i].disturbed == false && ArtificialIntelligenceAccess[i].type == "Soldier" || ArtificialIntelligenceAccess[i].playerSeen == true && ArtificialIntelligenceAccess[i].disturbed == false && ArtificialIntelligenceAccess[i].type == "Person")
                {
                    hits += 1;
                }
            }

            if (hits == ArtificialIntelligenceAccess.length) // || this.noticed == false
            {
                this.inCombat = false;
                this.decreaseInHealth = 0; // this is how much health is displayed as blood red for the player;
            }
        }
    };
    //DEATH SENSING
    this.deathSensor = function()
    {
        if (this.health <= 0 && this.playerDeath != true)
        {
            //Do death stuff
            this.playerDeath = true;
            gameState = "paused";
            //Go to main menu upon death.
            location.reload();

            /*
             //respawn
             X = spawnX;
             Y = spawnY;

             //clear effects
             this.gojiiPoisoned = false;
             this.gojiiTimer = 0;
             this.poisoned = false;
             this.poisonI = false;
             this.poisonII = false;
             this.poisonIII = false;
             this.poisonIV = false;
             this.poisonV = false;
             this.gutWorms = false;
             this.freezing = false;
             this.recoveryTime = 0;
             this.energizeTime = 0;
             this.timeSinceRawTrollBlood = 0;

             //refresh all stats to max
             this.health = this.healthMAX;
             this.energy = this.energyMAX;
             this.hunger = this.hungerMAX;
             this.will = this.willMAX;
             this.warmth = this.warmthMAX;
             this.antiVenom = this.antiVenomMAX;

             //reset functionality variables
             this.inCombat = false;
             this.decreaseInHealth = 0;

             //respawn bonus effects
             this.fed = true;

             //all items that are not equipped are lossed upon death
             for (var i = Inventory.length - 1; i > -1; i--)
             {
             if (Inventory[i][0].equipped == false)
             {
             Inventory.splice(i, 1);
             }
             }
             //all experience gained is lost
             this.experience = 0;
             this.magicalExperience = 0;

             //all units still alive get their health reset and their disturbance set back to false.
             for (var i = ArtificialIntelligenceAccess.length - 1; i > -1; i--)
             {
             if (ArtificialIntelligenceAccess[i].health < ArtificialIntelligenceAccess[i].healthMAX || ArtificialIntelligenceAccess[i].disturbed == true)
             {
             ArtificialIntelligenceAccess[i].disturbedTime = 0;
             ArtificialIntelligenceAccess[i].extraRangeTime = 0;
             ArtificialIntelligenceAccess[i].extraRange = 0;
             ArtificialIntelligenceAccess[i].disturbed = false;
             ArtificialIntelligenceAccess[i].health = ArtificialIntelligenceAccess[i].healthMAX;
             }
             }
             */
        }
    };

    //This is a test function that displays the players coords on the screen as text.
    this.tellCoordinates = function()
    {
        if (tellCoords == true)
        {
            XXX.beginPath();
            XXX.fillStyle ="gold";
            XXX.font = "30px courier";
            XXX.fillText("X: " + Math.floor(X) + " " + "Y: " + Math.floor(Y), this.myScreenX - 140, this.myScreenY + 60);
        }
    };

    //OPERATIONS [this is where everysingle function relating to the main character is activated from]
    this.operations = function(zindex)
    {
        if (zindex == this.zIndex)
        {
            this.cutcut = false; //just in case their was no scenery object available to turn it off it will be turned off after all have had the opportunity to register its on-ness.
            //this sets the players stats and is in charge of leveling for normal skills and magical ones.
            this.skillOperations();
            this.engagedSenser(); //This should be a more accurate way for not in combat to be registered.


            if (gameState == "active" || gameState == "stopTime") //This makes it so that the players operations do not play while the game is paused.
            {
                this.deathSensor();
                //stat based or altering effects
                this.effects();
                this.motion();
                this.pointAtMouse();
                this.movement();
            }
        }

        if (zindex == 6)
        {
            //USER INTERFACE
            this.UI(); //The user interface has to go here because otherwise it will break some of the player drawing animations...
        }

        if (zindex == this.zIndex)
        {
            if (gameState == "active" || gameState == "stopTime" || gameState == "popUp") //This makes it so that the players operations do not play while the game is paused.
            {
                //this.mountType = "Naaprid"; //mount test
                //this.mount();
                //Draw the player

                //the player's legs
                this.drawLegs();

                if (this.outfitZ == false)
                {
                    this.drawOutfit();
                }

                //this is rare, but some weapons draw below the body layer.
                if (this.weaponEquipped == "blunderbuss" || this.weaponEquipped == "musket" || this.weaponEquipped == "cutlass" || this.weaponEquipped == "freydicSword" || this.weaponEquipped == "freydicGreatSword" || this.weaponEquipped == "theNorthernGem" || this.weaponEquipped == "longbow" || this.weaponEquipped == "crossbow" || this.weaponEquipped == "nirineseSpear" || this.weaponEquipped == "iceBlade" || this.weaponEquipped == "kellishClaymore" || this.weaponEquipped == "smashStick" || this.weaponEquipped == "burningSmashStick" || this.weaponEquipped == "lightningCorseque") //add more cases for more overhead weapons.
                {
                    this.drawArms();
                }

                //For specific outfits there will be parts under and above so extra stuf will draw here for outfits. CAPES AND STUFF LIKE THAT...
                if (this.outfitEquipped == "freydicRoyalOutfit")
                {
                    if (this.movingType == 2 && this.energy > 0 && this.freeze <= 2)
                    {
                        this.wasCapeFlapping = true; //this lets the cape know it was showing so when the player slows down or stops moving the cape will ease back.
                        this.capeFlappiness += 1; //this is a variable that determines what costume the cape will be.
                        if (this.capeFlappiness > 100)
                        {
                            this.capeFlappiness = 0;
                        }

                        if (this.capeFlappiness <= 12.5 || this.capeFlappiness > 25 && this.capeFlappiness <= 37.5 || this.capeFlappiness > 50 && this.capeFlappiness <= 62.5 || this.capeFlappiness > 75 && this.capeFlappiness <= 87.5)
                        {
                            XXX.save();
                            XXX.translate(this.myScreenX, this.myScreenY);
                            XXX.rotate(this.rotation);
                            XXX.drawImage(verse, 3959, 347, 23, 33, -(1 / 2 * 27.6) + 2.7, -(1 / 2 * 39.6) + 20.5, 27.6, 39.6);
                            XXX.restore();
                        }
                        else if (this.capeFlappiness > 12.5 && this.capeFlappiness <= 25 || this.capeFlappiness > 37.5 && this.capeFlappiness <= 50 || this.capeFlappiness > 62.5 && this.capeFlappiness <= 75 || this.capeFlappiness > 87.5)
                        {
                            XXX.save();
                            XXX.translate(this.myScreenX, this.myScreenY);
                            XXX.rotate(this.rotation);
                            XXX.drawImage(verse, 3959, 286, 23, 33, -(1 / 2 * 27.6) + 2.7, -(1 / 2 * 39.6) + 20.5, 27.6, 39.6);
                            XXX.restore();
                        }
                    }
                    else if (this.wasCapeFlapping == true)
                    {
                        this.capeFlappiness = 40;
                        this.wasCapeFlapping = "gooblebunches";
                        //display the cape while codey stuff happens...
                        XXX.save();
                        XXX.translate(this.myScreenX, this.myScreenY);
                        XXX.rotate(this.rotation);
                        XXX.drawImage(verse, 3959, 286, 23, 33, -(1 / 2 * 27.6) + 2.7, -(1 / 2 * 39.6) + 20.5, 27.6, 39.6);
                        XXX.restore();
                    }
                    else if (this.wasCapeFlapping == "gooblebunches")
                    {
                        this.capeFlappiness -= 1; //this time cape flappiness referrs to the cape flapping down on its way out of being displayed.
                        if (this.capeFlappiness < 1)
                        {
                            this.capeFlappiness = 0;
                            this.wasCapeFlapping = false;
                        }

                        if (this.capeFlappiness > 0)
                        {
                            XXX.save();
                            XXX.translate(this.myScreenX, this.myScreenY);
                            XXX.rotate(this.rotation);
                            XXX.drawImage(verse, 3959, 286, 23, 33, -(1 / 2 * 27.6) + 2.7, -(1 / 2 * 39.6) + 20.5, 27.6, this.capeFlappiness);
                            XXX.restore();
                        }
                    }
                }
                else if (this.outfitEquipped == "varnFurCloak")
                {
                    if (this.movingType == 2 && this.energy > 0 && this.freeze <= 2)
                    {
                        this.wasCapeFlapping = true; //this lets the cape know it was showing so when the player slows down or stops moving the cape will ease back.
                        this.capeFlappiness += 1; //this is a variable that determines what costume the cape will be.
                        if (this.capeFlappiness > 100)
                        {
                            this.capeFlappiness = 0;
                        }

                        if (this.capeFlappiness <= 12.5 || this.capeFlappiness > 25 && this.capeFlappiness <= 37.5 || this.capeFlappiness > 50 && this.capeFlappiness <= 62.5 || this.capeFlappiness > 75 && this.capeFlappiness <= 87.5)
                        {
                            XXX.save();
                            XXX.translate(this.myScreenX, this.myScreenY);
                            XXX.rotate(this.rotation);
                            XXX.drawImage(verse, 3962, 384, 20, 30, -(1 / 2 * 26) - 1, -(1 / 2 * 39) + 20.5, 29.5, 39);
                            XXX.restore();
                        }
                        else if (this.capeFlappiness > 12.5 && this.capeFlappiness <= 25 || this.capeFlappiness > 37.5 && this.capeFlappiness <= 50 || this.capeFlappiness > 62.5 && this.capeFlappiness <= 75 || this.capeFlappiness > 87.5)
                        {
                            XXX.save();
                            XXX.translate(this.myScreenX, this.myScreenY);
                            XXX.rotate(this.rotation);
                            XXX.drawImage(verse, 3962, 414, 20, 30, -(1 / 2 * 26) - 1, -(1 / 2 * 39) + 20.5, 29.5, 39);
                            XXX.restore();
                        }
                    }
                    else if (this.wasCapeFlapping == true)
                    {
                        this.capeFlappiness = 39;
                        this.wasCapeFlapping = "gooblebunches";
                        //display the cape while codey stuff happens...
                        XXX.save();
                        XXX.translate(this.myScreenX, this.myScreenY);
                        XXX.rotate(this.rotation);
                        XXX.drawImage(verse, 3962, 384, 20, 30, -(1 / 2 * 26) - 1, -(1 / 2 * 39) + 20.5, 29.5, 39);
                        XXX.restore();
                    }
                    else if (this.wasCapeFlapping == "gooblebunches")
                    {
                        this.capeFlappiness -= 1; //this time cape flappiness referrs to the cape flapping down on its way out of being displayed.
                        if (this.capeFlappiness < 1)
                        {
                            this.capeFlappiness = 0;
                            this.wasCapeFlapping = false;
                        }

                        if (this.capeFlappiness > 0)
                        {
                            XXX.save();
                            XXX.translate(this.myScreenX, this.myScreenY);
                            XXX.rotate(this.rotation);
                            XXX.drawImage(verse, 3962, 384, 20, 30, -(1 / 2 * 26) - 1, -(1 / 2 * 39) + 20.5, 29.5, this.capeFlappiness);
                            XXX.restore();
                        }
                    }
                }

                else if (this.outfitEquipped == "mofuRunnerOutfit")
                {
                    if (this.movingType == 2 && this.energy > 0 && this.freeze <= 2)
                    {
                        this.wasCapeFlapping = true; //this lets the cape know it was showing so when the player slows down or stops moving the cape will ease back.
                        this.capeFlappiness += 1; //this is a variable that determines what costume the cape will be.
                        if (this.capeFlappiness > 100)
                        {
                            this.capeFlappiness = 0;
                        }

                        if (this.capeFlappiness <= 12.5 || this.capeFlappiness > 25 && this.capeFlappiness <= 37.5 || this.capeFlappiness > 50 && this.capeFlappiness <= 62.5 || this.capeFlappiness > 75 && this.capeFlappiness <= 87.5)
                        {
                            XXX.save();
                            XXX.translate(this.myScreenX, this.myScreenY);
                            XXX.rotate(this.rotation);
                            XXX.drawImage(polpol, 108, 79, 30, 57, -(1 / 2 * 30) - 8.5, -(1 / 2 * 57) + 35.5, 45, 40);
                            XXX.restore();
                        }
                        else if (this.capeFlappiness > 12.5 && this.capeFlappiness <= 25 || this.capeFlappiness > 37.5 && this.capeFlappiness <= 50 || this.capeFlappiness > 62.5 && this.capeFlappiness <= 75 || this.capeFlappiness > 87.5)
                        {
                            XXX.save();
                            XXX.translate(this.myScreenX, this.myScreenY);
                            XXX.rotate(this.rotation);
                            XXX.drawImage(polpol, 108, 79, 30, 57, -(1 / 2 * 30) - 8.9, -(1 / 2 * 57) + 35.5, 47, 42);
                            XXX.restore();
                        }
                    }
                    else if (this.wasCapeFlapping == true)
                    {
                        this.capeFlappiness = 40;
                        this.wasCapeFlapping = "gooblebunches";
                        //display the cape while codey stuff happens...
                        XXX.save();
                        XXX.translate(this.myScreenX, this.myScreenY);
                        XXX.rotate(this.rotation);
                        XXX.drawImage(polpol, 108, 79, 30, 57, -(1 / 2 * 30) - 8.5, -(1 / 2 * 57) + 35.5, 45, 40);
                        XXX.restore();
                    }
                    else if (this.wasCapeFlapping == "gooblebunches")
                    {
                        this.capeFlappiness -= 1; //this time cape flappiness referrs to the cape flapping down on its way out of being displayed.
                        if (this.capeFlappiness < 1)
                        {
                            this.capeFlappiness = 0;
                            this.wasCapeFlapping = false;
                        }

                        if (this.capeFlappiness > 0)
                        {
                            XXX.save();
                            XXX.translate(this.myScreenX, this.myScreenY);
                            XXX.rotate(this.rotation);
                            XXX.drawImage(polpol, 108, 79, 30, 57, -(1 / 2 * 30) - 8.5, -(1 / 2 * 57) + 35.5, 45, this.capeFlappiness);
                            XXX.restore();
                        }
                    }
                }

                //the player's body
                this.drawBody();

                //most weapons draw beneath the armour layer.
                if (this.weaponEquipped != "blunderbuss" && this.weaponEquipped != "musket" && this.weaponEquipped != "cutlass" && this.weaponEquipped != "nirineseSabre" && this.weaponEquipped != "longSpikedMorningStar" && this.weaponEquipped != "freydicSword" && this.weaponEquipped != "freydicGreatSword" && this.weaponEquipped != "theNorthernGem" && this.weaponEquipped != "longbow" && this.weaponEquipped != "crossbow" && this.weaponEquipped != "nirineseSpear" && this.weaponEquipped != "iceBlade" && this.weaponEquipped != "kellishClaymore" && this.weaponEquipped != "smashStick" && this.weaponEquipped != "burningSmashStick" && this.weaponEquipped != "lightningCorseque") //add more cases for more overhead weapons.
                {
                    this.drawArms();
                }

                //draw the armour/clothing here.
                if (this.outfitZ == true)
                {
                    this.drawOutfit();
                }
                //For specific outfits there will be parts under and above so extra stuf will draw here for outfits.
                if (this.outfitEquipped == "freydicRoyalDress")
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3228, 215, 33, 15, -(1 / 2 * 38) + 2.7, -(1 / 2 * 42) + 12.5, 33, 15);
                    XXX.restore();
                }
                else if (this.outfitEquipped == "winterWolfDress")
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3226, 234, 33, 15, -(1 / 2 * 38) + 2.2, -(1 / 2 * 42) + 14.5, 33, 15);
                    XXX.restore();
                }
                else if (this.outfitEquipped == "varnFurDress")
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 8, 469, 33, 15, -(1 / 2 * 38) + 1.9, -(1 / 2 * 42) + 14.5, 33, 15);
                    XXX.restore();
                }
                else if (this.outfitEquipped == "mofuMatriarchHeaddress")
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation + 1/2 * Math.PI);
                    XXX.drawImage(polpol, 47, 54, 49, 34, -(1 / 2 * 49 * 1.15) - 4, -(1 / 2 * 34 * 1.15) + 0, 49 * 1.15, 34 * 1.15);
                    XXX.drawImage(polpol, 47, 54, 49, 34, -(1 / 2 * 49 * 1.15) - 4, -(1 / 2 * 34 * 1.15) + 0, 49 * 1.15, 34 * 1.15);
                    XXX.restore();
                }

                //certain weapons draw over the armour layer
                if (this.weaponEquipped == "nirineseSabre" || this.weaponEquipped == "longSpikedMorningStar") //add more cases for more overhead weapons.
                {
                    this.drawArms();
                }

                //drawMageShieldOverPlayer
                this.setMageShield();
                if (this.mageShieldMAX > 0 && this.mageShield > 0)
                {
                    XXX.save();
                    XXX.fillStyle = this.mageShieldColour;
                    XXX.globalAlpha = 0.8 * (this.mageShield / this.mageShieldMAX);
                    XXX.arc(this.myScreenX, this.myScreenY, this.mageShieldSize, 0, Math.PI * 2);
                    XXX.fill();
                    XXX.restore();
                }
            }
        }

        if (gameState == "active" || gameState == "stopTime")
        {
            if (zindex == 6)
            {
                //effect notices, and deveoper functions, etc.
                this.miniNotices();

                //Stat recharging
                this.statRecharge();
            }

            if (zindex == this.zIndex)
            {
                //This enables the players weapons and attacking
                this.weaponSetup();
                this.attack();
                this.defend();
            }

            //Quick fixes are my lazy way of solving challenging or bothersom problems!
            if (zindex == 6)
            {
                this.quickFixes();
            }
        }
    };
}