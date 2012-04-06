/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright �� 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright �� 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*
 * jQuery shuffle
 *
 * Copyright (c) 2008 Ca-Phun Ung <caphun at yelotofu dot com>
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://yelotofu.com/labs/jquery/snippets/shuffle/
 *
 * Shuffles an array or the children of a element container.
 * This uses the Fisher-Yates shuffle algorithm <http://jsfromhell.com/array/shuffle [v1.0]>
 */
 
(function($){

	$.fn.shuffle = function() {
		return this.each(function(){
			var items = $(this).children().clone(true);
			return (items.length) ? $(this).html($.shuffle(items)) : this;
		});
	}
	
	$.shuffle = function(arr) {
		for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
		return arr;
	}
	
})(jQuery);

// github.com/paulirish/jquery-ajax-localstorage-cache
// dependent on Modernizr's localStorage test

$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {


  // Cache it ?
  if( !Modernizr.localstorage || !options.localCache ) return;

  var hourstl = options.cacheTTL || 5;

  var cacheKey = options.cacheKey || 
                 options.url.replace(/jQuery.*/,'') + options.type + options.data;
  
  // isCacheValid is a function to validate cache
  if( options.isCacheValid &&  ! options.isCacheValid() ){
    localStorage.removeItem( cacheKey );
  }
  // if there's a TTL that's expired, flush this item
  var ttl = localStorage.getItem(cacheKey + 'cachettl');
  if (ttl && ttl < +new Date()){
    localStorage.removeItem( cacheKey );
    localStorage.removeItem( cacheKey  + 'cachettl');
    ttl = 'expired';
  }
  
  var value = localStorage.getItem( cacheKey );
  if( value ){
    //In the cache? So get it, apply success callback & abort the XHR request
    // parse back to JSON if we can.
    if (value.indexOf('{') === 0) value = JSON.parse(value);
    options.success( value );
    // Abort is broken on JQ 1.5 :(
    jqXHR.abort();
  }else{

    //If it not in the cache, we change the success callback, just put data on localstorage and after that apply the initial callback
    if ( options.success ) {
      options.realsuccess = options.success;
    }  
    options.success = function( data ) {
      var strdata = data;
      if (this.dataType.indexOf('json') === 0) strdata = JSON.stringify(data);
      localStorage.setItem( cacheKey, strdata );
      if (options.realsuccess) options.realsuccess( data );
    };

    // store timestamp
    if (!ttl || ttl === 'expired'){
      localStorage.setItem( cacheKey  + 'cachettl', +new Date() + 1000 * 60 * 60 * hourstl);
    }
    
  }
});
/* ===================================================
 * bootstrap-transition.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function( $ ) {

  $(function () {

    "use strict"

    /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
     * ======================================================= */

    $.support.transition = (function () {
      var thisBody = document.body || document.documentElement
        , thisStyle = thisBody.style
        , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined

      return support && {
        end: (function () {
          var transitionEnd = "TransitionEnd"
          if ( $.browser.webkit ) {
          	transitionEnd = "webkitTransitionEnd"
          } else if ( $.browser.mozilla ) {
          	transitionEnd = "transitionend"
          } else if ( $.browser.opera ) {
          	transitionEnd = "oTransitionEnd"
          }
          return transitionEnd
        }())
      }
    })()

  })

}( window.jQuery );
/* =============================================================
 * bootstrap-collapse.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

!function( $ ){

  "use strict"

  var Collapse = function ( element, options ) {
  	this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options["parent"]) {
      this.$parent = $(this.options["parent"])
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension = this.dimension()
        , scroll = $.camelCase(['scroll', dimension].join('-'))
        , actives = this.$parent && this.$parent.find('.in')
        , hasData

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', 'show', 'shown')
      this.$element[dimension](this.$element[0][scroll])

    }

  , hide: function () {
      var dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', 'hide', 'hidden')
      this.$element[dimension](0)
    }

  , reset: function ( size ) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element.addClass('collapse')
    }

  , transition: function ( method, startEvent, completeEvent ) {
      var that = this
        , complete = function () {
            if (startEvent == 'show') that.reset()
            that.$element.trigger(completeEvent)
          }

      this.$element
        .trigger(startEvent)
        [method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
  	}

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
  	}

  }

  /* COLLAPSIBLE PLUGIN DEFINITION
  * ============================== */

  $.fn.collapse = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = typeof option == 'object' && option
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSIBLE DATA-API
  * ==================== */

  $(function () {
    $('body').on('click.collapse.data-api', '[data-toggle=collapse]', function ( e ) {
      var $this = $(this), href
        , target = $this.attr('data-target')
          || e.preventDefault()
          || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
        , option = $(target).data('collapse') ? 'toggle' : $this.data()
      $(target).collapse(option)
    })
  })

}( window.jQuery )

/* =========================================================
 * bootstrap-modal.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function( $ ){

  "use strict"

 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function ( content, options ) {
    this.options = $.extend({}, $.fn.modal.defaults, options)
    this.$element = $(content)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this

        if (this.isShown) return

        $('body').addClass('modal-open')

        this.isShown = true
        this.$element.trigger('show')

        escape.call(this)
        backdrop.call(this, function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          !that.$element.parent().length && that.$element.appendTo(document.body) //don't move modals dom position

          that.$element
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element.addClass('in')

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.trigger('shown') }) :
            that.$element.trigger('shown')

        })
      }

    , hide: function ( e ) {
        e && e.preventDefault()

        if (!this.isShown) return

        var that = this
        this.isShown = false

        $('body').removeClass('modal-open')

        escape.call(this)

        this.$element
          .trigger('hide')
          .removeClass('in')

        $.support.transition && this.$element.hasClass('fade') ?
          hideWithTransition.call(this) :
          hideModal.call(this)
      }

  }


 /* MODAL PRIVATE METHODS
  * ===================== */

  function hideWithTransition() {
    var that = this
      , timeout = setTimeout(function () {
          that.$element.off($.support.transition.end)
          hideModal.call(that)
        }, 500)

    this.$element.one($.support.transition.end, function () {
      clearTimeout(timeout)
      hideModal.call(that)
    })
  }

  function hideModal( that ) {
    this.$element
      .hide()
      .trigger('hidden')

    backdrop.call(this)
  }

  function backdrop( callback ) {
    var that = this
      , animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      if (this.options.backdrop != 'static') {
        this.$backdrop.click($.proxy(this.hide, this))
      }

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      doAnimate ?
        this.$backdrop.one($.support.transition.end, callback) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop.one($.support.transition.end, $.proxy(removeBackdrop, this)) :
        removeBackdrop.call(this)

    } else if (callback) {
      callback()
    }
  }

  function removeBackdrop() {
    this.$backdrop.remove()
    this.$backdrop = null
  }

  function escape() {
    var that = this
    if (this.isShown && this.options.keyboard) {
      $(document).on('keyup.dismiss.modal', function ( e ) {
        e.which == 27 && that.hide()
      })
    } else if (!this.isShown) {
      $(document).off('keyup.dismiss.modal')
    }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.modal = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = typeof option == 'object' && option
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL DATA-API
  * ============== */

  $(function () {
    $('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , option = $target.data('modal') ? 'toggle' : $.extend({}, $target.data(), $this.data())

      e.preventDefault()
      $target.modal(option)
    })
  })

}( window.jQuery );
/* ===========================================================
 * bootstrap-tooltip.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function( $ ) {

  "use strict"

 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function ( element, options ) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function ( type, element, options ) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger != 'manual') {
        eventIn  = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function ( options ) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function ( e ) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) {
        self.show()
      } else {
        self.hoverState = 'in'
        setTimeout(function() {
          if (self.hoverState == 'in') {
            self.show()
          }
        }, self.options.delay.show)
      }
    }

  , leave: function ( e ) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.hide) {
        self.hide()
      } else {
        self.hoverState = 'out'
        setTimeout(function() {
          if (self.hoverState == 'out') {
            self.hide()
          }
        }, self.options.delay.hide)
      }
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .appendTo(inside ? this.$element : document.body)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .css(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , setContent: function () {
      var $tip = this.tip()
      $tip.find('.tooltip-inner').html(this.getTitle())
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).remove()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.remove()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.remove()
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      title = title.toString().replace(/(^\s*|\s*$)/, "")

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function () {
      this[this.tip().hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , delay: 0
  , selector: false
  , placement: 'top'
  , trigger: 'hover'
  , title: ''
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  }

}( window.jQuery );

/* ==========================================================
 * bootstrap-carousel.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function( $ ){

  "use strict"

 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.carousel.defaults, options)
    this.options.slide && this.slide(this.options.slide)
  }

  Carousel.prototype = {

    cycle: function () {
      this.interval = setInterval($.proxy(this.next, this), this.options.interval)
      return this
    }

  , to: function (pos) {
      var $active = this.$element.find('.active')
        , children = $active.parent().children()
        , activePos = children.index($active)
        , that = this

      if (pos > (children.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activePos == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activePos ? 'next' : 'prev', $(children[pos]))
    }

  , pause: function () {
      clearInterval(this.interval)
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      if (!$.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger('slide')
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      } else {
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.trigger('slide')
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  $.fn.carousel = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = typeof option == 'object' && option
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (typeof option == 'string' || (option = options.slide)) data[option]()
      else data.cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL DATA-API
  * ================= */

  $(function () {
    $('body').on('click.carousel.data-api', '[data-slide]', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , options = !$target.data('modal') && $.extend({}, $target.data(), $this.data())
      $target.carousel(options)
      e.preventDefault()
    })
  })

}( window.jQuery );
(function() {
  var $, defaults, n, prefix, transformTypes, vendor, vendorNames;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  $ = typeof jQuery !== "undefined" && jQuery !== null ? jQuery : require('jqueryify');
  if (!$) {
    throw 'jQuery required';
  }
  defaults = {
    duration: 400,
    queue: true,
    easing: ''
  };
  vendor = $.browser.mozilla ? 'moz' : void 0;
  vendor || (vendor = 'webkit');
  prefix = "-" + vendor + "-";
  vendorNames = n = {
    transition: "" + prefix + "transition",
    transform: "" + prefix + "transform",
    transitionEnd: "" + vendor + "TransitionEnd"
  };
  transformTypes = ['scale', 'scaleX', 'scaleY', 'scale3d', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'rotate3d', 'translate', 'translateX', 'translateY', 'translateZ', 'translate3d', 'skew', 'skewX', 'skewY', 'matrix', 'matrix3d', 'perspective'];
  $.fn.queueNext = function(callback, type) {
    type || (type = "fx");
    return this.queue(function() {
      var redraw;
      callback.apply(this, arguments);
      redraw = this.offsetHeight;
      return jQuery.dequeue(this, type);
    });
  };
  $.fn.emulateTransitionEnd = function(duration) {
    var callback, called;
    called = false;
    $(this).one(n.transitionEnd, function() {
      return called = true;
    });
    callback = __bind(function() {
      if (!called) {
        return $(this).trigger(n.transitionEnd);
      }
    }, this);
    return setTimeout(callback, duration);
  };
  $.fn.transform = function(properties) {
    var key, transforms, value;
    transforms = [];
    for (key in properties) {
      value = properties[key];
      if (__indexOf.call(transformTypes, key) >= 0) {
        transforms.push("" + key + "(" + value + ")");
        delete properties[key];
      }
    }
    if (transforms.length) {
      properties[n.transform] = transforms.join(' ');
    }
    return $(this).css(properties);
  };
  $.fn.gfx = function(properties, options) {
    var callback, opts;
    opts = $.extend({}, defaults, options);
    properties[n.transition] = "all " + opts.duration + "ms " + opts.easing;
    callback = function() {
      var _ref;
      $(this).css(n.transition, '');
      if ((_ref = opts.complete) != null) {
        _ref.apply(this, arguments);
      }
      return $(this).dequeue();
    };
    return this[opts.queue === false ? 'each' : 'queue'](function() {
      $(this).one(n.transitionEnd, callback);
      $(this).transform(properties);
      return $(this).emulateTransitionEnd(opts.duration + 50);
    });
  };
  $.fn.gfxPopIn = function(options) {
    var _ref;
    if (options == null) {
      options = {};
    }
        if ((_ref = options.scale) != null) {
      _ref;
    } else {
      options.scale = '.2';
    };
    $(this).queueNext(function() {
      return $(this).transform({
        '-webkit-transform-origin': '50% 50%',
        '-moz-transform-origin': '50% 50%',
        scale: options.scale,
        opacity: '0',
        display: 'block'
      });
    });
    return $(this).gfx({
      scale: '1',
      opacity: '1'
    }, options);
  };
  $.fn.gfxPopOut = function(options) {
    $(this).queueNext(function() {
      return $(this).transform({
        '-webkit-transform-origin': '50% 50%',
        '-moz-transform-origin': '50% 50%',
        scale: '1',
        opacity: '1'
      });
    });
    $(this).gfx({
      scale: '.2',
      opacity: '0'
    }, options);
    return $(this).queueNext(function() {
      return $(this).transform({
        display: 'none',
        opacity: '1',
        scale: '1'
      });
    });
  };
  $.fn.gfxFadeIn = function(options) {
    var _ref;
    if (options == null) {
      options = {};
    }
        if ((_ref = options.duration) != null) {
      _ref;
    } else {
      options.duration = 1000;
    };
    $(this).queueNext(function() {
      return $(this).css({
        opacity: '0'
      }).show();
    });
    return $(this).gfx({
      opacity: 1
    }, options);
  };
  $.fn.gfxFadeOut = function(options) {
    if (options == null) {
      options = {};
    }
    $(this).queueNext(function() {
      return $(this).css({
        opacity: 1
      });
    });
    $(this).gfx({
      opacity: 0
    }, options);
    return $(this).queueNext(function() {
      return $(this).hide().css({
        opacity: 1
      });
    });
  };
  $.fn.gfxShake = function(options) {
    var distance, _ref, _ref2;
    if (options == null) {
      options = {};
    }
        if ((_ref = options.duration) != null) {
      _ref;
    } else {
      options.duration = 100;
    };
        if ((_ref2 = options.easing) != null) {
      _ref2;
    } else {
      options.easing = 'ease-out';
    };
    distance = options.distance || 20;
    $(this).gfx({
      translateX: "-" + distance + "px"
    }, options);
    $(this).gfx({
      translateX: "" + distance + "px"
    }, options);
    $(this).gfx({
      translateX: "-" + distance + "px"
    }, options);
    $(this).gfx({
      translateX: "" + distance + "px"
    }, options);
    return $(this).queueNext(function() {
      return $(this).transform({
        translateX: 0
      });
    });
  };
  $.fn.gfxBlip = function(options) {
    if (options == null) {
      options = {};
    }
    options.scale || (options.scale = '1.15');
    $(this).gfx({
      scale: options.scale
    }, options);
    return $(this).gfx({
      scale: '1'
    }, options);
  };
  $.fn.gfxExplodeIn = function(options) {
    if (options == null) {
      options = {};
    }
    options.scale || (options.scale = '3');
    $(this).queueNext(function() {
      return $(this).transform({
        scale: options.scale,
        opacity: '0',
        display: 'block'
      });
    });
    return $(this).gfx({
      scale: '1',
      opacity: '1'
    }, options);
  };
  $.fn.gfxExplodeOut = function(options) {
    if (options == null) {
      options = {};
    }
    options.scale || (options.scale = '3');
    $(this).queueNext(function() {
      return $(this).transform({
        scale: '1',
        opacity: '1'
      });
    });
    $(this).gfx({
      scale: options.scale,
      opacity: '0'
    }, options);
    if (options.reset !== false) {
      $(this).queueNext(function() {
        return $(this).transform({
          scale: '1',
          opacity: '1',
          display: 'none'
        });
      });
    }
    return this;
  };
  $.fn.gfxFlipIn = function(options) {
    if (options == null) {
      options = {};
    }
    $(this).queueNext(function() {
      return $(this).transform({
        rotateY: '180deg',
        scale: '.8',
        display: 'block'
      });
    });
    return $(this).gfx({
      rotateY: 0,
      scale: 1
    }, options);
  };
  $.fn.gfxFlipOut = function(options) {
    if (options == null) {
      options = {};
    }
    $(this).queueNext(function() {
      return $(this).transform({
        rotateY: 0,
        scale: 1
      });
    });
    $(this).gfx({
      rotateY: '-180deg',
      scale: '.8'
    }, options);
    if (options.reset !== false) {
      $(this).queueNext(function() {
        return $(this).transform({
          scale: 1,
          rotateY: 0,
          display: 'none'
        });
      });
    }
    return this;
  };
  $.fn.gfxRotateOut = function(options) {
    if (options == null) {
      options = {};
    }
    $(this).queueNext(function() {
      return $(this).transform({
        rotateY: 0
      }).fix();
    });
    $(this).gfx({
      rotateY: '-180deg'
    }, options);
    if (options.reset !== false) {
      $(this).queueNext(function() {
        return $(this).transform({
          rotateY: 0,
          display: 'none'
        }).unfix();
      });
    }
    return this;
  };
  $.fn.gfxRotateIn = function(options) {
    if (options == null) {
      options = {};
    }
    $(this).queueNext(function() {
      return $(this).transform({
        rotateY: '180deg',
        display: 'block'
      }).fix();
    });
    $(this).gfx({
      rotateY: 0
    }, options);
    $(this).queueNext(function() {
      return $(this).unfix();
    });
    return $ = jQuery;
  };
  $.fn.gfxSlideOut = function(options) {
    var distance, opacity;
    if (options == null) {
      options = {};
    }
    options.direction || (options.direction = 'right');
    distance = options.distance || 100;
    if (options.direction === 'left') {
      distance *= -1;
    }
    distance += "%";
    opacity = options.fade ? 0 : 1;
    $(this).queueNext(function() {
      return $(this).show();
    });
    $(this).gfx({
      translate3d: "" + distance + ",0,0",
      opacity: opacity
    }, options);
    return $(this).queueNext(function() {
      return $(this).transform({
        translate3d: "0,0,0",
        opacity: 1
      }).hide();
    });
  };
  $.fn.gfxSlideIn = function(options) {
    var distance, opacity;
    if (options == null) {
      options = {};
    }
    options.direction || (options.direction = 'right');
    distance = options.distance || 100;
    if (options.direction === 'left') {
      distance *= -1;
    }
    distance += "%";
    opacity = options.fade ? 0 : 1;
    $(this).queueNext(function() {
      return $(this).transform({
        translate3d: "" + distance + ",0,0",
        opacity: opacity
      }).show();
    });
    return $(this).gfx({
      translate3d: "0,0,0",
      opacity: 1
    }, options);
  };
  $.fn.fix = function() {
    return $(this).each(function() {
      var element, parentOffset, styles;
      element = $(this);
      styles = element.offset();
      parentOffset = element.parent().offset();
      styles.left -= parentOffset.left;
      styles.top -= parentOffset.top;
      styles.position = 'absolute';
      return element.css(styles);
    });
  };
  $.fn.unfix = function() {
    return $(this).each(function() {
      var element;
      element = $(this);
      return element.css({
        position: '',
        top: '',
        left: ''
      });
    });
  };
}).call(this);

(function() {
  var $, chrome11, chromeMatch, chromeRegex, defaults, sides;
  $ = jQuery;
  sides = {
    front: {
      rotateY: '0deg',
      rotateX: '0deg'
    },
    back: {
      rotateX: '-180deg',
      rotateX: '0deg'
    },
    right: {
      rotateY: '-90deg',
      rotateX: '0deg'
    },
    left: {
      rotateY: '90deg',
      rotateX: '0deg'
    },
    top: {
      rotateY: '0deg',
      rotateX: '-90deg'
    },
    bottom: {
      rotateY: '0deg',
      rotateX: '90deg'
    }
  };
  defaults = {
    width: 300,
    height: 300
  };
  $.fn.gfxCube = function(options) {
    var back, bottom, element, front, left, opts, right, tZ, top, wrapper;
    opts = $.extend({}, defaults, options);
    element = $(this);
    tZ = opts.translateZ || opts.width / 2;
    if (typeof tZ === 'number') {
      tZ += 'px';
    }
    element.transform({
      position: 'relative',
      width: opts.width,
      height: opts.height,
      '-webkit-perspective': '3000',
      '-moz-perspective': '3000',
      '-webkit-perspective-origin': '50% 50%',
      '-moz-perspective-origin': '50% 50%'
    });
    wrapper = $('<div />');
    wrapper.addClass('gfxCubeWrapper');
    wrapper.transform({
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      overflow: 'visible',
      rotateY: '0deg',
      rotateX: '0deg',
      translateZ: "-" + tZ,
      '-webkit-transform-style': 'preserve-3d',
      '-moz-transform-style': 'preserve-3d',
      '-webkit-transform-origin': '50% 50%',
      '-moz-transform-origin': '50% 50%'
    });
    element.children().wrapAll(wrapper).css({
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      overflow: 'hidden'
    });
    front = element.find('.front');
    back = element.find('.back');
    right = element.find('.right');
    left = element.find('.left');
    top = element.find('.top');
    bottom = element.find('.bottom');
    front.transform({
      rotateY: '0deg',
      translateZ: tZ
    });
    back.transform({
      rotateY: '180deg',
      translateZ: tZ
    });
    right.transform({
      rotateY: '90deg',
      translateZ: tZ
    });
    left.transform({
      rotateY: '-90deg',
      translateZ: tZ
    });
    top.transform({
      rotateX: '90deg',
      translateZ: tZ
    });
    bottom.transform({
      rotateX: '-90deg',
      translateZ: tZ
    });
    return $(this).bind('cube', function(e, type) {
      wrapper = element.find('.gfxCubeWrapper');
      return wrapper.gfx($.extend({}, {
        translateZ: "-" + tZ
      }, sides[type]));
    });
  };
  chromeRegex = /(Chrome)[\/]([\w.]+)/;
  chromeMatch = chromeRegex.exec(navigator.userAgent) || [];
  chrome11 = chromeRegex[1] && chromeRegex[2].test(/^12\./);
  if (!$.browser.webkit || chrome11) {
    $.fn.gfxCube = function(options) {
      var element, opts, wrapper;
      opts = $.extend({}, defaults, options);
      element = $(this);
      element.css({
        position: 'relative',
        width: opts.width,
        height: opts.height
      });
      wrapper = $('<div />');
      wrapper.addClass('gfxCubeWrapper');
      wrapper.transform({
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        overflow: 'visible'
      });
      element.children().wrapAll(wrapper).css({
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        overflow: 'hidden'
      });
      wrapper = element.find('.gfxCubeWrapper');
      wrapper.children('*:not(.front)').hide();
      return element.bind('cube', function(e, type) {
        wrapper.children().hide();
        return wrapper.children("." + type).show();
      });
    };
  }
}).call(this);

/*! ResponsiveSlides.js v1.23
 * http://responsive-slides.viljamis.com
 *
 * Copyright (c) 2011-2012 @viljamis
 * Available under the MIT license
 */

/* ResponsiveSlides.js is a tiny jQuery plugin that creates a responsive
 * slideshow using images inside <ul>. It works with wide range of browsers
 * including all IE versions from IE6 and up. It also adds css max-width
 * support for IE6 and other browsers that don't natively support it. Only
 * dependency is jQuery (1.4 and up) and that all the images are same size.
 *
 * Features:
 * - Fully responsive
 * - Under 1kb minified and gzipped
 * - Simple markup using unordered lists
 * - Settings for transition and timeout durations
 * - Multiple slideshows supported
 * - Automatic and manual fade
 * - Works in all major desktop and mobile browsers
 * - Captions and other html-elements supported inside slides
 * - Separate pagination and next/prev controls
 * - Possibility to choose where the controls append to
 * - Images can be wrapped inside links
 * - Optional 'before' and 'after' callbacks
 *
 */

/*jslint browser: true, sloppy: true, vars: true, plusplus: true, maxerr: 50, indent: 2 */

(function ($, window, i) {
  $.fn.responsiveSlides = function (options) {

    // Default settings
    var settings = $.extend({
      "auto": true,             // Boolean: Animate automatically, true or false
      "speed": 1000,            // Integer: Speed of the transition, in milliseconds
      "timeout": 4000,          // Integer: Time between slide transitions, in milliseconds
      "pager": false,           // Boolean: Show pager, true or false
      "nav": false,             // Boolean: Show navigation, true or false
      "prevText": "Previous",   // String: Text for the "previous" button
      "nextText": "Next",       // String: Text for the "next" button
      "maxwidth": "",           // Integer: Max-width of the slideshow, in pixels
      "controls": "",           // Selector: Where controls should be appended to, default is after the <ul>
      "namespace": "rslides"    // String: change the default namespace used
    }, options);

    return this.each(function () {

      // Index for namespacing
      i++;

      var $this = $(this),

        // Local variables
        selectTab,
        startCycle,
        restartCycle,
        rotate,
        $tabs,

        // Helpers
        index = 0,
        $slide = $this.children(),
        length = $slide.size(),
        fadetime = parseFloat(settings.speed),
        maxw = parseFloat(settings.maxwidth),

        // Namespacing
        namespace = settings.namespace,
        namespaceIdx = namespace + i,

        // Classes
        navClass = namespace + "_nav " + namespaceIdx + "_nav",
        activeClass = namespace + "_here",
        visibleClass = namespaceIdx + "_on",
        slideClassPrefix = namespaceIdx + "_s",

        // Pager
        $pager = $("<ul class='" + namespace + "_tabs " + namespaceIdx + "_tabs' />"),

        // Styles for visible and hidden slides
        visible = {"float": "left", "position": "relative"},
        hidden = {"float": "none", "position": "absolute"},

        // Fading animation
        slideTo = function (idx) {
          $this.trigger(namespace + "-before");
          $slide
            .stop()
            .fadeOut(fadetime, function () {
              $(this)
                .removeClass(visibleClass)
                .css(hidden);
            })
            .eq(idx)
            .fadeIn(fadetime, function () {
              $(this)
                .addClass(visibleClass)
                .css(visible)
                .trigger(namespace + "-after");
              index = idx;
            });
        };

      // Only run if there's more than one slide
      if ($slide.size() > 1) {

        // Add ID's to each slide
        $slide.each(function (i) {
          this.id = slideClassPrefix + i;
        });

        // Add max-width and classes
        $this.addClass(namespace + " " + namespaceIdx);
        if (options && options.maxwidth) {
          $this.css("max-width", maxw);
        }

        // Hide all slides, then show first one
        $slide
          .hide()
          .eq(0)
          .addClass(visibleClass)
          .css(visible)
          .show();

        // Pager
        if (settings.pager === true) {
          var tabMarkup = [];
          $slide.each(function (i) {
            var n = i + 1;
            tabMarkup +=
              "<li>" +
              "<a href='#' class='" + slideClassPrefix + n + "'>" + n + "</a>" +
              "</li>";
          });
          $pager.append(tabMarkup);

          $tabs = $pager.find("a");

          // Inject pager
          if (options.controls) {
            $(settings.controls).append($pager);
          } else {
            $this.after($pager);
          }

          // Select pager item
          selectTab = function (idx) {
            $tabs
              .closest("li")
              .removeClass(activeClass)
              .eq(idx)
              .addClass(activeClass);
          };
        }

        // Auto cycle
        if (settings.auto === true) {

          startCycle = function () {
            rotate = setInterval(function () {
              var idx = index + 1 < length ? index + 1 : 0;

              // Remove active state and set new if pager = "true"
              if (settings.pager === true) {
                selectTab(idx);
              }

              slideTo(idx);
            }, parseFloat(settings.timeout));
          };

          // Init cycle
          startCycle();
        }

        // Restarting cycle
        restartCycle = function () {
          if (settings.auto === true) {
            // Stop
            clearInterval(rotate);
            // Restart
            startCycle();
          }
        };

        // Pager click event handler
        if (settings.pager === true) {
          $tabs.bind("click", function (e) {
            e.preventDefault();
            restartCycle();

            // Get index of clicked tab
            var idx = $tabs.index(this);

            // Break if element is already active or currently animated
            if (index === idx || $("." + visibleClass + ":animated").length) {
              return;
            }

            // Remove active state from old tab and set new one
            selectTab(idx);

            // Do the animation
            slideTo(idx);
          })
            .eq(0)
            .closest("li")
            .addClass(activeClass);
        }

      }

      // Navigation
      if (settings.nav === true) {
        var navMarkup =
          "<a href='#' class='" + navClass + " prev'>" + settings.prevText + "</a>" +
          "<a href='#' class='" + navClass + " next'>" + settings.nextText + "</a>";

        // Inject navigation
        if (options.controls) {
          $(settings.controls).append(navMarkup);
        } else {
          $this.after(navMarkup);
        }

        var $trigger = $("." + namespaceIdx + "_nav"),
          $prev = $("." + namespaceIdx + "_nav.prev");

        // Click event handler
        $trigger.bind("click", function (e) {
          e.preventDefault();

          // Prevent clicking if currently animated
          if ($("." + visibleClass + ":animated").length) {
            return;
          }

          // Determine where to slide
          var idx = $slide.index($("." + visibleClass)),
            prevIdx = idx - 1,
            nextIdx = idx + 1 < length ? index + 1 : 0;

          // Go to slide
          slideTo($(this)[0] === $prev[0] ? prevIdx : nextIdx);
          if (settings.pager === true) {
            selectTab($(this)[0] === $prev[0] ? prevIdx : nextIdx);
          }

          restartCycle();
        });
      }

      // Max-width fallback
      if (typeof document.body.style.maxWidth === "undefined" && options && options.maxwidth) {
        var widthSupport = function () {
          $this.css("width", "100%");
          if ($this.width() > maxw) {
            $this.css("width", maxw);
          }
        };

        // Init fallback
        widthSupport();
        $(window).bind("resize", function () {
          widthSupport();
        });
      }

    });

  };
})(jQuery, this, 0);

// My own awesome little template function
(function(a){var b=/{{\s*([\w|\.]*)\s*}}/gi;a.tpl=function(a,f){return a.replace(b,function(a,b){for(var e=b.split("."),c=f,d=0,g=e.length;d<g;d++)c=c[e[d]];return c})}})(this);

function relativeTime(date_object) {
	var relative_to = (arguments.length > 1) ? arguments[1] : new Date(),
		delta = parseInt((relative_to.getTime() - date_object) / 1000, 10);
	delta = delta + (relative_to.getTimezoneOffset() * 60);
	if (delta < 60) {
		return  'less than a minute ago' ;
	} else if(delta < 120) {
		return   'about a minute ago' ;
	} else if(delta < (60*60)) {
		return (parseInt(delta / 60, 10)).toString() + '  minutes ago ';
	} else if(delta < (120*60)) {
		return 'about an hour ago';
	} else if(delta < (24*60*60)) {
		return 'about ' + (parseInt(delta / 3600, 10)).toString() +  ' hours ago';
	} else if(delta < (48*60*60)) {
		return '1 day ago';
	} else {
		return (parseInt(delta / 86400, 10)).toString() + ' days ago';
	}
}

function parseToRelativeTime(string) {
	return relativeTime( new Date( Date.parse( string ) ) );
}

function linkifyTweet(text) {
	text = text.replace(/(https?:\/\/\S+)/gi, function (s) {
		return '<a href="' + s + '">' + s + '</a>';
	});
	text = text.replace(/(^|)@(\w+)/gi, function (s) {
		return '<a href="http://twitter.com/' + s + '">' + s + '</a>';
	});
	text = text.replace(/(^|)#(\w+)/gi, function (s) {
		return '<a href="http://search.twitter.com/search?q=' + s.replace(/#/,'%23') + '">' + s + '</a>';
	});
	return text;
}
(function() {
/*global $, tpl, parseToRelativeTime, linkifyTweet, Galleria, Modernizr */
'use strict';

//$('#main').prepend('Built: ' + new Date().toString());
/*
$.ajaxSetup({
	// cache the results in localStorage :)
	//localCache: true
});
*/

var ltIE9 = $.browser.msie && parseInt( $.browser.version, 10 ) < 9;

function loadGitHubUserInfo( date ) {
	var template = 'I have <a href="https://github.com/sindresorhus">{{public_repos}} repos</a> and <a href="https://gist.github.com/sindresorhus">{{public_gists}} gists</a> on GitHub, and was last active {{last_active}}.';

	$.getJSON('https://api.github.com/users/sindresorhus?callback=?', function( response ) {
		var data = response.data;
		data.last_active = $.trim( date );
		$('#github-userinfo').html( tpl( template, data ) );
	});
}

function loadGitHubRepos() {
	var $githubRepos = $('#github-repos'),
		template = '<li class="tip" data-placement="left" title="Updated {{updated}}<br />Created {{created}}"><h4><a href="{{html_url}}">{{name}}</a></h4><p>{{description}}</p></li>';

	$.getJSON('https://api.github.com/users/sindresorhus/repos?per_page=20&callback=?', function( response ) {
		var data = response.data.reverse(),
			out = [],
			i = 0,
			l = data.length;

		for ( ; i < l; i++ ) {
			var item = data[i];

			if ( item.fork ) {
				continue;
			}

			if ( item.name === 'sindresorhus.github.com' ) {
				item.description = 'The website you\'re currently viewing';
			}

			item.updated = parseToRelativeTime( item.updated_at );
			item.created = parseToRelativeTime( item.created_at );
			out.push( tpl( template, item ) );
		}

		$githubRepos.html( out.join('') );
	})
	.error(function() {
		$githubRepos.html('<li>Couldn\'t load GitHub repositories.</li>');
	});
}

function loadGitHubActivities() {
	var $githubActivities = $('#github-activities'),
		template = '<li class="tip" data-placement="left" title="{{publishedDate}}"><a href="{{link}}">{{title}}</a></li>',
		feed = 'http://github.com/sindresorhus.atom',
		key = 'ABQIAAAAjzaY8k8IJXZ_VHKx4AWVfhTGq4U4uw8C_FNhCjfPG8xBWUDyARQnxt6hDSJCS0Oia3bBYlq1ZiEygA',
		url = 'https://ajax.googleapis.com/ajax/services/feed/load?callback=?&num=5&output=json&v=1.0&q=' + encodeURIComponent( feed );

	// Only use the key when live
	if ( window.location.hostname === 'sindresorhus.com' ) {
		url += '&key=' + key;
	}

	$.getJSON( url, function( response ) {
		var data = response.responseData.feed.entries,
			out = [],
			i = 0,
			l = data.length;

		for ( ; i < l; i++ ) {
			var item = data[i];
			item.publishedDate = parseToRelativeTime( item.publishedDate );
			// Remove my username and uppercase the first letter
			item.title = item.title.replace(/sindresorhus (\w)(\w*)/, function( str, m1, m2 ) {
				return m1.toUpperCase() + m2;
			});
			out.push( tpl( template, item ) );
		}

		$githubActivities.html( out.join('') );
		// Need to load the user info after the repos, since we need the last active date.
		loadGitHubUserInfo( data[0].publishedDate );
	})
	.error(function() {
		$githubActivities.html('<li>Couldn\'t load GitHub activities.</li>');
	});
}

function loadTweets() {
	var $twitterActivities = $('#twitter-activities'),
		template = '<li class="tip" data-placement="right" title="{{created_at}}">{{text}}</li>';

	$.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=sindresorhus&count=4&trim_user=true&callback=?', function( response ) {
		var data = response,
			out = [],
			i = 0,
			l = data.length;

		for ( ; i < l; i++ ) {
			var item = data[i];
			item.created_at = parseToRelativeTime( item.created_at );
			item.text = linkifyTweet( item.text );
			out.push( tpl( template, item ) );
		}

		$twitterActivities.html( out.join('') );
	})
	.error(function() {
		$twitterActivities.html('<li>Couldn\'t load tweets.</li>');
	});
}

$(function() {

	loadGitHubRepos();
	loadGitHubActivities();
	loadTweets();

	$('#social-icons').find('.email')
		.attr( 'href', 'mailto:sindresorhus#gmail.com'.replace('#', '@') );

	if ( !Modernizr.touch ) {
		$('.tip, #social-icons a').tooltip();
		$('#projects, #activities').tooltip({
			selector: '.tip'
		});

		// The slideshow is heavy, so don't load it in <IE9
		if ( !ltIE9 ) {
			$('#slides').responsiveSlides();
		}

		// Social icon animation
		$('#social-icons li a').each(function() {
			$(this).css('background', 'none')
			.html('<div class="front"></div><div class="bottom"></div>')
			.gfxCube({
				width: 48,
				height: 48
			});
		})
		.hover(function() {
			$(this).trigger('cube', 'bottom');
		}, function() {
			$(this).trigger('cube', 'front');
		})
		.click(function(e) {
			if ( this.className === 'email' ) {
				e.stopPropagation();
			} else {
				$(this).gfxExplodeOut({
					reset: false
				}).trigger('mouseout');
			}
		});
	}

});

})();