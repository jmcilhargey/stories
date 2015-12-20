var slider = function() {
    
    $('.menu-toggle').on('click', function(event){
    	event.preventDefault();
    	
    	// create menu variables
    	
    	var slideoutMenu = $('.menu');
    	var slideoutMenuWidth = $('.menu').width();
    	
    	// toggle open class
    	
    	slideoutMenu.toggleClass("open");
    	
    	// slide menu
    	
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	left: "0px"
	    	});	
    	} else {
	    	slideoutMenu.animate({
		    	left: -slideoutMenuWidth
	    	}, 250);	
    	}
    	
    });
};

$(document).ready(slider);
$(document).on('page:load', slider);
