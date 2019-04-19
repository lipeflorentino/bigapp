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
            
        if(position > 750 && position < 7480){
            $('.vNav').show();
        }
        else if(position > 7500){
            $('.vNav').hide();
        }
        if(position < 740){
            $('.vNav').hide();
            index=0;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        }
        if(position > 250 && position <400){
            $('.dc-titulo').addClass('dc-titulo-show');
        }
        if(position > 750 && position <1400){
            $('.vNav').removeClass('vNav-cor2');
            $('.vNav').addClass('vNav-cor1');
            index=1;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
            $('.dc-container').addClass('dc-container-show');
        }
        else if(position > 1401 && position < 2500){
            $('.vNav').removeClass('vNav-cor1');
            $('.vNav').addClass('vNav-cor2');
            $('.fc-img').addClass('fc-show-img');
            index=2;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
            if(position > 1550){
                $('#feature1').addClass('show-feature');    
            }
            if(position > 1700){
                $('#feature2').addClass('show-feature');    
            }
            if(position > 1800){
                $('#feature3').addClass('show-feature');    
            }
            if(position > 1950){
                $('#feature4').addClass('show-feature');       
            }
        }
        else if(position > 2501 && position < 2950){
            $('.vNav').removeClass('vNav-cor2');
            $('.vNav').addClass('vNav-cor1');
            index=2;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        }
        else if(position > 2951 && position < 3640){
            $('.vNav').removeClass('vNav-cor1');
            $('.vNav').addClass('vNav-cor2');
            index=3;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
            if(position > 3250){
                $('.emp-container .emp-box:first-child').addClass('emp-show');
            }
            if(position > 3450){
                $('.emp-container .emp-box:nth-child(2)').addClass('emp-show');
            }
            if(position > 3650){
                $('.emp-container .emp-box:nth-child(3)').addClass('emp-show');
            }
        }
        else if(position > 3641 && position < 5470){
            $('.vNav').removeClass('vNav-cor2');
            $('.vNav').addClass('vNav-cor1');
            index=3;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
            if(position > 3820){
                $('#info-tecno').addClass('p-infos-show');
            }
            if(position > 4060){
                $('#info-pessoas').addClass('p-infos-show');
            }
            if(position > 4220){
                $('#info-gestao').addClass('p-infos-show');
            }
            if(position > 4460){
                $('#info-negocios').addClass('p-infos-show');
            }
            if(position > 4620){
                $('#info-marcas').addClass('p-infos-show');
            }
            if(position > 4760){
                $('#info-proposito').addClass('p-infos-show');
            }
        }
        else if(position > 5471 && position < 6560){
            $('.vNav').removeClass('vNav-cor1');
            $('.vNav').addClass('vNav-cor2');
            index=4;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
            $('.cc-carousel').addClass('cc-carousel-show');
        }
        else if(position > 6561){
            $('.vNav').removeClass('vNav-cor2');
            $('.vNav').addClass('vNav-cor1');
            index=5;
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
            $('.ft-form').addClass('ft-form-show');
        }
    });
});
