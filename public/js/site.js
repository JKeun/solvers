//navbar fix
$(window).scroll(function() {
	if($(this).scrollTop() > 50) {
		$('.dc-navbar-custom').addClass('dc-navbar-fixed');
		$('progress').removeClass('dc-progress-noshow');
        $('.dc-logo-text-dark').css({'fill':'#001A33'});
        $('.dc-logo-poly-dark').css({'fill':'#003366'});
	} else {
		$('.dc-navbar-custom').removeClass('dc-navbar-fixed');
		$('progress').addClass('dc-progress-noshow');
        $('.dc-logo-text-dark').css({'fill':'#FFFFFF'});
        $('.dc-logo-poly-dark').css({'fill':'#FFFFFF'});
	}
});

//progress bar
$(document).ready(function(){
    
    var getMax = function(){
        return $(document).height() - $(window).height();
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.dc-progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
});

