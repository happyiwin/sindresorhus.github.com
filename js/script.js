(function() {
/*global t:true, parseToRelativeTime:true, linkifyTweet:true, Galleria:true, Modernizr:true*/
"use strict";

//$('#main').prepend('Built: ' + new Date().toString());
/*
$.ajaxSetup({
	// cache the results in localStorage :)
	//localCache: true
});
*/

var ltIE9 = $.browser.msie && parseInt( $.browser.version, 10 ) < 9;

function loadGitHubUserInfo(date) {
	var temp = 'I have <a href="https://github.com/sindresorhus">{{public_repos}} repos</a> and <a href="https://gist.github.com/sindresorhus">{{public_gists}} gists</a> on GitHub, and was last active {{last_active}}.';
	$.getJSON('https://api.github.com/users/sindresorhus?callback=?', function(response) {
		var data = response.data;
		data.last_active = $.trim( date );
		$('#github-userinfo').html( t( temp, data ) );
	});
}

function loadGitHubRepos() {
	var $githubRepos = $('#github-repos');
	var temp = '<li class="tip" data-placement="left" title="Updated {{updated}}<br />Created {{created}}"><h4><a href="{{html_url}}">{{name}}</a></h4><p>{{description}}</p></li>';
	$.getJSON( 'https://api.github.com/users/sindresorhus/repos?per_page=20&callback=?', function(response) {
		var data = response.data.reverse();
		var out = [];
		for ( var i = 0, l = data.length; i < l; i++ ) {
			var item = data[i];
			if ( item.fork ) {
				continue;
			}
			if ( item.name === 'sindresorhus.github.com' ) {
				item.description = 'The website you\'re currently viewing';
			}
			item.updated = parseToRelativeTime( item.updated_at );
			item.created = parseToRelativeTime( item.created_at );
			out.push( t( temp, item ) );
		}
		$githubRepos.html( out.join('') );
	}).error(function() {
		$githubRepos.html('<li>Couldn\'t load GitHub repositories.</li>');
	});
}

function loadGitHubActivities() {
	var $githubActivities = $('#github-activities');
	var temp = '<li class="tip" data-placement="left" title="{{publishedDate}}"><a href="{{link}}">{{title}}</a></li>';
	var feed = 'http://github.com/sindresorhus.atom';
	var key = 'ABQIAAAAjzaY8k8IJXZ_VHKx4AWVfhTGq4U4uw8C_FNhCjfPG8xBWUDyARQnxt6hDSJCS0Oia3bBYlq1ZiEygA';
	var url = 'https://ajax.googleapis.com/ajax/services/feed/load?callback=?&num=5&output=json&v=1.0&q=' + encodeURIComponent( feed );
	// Only use the key when live
	if ( window.location.hostname === 'sindresorhus.com' ) {
		url += '&key=' + key;
	}
	$.getJSON( url, function(response) {
		var data = response.responseData.feed.entries;
		var out = [];
		for ( var i = 0, l = data.length; i < l; i++ ) {
			var item = data[i];
			item.publishedDate = parseToRelativeTime( item.publishedDate );
			// Remove my username and uppercase the first letter
			item.title = item.title.replace(/sindresorhus (\w)(\w*)/, function(str, m1, m2) {
				return m1.toUpperCase() + m2;
			});
			out.push( t( temp, item ) );
		}
		$githubActivities.html( out.join('') );
		// Need to load the user info after the repos since we need the last active date
		loadGitHubUserInfo( data[0].publishedDate );
	}).error(function() {
		$githubActivities.html('<li>Couldn\'t load GitHub activities.</li>');
	});
}

function loadTweets() {
	var $twitterActivities = $('#twitter-activities');
	var temp = '<li class="tip" data-placement="right" title="{{created_at}}">{{text}}</li>';
	$.getJSON( 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=sindresorhus&count=4&trim_user=true&callback=?', function(response) {
		var data = response;
		var out = [];
		for ( var i = 0, l = data.length; i < l; i++ ) {
			var item = data[i];
			item.created_at = parseToRelativeTime( item.created_at );
			item.text = linkifyTweet( item.text );
			out.push( t( temp, item ) );
		}
		$twitterActivities.html( out.join('') );
	}).error(function() {
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
			Galleria.loadTheme('galleria/themes/sindresorhus/galleria.sindresorhus.js');
			$('#galleria').shuffle().galleria({
				debug: false
			});
		}
		// Social icon animation
		$('#social-icons li a').each(function() {
			$(this).css('background', 'none')
			.html('<div class="front"></div><div class="bottom"></div>')
			.gfxCube({
				width: 48,
				height: 48
			});
		}).hover(function() {
			$(this).trigger('cube', 'bottom');
		}, function() {
			$(this).trigger('cube', 'front');
		}).click(function(e) {
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