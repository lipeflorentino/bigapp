import $ from 'jquery';

$(document).ready(function() {
    
    $('.dc-menu ul li .losango').click(function() {
        $('.dc-menu ul li .losango').removeClass('dc-active');
		$(this).addClass('dc-active');
    });
    
    $('#display-site').click(function() {
        
        //para alterar texto
        $('#site').addClass('dc-show');
        $('#sistema').removeClass('dc-show');
        $('#ideias').removeClass('dc-show');
        $('#design').removeClass('dc-show');
        //para alterar imagem
        $('#site-img').addClass('dc-img-show');
        $('#sistema-img').removeClass('dc-img-show');
        $('#ideias-img').removeClass('dc-img-show');
        $('#design-img').removeClass('dc-img-show');
        //para alterar cor de fundo
        //$('#toDigital').removeClass('dc-black-bcgd');
        
    });
    
    $('#display-sistema').click(function() {
        $('#site').removeClass('dc-show');
        $('#site-img').removeClass('dc-img-show');
        $('#sistema').addClass('dc-show');
        $('#sistema-img').addClass('dc-img-show');
        $('#ideias').removeClass('dc-show');
        $('#ideias-img').removeClass('dc-img-show');
        $('#design').removeClass('dc-show');
        $('#design-img').removeClass('dc-img-show');
    });
    
    $('#display-ideias').click(function() {
        $('#site').removeClass('dc-show');
        $('#site-img').removeClass('dc-img-show');
        $('#sistema').removeClass('dc-show');
        $('#sistema-img').removeClass('dc-img-show');
        $('#ideias').addClass('dc-show');
        $('#ideias-img').addClass('dc-img-show');
        $('#design').removeClass('dc-show');
        $('#design-img').removeClass('dc-img-show');
    });
    
    $('#display-design').click(function() {
        $('#site').removeClass('dc-show');
        $('#site-img').removeClass('dc-img-show');
        $('#sistema').removeClass('dc-show');
        $('#sistema-img').removeClass('dc-img-show');
        $('#ideias').removeClass('dc-show');
        $('#ideias-img').removeClass('dc-img-show');
        $('#design').addClass('dc-show');
        $('#design-img').addClass('dc-img-show');
    });
});