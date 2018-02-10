// $(window).sr = ScrollReveal();
// sr.reveal('.row');
$(document).ready(function(){ //Update dimensions on resize
  sw = $(window).width();
  sh = $(window).height();
  checkMobile();
});
  
//Check if Mobile
function checkMobile() {
  mobile = (sw <= 768) ? true : false;

  if (mobile) {
    $(wrapper).removeClass('toggled');
  }
}