console.log('Lodash is loaded:', typeof _ !== 'undefined');

var converter = [
  {
    ace: 11,
    jack: 10,
    queen: 10,
    king: 10
  }
];

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
    hand: []
  },
  {
    name: 'Player 2',
    hand: []
  },
  {
    name: 'Player 3',
    hand: []
  },
  {
    name: 'Player 4',
    hand: []
  }
];

// random suit
// var randomSuit = Math.floor(Math.random() * cards.length);

// random rank for that suit
// var randomRank = Math.floor(Math.random() * cards[randomSuit].rank.length);

console.log(cards);

// need a function to deal 2 cards to each player. no duplicate cards.
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
}

// function whoWins() {
//   for ()
// }
dealCards();
console.log(converter);
