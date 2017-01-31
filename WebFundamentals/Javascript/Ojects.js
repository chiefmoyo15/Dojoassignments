
function Objects(users){
  for (var key in users) {
    console.log(key);
    var obj = users[key];
    for (var i = 0; i < users[key].length; i++) {
      console.log(i+1, " ", obj[i].first_name, " ", obj[i].last_name, " - ", obj[i].first_name.length+obj[i].last_name.length);
    }
  }
}
var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }
 Objects(users);
