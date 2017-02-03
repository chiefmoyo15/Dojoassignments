$(document).ready(function(){
  // alert('its workdis');
  $(document).on('click', 'input[type=submit]',function(){

    var fName = $('#fname').val();
    var lName = $('#lname').val();
    var desc = $('#desc').val();

    // console.log(fName, lName, desc);
    $('#cards1').append('<div class="cards"><h1>'+fName+' '+'lName</h1><h4 id="switch">Click for description</h4><p id="info">'+desc+'</p></div>');
    return false;
  });
  $('#cards1').on('click', '.cards', function(){
      $(this).children().toggle('slow');
  });
});


// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
