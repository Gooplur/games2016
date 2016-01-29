/**
 * Created by skyeguy on 9/3/15.
 */
var cells = [];
var ctx = [];
var Ic;
var Ictx;
var oCB = 0;
var q = "q";
var TTT = {};
TTT.turn = "Player";
TTT.randomDichotomy = function()
{
    return Math.round(Math.random());
};
// the board itself, and lists of the parts in the board by ctx# for easy access by the AI
TTT.board = [q, q, q, q, q, q, q, q, q];
TTT.corners = [0, 2, 6, 8];
//TODO after the AI operates its (hugs and smacks) have its favorite position be the opposite corner of the player -
//TODO - if the player picks a corner.
TTT.oppositeCorners = [[0, 8], [2, 6]];
TTT.center = [4];
TTT.dregs = [1, 5, 7, 3];
TTT.threes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
TTT.beginGame = function()
{
    //determine who's going to make the first move.

    if (TTT.randomDichotomy())
    {
        TTT.turn = "Player";
        Ictx.clearRect(0, 0, Ic.width, Ic.height);
        Ictx.font="30px Impact, Sans-serif";
        Ictx.fillText("Player's Turn", 34, 50);

    }
    else
    {
        TTT.turn = "AI";
        Ictx.clearRect(0, 0, Ic.width, Ic.height);
        Ictx.font="30px Impact, Sans-serif";
        Ictx.fillText("AIs Turn", 62, 50);
    }
};

function bestMove()
{
    // if the AI has two in a row and the third spot is not taken then the AI will move there,
    // and if you have two in a row and are about to win the AI will block you.

    for (var p = 0; p < 8; p++)
    {
        var hits = [];
        var smacks = 0;
        var hugs = 0;
        var opens = 0;

        for (var l = 0; l < 3; l++)
        {
            hits.push(TTT.threes[p][l]);
        }
        for (var f = 0; f < 3; f++)
        {
            if (TTT.board[hits[f]] == "X")
            {
                smacks += 1;
            }
            else if (TTT.board[hits[f]] == "O")
            {
                hugs += 1;
            }
            else
            {
                opens += 1;
            }
        }
        if (hugs == 2)
        {
            for (var k = 0; k < hits.length; k++)
            {
                if (TTT.board[hits[k]] == q)
                {
                    return hits[k];
                }
            }
        }
        if (smacks == 2)
        {
            for (var h = 0; h < hits.length; h++)
            {
                if (TTT.board[hits[h]] == q)
                {
                    return hits[h];
                }
            }
        }
    }
    // move to the opposite corner of the enemy if they they take a corner (only happens once)
    if (oCB <= 2 && TTT.board[4] == q)
    {
        if (TTT.randomDichotomy() == 0)
        {
            for (var i = 0; i < TTT.oppositeCorners.length; i++)
            {
                for (var l = 0; l < TTT.oppositeCorners[i].length; l++)
                {
                    if (TTT.board[TTT.oppositeCorners[i][l]] == "X")
                    {
                        for (var j = 0; j < TTT.oppositeCorners[i].length; j++)
                        {
                            if (TTT.board[TTT.oppositeCorners[i][j]] == q)
                            {
                                return TTT.oppositeCorners[i][j];
                            }
                        }
                    }
                }
            }
            oCB += 1;
        }
    }
    // move to the center if it is available
    if (TTT.board[TTT.center[0]] == q)
    {
        return TTT.center[0];
    }
    // move clockwise to the nearest corner if it is available/ until one is available
    for (var i = 0; i < TTT.corners.length; i++)
    {
        if (TTT.board[TTT.corners[i]] == q)
        {
            return TTT.corners[i];
        }
    }
    // move to the nearest side spot if it is available
    for (var j = 0; j < TTT.dregs.length; j++)
    {
        if (TTT.board[TTT.dregs[j]] == q)
        {
            return TTT.dregs[j];
        }
    }


}

function restart()
{
    for (var i = 0; i < TTT.board.length; i++)
    {
        TTT.board[i] = q;
        ctx[i].clearRect(0, 0, 72, 72);
    }
    oCB = 0;
    TTT.beginGame();
    endTurn();
}

function winOrLose()
{
    var xAmount;
    var oAmount;
    var qAmount;
    qAmount = 0;
    for (var l = 0; l < TTT.threes.length; l++)
    {
        xAmount = 0;
        oAmount = 0;

        for (var h = 0; h < TTT.threes[l].length; h++)
        {
            if (TTT.board[TTT.threes[l][h]] == "X")
            {
                xAmount += 1;
            }
            if (TTT.board[TTT.threes[l][h]] == "O")
            {
                oAmount += 1;
            }
            if (TTT.board[TTT.threes[l][h]] == "q")
            {
                qAmount += 1;
            }
        }
        if (oAmount == 3)
        {
            alert("The AI was victorious");
            restart();
            return false;
        }
        else if (xAmount == 3)
        {
            alert("You have beat the AI, congratulations!");
            restart();
            return false;
        }
    }
    if (qAmount == 0)
    {
        alert("Congratulations, it's a tie!");
        restart();
        return false;
    }
    else
    {
        return true;
    }
}

function endTurn()
{
    // pick a spot based on the best possible move and place an O
    if (TTT.turn == "AI")
    {

        var bMove = bestMove();
        var x = ctx[bMove];
        x.beginPath();
        x.lineWidth= 3;
        x.arc(36, 36, 26, 0, 2 * Math.PI);
        x.stroke();
        TTT.board[bMove] = "O";
        TTT.turn = "Player";
        winOrLose();
    }
}



function setup()
{
    Ic = document.getElementById("information");
    Ictx = Ic.getContext("2d");

    for (var n=0; n < 9; n++)
    {
        cells[n] = document.getElementById("tic" + (n+1));
        ctx[n] = cells[n].getContext("2d");
        TTT.beginGame();
    }
    if (TTT.turn == "AI")
    {
        endTurn();
    }
}

function drawShape(n)
{
    if (TTT.board[n] == q)
    {
        var x = ctx[n];
        if (TTT.turn == "Player")
        {
            TTT.board[n] = "X";
            x.beginPath();
            x.moveTo(10, 10);
            x.lineWidth= 3;
            x.lineTo(62, 62);
            x.stroke();
            x.moveTo(10, 62);
            x.lineTo(62, 10);
            x.stroke();
            TTT.turn = "AI";
            if (winOrLose() == true)
            {
                endTurn();
            }
        }
    }
}



