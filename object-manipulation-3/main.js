console.log('Lodash is loaded:', typeof _ !== 'undefined');

var cards = [
  {
    suit: 'Spades',
    rank: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'
    ]
  },
  {
    suit: 'Clubs',
    rank: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'
    ]
  },
  {
    suit: 'Diamonds',
    rank: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'
    ]
  },
  {
    suit: 'Hearts',
    rank: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'
    ]
  }
];

var players = [
  {
    name: 'Player 1',
    hand: [],
    deal: true
  },
  {
    name: 'Player 2',
    hand: [],
    deal: true
  },
  {
    name: 'Player 3',
    hand: [],
    deal: true
  },
  {
    name: 'Player 4',
    hand: [],
    deal: true
  }
];

var giveCards = 2;
function dealCards() {
  var playerCount = players.length;
  let playerNum = 0;
  while (playerNum < playerCount) {
    var cardsDealt = 0;
    var suitNum;
    var rankNum;
    var randomSuit;
    var randomRank;
    var cardsInString = '';
    while (cardsDealt < giveCards) {
      suitNum = Math.floor(Math.random() * cards.length);
      rankNum = Math.floor(Math.random() * cards[suitNum].rank.length);
      randomSuit = cards[suitNum].suit;
      randomRank = cards[suitNum].rank[rankNum];
      players[playerNum].hand.push([randomSuit, randomRank]);
      if (cardsDealt === 1) {
        cardsInString += ' and ' + randomSuit + '-' + randomRank;
      } else {
        cardsInString += randomSuit + '-' + randomRank;
      }
      cards[suitNum].rank.splice(rankNum, 1);
      cardsDealt++;
    }
    console.log(players[playerNum].name + ' has ' + cardsInString);
    playerNum++;
  }
  console.log('Calculating the scores, please wait');
  setTimeout(calcScore, 5000);
}

console.log('Shuffling the deck and dealing cards, please wait');
setTimeout(dealCards, 3500);

function calcScore() {
  for (var i = 0; i < players.length; i++) {
    var score = 0;
    for (var k = 0; k < players[i].hand.length; k++) {
      if (Number.isInteger(players[i].hand[k][1])) {
        score += players[i].hand[k][1];
      } else if (players[i].hand[k][1] === 'ace') {
        score += 11;
      } else {
        score += 10;
      }
    }
    players[i].score = score;
    console.log(players[i].name + ' has scored ' + players[i].score);
  }
  console.log('declaring the winner, please wait');
  setTimeout(calcWinner, 3500);
}

function calcWinner() {
  var highest = 0;
  var winner = '';
  for (var i = 0; i < players.length; i++) {
    if (players[i].score > highest) {
      highest = players[i].score;
      winner = players[i].name + ' has won with highest score of ' + highest;
    }
  }
  console.log(winner);
}
