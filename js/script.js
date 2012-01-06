/*
Author: Sindre Sorhus
*/

var ltIE9 = $.browser.msie && parseInt( $.browser.version, 10 ) < 9;
$(function() {

	// get my repositories from GitHub
	var $githubRepos = $('#github-repos');
	$.getJSON('https://api.github.com/users/sindresorhus/repos?per_page=20&callback=?', function(response) {
		var data = response.data.reverse(),
			output = [];
		for ( var i = 0, len = data.length; i < len; i++ ) {
			var item = data[i];
			if ( !item.fork ) {
				var updated = parseToRelativeTime( item.updated_at ),
					created = parseToRelativeTime( item.created_at ),
					description = item.name === 'sindresorhus.github.com' ? 'The website you\'re currently viewing' : item.description;
				output.push('<li class="tip" data-placement="left" title="Updated ' + updated + '<br />Created ' + created + '"><h4><a href="' + item.html_url + '">' + item.name + '</a></h4><p>' + description + '</p></li>');
			}
		}
		$githubRepos.html( output.join('') );
	}).error(function() {
		$githubRepos.html('<li>Couldn\'t load GitHub repositories.</li>');
	});

	// get my activities from GitHub, using Google Feed proxy, since it's originally an ATOM feed
	var $githubActivities = $('#github-activities'),
		feed = 'http://github.com/sindresorhus.atom',
		key = 'ABQIAAAAjzaY8k8IJXZ_VHKx4AWVfhTGq4U4uw8C_FNhCjfPG8xBWUDyARQnxt6hDSJCS0Oia3bBYlq1ZiEygA',
		url = 'https://ajax.googleapis.com/ajax/services/feed/load?num=3&output=json&v=1.0&q=' + encodeURIComponent( feed );
		// only use the key when live
		url += window.location.hostname === 'sindresorhus.com' ? '&key=' + key : '';
		url += '&callback=?';
	$.getJSON(url, function(response) {
		var data = response.responseData.feed.entries,
			output = [];
		for ( var i = 0, len = data.length; i < len; i++ ) {
			var item = data[i],
				timeago = parseToRelativeTime( item.publishedDate ),
				title = item.title.replace('sindresorhus ', '');
			output.push('<li class="tip" data-placement="left" title="' + timeago + '"><h5><a href="' + item.link + '">' + title + '</a></h5>' + item.contentSnippet + '</li>');
		}
		$githubActivities.html( output.join('') );
	}).error(function() {
		$githubActivities.html('<li>Couldn\'t load GitHub activities.</li>');
	});

	// get my latest tweets
	var $twitterActivities = $('#twitter-activities');
	$.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=sindresorhus&count=5&trim_user=true&callback=?', function(response) {
		var data = response,
			output = [];
		for ( var i = 0, len = data.length; i < len; i++ ) {
			var item = data[i],
				timeago = parseToRelativeTime( item.created_at ),
				linkifiedTweet = linkifyTweet( item.text );
			output.push('<li class="tip" data-placement="right" title="' + timeago + '">' + linkifiedTweet + '</li>');
		}
		$twitterActivities.html( output.join('') );
	}).error(function() {
		$twitterActivities.html('<li>Couldn\'t load tweets.</li>');
	});

	$('.tip, #social-icons a').twipsy({
		live: true,
		html: true,
		offset: 4
	});

	// The slideshow is heavy, so don't load it in <IE9.
	if ( !ltIE9 ) {
		Galleria.loadTheme('galleria/themes/sindresorhus/galleria.sindresorhus.js');
		$('#galleria').shuffle().galleria();
	}

	// Social icon animation
	$('#social-icons li a').each(function() {
		$(this).html('<div class="front"></div><div class="bottom">').gfxCube({
			width: 48,
			height: 48
		});
	}).hover(function() {
		$(this).trigger('cube', 'bottom');
	}, function() {
		$(this).trigger('cube', 'front');
	}).click(function() {
		if ( this.className === 'email' ) {
			var url = 'http://www.google.com/recaptcha/mailhide/d?k=01Ha4vkxTcdPC0z-iE6EjA5Q==&c=691OFr1i5ti5McPYj2QLgu8QWTfgbdNriQP_exhVo4A=';
			$('#email-modal').modal('show').find('iframe').prop( 'src', url );
			return false;
		} else {
			$(this).gfxExplodeOut({
				reset: false
			}).trigger('mouseout');
		}
	});

});