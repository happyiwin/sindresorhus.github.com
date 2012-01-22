/*global config:true, task:true*/
config.init({
	files: [
		'js/jquery.easing.min.js',
		'js/jquery.shuffle.js',
		'js/jquery.xdomainajax.js',
		'js/bootstrap-modal.js',
		'js/bootstrap-twipsy.js',
		'js/bootstrap-popover.js',
		'js/gfx.js',
		'js/gfx.cube.js',
		'galleria/galleria.js',
		'galleria/themes/sindresorhus/galleria.sindresorhus.js',
		'js/plugins.js',
		'js/script.js'
	],
	concat: {
		'dist/combined.js': ['<config:files>']
	},
	min: {
		'dist/combined.js': ['<config:files>']
	},
		less: {
		'dist/combined.css': 'less/style.less'
	},
	css_min: {
		'dist/combined.css': ['css/combined.css']
	},
	watch: {
		files: '<config:files>',
		tasks: 'default'
	},
	sqwish: {
		strict: true
	}
});

// Default task.
task.registerTask('default', 'concat less');
task.registerTask('prod', 'min less css_min');

task.registerBasicTask( 'css_min', 'Minify CSS files with Sqwish.', function( data, name ) {
	var files = file.expand( data );
	var max = task.helper( 'concat', files );
	var min = require('sqwish').minify( max, config('sqwish').strict );
	min = task.helper( 'gzip', min );
	file.write( name, min );
	if ( task.hadErrors() ) {
		return false;
	}
	log.writeln( 'File "' + name + '" created.' );
	task.helper( 'min_max_info', min, max );
});

task.registerBasicTask( 'less', 'Compile LESS files.', function( data, name ) {
	var done = this.async();
	var less = require('less');
	var lessFile = file.read( data );
	less.render( lessFile, function( e, css ) {
		file.write( name, css );
		//file.write( name, css.toCSS() );
		if ( task.hadErrors() ) {
			return false;
		}
		log.writeln( 'File "' + name + '" created.' );
		done();
	});
});