import $ from "jquery";
import Foundation from 'foundation-sites';
import AOS from 'aos';
import mapboxgl from 'mapbox-gl';
import Flickity from 'flickity';

$(document).foundation();

$('body').removeClass('fade-out');

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   easing: 'ease-in-out-quart', 
   duration: 600,
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});

$('.carousel').flickity({
// cellAlign: 'left',
// wrapAround: true,
pageDots: false,
imagesLoaded: true,
// percentPosition: false,
arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});

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
