var main= function() {
  /* Push the body and the icon nav to the right by 285px over 200ms */
  $('.iconMenu').click(function() {
     $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back on clicking the X */
  $('.iconClose').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 
    200);
  });
};


$(document).ready(main);