/**
 * Created by skyeguy on 9/17/15.
 */
function startBranching()
{
    // bc as in brancherCanvas and bctx as in brancherContext
    var bc = document.getElementById("branchBoard");
    var bctx = bc.getContext("2d");

    var xPos1 = bc.width/ 2;
    var yPos1 = bc.height - 1000;
    var treeSpan = 1.05;

    function drawLines(x1, y1, x2, y2)
    {
        bctx.beginPath();
        bctx.moveTo(x1, y1);
        bctx.lineTo(x2, y2);
        bctx.stroke();
    }

    function brancher(x, y, a, r, depth, fruitSize, fruitColor)
    {
        var x1 = x + (r * Math.cos(a));
        var y1 = y + (r * Math.sin(a));
        if (depth == 0)
        {
            return;
        }
        else if (depth == 1)
        {
            bctx.beginPath();
            bctx.arc(x1, y1, fruitSize, 0, (2 * Math.PI));
            bctx.fillStyle=fruitColor;
            bctx.fill();
        }
            drawLines(x, y, x1, y1);
            brancher(x1, y1, a - 0.3, r * treeSpan, depth-1, fruitSize, fruitColor);
            brancher(x1, y1, a + 0.3, r * treeSpan, depth-1, fruitSize, fruitColor);
    }

    function coloredBackSetting(fillstyle)
    {
        bctx.beginPath();
        bctx.rect(0, 0, 4000, 4000);
        bctx.fillStyle= fillstyle;
        bctx.fill();
    }
    function isFruitColorSame(newColor, usedColor)
    {
        if (newColor == usedColor)
        {
            Math.floor(Math.random() * 16);
            isFruitColorSame(newColor, usedColor);
        }
        else
        {
            return newColor;
        }
    }

    function randomTree()
    {
        var depth = Math.floor(Math.random() * 20);
        var treeSize = Math.floor(Math.random() * 66);
        var fruitSize = Math.floor(Math.random() * 28);
        var fruitSizes = [0.4, 0.6, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9, 2, 2.2, 2.4, 2.7, 3, 3.2, 3.5, 3.8, 4, 4.4, 4.9, 5.2, 5.5, 5.8, 6, 6.4, 7, 7.3, 7.6, 8];
        var backgroundColor = Math.floor(Math.random() * 16);
        var fruitColor = Math.floor(Math.random() * 16);
        var fruitColors = ["magenta", "crimson", "deepskyblue", "orange", "green", "lightgreen", "purple", "yellow", "gold", "teal", "forestgreen", "salmon", "coral", "cornsilk", "orangered", "olivedrab"];
        coloredBackSetting(fruitColors[backgroundColor]);
        brancher(xPos1, yPos1, -1 * (Math.PI / 2), treeSize + 10, depth + 1, fruitSizes[fruitSize], fruitColors[isFruitColorSame(fruitColor, backgroundColor)]);
    }
    window.randomTree = randomTree;

}