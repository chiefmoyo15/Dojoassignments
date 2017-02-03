 
$('document').ready(function(){
  $('form').submit(function(){
    var data = $('#fname').val();
    var data1 = $('#lname').val();
    var data2 = $('#email').val();
    var data3 = $('#phone').val();

    console.log(data,data1,data2,data3);

    $('.fname').append(data);
    $('.lname').append(data1);
    $('.email').append(data2);
    $('.contact').append(data3);

    $('.userF').each(function(){
      this.reset();
    });
    return false;

  })
});
