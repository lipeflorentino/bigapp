import $ from 'jquery';

$(document).ready(function() {
    
    $('.dc-menu ul li .losango').click(function() {
        $('.dc-menu ul li .losango').removeClass('dc-active');
		$(this).addClass('dc-active');
    });
    
    $('#display-site').click(function() {
        $('#site').addClass('dc-show');
        $('#sistema').removeClass('dc-show');
        $('#ideias').removeClass('dc-show');
        $('#design').removeClass('dc-show');
    });
    
    $('#display-sistema').click(function() {
        $('#site').removeClass('dc-show');
        $('#sistema').addClass('dc-show');
        $('#ideias').removeClass('dc-show');
        $('#design').removeClass('dc-show');
    });
    
    $('#display-ideias').click(function() {
        $('#site').removeClass('dc-show');
        $('#sistema').removeClass('dc-show');
        $('#ideias').addClass('dc-show');
        $('#design').removeClass('dc-show');
    });
    
    $('#display-design').click(function() {
        $('#site').removeClass('dc-show');
        $('#sistema').removeClass('dc-show');
        $('#ideias').removeClass('dc-show');
        $('#design').addClass('dc-show');
    });
});