'use strict'

// process form
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript#using_formdata_bound_to_a_form_element
window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();
    const FD = new FormData( form );

    XHR.addEventListener( "load", function(event) {
      form.reset();
      form.style.display = 'none';
      document.querySelector('.w-form-done').style.display = 'block';
    } );

    XHR.addEventListener( "error", function( event ) {
      document.querySelector('.w-form-fail').style.display = 'block';
    } );

    XHR.open( "POST", "https://mailthis.to/jannet" );
    XHR.send( FD );
  }

  const form = document.getElementById( "email-form" );

  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    sendData();
  } );
} );

//top button
const btn = $('#top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});