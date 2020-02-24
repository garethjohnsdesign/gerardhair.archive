import $ from "jquery";
import Foundation from 'foundation-sites';
import AOS from 'aos';
import mapboxgl from 'mapbox-gl';

$(document).foundation();

$('body').removeClass('fade-out');

// 2. Animate on Scroll
// --------------------

/*
$(function() {
  AOS.init({ 
   easing: 'ease-in-out-quart', 
   duration: 600,
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});
*/

$('.main-carousel').Flickity({
  // options
  cellAlign: 'left',
  contain: true
});

/*
$("[data-menu-underline-from-center] a").addClass("underline-from-center");

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $(".navigation").addClass("navigation--active");
      $(".navigation__logo").addClass("navigation__logo--active");
    } else{
      $(".navigation").removeClass("navigation--active");
      $(".navigation__logo").removeClass("navigation__logo--active");
    }
  });
});
*/
