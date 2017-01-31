function randomChance(quarters){

  var coinsWon = Math.floor(Math.random()*100);

  while (quarters!=0) {
    var chance = Math.floor(Math.random()*100);
    if (chance == 1) {
      console.log("I won!!!!");
      quarters+=coinsWon;
      return quarters;
    }else {
      console.log("I lost!!!");
      quarters--;
      continue;
    }
  }
}
randomChance(50);
