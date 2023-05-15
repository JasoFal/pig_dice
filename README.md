Describe: PlayerInfo

Test: "It should store key-value pairs for username and score.
Code:
PlayerInfo(playerName);
this.playerName = Me;
Expected Output: {playerName: "Me", playerScore: 0}

Test: "It should roll a score between 1 and 6 and record the number to score."
Code:
let player1 = new PlayerInfo(me);
player1.rollForScore();
Expected Output: {playerName: "Me", playerScore: RandomNum};
