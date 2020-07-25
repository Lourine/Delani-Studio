$(document).ready(function(){
  //what we do section (Toggle between the icons)
  $('.main').click(function(){
    $(this).children(".hide").toggle();
    $(this).children(".show").toggle();
  });
})