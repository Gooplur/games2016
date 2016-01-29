/**
 * Created by skyeguy on 9/11/15.
 */
function startGameLoop()
{
    var c = document.getElementById("court");
    var ctx = c.getContext("2d");
    var h = document.getElementById("scoreboard");
    var puckX = 15;
    var puckY = 50;
    var setPXV = 6;
    var setPYV = 6;
    var puckYV = setPYV;
    var puckXV = setPXV;
    var playerScore = 0;
    var isGameActive = true;
    var aiScore = 0;
    var ePaddleY = 0;
    var ePaddleYV = 9;
    var ePaddleDestinationY = 0;
    var eIsMoving = false;
    var pPaddleY = 0;
    var pPaddleYV = 6;
    var pPaddleDestinationY = 0;
    var pIsMoving = false;
    var tn = false;
    var dt = false;
    var tp = false;

    function gameLoop(time)
    {
        newTime(time);
        // 16.75 frameRate
        ctx.clearRect(0, 0, 1200, 600);
        drawBackground();
        serve();
        paddleSensing();
        bouncySides();
        puckMovement();
        drawEPaddle();
        drawPPaddle();
        playerBrain();
        aiBrain();
        window.requestAnimationFrame(gameLoop, c)
    }
    function aiS()
    {
       puckServe("ai");
    }
    function pS()
    {
        puckServe("player");
    }
    function puckServe(person)
    {
        if (person == "ai")
        {
            puckX = 1155;
            puckY = (ePaddleY + 40);
            puckYV = 0;
            puckXV = (-1 * setPXV);
        }
        else if (person == "player")
        {
            puckX = 40;
            puckY = (pPaddleY + 40);
            puckYV = 0;
            puckXV = setPXV;
        }
        isGameActive = true;
    }

    function drawPuck(x, y)
    {
        ctx.beginPath();
        ctx.lineWidth= 1;
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fillStyle="#fFD570";
        ctx.fill();
    }

    function drawEPaddle()
    {
        ctx.beginPath()
        ctx.lineWidth= 1;
        ctx.rect(1190, ePaddleY, 10, 80);
        ctx.fillStyle=" #f0c070";
        ctx.fill();
    }

    function drawPPaddle()
    {
        ctx.beginPath()
        ctx.lineWidth= 1;
        ctx.rect(0, pPaddleY, 10, 80);
        ctx.fillStyle=" #f0c070";
        ctx.fill();
    }

    function followMouse()
    {
        if (pPaddleY < pPaddleDestinationY)
        {
            pPaddleY += pPaddleYV * (dt /16.75);
        }
        else if (pPaddleY > pPaddleDestinationY)
        {
            pPaddleY -= pPaddleYV * (dt /16.75);
        }
    }

    function mouseControl(event)
    {
        if (typeof(event.offsetY) == "undefined")
        {
            pPaddleDestinationY = (event.clientY - c.offsetTop) - 40;
        }
        else
        {
            pPaddleDestinationY = (event.offsetY - 40);
        }
    }

    function isMoving()
    {
        if (pPaddleY <= (pPaddleDestinationY + 4) && pPaddleY >= (pPaddleDestinationY - 4))
        {
            pIsMoving = false;
        }
        else if (pPaddleY > (pPaddleDestinationY + 4))
        {
            pIsMoving = "up";
        }
        else if (pPaddleY < (pPaddleDestinationY - 4))
        {
            pIsMoving = "down";
        }
    }

    function serve()
    {
        if (puckX >= 1222 && isGameActive == true)
        {
            isGameActive = false;
            playerScore += 1;
            adjustScore()
            setTimeout(aiS, 3500);
        }
        else if (puckX <= -22 && isGameActive == true)
        {
            isGameActive = false;
            aiScore += 1;
            adjustScore()
            setTimeout(pS, 3500);
        }
    }

    function aiBrain()
    {
        ePaddleDestinationY = puckY;

        if (ePaddleDestinationY < (ePaddleY + 40))
        {
            ePaddleY -= ePaddleYV * (dt /16.75);
        }
        else if (ePaddleDestinationY > ePaddleY)
        {
            ePaddleY += ePaddleYV * (dt /16.75);
        }
    }

    function paddleSensing()
    {
        // if the puck hits the players paddle while it is moving then it will gain or lose Y velocity based on paddle Y velocity
        // and if you hit the puck with either corner the speed will reduce by Y velocity will rise or fall sharply depending on which one it hit
        if (puckY >= (pPaddleY + 5) && puckY <= (pPaddleY + 75) && puckX <= 25)
        {
            puckXV = setPXV;
            isMoving();
            if (pIsMoving == "up")
            {
                puckYV -= pPaddleYV / 2;
            }
            else if (pIsMoving == "down")
            {
                puckYV += pPaddleYV / 2;
            }
        }
        else if (puckY >= (pPaddleY) && puckY <= (pPaddleY + 5) && puckX <= 25)
        {
            isMoving();
            if (pIsMoving == "up")
            {
                puckYV -= pPaddleYV + (2 *(pPaddleYV / 10));
                puckXV = (setPXV / 2);
            }
            else if (pIsMoving == "down")
            {
                puckYV += pPaddleYV / 2;
                puckXV = setPXV;
            }
        }
        else if (puckY >= (pPaddleY + 75) && puckY <= (pPaddleY + 80) && puckX <= 25)
        {
            isMoving();
            if (pIsMoving == "up")
            {
                puckYV -= pPaddleYV / 2;
                puckXV = setPXV;
            }
            else if (pIsMoving == "down")
            {
                puckYV += pPaddleYV - (2 *(pPaddleYV / 10));
                puckXV = (setPXV / 2);
            }
        }

        // if the puck hits the AIs paddle while it is moving then it will gain or lose Y velocity based on paddle Y velocity
        // and if you hit the puck with either corner the speed will reduce by Y velocity will rise or fall sharply depending on which one it hit
        if (puckY >= (ePaddleY + 5) && puckY <= (ePaddleY + 75) && puckX >= 1175)
        {
            puckXV = (-1 * setPXV);
            isMoving();
            if (eIsMoving == "up")
            {
                puckYV -= ePaddleYV / 2;
            }
            else if (eIsMoving == "down")
            {
                puckYV += ePaddleYV / 2;
            }
        }
        else if (puckY >= (ePaddleY) && puckY <= (ePaddleY + 5) && puckX >= 1175)
        {
            isMoving();
            if (eIsMoving == "up")
            {
                puckYV -= ePaddleYV + (2 *(ePaddleYV / 10));
                puckXV = ( (-1 * setPXV) / 2);
            }
            else if (eIsMoving == "down")
            {
                puckYV += ePaddleYV / 2;
                puckXV = (-1 * setPXV);
            }
        }
        else if (puckY >= (ePaddleY + 75) && puckY <= (ePaddleY + 80) && puckX >= 1175)
        {
            isMoving();
            if (eIsMoving == "up")
            {
                puckYV -= ePaddleYV / 2;
                puckXV = (-1 * setPXV);
            }
            else if (eIsMoving == "down")
            {
                puckYV += ePaddleYV - (2 *(ePaddleYV / 10));
                puckXV = ( (-1 * setPXV) / 2);
            }
        }
    }

    function bouncySides()
    {
        // if on sides, bounce
        if (puckY >= 600)
        {
            puckYV = (-1 * puckYV);
        }
        else if (puckY <= 0)
        {
            puckYV = (-1 * puckYV);
        }
    }

    function puckMovement()
    {
        // move the puck based on x and y velocities if the game is active
        if (isGameActive == true)
        {
            puckX += puckXV * (dt /16.75);
            puckY += puckYV * (dt /16.75);
            drawPuck(puckX, puckY);
        }
    }

    function playerBrain()
    {
        // move the players paddle Y with the mouses Y movements
        c.addEventListener("mousemove", mouseControl);
        followMouse();
    }

    function adjustScore()
    {
        h.innerHTML="Player Score: " + playerScore + "    ::::||||::::    " + "AI Score: " + aiScore
    }

    function pongEasy()
    {
        pPaddleYV = 6;
        setPXV = 4;
        ePaddleYV = 2;
        aiScore = 0;
        playerScore = 0;
        adjustScore()
    }

    function pongMedium()
    {
        pPaddleYV = 7;
        setPXV = 5;
        ePaddleYV = 6;
        aiScore = 0;
        playerScore = 0;
        adjustScore()
    }

    function pongHard()
    {
        pPaddleYV = 6;
        setPXV = 6;
        ePaddleYV = 11;
        aiScore = 0;
        playerScore = 0;
        adjustScore()
    }

    function pongImpossible()
    {
        pPaddleYV = 12;
        setPXV = 15;
        ePaddleYV = 30;
        aiScore = 0;
        playerScore = 0;
        adjustScore()
    }
   function drawBackground()
   {
       ctx.beginPath()
       ctx.rect(0, 0, 1200, 600)
       ctx.fillStyle = "lightBlue";
       ctx.fill()

       ctx.beginPath();
       ctx.moveTo(600, 0);
       ctx.lineWidth= 3;
       ctx.lineTo(600, 600);
       ctx.stroke();
   }

    function newTime(time)
    {
        // time is requestAnimationFrame's built in version of date.getTime()...
        // tp = previous time amount      tn= current time amount      dt= total difference in time (for this function)
        if (!tp)
        {
            tp = time;
        }
        tn = time;
        dt = tn - tp;
        tp = time;
    }

    window.pongEasy = pongEasy;
    window.pongMedium = pongMedium;
    window.pongHard = pongHard;
    window.pongImpossible = pongImpossible;

    window.requestAnimationFrame(gameLoop, c);
}
