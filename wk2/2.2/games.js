const games = window.prompt(
    "There are five games in this collection. Pick a number between 1 and 5 and I'll tell you about that game!"
  );
  
const myGames = [
    {
    game: "Link to the Past",
    type: "Super Nintendo",
    players: "single",
    description: "a young boy who looks for his uncle and ends up defeating evil in two worlds",
},
  
    {
    game: "Mega Man X",
    type: "Super Nintendo",
    players: "single",
    description: "a found robot getting strong and preventing a robot insurrection",
},
  
    {
    game: "Chrono Trigger",
    type: "Super Nintendo",
    players: "single",
    description: "a teen boy who travels through time to undo great evil all while making new friends.",
},
  
    {
    game: "Mortal Kombat",
    type: "Sega Genesis",
    players: "two",
    description: "completely draining your opponets health bar with fighting, and the first to win two rounds wins the match.",
},

    {
    game: "Cool Spot",
    type: "Game Gear",
    players: "single",
    description: "the mascot for the soft drink brand 7 Up. And it is not a good game.",
},

  ];
  
window.alert(
    "You selected " +
    myGames[games - 1].game +
    ", which is a " +
    myGames[games - 1].players +
    " player game" +
    " that is played using a " +
    myGames[games - 1].type +
    ". It is about " +
    myGames[games - 1].description
  );