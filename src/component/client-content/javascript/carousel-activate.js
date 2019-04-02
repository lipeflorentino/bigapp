import $ from 'jquery';

$(document).ready(function() {
    $('#btn-slide1').click(function(){
       $('#slide1').addClass('slide-activate'); 
       $('#slide2').removeClass('slide-activate'); 
       $('#slide3').removeClass('slide-activate'); 
    });
    $('#btn-slide2').click(function(){
       $('#slide1').removeClass('slide-activate'); 
       $('#slide2').addClass('slide-activate'); 
       $('#slide3').removeClass('slide-activate'); 
    });
    $('#btn-slide3').click(function(){
       $('#slide1').removeClass('slide-activate'); 
       $('#slide2').removeClass('slide-activate'); 
       $('#slide3').addClass('slide-activate'); 
    });
    $('#btn-slide4').click(function(){
       $('#slide1').addClass('slide-activate'); 
       $('#slide2').removeClass('slide-activate'); 
       $('#slide3').removeClass('slide-activate'); 
    });
    $('#btn-slide5').click(function(){
       $('#slide1').removeClass('slide-activate'); 
       $('#slide2').addClass('slide-activate'); 
       $('#slide3').removeClass('slide-activate'); 
    });
    $('#btn-slide6').click(function(){
       $('#slide1').removeClass('slide-activate'); 
       $('#slide2').removeClass('slide-activate'); 
       $('#slide3').addClass('slide-activate'); 
    });
});