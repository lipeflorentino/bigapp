import $ from 'jquery';

$(document).ready(function($){
    var parPosition = [];
    
    $('.content').each(function() {
        parPosition.push($(this).offset().top);
    });
    
	$('.vNav ul li a').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1500);
		return false;
	});
    
	$('.vNav ul li a').click(function () {
		$('.vNav ul li a').removeClass('active');
		$(this).addClass('active');
	}); 
    
   $(document).scroll(function(){
        var position = $(document).scrollTop(),
            index; 
            for (var i=0; i<parPosition.length; i++) {
                if (position <= parPosition[i]) {
                    index = i;
                    break;
                }
            }
        $('.vNav ul li a').removeClass('active');
        $('.vNav ul li a:eq('+index+')').addClass('active');
        
        if(position > 560){
            $('.vNav').show();
        }
        else{
            $('.vNav').hide();
        }
        if(position <1200 && position > 560){
            $('.vNav').removeClass('vNav-cor1');
            $('.vNav').addClass('vNav-cor2');
        }
        else if(position <1800 && position > 1200){
            $('.vNav').removeClass('vNav-cor2');
            $('.vNav').addClass('vNav-cor1');
        }
        else if(position <2400 && position > 1800){
            $('.vNav').removeClass('vNav-cor2');
            $('.vNav').addClass('vNav-cor1');
        }
        else{
            $('.vNav').removeClass('vNav-cor1');
            $('.vNav').addClass('vNav-cor2');
        }
    });
    
	$('.vNav ul li a').click(function () {
		$('.vNav ul li a').removeClass('active');
		$(this).addClass('active');
	});   
});
