$(document).ready(function(){
 $('img').hover(function(){
   var data = $(this).attr('data-alt');
   $(this).attr('data-alt', $(this).attr('src'));
     $(this).attr('src', data);
 }, function(){
   var data = $(this).attr('data-alt');
   $(this).attr('data-alt', $(this).attr('src'));
     $(this).attr('src', data);
 });
});
