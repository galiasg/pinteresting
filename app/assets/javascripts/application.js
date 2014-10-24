// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
// First we declare all the variables will be using
var slides, slides_total, slide_current;
// Create an event listener to make sure code will execute after HTML is available
document.addEventListener('DOMContentLoaded', function(){

  document.getElementsByClassName('prev')[0].addEventListener('click', function () {
    if(slide_current>0){
      slide_current--;
    } else {
      slide_current = (slides_total-1);
    }
    changePicture(slide_current);
  });

  document.getElementsByClassName('next')[0].addEventListener('click', function () {
    if(slide_current<3){
      slide_current++;
    } else {
      slide_current = (slides_total-4);
    }
    changePicture(slide_current);
    ga ('send','event', 'slider', 'clickforward', 'clicked forward on a slide show',1)
    mixpanel.track("Clicked forward");
  });


  document.getElementsByClassName('reset')[0].addEventListener('click', function () {
    changePicture(0);
  });

  document.getElementsByClassName('mydiv')[0].addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor="red";
  });

  slides = document.getElementsByClassName('col-sm-12');
  slides_total=slides.length;
  slide_current=0;
  changePicture(1);

  // set interval to call function every x milliseconds
  window.setInterval(function() {
    // if reach end of slides, reset
    if(slide_current >= (slides_total -1)){
      slide_current=0;
    // otherwise go to next slide
  } else {
    slide_current++;
  }
  changePicture(slide_current);
},3000);
});


//receives the number and hides images and only displays that image number
var slides, slides_total, slide_current;

document.addEventListener('DOMContentLoaded', function(){

  document.getElementsByClassName('prev')[0].addEventListener('click', function () {
    if(slide_current>0){
      slide_current--;
    } else {
      slide_current = (slides_total-1);
    }
    changePicture(slide_current);
  });

document.getElementsByClassName('next')[0].addEventListener('click', function () {
    if(slide_current<3){
      slide_current++;
    } else {
      slide_current = (slides_total-4);
    }
    changePicture(slide_current);
    ga ('send','event', 'slider', 'clickforward', 'clicked forward on a slide show',1)
    mixpanel.track("Clicked forward");
  });

function changePicture (slide) {
  for(var i=0; i<slides_total; i++){
    slides[i].style.display='none';
  }
  slides[slide].style.display='block';
};
document.getElementsByClassName('reset')[0].addEventListener('click', function () {
    changePicture(0);
  });

document.getElementsByClassName('mydiv')[0].addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor="red";
  });

  slides = document.getElementsByClassName('col-sm-12');
  slides_total=slides.length;
  slide_current=0;
  changePicture(1);

  // set interval to call function every x milliseconds
  window.setInterval(function() {
    // if reach end of slides, reset
    if(slide_current >= (slides_total -1)){
      slide_current=0;
    // otherwise go to next slide
  } else {
    slide_current++;
  }
  changePicture(slide_current);
},3000);
});


