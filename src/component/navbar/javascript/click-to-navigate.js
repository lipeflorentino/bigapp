import $ from 'jquery';

$(document).ready(function() {
    
    $('.header-title').addClass('anim1');
    $('.header-img').addClass('anim2');
    
    $('.btn-class').click(function() {
        window.scrollTo(0, 0);
    });
    $('.btn-class-footer').click(function() {
        window.scrollTo(0, 0);
    });
    
    $('.toHome').click(function() {
        $('html, body').animate({
            scrollTop: '0px'
        }, 1500);
        return false;
    });

    $('.toDigital').click(function() {
        $('html, body').animate({
            scrollTop: '1100px'
        }, 1500);
        return false;
    });
        
    $('.toEbook').click(function() {
        $('html, body').animate({
            scrollTop: '1800px'
        }, 1500);
        return false;
    });
    
    $('.toEmpresa').click(function() {
        $('html, body').animate({
            scrollTop: '3450px'
        }, 1500);
        return false;
    });
    
    $('.toClientes').click(function() {
        $('html, body').animate({
            scrollTop: '5840px'
        }, 1500);
        return false;
    });
    
    $('.toContato').click(function() {
        $('html, body').animate({
            scrollTop: '7180px'
        }, 1500);
        return false;
    });
});
