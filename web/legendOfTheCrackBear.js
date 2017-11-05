/**
 * Created by skyeguy on 12/17/15.
 */

//TODO LIST
//todo add creature "Miter" a humanoid beast that crawls around on all fours eating the flesh of the dead. It will gain full health everytime it does so, and if it scratches the player with its long claws the player will be grave poisoned which drains life from the player and gives it to the miter responsible.
//todo add dialogue to the Jarl: Quests/Purchasable Property/etc.
//todo add Ser Olis Pynske to the jarls estate.
//todo add roselin's quest
//todo Add world switch gameplay... -> Dungeons, Caves, trapdoors/ladders, cellars, etc.
//todo add row boats and swimming
//todo add the second Freydic City (make it a dock town) [the Freynor kingdom will span over several northern isles and the mainland]
//todo add containers that operate like miniature banks with fixed numbers of slots.
//todo add Maps W3 (rock lands), W4 (rock lands),W4S1 (rocklands), W5 (plains/mudflats), W5S1 (Lethik - a medium sized village on the fronteir of Thengaria)
//todo add warm northern thick clothing made with waanti. //at this point there is only an outfit and not a clothing.
//todo figure out why aldrekii claws manual attack thing won't let it at twice or even early, while the same code lets the flail perform its attack early.
//todo finish adding sickness system
//todo add Lodotos, a sickness that one can get in the kellish mud bog.
//todo add another bank system (Silver Keep) perhaps add loans from both banks.
//todo finish adding the beast journal.
//todo add brain flies.
//todo add hangover, and soarness effects as well as their mini notices.
//todo add a rest without bed button on the UI that uses a homemade confirm popup to ask if you are sure you want to sleep. Add the nappy closed eye for the sleepButton. (it's on poly)
//todo add items: dried plutt with honey
//todo add the dexterity system: lv 20 = side-jumping (more levels slightly increase the time before the enemy reacts to your new position)
//todo add arrow mods such as poison, electric, wind, armour piercing...
//todo add vines spell
//todo add weaken spell
//todo add tornado spell
//todo add mage boss who uses the electric spear as well as magical shielding spell he uses.
//todo add throwing stars for the orgel
//todo add sicknesses and symptons (dizziness, pox, fever, fatigue, etc.) ex: make dizziness spin the screen, make pox weaken players constitution etc., make fever decrease thirst.
//todo add the rest of the alcohols and drinks.
//todo make alpha Olkrin's death animation line up slightly more.
//todo add options menu with button: it will allow you to toggle certain settings like mouse combat mode, game coordinates, and other such features.
//todo Add harsh hot weather conditions: deserts cause faster dehydration. (base the effect on elevation variable)
//todo Add more traps to further advance the utility of the Survivalism (trapping) skill.
//todo add a system that shows the player the names of each region that they enter upon entering it.
//todo add unique fairytails for each faction

function legendaryPrerequisites()
{
    //songs

    var theme = new Audio("sounds/polyLandTheme.wav");
    window.theme = theme;

    //action sounds
    var crossbowGun = new Audio("sounds/basicGunSound.mp3");
    window.crossbowGun = crossbowGun;

    var blunder = new Audio("sounds/polySounds/heavyShot.wav");
    window.blunder = blunder;

    var musket = new Audio("sounds/polySounds/musket.wav");
    window.musket = musket;

    var musketRld = new Audio("sounds/polySounds/musketReload.wav");
    window.musketRld = musketRld;

    var anterHillCollapse = new Audio("sounds/polySounds/anterHillCollapse.mp3");
    window.anterHillCollapse = anterHillCollapse;

    var impaction = new Audio("sounds/impact.mp3");
    window.impaction = impaction;

    var pageTurn = new Audio("sounds/polySounds/pageTurn.wav");
    window.pageTurn = pageTurn;

    var trapclap = new Audio("sounds/polySounds/trapclap.wav");
    window.trapclap = trapclap;

    //dialogue sounds

        //SVEHN CHARACTER: voice acting

    var svehnMyWay = new Audio("sounds/polySounds/svehnMyWay.mp3");
    window.svehnMyWay = svehnMyWay;

    var svehnWell = new Audio("sounds/polySounds/svehnWell.mp3");
    window.svehnWell = svehnWell;

    var svehnParts = new Audio("sounds/polySounds/svehnParts.mp3");
    window.svehnParts = svehnParts;

    var svehnAsISaid = new Audio("sounds/polySounds/svehnAsISaid.mp3");
    window.svehnAsISaid = svehnAsISaid;

    var svehnShame = new Audio("sounds/polySounds/svehnShame.mp3");
    window.svehnShame = svehnShame;

    var svehnSmithing = new Audio("sounds/polySounds/svehnSmithing.mp3");
    window.svehnSmithing = svehnSmithing;

    var svehnSeemsFair = new Audio("sounds/polySounds/svehnSeemsFair.mp3");
    window.svehnSeemsFair = svehnSeemsFair;

    var svehnGo = new Audio("sounds/polySounds/svehnGo.mp3");
    window.svehnGo = svehnGo;

    var svehnHow = new Audio("sounds/polySounds/svehnHow.mp3");
    window.svehnHow = svehnHow;

    var svehnOnlyFair = new Audio("sounds/polySounds/svehnOnlyFair.mp3");
    window.svehnOnlyFair = svehnOnlyFair;

    var svehnGetOutaHere = new Audio("sounds/polySounds/svehnGetOutaHere.mp3");
    window.svehnGetOutaHere = svehnGetOutaHere;

    var svehnCrook = new Audio("sounds/polySounds/svehnCrook.mp3");
    window.svehnCrook = svehnCrook;

        //GARLD CHARACTER: voice acting

    var garldCurse = new Audio("sounds/polySounds/garldCurse.mp3");
    window.garldCurse = garldCurse;

    var garldDemons = new Audio("sounds/polySounds/garldDemons.mp3");
    window.garldDemons = garldDemons;

    var garldFiend = new Audio("sounds/polySounds/garldFiend.mp3");
    window.garldFiend = garldFiend;

    var garldTwig = new Audio("sounds/polySounds/garldTwig.mp3");
    window.garldTwig = garldTwig;

    var garldMemories = new Audio("sounds/polySounds/garldMemories.mp3");
    window.garldMemories = garldMemories;

    var garldWord = new Audio("sounds/polySounds/garldWord.mp3");
    window.garldWord = garldWord;

    var garldTrip = new Audio("sounds/polySounds/garldTrip.mp3");
    window.garldTrip = garldTrip;

    var garldFingers = new Audio("sounds/polySounds/garldFingers.mp3");
    window.garldFingers = garldFingers;

    var garldMarkings = new Audio("sounds/polySounds/garldMarkings.mp3");
    window.garldMarkings = garldMarkings;

    var garldYouth = new Audio("sounds/polySounds/garldYouth.mp3");
    window.garldYouth = garldYouth;

    var garldYouDo = new Audio("sounds/polySounds/garldYouDo.mp3");
    window.garldYouDo = garldYouDo;

    var garldDoomed = new Audio("sounds/polySounds/garldDoomed.mp3");
    window.garldDoomed = garldDoomed;

    var garldToils = new Audio("sounds/polySounds/garldToils.mp3");
    window.garldToils = garldToils;

    var garldMedallion = new Audio("sounds/polySounds/garldMedallion.mp3");
    window.garldMedallion = garldMedallion;

    var garldBy = new Audio("sounds/polySounds/garldBy.mp3");
    window.garldBy = garldBy;

    var garldWickedness = new Audio("sounds/polySounds/garldWickedness.mp3");
    window.garldWickedness = garldWickedness;

    var garldWorthless = new Audio("sounds/polySounds/garldWorthless.mp3");
    window.garldWorthless = garldWorthless;

    var garldBearer = new Audio("sounds/polySounds/garldBearer.mp3");
    window.garldBearer = garldBearer;

        //NELGREF CHARACTER: voice acting

    var nelgrefSkin = new Audio("sounds/polySounds/nelgrefSkin.mp3");
    window.nelgrefSkin = nelgrefSkin;

    var nelgrefEyes = new Audio("sounds/polySounds/nelgrefEyes.mp3");
    window.nelgrefEyes = nelgrefEyes;

    var nelgrefDie = new Audio("sounds/polySounds/nelgrefDie.mp3");
    window.nelgrefDie = nelgrefDie;

    var nelgrefKiss = new Audio("sounds/polySounds/nelgrefKiss.mp3");
    window.nelgrefKiss = nelgrefKiss;

        //JOHANNA CHARACTER: voice acting

    var johannaHelp = new Audio("sounds/polySounds/johannaHelp.mp3");
    window.johannaHelp = johannaHelp;

    var johannaPoor = new Audio("sounds/polySounds/johannaPoor.mp3");
    window.johannaPoor = johannaPoor;

    var johannaFine = new Audio("sounds/polySounds/johannaFine.mp3");
    window.johannaFine = johannaFine;

    var johannaOwch = new Audio("sounds/polySounds/johannaOwch.mp3");
    window.johannaOwch = johannaOwch;

    var johannaLeave = new Audio("sounds/polySounds/johannaLeave.mp3");
    window.johannaLeave = johannaLeave;

        //LENA CHARACTER: voice acting

    var lenaHi = new Audio("sounds/polySounds/lenaHi.mp3");
    window.lenaHi = lenaHi;

    var lenaAway = new Audio("sounds/polySounds/lenaAway.mp3");
    window.lenaAway = lenaAway;

    var lenaPotions = new Audio("sounds/polySounds/lenaPotions.mp3");
    window.lenaPotions = lenaPotions;

        //ADOLF CHARACTER: voice acting

    var adolfSure = new Audio("sounds/polySounds/adolfSure.mp3");
    window.adolfSure = adolfSure;

    var adolfDontKnow = new Audio("sounds/polySounds/adolfDontKnow.mp3");
    window.adolfDontKnow = adolfDontKnow;

    var adolfWin = new Audio("sounds/polySounds/adolfWin.mp3");
    window.adolfWin = adolfWin;

        //BRUNELDA CHARACTER: voice acting

    var bruneldaLollygagging = new Audio("sounds/polySounds/bruneldaLollygagging.mp3");
    window.bruneldaLollygagging = bruneldaLollygagging;

    var bruneldaQuestions = new Audio("sounds/polySounds/bruneldaQuestions.mp3");
    window.bruneldaQuestions = bruneldaQuestions;

        //TOGGIN CHARACTER: voice acting

    var togginGreet = new Audio("sounds/polySounds/togginGreeting.mp3");
    window.togginGreet = togginGreet;

    var togginLiving = new Audio("sounds/polySounds/togginLivin.mp3");
    window.togginLiving = togginLiving;

    var togginFDecline = new Audio("sounds/polySounds/togginNoMiLady.mp3");
    window.togginFDecline = togginFDecline;

    var togginMDecline = new Audio("sounds/polySounds/togginWasteYerTime.mp3");
    window.togginMDecline = togginMDecline;

    var togginScat = new Audio("sounds/polySounds/togginScat.mp3");
    window.togginScat = togginScat;

    var togginAdmit = new Audio("sounds/polySounds/togginAdmit.mp3");
    window.togginAdmit = togginAdmit;

    var togginBanditPayment = new Audio("sounds/polySounds/togginBanditPayment.mp3");
    window.togginBanditPayment = togginBanditPayment;

    var togginTooLong = new Audio("sounds/polySounds/togginTooLong.mp3");
    window.togginTooLong = togginTooLong;

    var togginChangeMind = new Audio("sounds/polySounds/togginChangeMind.mp3");
    window.togginChangeMind = togginChangeMind;

        //CHERYL CHARACTER: voice acting

    var cherylDarling = new Audio("sounds/polySounds/cherylDarling.mp3");
    window.cherylDarling = cherylDarling;

    var cherylDifficult = new Audio("sounds/polySounds/cherylDifficult.mp3");
    window.cherylDifficult = cherylDifficult;

    var cherylWell = new Audio("sounds/polySounds/cherylWell.mp3");
    window.cherylWell = cherylWell;

    var cherylILoveYou = new Audio("sounds/polySounds/cherylILoveYou.mp3");
    window.cherylILoveYou = cherylILoveYou;

    var cherylDead = new Audio("sounds/polySounds/cherylDead.mp3");
    window.cherylDead = cherylDead;

    var cherylStitching = new Audio("sounds/polySounds/cherylStitching.mp3");
    window.cherylStitching = cherylStitching;

    var cherylHoping = new Audio("sounds/polySounds/cherylHoping.mp3");
    window.cherylHoping = cherylHoping;

    var cherylAsWell = new Audio("sounds/polySounds/cherylAsWell.mp3");
    window.cherylAsWell = cherylAsWell;

    var cherylKind = new Audio("sounds/polySounds/cherylKind.mp3");
    window.cherylKind = cherylKind;

    var cherylSafe = new Audio("sounds/polySounds/cherylSafe.mp3");
    window.cherylSafe = cherylSafe;

    var cherylSame = new Audio("sounds/polySounds/cherylSame.mp3");
    window.cherylSame = cherylSame;

    var cherylBehaving = new Audio("sounds/polySounds/cherylBehaving.mp3");
    window.cherylBehaving = cherylBehaving;

        //DAGMAR CHARACTER: voice acting

    var dagmarLike = new Audio("sounds/polySounds/dagmarLike.mp3");
    window.dagmarLike = dagmarLike;

    var dagmarLookAround = new Audio("sounds/polySounds/dagmarLookAround.mp3");
    window.dagmarLookAround = dagmarLookAround;

    var dagmarOne = new Audio("sounds/polySounds/dagmarOne.mp3");
    window.dagmarOne = dagmarOne;

    var dagmarDecades = new Audio("sounds/polySounds/dagmarDecades.mp3");
    window.dagmarDecades = dagmarDecades;

    var dagmarSword = new Audio("sounds/polySounds/dagmarSword.mp3");
    window.dagmarSword = dagmarSword;

    var dagmarAdolf = new Audio("sounds/polySounds/dagmarAdolf.mp3");
    window.dagmarAdolf = dagmarAdolf;

    var dagmarGot = new Audio("sounds/polySounds/dagmarGot.mp3");
    window.dagmarGot = dagmarGot;

    var dagmarCoal = new Audio("sounds/polySounds/dagmarCoal.mp3");
    window.dagmarCoal = dagmarCoal;

    var dagmarIron = new Audio("sounds/polySounds/dagmarIron.mp3");
    window.dagmarIron = dagmarIron;

        //FENWIK CHARACTER: voice acting

    var fenwikGooday = new Audio("sounds/polySounds/fenwikGooday.mp3");
    window.fenwikGooday = fenwikGooday;

    var fenwikTwillBe = new Audio("sounds/polySounds/fenwikTwillBe.mp3");
    window.fenwikTwillBe = fenwikTwillBe;

    var fenwikGooday = new Audio("sounds/polySounds/fenwikGooday.mp3");
    window.fenwikGooday = fenwikGooday;

    var fenwikFocus = new Audio("sounds/polySounds/fenwikFocus.mp3");
    window.fenwikFocus = fenwikFocus;

    var fenwikSupplyingTribe = new Audio("sounds/polySounds/fenwikSupplyingTribe.mp3");
    window.fenwikSupplyingTribe = fenwikSupplyingTribe;

    var fenwikRightAway = new Audio("sounds/polySounds/fenwikRightAway.mp3");
    window.fenwikRightAway = fenwikRightAway;

    var fenwikBother = new Audio("sounds/polySounds/fenwikBother.mp3");
    window.fenwikBother = fenwikBother;

    var fenwikDaughterLost = new Audio("sounds/polySounds/fenwikDaughterLost.mp3");
    window.fenwikDaughterLost = fenwikDaughterLost;

    var fenwikSoMuch = new Audio("sounds/polySounds/fenwikSoMuch.mp3");
    window.fenwikSoMuch = fenwikSoMuch;

    var fenwikEverGrateful = new Audio("sounds/polySounds/fenwikEverGrateful.mp3");
    window.fenwikEverGrateful = fenwikEverGrateful;

    var fenwikPart = new Audio("sounds/polySounds/fenwikPart.mp3");
    window.fenwikPart = fenwikPart;

    var fenwikToChief = new Audio("sounds/polySounds/fenwikToChief.mp3");
    window.fenwikToChief = fenwikToChief;

        //DROHFOR CHARACTER: voice acting

    var drohforGreet = new Audio("sounds/polySounds/drohforGreeting.mp3");
    window.drohforGreet = drohforGreet;

    var drohforWastingTime = new Audio("sounds/polySounds/drohforWastingTime.mp3");
    window.drohforWastingTime = drohforWastingTime;

    var drohforOutfit = new Audio("sounds/polySounds/drohforOutfit.mp3");
    window.drohforOutfit = drohforOutfit;

    var drohforTrackingMLady = new Audio("sounds/polySounds/drohforTrackingMLady.mp3");
    window.drohforTrackingMLady = drohforTrackingMLady;

    var drohforTrackingMLord = new Audio("sounds/polySounds/drohforTrackingMLord.mp3");
    window.drohforTrackingMLord = drohforTrackingMLord;

    var drohforTrackingCHA = new Audio("sounds/polySounds/drohforTrackingCHA.mp3");
    window.drohforTrackingCHA = drohforTrackingCHA;

    var drohforLadyWins = new Audio("sounds/polySounds/drohforLadyWins.mp3");
    window.drohforLadyWins = drohforLadyWins;

    var drohforHighbornLad = new Audio("sounds/polySounds/drohforHighbornLad.mp3");
    window.drohforHighbornLad = drohforHighbornLad;

    var drohforHighbornLasse = new Audio("sounds/polySounds/drohforHighbornLasse.mp3");
    window.drohforHighbornLasse = drohforHighbornLasse;

    var drohforTailBetweenLegs = new Audio("sounds/polySounds/drohforTailBetweenLegs.mp3");
    window.drohforTailBetweenLegs = drohforTailBetweenLegs;

    var drohforSoEasy = new Audio("sounds/polySounds/drohforSoEasy.mp3");
    window.drohforSoEasy = drohforSoEasy;

    var drohforShutUp = new Audio("sounds/polySounds/drohforShutUp.mp3");
    window.drohforShutUp = drohforShutUp;

    var drohforNoMore = new Audio("sounds/polySounds/drohforNoMore.mp3");
    window.drohforNoMore = drohforNoMore;

    var drohforCommonerVictory = new Audio("sounds/polySounds/drohforCommonerVictory.mp3");
    window.drohforCommonerVictory = drohforCommonerVictory;

    var drohforLadyVictory = new Audio("sounds/polySounds/drohforLadyVictory.mp3");
    window.drohforLadyVictory = drohforLadyVictory;

    var drohforLordVictory = new Audio("sounds/polySounds/drohforLordVictory.mp3");
    window.drohforLordVictory = drohforLordVictory;

        //STENDOR CHARACTER: voice acting

    var stendorGoodDay = new Audio("sounds/polySounds/stendorGoodDay.mp3");
    window.stendorGoodDay = stendorGoodDay;

    var stendorYourPeople = new Audio("sounds/polySounds/stendorYourPeople.mp3");
    window.stendorYourPeople = stendorYourPeople;

    var stendorHelpingPeople = new Audio("sounds/polySounds/stendorHelpingPeople.mp3");
    window.stendorHelpingPeople = stendorHelpingPeople;

    var stendorHereTheyAre = new Audio("sounds/polySounds/stendorHereTheyAre.mp3");
    window.stendorHereTheyAre = stendorHereTheyAre;

    var stendorItemsGo = new Audio("sounds/polySounds/stendorItemsGo.mp3");
    window.stendorItemsGo = stendorItemsGo;

    var stendorTryAsking = new Audio("sounds/polySounds/stendorTryAsking.mp3");
    window.stendorTryAsking = stendorTryAsking;

    var stendorPoorWretch = new Audio("sounds/polySounds/stendorPoorWretch.mp3");
    window.stendorPoorWretch = stendorPoorWretch;

    var stendorWishLord = new Audio("sounds/polySounds/stendorWishLord.mp3");
    window.stendorWishLord = stendorWishLord;

    var stendorNeevsAreReal = new Audio("sounds/polySounds/stendorNeevsAreReal.mp3");
    window.stendorNeevsAreReal = stendorNeevsAreReal;

    var stendorHetmerTough = new Audio("sounds/polySounds/stendorHetmerTough.mp3");
    window.stendorHetmerTough = stendorHetmerTough;

    var stendorAlwaysComeBack = new Audio("sounds/polySounds/stendorAlwaysComeBack.mp3");
    window.stendorAlwaysComeBack = stendorAlwaysComeBack;

    var stendorExcellent = new Audio("sounds/polySounds/stendorExcellent.mp3");
    window.stendorExcellent = stendorExcellent;

    var stendorWishLady = new Audio("sounds/polySounds/stendorWishLady.mp3");
    window.stendorWishLady = stendorWishLady;

    var stendorFarSouth = new Audio("sounds/polySounds/stendorFarSouth.mp3");
    window.stendorFarSouth = stendorFarSouth;

    var stendorPoorSoul = new Audio("sounds/polySounds/stendorPoorSoul.mp3");
    window.stendorPoorSoul = stendorPoorSoul;

    var stendorFairThee = new Audio("sounds/polySounds/stendorFairThee.mp3");
    window.stendorFairThee = stendorFairThee;

    var stendorHighness = new Audio("sounds/polySounds/stendorHighness.mp3");
    window.stendorHighness = stendorHighness;

    var stendorHealth = new Audio("sounds/polySounds/stendorHealth.mp3");
    window.stendorHealth = stendorHealth;

    var stendorBeWell = new Audio("sounds/polySounds/stendorBeWell.mp3");
    window.stendorBeWell = stendorBeWell;

    var stendorTrouble = new Audio("sounds/polySounds/stendorTrouble.mp3");
    window.stendorTrouble = stendorTrouble;

        //MAGGY CHARACTER: voice acting

    var maggyJustCleaning = new Audio("sounds/polySounds/maggyJustCleaning.mp3");
    window.maggyJustCleaning = maggyJustCleaning;

    var maggyJustLovely = new Audio("sounds/polySounds/MaggyJustLovely.mp3");
    window.maggyJustLovely = maggyJustLovely;

    var maggyLifeStory = new Audio("sounds/polySounds/maggyLifeStory.mp3");
    window.maggyLifeStory = maggyLifeStory;

    var maggyMostlyCleaning = new Audio("sounds/polySounds/maggyMostlyCleaning.mp3");
    window.maggyMostlyCleaning = maggyMostlyCleaning;

        //ROSELIN CHARACTER: voice acting

    var roselinGday = new Audio("sounds/polySounds/roselinGday.mp3");
    window.roselinGday = roselinGday;

    var roselinDiversified = new Audio("sounds/polySounds/roselinDiversified.mp3");
    window.roselinDiversified = roselinDiversified;

    var roselinBusiness = new Audio("sounds/polySounds/roselinBusiness.mp3");
    window.roselinBusiness = roselinBusiness;

    var roselinThankyou = new Audio("sounds/polySounds/roselinThankyou.mp3");
    window.roselinThankyou = roselinThankyou;

        //IRENE CHARACTER: voice acting

    var irenePaWorries = new Audio("sounds/polySounds/irenePaWorries.mp3");
    window.irenePaWorries = irenePaWorries;

    var ireneNotReady = new Audio("sounds/polySounds/ireneNotReady.mp3");
    window.ireneNotReady = ireneNotReady;

    var ireneDontHear = new Audio("sounds/polySounds/ireneDontHear.mp3");
    window.ireneDontHear = ireneDontHear;

    var ireneMuf = new Audio("sounds/polySounds/ireneMuf.mp3");
    window.ireneMuf = ireneMuf;

    var ireneHaveTo = new Audio("sounds/polySounds/ireneHaveTo.mp3");
    window.ireneHaveTo = ireneHaveTo;

    var irenePoem = new Audio("sounds/polySounds/irenePoem.mp3");
    window.irenePoem = irenePoem;

    var ireneFrom = new Audio("sounds/polySounds/ireneFrom.mp3");
    window.ireneFrom = ireneFrom;

    var ireneSleepingStone = new Audio("sounds/polySounds/ireneSleepingStone.mp3");
    window.ireneSleepingStone = ireneSleepingStone;

    var ireneExactly = new Audio("sounds/polySounds/ireneExactly.mp3");
    window.ireneExactly = ireneExactly;

    var ireneHi = new Audio("sounds/polySounds/ireneHi.mp3");
    window.ireneHi = ireneHi;

    var ireneChasing = new Audio("sounds/polySounds/ireneChasing.mp3");
    window.ireneChasing = ireneChasing;

    var ireneFluffyOne = new Audio("sounds/polySounds/ireneFuzzyOne.mp3");
    window.ireneFluffyOne = ireneFluffyOne;

        //KEDWIN CHARACTER: voice acting

    var kedwinRumors = new Audio("sounds/polySounds/kedwinRumors.mp3");
    window.kedwinRumors = kedwinRumors;

    var kedwinNeverHeard = new Audio("sounds/polySounds/kedwinNeverHeard.mp3");
    window.kedwinNeverHeard = kedwinNeverHeard;

    var kedwinSomeone = new Audio("sounds/polySounds/kedwinSomeone.mp3");
    window.kedwinSomeone = kedwinSomeone;

    var kedwinYourLoss = new Audio("sounds/polySounds/kedwinYourLoss.mp3");
    window.kedwinYourLoss = kedwinYourLoss;

    var kedwinNothing = new Audio("sounds/polySounds/kedwinNothing.mp3");
    window.kedwinNothing = kedwinNothing;

    var kedwinBetter = new Audio("sounds/polySounds/kedwinBetter.mp3");
    window.kedwinBetter = kedwinBetter;

    var kedwinCause = new Audio("sounds/polySounds/kedwinCause.mp3");
    window.kedwinCause = kedwinCause;

    var kedwinEitherWay = new Audio("sounds/polySounds/kedwinEitherWay.mp3");
    window.kedwinEitherWay = kedwinEitherWay;

    var kedwinGobblin = new Audio("sounds/polySounds/kedwinGobblin.mp3");
    window.kedwinGobblin = kedwinGobblin;

        //MARKOS CHARACTER: voice acting

    var markosRightAway = new Audio("sounds/polySounds/markosRightAway.mp3");
    window.markosRightAway = markosRightAway;

    var markosNow = new Audio("sounds/polySounds/markosNow.mp3");
    window.markosNow = markosNow;

    var markosLiege = new Audio("sounds/polySounds/markosLiege.mp3");
    window.markosLiege = markosLiege;

    var markosShocked = new Audio("sounds/polySounds/markosShocked.mp3");
    window.markosShocked = markosShocked;

    var markosPick = new Audio("sounds/polySounds/markosPick.mp3");
    window.markosPick = markosPick;

        //OLIS PYNSKE CHARACTER: voice acting

    var olisMyLady = new Audio("sounds/polySounds/olisMyLady.mp3");
    window.olisMyLady = olisMyLady;

    var olisMyLord = new Audio("sounds/polySounds/olisMyLord.mp3");
    window.olisMyLord = olisMyLord;

    var olisGraceF = new Audio("sounds/polySounds/olisGraceF.mp3");
    window.olisGraceF = olisGraceF;

    var olisMajestyM = new Audio("sounds/polySounds/olisMajestyM.mp3");
    window.olisMajestyM = olisMajestyM;

    var olisHello = new Audio("sounds/polySounds/olisHello.mp3");
    window.olisHello = olisHello;

    var olisIAm = new Audio("sounds/polySounds/olisIAm.mp3");
    window.olisIAm = olisIAm;

    var olisYourLordship = new Audio("sounds/polySounds/olisYourLordship.mp3");
    window.olisYourLordship = olisYourLordship;

    var olisYourLadyship = new Audio("sounds/polySounds/olisYourLadyship.mp3");
    window.olisYourLadyship = olisYourLadyship;

    var olisSurely = new Audio("sounds/polySounds/olisSurely.mp3");
    window.olisSurely = olisSurely;

    var olisIntroAgain = new Audio("sounds/polySounds/olisIntroAgain.mp3");
    window.olisIntroAgain = olisIntroAgain;

    var olisSavedHeir = new Audio("sounds/polySounds/olisSavedHeir.mp3");
    window.olisSavedHeir = olisSavedHeir;

    var olisBetterThanYou = new Audio("sounds/polySounds/olisBetterThanYou.mp3");
    window.olisBetterThanYou = olisBetterThanYou;

    var olisHero = new Audio("sounds/polySounds/olisHero.mp3");
    window.olisHero = olisHero;

        //MEDLIA CHARACTER: voice acting

    var medliaMaybeIf = new Audio("sounds/polySounds/medliaMaybeIf.mp3");
    window.medliaMaybeIf = medliaMaybeIf;

    var medliaGuessItIs = new Audio("sounds/polySounds/medliaGuessItIs.mp3");
    window.medliaGuessItIs = medliaGuessItIs;

    var medliaFine = new Audio("sounds/polySounds/medliaFine.mp3");
    window.medliaFine = medliaFine;

    var medliaMyMyMeLady = new Audio("sounds/polySounds/medliaMyMyMeLady.mp3");
    window.medliaMyMyMeLady = medliaMyMyMeLady;

    var medliaMyMyMeLord = new Audio("sounds/polySounds/medliaMyMyMeLord.mp3");
    window.medliaMyMyMeLord = medliaMyMyMeLord;

    var medliaCantPretend = new Audio("sounds/polySounds/medliaCantPretend.mp3");
    window.medliaCantPretend = medliaCantPretend;

    var medliaOurProblem = new Audio("sounds/polySounds/medliaOurProblem.mp3");
    window.medliaOurProblem = medliaOurProblem;

    var medliaTheProblem = new Audio("sounds/polySounds/medliaTheProblem.mp3");
    window.medliaTheProblem = medliaTheProblem;

    var medliaTen = new Audio("sounds/polySounds/medliaTen.mp3");
    window.medliaTen = medliaTen;

    var medliaEighteen = new Audio("sounds/polySounds/medliaEighteen.mp3");
    window.medliaEighteen = medliaEighteen;

    var medliaThatFar = new Audio("sounds/polySounds/medliaThatFar.mp3");
    window.medliaThatFar = medliaThatFar;

    var medliaHurtHim = new Audio("sounds/polySounds/medliaHurtHim.mp3");
    window.medliaHurtHim = medliaHurtHim;

    var medliaItWorked = new Audio("sounds/polySounds/medliaItWorked.mp3");
    window.medliaItWorked = medliaItWorked;

        //TEBER CHARACTER: voice acting

    var teberShanToor = new Audio("sounds/polySounds/teberShanToor.mp3");
    window.teberShanToor = teberShanToor;

    var teberSkills = new Audio("sounds/polySounds/teberSkills.mp3");
    window.teberSkills = teberSkills;

    var teberArtCareer = new Audio("sounds/polySounds/teberArtCareer.mp3");
    window.teberArtCareer = teberArtCareer;

    var teberLastJob = new Audio("sounds/polySounds/teberLastJob.mp3");
    window.teberLastJob = teberLastJob;

    var teberQueBellas = new Audio("sounds/polySounds/teberQueBellas.mp3");
    window.teberQueBellas = teberQueBellas;

    var teberPleaseDont = new Audio("sounds/polySounds/teberPleaseDont.mp3");
    window.teberPleaseDont = teberPleaseDont;

    var teberAnyways = new Audio("sounds/polySounds/teberAnyways.mp3");
    window.teberAnyways = teberAnyways;

    var teberOkay = new Audio("sounds/polySounds/teberOkay.mp3");
    window.teberOkay = teberOkay;

    var teberDontWant = new Audio("sounds/polySounds/teberDontWant.mp3");
    window.teberDontWant = teberDontWant;

        //NECULAI CHARACTER: voice acting

    var neculaiBountyHere = new Audio("sounds/polySounds/neculaiBountyHere.mp3");
    window.neculaiBountyHere = neculaiBountyHere;

    var neculaiStirUp = new Audio("sounds/polySounds/neculaiStirUp.mp3");
    window.neculaiStirUp = neculaiStirUp;

    var neculaiSpecialDeals = new Audio("sounds/polySounds/neculaiSpecialDeals.mp3");
    window.neculaiSpecialDeals = neculaiSpecialDeals;

    var neculaiEveryDay = new Audio("sounds/polySounds/neculaiEveryDay.mp3");
    window.neculaiEveryDay = neculaiEveryDay;

    var neculaiLots = new Audio("sounds/polySounds/neculaiLots.mp3");
    window.neculaiLots = neculaiLots;

    var neculaiZes = new Audio("sounds/polySounds/neculaiZes.mp3");
    window.neculaiZes = neculaiZes;

    var neculaiDontThinkSo = new Audio("sounds/polySounds/neculaiDontThinkSo.mp3");
    window.neculaiDontThinkSo = neculaiDontThinkSo;

    var neculaiMuchBetter = new Audio("sounds/polySounds/neculaiMuchBetter.mp3");
    window.neculaiMuchBetter = neculaiMuchBetter;

    var neculaiBiggerProblem = new Audio("sounds/polySounds/neculaiBiggerProblem.mp3");
    window.neculaiBiggerProblem = neculaiBiggerProblem;

    var neculaiThenganMercs = new Audio("sounds/polySounds/neculaiThenganMercs.mp3");
    window.neculaiThenganMercs = neculaiThenganMercs;

    var neculaiFine = new Audio("sounds/polySounds/neculaiFine.mp3");
    window.neculaiFine = neculaiFine;

    var neculaiRid = new Audio("sounds/polySounds/neculaiRid.mp3");
    window.neculaiRid = neculaiRid;

    var neculaiZertyOne = new Audio("sounds/polySounds/neculaiZertyOne.mp3");
    window.neculaiZertyOne = neculaiZertyOne;

    var neculaiZerGone = new Audio("sounds/polySounds/neculaiZerGone.mp3");
    window.neculaiZerGone = neculaiZerGone;

        //KRONHEIME CHARACTER: voice acting

    var kronheimeHaventHeard = new Audio("sounds/polySounds/kronheimeHaventHeard.mp3");
    window.kronheimeHaventHeard = kronheimeHaventHeard;

    var kronheimeLastADay = new Audio("sounds/polySounds/kronheimeLastADay.mp3");
    window.kronheimeLastADay = kronheimeLastADay;

    var kronheimeTalkTo = new Audio("sounds/polySounds/kronheimeTalkTo.mp3");
    window.kronheimeTalkTo = kronheimeTalkTo;

    var kronheimeWheresTheBoss = new Audio("sounds/polySounds/kronheimeWheresTheBoss.mp3");
    window.kronheimeWheresTheBoss = kronheimeWheresTheBoss;

    var kronheimeTalkQuick = new Audio("sounds/polySounds/kronheimeTalkQuick.mp3");
    window.kronheimeTalkQuick = kronheimeTalkQuick;

    var kronheimeYourWith = new Audio("sounds/polySounds/kronheimeYourWith.mp3");
    window.kronheimeYourWith = kronheimeYourWith;

    var kronheimeNoLess = new Audio("sounds/polySounds/kronheimeNoLess.mp3");
    window.kronheimeNoLess = kronheimeNoLess;

    var kronheimeThatVardanian = new Audio("sounds/polySounds/kronheimeThatVardanian.mp3");
    window.kronheimeThatVardanian = kronheimeThatVardanian;

    var kronheimeDidntRealize = new Audio("sounds/polySounds/kronheimeDidntRealize.mp3");
    window.kronheimeDidntRealize = kronheimeDidntRealize;

    var kronheimeThisSlight = new Audio("sounds/polySounds/kronheimeThisSlight.mp3");
    window.kronheimeThisSlight = kronheimeThisSlight;

    var kronheimeLeaving = new Audio("sounds/polySounds/kronheimeLeaving.mp3");
    window.kronheimeLeaving = kronheimeLeaving;

    var kronheimeKillHer = new Audio("sounds/polySounds/kronheimeKillHer.mp3");
    window.kronheimeKillHer = kronheimeKillHer;

    var kronheimeKillHim = new Audio("sounds/polySounds/kronheimeKillHim.mp3");
    window.kronheimeKillHim = kronheimeKillHim;

    var kronheimeKillIt = new Audio("sounds/polySounds/kronheimeKillIt.mp3");
    window.kronheimeKillIt = kronheimeKillIt;

    var kronheimeSimple = new Audio("sounds/polySounds/kronheimeSimple.mp3");
    window.kronheimeSimple = kronheimeSimple;

    var kronheimeDontHaveEnough = new Audio("sounds/polySounds/kronheimeDontHaveEnough.mp3");
    window.kronheimeDontHaveEnough = kronheimeDontHaveEnough;

    var kronheimeEarAsProof = new Audio("sounds/polySounds/kronheimEarAsProof.mp3");
    window.kronheimeEarAsProof = kronheimeEarAsProof;

    var kronheimeAnotherEar = new Audio("sounds/polySounds/kronheimeAnotherEar.mp3");
    window.kronheimeAnotherEar = kronheimeAnotherEar;

    var kronheimeGetAway = new Audio("sounds/polySounds/kronheimeGetAway.mp3");
    window.kronheimeGetAway = kronheimeGetAway;

    var kronheimeNecklace = new Audio("sounds/polySounds/kronheimeNecklace.mp3");
    window.kronheimeNecklace = kronheimeNecklace;

    var kronheimeGood = new Audio("sounds/polySounds/kronheimeGood.mp3");
    window.kronheimeGood = kronheimeGood;

        //HILMUND CHARACTER: voice acting

    var hilmundForRoom = new Audio("sounds/polySounds/hilmundForRoom.mp3");
    window.hilmundForRoom = hilmundForRoom;

    var hilmundNoMoney = new Audio("sounds/polySounds/hilmundNoMoney.mp3");
    window.hilmundNoMoney = hilmundNoMoney;

    var hilmundLookingForward = new Audio("sounds/polySounds/hilmundLookingForward.mp3");
    window.hilmundLookingForward = hilmundLookingForward;

    var hilmundLaugh = new Audio("sounds/polySounds/hilmundLaugh.mp3");
    window.hilmundLaugh = hilmundLaugh;

    var hilmundCoupleUp = new Audio("sounds/polySounds/hilmundCoupleUp.mp3");
    window.hilmundCoupleUp = hilmundCoupleUp;

    var hilmundFineEnough = new Audio("sounds/polySounds/hilmundFineEnough.mp3");
    window.hilmundFineEnough = hilmundFineEnough;

    var hilmundGoodTime = new Audio("sounds/polySounds/hilmundGoodTime.mp3");
    window.hilmundGoodTime = hilmundGoodTime;

    var hilmundFlattering = new Audio("sounds/polySounds/hilmundFlattering.mp3");
    window.hilmundFlattering = hilmundFlattering;

    var hilmundWoman = new Audio("sounds/polySounds/hilmundWoman.mp3");
    window.hilmundWoman = hilmundWoman;

    var hilmundThatIDo = new Audio("sounds/polySounds/hilmundThatIDo.mp3");
    window.hilmundThatIDo = hilmundThatIDo;

    var hilmundStorm = new Audio("sounds/polySounds/hilmundStorm.mp3");
    window.hilmundStorm = hilmundStorm;

    var hilmundFind = new Audio("sounds/polySounds/hilmundFind.mp3");
    window.hilmundFind = hilmundFind;

    var hilmundNeed = new Audio("sounds/polySounds/hilmundNeed.mp3");
    window.hilmundNeed = hilmundNeed;

    var hilmundAlreadyTold = new Audio("sounds/polySounds/hilmundAlreadyTold.mp3");
    window.hilmundAlreadyTold = hilmundAlreadyTold;

    var hilmundNoIdea = new Audio("sounds/polySounds/hilmundNoIdea.mp3");
    window.hilmundNoIdea = hilmundNoIdea;

    var hilmundGreat = new Audio("sounds/polySounds/hilmundGreat.mp3");
    window.hilmundGreat = hilmundGreat;

    var hilmundLove = new Audio("sounds/polySounds/hilmundLove.mp3");
    window.hilmundLove = hilmundLove;

    var hilmundThisOne = new Audio("sounds/polySounds/hilmundThisOne.mp3");
    window.hilmundThisOne = hilmundThisOne;

    var hilmundTakeThis = new Audio("sounds/polySounds/hilmundTakeThis.mp3");
    window.hilmundTakeThis = hilmundTakeThis;

    var hilmundBuy = new Audio("sounds/polySounds/hilmundBuy.mp3");
    window.hilmundBuy = hilmundBuy;

    //CREATURE SOUNDS

    //Hyeling Sounds

    var hyelingBattlecry1 = new Audio("sounds/polySounds/hyelingBattlecry1.mp3");
    window.hyelingBattlecry1 = hyelingBattlecry1;

    var hyelingBattlecry2 = new Audio("sounds/polySounds/hyelingBattlecry2.mp3");
    window.hyelingBattlecry2 = hyelingBattlecry2;

    var hyelingPaincry1 = new Audio("sounds/polySounds/hyelingPaincry1.mp3");
    window.hyelingPaincry1 = hyelingPaincry1;

    var hyelingPaincry2 = new Audio("sounds/polySounds/hyelingPaincry2.mp3");
    window.hyelingPaincry2 = hyelingPaincry2;

    var hyelingClick1 = new Audio("sounds/polySounds/hyelingClick1.mp3");
    window.hyelingClick1 = hyelingClick1;

    var hyelingClick2 = new Audio("sounds/polySounds/hyelingClick2.mp3");
    window.hyelingClick2 = hyelingClick2;

    var hyelingClick3 = new Audio("sounds/polySounds/hyelingClick3.mp3");
    window.hyelingClick3 = hyelingClick3;

    //images

    var themeIMG = new Image();
    themeIMG.src = ("images/aKnightsDestiny.png");
    window.themeIMG = themeIMG;

    var charCreaIMG = new Image();
    charCreaIMG.src = ("images/ratInValley.png");
    window.charCreaIMG = charCreaIMG;

    var loadGameIMG = new Image();
    loadGameIMG.src = ("images/wolfPack.png");
    window.loadGameIMG = loadGameIMG;

    var etnaDistortion = new Image();
    etnaDistortion.src = ("images/etnaDistortion.png");
    window.etnaDistortion = etnaDistortion;

    var farmground = new Image();
    farmground.src = ("images/farmingland.png");
    window.farmground = farmground;

    var kellStone = new Image();
    kellStone.src = ("images/puterRocks.jpg");
    window.kellStone = kellStone;

    var kellsStone = new Image();
    kellsStone.src = ("images/heavyRock.jpg");
    window.kellsStone = kellsStone;

    var mushBlur = new Image();
    mushBlur.src = ("images/blurredGreenSwish.jpg");
    window.mushBlur = mushBlur;

    var rainblur = new Image();
    rainblur.src = ("images/rainbowBlur.jpg");
    window.rainblur = rainblur;

    var rainSpin = new Image();
    rainSpin.src = ("images/rainbowSwirl.png");
    window.rainSpin = rainSpin;

    var rainSwirl = new Image();
    rainSwirl.src = ("images/swirlTile.jpg");
    window.rainSwirl = rainSwirl;

    var blurDots = new Image();
    blurDots.src = ("images/blurredDots.jpg");
    window.blurDots = blurDots;

    var volcanicEnv = new Image();
    volcanicEnv.src = ("images/molten.jpg");
    window.volcanicEnv = volcanicEnv;

    var thenganBrickEnv = new Image();
    thenganBrickEnv.src = ("images/thenganBrick.png");
    window.thenganBrickEnv = thenganBrickEnv;

    var brickRoadEnv = new Image();
    brickRoadEnv.src = ("images/brickRoad.jpg");
    window.brickRoadEnv = brickRoadEnv;

    var snowyEnv = new Image();
    snowyEnv.src = ("images/permaFrost.jpg");
    window.snowyEnv = snowyEnv;

    var lushGrassEnv = new Image();
    lushGrassEnv.src = ("images/reducedLush.jpg");
    window.lushGrassEnv = lushGrassEnv;

    var dungeonStoneEnv = new Image();
    dungeonStoneEnv.src = ("images/dungeonStone.jpg");
    window.dungeonStoneEnv = dungeonStoneEnv;

    var frozenEnv = new Image();
    frozenEnv.src = ("images/tundra.jpg");
    window.frozenEnv = frozenEnv;

    var bogGrassEnv = new Image();
    bogGrassEnv.src = ("images/bogGrass.jpeg");
    window.bogGrassEnv = bogGrassEnv;

    var bogMuckEnv = new Image();
    bogMuckEnv.src = ("images/bogMuck.png");
    window.bogMuckEnv = bogMuckEnv;

    var nordWoods = new Image();
    nordWoods.src = ("images/nordForest.png");
    window.nordWoods = nordWoods;

    var snowEnv = new Image();
    snowEnv.src = ("images/fluffySnow.jpg");
    window.snowEnv = snowEnv;

    var sandyEnv = new Image();
    sandyEnv.src = ("images/greatDunes.jpg");
    window.sandyEnv = sandyEnv;

    var dryGrassEnv = new Image();
    dryGrassEnv.src = ("images/dryGrass.png");
    window.dryGrassEnv = dryGrassEnv;

    var stoneWorkEnv = new Image();
    stoneWorkEnv.src = ("images/fancyStones.jpg");
    window.stoneWorkEnv = stoneWorkEnv;

    var oldPaper = new Image();
    oldPaper.src = ("images/oldPaper.jpg");
    window.oldPaper = oldPaper;

    var stonePathEnv = new Image();
    stonePathEnv.src = ("images/stonePath.png");
    window.stonePathEnv = stonePathEnv;

    var brokenStonePathEnv = new Image();
    brokenStonePathEnv.src = ("images/brokenStonePath.png");
    window.brokenStonePathEnv = brokenStonePathEnv;

    var rockyFlatEnv = new Image();
    rockyFlatEnv.src = ("images/dryLand.png");
    window.rockyFlatEnv = rockyFlatEnv;

    var greenGrassEnv = new Image();
    greenGrassEnv.src = ("images/grass.jpg");
    window.greenGrassEnv = greenGrassEnv;

    var verdantGrassEnv = new Image();
    verdantGrassEnv.src = ("images/simpleGrass.jpg");
    window.verdantGrassEnv = verdantGrassEnv;

    var dirtEnv = new Image();
    dirtEnv.src = ("images/dirtBasic.jpg");
    window.dirtEnv = dirtEnv;

    var forestEnv = new Image();
    forestEnv.src = ("images/mBank.jpg");
    window.forestEnv = forestEnv;

    var poly = new Image();
    poly.src = ("images/poly.png");
    window.poly = poly;

    var candlewic = new Image();
    candlewic.src = ("images/candlewic.png");
    window.candlewic = candlewic;

    var horde1 = new Image();
    horde1.src = ("images/hordepics.png");
    window.horde1 = horde1;

    var polyPNG = new Image();
    polyPNG.src = ("images/polyAssets.png");
    window.polyPNG = polyPNG;


    polyPNG.onload = function()
    {
        secondToLastPreStage();
    };

    //theLegend();
}
function secondToLastPreStage()
{
    var theCrack = new Image();
    theCrack.src = ("images/crackAssets.png");
    window.theCrack = theCrack;

    theCrack.onload = function()
    {
        notReallyJustKidding();
    };
}

function notReallyJustKidding()
{
    var furr = new Image();
    furr.src = ("images/furr.png");
    window.furr = furr;

    furr.onload = function()
    {
        comingUpToLastPreStage();
    };
}

function comingUpToLastPreStage()
{
    var polpol = new Image();
    polpol.src = ("images/polpol.png");
    window.polpol = polpol;

    polpol.onload = function()
    {
        casiAlFin();
    };
}

function casiAlFin()
{
    var lodo = new Image();
    lodo.src = ("images/lodo.png");
    window.lodo = lodo;

    lodo.onload = function()
    {
        yaEstamosAlla();
    };
}

function yaEstamosAlla()
{
    var theng = new Image();
    theng.src = ("images/theng.png");
    window.theng = theng;

    theng.onload = function()
    {
        noRealmenteTanCerca();
    };
}

function noRealmenteTanCerca()
{
    var dolls = new Image();
    dolls.src = ("images/dolls.png");
    window.dolls = dolls;

    dolls.onload = function()
    {
        somewhatToLastPreStage();
    };
}

function somewhatToLastPreStage()
{
    var mufmuf = new Image();
    mufmuf.src = ("images/mufmuf.png");
    window.mufmuf = mufmuf;

    mufmuf.onload = function()
    {
        justGiveUpItsNeverComing();
    };
}

function justGiveUpItsNeverComing()
{
    var zapa = new Image();
    zapa.src = ("images/zapa.png");
    window.zapa = zapa;

    zapa.onload = function()
    {
        almostLastPreStage();
    };
}

function almostLastPreStage()
{
    var polypol = new Image();
    polypol.src = ("images/Polypol.png");
    window.polypol = polypol;

    polypol.onload = function()
    {
        easterEggStage();
    };
}

function easterEggStage()
{
    var zer0 = new Image();
    zer0.src = ("images/zer0.png");
    window.zer0 = zer0;

    zer0.onload = function()
    {
        somewhatNearToLastPreStage();
    };
}

function somewhatNearToLastPreStage()
{
    var mofu = new Image();
    mofu.src = ("images/mofu.png");
    window.mofu = mofu;

    mofu.onload = function()
    {
        comingCloseToLastPreStage();
    };
}
function comingCloseToLastPreStage()
{
    var oldverse = new Image();
    oldverse.src = ("images/oldVerse.png");
    window.oldverse = oldverse;

    oldverse.onload = function()
    {
        yaLlegamosAlUltimoPreStage()
    };
}
function yaLlegamosAlUltimoPreStage()
{
    var nognog = new Image();
    nognog.src = ("images/nognog.png");
    window.nognog = nognog;

    nognog.onload = function()
    {
        nearlyToTheLastPreStage()
    };
}
function nearlyToTheLastPreStage()
{
    var freeverse = new Image();
    freeverse.src = ("images/freeverse.png");
    window.freeverse = freeverse;

    freeverse.onload = function()
    {
        lastPreStage();
    };
}
function lastPreStage()
{
    var verse = new Image();
    verse.src = ("images/verseAssets.png");
    window.verse = verse;

    verse.onload = function()
    {
        theLegend();
    };
}

//OFFICIAL DECLARATION OF ALL GLOBAL VARIABLES
var LCC;
var LXX;
var CCC;
var XXX;
var NDC;
var NDX;
var map;
var region;
var elevation;
var change;
var X;
var Y;
var spawnX;
var spawnY;
var timePlayed;
var timeRegulator;
var gameTime;
var sleeperTime;
var gameMinute;
var gameHour;
var gameDay;
var gameSeason;
var gameYear;
var hourOfDay;
var minuteOfHour;
var seasonOfYear;
var secondOfMinute;
var dayOfYear;
var currentSeason;
var timeOfDay;
var darkestDark;
var nightDarkness;
var gameState;
var gameLoopNumber;
var update;
var lastUpdate;
var saveType;
var loadType;
var saveBrain;
var autosaving;
var keyString;
var mouseX;
var mouseY;
var lMouseX;
var lMouseY;
var wMouseX;
var wMouseY;
var clicked;
var clickReleased;
var dClick;
var drunkScreenShift;
var drunkDirectionSwitch;
var itemDescriptionBox;
var showBeastStat;
var lowBar;
var invScroll;
var questScroll;
var merchScroll;
var itemAmount;
var bankAccount;
var bankSlots;
var bankSlotCost;
var bankScroll;
var crafting;
var craftScroll;
var initialcraftingItemSet;
var magicMenu;
var magicPos;
var primarySpells;
var secondarySpells;
var tertiarySpells;
var wellConversionList;
var naapridConversionList;
var waantiConversionList;
var conversationID;
var conversations;
var beegin;
var TTN;
var TTP;
var TTD;
var fairSleep;
var wKey;
var sKey;
var spaceKey;
var shiftKey;
var altKey;
var qKey;
var eKey;
var key1;
var key2;
var key3;
var key4;
var key5;
var key6;
var key7;
var key8;
var key9;
var key0;
var fKey;
var ctrlKey;
var tildKey;
var rKey;
var vKey;
var tKey;
var cKey;
var gKey;
var keyBAR;
var tellCoords;
var showSight;
var adminShowSight;
var showPlayerAttackBubble;
var testingUnitCenters;
var testingUnitSizes;
var unitSurround;
var wallPhase;
var extraSkillPoints;
var energyDrink;
var quickRegeneration;
var incredibleHulk;
var developerRapidamente;
var smoothWall;
var rapidamente;
var constantEXP;
var constantMagic;
var machineGunCrossbow;
var energil;
var cheatItem;
var showAntiVenomBar;
var playersTurnToSpeak;
var playersTurnToMove;
var popDuration;
var popType;
var confirmed;
var save1;
var save2;
var save3;
var save4;
var save5;
var save6;
var save7;
var save8;
var uniqueChars;
var quests;
var mainCharacterAccess;
var player;
var ArtificialIntelligenceAccess;
var exampleGuyList;
var selectorList;
var beastJournal;
var lights;
var deadAIList;
var worldItems;
var Inventory;
var allWeapons;
var allWorn;
var scenicList;
var barrierList = [];
var playerProjectiles;
var unitProjectiles;
var magicList;
var bindedWillList;
var shopID;
var shopkeeper;
var shopInventory;
var initialShopItemSet;
var initialBankItemSet;
var smithing;
var foods;
var tailoring;
var jewelry;
var alchemy;
var brewing;
var forge;
var handcrafted;
var allSpells;
var page = 0;
var reading = [];
var haeRotate = 0;
var showUnitAttackBubble;
var testBarriers;

//This sets the items that are in shops.
function shopItemIDSetter()
{
    if (lowBar == "shop" || initialShopItemSet == false)
    {
        initialShopItemSet = true;
        for (var i = 0; i < shopInventory.length; i++)
        {
            shopInventory[i][0].setItemID();
        }
    }

    if (lowBar == "bank" || initialBankItemSet == false)
    {
        initialBankItemSet = true;
        for (var i = 0; i < bankAccount.length; i++)
        {
            bankAccount[i][0].setItemID();
        }
    }

    if (lowBar == "crafting" || initialcraftingItemSet == false)
    {
        if (crafting == "smithing" || initialcraftingItemSet == false)
        {
            for (var i = 0; i < smithing.length; i++)
            {
                smithing[i].setItemID();
            }
        }
        if (crafting == "foods" || initialcraftingItemSet == false)
        {
            for (var i = 0; i < foods.length; i++)
            {
                foods[i].setItemID();
            }
        }
        if (crafting == "tailoring" || initialcraftingItemSet == false)
        {
            for (var i = 0; i < tailoring.length; i++)
            {
                tailoring[i].setItemID();
            }
        }
        if (crafting == "jewelry" || initialcraftingItemSet == false)
        {
            for (var i = 0; i < jewelry.length; i++)
            {
                jewelry[i].setItemID();
            }
        }
        if (crafting == "alchemy" || initialcraftingItemSet == false)
        {
            for (var i = 0; i < alchemy.length; i++)
            {
                alchemy[i].setItemID();
            }
        }
        if (crafting == "forging" || initialcraftingItemSet == false)
        {
            for (var i = 0; i < forge.length; i++)
            {
                forge[i].setItemID();
            }
        }
        if (crafting == "brewing" || initialcraftingItemSet == false)
        {
            for (var i = 0; i < brewing.length; i++)
            {
                brewing[i].setItemID();
            }
        }
        if (crafting == "handcrafted" || initialcraftingItemSet == false)
        {
            for (var i = 0; i < handcrafted.length; i++)
            {
                handcrafted[i].setItemID();
            }
        }
        initialcraftingItemSet = true;
    }
}

//This function runs through the list of Units and activates their Operation functions.
function projectileOperationsManagement(z)
{
    if (gameState == "active" || gameState == "stopTime")
    {
        for (var i = 0; i < playerProjectiles.length; i++)
        {
            if (playerProjectiles[i].zIndex == z)
            {
                if (playerProjectiles[i].dmx == map)
                {
                    playerProjectiles[i].operations();
                }
            }
        }
    }
    if (gameState == "active")
    {
        for (var i = 0; i < unitProjectiles.length; i++)
        {
            if (unitProjectiles[i].zIndex == z)
            {
                if (unitProjectiles[i].dmx == map)
                {
                    unitProjectiles[i].operations();
                }
            }
        }
    }
}
//This function runs through the list of Units and activates their Operation functions.
function magicOperationsManagement(z)
{
    if (gameState == "active" || gameState == "stopTime")
    {
        for (var i = 0; i < magicList.length; i++)
        {
            if (magicList[i].zIndex == z)
            {
                if (magicList[i].dmx == map)
                {
                    magicList[i].operations();
                }
            }
        }
    }
}
//This function runs through the list of Units and activates their Operation functions.
function artificialIntelligenceOperationsManagement(z)
{
    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
    {
        if (ArtificialIntelligenceAccess[i].dmx == map)
        {
            if (ArtificialIntelligenceAccess[i].zIndex == z)
            {
                if (gameState == "active")
                {
                    ArtificialIntelligenceAccess[i].operation();
                }
                else if (gameState == "stopTime" && ArtificialIntelligenceAccess[i].timeResistance == true) //when the player uses magic to stop time time resistant creatures will still exist but all others will disapear until time starts again. //TODO this needs to be rearranged if it is ever going to be a real spell for the game. Units would need to be able to take damage and draw during paused time.
                {
                    ArtificialIntelligenceAccess[i].operation();
                }
            }
        }
    }
}
function aiIdentify()
{
    if (gameState == "active")
    {
        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
        {
            if (ArtificialIntelligenceAccess[i].dmx == map)
            {
                interaction(ArtificialIntelligenceAccess[i]);
            }
        }
    }
}
//This function runs through the list of Units and activates their Operation functions.
function deadAIOperationsManagement()
{
    for (var i = 0; i < deadAIList.length; i++)
    {
        if (deadAIList[i].dmx == map)
        {
            deadAIList[i].operation();
        }
    }
}
//This function runs through the list of Invisible Game Barriers and activates their operation functions.
function barrierOperationsManager()
{
    for (var i = 0; i < barrierList.length; i++)
    {
        barrierList[i].operations();
    }
}
//This function runs through the list of scenery and activates their operation functions.
function sceneryOperationsManager(z)
{
    if (gameState == "active" || gameState == "stopTime")
    {
        for (var i = 0; i < scenicList.length; i++)
        {
            if (scenicList[i].zIndex == z)
            {
                if (scenicList[i].X > X - (1.6 * CCC.width) && scenicList[i].X < X + (1.6 * CCC.width) && scenicList[i].Y > Y - (1.6 * CCC.height) && scenicList[i].Y < Y + (1.6 * CCC.height))
                {
                    scenicList[i].operations();
                }
            }
        }
    }
}
//This function runs through the lists of Items and activates their operation functions.
function ItemOperationsManager(z)
{

    if (gameState == "active" || gameState == "stopTime")
    {
        for (var i = 0; i < worldItems.length; i++)
        {
            if (worldItems[i][0].zIndex == z)
            {
                if (worldItems[i][0].X > X - (1.2 * CCC.width) && worldItems[i][0].X < X + (1.2 * CCC.width) && worldItems[i][0].Y > Y - (1.2 * CCC.height) && worldItems[i][0].Y < Y + (1.2 * CCC.height))
                {
                    if (worldItems[i][0].dmx == map)
                    {
                        worldItems[i][0].operations();
                    }
                }
            }
        }

    }

    for (var i = 0; i < allWeapons.length; i++)
    {
        allWeapons[i].operations();
    }
    for (var i = 0; i < allWorn.length; i++)
    {
        allWorn[i].operations();
    }
}

//SENSING FUNCTIONS
//double clicking
var timeSinceDClick = 0;
function doubleClicker(event)
{
    dClick = true;
    timeSinceDClick = new Date().getTime();
}
//mouse move anywhere in the screen
function getMousePositionOnWindow(event)
{
    wMouseX = event.clientX;
    wMouseY = event.clientY;
    //console.log("Window's Mouse X = " + wMouseX + " :: Window's Mouse Y = " + wMouseY);
}
//mouse move in the main canvas
function locateMouse(event)
{
    mouseX = event.offsetX; //this sets the mouse coordinates.
    mouseY = event.offsetY; //this sets the mouse coordinates.
    //console.log(mouseX + mouseY);
}
//mouse move in the lower canvas
function findMouse(event)
{
    if (wMouseY < 452)
    {
        lMouseX = -1000; //this makes it so when you are not in the lower canvas it does not try to set your mouses position, which can accidentally click something you didn't want to.
        lMouseY = 1000;
    }
    else
    {
        lMouseX = event.offsetX; //this sets the mouse coordinates.
        lMouseY = event.offsetY; //this sets the mouse coordinates.
    }
}
//mouse-click
function mouseClicked(event)
{
    clicked = true;
    clickReleased = false;
}
//mouse-release from click
var timeSinceMouseReleased = 0; //this represents the amount of time since the mouse was released.
function mouseReleased(event)
{
    clicked = false;
    timeSinceMouseReleased = new Date().getTime();
    clickReleased = true;
}

function isMouseReleasedDone()
{
    if (new Date().getTime() - timeSinceMouseReleased > TTD)
    {
        clickReleased = false;
    }
    if (new Date().getTime() - timeSinceDClick > TTD)
    {
        dClick = false;
    }
}
//when a key is released
function keyReleased(event)
{
    var key = event.keyCode || event.which;

    if (key == 87)
    {
        wKey = false;
    }

    if (key == 192)
    {
        tildKey = false;
    }

    if (key == 82)
    {
        rKey = false;
    }

    if (key == 86)
    {
        vKey = false;
    }

    if (key == 71)
    {
        gKey = false;
    }

    if (key == 84)
    {
        tKey = false;
    }

    if (key == 67)
    {
        cKey = false;
    }

    if (key == 83)
    {
        sKey = false;
    }

    if (key == 69)
    {
        eKey = false;
    }

    if (key == 70)
    {
        fKey = false;
    }

    if (key == 32)
    {
        spaceKey = false;
    }

    if (key == 16)
    {
        shiftKey = false;
    }

    if (key == 17)
    {
        ctrlKey = false;
    }

    if (key == 18)
    {
        altKey = false;
    }

    if (key == 81)
    {
        qKey = false;
    }

    if (key == 49)
    {
        key1 = false;
    }

    if (key == 50)
    {
        key2 = false;
    }

    if (key == 51)
    {
        key3 = false;
    }

    if (key == 52)
    {
        key4 = false;
    }

    if (key == 53)
    {
        key5 = false;
    }

    if (key == 54)
    {
        key6 = false;
    }

    if (key == 55)
    {
        key7 = false;
    }

    if (key == 56)
    {
        key8 = false;
    }

    if (key == 57)
    {
        key9 = false;
    }

    if (key == 48)
    {
        key0 = false;
    }

    if (key == 220)
    {
        keyBAR = false;
    }
}
//when a key is held down
function keyHeld(event)
{
    var key = event.keyCode || event.which;

    if (key == 87)
    {
        wKey = true;
    }

    if (key == 192)
    {
        tildKey = true;
    }

    if (key == 82)
    {
        rKey = true;
    }

    if (key == 86)
    {
        vKey = true;
    }

    if (key == 71)
    {
        gKey = true;
    }

    if (key == 84)
    {
        tKey = true;
    }

    if (key == 67)
    {
        cKey = true;
    }

    if (key == 83)
    {
        sKey = true;
    }

    if (key == 69)
    {
        eKey = true;
    }

    if (key == 70)
    {
        fKey = true;
    }

    if (key == 32)
    {
        spaceKey = true;
    }

    if (key == 16)
    {
        shiftKey = true;
    }

    if (key == 17)
    {
        ctrlKey = true;
    }

    if (key == 18)
    {
        altKey = true;
    }

    if (key == 81)
    {
        qKey = true;
    }

    if (key == 49)
    {
        key1 = true;
    }

    if (key == 50)
    {
        key2 = true;
    }

    if (key == 51)
    {
        key3 = true;
    }

    if (key == 52)
    {
        key4 = true;
    }

    if (key == 53)
    {
        key5 = true;
    }

    if (key == 54)
    {
        key6 = true;
    }

    if (key == 55)
    {
        key7 = true;
    }

    if (key == 56)
    {
        key8 = true;
    }

    if (key == 57)
    {
        key9 = true;
    }

    if (key == 48)
    {
        key0 = true;
    }

    if (key == 220)
    {
        keyBAR = true;
    }
}

//This function sets the lower canvas X and Y to un-problematic values whilst the mouse is in the main inventory.
function lowerCanvasMouseCoordsReset()
{
    lMouseX = -1000; //this makes it so when you are not in the lower canvas it does not try to set your mouses position, which can accidentally click something you didn't want to.
    lMouseY = 1000;
}

function mainCanvasMouseCoordsReset()
{
    mouseX = Math.cos(player.rotation - 1/2 * Math.PI) * 500000;
    mouseY = Math.sin(player.rotation - 1/2 * Math.PI) * 500000;
}

//This is the function that sets the difference in time that allows the game to maintain the same appearance of speed even when the gameloop is too slow or fast.
function timeTracker(time)
{
    if (beegin == "start")
    {
        TTP = time;
        beegin = null;
    }
    TTN = time;
    TTD = TTN - TTP;
    TTP = time;
}

function theLegend()
{
    //INITIAL SET OF ALL WORLD VARIABLES
    // Establish the lower canvas and context
    LCC = document.getElementById("bearPawAlpha");
    LXX = LCC.getContext("2d");
// Establish the canvas and its context
    CCC = document.getElementById("bearPawBravo");
    XXX = CCC.getContext("2d");
// Establish the night and day light cycle mask
    NDC = document.createElement("canvas");
    NDC.width = CCC.width;
    NDC.height = CCC.height;
    NDX = NDC.getContext("2d");

//What part of the game world are you in
    map = "world"; //this represents which map you are in.
    region = "central"; //this represents which part of a map you are in.
    elevation = 0; //this is a general number based on your current region that helps determines seasonal climate effects.
    change = 0; //This allows the buildMaster to know when a region has just changed so that it can delete everything from the old region before building the new one.
    X = 2000; //This X represents the worlds location X compared to you, as you are a stationary object that never moves.
    Y = 1000; //This Y represents the worlds location Y compared to you, as you are a stationary object that never moves.
    spawnX = 0;
    spawnY = 0;

//Game Time Keeping
    timePlayed = 0; //this is time played in real life seconds.
    timeRegulator = new Date().getTime(); //this is a basic switch that helps in the process of counting time for the game.
    gameTime = 0; //game time is seconds in game and is 0.0625 * of a real second.
    sleeperTime = (60 * 60 * 7); //the game starts 7 in game hours later than the start time.
    gameMinute = 0;
    gameHour = 0;
    gameDay = 0;
    gameSeason = 0; //There are four seasons: Frost, Bounty, Bright, Harvest
    gameYear = 0; //game years are only 360 days made up of four 90 day seasons.
    hourOfDay = 0;
    minuteOfHour = 0;
    seasonOfYear = 0;
    secondOfMinute = 0;
    dayOfYear = 0;
    currentSeason = "Harvest";
    timeOfDay = "Day";
    darkestDark = 0;
    nightDarkness = 0;

//Game Pausing, Moderation, and Control
    gameState = "mainMenu"; //set to "active" for ingame play, and set to "mainMenu" for the main menu.

//Functioning
    gameLoopNumber = 0;

//Saving
    update = 6; //change this by one whenever a new update has changed any of the key game aspects that might interfere with the normal save structure.
    lastUpdate = 0;
    saveType = 1;
    loadType = 1;
    saveBrain = {};
    autosaving = true;

//Important Sensing Variables
    mouseX = 0; //main canvas mouse coords.
    mouseY = 0; //main canvas mouse coords.
    lMouseX = 0; //lower canvas mouse coords.
    lMouseY = 0; //lower canvas mouse coords.
    wMouseX = 0; //window mouse coords.
    wMouseY = 0; //window mouse coords.
    clicked = false; //senses upon click and during hold click.
    clickReleased = true; //senses once for the briefest moment upon release.
    dClick = false;

//Other Variables (extra)
    drunkScreenShift = 0;
    drunkDirectionSwitch = false;
    itemDescriptionBox = false;
    showBeastStat = -1;

//Lower Canvas
    lowBar = "information"; //This variable determines what type of menu the lower bar is.
//inventory
    invScroll = 0; //this is the variable that lets you scroll through the inventory.
//questLog
    questScroll = 0;
//shop
    merchScroll = 0;
    itemAmount = 1;
//bank
    bankAccount = [];
    bankSlots = 1;
    bankSlotCost = 25;
    bankScroll = 0;
//crafting
    crafting = "none";
    craftScroll = 0;
    initialcraftingItemSet = false;
//magic menu
    magicMenu = "primary";
    magicPos = 0;
    primarySpells = [];
    secondarySpells = [];
    tertiarySpells = [];
//Well List
    wellConversionList = [["pintGlass", "waterPintGlass"], ["walrusLeatherWaterskin", "walrusLeatherWaterskinFull"], ["bucket", "bucketOfWater"], ["potionGlass", "vialOfWater"], ["kellishClayPot", "kellishClayPotOfWater"], ["glassBottle", "glassBottleOfWater"]];
//Milking/Juicing/Sapping Lists
    naapridConversionList = [["bucket", "bucketOfNaapridMilk"], ["kellishClayPot", "kellishClayPotOfNaapridMilk"]];
    waantiConversionList = [["bucket", "bucketOfWaantiMilk"], ["kellishClayPot", "kellishClayPotOfWaantiMilk"]];
//conversations and dialogue
    conversationID = ["none", 0]; //[Person conversing with, stage in conversation]
    conversations =
    {
        svehn: ["Svehn", 0],
        toggin: ["Toggin", 0],
        teber: ["Teber", 0],
        drohfor: ["Drohfor", 0],
        maggy: ["Maggy", 0],
        ireneDaughter: ["IreneDaughter", 0],
        fenwik: ["Fenwik", 0],
        irene: ["Irene", 0],
        kedwin: ["Kedwin", 0],
        hilmund: ["Hilmund", 0],
        stendor: ["Stendor", 0],
        medlia: ["Medlia", 0],
        neculai: ["Neculai", 0],
        kronheime: ["Kronheime", 0],
        garld: ["Garld", 0],
        balgurMercenary: ["Balgur Mercenary", 0],
        tor: ["Tor", 0],
        beulingerr: ["Beulingerr", 0],
        pynske: ["Pynske", 0],
        dagmar: ["Dagmar", 0],
        adolf: ["Adolf", 0],
        brunelda: ["Brunelda", 0],
        markos: ["Markos", 0],
        rutgar: ["Rutgar", 0]
    };

//time Tracker Variables
    beegin = "start"; // this is a variable that lets TTP set to time natural when the game starts
    TTN = 0; //Current Time a.k.a [Time Now]
    TTP = 0; //Previous Time a.k.a [Time Previous]
    TTD = 0; //Difference in time a.k.a [Delta Time]
    fairSleep = true; //when the game starts this makes sure the sleep timer is caught up to game time.

//Key sensing variables
    wKey = false;
    sKey = false;
    spaceKey = false;
    shiftKey = false;
    altKey = false;
    qKey = false;
    eKey = false;
    key1 = false;
    key2 = false;
    key3 = false;
    key4 = false;
    key5 = false;
    key6 = false;
    key7 = false;
    key8 = false;
    key9 = false;
    key0 = false;
    tildKey = false;
    rKey = false;

//DEVELOPMENTAL VARIABLES (variables for the developer to use)
//Locational
    tellCoords = false; //This displays the players exact world coordinates on the screen.
//AI Unit Focused
    showSight = false; //This makes every AI UNIT draw their rangeOfSight to the world.
    adminShowSight = false; //this is the switch that controls showSight.
    showPlayerAttackBubble = false; //This shows the bubble/radius in which the players attack will deal damage.
    testingUnitCenters = false; //This displays the center point of all AI UNITS.
    testingUnitSizes = false; //This displays the AI Units' sizes as a faded white circle.
    unitSurround = true;
    showUnitAttackBubble = false;
//manipulation
    wallPhase = false;
//environmental
    testBarriers = false;
//Player Stat Focused
    extraSkillPoints = 0;
    energyDrink = false; //This makes energy regenerate at its absolute fastest point but it slowly deteriorates the players health by 1 for every couple of seconds.
    quickRegeneration = false; //This makes both health and energy restore quickly.
    incredibleHulk = false; //This makes the character outrageously strong and constituted.
    developerRapidamente = false; //This must be true as well as rapidamente in order to enable super speed.
    smoothWall = true; //determines whether player's outer edge or inner coords touch barriers.
    rapidamente = false; //This makes the character have true super speed, but this only works if the above is also true.
    constantEXP = false;
    constantMagic = false;
    machineGunCrossbow = false;
    energil = 1;
//Items
    cheatItem = 0; //When the cheat is not active this should be at zero. This number represents the extra amount of items generated by the drop all option.
//displays
    showAntiVenomBar = false;

//dialogue variables
    playersTurnToSpeak = true;
    playersTurnToMove = true;// this is how I will force it to behave.

//In-Game Pop Ups Variables
    popDuration = 0; //This is the timer for how long some popups will last.
    popType = 0;
    confirmed = false;
//Confirm variables
    save1 = null;
    save2 = null;
    save3 = null;
    save4 = null;
    save5 = null;
    save6 = null;
    save7 = null;
    save8 = null;

//UNIQUE CHARACTERS
    uniqueChars =
    {
        //Unique character life/death status //true means alive false means dead...
        bobithLDS: true,
        medliaLDS: true,
        garldLDS: true,
        nelgrefLDS: true,
        drohforLDS: true,
        hilmundLDS: true,
        teberLDS: true,
        kedwinLDS: true,
        laandegLDS: true,
        maggyLDS: true,
        odeeLDS: true,
        togginLDS: true,
        hetmerLDS: true,
        kronheimeLDS: true,
        stendorLDS: true,
        neculaiLDS: true,
        roselinLDS: true,
        ireneLDS: true,
        fenwikLDS: true,
        schuylarLDS: true,
        OrjovTorLDS: true,
        dagmarLDS: true,
        lennardLDS: true,
        naokoLDS: true,
        ederhalLDS: true,
        bameyLDS: true,
        barretLDS: true,
        pynskeLDS: true,
        adolfLDS: true,
        bruneldaLDS: true,
        markosLDS: true,
        gerlachLDS: true,
        cherylLDS: true,
        johannaLDS: true,
        lenaLDS: true,
        friedrichLDS: true,
        vsevolodLDS: true,
        rutgarLDS: true,
        axelLDS: true,
        hildegardLDS: true
    };
//QUESTS
    quests =
    {
        //questLog variables
        questMenu: "active",
        activeQuests: [],
        completeQuests: [],

        //SHOP DEALS/OTHER VARIABLES TO DO STUFF WITH DIALOGUE
        neculaiShopDeal: false,
        bankruptNeculai: false,
        medliaNewWealth: 0,
        bobithNewWealth: 0,
        neculaiNewWealth: 0,
        hilmundNewWealth: 0,
        fenwikEchlinArmed: 0,
        fenwikShopStyle: "normal",
        garldCrazyScroll: false,
        kellExecution: false,
        pitFight: false,
        rutgarSlave: false,

        //PLAYER PROPERTY
        teshirHomeOwned: false,
        lethikHomeOwned: false,

        //ITEM STASH VARIABLES (non quest)
        lonerGuyStash: true,
        sagesCacheStash: true,

        //QUEST: Sword Delivery ---- given by Dagmar
        swordDeliveryQuest: false,
        swordDeliveryFight: true,

        //QUEST: Teshir North Road ---- given by Toggin
        teshirNorthRoadBandits: true,
        teshirNorthRoadKillCount: 0,
        teshirNorthRoadQuest: false,

        //QUEST: Lost Girl ---- given by Fenwik
        lostGirlFound: false,
        lostGirlCompletionStyle: false,
        lostGirlQuest: false,

        //QUEST: Lost Delivery ---- given by Svehn
        lostDeliveryDetailsTold: false,
        lostDeliveryPetsKilled: 0,
        lostDeliveryCompletionStyle: false,
        lostDeliveryCrate: true,
        lostDeliveryQuest: false,

        //QUEST: The Broken Well ---- given by Hilmund
        theBrokenWellFixed: false,
        theBrokenWellDetailsTold: false,
        theBrokenWellSvehn: false,
        theBrokenWellQuest: false,

        //QUEST: Hunting Wager ---- given by Drohfor
        huntingWagerFrichPack: false,
        huntingWagerKillCount: 0,
        huntingWagerQuest: false,

        //QUEST: Medlia Competition Control ---- given by Medlia
        medliaCompetitionControlReward: 0,
        medliaCompetitionControlCompletionStyle: false,
        medliaCompetitionControlQuest: false,

        //QUEST: The Balgur Mercenaries ---- given by Neculai
        theBalgurMercenariesReward: 0,
        theBalgurMercenariesNecklace: false,
        theBalgurMercenariesMercsKilled: 0,
        theBalgurMercenariesCompletionStyle: false,
        theBalgurMercenariesQuest: false,

        //QUEST: The Master Thief of Teshir ---- given by Stendor
        theMasterThiefOfTeshirNeevSlain: false,
        theMasterThiefOfTeshirNeevKnown: false,
        theMasterThiefOfTeshirQuest: false,

        //QUEST: Bounty: Hetmer the Bandit Chieftain ---- given by Stendor
        bountyHetmerQuest: false,

        //QUEST: Bounty: Teber the Deserter ---- given by Stendor
        bountyTeberCompletionStyle: false,
        bountyTeberQuest: false

    };

//IMPORTANT LISTS
//This list stores the identity of the players character
    mainCharacterAccess = [];
    mainCharacterAccess.push(new Adventurer()); //This is the line of code that adds the main character to its access list.
    player = mainCharacterAccess[0];
//This list stores the identities of all the game's AI Units.
    ArtificialIntelligenceAccess = [];
//this list stores the example guy for the character builder.
    exampleGuyList = [];
    exampleGuyList.push(new drawExampleCharacter(1/2 * CCC.width, 1/2 * CCC.height - 115, 0));
//this list stores the Selector Bar Class for the character builder.
    selectorList = [];
    selectorList.push(new Selector(1/2 * CCC.width - 105, 260, "race", 8)); // 0 == race selector
    selectorList.push(new Selector(1/2 * CCC.width - 105, 300, "gender", 2)); // 1 == gender selector
    selectorList.push(new Selector(1/2 * CCC.width - 105, 340, "class", 6)); // 2 == wealth and social class selector
    selectorList.push(new Selector(1/2 * CCC.width - 105, 380, "style", 2)); // 3 == combat style selector
    selectorList.push(new Selector(1/2 * CCC.width - 105, 420, "mode", 2)); // 4 == game mode selector

//this list is of all the beast your character learns about in the world.
//this is an example beast entry:
//this.beastEntry = {intReq: 0, name: "", health: "", armour: "", damage: "", negate: "", ability: "", fireProof: #, habitat: "", sight: #, alpha: "", magicProof: #, size: #, speed: #, rotation: #, rate: #, experience: #, description: [""], image: [IMG, strX, strY, W, H, adjX, adjY, SzX, SzY]};
    beastJournal = [];

//This List stores all of the lights that penetrate the darkness of the night.
// X and Y determine location of the light, size determines its size, extraStops determines if it is a more complicated gradient with a middle stop layer, GDR is how long the alpha you specify lasts until it fades to black, the GDR's go from 0 - 1 max, Alpha is all about the transparency of the light bubble at each stage of the gradient, showMe is a way to draw the light no matter what.
//light objects look like this: {X:, Y:, size:, extraStops:, GRD:, Alpha:, showMe:}
    lights = [];

//This list stores the dead from the AI list.
    deadAIList = [];

//This list stores the identities of all the game's Items.
    worldItems = [];

//Player Inventory
    Inventory = [];
//todo TEST INVENTORIES
//Inventory = [[new Item("coins", false, false), 10000], [new Item("vardanianBattleAxe", false, false), 1], [new Item("jvostranPlateArmour", false, false), 1], [new Item("crossbow", false, false), 1], [new Item("steelBolt", false, false), 100], [new Item("walrusLeatherWaterskinFull", false, false), 2], [new Item("shehidToxinArrow", false, false), 45], [new Item("oiledArrow", false, false), 45], [new Item("fireStarter", false, false), 1], [new Item("lifeLeachArrow", false, false), 45], [new Item("fireArrow", false, false), 45], [new Item("freezingArrow", false, false), 45], [new Item("oilLantern", false, false), 1], [new Item("berulnToothNecklace", false, false), 1], [new Item("ogardPerfume", false, false), 2]];
    Inventory = [[new Item("mofuMatriarchHeaddress", false, false), 1], [new Item("avrakLeatherArmour", false, false), 1], [new Item("varnFiber", false, false), 1], [new Item("avrakHide", false, false), 1], [new Item("rawAvrakFlesh", false, false), 1], [new Item("avrakMeat", false, false), 1], [new Item("healingSalve", false, false), 1], [new Item("driedCyrinthilimMushroom", false, false), 1], [new Item("cyrinthilimMushroom", false, false), 1], [new Item("kellishClayPotOfMushroomStew", false, false), 1], [new Item("kellishClayPotOfNaapridMilk", false, false), 1], [new Item("kellishClayPotOfWater", false, false), 1], [new Item("kellishClayPot", false, false), 1], [new Item("fermentedViperVenomGland", false, false), 1], [new Item("viperVenomGland", false, false), 1], [new Item("viperSnakeSkin", false, false), 1], [new Item("rawViperFlesh", false, false), 1], [new Item("viperMeat", false, false), 1], [new Item("jvostranPlateArmour", false, false), 1], [new Item("waterPintGlass", false, false), 1], [new Item("pintGlass", false, false), 1], [new Item("harstAle", false, false), 1], [new Item("potionGlass", false, false), 1], [new Item("vialOfWater", false, false), 1], [new Item("frichFurMittens", false, false), 1], [new Item("halcifMushroom", false, false), 1], [new Item("walrusLeatherWaterskin", false, false), 1], [new Item("walrusLeatherWaterskinFull", false, false), 1], [new Item("bucketOfNaapridMilk", false, false), 1], [new Item("bucketOfWater", false, false), 1], [new Item("bucket", false, false), 1], [new Item("boiledGlinMushrooms", false, false), 1], [new Item("glinMushrooms", false, false), 6], [new Item("neprilneBerries", false, false), 1], [new Item("culprisLeaf", false, false), 1], [new Item("tylunFlower", false, false), 1], [new Item("akerBerries", false, false), 1], [new Item("pluttBerries", false, false), 1], [new Item("stomwikLeaf", false, false), 1], [new Item("hammer", false, false), 1], [new Item("lrgBlackBearPelt", false, false), 1], [new Item("medBlackBearPelt", false, false), 1], [new Item("smlBlackBearPelt", false, false), 1], [new Item("bearTongue", false, false), 1], [new Item("rawBearTongue", false, false), 1], [new Item("bearMeat", false, false), 1], [new Item("rawBearFlesh", false, false), 1], [new Item("varnFurDress", false, false), 2], [new Item("varnFurCloak", false, false), 2], [new Item("varnFurClothing", false, false), 2], [new Item("frichFurClothing", false, false), 3], [new Item("vardanianBattleAxe", false, false), 1], [new Item("vardanianCleaver", false, false), 1], [new Item("fireStarter", false, false), 1], [new Item("wood", false, false), 55], [new Item("katana", false, false), 1], [new Item("winterWolfClothing", false, false), 2], [new Item("winterWolfOutfit", false, false), 2], [new Item("freydicRoyalOutfit", false, false), 2], [new Item("naapridLeatherArmour", false, false), 2], [new Item("winterWolfDress", false, false), 2], [new Item("freydicRoyalDress", false, false), 2], [new Item("youngNaapridMeat", false, false), 4], [new Item("rawYoungNaapridFlesh", false, false), 2], [new Item("naapridHorn", false, false), 8], [new Item("naapridPelt", false, false), 3], [new Item("naapridMeat", false, false), 14], [new Item("rawNaapridFlesh", false, false), 17], [new Item("thenganSwordAndShield", false, false), 1], [new Item("glassJar", false, false), 6], [new Item("rawTrollsBlood", false, false), 10], [new Item("chainArmour", false, false), 52], [new Item("blackChainArmour", false, false), 12], [new Item("freydicGreatSword", false, false), 5], [new Item("aldrekiiArrow", false, false), 79], [new Item("wolfLiver", false, false), 4], [new Item("rawWolfLiver", false, false), 8], [new Item("winterWolfPelt", false, false), 3], [new Item("massiveWinterWolfPelt", false, false), 1], [new Item("rawWinterWolfFlesh", false, false), 2], [new Item("winterWolfMeat", false, false), 3], [new Item("torperVenomSac", false, false), 4], [new Item("torperFuzz", false, false), 2], [new Item("torperMeat", false, false), 13], [new Item("rawTorperFlesh", false, false), 16], [new Item("frichPelt", false, false), 6], [new Item("frichMeat", false, false), 8], [new Item("rawFrichFlesh", false, false), 3], [new Item("freydicSpear", false, false), 1], [new Item("rawGulfreyFlesh", false, false), 2], [new Item("gulfreyMeat", false, false), 3], [new Item("gulfreyShell", false, false), 14], [new Item("gulfreyMandibles", false, false), 1], [new Item("vomit", false, false), 1], [new Item("gojiiBerries", false, false), 19], [new Item("blueBlade", false, false), 1], [new Item("berulnMeat", false, false), 3], [new Item("rawBerulnFlesh", false, false), 2], [new Item("bigBerulnPelt", false, false), 1], [new Item("berulnPelt", false, false), 1], [new Item("berulnSkull", false, false), 1], [new Item("ogoFruit", false, false), 8], [new Item("arrow", false, false), 49], [new Item("longbow", false, false), 1], [new Item("walrusLeatherArmour", false, false), 1], [new Item("coins", false, false), 2890540], [new Item("yaihefBerries", false, false), 2256], [new Item("mace", false, false), 1], [new Item("etyrMeat", false, false), 4], [new Item("etyrHide", false, false), 12], [new Item("longsword", false, false), 1], [new Item("rawEtyrFlesh", false, false), 8], [new Item("rawWalrusFlesh", false, false), 2], [new Item("walrusMeat", false, false), 3], [new Item("blubber", false, false), 5], [new Item("walrusTusks", false, false), 1], [new Item("elderWalrusTusks", false, false), 4], [new Item("walrusHide", false, false), 2], [new Item("elderWalrusHide", false, false), 2], [new Item("freydicWarAxe", false, false), 1], [new Item("trollsBlood", false, false), 20] ];
//Inventory = [[new Item("kellishSword", false, false), 1], [new Item("lightningCorseque", false, false), 1], [new Item("smashStick", false, false), 1], [new Item("burningSmashStick", false, false), 1], [new Item("bullet", false, false), 200], [new Item("blackPowder", false, false), 200], [new Item("musket", false, false), 1], [new Item("blunderbuss", false, false), 1], [new Item("cutlass", false, false), 1], [new Item("avrakLeatherArmour", false, false), 1], [new Item("balgurCaptainArmour", false, false), 1], [new Item("balgurMercArmour", false, false), 1], [new Item("longSpikedMorningStar", false, false), 1], [new Item("rasper", false, false), 1], [new Item("kellishSawClub", false, false), 1], [new Item("hammer", false, false), 1], [new Item("kellishClaymore", false, false), 1], [new Item("warHammer", false, false), 1], [new Item("vardanianHeavyCleaver", false, false), 1], [new Item("timberAxe", false, false), 1], [new Item("curvedDagger", false, false), 1], [new Item("crossbow", false, false), 1], [new Item("steelBolt", false, false), 100], [new Item("dualCurvedDaggers", false, false), 1], [new Item("nirineseSpear", false, false), 1], [new Item("hetmerArmour", false, false), 1], [new Item("vardanianBattleAxe", false, false), 1], [new Item("vardanianCleaver", false, false), 1], [new Item("katana", false, false), 1], [new Item("naapridLeatherArmour", false, false), 1], [new Item("thenganSwordAndShield", false, false), 1], [new Item("chainArmour", false, false), 1], [new Item("blackChainArmour", false, false), 1], [new Item("freydicGreatSword", false, false), 1], [new Item("aldrekiiArrow", false, false), 79], [new Item("freydicSword", false, false), 1], [new Item("pickaxe", false, false), 1], [new Item("aldrekiiBlade", false, false), 1], [new Item("flail", false, false), 1], [new Item("gulfreyShellArmour", false, false), 1], [new Item("vardanianAxe", false, false), 1], [new Item("vardanianAxeDual", false, false), 1], [new Item("freydicSpear", false, false), 1], [new Item("nirineseSabre", false, false), 1], [new Item("blueBlade", false, false), 1], [new Item("arrow", false, false), 250], [new Item("longbow", false, false), 1], [new Item("walrusLeatherArmour", false, false), 1], [new Item("aldrekiiBardiche", false, false), 1], [new Item("coins", false, false), 20], [new Item("freydicWarAxe", false, false), 1], [new Item("mace", false, false), 1], [new Item("longsword", false, false), 1]];

    //All of the spells in the game
    allSpells = [[new Item("embers", false, false), 1], [new Item("fireballI", false, false), 1], [new Item("iceClaymore", false, false), 1], [new Item("iceSpikes", false, false), 1], [new Item("flyingColours", false, false), 1], [new Item("frostWind", false, false), 1], [new Item("repel", false, false), 1], [new Item("lifeTap", false, false), 1], [new Item("drainingI", false, false), 1], [new Item("vivification", false, false), 1], [new Item("chasingLights", false, false), 1], [new Item("electricBolt", false, false), 1], [new Item("surge", false, false), 1], [new Item("fireHands", false, false), 1], [new Item("chargedTouch", false, false), 1], [new Item("freezingGrasp", false, false), 1], [new Item("leechingTouch", false, false), 1], [new Item("sorcerer'sRaincoat", false, false), 1], [new Item("shieldingI", false, false), 1], [new Item("shieldingII", false, false), 1], [new Item("shieldingIII", false, false), 1], [new Item("shieldingIV", false, false), 1], [new Item("shieldingV", false, false), 1], [new Item("summonFrich", false, false), 1], [new Item("summonWolf", false, false), 1], [new Item("charm", false, false), 1], [new Item("sanctuary", false, false), 1], [new Item("repellingWard", false, false), 1], [new Item("iceberg", false, false), 1], [new Item("magicMissiles", false, false), 1], [new Item("minorVortex", false, false), 1], [new Item("mark", false, false), 1]];
//Test Spells
    primarySpells = [];
    secondarySpells = [];
    tertiarySpells = [];

//This list holds one of each type of weapon so that the player can access the weapons stats.
    allWeapons = [];
    allWeapons.push(new Item("mace", false)); //0
    allWeapons.push(new Item("longsword", false)); //1
    allWeapons.push(new Item("none", false)); //2
    allWeapons.push(new Item("freydicWarAxe", false)); //3
    allWeapons.push(new Item("aldrekiiBardiche", false)); //4
    allWeapons.push(new Item("longbow", false)); //5
    allWeapons.push(new Item("arrow", false)); //6
    allWeapons.push(new Item("blueBlade", false)); //7
    allWeapons.push(new Item("nirineseSabre", false)); //8
    allWeapons.push(new Item("freydicSpear", false)); //9
    allWeapons.push(new Item("vardanianAxeDual", false)); //10
    allWeapons.push(new Item("vardanianAxe", false)); //11
    allWeapons.push(new Item("flail", false)); //12
    allWeapons.push(new Item("aldrekiiBlade", false)); //13
    allWeapons.push(new Item("pickaxe", false)); //14
    allWeapons.push(new Item("freydicSword", false)); //15
    allWeapons.push(new Item("aldrekiiArrow", false)); //16
    allWeapons.push(new Item("freydicGreatSword", false)); //17
    allWeapons.push(new Item("thenganSwordAndShield", false)); //18
    allWeapons.push(new Item("katana", false)); //19
    allWeapons.push(new Item("vardanianCleaver", false)); //20
    allWeapons.push(new Item("vardanianBattleAxe", false)); //21
    allWeapons.push(new Item("crossbow", false)); //22
    allWeapons.push(new Item("steelBolt", false)); //23
    allWeapons.push(new Item("nirineseSpear", false)); //24
    allWeapons.push(new Item("curvedDagger", false)); //25
    allWeapons.push(new Item("dualCurvedDaggers", false)); //26
    allWeapons.push(new Item("timberAxe", false)); //27
    allWeapons.push(new Item("vardanianHeavyCleaver", false)); //28
    allWeapons.push(new Item("iceBlade", false)); //29
    allWeapons.push(new Item("warHammer", false)); //30
    allWeapons.push(new Item("kellishClaymore", false)); //31
    allWeapons.push(new Item("hammer", false)); //32
    allWeapons.push(new Item("kellishSawClub", false)); //33
    allWeapons.push(new Item("rasper", false)); //34
    allWeapons.push(new Item("shehidToxinArrow", false)); //35
    allWeapons.push(new Item("oiledArrow", false)); //36
    allWeapons.push(new Item("lifeLeachArrow", false)); //37
    allWeapons.push(new Item("fireArrow", false)); //38
    allWeapons.push(new Item("freezingArrow", false)); //39
    allWeapons.push(new Item("longSpikedMorningStar", false)); //40
    allWeapons.push(new Item("cutlass", false)); //41
    allWeapons.push(new Item("musket", false)); //42
    allWeapons.push(new Item("bullet", false)); //43
    allWeapons.push(new Item("blunderbuss", false)); //44
    allWeapons.push(new Item("smashStick", false)); //45
    allWeapons.push(new Item("burningSmashStick", false)); //46
    allWeapons.push(new Item("lightningCorseque", false)); //47
    allWeapons.push(new Item("kellishSword", false)); //48
    allWeapons.push(new Item("dualVardanianBattleAxe", false)); //49
    allWeapons.push(new Item("vardanianClub", false)); //50
    allWeapons.push(new Item("theNorthernGem", false)); //51
    allWeapons.push(new Item("steelArrow", false)); //52
    allWeapons.push(new Item("aldrekiiClaws", false)); //53
    allWeapons.push(new Item("hyelingCleaver", false)); //54
    allWeapons.push(new Item("cero", false)); //55
    allWeapons.push(new Item("thenganDagger", false)); //56
    allWeapons.push(new Item("staff", false)); //57
    allWeapons.push(new Item("thenganWarhammer", false)); //58

//This list holds one of each type of worn item so that the player can access the worn item stats.
    allWorn = [];
    allWorn.push(new Item("nude", false)); //0
    allWorn.push(new Item("walrusLeatherArmour", false)); //1
    allWorn.push(new Item("gulfreyShellArmour", false)); //2
    allWorn.push(new Item("blackChainArmour", false)); //3
    allWorn.push(new Item("chainArmour", false)); //4
    allWorn.push(new Item("freydicRoyalDress", false)); //5
    allWorn.push(new Item("winterWolfDress", false)); //6
    allWorn.push(new Item("naapridLeatherArmour", false)); //7
    allWorn.push(new Item("freydicRoyalOutfit", false)); //8
    allWorn.push(new Item("winterWolfOutfit", false)); //9
    allWorn.push(new Item("winterWolfClothing", false)); //10
    allWorn.push(new Item("hetmerArmour", false)); //11
    allWorn.push(new Item("frichFurClothing", false)); //12
    allWorn.push(new Item("varnFurClothing", false)); //13
    allWorn.push(new Item("varnFurCloak", false)); //14
    allWorn.push(new Item("varnFurDress", false)); //15
    allWorn.push(new Item("frichFurMittens", false)); //16
    allWorn.push(new Item("jvostranPlateArmour", false)); //17
    allWorn.push(new Item("grushFurClothing", false)); //18
    allWorn.push(new Item("balgurMercArmour", false)); //19
    allWorn.push(new Item("balgurCaptainArmour", false)); //20
    allWorn.push(new Item("berulnToothNecklace", false)); //21
    allWorn.push(new Item("avrakLeatherArmour", false)); //22
    allWorn.push(new Item("blackBearLeatherArmour", false)); //23
    allWorn.push(new Item("blackBearFurClothing", false)); //24
    allWorn.push(new Item("skinAndBones", false)); //25
    allWorn.push(new Item("mofuFive", false)); //26
    allWorn.push(new Item("mofuMatriarchHeaddress", false)); //27
    allWorn.push(new Item("mofuTribalWear", false)); //28
    allWorn.push(new Item("mofuRunnerOutfit", false)); //29
    allWorn.push(new Item("ardilFurClothing", false)); //30
    allWorn.push(new Item("ardilFurSkirt", false)); //31
    allWorn.push(new Item("ardilFurGloves", false)); //32
    allWorn.push(new Item("thenganPlateArmour", false)); //33
    allWorn.push(new Item("swampWalkerArmour", false)); //34
    allWorn.push(new Item("evrakLeatherArmour", false)); //35
    allWorn.push(new Item("anterShellArmour", false)); //36
    allWorn.push(new Item("theCorpseRing", false)); //37
    allWorn.push(new Item("ironRing", false)); //38
    allWorn.push(new Item("fineFreydicOutfitF", false)); //39
    allWorn.push(new Item("fineFreydicOutfitM", false)); //40
    allWorn.push(new Item("hyelingArmour", false)); //41
    allWorn.push(new Item("wizardGown", false)); //42
    allWorn.push(new Item("hoffalgreFurCloak", false)); //43
    allWorn.push(new Item("rabbitFootNecklace", false)); //44
    allWorn.push(new Item("skolLeatherBoots", false)); //45
    allWorn.push(new Item("skolLeatherGloves", false)); //46
    allWorn.push(new Item("skolLeatherArmour", false)); //47
    allWorn.push(new Item("boulchomLeatherArmour", false)); //48
    allWorn.push(new Item("boulchomLeatherGloves", false)); //49
    allWorn.push(new Item("boulchomLeatherBoots", false)); //50

    scenicList = [];

//this is the list of projectiles fired by the player.
    playerProjectiles = [];

//this is the list of projectiles fired by all AI UNITS
    unitProjectiles = [];

//this is the list for all magic interactive animations.
    magicList = [];

//this is the list of active tertiary spells affecting the player.
    bindedWillList = [];

//this is the list of the current shops wares.
    shopID = "none";
    shopInventory = [];
    shopkeeper = "none";
    initialShopItemSet = false;
    initialBankItemSet = false;

//CRAFTING ITEM-LISTS
//Smithing (Items crafted using an anvil)
    smithing = [];
    smithing.push(new Item("hammer", false));
    smithing.push(new Item("mace", false));
    smithing.push(new Item("longsword", false));
    smithing.push(new Item("kellishSawClub", false));
    smithing.push(new Item("freydicWarAxe", false));
    smithing.push(new Item("aldrekiiBardiche", false));
    smithing.push(new Item("longbow", false));
    smithing.push(new Item("arrow", false));
    smithing.push(new Item("lifeLeachArrow", false));
    smithing.push(new Item("freezingArrow", false));
    smithing.push(new Item("fireArrow", false));
    smithing.push(new Item("blueBlade", false));
    smithing.push(new Item("nirineseSabre", false));
    smithing.push(new Item("freydicSpear", false));
    smithing.push(new Item("vardanianAxeDual", false));
    smithing.push(new Item("vardanianAxe", false));
    smithing.push(new Item("flail", false));
    smithing.push(new Item("aldrekiiBlade", false));
    smithing.push(new Item("aldrekiiClaws", false));
    smithing.push(new Item("pickaxe", false));
    smithing.push(new Item("freydicSword", false));
    smithing.push(new Item("aldrekiiArrow", false));
    smithing.push(new Item("freydicGreatSword", false));
    smithing.push(new Item("thenganSwordAndShield", false));
    smithing.push(new Item("katana", false));
    smithing.push(new Item("gulfreyShellArmour", false));
    smithing.push(new Item("anterShellArmour", false));
    smithing.push(new Item("blackChainArmour", false));
    smithing.push(new Item("chainArmour", false));
    smithing.push(new Item("freydicRoyalOutfit", false));
    smithing.push(new Item("vardanianCleaver", false));
    smithing.push(new Item("vardanianBattleAxe", false));
    smithing.push(new Item("crossbow", false));
    smithing.push(new Item("steelBolt", false));
    smithing.push(new Item("steelArrow", false));
    smithing.push(new Item("timberAxe", false));
    smithing.push(new Item("vardanianHeavyCleaver", false));
    smithing.push(new Item("warHammer", false));
    smithing.push(new Item("kellishClaymore", false));
    smithing.push(new Item("bucket", false));
    smithing.push(new Item("jvostranPlateArmour", false));
    smithing.push(new Item("oilLampEmpty", false));
    smithing.push(new Item("oilLanternEmpty", false));
    smithing.push(new Item("longSpikedMorningStar", false));
    smithing.push(new Item("cutlass", false));
    smithing.push(new Item("musket", false));
    smithing.push(new Item("blunderbuss", false));
    smithing.push(new Item("bullet", false));
    smithing.push(new Item("kellishSword", false));
    smithing.push(new Item("smashStick", false));
    smithing.push(new Item("burningSmashStick", false));
    smithing.push(new Item("lightningCorseque", false));
    smithing.push(new Item("thenganPlateArmour", false));
    smithing.push(new Item("swampWalkerArmour", false));
    smithing.push(new Item("vardanianClub", false));
    smithing.push(new Item("hyelingCleaver", false));
    smithing.push(new Item("hyelingArmour", false));
    smithing.push(new Item("staff", false));
    smithing.push(new Item("thenganDagger", false));
    smithing.push(new Item("thenganWarhammer", false));

//Foods (Items cooked at either a stove, an oven, or a campfire)
    foods = [];
    foods.push(new Item("rabbitMeat", false));
    foods.push(new Item("bowlOfBoiledHarst", false));
    foods.push(new Item("bowlOfCreamyHarst", false));
    foods.push(new Item("bowlOfSanthPorridge", false));
    foods.push(new Item("cookedPotato", false));
    foods.push(new Item("etyrMeat", false));
    foods.push(new Item("olkrinMeat", false));
    foods.push(new Item("trollMeat", false));
    foods.push(new Item("walrusMeat", false));
    foods.push(new Item("frichMeat", false));
    foods.push(new Item("mountainFrichMeat", false));
    foods.push(new Item("youngNaapridMeat", false));
    foods.push(new Item("naapridMeat", false));
    foods.push(new Item("berulnMeat", false));
    foods.push(new Item("greyWolfMeat", false));
    foods.push(new Item("winterWolfMeat", false));
    foods.push(new Item("wolfLiver", false));
    foods.push(new Item("mudflyMeat", false));
    foods.push(new Item("gulfreyMeat", false));
    foods.push(new Item("torperMeat", false));
    foods.push(new Item("varnMeat", false));
    foods.push(new Item("bearMeat", false));
    foods.push(new Item("bearTongue", false));
    foods.push(new Item("trollsBlood", false));
    foods.push(new Item("gribMeat", false));
    foods.push(new Item("boiledGlinMushrooms", false));
    foods.push(new Item("viperMeat", false));
    foods.push(new Item("kellishClayPotOfMushroomStew", false));
    foods.push(new Item("harstBread", false));
    foods.push(new Item("pumpkinBread", false));
    foods.push(new Item("santhBread", false));
    foods.push(new Item("grushMeat", false));
    foods.push(new Item("cookedMofuEgg", false));
    foods.push(new Item("mofflingMeat", false));
    foods.push(new Item("akerMoffling", false));
    foods.push(new Item("pluttMoffling", false));
    foods.push(new Item("mofuMeat", false));
    foods.push(new Item("largeMofuMeat", false));
    foods.push(new Item("jarOfOil", false));
    foods.push(new Item("roastedPumpkin", false));
    foods.push(new Item("bucketOfHotPluttBerryCider", false));
    foods.push(new Item("bucketOfTechiTea", false));
    foods.push(new Item("avrakMeat", false));
    foods.push(new Item("evrakMeat", false));
    foods.push(new Item("golgemoffMeat", false));
    foods.push(new Item("ardilMeat", false));
    foods.push(new Item("boiledPalntRoot", false));
    foods.push(new Item("tilkMeat", false));
    foods.push(new Item("utMeat", false));
    foods.push(new Item("tunskMeat", false));
    foods.push(new Item("roastedWegRoot", false));
    foods.push(new Item("waantiMeat", false));
    foods.push(new Item("hyelingMeat", false));
    foods.push(new Item("nogMeat", false));
    foods.push(new Item("boulchomMeat", false));
    foods.push(new Item("thuegTripe", false));
    foods.push(new Item("hoffalgreMeat", false));
    foods.push(new Item("skolMeat", false));

//Tailoring (Items crafted at a weaving, sewing, dying, etc. tailor's work bench thing)
    tailoring = [];
    tailoring.push(new Item("walrusLeatherArmour", false));
    tailoring.push(new Item("freydicRoyalDress", false));
    tailoring.push(new Item("winterWolfDress", false));
    tailoring.push(new Item("naapridLeatherArmour", false));
    tailoring.push(new Item("winterWolfOutfit", false));
    tailoring.push(new Item("winterWolfClothing", false));
    tailoring.push(new Item("blackBearFurClothing", false));
    tailoring.push(new Item("blackBearLeatherArmour", false));
    tailoring.push(new Item("frichFurClothing", false));
    tailoring.push(new Item("frichFurMittens", false));
    tailoring.push(new Item("varnFurClothing", false));
    tailoring.push(new Item("varnFurCloak", false));
    tailoring.push(new Item("varnFurDress", false));
    tailoring.push(new Item("walrusLeatherWaterskin", false));
    tailoring.push(new Item("grushFurClothing", false));
    tailoring.push(new Item("avrakLeatherArmour", false));
    tailoring.push(new Item("evrakLeatherArmour", false));
    tailoring.push(new Item("tent", false));
    tailoring.push(new Item("mufFiber", false));
    tailoring.push(new Item("mufCloth", false));
    tailoring.push(new Item("cloth", false));
    tailoring.push(new Item("naapridFiber", false));
    tailoring.push(new Item("varnFiber", false));
    tailoring.push(new Item("avrakFiber", false));
    tailoring.push(new Item("evrakFiber", false));
    tailoring.push(new Item("mofuTribalWear", false));
    tailoring.push(new Item("mofuRunnerOutfit", false));
    tailoring.push(new Item("ardilFurClothing", false));
    tailoring.push(new Item("ardilFurSkirt", false));
    tailoring.push(new Item("ardilFurGloves", false));
    tailoring.push(new Item("fineFreydicOutfitF", false));
    tailoring.push(new Item("fineFreydicOutfitM", false));
    tailoring.push(new Item("waantiFurOutfit", false));
    tailoring.push(new Item("hoffalgreFurCloak", false));
    tailoring.push(new Item("skolLeatherArmour", false));
    tailoring.push(new Item("skolLeatherBoots", false));
    tailoring.push(new Item("skolLeatherGloves", false));
    tailoring.push(new Item("boulchomLeatherArmour", false));
    tailoring.push(new Item("boulchomLeatherBoots", false));
    tailoring.push(new Item("boulchomLeatherGloves", false));

//Jewelry (Items crafted at a jewler's station, rings, necklaces, cutting gems, glassblowing etc.)
    jewelry = [];
    jewelry.push(new Item("glassJar", false));
    jewelry.push(new Item("pintGlass", false));
    jewelry.push(new Item("glassBottle", false));
    jewelry.push(new Item("potionGlass", false));
    jewelry.push(new Item("fireStarter", false));
    jewelry.push(new Item("berulnToothNecklace", false));
    jewelry.push(new Item("mofuFive", false));
    jewelry.push(new Item("rabbitFootNecklace", false));

//Alchemy (Potions and mixtures crafted at an alchemy lab station)
    alchemy = [];
    alchemy.push(new Item("cleansingPotion", false));
    alchemy.push(new Item("healingSalve", false));
    alchemy.push(new Item("hydroraSalve", false));
    alchemy.push(new Item("rawTrollsBlood", false));
    alchemy.push(new Item("energyPotionI", false));
    alchemy.push(new Item("speedPotionI", false));
    alchemy.push(new Item("energilPotionI", false));
    alchemy.push(new Item("energilPotionII", false));
    alchemy.push(new Item("mindPotionI", false));
    alchemy.push(new Item("fermentedNarthwarpMouth", false));
    alchemy.push(new Item("fermentedViperVenomGland", false));
    alchemy.push(new Item("driedCyrinthilimMushroom", false));
    alchemy.push(new Item("agedHoffalgreTendrils", false));
    alchemy.push(new Item("fermentedMofuEgg", false));
    alchemy.push(new Item("groundOgard", false));
    alchemy.push(new Item("ogardPerfume", false));
    alchemy.push(new Item("wyrExtract", false));
    alchemy.push(new Item("tenicPaste", false));
    alchemy.push(new Item("utExtract", false));
    alchemy.push(new Item("fermentedUtTentacle", false));
    alchemy.push(new Item("mudflyMold", false));
    alchemy.push(new Item("haeflowerPollen", false));

//Brewing (alcohols, liquid fermentation, etc.)
    brewing = [];
    brewing.push(new Item("harstAle", false));
    brewing.push(new Item("glassBottleOfPluttWine", false));

//Forge
    forge = [];
    forge.push(new Item("iron", false));
    forge.push(new Item("steel", false));
    forge.push(new Item("twiceForgedSteel", false));
    forge.push(new Item("thriceForgedSteel", false));
    forge.push(new Item("silver", false));
    forge.push(new Item("gold", false));
    forge.push(new Item("pureJvostranOre", false));
    forge.push(new Item("jvostran", false));
    forge.push(new Item("kellishClayPot", false));
    forge.push(new Item("clayBowl", false));

//Handcrafted (things the player can do without a work station of some kind)
    handcrafted = [];
    handcrafted.push(new Item("emptyBagHarst", false));
    handcrafted.push(new Item("bagOfHarstFlour", false));
    handcrafted.push(new Item("emptyBagSanth", false));
    handcrafted.push(new Item("bagOfSanthFlour", false));
    handcrafted.push(new Item("suuliMelonSlice", false));
    handcrafted.push(new Item("naapridButter", false));
    handcrafted.push(new Item("butteredHarstBread", false));
    handcrafted.push(new Item("butteredPumpkinBread", false));
    handcrafted.push(new Item("butteredSanthBread", false));
    handcrafted.push(new Item("harstFlour", false));
    handcrafted.push(new Item("harstDough", false));
    handcrafted.push(new Item("pumpkinDough", false));
    handcrafted.push(new Item("santhFlour", false));
    handcrafted.push(new Item("kellishSanthDough", false));
    handcrafted.push(new Item("shehidToxinArrow", false));
    handcrafted.push(new Item("oiledArrow", false));
    handcrafted.push(new Item("oilLantern", false));
    handcrafted.push(new Item("oilLamp", false));
    handcrafted.push(new Item("candle", false));
    handcrafted.push(new Item("jackOLanternEmpty", false));
    handcrafted.push(new Item("jackOLantern", false));
    handcrafted.push(new Item("waterPintGlass", false));
    handcrafted.push(new Item("bucketOfPluttJuice", false));
    handcrafted.push(new Item("pluttJuicePintGlass", false));
    handcrafted.push(new Item("pluttCiderPintGlass", false));
    handcrafted.push(new Item("pluttWine", false));
    handcrafted.push(new Item("roastedWegRootChunks", false));
    handcrafted.push(new Item("driedPluttBerries", false));
    handcrafted.push(new Item("driedTechiLeaf", false));
    handcrafted.push(new Item("techiTea", false));
    handcrafted.push(new Item("dualVardanianBattleAxe", false));
    handcrafted.push(new Item("dyedMufCloth", false));
    handcrafted.push(new Item("culprisBandage", false));
    handcrafted.push(new Item("bowlOfMushroomStew", false));
    handcrafted.push(new Item("staff", false));

    //Activate Important Game Functions Here:
    itemPlacer();

    //gameState = "horde"; // this changes the gamemode so that horde will have priority.
    //playHorde(); //This starts the card game horde.

    requestAnimationFrame(mainMenuLoop, CCC); //This starts the game as normal.

    //gameState = "active"; //This is for testing the game (if turned on it will let you bypass the main menu)
    //requestAnimationFrame(gameloopOfDestiny, CCC); //This is for testing the game (if turned on it will let you bypass the main menu)
}
