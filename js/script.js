/* Author: Sindre Sorhus

*/
$(function() {

	$('#github-repositories').getRepositories();
	$('#github-forks').getRepositories(true);

	// get my activities from GitHub, using Google Feed proxy, since it's orginally an atom feed
	var $githubActivities = $('#github-activities'),
		feed = 'http://github.com/sindresorhus.atom',
		key = 'ABQIAAAAjzaY8k8IJXZ_VHKx4AWVfhTGq4U4uw8C_FNhCjfPG8xBWUDyARQnxt6hDSJCS0Oia3bBYlq1ZiEygA',
		url = 'https://ajax.googleapis.com/ajax/services/feed/load?num=8&output=json&v=1.0&q=' + encodeURIComponent( feed );
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
			output.push('<li class="tip" data-twipsy-placement="left" title="' + timeago + '"><h5><a href="' + item.link + '">' + title + '</a></h5>' + item.contentSnippet + '</li>');
		}
		$githubActivities.html( output.join('') );
	}).error(function() {
		$githubActivities.html('<li>Couldn\'t load GitHub activities.</li>');
	});
	
	// get my latest tweets
	var $twitterActivities = $('#twitter-activities');
	$.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=sindresorhus&count=10&trim_user=true&callback=?', function(response) {
		var data = response,
			output = [];
		for ( var i = 0, len = data.length; i < len; i++ ) {
			var item = data[i],
				timeago = parseToRelativeTime( item.created_at ),
				linkifiedTweet = linkifyTweet( item.text );
			output.push('<li class="tip" data-twipsy-placement="right" title="' + timeago + '">' + linkifiedTweet + '</li>');
		}
		$twitterActivities.html( output.join('') );
	}).error(function() {
		$twitterActivities.html('<li>Couldn\'t load tweets.</li>');
	});
	
	$('.tip').twipsy({
		live: true,
		html: true,
		offset: 4
	});

});