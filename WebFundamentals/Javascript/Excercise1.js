function assignment(){
  // 4 Numbers
  var temperature = -43;
  var cost = 59.99;
  var countryCode = 67;
  var zipcode = 55389;

  // 3 strings
  var model = "mazda";
  var food = "eggs";
  var cityName = "Mzuzu";

  // 2 Boleans
  var inAfrica = true;
  var poor = false;

  // undefined
  var array = [undefined];

  console.log(temperature +" C is very cold for a city like " +cityName);
  console.log("The air ticket costed $" + cost + " more than the " + food);
  console.log("England's country code is " + countryCode + " most people drive a " +model);
  console.log("United State's zipcodes have a 5 digit number ie " + zipcode);
  console.log("Bolean values can either be " + inAfrica +" or "+poor);
  console.log("This is undefined array",arra[0]);
}

assignment();
