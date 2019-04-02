import $ from 'jquery';

$(document).ready(function() {
    
    $('.header-title').addClass('anim1');
    $('.header-img').addClass('anim2');
    
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
            scrollTop: $(document).height()
        }, 1500);
        return false;
    });
});
