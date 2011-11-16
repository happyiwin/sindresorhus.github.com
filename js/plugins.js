// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
log.history = log.history || [];   // store logs to an array for reference
log.history.push(arguments);
if(this.console) {
	arguments.callee = arguments.callee.caller;
	var newarr = [].slice.call(arguments);
	(typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
}
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());



// TODO: report bug with using Twipsy live and elementOptions. Their overwriting each others option.placement. //twipsy overrides eachothers gravity if live is on, and elementOptions is overriden.
// add abiltity to set Tipsy gravity in element data attribute
$.fn.twipsy.elementOptions = function(elem, options) {
	options.placement = $(elem).data('twipsy-placement') || options.placement;
	return options;
};

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