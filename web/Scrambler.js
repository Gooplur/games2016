/**
 * Created by skyeguy on 9/10/15.
 */
function runGame()
{
    var input;
    var knownInputs = [];
    var platform = [];
    var alreadyUsed = [];
    var save = [];
    var oRN;
    var available = 0;

    function randomInputNumber()
    {
        var ret = Math.floor((input.length) * Math.random());
        return ret;
    }

    function repeatUntilDone()
    {
        available = alreadyUsed.length;
        oRN = randomInputNumber();
        for (l = 0; l < alreadyUsed.length; l++)
        {
            if (oRN == alreadyUsed[l])
            {
                available += 1;
            }
        }
        if (available != alreadyUsed.length)
        {
            repeatUntilDone();
        }
    }
    function scramble()
    {
        save = [];
        platform = [];
        alreadyUsed = [];
        for (i = 0; i < input.length; i++)
        {
            platform[i] = input[i];
        }
        for (i = 0; i < input.length; i++)
        {
            available = alreadyUsed.length;
            oRN = randomInputNumber();
            for (l = 0; l < alreadyUsed.length; l++)
            {
                if (oRN == alreadyUsed[l])
                {
                    available += 1;
                }
            }
            if (available != alreadyUsed.length)
            {
                repeatUntilDone();
            }
            if (available == alreadyUsed.length)
            {
                alreadyUsed.push(oRN);
                available = alreadyUsed.length;
                save.push(platform[oRN]);
                platform[oRN] = input[i];
            }
        }
    }

    function letterAmountsInWord(word)
    {
        var letterAmountOfA = 0;
        var letterAmountOfB = 0;
        var letterAmountOfC = 0;
        var letterAmountOfD = 0;
        var letterAmountOfE = 0;
        var letterAmountOfF = 0;
        var letterAmountOfG = 0;
        var letterAmountOfH = 0;
        var letterAmountOfI = 0;
        var letterAmountOfJ = 0;
        var letterAmountOfK = 0;
        var letterAmountOfL = 0;
        var letterAmountOfM = 0;
        var letterAmountOfN = 0;
        var letterAmountOfO = 0;
        var letterAmountOfP = 0;
        var letterAmountOfQ = 0;
        var letterAmountOfR = 0;
        var letterAmountOfS = 0;
        var letterAmountOfT = 0;
        var letterAmountOfU = 0;
        var letterAmountOfV = 0;
        var letterAmountOfW = 0;
        var letterAmountOfX = 0;
        var letterAmountOfY = 0;
        var letterAmountOfZ = 0;

        var fidel = [];
        for (var i = 0; i < word.length; i++)
        {
            if (word[i] == "a")
            {
                letterAmountOfA += 1;
            }
            if (word[i] == "b")
            {
                letterAmountOfB += 1;
            }
            if (word[i] == "c" )
            {
                letterAmountOfC += 1;
            }
            if (word[i] == "d" )
            {
                letterAmountOfD += 1;
            }
            if (word[i] == "e" )
            {
                letterAmountOfE += 1;
            }
            if (word[i] == "f" )
            {
                letterAmountOfF += 1;
            }
            if (word[i] == "g" )
            {
                letterAmountOfG += 1;
            }
            if (word[i] == "h" )
            {
                letterAmountOfH += 1;
            }
            if (word[i] == "i" )
            {
                letterAmountOfI += 1;
            }
            if (word[i] == "j" )
            {
                letterAmountOfJ += 1;
            }
            if (word[i] == "k" )
            {
                letterAmountOfK += 1;
            }
            if (word[i] == "l" )
            {
                letterAmountOfL += 1;
            }
            if (word[i] == "m" )
            {
                letterAmountOfM += 1;
            }
            if (word[i] == "n" )
            {
                letterAmountOfN += 1;
            }
            if (word[i] == "o" )
            {
                letterAmountOfO += 1;
            }
            if (word[i] == "p" )
            {
                letterAmountOfP += 1;
            }
            if (word[i] == "q" )
            {
                letterAmountOfQ += 1;
            }
            if (word[i] == "r" )
            {
                letterAmountOfR += 1;
            }
            if (word[i] == "s" )
            {
                letterAmountOfS += 1;
            }
            if (word[i] == "t" )
            {
                letterAmountOfT += 1;
            }
            if (word[i] == "u" )
            {
                letterAmountOfU += 1;
            }
            if (word[i] == "v" )
            {
                letterAmountOfV += 1;
            }
            if (word[i] == "w" )
            {
                letterAmountOfW += 1;
            }
            if (word[i] == "x" )
            {
                letterAmountOfX += 1;
            }
            if (word[i] == "y" )
            {
                letterAmountOfY += 1;
            }
            if (word[i] == "z" )
            {
                letterAmountOfZ += 1;
            }
        }
        fidel.push(letterAmountOfA);
        fidel.push(letterAmountOfB);
        fidel.push(letterAmountOfC);
        fidel.push(letterAmountOfD);
        fidel.push(letterAmountOfE);
        fidel.push(letterAmountOfF);
        fidel.push(letterAmountOfG);
        fidel.push(letterAmountOfH);
        fidel.push(letterAmountOfI);
        fidel.push(letterAmountOfJ);
        fidel.push(letterAmountOfK);
        fidel.push(letterAmountOfL);
        fidel.push(letterAmountOfM);
        fidel.push(letterAmountOfN);
        fidel.push(letterAmountOfO);
        fidel.push(letterAmountOfP);
        fidel.push(letterAmountOfQ);
        fidel.push(letterAmountOfR);
        fidel.push(letterAmountOfS);
        fidel.push(letterAmountOfT);
        fidel.push(letterAmountOfU);
        fidel.push(letterAmountOfV);
        fidel.push(letterAmountOfW);
        fidel.push(letterAmountOfX);
        fidel.push(letterAmountOfY);
        fidel.push(letterAmountOfZ);
        return fidel.join();
    }

    function letterTypesInWord(word)
    {
        var permission = true;
        var letterList = [];
        for (var i = 0; i < word.length; i++)
        {
            for (var l = 0; l < word.length; l++)
            {
                if (letterList[l] == word[i])
                {
                    permission = false;
                }
            }
            if (permission == true)
            {
                letterList.push(word[i]);
            }
            else
            {
                permission = true;
            }
        }
        return letterList.length;
    }

    function unscramble()
    {
        var siono;
        var plat = platform.toString();
        var letAmounts = letterAmountsInWord(plat);
        for (i = 0; i < knownInputs.length; i++)
        {
            if (letterAmountsInWord(knownInputs[i]) == letAmounts)
            {
                siono = confirm("Is your descrambled word " + knownInputs[i] + "?");
                if (siono == true)
                {
                    var reRunGame = confirm("Would you like to play again?");
                    if (reRunGame == true)
                    {
                        game();
                    }
                    else
                    {
                        alert("Play again soon...");
                        break;
                    }
                }
            }
        }
    }

    function game()
    {
        input = prompt("Insert your input").toLowerCase();
        knownInputs.push(input);
        console.log("There are " + letterTypesInWord(input) + " types of letters in this input.");
        console.log("letter amounts in the input are: " + letterAmountsInWord(input));
        scramble();
        console.log("The scrambled word is " + platform + " ... from the original input: " + input + ".")
        alert("Here is your scrambled input: " + platform);
        alert("Now the system will try to unscramble it by comparing this result to the inputs in its database.")
        unscramble()
    }
    game();
}