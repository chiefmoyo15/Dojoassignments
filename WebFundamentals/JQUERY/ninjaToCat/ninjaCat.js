$(document).ready(function(){
  $('img').click(function(){
    var data = $(this).attr('data-alt-src');
    $(this).attr('data-alt-src', $(this).attr('src'));
      $(this).attr('src', data);
  })
})
