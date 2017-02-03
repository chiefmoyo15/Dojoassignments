$(document).ready(function(){

  $('#hideShow').hide();
  $('#toggleShow').hide();
  $('#slideDownShow').hide();
  $('#slideUpShow').hide();
  $('#fade').hide();
  $('#addClassShow').hide();
  $('#appendShow').hide();
  $('#valShow').hide();

//Show and Hide
  $('.listItem1').click(function(){
    var heading = $(this).html();
    $('.heading').html(heading);
    $('#hideShow').show();
    $('.hide').click(function(){
      $('#hideShow').hide();
    })
  })
//toggle
  $('.listItem2').click(function(){
    var heading = $(this).html();
    $('.heading').html(heading);
    $('#toggleShow').show();
    $('.hide').click(function(){
      $('#toggleShow').hide();
    })
    $('.imageToggle').click(function(){
      $('.imgToggle').toggle();
    })
  })
//slideDown
  $('.listItem3').click(function(){
    var heading = $(this).html();
    $('.heading').html(heading);
    $('#slideDownShow').show();
    $('.hide').click(function(){
      $('#slideDownShow').hide();
    })
    $('.slideDownToggle').click(function(){
      $('.imgSlideDown').toggle("slow");
    })
  })
//slideUp
  $('.listItem4').click(function(){
    var heading = $(this).html();
    $('.heading').html(heading);
    $('#slideUpShow').show();
    $('.hide').click(function(){
      $('#slideUpShow').hide();
    })
    $('.slideUpToggle').click(function(){
      $('.imgToggle2').slideToggle("slow");
    })
  })
  //Fade
  $('.listItem5').click(function(){
    var heading = $(this).html();
    $('.heading').html(heading);
    $('#fade').show();
    $('.hide').click(function(){
      $('#fade').hide();
    })
    $('.fadeIn').click(function(){
      $('.textToFade').fadeIn(300);
    })
    $('.fadeOut').click(function(){
      $('.textToFade').fadeOut(300);
    })
  })
  //Add class
  $('.listItem6').click(function(){
    var heading = $(this).html();
    $('.heading').html(heading);
    $('#addClassShow').show();
    $('.hide').click(function(){
      $('#addClassShow').hide();
    })
    $('.addClass').click(function(){
      var back = $('p').addClass('.background');
      console.log(back);
    })
  })
  // Append
  $('.listItem7').click(function(){
    var heading = $(this).html();
    $('.heading').html(heading);
    $('#appendShow').show();
    $('.hide').click(function(){
      $('#appendShow').hide();
    })
    $('.append').click(function(){
      var back = $('.tTaP').append(heading);

    })
  })
  // val
  $('.listItem8').click(function(){
    var heading = $(this).html();
    $('.heading').html(heading);
    $('#valShow').show();
    $('.hide').click(function(){
      $('#valShow').hide();
    })
    $('.val').click(function(){
      var back =$(this).html($('input').val('value'));
      $('.tTaP8').append(back);
      console.log(back);

    })
  })
});
