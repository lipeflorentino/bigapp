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
            
        if(position > 750){
            $('.vNav').show();
        }
        else if(position < 740){
            $('.vNav').hide();
            index=0;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        }
        if(position > 750 && position <1400){
            $('.vNav').removeClass('vNav-cor2');
            $('.vNav').addClass('vNav-cor1');
            $('#site').addClass('dc-show');
            $('#site-img').addClass('dc-img-show');
            index=1;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        }
        else if(position > 1450 && position < 2500){
            $('.vNav').removeClass('vNav-cor1');
            $('.vNav').addClass('vNav-cor2');
            $('.fc-img').addClass('fc-show-img');
            index=2;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
            if(position > 1750){
                $('#feature1').addClass('show-feature');    
            }
            if(position > 1900){
                $('#feature2').addClass('show-feature');    
            }
            if(position > 2000){
                $('#feature3').addClass('show-feature');    
            }
            if(position > 2100){
                $('#feature4').addClass('show-feature');       
            }
        }
        else if(position > 2550 && position < 2950){
            $('.vNav').removeClass('vNav-cor2');
            $('.vNav').addClass('vNav-cor1');
            index=2;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        }
        else if(position > 3000 && position < 4040){
            $('.vNav').removeClass('vNav-cor1');
            $('.vNav').addClass('vNav-cor2');
            index=3;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
            if(position > 3250){
                $('.emp-box div:first-child').addClass('emp-show');
                $('.emp-text p:first-child').addClass('emp-show');
            }
            if(position > 3450){
                $('.emp-box div:nth-child(2)').addClass('emp-show');
                $('.emp-text p:nth-child(2)').addClass('emp-show');
            }
            if(position > 3650){
                $('.emp-box div:nth-child(3)').addClass('emp-show');
                $('.emp-text p:nth-child(3)').addClass('emp-show');
            }
        }
        else if(position > 4040 && position < 5140){
            $('.vNav').removeClass('vNav-cor2');
            $('.vNav').addClass('vNav-cor1');
            index=3;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
            if(position > 4210){
                $('#info-tecno').addClass('p-infos-show');
            }
            if(position > 4340){
                $('#info-pessoas').addClass('p-infos-show');
            }
            if(position > 4460){
                $('#info-gestao').addClass('p-infos-show');
            }
            if(position > 4740){
                $('#info-negocios').addClass('p-infos-show');
            }
            if(position > 4800){
                $('#info-marcas').addClass('p-infos-show');
            }
            if(position > 5100){
                $('#info-proposito').addClass('p-infos-show');
            }
        }
        else if(position > 5180 && position < 6400){
            $('.vNav').removeClass('vNav-cor1');
            $('.vNav').addClass('vNav-cor2');
            index=4;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        }
        else{
            $('.vNav').removeClass('vNav-cor2');
            $('.vNav').addClass('vNav-cor1');
            index=5;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        }
    });
});
