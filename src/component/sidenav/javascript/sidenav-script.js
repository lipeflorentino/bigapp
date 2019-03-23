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
            if(position < 90){
                $('.vNav').hide();
            }
            else{
                $('.vNav').show();
            }
            if(position < 700){
                $('.vNav ul li').addClass('vNav-cor1');
            }
            else if(position <1400 && position > 700){
                $('.vNav ul li').removeClass('vNav-cor1');
                $('.vNav ul li').addClass('vNav-cor2');
            }
            else if(position <2100 && position > 1400){
                $('.vNav ul li').removeClass('vNav-cor2');
                $('.vNav ul li').addClass('vNav-cor1');
            }
            else if(position <2800 && position > 2100){
                $('.vNav ul li').removeClass('vNav-cor1');
                $('.vNav ul li').addClass('vNav-cor2');
            }
            else{
                $('.vNav ul li').removeClass('vNav-cor2');
                $('.vNav ul li').addClass('vNav-cor1');
            }
        });
        
    	$('.vNav ul li a').click(function () {
			$('.vNav ul li a').removeClass('active');
			$(this).addClass('active');
		});   
	});
