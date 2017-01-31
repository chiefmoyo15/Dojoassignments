function birthday(){
  var daysUntilMyBirthday = 60;

  while (daysUntilMyBirthday != 0) {

    if (daysUntilMyBirthday>30) {
      console.log(daysUntilMyBirthday," days untl my birthday. Such a long time... :(");
      daysUntilMyBirthday--;

    } else if (daysUntilMyBirthday <30 && daysUntilMyBirthday>5) {
      console.log("I cant believe its less than than 30 days before my birthday. Its ",daysUntilMyBirthday, " to be exact!");
      daysUntilMyBirthday--;

    } else {
      console.log(daysUntilMyBirthday,"DAYS UNTIL MY BIRTHDAY");
      daysUntilMyBirthday--;
    }
  }
  console.log("*******************************************************");
  console.log("*                                                     *");
  console.log("*         !!!!!     HAPPY BIRTHDAY     !!!!!          *");
  console.log("*                                                     *");
  console.log("*******************************************************");
}
birthday(60);
