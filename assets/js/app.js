import $ from "jquery";
import Foundation from 'foundation-sites';
import AOS from 'aos';
import mapboxgl from 'mapbox-gl';
import Swiper from 'swiper';

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

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true
  })
});
