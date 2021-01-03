//created on July 21, Tuesday, 2020

function Minigame(type, wager, AI)
{
    this.type = type;
    this.wagerMAX = wager;
    this.wager = 0;
    this.wagered = false;
    this.wagerCoins = [];
    this.setup = true;
    this.startGame = true;
    this.turn = false;
    this.ai = AI;
    this.aiScore = 0;
    this.score = 0;
    this.finalScore = 0;
    this.aiFinalScore = 0;
    this.endgame = false;
    this.endgameTic = 0;

    //cards
    this.deck = [];
    this.shuffler = [];
    this.shuffleLength = 0;
    this.discard = [];
    this.hand = [];
    this.special = [];
    this.inplay = [];
    this.aiHand = [];
    this.aiInplay = [];
    this.aiSpecial = [];
    this.drawKeepTime = new Date().getTime();
    this.capReached = false;
    this.actionTaken = false;
    this.aiAction = false;
    this.targetingAI = false;
    this.targetAIValue = 0;
    this.targetAISuit = "none";
    this.bust = false;

    //chess
    this.ajedrez = [];
    this.chesser = [];
    this.col = true; //true = white, false = black
    this.chessScale = 1;
    this.chessPosX = 0;
    this.chessPosY = 0;
    this.chessSelect = -1;
    this.blackwhite = false;
    this.enPassant = -1;
    this.myMoves = [];
    this.pawn = 1;
    this.rook = 4;
    this.bishop = 3;
    this.knight = 3;
    this.queen = 9;
    this.king = 1000;
    this.inquisitor = 4;
    this.doubleSquare = {X: -10, Y:-10};
    this.doubledSquare = false;
    this.kingsMov = []; //tracks how many moves the king has available.
    this.check = false; //Is the player king checked?
    this.mate = false; //Has the player lost
    this.aiCheck = false; //Is the AI king checked?
    this.aiMate = false; //has the AI lost?
    this.chessType = 1; //0 is default, 1 is with special pieces
    this.aiTurn = false;

    var self = this;
    this.shuffle = function(restart, joker)
    {
        if (restart == true)
        {
            self.hand = [];
            self.aiHand = [];
            self.inplay = [];
            self.aiInplay = [];
            self.special = [];
            self.aiSpecial = [];
            self.deck = [];
            self.shuffler = [];
            //knight
            self.shuffler.push({suit: "Hearts", number: "Knight", faceup: false, value: 1, basevalue: 1});
            self.shuffler.push({suit: "Daggers", number: "Knight", faceup: false, value: 1, basevalue: 1});
            self.shuffler.push({suit: "Bottles", number: "Knight", faceup: false, value: 1, basevalue: 1});
            self.shuffler.push({suit: "Clubs", number: "Knight", faceup: false, value: 1, basevalue: 1});
            //2
            self.shuffler.push({suit: "Hearts", number: "2", faceup: false, value: 2, basevalue: 2});
            self.shuffler.push({suit: "Daggers", number: "2", faceup: false, value: 2, basevalue: 2});
            self.shuffler.push({suit: "Bottles", number: "2", faceup: false, value: 2, basevalue: 2});
            self.shuffler.push({suit: "Clubs", number: "2", faceup: false, value: 2, basevalue: 2});
            //3
            self.shuffler.push({suit: "Hearts", number: "3", faceup: false, value: 3, basevalue: 3});
            self.shuffler.push({suit: "Daggers", number: "3", faceup: false, value: 3, basevalue: 3});
            self.shuffler.push({suit: "Bottles", number: "3", faceup: false, value: 3, basevalue: 3});
            self.shuffler.push({suit: "Clubs", number: "3", faceup: false, value: 3, basevalue: 3});
            //4
            self.shuffler.push({suit: "Hearts", number: "4", faceup: false, value: 4, basevalue: 4});
            self.shuffler.push({suit: "Daggers", number: "4", faceup: false, value: 4, basevalue: 4});
            self.shuffler.push({suit: "Bottles", number: "4", faceup: false, value: 4, basevalue: 4});
            self.shuffler.push({suit: "Clubs", number: "4", faceup: false, value: 4, basevalue: 4});
            //5
            self.shuffler.push({suit: "Hearts", number: "5", faceup: false, value: 5, basevalue: 5});
            self.shuffler.push({suit: "Daggers", number: "5", faceup: false, value: 5, basevalue: 5});
            self.shuffler.push({suit: "Bottles", number: "5", faceup: false, value: 5, basevalue: 5});
            self.shuffler.push({suit: "Clubs", number: "5", faceup: false, value: 5, basevalue: 5});
            //6
            self.shuffler.push({suit: "Hearts", number: "6", faceup: false, value: 6, basevalue: 6});
            self.shuffler.push({suit: "Daggers", number: "6", faceup: false, value: 6, basevalue: 6});
            self.shuffler.push({suit: "Bottles", number: "6", faceup: false, value: 6, basevalue: 6});
            self.shuffler.push({suit: "Clubs", number: "6", faceup: false, value: 6, basevalue: 6});
            //7
            self.shuffler.push({suit: "Hearts", number: "7", faceup: false, value: 7, basevalue: 7});
            self.shuffler.push({suit: "Daggers", number: "7", faceup: false, value: 7, basevalue: 7});
            self.shuffler.push({suit: "Bottles", number: "7", faceup: false, value: 7, basevalue: 7});
            self.shuffler.push({suit: "Clubs", number: "7", faceup: false, value: 7, basevalue: 7});
            //8
            self.shuffler.push({suit: "Hearts", number: "8", faceup: false, value: 8, basevalue: 8});
            self.shuffler.push({suit: "Daggers", number: "8", faceup: false, value: 8, basevalue: 8});
            self.shuffler.push({suit: "Bottles", number: "8", faceup: false, value: 8, basevalue: 8});
            self.shuffler.push({suit: "Clubs", number: "8", faceup: false, value: 8, basevalue: 8});
            //9
            self.shuffler.push({suit: "Hearts", number: "9", faceup: false, value: 9, basevalue: 9});
            self.shuffler.push({suit: "Daggers", number: "9", faceup: false, value: 9, basevalue: 9});
            self.shuffler.push({suit: "Bottles", number: "9", faceup: false, value: 9, basevalue: 9});
            self.shuffler.push({suit: "Clubs", number: "9", faceup: false, value: 9, basevalue: 9});
            //10
            self.shuffler.push({suit: "Hearts", number: "10", faceup: false, value: 10, basevalue: 10});
            self.shuffler.push({suit: "Daggers", number: "10", faceup: false, value: 10, basevalue: 10});
            self.shuffler.push({suit: "Bottles", number: "10", faceup: false, value: 10, basevalue: 10});
            self.shuffler.push({suit: "Clubs", number: "10", faceup: false, value: 10, basevalue: 10});
            //constable
            self.shuffler.push({suit: "Hearts", number: "Constable", faceup: false, value: 11, basevalue: 11});
            self.shuffler.push({suit: "Daggers", number: "Constable", faceup: false, value: 11, basevalue: 11});
            self.shuffler.push({suit: "Bottles", number: "Constable", faceup: false, value: 11, basevalue: 11});
            self.shuffler.push({suit: "Clubs", number: "Constable", faceup: false, value: 11, basevalue: 11});
            //countess
            self.shuffler.push({suit: "Hearts", number: "Countess", faceup: false, value: 12, basevalue: 12});
            self.shuffler.push({suit: "Daggers", number: "Countess", faceup: false, value: 12, basevalue: 12});
            self.shuffler.push({suit: "Bottles", number: "Countess", faceup: false, value: 12, basevalue: 12});
            self.shuffler.push({suit: "Clubs", number: "Countess", faceup: false, value: 12, basevalue: 12});
            //count
            self.shuffler.push({suit: "Hearts", number: "Count", faceup: false, value: 13, basevalue: 13});
            self.shuffler.push({suit: "Daggers", number: "Count", faceup: false, value: 13, basevalue: 13});
            self.shuffler.push({suit: "Bottles", number: "Count", faceup: false, value: 13, basevalue: 13});
            self.shuffler.push({suit: "Clubs", number: "Count", faceup: false, value: 13, basevalue: 13});
            if (joker == true)
            {
                self.shuffler.push({suit: "Jester", number: "Jester", faceup: false, value: 1, basevalue: 1});
                self.shuffler.push({suit: "Jester", number: "Jester", faceup: false, value: 1, basevalue: 1});
            }
            self.shuffleLength = self.shuffler.length;
        }
        else
        {
            self.shuffler = self.deck.slice();
            self.deck = [];
            self.shuffleLength = self.shuffler.length;
        }

        for (var mi = self.shuffleLength - 1; mi >= 0; mi--)
        {
            var shuff = Math.floor(Math.random() * self.shuffler.length);
            // console.log( mi + " ::: ");
            // console.log(self.shuffler[shuff]);
            self.deck.push(self.shuffler[shuff]);
            // console.log(self.deck.length);
            self.shuffler.splice(shuff, 1);
        }
    }
    this.setupTabla = function()
    {
        minigame.ajedrez = [];
        if (Math.round(Math.random()))
        {
            this.col = true; //white
            this.turn = true;
        }
        else
        {
            this.col = false; //black
            this.turn = false;
        }

        //define the chess squares
        for (var kli = 0; kli < 8; kli++)
        {
            for (var kla = 0; kla < 8; kla++)
            {
                if (kla == 0)
                {
                    minigame.ajedrez.push({square:"A" + (kli + 1), X: (kla + 1), Y: (kli + 1), material: "none", value: 0, moved: false});
                }
                else if (kla == 1)
                {
                    minigame.ajedrez.push({square:"B" + (kli + 1), X: (kla + 1), Y: (kli + 1) , material: "none", value: 0, moved: false});
                }
                else if (kla == 2)
                {
                    minigame.ajedrez.push({square:"C" + (kli + 1), X: (kla + 1), Y: (kli + 1) , material: "none", value: 0, moved: false});
                }
                else if (kla == 3)
                {
                    minigame.ajedrez.push({square:"D" + (kli + 1), X: (kla + 1), Y: (kli + 1) , material: "none", value: 0, moved: false});
                }
                else if (kla == 4)
                {
                    minigame.ajedrez.push({square:"E" + (kli + 1), X: (kla + 1), Y: (kli + 1) , material: "none", value: 0, moved: false});
                }
                else if (kla == 5)
                {
                    minigame.ajedrez.push({square:"F" + (kli + 1), X: (kla + 1), Y: (kli + 1) , material: "none", value: 0, moved: false});
                }
                else if (kla == 6)
                {
                    minigame.ajedrez.push({square:"G" + (kli + 1), X: (kla + 1), Y: (kli + 1) , material: "none", value: 0, moved: false});
                }
                else if (kla == 7)
                {
                    minigame.ajedrez.push({square:"H" + (kli + 1), X: (kla + 1), Y: (kli + 1) , material: "none", value: 0, moved: false});
                }
            }
        }

        //set up the pieces on the board
        for (var kli = 0; kli < minigame.ajedrez.length; kli++)
        {
            //set up pawns
            if (this.chessType == 0)
            {
                if (minigame.ajedrez[kli].Y == 7)
                {
                    minigame.ajedrez[kli].material = "bPawn";
                    minigame.ajedrez[kli].value = minigame.pawn;
                }
                else if (minigame.ajedrez[kli].Y == 2)
                {
                    minigame.ajedrez[kli].material = "wPawn";
                    minigame.ajedrez[kli].value = minigame.pawn;
                }
            }
            else if (this.chessType == 1)
            {
                if (minigame.ajedrez[kli].Y == 7 && minigame.ajedrez[kli].X != 2 && minigame.ajedrez[kli].X != 7)
                {
                    minigame.ajedrez[kli].material = "bPawn";
                    minigame.ajedrez[kli].value = minigame.pawn;
                }
                else if (minigame.ajedrez[kli].Y == 2 && minigame.ajedrez[kli].X != 2 && minigame.ajedrez[kli].X != 7)
                {
                    minigame.ajedrez[kli].material = "wPawn";
                    minigame.ajedrez[kli].value = minigame.pawn;
                }

                if (minigame.ajedrez[kli].X == 2 && minigame.ajedrez[kli].Y == 2 || minigame.ajedrez[kli].X == 7 && minigame.ajedrez[kli].Y == 2)
                {
                    minigame.ajedrez[kli].material = "wInquisitor";
                    minigame.ajedrez[kli].value = minigame.inquisitor;
                }
                if (minigame.ajedrez[kli].X == 2 && minigame.ajedrez[kli].Y == 7 || minigame.ajedrez[kli].X == 7 && minigame.ajedrez[kli].Y == 7)
                {
                    minigame.ajedrez[kli].material = "bInquisitor";
                    minigame.ajedrez[kli].value = minigame.inquisitor;
                }
            }

            if (minigame.ajedrez[kli].Y == 1)
            {
                if (minigame.ajedrez[kli].X == 1 || minigame.ajedrez[kli].X == 8)
                {
                    minigame.ajedrez[kli].material = "wRook";
                    minigame.ajedrez[kli].value = minigame.rook;
                }
                else if (minigame.ajedrez[kli].X == 2 || minigame.ajedrez[kli].X == 7)
                {
                    minigame.ajedrez[kli].material = "wKnight";
                    minigame.ajedrez[kli].value = minigame.knight;
                }
                else if (minigame.ajedrez[kli].X == 3 || minigame.ajedrez[kli].X == 6)
                {
                    minigame.ajedrez[kli].material = "wBishop";
                    minigame.ajedrez[kli].value = minigame.bishop;
                }
                else if (minigame.ajedrez[kli].X == 4)
                {
                    minigame.ajedrez[kli].material = "wQueen";
                    minigame.ajedrez[kli].value = minigame.queen;
                }
                else if (minigame.ajedrez[kli].X == 5)
                {
                    minigame.ajedrez[kli].material = "wKing";
                    minigame.ajedrez[kli].value = minigame.king;
                }
            }
            else if (minigame.ajedrez[kli].Y == 8)
            {
                if (minigame.ajedrez[kli].X == 1 || minigame.ajedrez[kli].X == 8)
                {
                    minigame.ajedrez[kli].material = "bRook";
                    minigame.ajedrez[kli].value = minigame.rook;
                }
                else if (minigame.ajedrez[kli].X == 2 || minigame.ajedrez[kli].X == 7)
                {
                    minigame.ajedrez[kli].material = "bKnight";
                    minigame.ajedrez[kli].value = minigame.knight;
                }
                else if (minigame.ajedrez[kli].X == 3 || minigame.ajedrez[kli].X == 6)
                {
                    minigame.ajedrez[kli].material = "bBishop";
                    minigame.ajedrez[kli].value = minigame.bishop;
                }
                else if (minigame.ajedrez[kli].X == 4)
                {
                    minigame.ajedrez[kli].material = "bQueen";
                    minigame.ajedrez[kli].value = minigame.queen;
                }
                else if (minigame.ajedrez[kli].X == 5)
                {
                    minigame.ajedrez[kli].material = "bKing";
                    minigame.ajedrez[kli].value = minigame.king;
                }
            }
        }
    };

    this.pawnMove = function(moveX, moveY, board, double, color)
    {
        var canMove = true;
        for (var kli = 0; kli < board.length; kli++)
        {
            if (double == true)
            {
                if (board[kli].X == moveX && board[kli].Y == moveY && board[kli].material != "none")
                {
                    canMove = false;
                    break;
                }
                if (color == true)
                {
                    if (board[kli].X == moveX && board[kli].Y == moveY - 1 && board[kli].material != "none")
                    {
                        canMove = false;
                        break;
                    }
                }
                else
                {
                    if (board[kli].X == moveX && board[kli].Y == moveY + 1 && board[kli].material != "none")
                    {
                        canMove = false;
                        break;
                    }
                }
            }
            else
            {
                if (board[kli].X == moveX && board[kli].Y == moveY && board[kli].material != "none")
                {
                    canMove = false;
                    break;
                }
            }
        }
        if (canMove == true)
        {
            if (minigame.enPassant != -1)
            {
                minigame.chsMov.push({X: moveX, Y: moveY, value: 1, extra: minigame.enPassant});
            }
            else
            {
                if (double == true)
                {
                    minigame.doubledSquare = {X: moveX, Y: moveY};
                    minigame.chsMov.push({X: moveX, Y: moveY, value: 0, extra: -1});
                }
                else
                {
                    minigame.chsMov.push({X: moveX, Y: moveY, value: 0, extra: -1});
                }
            }
        }
    };

    this.pawnTake = function(moveX, moveY, color, board, king)
    {
        for (var kli = 0; kli < board.length; kli++)
        {
            if (board[kli].X == moveX && board[kli].Y == moveY && color != board[kli].material[0] && board[kli].material != "none" || king == true)
            {
                minigame.chsMov.push({X: board[kli].X, Y: board[kli].Y, value: board[kli].value, extra: -1});
                break;
            }
        }
    };

    this.takeMove = function(moveX, moveY, color, board, castle)
    {
        var canMove = true;
        for (var kli = 0; kli < board.length; kli++)
        {
            if (board[kli].X == moveX && board[kli].Y == moveY && color != board[kli].material[0] && board[kli].material != "none")
            {
                canMove = false;
                minigame.chsMov.push({X: board[kli].X, Y: board[kli].Y, value: board[kli].value, extra: -1});
                break;
            }
        }
        if (canMove == true)
        {
            if (typeof(castle) != "undefined")
            {
                minigame.chsMov.push({X: moveX, Y: moveY, value: 0, extra: -1, castle});
            }
            else
            {
                minigame.chsMov.push({X: moveX, Y: moveY, value: 0, extra: -1});
            }
        }
    };

    this.aiPlayChess = function()
    {
        minigame.aiTurn = true;

    }

    this.playChessMove = function(klo, bord)
    {
        if (typeof(minigame.myMoves[klo].castle) != "undefined" && minigame.myMoves[klo].castle == "kingside" || typeof(minigame.myMoves[klo].castle) != "undefined" && minigame.myMoves[klo].castle == "queenside")
        {
            if (minigame.myMoves[klo].castle == "kingside")
            {
                if (minigame.col == true)
                {
                    for (var kliii = 0; kliii < bord.length; kliii++)
                    {
                        if (bord[kliii].square == "F1")
                        {
                            bord[kliii].moved = true;
                            bord[kliii].material = "wRook";
                            bord[kliii].value = minigame.rook;
                        }
                        if (bord[kliii].square == "H1")
                        {
                            bord[kliii].moved = false;
                            bord[kliii].material = "none";
                            bord[kliii].value = 0;
                        }
                    }
                }
                else
                {
                    for (var kliii = 0; kliii < bord.length; kliii++)
                    {
                        if (bord[kliii].square == "F8")
                        {
                            bord[kliii].moved = true;
                            bord[kliii].material = "bRook";
                            bord[kliii].value = minigame.rook;
                        }
                        if (bord[kliii].square == "H8")
                        {
                            bord[kliii].moved = false;
                            bord[kliii].material = "none";
                            bord[kliii].value = 0;
                        }
                    }
                }
            }
            else
            {
                if (minigame.col == true)
                {
                    for (var kliii = 0; kliii < bord.length; kliii++)
                    {
                        if (bord[kliii].square == "D1")
                        {
                            bord[kliii].moved = true;
                            bord[kliii].material = "wRook";
                            bord[kliii].value = minigame.rook;
                        }
                        if (bord[kliii].square == "A1")
                        {
                            bord[kliii].moved = false;
                            bord[kliii].material = "none";
                            bord[kliii].value = 0;
                        }
                    }
                }
                else
                {
                    for (var kliii = 0; kliii < bord.length; kliii++)
                    {
                        if (bord[kliii].square == "D8")
                        {
                            bord[kliii].moved = true;
                            bord[kliii].material = "bRook";
                            bord[kliii].value = minigame.rook;
                        }
                        if (bord[kliii].square == "A8")
                        {
                            bord[kliii].moved = false;
                            bord[kliii].material = "none";
                            bord[kliii].value = 0;
                        }
                    }
                }
            }
        }
        if (minigame.chessSelect.material.includes("Pawn"))
        {
            if (minigame.myMoves[klo].extra != -1 && bord[kla + 8 * kli].X == minigame.myMoves[klo].X && bord[kla + 8 * kli].Y == minigame.myMoves[klo].Y)
            {
                minigame.myMoves[klo].extra.material = "none";
                minigame.myMoves[klo].extra.value = 0;
                minigame.myMoves[klo].extra.moved = false;
            }
            if (minigame.doubledSquare != false)
            {
                minigame.doubleSquare = minigame.doubledSquare;
                minigame.doubledSquare = false;
            }
            else
            {
                minigame.doubleSquare = {X: -10, Y: -10};
            }
        }

        var chessMvPos = -1;
        for (var eekaboo = 0; eekaboo < bord.length; eekaboo++)
        {
            if (bord[eekaboo].X == minigame.myMoves[klo].X && bord[eekaboo].Y == minigame.myMoves[klo].Y)
            {
                chessMvPos = eekaboo;
            }
        }
        bord[chessMvPos].value = minigame.chessSelect.value;
        bord[chessMvPos].material = minigame.chessSelect.material;
        bord[chessMvPos].moved = true;
        minigame.chessSelect.moved = false;
        minigame.chessSelect.material = "none";
        minigame.chessSelect.value = 0;
        minigame.chessSelect = -1;
        minigame.myMoves = [];

        for (var pn = 0; pn < bord.length; pn++)
        {
            if (minigame.turn == true)
            {
                if (bord[pn].material.includes("King") && bord[pn].material[0] == "w" && minigame.col == true || bord[pn].material.includes("King") && bord[pn].material[0] == "b" && minigame.col == false)
                {
                    this.checkmate(bord[pn], bord);
                    break;
                }
            }
            else
            {
                if (bord[pn].material.includes("King") && bord[pn].material[0] == "b" && minigame.col == true || bord[pn].material.includes("King") && bord[pn].material[0] == "w" && minigame.col == false)
                {
                    this.checkmate(bord[pn], bord);
                    break;
                }
            }
        }

        if (bord == minigame.ajedrez)
        {
            if (minigame.turn == true && minigame.aiTurn != true && minigame.mate == true)
            {
                console.log("checkmate");
                //todo game over.
            }
            else if (minigame.turn == true && minigame.aiTurn != true && minigame.check == true)
            {
                console.log("check");
                minigame.redoBord();
            }
            else if (minigame.turn == true && minigame.aiTurn != true)
            {
                console.log("normal");
                minigame.saveBord();
            }
        }

        if (bord != minigame.ajedrez)
        {
            //todo what happens when the ai plays on a theoretical board...
        }
    }

    this.saveBord = function()
    {
        minigame.chesser = JSON.parse(JSON.stringify(minigame.ajedrez));
    }

    this.redoBord = function()
    {
        minigame.ajedrez = JSON.parse(JSON.stringify(minigame.chesser));
    }

    this.checkmate = function(piece, bord)
    {
        var matType = piece.material.slice(1);
        var matCol = piece.material[0];
        minigame.enPassant = -1;
        minigame.chsMov = [];
        minigame.kingsMov = [];

        if (piece.material == "bKing" && minigame.col == false || piece.material == "wKing" && minigame.col == true)
        {
            minigame.check = false;
        }
        else
        {
            minigame.aiCheck = false;
        }

        var kingzMoves = minigame.chsMov;
        for (var klii = 0; klii < bord.length; klii++)
        {
            var moovz = [];
            if (bord[klii].material[0] != matCol && !bord[klii].material.includes("Pawn") && bord[klii].material != "none")
            {
                moovz = this.chessMoves(bord[klii], bord, true);
                for (var kloo = 0; kloo < moovz.length; kloo++)
                {
                    if (moovz[kloo].X == piece.X && moovz[kloo].Y == piece.Y)
                    {
                        if (piece.material == "bKing" && minigame.col == false)
                        {
                            minigame.check = true;
                        }
                        else if (piece.material == "wKing" && minigame.col == true)
                        {
                            minigame.check = true;
                        }
                        else
                        {
                            minigame.aiCheck = true;
                        }
                    }
                    for (var klaa = kingzMoves.length - 1; klaa >= 0; klaa--)
                    {
                        if (moovz[kloo].X == kingzMoves[klaa].X && moovz[kloo].Y == kingzMoves[klaa].Y)
                        {
                            kingzMoves.splice(klaa, 1);
                        }
                    }
                }
            }
            else if (bord[klii].material[0] != matCol && bord[klii].material.includes("Pawn")) {
                minigame.chsMov = [];
                if (bord[klii].material[0] == "w")
                {
                    this.takeMove(bord[klii].X - 1, bord[klii].Y + 1, bord[klii].material[0], bord);
                    this.takeMove(bord[klii].X + 1, bord[klii].Y + 1, bord[klii].material[0], bord);
                }
                else
                {
                    this.takeMove(bord[klii].X - 1, bord[klii].Y - 1, bord[klii].material[0], bord);
                    this.takeMove(bord[klii].X + 1, bord[klii].Y - 1, bord[klii].material[0], bord);
                }
                for (var kloo = 0; kloo < minigame.chsMov.length; kloo++)
                {
                    if (minigame.chsMov[kloo].X == piece.X && minigame.chsMov[kloo].Y == piece.Y)
                    {
                        if (piece.material == "bKing" && minigame.col == false)
                        {
                            minigame.check = true;
                        }
                        else if (piece.material == "wKing" && minigame.col == true)
                        {
                            minigame.check = true;
                        }
                        else
                        {
                            minigame.aiCheck = true;
                        }
                    }
                    for (var klaa = kingzMoves.length - 1; klaa >= 0; klaa--)
                    {
                        if (minigame.chsMov[kloo].X == kingzMoves[klaa].X && minigame.chsMov[kloo].Y == kingzMoves[klaa].Y)
                        {
                            kingzMoves.splice(klaa, 1);
                        }
                    }
                }
            }
        }

        for (var pnn = 0; pnn < bord.length; pnn++)
        {
            if (bord[pnn].material.includes("King") && bord[pnn].material[0] == "w" && minigame.col == true || bord[pnn].material.includes("King") && bord[pnn].material[0] == "b" && minigame.col == false)
            {
                minigame.kingsMov = this.chessMoves(bord[pnn], bord, true);
                break;
            }
        }

        for (var klaaaa = minigame.kingsMov.length - 1; klaaaa >= 0; klaaaa--)
        {
            if (typeof(minigame.kingsMov[klaaaa].material) == "undefined")
            {
                kingzMoves.splice(klaaaa, 1);
            }
        }

        if (piece.material == "bKing" && minigame.col == false || piece.material == "wKing" && minigame.col == true)
        {
            if (minigame.check == true && minigame.kingsMov.length == 0)
            {
                minigame.mate = true;
            }
        }
        else
        {
            if (minigame.aiCheck == true && minigame.kingsMov.length == 0)
            {
                minigame.aiMate = true;
            }
        }
    };

    this.isSquareAttacked = function(color, square, bord)
    {
        var matCol;
        if (color == true)
        {
            var matCol = "w";
        }
        else
        {
            var matCol = "b";
        }
        var squar = square;
        minigame.enPassant = -1;
        minigame.chsMov = [];
        var isAtked = false;

        for (var klii = 0; klii < bord.length; klii++)
        {
            var moovz = [];
            if (bord[klii].material[0] != matCol && !bord[klii].material.includes("Pawn") && bord[klii].material != "none")
            {
                moovz = this.chessMoves(bord[klii], bord, true);
                for (var kloo = 0; kloo < moovz.length; kloo++)
                {
                    if (moovz[kloo].X == squar.X && moovz[kloo].Y == squar.Y)
                    {
                        isAtked = true;
                    }
                }
            }
            else if (bord[klii].material[0] != matCol && bord[klii].material.includes("Pawn")) {
                minigame.chsMov = [];
                if (bord[klii].material[0] == "w")
                {
                    this.takeMove(bord[klii].X - 1, bord[klii].Y + 1, bord[klii].material[0], bord);
                    this.takeMove(bord[klii].X + 1, bord[klii].Y + 1, bord[klii].material[0], bord);
                }
                else
                {
                    this.takeMove(bord[klii].X - 1, bord[klii].Y - 1, bord[klii].material[0], bord);
                    this.takeMove(bord[klii].X + 1, bord[klii].Y - 1, bord[klii].material[0], bord);
                }
                for (var kloo = 0; kloo < minigame.chsMov.length; kloo++)
                {
                    if (minigame.chsMov[kloo].X == squar.X && minigame.chsMov[kloo].Y == squar.Y)
                    {
                        isAtked = true;
                    }
                }
            }
        }

        return isAtked;
    };

    this.chessMoves = function(piece, bord, king)
    {
        var matType = piece.material.slice(1);
        var matCol = piece.material[0];
        minigame.enPassant = -1;
        minigame.chsMov = [];
        if (matType == "Pawn")
        {
            if (matCol == "b")
            {
                if (piece.Y == 7)
                {
                    this.pawnMove(piece.X, piece.Y - 1, bord);
                    this.pawnMove(piece.X, piece.Y - 2, bord, true, false);
                }
                else
                {
                    if (piece.Y >= 2)
                    {
                        this.pawnMove(piece.X, piece.Y - 1, bord);

                        if (piece.Y == 4) //En Passant
                        {
                            for (var kli = 0; kli < bord.length; kli++)
                            {
                                if (bord[kli].X == piece.X + 1 && bord[kli].Y == 4 && matCol != bord[kli].material[0] && bord[kli].material.includes("Pawn") && minigame.doubleSquare.X == bord[kli].X && minigame.doubleSquare.Y == bord[kli].Y)
                                {
                                    minigame.enPassant = bord[kli];
                                    this.pawnMove(piece.X + 1, piece.Y - 1, bord);
                                    minigame.enPassant = -1;
                                }
                                else if (bord[kli].X == piece.X - 1 && bord[kli].Y == 4 && matCol != bord[kli].material[0] && bord[kli].material.includes("Pawn") && minigame.doubleSquare.X == bord[kli].X && minigame.doubleSquare.Y == bord[kli].Y)
                                {
                                    minigame.enPassant = bord[kli];
                                    this.pawnMove(piece.X - 1, piece.Y - 1, bord);
                                    minigame.enPassant = -1;
                                }
                            }
                        }
                    }
                }

                this.pawnTake(piece.X - 1, piece.Y - 1, matCol, bord, king);
                this.pawnTake(piece.X + 1, piece.Y - 1, matCol, bord, king);
            }
            else
            {
                if (piece.Y == 2)
                {
                    this.pawnMove(piece.X, piece.Y + 1, bord);
                    this.pawnMove(piece.X, piece.Y + 2, bord, true, true);
                }
                else
                {
                    if (piece.Y <= 7)
                    {
                        this.pawnMove(piece.X, piece.Y + 1, bord);

                        if (piece.Y == 5) //En Passant
                        {
                            for (var kli = 0; kli < bord.length; kli++)
                            {
                                if (bord[kli].X == piece.X + 1 && bord[kli].Y == 5 && matCol != bord[kli].material[0] && bord[kli].material.includes("Pawn") && minigame.doubleSquare.X == bord[kli].X && minigame.doubleSquare.Y == bord[kli].Y)
                                {
                                    minigame.enPassant = bord[kli];
                                    this.pawnMove(piece.X + 1, piece.Y + 1, bord);
                                    minigame.enPassant = -1;
                                }
                                else if (bord[kli].X == piece.X - 1 && bord[kli].Y == 5 && matCol != bord[kli].material[0] && bord[kli].material.includes("Pawn") && minigame.doubleSquare.X == bord[kli].X && minigame.doubleSquare.Y == bord[kli].Y)
                                {
                                    minigame.enPassant = bord[kli];
                                    this.pawnMove(piece.X - 1, piece.Y + 1, bord);
                                    minigame.enPassant = -1;
                                }
                            }
                        }
                    }
                }

                this.pawnTake(piece.X - 1, piece.Y + 1, matCol, bord, king);
                this.pawnTake(piece.X + 1, piece.Y + 1, matCol, bord, king);
            }
        }
        else if (matType == "Bishop")
        {
            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }
        }
        else if (matType == "Knight")
        {
            this.takeMove(piece.X + 2, piece.Y + 1, matCol, bord);
            this.takeMove(piece.X + 2, piece.Y - 1, matCol, bord);
            this.takeMove(piece.X + 1, piece.Y + 2, matCol, bord);
            this.takeMove(piece.X - 1, piece.Y + 2, matCol, bord);
            this.takeMove(piece.X - 2, piece.Y + 1, matCol, bord);
            this.takeMove(piece.X - 2, piece.Y - 1, matCol, bord);
            this.takeMove(piece.X - 1, piece.Y - 2, matCol, bord);
            this.takeMove(piece.X + 1, piece.Y - 2, matCol, bord);

            if (king != true)
            {
                for (var klooo = 0; klooo < bord.length; klooo++)
                {
                    for (var kloo = minigame.chsMov.length - 1; kloo >= 0; kloo--)
                    {
                        if (minigame.chsMov[kloo].X == bord[klooo].X && minigame.chsMov[kloo].Y == bord[klooo].Y && bord[klooo].material[0] == matCol)
                        {
                            minigame.chsMov.splice(kloo, 1);
                            break;
                        }
                    }
                }
            }
        }
        else if (matType == "Rook")
        {
            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y)
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y)
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y, matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y)
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y)
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y, matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X, piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X, piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }
        }
        else if (matType == "Inquisitor")
        {
            for (var kloo = 0; kloo < 2; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 2; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 2; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 2; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 3; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X, piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 3; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X, piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }
        }
        else if (matType == "Queen")
        {
            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y)
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y)
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y, matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y)
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y)
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y, matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X, piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 8; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1) && king != true || king == true && !bord[klo].material.includes("King") && bord[klo].material != "none" && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X, piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }
        }
        else if (matType == "King")
        {
            //castling
            var kingEligible = false;
            var queensideRook = false;
            var kingsideRook = false;
            var queensideClear = false;
            var kingsideClear = false;
            if (king != true)
            {
                if (minigame.col == true && minigame.turn == true || minigame.col == false && minigame.turn == false)
                {
                    //is the king elegible to castle based on having moved already or not
                    for (var klo = 0; klo < bord.length; klo++)
                    {
                        if (bord[klo].material == "wKing" && bord[klo].moved != true)
                        {
                            kingEligible = true;
                            break;
                        }
                    }

                    //if so, then is it eligible based on whether or not the rook in question has moved
                    if (kingEligible == true)
                    {
                        for (var klo = 0; klo < bord.length; klo++)
                        {
                            if (bord[klo].square == "H1" && bord[klo].material == "wRook" && bord[klo].moved != true)
                            {
                                kingsideRook = true;
                            }
                            else if (bord[klo].square == "A1" && bord[klo].material == "wRook" && bord[klo].moved != true)
                            {
                                queensideRook = true;
                            }
                        }
                    }

                    if (kingsideRook == true)
                    {
                        var hitsos = 0;
                        for (var klo = 0; klo < bord.length; klo++)
                        {
                            if (bord[klo].square == "G1" && bord[klo].material == "none" && this.isSquareAttacked(true, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                            else if (bord[klo].square == "F1" && bord[klo].material == "none" && this.isSquareAttacked(true, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                            else if (bord[klo].square == "E1" && this.isSquareAttacked(true, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                        }
                        if (hitsos >= 3)
                        {
                            kingsideClear = true;
                        }
                    }
                    if (queensideRook == true)
                    {
                        var hitsos = 0;
                        for (var klo = 0; klo < bord.length; klo++)
                        {
                            if (bord[klo].square == "B1" && bord[klo].material == "none" && this.isSquareAttacked(true, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                            else if (bord[klo].square == "C1" && bord[klo].material == "none" && this.isSquareAttacked(true, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                            else if (bord[klo].square == "D1" && bord[klo].material == "none" && this.isSquareAttacked(true, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                            else if (bord[klo].square == "E1" && this.isSquareAttacked(true, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                        }
                        if (hitsos >= 4)
                        {
                            queensideClear = true;
                        }
                    }

                    if (kingsideClear)
                    {
                        this.takeMove(piece.X + 2, piece.Y, matCol, bord, "kingside");
                    }
                    if (queensideClear)
                    {
                        this.takeMove(piece.X - 2, piece.Y, matCol, bord, "queenside");
                    }
                }
                else if (minigame.col == false && minigame.turn == true || minigame.col == true && minigame.turn == false)
                {
                    //is the king elegible to castle based on having moved already or not
                    for (var klo = 0; klo < bord.length; klo++)
                    {
                        if (bord[klo].material == "bKing" && bord[klo].moved != true)
                        {
                            kingEligible = true;
                            break;
                        }
                    }

                    //if so, then is it eligible based on whether or not the rook in question has moved
                    if (kingEligible == true)
                    {
                        for (var klo = 0; klo < bord.length; klo++)
                        {
                            if (bord[klo].square == "H8" && bord[klo].material == "bRook" && bord[klo].moved != true)
                            {
                                kingsideRook = true;
                            }
                            else if (bord[klo].square == "A8" && bord[klo].material == "bRook" && bord[klo].moved != true)
                            {
                                queensideRook = true;
                            }
                        }
                    }

                    if (kingsideRook == true)
                    {
                        var hitsos = 0;
                        for (var klo = 0; klo < bord.length; klo++)
                        {
                            if (bord[klo].square == "G8" && bord[klo].material == "none" && this.isSquareAttacked(false, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                            else if (bord[klo].square == "F8" && bord[klo].material == "none" && this.isSquareAttacked(false, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                            else if (bord[klo].square == "E8" && this.isSquareAttacked(false, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                        }
                        if (hitsos >= 3)
                        {
                            kingsideClear = true;
                        }
                    }
                    if (queensideRook == true)
                    {
                        var hitsos = 0;
                        for (var klo = 0; klo < bord.length; klo++)
                        {
                            if (bord[klo].square == "B8" && bord[klo].material == "none" && this.isSquareAttacked(false, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                            else if (bord[klo].square == "C8" && bord[klo].material == "none" && this.isSquareAttacked(false, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                            else if (bord[klo].square == "D8" && bord[klo].material == "none" && this.isSquareAttacked(false, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                            else if (bord[klo].square == "E8" && this.isSquareAttacked(false, bord[klo], bord) != true)
                            {
                                hitsos += 1;
                            }
                        }
                        if (hitsos >= 4)
                        {
                            queensideClear = true;
                        }
                    }

                    if (kingsideClear)
                    {
                        this.takeMove(piece.X + 2, piece.Y, matCol, bord, "kingside");
                    }
                    if (queensideClear)
                    {
                        this.takeMove(piece.X - 2, piece.Y, matCol, bord, "queenside");
                    }
                }
            }


            for (var kloo = 0; kloo < 1; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 1; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 1; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 1; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 1; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y)
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + (kloo + 1) && bord[klo].Y == piece.Y)
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + (kloo + 1), piece.Y, matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 1; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y)
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X + ((kloo + 1) * -1) && bord[klo].Y == piece.Y)
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X + ((kloo + 1) * -1), piece.Y, matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 1; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + (kloo + 1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X, piece.Y + (kloo + 1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            for (var kloo = 0; kloo < 1; kloo++)
            {
                var chsBlockup = false;
                var chsNoGo = false;
                for (var klo = 0; klo < bord.length; klo++)
                {
                    if (king != true && bord[klo].material[0] == matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsNoGo = true;
                    }
                    if (bord[klo].material != "none" && bord[klo].material[0] != matCol && bord[klo].X == piece.X && bord[klo].Y == piece.Y + ((kloo + 1) * -1))
                    {
                        chsBlockup = true;
                    }
                }
                if (chsNoGo != true)
                {
                    this.takeMove(piece.X, piece.Y + ((kloo + 1) * -1), matCol, bord);
                }
                if (chsBlockup == true || chsNoGo == true)
                {
                    break;
                }
            }

            if (king != true)
            {
                var kingsMoves = minigame.chsMov;
                for (var klii = 0; klii < bord.length; klii++)
                {
                    var moovz = [];
                    if (bord[klii].material[0] != matCol && !bord[klii].material.includes("Pawn") && bord[klii].material != "none")
                    {
                        moovz = this.chessMoves(bord[klii], bord, true);
                        for (var kloo = 0; kloo < moovz.length; kloo++)
                        {
                            for (var klaa = kingsMoves.length - 1; klaa >= 0; klaa--)
                            {
                                if (moovz[kloo].X == kingsMoves[klaa].X && moovz[kloo].Y == kingsMoves[klaa].Y)
                                {
                                    kingsMoves.splice(klaa, 1);
                                }
                            }
                        }
                    }
                    else if (bord[klii].material[0] != matCol && bord[klii].material.includes("Pawn"))
                    {
                        minigame.chsMov = [];
                        if (bord[klii].material[0] == "w")
                        {
                            this.takeMove(bord[klii].X - 1, bord[klii].Y + 1, bord[klii].material[0], bord);
                            this.takeMove(bord[klii].X + 1, bord[klii].Y + 1, bord[klii].material[0], bord);
                        }
                        else
                        {
                            this.takeMove(bord[klii].X - 1, bord[klii].Y - 1, bord[klii].material[0], bord);
                            this.takeMove(bord[klii].X + 1, bord[klii].Y - 1, bord[klii].material[0], bord);
                        }
                        for (var kloo = 0; kloo < minigame.chsMov.length; kloo++)
                        {
                            for (var klaa = kingsMoves.length - 1; klaa >= 0; klaa--)
                            {
                                if (minigame.chsMov[kloo].X == kingsMoves[klaa].X && minigame.chsMov[kloo].Y == kingsMoves[klaa].Y)
                                {
                                    kingsMoves.splice(klaa, 1);
                                }
                            }
                        }
                    }
                }
                minigame.chsMov = kingsMoves;
            }
        }
        return minigame.chsMov;
    }
    this.drawChess = function(piece, x, y, bw)
    {
        var matType = piece.material;
        if (matType == "bPawn")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 208, 266, 29, 27, -1/2 * 29 * minigame.chessScale, -1/2 * 27 * minigame.chessScale, 29 * minigame.chessScale * 1.1, 27 * minigame.chessScale * 1.1);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 195, 102, 29, 27, -1/2 * 29 * minigame.chessScale, -1/2 * 27 * minigame.chessScale, 29 * minigame.chessScale * 1.1, 27 * minigame.chessScale * 1.1);
                XXX.restore();
            }
        }
        else if (matType == "bKnight")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                if (minigame.col == true)
                {
                    XXX.rotate(Math.PI)
                }
                XXX.drawImage(ches, 325, 262, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.15, 33 * minigame.chessScale * 1.15);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                if (minigame.col == true)
                {
                    XXX.rotate(Math.PI)
                }
                XXX.drawImage(ches, 311, 98, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.15, 33 * minigame.chessScale * 1.15);
                XXX.restore();
            }
        }
        else if (matType == "bBishop")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 243, 263, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.2, 33 * minigame.chessScale * 1.2);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 229, 99, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.2, 33 * minigame.chessScale * 1.2);
                XXX.restore();
            }
        }
        else if (matType == "bRook")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 283, 263, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.1, 33 * minigame.chessScale * 1.1);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 269, 98, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.1, 33 * minigame.chessScale * 1.1);
                XXX.restore();
            }
        }
        else if (matType == "bQueen")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 101, 258, 45, 41, -1/2 * 45 * minigame.chessScale, -1/2 * 41 * minigame.chessScale, 45 * minigame.chessScale * 1.1, 41 * minigame.chessScale * 1.1);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 87, 94, 45, 41, -1/2 * 45 * minigame.chessScale, -1/2 * 41 * minigame.chessScale, 45 * minigame.chessScale * 1.1, 41 * minigame.chessScale * 1.1);
                XXX.restore();
            }
        }
        else if (matType == "bKing")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 151, 260, 45, 41, -1/2 * 45 * minigame.chessScale, -1/2 * 41 * minigame.chessScale, 45 * minigame.chessScale * 1.1, 41 * minigame.chessScale * 1.1);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 137, 96, 45, 41, -1/2 * 45 * minigame.chessScale, -1/2 * 41 * minigame.chessScale, 45 * minigame.chessScale * 1.1, 41 * minigame.chessScale * 1.1);
                XXX.restore();
            }
        }
        else if (matType == "bInquisitor")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 370, 260, 39, 38, -1/2 * 39 * minigame.chessScale, -1/2 * 38 * minigame.chessScale, 39 * minigame.chessScale * 1.15, 38 * minigame.chessScale * 1.15);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 356, 95, 39, 38, -1/2 * 39 * minigame.chessScale, -1/2 * 38 * minigame.chessScale, 39 * minigame.chessScale * 1.15, 38 * minigame.chessScale * 1.15);
                XXX.restore();
            }
        }
        else if (matType == "wPawn")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 208, 205, 29, 27, -1/2 * 29 * minigame.chessScale, -1/2 * 27 * minigame.chessScale, 29 * minigame.chessScale * 1.1, 27 * minigame.chessScale * 1.1);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 195, 28, 29, 27, -1/2 * 29 * minigame.chessScale, -1/2 * 27 * minigame.chessScale, 29 * minigame.chessScale * 1.1, 27 * minigame.chessScale * 1.1);
                XXX.restore();
            }
        }
        else if (matType == "wKnight")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                if (minigame.col == false)
                {
                    XXX.rotate(Math.PI)
                }
                XXX.drawImage(ches, 324, 201, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.15, 33 * minigame.chessScale * 1.15);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                if (minigame.col == false)
                {
                    XXX.rotate(Math.PI)
                }
                XXX.drawImage(ches, 311, 24, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.15, 33 * minigame.chessScale * 1.15);
                XXX.restore();
            }
        }
        else if (matType == "wBishop")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 242, 202, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.2, 33 * minigame.chessScale * 1.2);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 229, 25, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.2, 33 * minigame.chessScale * 1.2);
                XXX.restore();
            }
        }
        else if (matType == "wRook")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 282, 202, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.1, 33 * minigame.chessScale * 1.1);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 269, 25, 36, 33, -1/2 * 36 * minigame.chessScale, -1/2 * 33 * minigame.chessScale, 36 * minigame.chessScale * 1.1, 33 * minigame.chessScale * 1.1);
                XXX.restore();
            }
        }
        else if (matType == "wQueen")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 100, 197, 45, 41, -1/2 * 45 * minigame.chessScale, -1/2 * 41 * minigame.chessScale, 45 * minigame.chessScale * 1.1, 41 * minigame.chessScale * 1.1);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 87, 20, 45, 41, -1/2 * 45 * minigame.chessScale, -1/2 * 41 * minigame.chessScale, 45 * minigame.chessScale * 1.1, 41 * minigame.chessScale * 1.1);
                XXX.restore();
            }
        }
        else if (matType == "wKing")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 150, 200, 45, 41, -1/2 * 45 * minigame.chessScale, -1/2 * 41 * minigame.chessScale, 45 * minigame.chessScale * 1.1, 41 * minigame.chessScale * 1.1);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 137, 22, 45, 41, -1/2 * 45 * minigame.chessScale, -1/2 * 41 * minigame.chessScale, 45 * minigame.chessScale * 1.1, 41 * minigame.chessScale * 1.1);
                XXX.restore();
            }
        }
        else if (matType == "wInquisitor")
        {
            if (bw)
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 369, 199, 39, 38, -1/2 * 39 * minigame.chessScale, -1/2 * 38 * minigame.chessScale, 39 * minigame.chessScale * 1.15, 38 * minigame.chessScale * 1.15);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(x, y);
                XXX.drawImage(ches, 356, 21, 39, 38, -1/2 * 39 * minigame.chessScale, -1/2 * 38 * minigame.chessScale, 39 * minigame.chessScale * 1.15, 38 * minigame.chessScale * 1.15);
                XXX.restore();
            }
        }
    }
}

function Tabla(bord)
{
    this.tabla = JSON.parse(JSON.stringify(bord));
}

function WagerCoin(xx, yy)
{
    this.origin = new Date().getTime();
    this.X = xx;
    this.Y = yy;

    this.drawCoin = function()
    {
        for (var miCoin = 0; miCoin < minigame.wagerCoins.length; miCoin++)
        {
            var distToWCoin = (this.X - minigame.wagerCoins[miCoin].X)*(this.X - minigame.wagerCoins[miCoin].X)+(this.Y - minigame.wagerCoins[miCoin].Y)*(this.Y - minigame.wagerCoins[miCoin].Y);
            if (distToWCoin < 40*40 && minigame.wagerCoins[miCoin] !== this)
            {
                if (minigame.wagerCoins[miCoin].origin > this.origin)
                {
                    minigame.wagerCoins[miCoin].X = 50 + 950 * Math.random();
                    minigame.wagerCoins[miCoin].Y = 50 + 400 * Math.random();
                }
                else
                {
                    this.X = 50 + 950 * Math.random();
                    this.Y = 50 + 400 * Math.random();
                }
            }
        }
        XXX.drawImage(slug, 907, 303, 52, 44, this.X - 1/2 * 52 * 1, this.Y - 1/2 * 44 * 1, 52 * 1, 44 * 1);
    };
}

function blackJack()
{
    //draw background
    XXX.drawImage(cardtable, 0, 0);
    LXX.drawImage(cardtable, 0, 0);

    if (minigame.startGame == true && minigame.wagered == false)
    {
        for (var mi = 0; mi < minigame.wagerCoins.length; mi++)
        {
            minigame.wagerCoins[mi].drawCoin();
        }

        if (mouseX > 1137 && mouseX < 1263 && mouseY > 50 && mouseY < 250)
        {
            XXX.beginPath();
            XXX.fillStyle = "black";
            XXX.font = "Bold 22px Book Antiqua";
            XXX.textAlign = "center";
            XXX.fillText("Play 21", 1200, 255);
            XXX.fill();

            XXX.beginPath();
            XXX.fillStyle = "red";
            XXX.font = "Bold 21px Book Antiqua";
            XXX.textAlign = "center";
            XXX.fillText("Play 21", 1200, 255);
            XXX.fill();

            if (clicked == true)
            {
                clicked = false;
                minigame.wagered = true;
                take("coins", minigame.wager);
            }
        }
        else
        {
            XXX.beginPath();
            XXX.fillStyle = "black";
            XXX.font = "Bold 21px Book Antiqua";
            XXX.textAlign = "center";
            XXX.fillText("Play 21", 1200, 255);
            XXX.fill();

            XXX.beginPath();
            XXX.fillStyle = "red";
            XXX.font = "Bold 20px Book Antiqua";
            XXX.textAlign = "center";
            XXX.fillText("Play 21", 1200, 255);
            XXX.fill();
        }

        if (lMouseX > 675 && lMouseX < 725)
        {
            if (shiftKey && minigame.wager <= minigame.wagerMAX - 5 && have("coins", (minigame.wager + 5)))
            {
                LXX.drawImage(slug, 907, 303, 52, 44, 700 - 1/2 * 52 * 1, 40 -1/2 * 44 * 1, 52 * 1, 44 * 1);

                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 22px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText("Wager x 5", 700, 49);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 21px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText("Wager x 5", 700, 49);
                LXX.fill();

                if (clicked == true)
                {
                    clicked = false;
                    var wagAmt = minigame.wagerMAX - minigame.wager;
                    for (var mi = 0; mi < 5; mi++)
                    {
                        minigame.wagerCoins.push(new WagerCoin(50 + 950 * Math.random(), 50 + 400 * Math.random()));
                    }
                    minigame.wager += 5;
                }
            }
            else
            {
                LXX.drawImage(slug, 907, 303, 52, 44, 700 - 1/2 * 52 * 1, 40 -1/2 * 44 * 1, 52 * 1, 44 * 1);

                if (minigame.wager < minigame.wagerMAX)
                {
                    if (have("coins", (minigame.wager + 1)))
                    {
                        LXX.beginPath();
                        LXX.fillStyle = "black";
                        LXX.font = "Bold 22px Book Antiqua";
                        LXX.textAlign = "center";
                        LXX.fillText("Wager x 1", 700, 49);
                        LXX.fill();

                        LXX.beginPath();
                        LXX.fillStyle = "red";
                        LXX.font = "Bold 21px Book Antiqua";
                        LXX.textAlign = "center";
                        LXX.fillText("Wager x 1", 700, 49);
                        LXX.fill();

                        if (clicked == true)
                        {
                            clicked = false;

                            minigame.wagerCoins.push(new WagerCoin(50 + 950 * Math.random(), 50 + 400 * Math.random()));
                            minigame.wager += 1;
                        }
                    }
                    else
                    {
                        LXX.beginPath();
                        LXX.fillStyle = "black";
                        LXX.font = "Bold 22px Book Antiqua";
                        LXX.textAlign = "center";
                        LXX.fillText("Not Enough Coins", 700, 49);
                        LXX.fill();

                        LXX.beginPath();
                        LXX.fillStyle = "red";
                        LXX.font = "Bold 21px Book Antiqua";
                        LXX.textAlign = "center";
                        LXX.fillText("Not Enough Coins", 700, 49);
                        LXX.fill();
                    }
                }
                else
                {
                    LXX.beginPath();
                    LXX.fillStyle = "black";
                    LXX.font = "Bold 22px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("Wager Cap Reached", 700, 49);
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "red";
                    LXX.font = "Bold 21px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("Wager Cap Reached", 700, 49);
                    LXX.fill();
                }
            }
        }
        else
        {
            LXX.drawImage(slug, 907, 303, 52, 44, 700 - 1/2 * 52 * 1, 40 -1/2 * 44 * 1, 52 * 1, 44 * 1);

            LXX.beginPath();
            LXX.fillStyle = "black";
            LXX.font = "Bold 21px Book Antiqua";
            LXX.textAlign = "center";
            LXX.fillText("Wager", 700, 49);
            LXX.fill();

            LXX.beginPath();
            LXX.fillStyle = "red";
            LXX.font = "Bold 20px Book Antiqua";
            LXX.textAlign = "center";
            LXX.fillText("Wager", 700, 49);
            LXX.fill();
        }
    }
    else if (minigame.special.length < 1 && minigame.startGame == true)
    {
        if (new Date().getTime() - minigame.drawKeepTime > 1100)
        {
            minigame.drawKeepTime = new Date().getTime();

            //initial deal to player
            minigame.special.push(minigame.deck[minigame.deck.length - 1]);
            minigame.deck.splice(minigame.deck.length - 1, 1);
        }
    }
    else if (minigame.aiSpecial.length < 1 && minigame.startGame == true)
    {
        if (new Date().getTime() - minigame.drawKeepTime > 1100)
        {
            minigame.drawKeepTime = new Date().getTime();

            //initial deal to ai
            minigame.aiSpecial.push(minigame.deck[minigame.deck.length - 1]);
            minigame.deck.splice(minigame.deck.length - 1, 1);
        }
    }
    else if (minigame.inplay.length < 1 && minigame.startGame == true)
    {
        if (new Date().getTime() - minigame.drawKeepTime > 1100)
        {
            minigame.drawKeepTime = new Date().getTime();

            //initial deal to player
            minigame.inplay.push(minigame.deck[minigame.deck.length - 1]);
            minigame.inplay[minigame.inplay.length - 1].faceup = true;
            minigame.deck.splice(minigame.deck.length - 1, 1);
        }
    }
    else if (minigame.aiInplay.length < 1 && minigame.startGame == true)
    {
        if (new Date().getTime() - minigame.drawKeepTime > 1100)
        {
            minigame.drawKeepTime = new Date().getTime();

            //initial deal to ai
            minigame.aiInplay.push(minigame.deck[minigame.deck.length - 1]);
            minigame.aiInplay[minigame.inplay.length - 1].faceup = true;
            minigame.deck.splice(minigame.deck.length - 1, 1);
        }
    }
    else if (minigame.startGame == true)
    {
        if (new Date().getTime() - minigame.drawKeepTime > 1100)
        {
            minigame.drawKeepTime = new Date().getTime();

            minigame.startGame = false;
            minigame.special[0].faceup = true;
            minigame.turn = true;
        }
    }

    //set card values
    for (var mi = 0; mi < minigame.aiInplay.length; mi++)
    {
        if (minigame.aiInplay[mi].value > 10)
        {
            minigame.aiInplay[mi].value = 10;
        }
    }
    for (var mi = 0; mi < minigame.inplay.length; mi++)
    {
        if (minigame.inplay[mi].value > 10)
        {
            minigame.inplay[mi].value = 10;
        }
    }

    if (minigame.aiSpecial.length > 0)
    {
        if (minigame.aiSpecial[0].value > 10)
        {
            minigame.aiSpecial[0].value = 10;
        }
    }
    if (minigame.special.length > 0)
    {
        if (minigame.special[0].value > 10)
        {
            minigame.special[0].value = 10;
        }
    }

    //calculate hand value
    var roundValue = 0;
    var knights = 0;
    for (var mi = 0; mi < minigame.inplay.length; mi++)
    {
        if (minigame.inplay[mi].number != "Knight")
        {
            roundValue += minigame.inplay[mi].value;
        }
        else
        {
            knights += 1;
        }
    }

    if (minigame.special.length > 0)
    {
        if (minigame.special[0].number != "Knight")
        {
            roundValue += minigame.special[0].value;
        }
        else
        {
            knights += 1;
        }
    }

    if (knights == 1)
    {
        if (roundValue + 11 <= 21)
        {
            roundValue += 11;
        }
        else
        {
            roundValue += 1;
        }
    }
    else if (knights > 1)
    {
        if (roundValue + 11 <= 21)
        {
            roundValue += 11;
        }
        else
        {
            roundValue += 1;
        }

        roundValue += (knights - 1);
    }

    if (roundValue > 21)
    {
        minigame.bust = true;
        minigame.score = 0;
    }
    else
    {
        minigame.score = roundValue;
    }

    //calculate ai hand value
    var aiRoundValue = 0;
    var aiKnights = 0;
    for (var mi = 0; mi < minigame.aiInplay.length; mi++)
    {
        if (minigame.aiInplay[mi].number != "Knight")
        {
            aiRoundValue += minigame.aiInplay[mi].value;
        }
        else
        {
            aiKnights += 1;
        }
    }

    if (minigame.aiSpecial.length > 0)
    {
        if (minigame.aiSpecial[0].number != "Knight")
        {
            aiRoundValue += minigame.aiSpecial[0].value;
        }
        else
        {
            aiKnights += 1;
        }
    }

    if (aiKnights == 1)
    {
        if (aiRoundValue + 11 <= 21)
        {
            aiRoundValue += 11;
        }
        else
        {
            aiRoundValue += 1;
        }
    }
    else if (aiKnights > 1)
    {
        if (aiRoundValue + 11 <= 21)
        {
            aiRoundValue += 11;
        }
        else
        {
            aiRoundValue += 1;
        }

        aiRoundValue += (aiKnights - 1);
    }

    if (aiRoundValue > 21)
    {
        minigame.aiBust = true;
        minigame.aiScore = 0;
    }
    else
    {
        minigame.aiScore = aiRoundValue;
    }

    if (minigame.turn == true)
    {
        if (minigame.bust != true)
        {
            if (lMouseX > 25 && lMouseX < 75)
            {
                LXX.drawImage(cards, 815, 1249, 146, 136, 50 - 1/2 * 146 * 0.55, 40 -1/2 * 136 * 0.55, 146 * 0.55, 136 * 0.55);

                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 22px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText("Stand", 50, 49);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 21px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText("Stand", 50, 49);
                LXX.fill();

                if (clicked == true)
                {
                    clicked = false;
                    minigame.turn = false;
                    minigame.drawKeepTime = new Date().getTime();
                }
            }
            else
            {
                LXX.drawImage(cards, 815, 1249, 146, 136, 50 - 1/2 * 146 * 0.5, 40 -1/2 * 136 * 0.5, 146 * 0.5, 136 * 0.5);
                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 20px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText("Stand", 50, 49);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 19px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText("Stand", 50, 49);
                LXX.fill();
            }

            if (mouseX > 1137 && mouseX < 1263 && mouseY > 50 && mouseY < 250)
            {
                XXX.beginPath();
                XXX.fillStyle = "black";
                XXX.font = "Bold 22px Book Antiqua";
                XXX.textAlign = "center";
                XXX.fillText("Hit", 1200, 255);
                XXX.fill();

                XXX.beginPath();
                XXX.fillStyle = "red";
                XXX.font = "Bold 21px Book Antiqua";
                XXX.textAlign = "center";
                XXX.fillText("Hit", 1200, 255);
                XXX.fill();

                if (clicked == true)
                {
                    clicked = false;

                    minigame.inplay.push(minigame.deck[minigame.deck.length - 1]);
                    minigame.inplay[minigame.inplay.length - 1].faceup = true;
                    minigame.deck.splice(minigame.deck.length - 1, 1);
                }
            }
            else
            {
                XXX.beginPath();
                XXX.fillStyle = "black";
                XXX.font = "Bold 21px Book Antiqua";
                XXX.textAlign = "center";
                XXX.fillText("Hit", 1200, 255);
                XXX.fill();

                XXX.beginPath();
                XXX.fillStyle = "red";
                XXX.font = "Bold 20px Book Antiqua";
                XXX.textAlign = "center";
                XXX.fillText("Hit", 1200, 255);
                XXX.fill();
            }
        }
        else
        {
            minigame.turn = false;
        }
    }
    else if (minigame.startGame == false)
    {
        if (minigame.endgame != true)
        {
            var playerShownValue = 0;

            for (var mi = 0; mi < minigame.inplay.length; mi++)
            {
                if (minigame.inplay[mi].number != "Knight")
                {
                    playerShownValue += minigame.inplay[mi].value;
                }
            }

            if (knights == 1)
            {
                if (playerShownValue + 11 <= 21)
                {
                    playerShownValue += 11;
                }
                else
                {
                    playerShownValue += 1;
                }
            }
            else if (knights > 1)
            {
                if (playerShownValue + 11 <= 21)
                {
                    playerShownValue += 11;
                }
                else
                {
                    playerShownValue += 1;
                }

                playerShownValue += (knights - 1);
            }

            if (minigame.ai == 1) //refuses to stand by
            {
                if (new Date().getTime() - minigame.drawKeepTime > 1100)
                {
                    minigame.drawKeepTime = new Date().getTime();

                    if (aiRoundValue < 10 + Math.min(11, playerShownValue) && minigame.bust != true)
                    {
                        minigame.aiInplay.push(minigame.deck[minigame.deck.length - 1]);
                        minigame.aiInplay[minigame.aiInplay.length - 1].faceup = true;
                        minigame.deck.splice(minigame.deck.length - 1, 1);
                    }
                    else
                    {
                        minigame.aiSpecial[0].faceup = true;
                        minigame.endgame = true;
                    }
                }
            }
            else if (minigame.ai == 2) //standing by defence
            {
                if (new Date().getTime() - minigame.drawKeepTime > 1100)
                {
                    minigame.drawKeepTime = new Date().getTime();

                    if (aiRoundValue < 15 && minigame.bust != true)
                    {
                        minigame.aiInplay.push(minigame.deck[minigame.deck.length - 1]);
                        minigame.aiInplay[minigame.aiInplay.length - 1].faceup = true;
                        minigame.deck.splice(minigame.deck.length - 1, 1);
                    }
                    else if (aiRoundValue < 17 && aiKnights == 1 && minigame.bust != true)
                    {
                        minigame.aiInplay.push(minigame.deck[minigame.deck.length - 1]);
                        minigame.aiInplay[minigame.aiInplay.length - 1].faceup = true;
                        minigame.deck.splice(minigame.deck.length - 1, 1);
                    }
                    else
                    {
                        minigame.aiSpecial[0].faceup = true;
                        minigame.endgame = true;
                    }
                }
            }
            else //dealer style
            {
                if (new Date().getTime() - minigame.drawKeepTime > 1100)
                {
                    minigame.drawKeepTime = new Date().getTime();

                    if (aiRoundValue < 17 && minigame.bust != true)
                    {
                        minigame.aiInplay.push(minigame.deck[minigame.deck.length - 1]);
                        minigame.aiInplay[minigame.aiInplay.length - 1].faceup = true;
                        minigame.deck.splice(minigame.deck.length - 1, 1);
                    }
                    else if (aiRoundValue < 18 && aiKnights == 1 && minigame.bust != true)
                    {
                        minigame.aiInplay.push(minigame.deck[minigame.deck.length - 1]);
                        minigame.aiInplay[minigame.aiInplay.length - 1].faceup = true;
                        minigame.deck.splice(minigame.deck.length - 1, 1);
                    }
                    else
                    {
                        minigame.aiSpecial[0].faceup = true;
                        minigame.endgame = true;
                    }
                }
            }
        }

        if (minigame.endgame == true)
        {
            if (new Date().getTime() - minigame.drawKeepTime > 250 && minigame.endgameTic == 0)
            {
                minigame.drawKeepTime = new Date().getTime();
                if (minigame.finalScore < minigame.score)
                {
                    minigame.finalScore += 1;
                }

                if (minigame.aiFinalScore < minigame.aiScore)
                {
                    minigame.aiFinalScore += 1;
                }

                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "gold";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();


                LXX.beginPath();
                LXX.fillStyle = "white";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                if (minigame.score == minigame.finalScore && minigame.aiScore == minigame.aiFinalScore)
                {
                    minigame.endgameTic += 1;
                }
            }
            else if (minigame.endgameTic == 0)
            {
                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "gold";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();


                LXX.beginPath();
                LXX.fillStyle = "white";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();
            }

            if (new Date().getTime() - minigame.drawKeepTime > 5000 && minigame.endgameTic == 1)
            {
                minigame.drawKeepTime = new Date().getTime();

                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "gold";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();


                LXX.beginPath();
                LXX.fillStyle = "white";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                minigame.endgameTic += 1;
            }
            else if (minigame.endgameTic == 1)
            {
                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "gold";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();


                LXX.beginPath();
                LXX.fillStyle = "white";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();
            }

            if (new Date().getTime() - minigame.drawKeepTime > 6000 && minigame.endgameTic == 2)
            {
                minigame.drawKeepTime = new Date().getTime();

                if (minigame.aiFinalScore < minigame.finalScore)
                {
                    LXX.beginPath();
                    LXX.fillStyle = "black";
                    LXX.font = "Bold 31px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("You won: You take away " + minigame.wager + " coins.", 700, 50);
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "gold";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("You won: You take away " + minigame.wager + " coins.", 700, 50);
                    LXX.fill();
                }
                else if (minigame.aiFinalScore == minigame.finalScore)
                {
                    LXX.beginPath();
                    LXX.fillStyle = "black";
                    LXX.font = "Bold 31px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "white";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();
                }
                else
                {
                    LXX.beginPath();
                    LXX.fillStyle = "white";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "red";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();
                }

                minigame.endgameTic += 1;
            }
            else if (minigame.endgameTic == 2)
            {
                if (minigame.aiFinalScore < minigame.finalScore)
                {
                    LXX.beginPath();
                    LXX.fillStyle = "black";
                    LXX.font = "Bold 31px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("You won: You take away " + minigame.wager + " coins.", 700, 50);
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "gold";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("You won: You take away " + minigame.wager + " coins.", 700, 50);
                    LXX.fill();
                }
                else if (minigame.aiFinalScore == minigame.finalScore)
                {
                    LXX.beginPath();
                    LXX.fillStyle = "black";
                    LXX.font = "Bold 31px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "white";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();
                }
                else
                {
                    LXX.beginPath();
                    LXX.fillStyle = "white";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "red";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();
                }
            }

            if (minigame.endgameTic == 3)
            {
                if (minigame.aiFinalScore < minigame.finalScore && minigame.wager > 0)
                {
                    player.gamblingWinStreak21 += 1;
                    give("coins", (minigame.wager * 2));
                }
                else if (minigame.aiFinalScore == minigame.finalScore && minigame.wager > 0)
                {
                    give("coins", (minigame.wager));
                }
                else if (player.gamblingWinStreak21 >= 8 && minigame.wager >= 1/2 * minigame.wagerMAX)
                {
                    player.gamblingWinStreak21 -= 1;
                }
                else if (minigame.wager >= 1/2 * minigame.wagerMAX)
                {
                    player.gamblingWinStreak21 = 0;
                }

                minigame.endgameTic = 4;
            }

            if (minigame.endgameTic == 4)
            {
                lowBar = "information";
                gameState = "active";
                requestAnimationFrame(gameloopOfDestiny, CCC);
            }
        }
    }


    if (minigame.aiSpecial.length > 0 && minigame.aiSpecial[0].faceup != true)
    {
        for (var mi = 0; mi < minigame.aiSpecial.length; mi++)
        {
            cardDrawer(250, 225, Math.PI, 1, XXX, minigame.aiSpecial[mi]);
        }
        for (var mi = 0; mi < minigame.aiInplay.length; mi++)
        {
            cardDrawer(40 * (1 + mi) + 250, 225, Math.PI, 1, XXX, minigame.aiInplay[mi]);
        }
    }
    else
    {
        for (var mi = 0; mi < minigame.aiInplay.length; mi++)
        {
            cardDrawer(115 * (1 + mi) + 165, 225, Math.PI, 1, XXX, minigame.aiInplay[mi]);
        }
    }
    if (minigame.special.length > 0 && minigame.special[0].faceup != true)
    {
        for (var mi = 0; mi < minigame.special.length; mi++)
        {
            cardDrawer(250, 425, Math.PI, 1, XXX, minigame.special[mi]);
        }
    }
    for (var mi = 0; mi < minigame.inplay.length; mi++)
    {
        cardDrawer(115 * (1 + mi) + 165, 425, Math.PI, 1, XXX, minigame.inplay[mi]);
    }
    if (minigame.aiSpecial.length > 0 && minigame.aiSpecial[0].faceup == true)
    {
        for (var mi = 0; mi < minigame.aiSpecial.length; mi++)
        {
            cardDrawer(170, 225, Math.PI, 1, XXX, minigame.aiSpecial[mi]);
        }
    }
    if (minigame.special.length > 0 && minigame.special[0].faceup == true)
    {
        for (var mi = 0; mi < minigame.special.length; mi++)
        {
            cardDrawer(170, 425, Math.PI, 1, XXX, minigame.special[mi]);
        }
    }
    if (minigame.deck.length > 0)
    {
        cardDrawer(1200, 150, Math.PI, 1, XXX, minigame.deck[minigame.deck.length - 1]);
    }
}

function heartsAndDaggers()
{
    //draw background
    XXX.drawImage(cardtable, 0, 0);
    LXX.drawImage(cardtable, 0, 0);

    if (minigame.startGame == false && minigame.turn == true && minigame.actionTaken == true && minigame.targetingAI != true && minigame.endgame != true)
    {
        if (lMouseX > 25 && lMouseX < 75)
        {
            LXX.drawImage(cards, 815, 1249, 146, 136, 50 - 1/2 * 146 * 0.55, 40 -1/2 * 136 * 0.55, 146 * 0.55, 136 * 0.55);

            LXX.beginPath();
            LXX.fillStyle = "black";
            LXX.font = "Bold 22px Book Antiqua";
            LXX.textAlign = "center";
            LXX.fillText("End Turn", 50, 49);
            LXX.fill();

            LXX.beginPath();
            LXX.fillStyle = "red";
            LXX.font = "Bold 21px Book Antiqua";
            LXX.textAlign = "center";
            LXX.fillText("End Turn", 50, 49);
            LXX.fill();

            if (clicked == true)
            {
                clicked = false;
                minigame.turn = false;
                minigame.drawKeepTime = new Date().getTime();
                minigame.aiAction = false;
                for (var mi = minigame.inplay.length - 1; mi >= 0; mi--)
                {
                    if (minigame.inplay[mi].suit == "Daggers" && minigame.inplay[mi].number != "Knight")
                    {
                        minigame.discard.push(minigame.inplay[mi]);
                        minigame.inplay.splice(mi, 1);
                    }
                }
                for (var mi = minigame.aiInplay.length - 1; mi >= 0; mi--)
                {
                    if (minigame.aiInplay[mi].suit == "Daggers" && minigame.aiInplay[mi].number != "Knight")
                    {
                        minigame.discard.push(minigame.aiInplay[mi]);
                        minigame.aiInplay.splice(mi, 1);
                    }
                }

                if (minigame.aiSpecial.length > 0)
                {
                    if (minigame.aiSpecial[0].anti == true)
                    {
                        minigame.discard.push(minigame.aiSpecial[0]);
                        minigame.aiSpecial.splice(0, 1);
                    }
                }

                if (minigame.special.length > 0)
                {
                    if (minigame.special[0].anti == true)
                    {
                        minigame.discard.push(minigame.special[0]);
                        minigame.special.splice(0, 1);
                    }
                }
            }
        }
        else
        {
            LXX.drawImage(cards, 815, 1249, 146, 136, 50 - 1/2 * 146 * 0.5, 40 -1/2 * 136 * 0.5, 146 * 0.5, 136 * 0.5);
            LXX.beginPath();
            LXX.fillStyle = "black";
            LXX.font = "Bold 20px Book Antiqua";
            LXX.textAlign = "center";
            LXX.fillText("End Turn", 50, 49);
            LXX.fill();

            LXX.beginPath();
            LXX.fillStyle = "red";
            LXX.font = "Bold 19px Book Antiqua";
            LXX.textAlign = "center";
            LXX.fillText("End Turn", 50, 49);
            LXX.fill();
        }
    }

    if (minigame.startGame == true && minigame.wagered == false)
    {
        for (var mi = 0; mi < minigame.wagerCoins.length; mi++)
        {
            minigame.wagerCoins[mi].drawCoin();
        }

        if (mouseX > 1137 && mouseX < 1263 && mouseY > 50 && mouseY < 250)
        {
            XXX.beginPath();
            XXX.fillStyle = "black";
            XXX.font = "Bold 22px Book Antiqua";
            XXX.textAlign = "center";
            XXX.fillText("Play Hearts & Daggers", 1200, 255);
            XXX.fill();

            XXX.beginPath();
            XXX.fillStyle = "red";
            XXX.font = "Bold 21px Book Antiqua";
            XXX.textAlign = "center";
            XXX.fillText("Play Hearts & Daggers", 1200, 255);
            XXX.fill();

            if (clicked == true)
            {
                clicked = false;
                minigame.wagered = true;
                take("coins", minigame.wager);
            }
        }
        else
        {
            XXX.beginPath();
            XXX.fillStyle = "black";
            XXX.font = "Bold 21px Book Antiqua";
            XXX.textAlign = "center";
            XXX.fillText("Play Hearts & Daggers", 1200, 255);
            XXX.fill();

            XXX.beginPath();
            XXX.fillStyle = "red";
            XXX.font = "Bold 20px Book Antiqua";
            XXX.textAlign = "center";
            XXX.fillText("Play Hearts & Daggers", 1200, 255);
            XXX.fill();
        }

        if (lMouseX > 675 && lMouseX < 725)
        {
            if (shiftKey && minigame.wager <= minigame.wagerMAX - 5 && have("coins", (minigame.wager + 5)))
            {
                LXX.drawImage(slug, 907, 303, 52, 44, 700 - 1/2 * 52 * 1, 40 -1/2 * 44 * 1, 52 * 1, 44 * 1);

                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 22px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText("Wager x 5", 700, 49);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 21px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText("Wager x 5", 700, 49);
                LXX.fill();

                if (clicked == true)
                {
                    clicked = false;
                    var wagAmt = minigame.wagerMAX - minigame.wager;
                    for (var mi = 0; mi < 5; mi++)
                    {
                        minigame.wagerCoins.push(new WagerCoin(50 + 950 * Math.random(), 50 + 400 * Math.random()));
                    }
                    minigame.wager += 5;
                }
            }
            else
            {
                LXX.drawImage(slug, 907, 303, 52, 44, 700 - 1/2 * 52 * 1, 40 -1/2 * 44 * 1, 52 * 1, 44 * 1);

                if (minigame.wager < minigame.wagerMAX)
                {
                    if (have("coins", (minigame.wager + 1)))
                    {
                        LXX.beginPath();
                        LXX.fillStyle = "black";
                        LXX.font = "Bold 22px Book Antiqua";
                        LXX.textAlign = "center";
                        LXX.fillText("Wager x 1", 700, 49);
                        LXX.fill();

                        LXX.beginPath();
                        LXX.fillStyle = "red";
                        LXX.font = "Bold 21px Book Antiqua";
                        LXX.textAlign = "center";
                        LXX.fillText("Wager x 1", 700, 49);
                        LXX.fill();

                        if (clicked == true)
                        {
                            clicked = false;

                            minigame.wagerCoins.push(new WagerCoin(50 + 950 * Math.random(), 50 + 400 * Math.random()));
                            minigame.wager += 1;
                        }
                    }
                    else
                    {
                        LXX.beginPath();
                        LXX.fillStyle = "black";
                        LXX.font = "Bold 22px Book Antiqua";
                        LXX.textAlign = "center";
                        LXX.fillText("Not Enough Coins", 700, 49);
                        LXX.fill();

                        LXX.beginPath();
                        LXX.fillStyle = "red";
                        LXX.font = "Bold 21px Book Antiqua";
                        LXX.textAlign = "center";
                        LXX.fillText("Not Enough Coins", 700, 49);
                        LXX.fill();
                    }
                }
                else
                {
                    LXX.beginPath();
                    LXX.fillStyle = "black";
                    LXX.font = "Bold 22px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("Wager Cap Reached", 700, 49);
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "red";
                    LXX.font = "Bold 21px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("Wager Cap Reached", 700, 49);
                    LXX.fill();
                }
            }
        }
        else
        {
            LXX.drawImage(slug, 907, 303, 52, 44, 700 - 1/2 * 52 * 1, 40 -1/2 * 44 * 1, 52 * 1, 44 * 1);

            LXX.beginPath();
            LXX.fillStyle = "black";
            LXX.font = "Bold 21px Book Antiqua";
            LXX.textAlign = "center";
            LXX.fillText("Wager", 700, 49);
            LXX.fill();

            LXX.beginPath();
            LXX.fillStyle = "red";
            LXX.font = "Bold 20px Book Antiqua";
            LXX.textAlign = "center";
            LXX.fillText("Wager", 700, 49);
            LXX.fill();
        }
    }
    else if (minigame.hand.length < 5 && minigame.startGame == true)
    {
        for (var mi = 0; mi < minigame.special.length; mi++)
        {
            minigame.special[mi].faceup = true;
        }

        for (var mi = 0; mi < minigame.aiSpecial.length; mi++)
        {
            minigame.aiSpecial[mi].faceup = true;
        }

        if (new Date().getTime() - minigame.drawKeepTime > 1100)
        {
            minigame.drawKeepTime = new Date().getTime();

            //initial deal to player
            minigame.hand.push(minigame.deck[minigame.deck.length - 1]);
            minigame.deck.splice(minigame.deck.length - 1, 1);

            //initial deal to ai
            minigame.aiHand.push(minigame.deck[minigame.deck.length - 1]);
            minigame.deck.splice(minigame.deck.length - 1, 1);
        }
    }
    else if (minigame.hand.length >= 5 && minigame.startGame == true && minigame.special.length < 1)
    {
        for (var mi = 0; mi < minigame.special.length; mi++)
        {
            minigame.special[mi].faceup = true;
        }

        for (var mi = 0; mi < minigame.aiSpecial.length; mi++)
        {
            minigame.aiSpecial[mi].faceup = true;
        }

        if (new Date().getTime() - minigame.drawKeepTime > 1100)
        {
            minigame.drawKeepTime = new Date().getTime();

            //initial deal to player
            minigame.special.push(minigame.deck[minigame.deck.length - 1]);
            minigame.deck.splice(minigame.deck.length - 1, 1);

            //initial deal to ai
            minigame.aiSpecial.push(minigame.deck[minigame.deck.length - 1]);
            minigame.deck.splice(minigame.deck.length - 1, 1);
        }
    }
    else if (minigame.startGame == true) //determine who goes first
    {
        for (var mi = 0; mi < minigame.special.length; mi++)
        {
            minigame.special[mi].faceup = true;
        }

        for (var mi = 0; mi < minigame.aiSpecial.length; mi++)
        {
            minigame.aiSpecial[mi].faceup = true;
        }

        if (new Date().getTime() - minigame.drawKeepTime > 1100)
        {
            minigame.drawKeepTime = new Date().getTime();

            if (minigame.special[0].value == minigame.aiSpecial[0].value)
            {
                minigame.turn = true;
                minigame.discard.push(minigame.special[0]);
                minigame.discard.push(minigame.aiSpecial[0]);
                minigame.special = [];
                minigame.aiSpecial = [];
            }
            else if (minigame.special[0].value > minigame.aiSpecial[0].value)
            {
                minigame.turn = true;
                minigame.startGame = false;
            }
            else
            {
                minigame.turn = false;
                minigame.startGame = false;
            }
        }
    }

    if (minigame.startGame == false)
    {
        var acees = 0;
        var hearto = false;
        var daggero = false;
        for (var mi = 0; mi < minigame.inplay.length; mi++)
        {
            if (minigame.inplay[mi].number == "Knight")
            {
                acees += 1;
                if (minigame.inplay[mi].suit == "Hearts")
                {
                    hearto = true;
                }
                else if (minigame.inplay[mi].suit == "Daggers")
                {
                    daggero = true;
                }
            }
        }
        var aceesAI = 0;
        var heartoAI = false;
        var daggeroAI = false;
        for (var mi = 0; mi < minigame.aiInplay.length; mi++)
        {
            if (minigame.aiInplay[mi].number == "Knight")
            {
                aceesAI += 1;
                if (minigame.aiInplay[mi].suit == "Hearts")
                {
                    heartoAI = true;
                }
                else if (minigame.aiInplay[mi].suit == "Daggers")
                {
                    daggeroAI = true;
                }
            }
        }

        //set actual values
        for (var mi = 0; mi < minigame.special.length; mi++)
        {
            minigame.special[mi].faceup = true;
        }

        for (var mi = 0; mi < minigame.aiSpecial.length; mi++)
        {
            minigame.aiSpecial[mi].faceup = true;
        }

        for (var mi = 0; mi < minigame.discard.length; mi++)
        {
            minigame.discard[mi].faceup = true;
        }

        for (var mi = 0; mi < minigame.hand.length; mi++)
        {
            minigame.hand[mi].faceup = true;
        }

        if (daggero == true)
        {
            for (var mii = 0; mii < minigame.hand.length; mii++)
            {
                if (minigame.hand[mii].suit == "Daggers" && minigame.hand[mii].number != "Knight")
                {
                    minigame.hand[mii].value = minigame.hand[mii].basevalue + 1;
                }
            }
        }
        else
        {
            for (var mii = 0; mii < minigame.hand.length; mii++)
            {
                if (minigame.hand[mii].suit == "Daggers" && minigame.hand[mii].number != "Knight")
                {
                    minigame.hand[mii].value = minigame.hand[mii].basevalue;
                }
            }
        }

        for (var mi = 0; mi < minigame.inplay.length; mi++)
        {
            minigame.inplay[mi].faceup = true;

            if (minigame.inplay[mi].number == "Knight")
            {
                minigame.inplay[mi].value = 1 * Math.pow(2, acees - 1);
            }
            else if (minigame.inplay[mi].suit == "Daggers")
            {
                minigame.inplay[mi].value = 0;
            }
            else if (minigame.inplay[mi].suit == "Clubs" || minigame.inplay[mi].suit == "Bottles" || minigame.inplay[mi].suit == "Jester")
            {
                minigame.inplay[mi].value = 1 * Math.pow(2, acees);
            }
        }

        for (var mi = 0; mi < minigame.aiInplay.length; mi++)
        {
            minigame.aiInplay[mi].faceup = true;

            if (heartoAI)
            {
                if (minigame.aiInplay[mi].suit == "Hearts" && minigame.aiInplay[mi].number != "Knight")
                {
                    minigame.aiInplay[mi].value = minigame.aiInplay[mi].basevalue + 1;
                }
            }
            else
            {
                if (minigame.aiInplay[mi].suit == "Hearts" && minigame.aiInplay[mi].number != "Knight")
                {
                    minigame.aiInplay[mi].value = minigame.aiInplay[mi].basevalue;
                }
            }

            if (minigame.aiInplay[mi].number == "Knight")
            {
                minigame.aiInplay[mi].value = 1 * Math.pow(2, aceesAI - 1);
            }
            else if (minigame.aiInplay[mi].suit == "Daggers")
            {
                minigame.aiInplay[mi].value = 0;
            }
            else if (minigame.aiInplay[mi].suit == "Clubs" || minigame.aiInplay[mi].suit == "Bottles" || minigame.aiInplay[mi].suit == "Jester")
            {
                minigame.aiInplay[mi].value = 1 * Math.pow(2, aceesAI);
            }
        }

        if (daggeroAI == true)
        {
            for (var mii = 0; mii < minigame.aiHand.length; mii++)
            {
                if (minigame.aiHand[mii].suit == "Daggers" && minigame.aiHand[mii].number != "Knight")
                {
                    minigame.aiHand[mii].value = minigame.aiHand[mii].basevalue + 1;
                }
            }
        }
        else
        {
            for (var mii = 0; mii < minigame.aiHand.length; mii++)
            {
                if (minigame.aiHand[mii].suit == "Daggers" && minigame.aiHand[mii].number != "Knight")
                {
                    minigame.aiHand[mii].value = minigame.aiHand[mii].basevalue;
                }
            }
        }

        if (minigame.hand.length == 0 && minigame.aiHand.length == 0 && minigame.targetingAI != true)
        {
            minigame.endgame = true;
            if (new Date().getTime() - minigame.drawKeepTime > 2000 && minigame.endgameTic == 0)
            {
                minigame.drawKeepTime = new Date().getTime();

                for (var mi = minigame.inplay.length - 1; mi >= 0; mi--)
                {
                    if (minigame.inplay[mi].suit == "Daggers" && minigame.inplay[mi].number != "Knight")
                    {
                        minigame.discard.push(minigame.inplay[mi]);
                        minigame.inplay.splice(mi, 1);
                    }
                }
                for (var mi = minigame.aiInplay.length - 1; mi >= 0; mi--)
                {
                    if (minigame.aiInplay[mi].suit == "Daggers" && minigame.aiInplay[mi].number != "Knight")
                    {
                        minigame.discard.push(minigame.aiInplay[mi]);
                        minigame.aiInplay.splice(mi, 1);
                    }
                }
                if (minigame.aiSpecial.length > 0)
                {
                    if (minigame.aiSpecial[0].anti == true)
                    {
                        minigame.aiSpecial.splice(0, 1);
                    }
                }
                if (minigame.special.length > 0)
                {
                    if (minigame.special[0].anti == true)
                    {
                        minigame.special.splice(0, 1);
                    }
                }

                minigame.endgameTic += 1;
            }

            if (minigame.endgameTic == 1)
            {
                minigame.drawKeepTime = new Date().getTime();

                for (var mi = minigame.inplay.length - 1; mi >= 0; mi--)
                {
                    minigame.score += minigame.inplay[mi].value;
                }
                for (var mi = minigame.aiInplay.length - 1; mi >= 0; mi--)
                {
                    minigame.aiScore += minigame.aiInplay[mi].value;
                }
                if (minigame.aiSpecial.length > 0)
                {
                    minigame.aiScore += minigame.aiSpecial[0].value;
                }
                if (minigame.special.length > 0)
                {
                    minigame.score += minigame.special[0].value;
                }

                minigame.endgameTic += 1;
            }

            if (new Date().getTime() - minigame.drawKeepTime > 300 && minigame.endgameTic == 2)
            {
                minigame.drawKeepTime = new Date().getTime();

                if (minigame.finalScore < minigame.score)
                {
                    minigame.finalScore += 1;
                }

                if (minigame.aiFinalScore < minigame.aiScore)
                {
                    minigame.aiFinalScore += 1;
                }

                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "gold";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();


                LXX.beginPath();
                LXX.fillStyle = "white";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                if (minigame.score == minigame.finalScore && minigame.aiScore == minigame.aiFinalScore)
                {
                    minigame.endgameTic += 1;
                }
            }
            else if (minigame.endgameTic == 2)
            {
                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "gold";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();


                LXX.beginPath();
                LXX.fillStyle = "white";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();
            }

            if (new Date().getTime() - minigame.drawKeepTime > 8000 && minigame.endgameTic == 4 || minigame.endgameTic == 3)
            {
                minigame.drawKeepTime = new Date().getTime();

                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "gold";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();


                LXX.beginPath();
                LXX.fillStyle = "white";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                minigame.endgameTic += 1;
            }
            else if (minigame.endgameTic == 4)
            {
                LXX.beginPath();
                LXX.fillStyle = "black";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "gold";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.finalScore, 580, 50);
                LXX.fill();


                LXX.beginPath();
                LXX.fillStyle = "white";
                LXX.font = "Bold 42px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();

                LXX.beginPath();
                LXX.fillStyle = "red";
                LXX.font = "Bold 40px Book Antiqua";
                LXX.textAlign = "center";
                LXX.fillText(minigame.aiFinalScore, 820, 50);
                LXX.fill();
            }

            if (new Date().getTime() - minigame.drawKeepTime > 7000 && minigame.endgameTic == 6 || minigame.endgameTic == 5)
            {
                minigame.drawKeepTime = new Date().getTime();

                if (minigame.aiFinalScore < minigame.finalScore)
                {
                    LXX.beginPath();
                    LXX.fillStyle = "black";
                    LXX.font = "Bold 31px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("You won: You take away " + minigame.wager + " coins.", 700, 50);
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "gold";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("You won: You take away " + minigame.wager + " coins.", 700, 50);
                    LXX.fill();
                }
                else if (minigame.aiFinalScore == minigame.finalScore)
                {
                    LXX.beginPath();
                    LXX.fillStyle = "black";
                    LXX.font = "Bold 31px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "white";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();
                }
                else
                {
                    LXX.beginPath();
                    LXX.fillStyle = "white";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "red";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();
                }

                minigame.endgameTic += 1;
            }
            else if (minigame.endgameTic == 6)
            {
                if (minigame.aiFinalScore < minigame.finalScore)
                {
                    LXX.beginPath();
                    LXX.fillStyle = "black";
                    LXX.font = "Bold 31px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("You won: You take away " + minigame.wager + " coins.", 700, 50);
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "gold";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    LXX.fillText("You won: You take away " + minigame.wager + " coins.", 700, 50);
                    LXX.fill();
                }
                else if (minigame.aiFinalScore == minigame.finalScore)
                {
                    LXX.beginPath();
                    LXX.fillStyle = "black";
                    LXX.font = "Bold 31px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "white";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You tied: You keep the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();
                }
                else
                {
                    LXX.beginPath();
                    LXX.fillStyle = "white";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();

                    LXX.beginPath();
                    LXX.fillStyle = "red";
                    LXX.font = "Bold 30px Book Antiqua";
                    LXX.textAlign = "center";
                    if (minigame.wager == 1)
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coin you wagered.", 700, 50);
                    }
                    else
                    {
                        LXX.fillText("You lost: You hand over the " + minigame.wager + " coins you wagered.", 700, 50);
                    }
                    LXX.fill();
                }
            }

            if (minigame.endgameTic == 7)
            {
                if (minigame.aiFinalScore < minigame.finalScore && minigame.wager > 0)
                {
                    give("coins", (minigame.wager * 2));
                    player.gamblingWinStreakHeartsAndDaggers += 1;
                }
                else if (minigame.aiFinalScore == minigame.finalScore && minigame.wager > 0)
                {
                    give("coins", (minigame.wager));
                }
                else if (player.gamblingWinStreakHeartsAndDaggers >= 6 && minigame.wager >= 1/2 * minigame.wagerMAX)
                {
                    player.gamblingWinStreakHeartsAndDaggers -= 1;
                }
                else if (minigame.wager >= 1/2 * minigame.wagerMAX)
                {
                    player.gamblingWinStreakHeartsAndDaggers = 0;
                }

                minigame.endgameTic = 8;
            }

            if (minigame.endgameTic == 8)
            {
                lowBar = "information";
                gameState = "active";
                requestAnimationFrame(gameloopOfDestiny, CCC);
            }
        }
    }


    if (minigame.turn == true && minigame.startGame == false && minigame.endgame != true || minigame.turn == true && minigame.startGame == false && minigame.targetingAI == true)
    {
        //selecting and utilizing cards
        for (var mi = minigame.hand.length - 1; mi >= 0; mi--)
        {
            if (lMouseX > 100 * (1 + mi) + 275 && lMouseX < 100 * (1 + mi) + 325 && minigame.targetingAI != true)
            {
                minigame.hand[mi].hover = true;
                if (clicked == true)
                {
                    clicked = false;
                    if (minigame.hand[mi].suit != "Jester" && minigame.hand[mi].suit != "Daggers" || minigame.hand[mi].number == "Knight")
                    {
                        minigame.actionTaken = true;
                        if (minigame.capReached != true || minigame.hand[mi].suit != "Hearts" && minigame.hand[mi].suit != "Daggers")
                        {
                            minigame.hand[mi].hover = false;
                            minigame.inplay.push(minigame.hand[mi]);
                            if (minigame.hand[mi].suit == "Hearts" || minigame.hand[mi].suit == "Daggers")
                            {
                                minigame.capReached = true;
                            }
                            minigame.hand.splice(mi, 1);
                        }
                        //minigame.turn = false;
                    }
                    else if (minigame.hand[mi].suit == "Daggers" && minigame.capReached != true)
                    {
                        //minigame.actionTaken = true;
                        if (minigame.aiInplay.length == 0 && minigame.aiSpecial.length == 0)
                        {
                            minigame.discard.push(minigame.hand[mi]);
                            minigame.hand.splice(mi, 1);
                        }
                        else
                        {
                            minigame.targetingAI = true;
                            minigame.targetAIValue = minigame.hand[mi].value;
                            minigame.targetAISuit = minigame.hand[mi].suit;

                            minigame.hand.splice(mi, 1);
                        }
                        minigame.capReached = true;
                    }
                    else if (minigame.hand[mi].suit == "Jester" && minigame.capReached != true)
                    {
                        minigame.actionTaken = true;
                        if (minigame.aiInplay.length == 0 && minigame.special.length == 0)
                        {
                            minigame.inplay.push(minigame.hand[mi]);
                            minigame.hand.splice(mi, 1);
                        }
                        else
                        {
                            minigame.targetingAI = true;
                            minigame.targetAIValue = minigame.hand[mi].basevalue;
                            minigame.targetAISuit = minigame.hand[mi].suit;

                            minigame.inplay.push(minigame.hand[mi]);
                            minigame.hand.splice(mi, 1);
                        }
                        minigame.capReached = true;
                    }
                }
            }
        }

        if (minigame.targetingAI == true)
        {
            for (var mi = minigame.aiInplay.length - 1; mi >= 0; mi--)
            {
                if (mouseX > -125 * (1 + mi) + 1062 && mouseX < -125 * (1 + mi) + 1188 && mouseY < 325 && mouseY > 125)
                {
                    minigame.aiInplay[mi].hover = true;
                    if (clicked == true)
                    {
                        clicked = false;
                        minigame.actionTaken = true;
                        minigame.targetingAI = false;

                        if (minigame.targetAISuit == "Daggers")
                        {
                            if (minigame.targetAIValue >= minigame.aiInplay[mi].value && daggero != true || (minigame.targetAIValue + 1) >= minigame.aiInplay[mi].value && daggero == true)
                            {
                                minigame.discard.push(minigame.aiInplay[mi]);
                                if (minigame.targetAIValue == 1)
                                {
                                    minigame.aiInplay.splice(mi, 1, {suit: "Daggers", number: "Knight", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else if (minigame.targetAIValue == 11)
                                {
                                    minigame.aiInplay.splice(mi, 1, {suit: "Daggers", number: "Constable", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else if (minigame.targetAIValue == 12)
                                {
                                    minigame.aiInplay.splice(mi, 1, {suit: "Daggers", number: "Countess", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else if (minigame.targetAIValue  == 13)
                                {
                                    minigame.aiInplay.splice(mi, 1, {suit: "Daggers", number: "Count", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else
                                {
                                    minigame.aiInplay.splice(mi, 1, {suit: "Daggers", number: ("" + minigame.targetAIValue), faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                            }
                            else
                            {
                                if (minigame.targetAIValue == 1)
                                {
                                    minigame.discard.push({suit: "Daggers", number: "Knight", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else if (minigame.targetAIValue == 11)
                                {
                                    minigame.discard.push({suit: "Daggers", number: "Constable", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else if (minigame.targetAIValue == 12)
                                {
                                    minigame.discard.push({suit: "Daggers", number: "Countess", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else if (minigame.targetAIValue == 13)
                                {
                                    minigame.discard.push({suit: "Daggers", number: "Count", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else
                                {
                                    minigame.discard.push({suit: "Daggers", number: ("" + minigame.targetAIValue), faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                            }
                        }
                        else if (minigame.targetAISuit == "Jester")
                        {
                            minigame.inplay.push(minigame.aiInplay[mi]);
                            minigame.aiInplay.splice(mi, 1);
                        }
                    }
                }
            }

            if (minigame.aiSpecial.length > 0)
            {
                if (mouseX > 137 && mouseX < 263 && mouseY < 325 && mouseY > 125)
                {
                    minigame.aiSpecial[0].hover = true;

                    if (clicked == true)
                    {
                        clicked = false;
                        minigame.actionTaken = true;
                        minigame.targetingAI = false;

                        if (minigame.targetAISuit == "Daggers")
                        {
                            if (minigame.targetAIValue >= minigame.aiSpecial[0].value && daggero != true || minigame.targetAIValue + 1 >= minigame.aiSpecial[0].value && daggero == true)
                            {
                                minigame.discard.push(minigame.aiSpecial[0]);
                                if (minigame.targetAIValue == 1)
                                {
                                    minigame.aiSpecial.splice(0, 1, {suit: "Daggers", number: "Knight", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue, anti: true});
                                }
                                else if (minigame.targetAIValue == 11)
                                {
                                    minigame.aiSpecial.splice(0, 1, {suit: "Daggers", number: "Constable", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue, anti: true});
                                }
                                else if (minigame.targetAIValue == 12)
                                {
                                    minigame.aiSpecial.splice(0, 1, {suit: "Daggers", number: "Countess", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue, anti: true});
                                }
                                else if (minigame.targetAIValue  == 13)
                                {
                                    minigame.aiSpecial.splice(0, 1, {suit: "Daggers", number: "Count", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue, anti: true});
                                }
                                else
                                {
                                    minigame.aiSpecial.splice(0, 1, {suit: "Daggers", number: ("" + minigame.targetAIValue), faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue, anti: true});
                                }
                            }
                            else
                            {
                                if (minigame.targetAIValue == 1)
                                {
                                    minigame.discard.push({suit: "Daggers", number: "Knight", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else if (minigame.targetAIValue == 11)
                                {
                                    minigame.discard.push({suit: "Daggers", number: "Constable", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else if (minigame.targetAIValue == 12)
                                {
                                    minigame.discard.push({suit: "Daggers", number: "Countess", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else if (minigame.targetAIValue == 13)
                                {
                                    minigame.discard.push({suit: "Daggers", number: "Count", faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                                else
                                {
                                    minigame.discard.push({suit: "Daggers", number: ("" + minigame.targetAIValue), faceup: true, value: minigame.targetAIValue, basevalue: minigame.targetAIValue});
                                }
                            }
                        }
                        else if (minigame.targetAISuit == "Jester")
                        {
                            minigame.inplay.push(minigame.aiSpecial[0]);
                            minigame.aiSpecial.splice(0, 1);
                        }
                    }
                }
            }
        }

        if (minigame.hand.length == 0 && minigame.aiHand.length > 0)
        {
            minigame.actionTaken = true;
        }
    }
    else if (minigame.startGame == false && minigame.endgame != true)//AI
    {
        //reset player variables
        minigame.actionTaken = false;
        minigame.capReached = false;
        minigame.targetAIValue = 0;
        minigame.targetAISuit = "none";

        if (new Date().getTime() - minigame.drawKeepTime > 600)
        {
            minigame.drawKeepTime = new Date().getTime();

            //hand data
            var pawns = 0;
            var pawn = -1;
            var aces = 0;
            var ace = -1;
            var jesters = 0;
            var jester = -1;

            var hearts = 0;
            var highestHeart = 0;
            var highHeart = -1;
            var lowestHeart = 20;
            var lowHeart = -1;
            var daggers = 0;
            var highestDagger = 0;
            var highDagger = -1;
            var lowestDagger = 20;
            var lowDagger = -1;

            for (var mi = minigame.aiHand.length - 1; mi >= 0; mi--)
            {
                if (minigame.aiHand[mi].number == "Jester")
                {
                    jesters += 1;
                    jester = mi;
                }
                else if (minigame.aiHand[mi].number == "Knight")
                {
                    aces += 1;
                    ace = mi;
                }
                else if (minigame.aiHand[mi].suit == "Hearts")
                {
                    hearts += 1;
                    // highHeart = mi;
                    // lowHeart = mi;
                    if (minigame.aiHand[mi].value >= highestHeart)
                    {
                        highestHeart = minigame.aiHand[mi].value;
                        highHeart = mi;
                    }
                    if (minigame.aiHand[mi].value <= lowestHeart)
                    {
                        lowestHeart = minigame.aiHand[mi].value;
                        lowHeart = mi;
                    }
                }
                else if (minigame.aiHand[mi].suit == "Daggers")
                {
                    daggers += 1;
                    // highDagger = mi;
                    // lowDagger = mi;

                    if (minigame.aiHand[mi].value >= highestDagger)
                    {
                        highestDagger = minigame.aiHand[mi].value;
                        highDagger = mi;
                    }
                    if (minigame.aiHand[mi].value <= lowestDagger)
                    {
                        lowestDagger = minigame.aiHand[mi].value;
                        lowDagger = mi;
                    }
                }
                else
                {
                    pawns += 1;
                    pawn = mi;
                }
            }

            //inplay data
            var pawnsIn = 0;
            var acesIn = 0;

            for (var mi = minigame.aiInplay.length - 1; mi >= 0; mi--)
            {
                if (minigame.aiInplay[mi].number == "Knight" && minigame.aiInplay[mi].suit != "Daggers")
                {
                    acesIn += 1;
                }
                else if (minigame.aiInplay[mi].suit == "Clubs" || minigame.aiInplay[mi].suit == "Bottles")
                {
                    pawnsIn += 1;
                }
            }

            //player inplay data

            var strongestCardValue = 0;
            var strongestCard = -1;
            var strongestCardNormal = true;
            var playerPawns = 0;
            var playerAces = 0;
            var playerAce = -1;

            for (var mi = minigame.inplay.length - 1; mi >= 0; mi--)
            {
                if (minigame.inplay[mi].suit == "Clubs" || minigame.inplay[mi].suit == "Bottles" || minigame.inplay[mi].suit == "Jester")
                {
                    playerPawns += 1
                }
                else if (minigame.inplay[mi].number == "Knight")
                {
                    playerAces += 1;
                    playerAce = mi;
                }

                if (minigame.inplay[mi].value > strongestCardValue && minigame.inplay[mi].suit != "Daggers" || minigame.inplay[mi].value > strongestCardValue && minigame.inplay[mi].number == "Knight")
                {
                    strongestCardValue = minigame.inplay[mi].value;
                    strongestCard = mi;
                }
            }

            if (minigame.special.length > 0 && minigame.special[0].value > strongestCardValue)
            {
                strongestCardValue = minigame.special[0].value;
                strongestCard = 0;
                strongestCardNormal = false;
            }

            for (var mi = minigame.inplay.length - 1; mi >= 0; mi--)
            {
                if (minigame.inplay[mi].number == "Knight" && minigame.inplay[mi].suit == "Daggers" || minigame.inplay[mi].number == "Knight" && minigame.inplay[mi].suit == "Hearts")
                {
                    playerAce = mi;
                }
            }

            var secondCardValue = 0;
            var secondCard = -1;
            var secondCardNormal = true;

            for (var mi = minigame.inplay.length - 1; mi >= 0; mi--)
            {
                if (minigame.inplay[mi].value > secondCardValue && strongestCard != mi && minigame.inplay[mi].suit != "Daggers" || minigame.inplay[mi].value > secondCardValue && strongestCard != mi && minigame.inplay[mi].number == "Knight")
                {
                    secondCardValue = minigame.inplay[mi].value;
                    secondCard = mi;
                }
            }

            if (minigame.special.length > 0 && minigame.special[0].value > secondCardValue && strongestCardNormal == true)
            {
                secondCardValue = minigame.special[0].value;
                secondCard = 0;
                secondCardNormal = false;
            }

            var thirdCardValue = 0;
            var thirdCard = -1;
            var thirdCardNormal = true;

            for (var mi = minigame.inplay.length - 1; mi >= 0; mi--)
            {
                if (minigame.inplay[mi].value > thirdCardValue && strongestCard != mi && secondCard != mi && minigame.inplay[mi].suit != "Daggers" || minigame.inplay[mi].value > thirdCardValue && strongestCard != mi && secondCard != mi && minigame.inplay[mi].number == "Knight")
                {
                    thirdCardValue = minigame.inplay[mi].value;
                    thirdCard = mi;
                }
            }

            if (minigame.special.length > 0 && minigame.special[0].value > thirdCardValue && strongestCardNormal == true && secondCardNormal == true)
            {
                thirdCardValue = minigame.special[0].value;
                thirdCard = 0;
                thirdCardNormal = false;
            }

            var fourthCardValue = 0;
            var fourthCard = -1;
            var fourthCardNormal = true;

            for (var mi = minigame.inplay.length - 1; mi >= 0; mi--)
            {
                if (minigame.inplay[mi].value > fourthCardValue && strongestCard != mi && secondCard != mi && thirdCard != mi && minigame.inplay[mi].suit != "Daggers" || minigame.inplay[mi].value > fourthCardValue && strongestCard != mi && secondCard != mi && thirdCard != mi && minigame.inplay[mi].number == "Knight")
                {
                    fourthCardValue = minigame.inplay[mi].value;
                    fourthCard = mi;
                }
            }

            if (minigame.special.length > 0 && minigame.special[0].value > fourthCardValue && strongestCardNormal == true && secondCardNormal == true && thirdCardNormal == true)
            {
                fourthCardValue = minigame.special[0].value;
                fourthCard = 0;
                fourthCardNormal = false;
            }

            var fifthCardValue = 0;
            var fifthCard = -1;
            var fifthCardNormal = true;

            for (var mi = minigame.inplay.length - 1; mi >= 0; mi--)
            {
                if (minigame.inplay[mi].value > fifthCardValue && strongestCard != mi && secondCard != mi && thirdCard != mi && fourthCard != mi && minigame.inplay[mi].suit != "Daggers" || minigame.inplay[mi].value > fifthCardValue && strongestCard != mi && secondCard != mi && thirdCard != mi && fourthCard != mi && minigame.inplay[mi].number == "Knight")
                {
                    fifthCardValue = minigame.inplay[mi].value;
                    fifthCard = mi;
                }
            }

            if (minigame.special.length > 0 && minigame.special[0].value > fifthCardValue  && strongestCardNormal == true && secondCardNormal == true && thirdCardNormal == true && fourthCardNormal == true)
            {
                fifthCardValue = minigame.special[0].value;
                fifthCard = 0;
                fifthCardNormal = false;
            }

            var lastCardValue = 0;
            var lastCard = -1;
            var lastCardNormal = true;

            for (var mi = minigame.inplay.length - 1; mi >= 0; mi--)
            {
                if (minigame.inplay[mi].value > lastCardValue && strongestCard != mi && secondCard != mi && thirdCard != mi && fourthCard != mi && fifthCard != mi && minigame.inplay[mi].suit != "Daggers" || minigame.inplay[mi].value > lastCardValue && strongestCard != mi && secondCard != mi && thirdCard != mi && fourthCard != mi && fifthCard != mi && minigame.inplay[mi].number == "Knight")
                {
                    lastCardValue = minigame.inplay[mi].value;
                    lastCard = mi;
                }
            }

            if (minigame.special.length > 0 && minigame.special[0].value > fifthCardValue  && strongestCardNormal == true && secondCardNormal == true && thirdCardNormal == true && fourthCardNormal == true && fifthCardNormal == true)
            {
                lastCardValue = minigame.special[0].value;
                lastCard = 0;
                lastCardNormal = false;
            }

            if (minigame.ai == 1) //slow and random
            {
                if (minigame.aiHand.length > 0)
                {
                    if (minigame.aiHand[0].suit == "Daggers" && daggers > 0)
                    {
                        minigame.aiAction = true;
                        //use a dagger if possible
                        if (strongestCard != -1)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (strongestCardNormal == true)
                            {
                                if (lowestDagger >= strongestCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[strongestCard]);
                                    minigame.inplay.splice(strongestCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= strongestCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[strongestCard]);
                                    minigame.inplay.splice(strongestCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= strongestCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[strongestCard]);
                                    minigame.special.splice(strongestCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= strongestCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[strongestCard]);
                                    minigame.special.splice(strongestCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                        }
                        else if (secondCard != -1)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (secondCardNormal == true)
                            {
                                if (lowestDagger >= secondCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[secondCard]);
                                    minigame.inplay.splice(secondCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= secondCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[secondCard]);
                                    minigame.inplay.splice(secondCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= secondCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[secondCard]);
                                    minigame.special.splice(secondCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= secondCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[secondCard]);
                                    minigame.special.splice(secondCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                        }
                        else if (thirdCard != -1)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (thirdCardNormal == true)
                            {
                                if (lowestDagger >= thirdCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[thirdCard]);
                                    minigame.inplay.splice(thirdCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= thirdCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[thirdCard]);
                                    minigame.inplay.splice(thirdCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= thirdCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[thirdCard]);
                                    minigame.special.splice(thirdCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= thirdCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[thirdCard]);
                                    minigame.special.splice(thirdCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                        }
                        else if (fourthCard != -1)
                        {
                            //destroy the highest value card possible with a dagger card

                            if (fourthCardNormal == true)
                            {
                                if (lowestDagger >= fourthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[fourthCard]);
                                    minigame.inplay.splice(fourthCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= fourthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[fourthCard]);
                                    minigame.inplay.splice(fourthCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= fourthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[fourthCard]);
                                    minigame.special.splice(fourthCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= fourthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[fourthCard]);
                                    minigame.special.splice(fourthCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                        }
                        else if (fifthCard != -1)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (fifthCardNormal == true)
                            {
                                if (lowestDagger >= fifthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[fifthCard]);
                                    minigame.inplay.splice(fifthCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= fifthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[fifthCard]);
                                    minigame.inplay.splice(fifthCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= fifthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[fifthCard]);
                                    minigame.special.splice(fifthCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= fifthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[fifthCard]);
                                    minigame.special.splice(fifthCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                        }
                        else if (lastCard != -1)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (lastCardNormal == true)
                            {
                                if (lowestDagger >= lastCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[lastCard]);
                                    minigame.inplay.splice(lastCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= lastCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[lastCard]);
                                    minigame.inplay.splice(lastCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= lastCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[lastCard]);
                                    minigame.special.splice(lastCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= lastCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[lastCard]);
                                    minigame.special.splice(lastCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                        }
                        else
                        {
                            minigame.aiAction = true;
                            //if there are none that are destroyable then discard the card
                            minigame.discard.push(minigame.aiHand[lowDagger]);
                            minigame.aiHand.splice(lowDagger, 1);
                            minigame.turn = true;
                        }
                        minigame.turn = true;
                    }
                    else if (minigame.aiHand[0].suit == "Jester" && jesters > 0)
                    {
                        minigame.aiAction = true;
                        //use a jester if possible
                        if (minigame.inplay.length > 0)
                        {
                            minigame.aiInplay.push(minigame.aiHand[0]);
                            minigame.aiHand.splice(0, 1);

                            if (strongestCardNormal == true)
                            {
                                minigame.aiInplay.push(minigame.inplay[strongestCard]);
                                minigame.inplay.splice(strongestCard, 1);
                            }
                            else
                            {
                                minigame.aiInplay.push(minigame.special[strongestCard]);
                                minigame.special.splice(strongestCard, 1);
                            }

                            minigame.aiAction = true;
                            minigame.turn = true;
                        }
                        else if (minigame.aiHand.length >= 2 && minigame.aiHand[1].suit != "Daggers")
                        {
                            minigame.aiAction = true;
                            //play any non-special card
                            minigame.aiInplay.push(minigame.aiHand[1]);
                            minigame.aiHand.splice(1, 1);
                            minigame.turn = true;
                        }
                        else
                        {
                            minigame.aiInplay.push(minigame.aiHand[0]);
                            minigame.aiHand.splice(0, 1);
                            minigame.aiAction = true;
                            minigame.turn = true;
                        }

                        minigame.turn = true;
                    }
                    else if (minigame.aiHand[0].suit != "Jester" && minigame.aiHand[0].suit != "Daggers")
                    {
                        minigame.aiAction = true;
                        //play any non-special card
                        minigame.aiInplay.push(minigame.aiHand[0]);
                        minigame.aiHand.splice(0, 1);
                        minigame.turn = true;
                    }
                    else if (pawns > 0)
                    {
                        minigame.aiAction = true;
                        //play any non-special card
                        minigame.aiInplay.push(minigame.aiHand[pawn]);
                        minigame.aiHand.splice(pawn, 1);
                        minigame.turn = true;
                    }
                    else if (hearts > 0)
                    {
                        minigame.aiAction = true;
                        //play any non-special card
                        minigame.aiInplay.push(minigame.aiHand[lowHeart]);
                        minigame.aiHand.splice(lowHeart, 1);
                        minigame.turn = true;
                    }
                    else if (aces > 0)
                    {
                        minigame.aiAction = true;
                        //play any non-special card
                        minigame.aiInplay.push(minigame.aiHand[ace]);
                        minigame.aiHand.splice(ace, 1);
                        minigame.turn = true;
                    }
                    else
                    {
                        minigame.turn = true;
                    }
                }
                else
                {
                    minigame.turn = true;
                }
            }
            else //slow and steady defense
            {
                console.log(JSON.stringify(minigame.aiHand));
                //is it economic to steal an ace instead of the strongest card?
                var stealAce = false;
                if (jesters > 0)
                {
                    if (aces >= 2 && strongestCardValue < 13)
                    {
                        stealAce = true;
                    }
                    else if (aces >= 1 && pawns > 1 && strongestCardValue < 9)
                    {
                        stealAce = true;
                    }
                    else if (aces >= 1 && pawns == 1 && strongestCardValue < 6)
                    {
                        stealAce = true;
                    }
                }

                if (minigame.aiHand.length == 0)
                {
                    minigame.turn = true;
                }
                else if (pawns > 0)
                {
                    minigame.aiAction = true;
                    //play one pawn
                    minigame.aiInplay.push(minigame.aiHand[pawn]);
                    minigame.aiHand.splice(pawn, 1);
                    minigame.turn = true;
                }
                else if (pawnsIn < 2 && lowestHeart <= 4 && aces > 0)
                {
                    minigame.aiAction = true;
                    //play an ace
                    minigame.aiInplay.push(minigame.aiHand[ace]);
                    minigame.aiHand.splice(ace, 1);
                    minigame.turn = true;
                }
                else if (hearts > 0)
                {
                    minigame.aiAction = true;
                    //play the lowest heart
                    minigame.aiInplay.push(minigame.aiHand[lowHeart]);
                    minigame.aiHand.splice(lowHeart, 1);
                    minigame.turn = true;
                }
                else if (aces > 0)
                {
                    minigame.aiAction = true;
                    //play an ace
                    minigame.aiInplay.push(minigame.aiHand[ace]);
                    minigame.aiHand.splice(ace, 1);
                    minigame.turn = true;
                }
                else if (minigame.inplay.length > 0 && daggers > 0)
                {
                    //save up to the number of jesters the ai has worth of strongest enemies, destroy all the next strongest
                    var goOnWithItThen = true;
                    if (playerAces > 0 && lowestDagger >= minigame.inplay[playerAce].value || playerAces > 0 && highestDagger >= minigame.inplay[playerAce].value)
                    {
                        if (playerPawns >= 3 && playerAces == 1 && strongestCardValue < 5 || playerPawns >= 2 && playerAces == 2 && strongestCardValue < 9 || playerAces >= 3 && playerPawns == 0 && strongestCardValue < 9 || playerAces >= 3 && playerPawns == 1 && strongestCardValue < 13 || playerAces >= 3 && playerPawns > 1)
                        {
                            if (stealAce != true)
                            {
                                goOnWithItThen = false;
                                //destroy one of the player's aces
                                if (lowestDagger >= minigame.inplay[playerAce].value)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[playerAce]);
                                    minigame.inplay.splice(playerAce, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= minigame.inplay[playerAce].value)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[playerAce]);
                                    minigame.inplay.splice(playerAce, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                            }
                        }
                    }

                    if (goOnWithItThen == true)
                    {
                        goOnWithItThen = false;
                        if (strongestCard != -1 && stealAce && jesters <= 1 || strongestCard != -1 && jesters == 0)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (strongestCardNormal == true)
                            {
                                if (lowestDagger >= strongestCardValue)
                                {
                                    console.log("lowestDagger " + lowestDagger);
                                    console.log("strongestValue " + strongestCardValue);

                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[strongestCard]);
                                    minigame.inplay.splice(strongestCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= strongestCardValue)
                                {
                                    console.log("highestDagger " + highestDagger);
                                    console.log("strongestValue " + strongestCardValue);

                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[strongestCard]);
                                    minigame.inplay.splice(strongestCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    goOnWithItThen = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= strongestCardValue)
                                {
                                    console.log("lowestDagger " + lowestDagger);
                                    console.log("strongestValue " + strongestCardValue);

                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[strongestCard]);
                                    minigame.special.splice(strongestCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= strongestCardValue)
                                {
                                    console.log("highestDagger " + highestDagger);
                                    console.log("strongestValue " + strongestCardValue);

                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[strongestCard]);
                                    minigame.special.splice(strongestCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    goOnWithItThen = true;
                                }
                            }
                        }
                        else
                        {
                            goOnWithItThen = true;
                        }
                    }

                    if (goOnWithItThen == true)
                    {
                        goOnWithItThen = false;
                        if (secondCard != -1 && stealAce && jesters <= 2 || secondCard != -1 && jesters == 0)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (secondCardNormal == true)
                            {
                                if (lowestDagger >= secondCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[secondCard]);
                                    minigame.inplay.splice(secondCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= secondCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[secondCard]);
                                    minigame.inplay.splice(secondCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    goOnWithItThen = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= secondCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[secondCard]);
                                    minigame.special.splice(secondCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= secondCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[secondCard]);
                                    minigame.special.splice(secondCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    goOnWithItThen = true;
                                }
                            }
                        }
                        else
                        {
                            goOnWithItThen = true;
                        }
                    }

                    if (goOnWithItThen == true)
                    {
                        goOnWithItThen = false;

                        if (thirdCard != -1)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (thirdCardNormal == true)
                            {
                                if (lowestDagger >= thirdCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[thirdCard]);
                                    minigame.inplay.splice(thirdCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= thirdCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[thirdCard]);
                                    minigame.inplay.splice(thirdCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    goOnWithItThen = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= thirdCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[thirdCard]);
                                    minigame.special.splice(thirdCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= thirdCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[thirdCard]);
                                    minigame.special.splice(thirdCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    goOnWithItThen = true;
                                }
                            }
                        }
                        else
                        {
                            goOnWithItThen = true;
                        }
                    }

                    if (goOnWithItThen == true)
                    {
                        goOnWithItThen = false;

                        if (fourthCard != -1)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (fourthCardNormal == true)
                            {
                                if (lowestDagger >= fourthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[fourthCard]);
                                    minigame.inplay.splice(fourthCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= fourthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[fourthCard]);
                                    minigame.inplay.splice(fourthCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    goOnWithItThen = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= fourthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[fourthCard]);
                                    minigame.special.splice(fourthCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= fourthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[fourthCard]);
                                    minigame.special.splice(fourthCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    goOnWithItThen = true;
                                }
                            }
                        }
                        else
                        {
                            goOnWithItThen = true;
                        }
                    }

                    if (goOnWithItThen == true)
                    {
                        goOnWithItThen = false;

                        if (fifthCard != -1)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (fifthCardNormal == true)
                            {
                                if (lowestDagger >= fifthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[fifthCard]);
                                    minigame.inplay.splice(fifthCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= fifthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[fifthCard]);
                                    minigame.inplay.splice(fifthCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    goOnWithItThen = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= fifthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[fifthCard]);
                                    minigame.special.splice(fifthCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= fifthCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[fifthCard]);
                                    minigame.special.splice(fifthCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    goOnWithItThen = true;
                                }
                            }
                        }
                        else
                        {
                            goOnWithItThen = true;
                        }
                    }


                    if (goOnWithItThen == true)
                    {
                        goOnWithItThen = false;
                        if (lastCard != -1)
                        {
                            //destroy the highest value card possible with a dagger card
                            if (fifthCardNormal == true)
                            {
                                if (lowestDagger >= lastCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.inplay[lastCard]);
                                    minigame.inplay.splice(lastCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else if (highestDagger >= lastCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.inplay[lastCard]);
                                    minigame.inplay.splice(lastCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                            else
                            {
                                if (lowestDagger >= lastCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.discard.push(minigame.special[lastCard]);
                                    minigame.special.splice(lastCard, 1, minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else if (highestDagger >= lastCardValue)
                                {
                                    minigame.discard.push(minigame.aiHand[highDagger]);
                                    minigame.discard.push(minigame.special[lastCard]);
                                    minigame.special.splice(lastCard, 1, minigame.aiHand[highDagger]);
                                    minigame.aiHand.splice(highDagger, 1);
                                    minigame.aiAction = true;
                                    minigame.turn = true;
                                    minigame.special[0].anti = true;
                                }
                                else
                                {
                                    minigame.aiAction = true;
                                    //if there are none that are destroyable then discard the card
                                    minigame.discard.push(minigame.aiHand[lowDagger]);
                                    minigame.aiHand.splice(lowDagger, 1);
                                    minigame.turn = true;
                                }
                            }
                        }
                        else
                        {
                            minigame.aiAction = true;
                            //if there are none that are destroyable then discard the card
                            minigame.discard.push(minigame.aiHand[lowDagger]);
                            minigame.aiHand.splice(lowDagger, 1);
                            minigame.turn = true;
                        }
                    }

                    minigame.aiAction = true;
                    minigame.turn = true;
                }
                else if (daggers > 0)
                {
                    //discard one dagger card
                    minigame.discard.push(minigame.aiHand[lowDagger]);
                    minigame.aiHand.splice(lowDagger, 1);
                    minigame.aiAction = true;
                    minigame.turn = true;
                }
                else if (jesters > 0 && minigame.inplay.length > 0)
                {
                    //play a jester to steal the highest value card of the enemy or an ace if this has high pawns or if it would cripple the player's score

                    if (stealAce == true) //steal the ace if that makes the most sense...
                    {
                        minigame.aiInplay.push(minigame.aiHand[jester]);
                        minigame.aiHand.splice(jester, 1);

                        minigame.aiInplay.push(minigame.inplay[playerAce]);
                        minigame.inplay.splice(playerAce, 1);
                    }
                    else //or steal the strongest card
                    {
                        minigame.aiInplay.push(minigame.aiHand[jester]);
                        minigame.aiHand.splice(jester, 1);

                        if (strongestCardNormal == true)
                        {
                            minigame.aiInplay.push(minigame.inplay[strongestCard]);
                            minigame.inplay.splice(strongestCard, 1);
                        }
                        else
                        {
                            minigame.aiInplay.push(minigame.special[strongestCard]);
                            minigame.special.splice(strongestCard, 1);
                        }
                    }

                    minigame.aiAction = true;
                    minigame.turn = true;
                }
                else if (jesters > 0)
                {
                    //play one jester without using its ability
                    minigame.aiInplay.push(minigame.aiHand[jester]);
                    minigame.aiHand.splice(jester, 1);
                    minigame.aiAction = true;
                    minigame.turn = true;
                }
                else
                {
                    minigame.turn = true;
                }
            }
        }
    }

    //draw game cards
    for (var mi = 0; mi < minigame.hand.length; mi++)
    {
        if (minigame.hand[mi].hover == true)
        {
            cardDrawer(100 * (1 + mi) + 300, 40, Math.PI, 0.45, LXX, minigame.hand[mi]);
            minigame.hand[mi].hover = false;
        }
        else
        {
            cardDrawer(100 * (1 + mi) + 300, 40, Math.PI, 0.4, LXX, minigame.hand[mi]);
        }
    }
    for (var mi = 0; mi < minigame.special.length; mi++)
    {
        cardDrawer(850 * (1 + mi) + 150, 425, Math.PI, 1, XXX, minigame.special[mi]);
    }
    for (var mi = 0; mi < minigame.aiSpecial.length; mi++)
    {
        if (minigame.aiSpecial[0].hover == true)
        {
            cardDrawer(50 * (1 + mi) + 150, 225, Math.PI, 1.05, XXX, minigame.aiSpecial[mi]);
            minigame.aiSpecial[0].hover = false;
        }
        else
        {
            cardDrawer(50 * (1 + mi) + 150, 225, Math.PI, 1, XXX, minigame.aiSpecial[mi]);
        }
    }
    for (var mi = 0; mi < minigame.inplay.length; mi++)
    {
        cardDrawer(125 * (1 + mi) + 75, 425, Math.PI, 1, XXX, minigame.inplay[mi]);
    }
    for (var mi = 0; mi < minigame.aiInplay.length; mi++)
    {
        if (minigame.aiInplay[mi].hover == true)
        {
            cardDrawer(-125 * (1 + mi) + 1125, 225, Math.PI, 1.05, XXX, minigame.aiInplay[mi]);
            minigame.aiInplay[mi].hover = false;
        }
        else
        {
            cardDrawer(-125 * (1 + mi) + 1125, 225, Math.PI, 1, XXX, minigame.aiInplay[mi]);
        }
    }

    if (minigame.deck.length > 0)
    {
        cardDrawer(1200, 150, Math.PI, 1, XXX, minigame.deck[minigame.deck.length - 1]);
    }

    if (minigame.discard.length > 0)
    {
        cardDrawer(1200, 375, Math.PI, 1, XXX, minigame.discard[minigame.discard.length - 1]);
    }
}

function chess()
{
    XXX.drawImage(borda, 0, 0, 847, 882, 400, 0, 847 * 0.8, 882 * 0.8);
    LXX.drawImage(borda, -60, 0, 1500, 140);
    //console.log(minigame.ajedrez);
    //minigame.turn = true; //test
    // minigame.col = true; //test

    if (minigame.turn != true || minigame.aiTurn == true)
    {
        minigame.aiPlayChess();
    }

    if (escapeKey == true && minigame.turn == true && minigame.aiTurn != true)
    {
        minigame.chessSelect = -1;
        minigame.myMoves = [];
    }

    if (minigame.turn == true && minigame.aiTurn != true)
    {
        if (minigame.chessSelect != -1)
        {
            minigame.myMoves = minigame.chessMoves(minigame.chessSelect, minigame.ajedrez);
        }
    }

    //draw chessboard w/t pieces
    if (minigame.col == true) //player plays white
    {
        for (var kla = 0; kla < 8; kla++)
        {
            for (var kli = 0; kli < 8; kli++)
            {
                if (mouseX >= (minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseX < (minigame.ajedrez[kla + 8 * kli].X) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseY >= (9 - minigame.ajedrez[kla + 8 * kli].Y - 1) * minigame.chessScale * 80 * 0.825 + 15 && mouseY < (9 - minigame.ajedrez[kla + 8 * kli].Y) * minigame.chessScale * 80 * 0.825 + 15 && minigame.turn == true && minigame.aiTurn != true)
                {
                    if (clicked == true)
                    {
                        // if (minigame.ajedrez[kla + 8 * kli].material != "none")
                        // {
                        //     minigame.chessSelect = minigame.ajedrez[kla + 8 * kli];
                        //     clicked = false;
                        // }

                        if (minigame.ajedrez[kla + 8 * kli].material[0] == "w")
                        {
                            minigame.chessSelect = minigame.ajedrez[kla + 8 * kli];
                            clicked = false;
                        }
                    }
                    //minigame.ajedrez[kla * (kli + 1)].
                    if (minigame.chessSelect == -1 && minigame.turn == true && minigame.aiTurn != true)
                    {
                        if (minigame.ajedrez[kla + 8 * kli].material != "none" && minigame.ajedrez[kla + 8 * kli].material[0] == "w")
                        {
                            XXX.save();
                            XXX.globalAlpha = 0.4;
                            XXX.beginPath();
                            XXX.fillStyle = "green";
                            XXX.fillRect((minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5, (9 - minigame.ajedrez[kla + 8 * kli].Y - 1) * minigame.chessScale * 80 * 0.825 + 15, 80 * 0.8 * minigame.chessScale, 80 * 0.8 * minigame.chessScale);
                            XXX.restore();
                        }
                        else if (minigame.ajedrez[kla + 8 * kli].material != "none")
                        {
                            XXX.save();
                            XXX.globalAlpha = 0.4;
                            XXX.beginPath();
                            XXX.fillStyle = "red";
                            XXX.fillRect((minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5, (9 - minigame.ajedrez[kla + 8 * kli].Y - 1) * minigame.chessScale * 80 * 0.825 + 15, 80 * 0.8 * minigame.chessScale, 80 * 0.8 * minigame.chessScale);
                            XXX.restore();
                        }
                        else
                        {
                            XXX.save();
                            XXX.globalAlpha = 0.4;
                            XXX.beginPath();
                            XXX.fillStyle = "gold";
                            XXX.fillRect((minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5, (9 - minigame.ajedrez[kla + 8 * kli].Y - 1) * minigame.chessScale * 80 * 0.825 + 15, 80 * 0.8 * minigame.chessScale, 80 * 0.8 * minigame.chessScale);
                            XXX.restore();
                        }
                    }
                }

                for (var klo = 0; klo < minigame.myMoves.length; klo++)
                {
                    if (player.getIntelligence() >= 15 && minigame.turn == true && minigame.aiTurn != true)
                    {
                        if (minigame.ajedrez[kla + 8 * kli].X == minigame.myMoves[klo].X && minigame.ajedrez[kla + 8 * kli].Y == minigame.myMoves[klo].Y)
                        {
                            XXX.save();
                            XXX.globalAlpha = 0.5;
                            XXX.beginPath();
                            XXX.fillStyle = "green";
                            XXX.fillRect((minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5, (9 - minigame.ajedrez[kla + 8 * kli].Y - 1) * minigame.chessScale * 80 * 0.825 + 15, 80 * 0.8 * minigame.chessScale, 80 * 0.8 * minigame.chessScale);
                            XXX.restore();
                        }
                    }

                    if (minigame.ajedrez[kla + 8 * kli].X == minigame.myMoves[klo].X && minigame.ajedrez[kla + 8 * kli].Y == minigame.myMoves[klo].Y && minigame.turn == true && minigame.aiTurn != true)
                    {
                        if (mouseX >= (minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseX < (minigame.ajedrez[kla + 8 * kli].X) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseY >= (9 - minigame.ajedrez[kla + 8 * kli].Y - 1) * minigame.chessScale * 80 * 0.825 + 15 && mouseY < (9 - minigame.ajedrez[kla + 8 * kli].Y) * minigame.chessScale * 80 * 0.825 + 15 && minigame.turn == true && minigame.aiTurn != true)
                        {
                            if (clicked == true)
                            {
                                clicked = false;
                                minigame.playChessMove(klo, minigame.ajedrez);
                            }
                        }
                    }
                }

                minigame.drawChess(minigame.ajedrez[kla + 8 * kli], (minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 + 1/2 * 80 * 0.8 * minigame.chessScale, (9 - minigame.ajedrez[kla + 8 * kli].Y - 1) * minigame.chessScale * 80 * 0.825 + 15 + 1/2 * 80 * 0.8 * minigame.chessScale, minigame.blackwhite);

                if (mouseX >= (minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseX < (minigame.ajedrez[kla + 8 * kli].X) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseY >= (9 - minigame.ajedrez[kla + 8 * kli].Y - 1) * minigame.chessScale * 80 * 0.825 + 15 && mouseY < (9 - minigame.ajedrez[kla + 8 * kli].Y) * minigame.chessScale * 80 * 0.825 + 15 && minigame.turn == true && minigame.aiTurn != true && player.getIntelligence() >= 5)
                {
                    if (minigame.ajedrez[kla + 8 * kli].material != "none" && minigame.ajedrez[kla + 8 * kli].material[0] == "b" && minigame.blackwhite == true)
                    {
                        //show chess notation
                        XXX.fillStyle = "white";
                        XXX.textAlign = "center";
                        XXX.font="Bold 32px Book Antiqua";
                        XXX.fillText(minigame.ajedrez[kla + 8 * kli].square, (minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 + 1/2 * 80 * 0.8 * minigame.chessScale, (9 - minigame.ajedrez[kla + 8 * kli].Y - 1) * minigame.chessScale * 80 * 0.825 + 15 + 1/2 * 80 * 0.8 * minigame.chessScale + 14 * minigame.chessScale);
                    }
                    else
                    {
                        //show chess notation
                        XXX.fillStyle = "black";
                        XXX.textAlign = "center";
                        XXX.font="Bold 32px Book Antiqua";
                        XXX.fillText(minigame.ajedrez[kla + 8 * kli].square, (minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 + 1/2 * 80 * 0.8 * minigame.chessScale, (9 - minigame.ajedrez[kla + 8 * kli].Y - 1) * minigame.chessScale * 80 * 0.825 + 15 + 1/2 * 80 * 0.8 * minigame.chessScale + 14 * minigame.chessScale);
                    }
                }
            }
        }
    }
    else
    {
        for (var kla = 0; kla < 8; kla++)
        {
            for (var kli = 0; kli < 8; kli++)
            {
                if (mouseX >= (9 - minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseX < (9 - minigame.ajedrez[kla + 8 * kli].X) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseY >= (minigame.ajedrez[kla + 8 * kli].Y -1) * minigame.chessScale * 80 * 0.825 + 15 && mouseY < (minigame.ajedrez[kla + 8 * kli].Y) * minigame.chessScale * 80 * 0.825 + 15 && minigame.turn == true && minigame.aiTurn != true)
                {
                    if (clicked == true)
                    {
                        // if (minigame.ajedrez[kla + 8 * kli].material != "none")
                        // {
                        //     minigame.chessSelect = minigame.ajedrez[kla + 8 * kli];
                        //     clicked = false;
                        // }

                        if (minigame.ajedrez[kla + 8 * kli].material[0] == "b")
                        {
                            minigame.chessSelect = minigame.ajedrez[kla + 8 * kli];
                            clicked = false;
                        }
                    }
                    //minigame.ajedrez[kla * (kli + 1)].
                    if (minigame.chessSelect == -1 && minigame.turn == true && minigame.aiTurn != true)
                    {
                        if (minigame.ajedrez[kla + 8 * kli].material != "none" && minigame.ajedrez[kla + 8 * kli].material[0] == "b")
                        {
                            XXX.save();
                            XXX.globalAlpha = 0.4;
                            XXX.beginPath();
                            XXX.fillStyle = "green";
                            XXX.fillRect((9 - minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5, (minigame.ajedrez[kla + 8 * kli].Y -1) * minigame.chessScale * 80 * 0.825 + 15, 80 * 0.8 * minigame.chessScale, 80 * 0.8 * minigame.chessScale);
                            XXX.restore();
                        }
                        else if (minigame.ajedrez[kla + 8 * kli].material != "none")
                        {
                            XXX.save();
                            XXX.globalAlpha = 0.4;
                            XXX.beginPath();
                            XXX.fillStyle = "red";
                            XXX.fillRect((9 - minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5, (minigame.ajedrez[kla + 8 * kli].Y -1) * minigame.chessScale * 80 * 0.825 + 15, 80 * 0.8 * minigame.chessScale, 80 * 0.8 * minigame.chessScale);
                            XXX.restore();
                        }
                        else
                        {
                            XXX.save();
                            XXX.globalAlpha = 0.4;
                            XXX.beginPath();
                            XXX.fillStyle = "gold";
                            XXX.fillRect((9 - minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5, (minigame.ajedrez[kla + 8 * kli].Y -1) * minigame.chessScale * 80 * 0.825 + 15, 80 * 0.8 * minigame.chessScale, 80 * 0.8 * minigame.chessScale);
                            XXX.restore();
                        }
                    }
                }

                for (var klo = 0; klo < minigame.myMoves.length; klo++)
                {
                    if (player.getIntelligence() >= 15)
                    {
                        if (minigame.ajedrez[kla + 8 * kli].X == minigame.myMoves[klo].X && minigame.ajedrez[kla + 8 * kli].Y == minigame.myMoves[klo].Y && minigame.turn == true && minigame.aiTurn != true)
                        {
                            XXX.save();
                            XXX.globalAlpha = 0.5;
                            XXX.beginPath();
                            XXX.fillStyle = "green";
                            XXX.fillRect((9 - minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5, (minigame.ajedrez[kla + 8 * kli].Y -1) * minigame.chessScale * 80 * 0.825 + 15, 80 * 0.8 * minigame.chessScale, 80 * 0.8 * minigame.chessScale);
                            XXX.restore();
                        }
                    }

                    if (minigame.ajedrez[kla + 8 * kli].X == minigame.myMoves[klo].X && minigame.ajedrez[kla + 8 * kli].Y == minigame.myMoves[klo].Y && minigame.turn == true && minigame.aiTurn != true)
                    {
                        if (mouseX >= (9 - minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseX < (9 - minigame.ajedrez[kla + 8 * kli].X) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseY >= (minigame.ajedrez[kla + 8 * kli].Y -1) * minigame.chessScale * 80 * 0.825 + 15 && mouseY < (minigame.ajedrez[kla + 8 * kli].Y) * minigame.chessScale * 80 * 0.825 + 15 && minigame.turn == true)
                        {
                            if (clicked == true)
                            {
                                clicked = false;
                                minigame.playChessMove(klo, kla, kli, minigame.ajedrez);
                            }
                        }
                    }
                }

                minigame.drawChess(minigame.ajedrez[kla + 8 * kli], (9 - minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 + 1/2 * 80 * 0.8 * minigame.chessScale, (minigame.ajedrez[kla + 8 * kli].Y -1) * minigame.chessScale * 80 * 0.825 + 15 + 1/2 * 80 * 0.8 * minigame.chessScale, minigame.blackwhite);

                if (mouseX >= (9 - minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseX < (9 - minigame.ajedrez[kla + 8 * kli].X) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 && mouseY >= (minigame.ajedrez[kla + 8 * kli].Y -1) * minigame.chessScale * 80 * 0.825 + 15 && mouseY < (minigame.ajedrez[kla + 8 * kli].Y) * minigame.chessScale * 80 * 0.825 + 15 && minigame.turn == true && minigame.aiTurn != true && player.getIntelligence() >= 5)
                {
                    if (minigame.ajedrez[kla + 8 * kli].material != "none" && minigame.ajedrez[kla + 8 * kli].material[0] == "b" && minigame.blackwhite == true)
                    {
                        //show chess notation
                        XXX.fillStyle = "white";
                        XXX.textAlign = "center";
                        XXX.font="Bold 32px Book Antiqua";
                        XXX.fillText(minigame.ajedrez[kla + 8 * kli].square, (9 - minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 + 1/2 * 80 * 0.8 * minigame.chessScale, (minigame.ajedrez[kla + 8 * kli].Y -1) * minigame.chessScale * 80 * 0.825 + 15 + 1/2 * 80 * 0.8 * minigame.chessScale + 14 * minigame.chessScale);
                    }
                    else
                    {
                        //show chess notation
                        XXX.fillStyle = "black";
                        XXX.textAlign = "center";
                        XXX.font="Bold 32px Book Antiqua";
                        XXX.fillText(minigame.ajedrez[kla + 8 * kli].square, (9 - minigame.ajedrez[kla + 8 * kli].X - 1) * minigame.chessScale * 80 * 0.825 + 415 + 0.5 + 1/2 * 80 * 0.8 * minigame.chessScale, (minigame.ajedrez[kla + 8 * kli].Y -1) * minigame.chessScale * 80 * 0.825 + 15 + 1/2 * 80 * 0.8 * minigame.chessScale + 14 * minigame.chessScale);
                    }
                }
            }
        }
    }
    //clicked = false;
}

function cardDrawer(X, Y, rotation, scale, context, card)
{
    //todo fix bug where the game crashes due to some sort of dud that the ai places (daggers)
    //todo make it so that the advanced ai can sense the special card and factor that into its strategy

    //Face Down
    if (card.faceup != true)
    {
        context.save();
        context.translate(X, Y);
        context.rotate(rotation);
        context.drawImage(cards, 1632, 985, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
        context.restore();
    }
    else
    {
        //knight
        if (card.suit == "Hearts" && card.number == "Knight")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1343, 16, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "Knight")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1344, 245, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "Knight")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1341, 459, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "Knight")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1338, 684, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //constable
        if (card.suit == "Hearts" && card.number == "Constable")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1487, 17, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "Constable")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1485, 245, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "Constable")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1482, 460, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "Constable")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1480, 683, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //countess
        if (card.suit == "Hearts" && card.number == "Countess")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1626, 16, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "Countess")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1627, 245, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "Countess")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1625, 458, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "Countess")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1621, 683, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //count
        if (card.suit == "Hearts" && card.number == "Count")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1768, 15, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "Count")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1769, 244, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "Count")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1763, 459, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "Count")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1760, 682, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //jester
        if (card.suit == "Jester" || card.number == "Jester")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1428, 989, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //2
        if (card.suit == "Hearts" && card.number == "2")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1101, 14, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "2")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1103, 241, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "2")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1101, 458, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "2")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 1101, 680, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //3
        if (card.suit == "Hearts" && card.number == "3")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 963, 13, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "3")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 963, 241, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "3")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 961, 457, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "3")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 966, 680, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //4
        if (card.suit == "Hearts" && card.number == "4")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 824, 13, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "4")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 828, 240, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "4")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 826, 457, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "4")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 829, 680, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //5
        if (card.suit == "Hearts" && card.number == "5")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 691, 14, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "5")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 692, 240, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "5")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 691, 457, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "5")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 694, 680, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //6
        if (card.suit == "Hearts" && card.number == "6")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 562, 15, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "6")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 561, 241, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "6")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 560, 457, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "6")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 561, 680, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //7
        if (card.suit == "Hearts" && card.number == "7")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 422, 14, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "7")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 424, 240, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "7")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 422, 457, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "7")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 421, 680, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //8
        if (card.suit == "Hearts" && card.number == "8")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 286, 13, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "8")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 288, 239, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "8")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 286, 456, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "8")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 285, 680, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //9
        if (card.suit == "Hearts" && card.number == "9")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 148, 13, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "9")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 146, 237, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "9")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 148, 457, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "9")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 148, 680, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }

        //10
        if (card.suit == "Hearts" && card.number == "10")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 8, 13, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Bottles" && card.number == "10")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 9, 239, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Clubs" && card.number == "10")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 11, 456, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
        else if (card.suit == "Daggers" && card.number == "10")
        {
            context.save();
            context.translate(X, Y);
            context.rotate(rotation);
            context.drawImage(cards, 12, 681, 122, 184, - 1/2 * 122 * scale, -1/2 * 184 * scale, 122 * scale, 184 * scale);
            context.restore();
        }
    }

    //test card center
    // context.beginPath();
    // context.fillStyle = "green";
    // context.arc(X, Y, 10, 0, 2*Math.PI);
    // context.fill();
}

function minigameLoop()
{
    if (minigame.setup == true)
    {
        minigame.setup = false;

        if (minigame.type == "Hearts & Daggers")
        {
            minigame.shuffle(true, true);
        }
        else if (minigame.type == "21")
        {
            minigame.shuffle(true, false);
        }
        else if (minigame.type == "Chess")
        {
            minigame.setupTabla();
            minigame.saveBord();

            minigame.preBoard = JSON.parse(JSON.stringify(minigame.ajedrez));
            minigame.valueSaveList = [];
            minigame.foeValueSaveList = [];
            minigame.hypoBoard = true;
        }
    }
    else
    {
        if (minigame.type == "Hearts & Daggers")
        {
            heartsAndDaggers();
        }
        else if (minigame.type == "21")
        {
            blackJack();
        }
        else if (minigame.type == "Chess")
        {
            chess();
        }
    }


    if (gameState == "minigame")
    {
        requestAnimationFrame(minigameLoop, CCC);
    }
    else
    {
        requestAnimationFrame(gameloopOfDestiny, CCC);
    }
}

