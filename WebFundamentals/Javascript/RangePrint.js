function range(start, end, skip){
  for (var i = start; i <end; i+=2) {
    if(i==skip){
      continue;
    }else {
      console.log(i);
    }
  }
}
console.log(range(2,10,2));
