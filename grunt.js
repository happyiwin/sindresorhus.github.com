/*global config:true, task:true, file:true, log:true*/
config.init({
	files: [
		'js/jquery.easing.min.js',
		'js/jquery.shuffle.js',
		'js/jquery-ajax-localstorage-cache.js',
		'js/bootstrap-transition.js',
		'js/bootstrap-collapse.js',
		'js/bootstrap-modal.js',
		'js/bootstrap-tooltip.js',
		'js/bootstrap-carousel.js',
		'js/gfx.js',
		'js/gfx.cube.js',
		'galleria/galleria.js',
		'js/plugins.js',
		'js/script.js'
	],
	css_files: 'dist/style.css',
	concat: {
		'dist/combined.js': ['<config:files>']
	},
	min: {
		'dist/combined.js': ['<config:files>']
	},
	less: {
		// LESS needs better support for relative imports before this can be used
		'dist/combined.css': 'less/style.less'
	},
	css_min: {
		'dist/combined.css': 'dist/style.css'
	},
	watch: {
		files: ['<config:files>', '<config:css_files'],
		tasks: 'default'
	},
	sqwish: {
		strict: false
	}
});

task.registerTask('default', 'concat');
task.registerTask('prod', 'min css_min');

task.registerBasicTask( 'css_min', 'Minify CSS files with Sqwish.', function( data, name ) {
	var files = file.expand( data );
	var max = task.helper( 'concat', files );
	var min = require('sqwish').minify( max, config('sqwish').strict );
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