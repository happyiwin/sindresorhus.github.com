# sindresorhus.com

Personal website of Sindre Sorhus.

## Run

### Prerequisites
- jekyll
- lessc (LESS compiler)  
I use [LiveReload](http://livereload.com) to trigger the less compiler on file change.

### Compile
- Go to the current folder in Terminal and paste in: `jekyll --server --auto`. This will make it auto update on file change.
- Open a new Terminal tab, go to the current folder, and then paste in: `lessc less/style.less > css/style.css` to compile once. However, the easiest way is to configure LiveReload to automagically compile it for you on file change.

## Built with
- [jQuery](http://jquery.com)
- [HTML5 Boilerplate](http://html5boilerplate.com)
- [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
- [jekyll](http://jekyllrb.com)
- [LESS](http://lesscss.org)

## Attribution
- [Social Media Icons](http://paulrobertlloyd.com/2009/06/social_media_icons)

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
(c) [Sindre Sorhus](http://sindresorhus.com)