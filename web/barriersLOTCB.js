/**
 * Created by skyeguy on 9/23/17.
 */
function Barrier(x, y, h, w, dev, info)
{
    this.X = x;
    this.Y = y;
    this.height = h;
    this.width = w;
    this.dev = dev;
    this.info = info;

    this.deleteMissile = function()
    {
        var cosasParaErradicar = [];

        //PLAYER PROJECTILES
        //find the projectiles that are overlapping this barrier.
        for (var ii = 0; ii < playerProjectiles.length; ii++)
        {
            //console.log("myX: " + playerProjectiles[ii].X + " myY: " + playerProjectiles[ii].Y + " barrierX: " + this.X + " barrierY: " + this.Y);
            if (playerProjectiles[ii].X <= this.X + this.width && playerProjectiles[ii].X >= this.X && playerProjectiles[ii].Y <= this.Y + this.height && playerProjectiles[ii].Y >= this.Y)
            {
                if (new Date().getTime() - playerProjectiles[ii].timeSinceShot > 200 || this.info != "cover")
                {
                    if (playerProjectiles[ii].thrown == true && playerProjectiles[ii].isPlayerProjectile == true && playerProjectiles[ii].thrownID != "none")
                    {
                        scenicList.push(new Scenery(playerProjectiles[ii].thrownID, playerProjectiles[ii].X, playerProjectiles[ii].Y, playerProjectiles[ii].thrownRotation, false));
                    }

                    cosasParaErradicar.push(ii);
                }
            }
        }
        //delete what needs to be deleted from the above list and then reset.
        for (var ii = 0; ii < cosasParaErradicar.length; ii++)
        {
            playerProjectiles.splice(cosasParaErradicar[ii], 1);
        }
        cosasParaErradicar = [];

        //UNIT PROJECTILES
        //find the projectiles that are overlapping this barrier.
        for (var ii = 0; ii < unitProjectiles.length; ii++)
        {
            if (unitProjectiles[ii].X <= this.X + this.width && unitProjectiles[ii].X >= this.X && unitProjectiles[ii].Y <= this.Y + this.height && unitProjectiles[ii].Y >= this.Y)
            {
                if (new Date().getTime() - playerProjectiles[ii].timeSinceShot > 200 || this.info != "cover")
                {
                    cosasParaErradicar.push(ii);
                }
            }
        }
        //delete what needs to be deleted from the above list and then reset.
        for (var ii = 0; ii < cosasParaErradicar.length; ii++)
        {
            unitProjectiles.splice(cosasParaErradicar[ii], 1);
        }
        cosasParaErradicar = [];

        //MAGIC
        //find the magic that is overlapping this barrier.
        for (var ii = 0; ii < magicList.length; ii++)
        {
            if (magicList[ii].X <= this.X + this.width && magicList[ii].X >= this.X && magicList[ii].Y <= this.Y + this.height && magicList[ii].Y >= this.Y)
            {
                cosasParaErradicar.push(ii);
            }
        }
        //delete what needs to be deleted from the above list and then reset.
        for (var ii = 0; ii < cosasParaErradicar.length; ii++)
        {
            magicList.splice(cosasParaErradicar[ii], 1);
        }
    };

    this.drawSelfForTest = function()
    {
        XXX.beginPath();
        if (this.dev)
        {
            XXX.fillStyle = "yellow";
        }
        else
        {
            XXX.fillStyle = "red";
        }
        //XXX.fillRect(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height, this.width, this.height);
        XXX.fillRect(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height, -this.width, -this.height);
    };

    this.operations = function()
    {
        if (testBarriers)
        {
            this.drawSelfForTest();
        }
        if (this.info != "phase")
        {
            this.deleteMissile();
        }
    };
}