var elixir = require('laravel-elixir');
var theme = 'wave';
elixir.config.assetsPath = './';
elixir.config.publicPath = './';
process.env.DISABLE_NOTIFIER = true;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Statamic theme. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
		.sass(theme + '.scss', 'css/' + theme + '.css')
    	.browserSync({
    		proxy: "localhost/new",
    		files: [
                '**/*.html',
                'css/*.css',
                'js/*.js'
            ]
        });
});
