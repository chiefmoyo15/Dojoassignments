function randomChance(quarters){
  var countWon = 0;
  var countLost = 0;
  var coinsWon = Math.floor(Math.random()*100);

  while (quarters!=0) {
    var chance = Math.floor(Math.random()*100);
    if (chance == 1) {
      console.log("I won!!!!");
      console.log(countWon++);
      quarters+=coinsWon;
      return quarters;
    }else {
      console.log("I lost!!!");
      quarters--;
      console.log(countLost++);
      continue;
    }
  }
}
randomChance(50);
