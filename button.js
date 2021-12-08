$(window).load(function(){
	// Horizontal scroll
    if($(".js-page-scroll").length){
        $(".js-page-scroll").mCustomScrollbar({
        	axis:"x",
            theme:"dark-3",
            // scrollbarPosition: 'outside',
            advanced:{ autoExpandHorizontalScroll:true },

            callbacks:{
                    whileScrolling:function(){
                    	
                    	new WOW().init();
                        
                    }
                }
        });
    }
});