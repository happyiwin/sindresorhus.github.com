Galleria.requires(1.25, 'This version of Classic theme requires Galleria 1.2.5 or later');
// TODO: Add fullscreen button
// - create a custom loader graphic
(function($) {
	Galleria.addTheme({
	    name: 'sindresorhus',
	    author: 'Galleria',
	    css: 'galleria.sindresorhus.css',
	    defaults: {
	        debug: false,
	        autoplay: false,
	        carousel: false,
	        imageCrop: true,
	        initialTransition: 'fade',
	        maxScaleRatio: 1,
	        showCounter: false,
	        showInfo: false,
	        thumbnails: false,
	        transition: 'fade'
	    },
	    init: function(options) {
	    	var galleria = this;
	        this.bind('loadstart', function(e) {
	            if ( !e.cached ) {
	                this.$('loader').show().fadeTo(200, 0.4);
	            }
	        });
	        this.bind('loadfinish', function(e) {
	            this.$('loader').fadeOut(200);
	        });
	        // TODO: need to set new with when the window is resized
	        $(window).resize(function() {
	        	galleria.setOptions({
	        	    width: '100px'
	        	}).refreshImage();
	        });
	        // Real fullscreen support in webkit
	        if ( typeof document.webkitCancelFullScreen !== 'undefined' ) {
	        	this.bind('fullscreen_enter', function() {
					$container[0].webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	        	})
	        	.bind('fullscreen_exit', function() {
	        		document.webkitCancelFullScreen();
	        	})
	        }
	        /*
	        (window).resize(function() {
	                if (ja) w.getActiveImage() && la(w.getActiveImage().width);
	                else {
	                  var $ = aa.width();
	                  if ($ !== X) {
	                    X = $;
	                    d(M, {
	                      width: P,
	                      delay: 50,
	                      debug: true,
	                      onheight: function() {
	                        aa.height(M.height())
	                      }
	                    })
	                  }
	                }
	                */
	    }
	});
})(jQuery);
