  function howMuch(days){
    var value = 0.01;
    for (var i = 1; i <days; i++) {
      value*=2;
        }
    return value;
  }
  function howLong(dollar){
    var value = 0.01;
    for (var i = 1; value<dollar; i++) {
      value*=2;
    }
    return i;
  }
 console.log(howLong(10000));
 console.log(howMuch(21));
