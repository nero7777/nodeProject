var superheroes = require("superheroes");
var teamOne = [];
var teamTwo = [];
for(var i=0;i<3;i++){
     teamOne[i] = superheroes.random();
}

for(var i=0;i<3;i++){
    teamTwo[i] = superheroes.random();
}


console.log("Today's match will be a 3 v 3 match between the teams ");
console.log("==============================================================")
console.log("Team One : " + teamOne)
console.log("                         vs")
console.log("Team Two : " + teamTwo)
console.log("==============================================================")
