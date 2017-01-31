function time(HOUR, MINUTE, PERIOD){
  if (PERIOD=="AM") {
    if (MINUTE<30) {
      console.log("It's just after ", HOUR, " in the morning");
    } else {
      HOUR++;
      console.log("It's almost ", HOUR, " in the morning");
    }
  } else {
    if (MINUTE<30) {
      console.log("It's just after ", HOUR, " in the evening");
    } else {
      HOUR++;
      if(HOUR==13){
      HOUR =HOUR-12;
      console.log("It's almost ", HOUR, " in the evening");
    }else {
      console.log("It's almost ", HOUR, " in the evening");
    }
    }
  }
}
time(1,49,"AM");
