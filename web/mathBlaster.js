/**
 * Created by skyeguy on 10/26/15.
 */

//TODO movement is majorly glitched, perhaps public variables can not be changed from inside a function, look into it!!!
var zapSound = new Audio("sounds/zapper.mp3");
window.zapSound = zapSound;
var primeSwitchSound = new Audio("sounds/fForward.mp3");
window.primeSwitchSound = primeSwitchSound;
var factored = new Audio("sounds/smallAlert.mp3");
window.factored = factored;


function commence()
{
    var cvas = document.getElementById("mathface");
    var ctxt = cvas.getContext("2d");

    var Kvas = document.getElementById("mathtail");
    var Ktxt = Kvas.getContext("2d");

    var timeNow = "start";
    var timeChange = null;
    var timePrevious = null;

    //sensing
    var mouseX = null;
    var mouseY = null;
    var wKey = 0;
    var sKey = 0;
    var aKey = 0;
    var dKey = 0;
    var spaceKey = 0;
    var shiftKey = 0;
    var clicker = 0;

    //extra vars
    var checkFire = 0;
    var spawnSafe = 0;
    var factorRegen = 0;
    var oneSwitchAtATime = 0;

    // fun stuff
    var mathScore = 100;

    function mathLoop(time)
    {
        window.addEventListener("keydown", keysDown);
        window.addEventListener("keyup", keysUp);
        window.addEventListener("mousemove", mousePosition);
        window.addEventListener("mousedown", mouseDown);
        window.addEventListener("mouseup", mouseUp);
        timeRegulation(time);

        ctxt.clearRect(0, 0, 2500, 2500);
        ctxt.beginPath();
        ctxt.fillStyle="cornsilk";
        ctxt.fillRect(0, 0, 800, 800);

        Ktxt.beginPath();
        Ktxt.fillStyle="black";
        Ktxt.fillRect(0, 0, 50, 50);
        showMathScore();

        newRound();

        PrimeZapper.draw();
        PrimeZapper.primeSwitch();
        PrimeZapper.primeBlast();
        PrimeZapper.rewardPathway();

        window.requestAnimationFrame(mathLoop, cvas);
    }

    // here is the ai game list
    var compositeList = [];
    //add ai to it...
    function newRound()
    {
        if (compositeList.length < 5 && spaceKey == true && spawnSafe == 0)
        {
            spawnSafe = 1;
            compositeList.push(new Composites());
            console.log("AI LIST" + compositeList);
        }
        else if (spaceKey == false)
        {
            spawnSafe = 0;
        }

        //also activate all current Composites()
        for (var i = 0; i < compositeList.length; i++)
        {
            compositeList[i].looperdeedoo();
        }
    }

    function showMathScore()
    {
        Ktxt.beginPath();
        Ktxt.font="30px Arial";
        Ktxt.fillStyle = "Gold";
        Ktxt.fillText(mathScore, 0, 38);
    }

    function timeRegulation(time)
    {
        if (timeNow == "start")
        {
            timeNow = time;
        }
        timePrevious = time;
        timeChange = timePrevious - timeNow;
        timeNow = time;
    }

    function keysDown(event)
    {
        var key = event.keyCode || event.which;

        if (key == 87)
        {
            wKey = true;
        }
        if (key == 65)
        {
            aKey = true;
        }
        if (key == 68)
        {
            dKey = true;
        }
        if (key == 83)
        {
            sKey = true;
        }
        if (key == 16)
        {
            shiftKey = true;
        }
        if (key == 32)
        {
            spaceKey = true;
        }

    }

    function keysUp()
    {
        var key = event.keyCode || event.which;

        if (key == 87)
        {
            wKey = false;
        }
        if (key == 65)
        {
            aKey = false;
        }
        if (key == 68)
        {
            dKey = false;
        }
        if (key == 83)
        {
            sKey = false;
        }
        if (key == 16)
        {
            shiftKey = false;
        }
        if (key == 32)
        {
            spaceKey = false;
        }
    }

    function mousePosition()
    {
        if (typeof(event.offsetX) == "undefined")
        {
            mouseX = event.clientX - cvas.offsetLeft;
        }
        else
        {
            mouseX = event.offsetX;
        }

        if (typeof(event.offsetY) == "undefined")
        {
            mouseY = event.clientY - cvas.offsetTop;
        }
        else
        {
            mouseY = event.offsetY;
        }
        console.log("( " + mouseX + ", " + mouseY + " )");
    }

    function mouseDown()
    {
        clicker = true;
    }

    function mouseUp()
    {
        clicker = false;
    }

    PrimeZapper =
    {
        X: 300,
        Y: 580,
        state: "waiting",
        primePickNum: 0,
        primeOptions: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    };
    PrimeZapper.prime = PrimeZapper.primeOptions[PrimeZapper.primePickNum];
    PrimeZapper.draw = function()
    {
        // turret base
        ctxt.beginPath();
        ctxt.lineWidth=1;
        ctxt.fillStyle="lightGrey";
        ctxt.arc(PrimeZapper.X, PrimeZapper.Y, 10, 0, 2 * Math.PI);
        ctxt.strokeStyle="black";
        ctxt.fill();
        ctxt.stroke();
        //turret head
        if (PrimeZapper.state == "waiting")
        {
            ctxt.beginPath();
            ctxt.lineWidth=1;
            ctxt.fillStyle="darkGrey";
            ctxt.arc(PrimeZapper.X, PrimeZapper.Y, 5, 0, 2 * Math.PI);
            ctxt.strokeStyle="black";
            ctxt.fill();
            ctxt.stroke();
        }
        else if (PrimeZapper.state == "firing")
        {
            ctxt.beginPath();
            ctxt.lineWidth=1;
            ctxt.fillStyle="lightBlue";
            ctxt.arc(PrimeZapper.X, PrimeZapper.Y, 5, 0, 2 * Math.PI);
            ctxt.strokeStyle="blue";
            ctxt.fill();
            ctxt.stroke();
        }
        //prime
        ctxt.beginPath();
        ctxt.font="20px Arial";
        ctxt.fillStyle = "black";
        ctxt.fillText(PrimeZapper.prime, PrimeZapper.X, PrimeZapper.Y);
        ctxt.arc(PrimeZapper.X, PrimeZapper.Y, 10, 0, 2 * Math.PI);
    };

    PrimeZapper.rewardPathway = function()
    {
        if (mathScore == 17)
        {
            PrimeZapper.primeOptions = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127];
        }
        else if (mathScore == 47)
        {
            PrimeZapper.primeOptions = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173];
        }
        else if (mathScore == 101)
        {
            PrimeZapper.primeOptions = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229];
        }
    };

    PrimeZapper.primeSwitch = function()
    {
        function allowSoundAgain()
        {
            oneSwitchAtATime = 0;
            window.primeSwitchSound.pause();
        }
        if(dKey == true)
        {
            if (oneSwitchAtATime == 0)
            {
                oneSwitchAtATime = 1;
                setTimeout(allowSoundAgain, 250);
                window.primeSwitchSound.currentTime = 0;
                window.primeSwitchSound.play();
            }
            if (PrimeZapper.primePickNum >= PrimeZapper.primeOptions.length - 0.5)
            {
                PrimeZapper.primePickNum = 0;
            }
            else
            {
                PrimeZapper.primePickNum += 0.1 ;
            }
            PrimeZapper.prime = PrimeZapper.primeOptions[Math.floor(PrimeZapper.primePickNum)];
        }
        else if(aKey == true)
        {
            if (oneSwitchAtATime == 0)
            {
                oneSwitchAtATime = 1;
                setTimeout(allowSoundAgain, 250);
                window.primeSwitchSound.currentTime = 0;
                window.primeSwitchSound.play();
            }
            if (PrimeZapper.primePickNum <= 0.5)
            {
                PrimeZapper.primePickNum = PrimeZapper.primeOptions.length - 0.1;
            }
            else
            {
                PrimeZapper.primePickNum -= 0.1 ;
            }
            PrimeZapper.prime = PrimeZapper.primeOptions[Math.floor(PrimeZapper.primePickNum)];
        }
    };
    PrimeZapper.primeBlast = function()
    {
        if (clicker == true)
        {
            if (checkFire == 0)
            {
                function chkFR()
                {
                    checkFire = 1;
                    window.zapSound.muted = true;
                }
                setTimeout(chkFR, 250);
                window.zapSound.muted = false;
                window.zapSound.play();
                PrimeZapper.state = "firing";
                //blast
                ctxt.beginPath();
                ctxt.strokeStyle="lightBlue";
                ctxt.lineWidth=5;
                ctxt.moveTo(PrimeZapper.X, PrimeZapper.Y);
                ctxt.lineTo(mouseX, mouseY);
                ctxt.stroke();

                //prime

                ctxt.beginPath();
                ctxt.font="20px Arial";
                ctxt.fillStyle = "black";
                ctxt.fillText(PrimeZapper.prime, mouseX, mouseY);
            }
        }
        else
        {
            window.zapSound.currentTime = 0;
            PrimeZapper.state = "waiting";
            checkFire = 0;
        }
    };

    function Composites()
    {
        this.value = Math.floor(Math.random() * 962);
        this.speed = .35 / Math.round(this.value *.0035);
        this.x = Math.floor(Math.random() * 540) + 20;
        this.y = -10;

        this.draw = function()
        {
            var hats = 0;
            var hits = 0;
            for (var i = 0; i < PrimeZapper.primeOptions.length; i++)
            {
                if (this.value % PrimeZapper.primeOptions[i] !== 0)
                {
                    hits += 1;
                }
            }
            for (var i = 0; i < PrimeZapper.primeOptions.length; i++)
            {
                if (this.value == PrimeZapper.primeOptions[i])
                {
                   hats += 1;
                }
            }
//TODO sometimes the score and self destruct sequence both break and it goes out of control with score and things don't completely delete...
            if (this.value == 1)
            {
                this.selfDestruct();
                window.factored.play();
                mathScore += 1;
            }
            else if (hits == PrimeZapper.primeOptions.length || hats > 0)
            {
                ctxt.beginPath();
                ctxt.fillStyle="red";
                ctxt.moveTo(this.x - 10, this.y + 5);
                ctxt.lineTo(this.x + 10, this.y + 5);
                ctxt.lineTo(this.x,this.y - 15);
                ctxt.lineTo(this.x - 10, this.y + 5);
                ctxt.closePath();
                ctxt.fill();
            }
            else if (this.value % 2 == 0)
            {
                ctxt.beginPath();
                ctxt.fillStyle="red";
                ctxt.arc(this.x, this.y, 10, 0, 2 * Math.PI);
                ctxt.fill();
            }
            else
            {
                ctxt.beginPath();
                ctxt.fillStyle="red";
                ctxt.fillRect(this.x, this.y, 20, 20);
            }
            ctxt.beginPath();
            ctxt.font="12px Arial";
            ctxt.fillStyle = "black";
            ctxt.fillText(this.value, this.x, this.y);
            ctxt.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        };

        this.course = function()
        {
            if (this.y < 610)
            {
                this.y += this.speed * timeChange / 16.75;
            }
            else
            {
                this.selfDestruct();
            }
        };

        this.divisibility = function()
        {
            if (factorRegen == 0 && mouseX > this.x - 30 && mouseX < this.x + 30 && mouseY > this.y - 30 && mouseY < this.y + 30 && PrimeZapper.state == "firing" && this.value % PrimeZapper.prime == 0)
            {
                //  && checkFire == 1 (it doesn't work while this is included... but I am worried that it will overfactor without it.
                factorRegen = 1;
                this.value = this.value / PrimeZapper.prime;

                function regenBack()
                {
                    factorRegen = 0;
                }
                setTimeout(regenBack, 150)
            }
        };

        this.selfDestruct = function()
        {
            for (var i = 0; i < compositeList.length; i++)
            {
                if (compositeList[i] === this)
                {
                    compositeList.splice(i, 1);
                }
            }
        };

        this.looperdeedoo = function()
        {
            this.draw();
            this.course();
            this.divisibility();
        }

    }

    window.requestAnimationFrame(mathLoop, cvas);
}