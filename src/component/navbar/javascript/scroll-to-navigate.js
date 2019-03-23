import $ from 'jquery';

$(document).ready(function() {
    
    $('.toHome').click(function() {
        $('html, body').animate({
            scrollTop: '0px'
        }, 1500);
        return false;
    });

    $('.toDigital').click(function() {
        $('html, body').animate({
            scrollTop: '700px'
        }, 1500);
        return false;
    });
        
    $('.toEbook').click(function() {
        $('html, body').animate({
            scrollTop: '1400px'
        }, 1500);
        return false;
    });

    $('.toClientes').click(function() {
        $('html, body').animate({
            scrollTop: '2100px'
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
