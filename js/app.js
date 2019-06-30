const cardDeck = [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }];


let playerPoints = 0;
let computerPoints = 0;

let computerHand = [];
let playerHand = [];
const cardsPlayed = [];
let gameOn = true;

const computerChooses = () => {
  for (let i = 0; i < 3; i++){
      const card = Math.floor(Math.random()*cardDeck.length);
      cardsPlayed.push(card)
      console.log(`Computer chose ${card}`);
      computerHand = card;
      return computerHand;
    }
  }
  computerChooses();

const playerChooses = () => {
  for (let i = 0; i < 3; i++){
  card = Math.floor(Math.random()*cardDeck.length);
  cardsPlayed.push(card)
  console.log(`Player chose ${card}`);
  playerHand = card;
  return playerHand
}
}
playerChooses();

function pokemonGo(){
  for(let i = 0; i < 3; i++){
if (playerChooses() > computerChooses()){
      playerPoints = playerPoints += 1;
      console.log(`Player earned a point! ${playerPoints} for player`)
  } 
  else if (playerChooses() < computerChooses()){
    computerPoints = computerPoints += 1;
    console.log(`Computer earned a point! ${computerPoints} for the computer.`)
  } 
  else if (playerChooses() === computerChooses()){
    console.log("It's a tie!")
}
  }
  function keepTrackOfPoints(){
    console.log(`Player has won ${playerPoints} rounds!`);
    console.log(`Computer has won ${computerPoints} rounds!`);
}
 keepTrackOfPoints();
}
pokemonGo();


function wouldYouLikeToContinue(){
  const response = prompt("Want to continue? yes/no");
  if(response === 'no'){
    gameOn = false;
  }
}
wouldYouLikeToContinue();

function gameStart(){
while (gameOn === true){
  computerChooses();
  playerChooses();
  pokemonGo();
  wouldYouLikeToContinue();
}
}
gameStart()








