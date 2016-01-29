/**
 * Created by skyeguy on 10/24/15.
 */

function startRunning() //THIS IS AN EXAMPLE OF SAVE AND RESTORE THAT DAD WROTE.
{
    function MyClass(n,s,p)
    {
        this.a = n;
        this.b = s;
        this.c = p;
        this.print = function()
        {
            console.log( "a=" + this.a + ", b=" + this.b );
        }
    }

    function save( theList )
    {
        var out = [];
        for (var n=0; n < theList.length; n++)
        {
            var elem = theList[n];
            var className = elem.constructor.name;
            var classData = {};
            for (var field in elem)
            {
                var value = elem[field];
                if (typeof(value) != "function")
                    classData[field] = value;
            }
            out.push({ type: className, data: classData });
        }
        return JSON.stringify( out );
    }
    function restore( json )
    {
        var rawList = JSON.parse( json );
        var out = [];
        for (var n=0; n < rawList.length; n++)
        {
            var parts = rawList[n];
            var elem = eval("new " + parts.type + "()");
            for (var field in parts.data)
                elem[field] = parts.data[field];
            out.push( elem );
        }
        return out;
    }

    function test()
    {
        var listOfClasses = [
            new MyClass(1,"hello", [5,"hAJK67", 49]),
            new MyClass(2,"goodbye", "Tiddley Doo Dah!")
        ];
        var json = save( listOfClasses );
        console.log( "HERE IS THE SAVED FORM OF THE LIST" );
        console.log( json );
        var restored = restore( json );
        console.log( "HERE IS THE RESTORED LIST" );
        console.log( restored );

        console.log( "NOW WE'LL MAKE SURE THE RESTORED CLASSES STILL WORK" );
        restored[0].print();
        restored[1].print();
    }

    test();

}

/*function startRunning() //THIS IS THE BASIC IDEA FOR DRAWING A PATH, but it is not fully funtional...
{
    var booga = document.getElementById("pathScreen");
    var boo = booga.getContext("2d");

    var champs = [];
    var linePath = [];

    function Obstak(x, y, type, tag)
    {
        this.X = x;
        this.Y = y;
        this.type = type;
        this.radius = 0;
        this.tag = tag;

        this.drawSelf = function()
        {
            if (type == 1)
            {
                boo.beginPath();
                boo.fillStyle="blue";
                boo.arc(this.X,this.Y, 60, 0, 2*Math.PI);
                boo.fill();
                this.radius = 60;
            }
            if (type == 2)
            {
                boo.beginPath();
                boo.fillStyle="green";
                boo.fillRect(this.X - 50, this.Y - 50, 100, 100);
                this.radius = 75;
            }
        }
    }

    //Adding obstacles to the world...
    champs.push(new Obstak(120, 150, 1), new Obstak(280, 435, 2));

    // this draws stuff but it is not in charge of anything else.
    function worldrawer()
    {
        // draw obstacles
        for (var i = 0; i < champs.length; i++)
        {
            champs[i].drawSelf();
        }
        // draw path
        for (var i = 0; i < linePath.length; i++)
        {
            // draw golden dots that represent the path to follow
            boo.beginPath();
            boo.fillStyle="gold";
            boo.arc(linePath[i].X, linePath[i].Y, 2, 0, 2*Math.PI);
            boo.fill();
            //draw a crimson line from one dot to the next
            boo.beginPath();
            boo.strokeStyle="crimson";
            boo.moveTo(linePath[i].X, linePath[i].Y);
                // if not at the end of the list, then draw the line to the next step in the list
            if (i != linePath.length - 1)
            {
                boo.lineTo(linePath[i + 1].X, linePath[i + 1].Y)
            }
            boo.lineWidth=1;
            boo.stroke();
        }
    }
    // this finds a point's distance from the nearest object and then if that point is within the radius of any nearby obstacles then return the name of the obstacle that has obstructed the point.
    function isObstructed(x, y, obstacles)
    {
        for (var i = 0; i < obstacles.length; i++)
        {
            var dFNO = Math.sqrt((obstacles[i].X - x) * (obstacles[i].X - x) + (obstacles[i].Y - y) * (obstacles[i].Y - y));
            if (dFNO <= obstacles[i].radius)
            {
                return obstacles[i];
            }
        }

        return null;
    }

    function drawPath(self, target, obstacles)
    {

        var angleToTarget = Math.atan2(target.Y - self.Y, target.X - self.X);
        var x = self.X;
        var y = self.Y;
        var path = [];

        for (var i= 0; i < 1000 ; i++)
        {
            // dFT == (distance from target)
            var dFT = Math.sqrt((target.X - x) * (target.X - x) + (target.Y - y) * (target.Y - y));

            // move 10 pixels toward target
            x = x + Math.cos(angleToTarget) * 10;
            y = y + Math.sin(angleToTarget) * 10;

            var obstruction = isObstructed(x, y, obstacles);
            if (obstruction)
            {
                // the angle to the current obstruction
                var angle1 = Math.atan2(self.Y - obstruction.Y, self.X - obstruction.X);

                // the angle to the current obstruction except with a half circle added to it
                var angle2 = angle1 + Math.PI;

                // follow the radius of the obstacle until a half circle is followed.
                for (var j = angle1; j < angle2; j += 0.1)
                {
                    // this is setting the x and the y to the obstacles coords and then setting points to follow along the radius of the obstacle.
                    x = obstruction.X + Math.cos(j) * obstruction.radius;
                    y = obstruction.Y + Math.sin(j) * obstruction.radius;
                    path.push({X: x, Y: y});
                }
                // set the angle back to the original target.
                angleToTarget = Math.atan2(target.Y - self.Y, target.X - self.X);
            }
            else
            {
                // add point to path
                path.push({X: x, Y: y});

            }

            // see if you are close to target >> stop
            //TODO fix the problem about the line going too far when an obstacle is hit.
            if (dFT <= 5)
            {
                break;
            }
        }
        return path;
    }

    function buildObstacleWorld()
    {
        boo.clearRect(0, 0, 1400, 550);
        linePath = drawPath( {X:10,Y:10}, {X:500,Y:690}, champs );
        worldrawer();


        requestAnimationFrame(buildObstacleWorld, booga);
    }

    requestAnimationFrame(buildObstacleWorld, booga);
}*/